import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { getMessages, type Locale, type Messages } from '../i18n/messages';

const STORAGE_KEY = 'scfc-locale';

type LanguageContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  messages: Messages;
  t: (path: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getByPath(obj: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((cur, key) => {
    if (cur !== null && typeof cur === 'object' && key in cur) {
      return (cur as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === 'undefined') return 'en';
    const s = localStorage.getItem(STORAGE_KEY);
    return s === 'ko' ? 'ko' : 'en';
  });

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = l;
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const messages = useMemo(() => getMessages(locale), [locale]);

  const t = useCallback(
    (path: string) => {
      const v = getByPath(messages, path);
      return typeof v === 'string' ? v : path;
    },
    [messages]
  );

  const value = useMemo(
    () => ({ locale, setLocale, messages, t }),
    [locale, setLocale, messages, t]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useI18n must be used within LanguageProvider');
  }
  return ctx;
}
