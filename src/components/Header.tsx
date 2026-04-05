import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { CLINIC_INFO } from '../constants';
import { useI18n } from '../context/LanguageContext';
import { cn } from '../lib/utils';
import type { Locale } from '../i18n/messages';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const { locale, setLocale, messages } = useI18n();

  const navLinks = [
    { name: messages.nav.home, path: '/' },
    { name: messages.nav.about, path: '/about' },
    { name: messages.nav.services, path: '/services' },
    { name: messages.nav.insurance, path: '/insurance-payments' },
    { name: messages.nav.location, path: '/location-hours' },
    { name: messages.nav.korean, path: '/korean' },
  ];

  const switchLang = (l: Locale) => {
    setLocale(l);
    setIsOpen(false);
  };

  const LangToggle = ({ compact }: { compact?: boolean }) => (
    <div
      className={cn(
        'flex rounded-full border border-slate-200 p-0.5 font-bold bg-white',
        compact ? 'text-[10px]' : 'text-xs'
      )}
    >
      <button
        type="button"
        onClick={() => switchLang('en')}
        className={cn(
          compact ? 'px-2 py-1' : 'px-3 py-1.5',
          'rounded-full transition-colors',
          locale === 'en' ? 'bg-primary text-white' : 'text-slate-600 hover:text-primary'
        )}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => switchLang('ko')}
        className={cn(
          compact ? 'px-2 py-1' : 'px-3 py-1.5',
          'rounded-full transition-colors',
          locale === 'ko' ? 'bg-primary text-white' : 'text-slate-600 hover:text-primary'
        )}
      >
        {compact ? 'KO' : '한국어'}
      </button>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20 gap-3">
          <Link to="/" className="flex flex-col gap-0.5 min-w-0 shrink">
            <span className="text-xl md:text-2xl font-bold text-primary leading-tight truncate">
              {CLINIC_INFO.name}
            </span>
            <span lang="ko" className="text-xs md:text-sm font-semibold text-slate-600 leading-tight truncate">
              {CLINIC_INFO.nameKo}
            </span>
            <span className="text-[10px] md:text-xs text-secondary font-medium tracking-widest uppercase">
              Plano, Texas
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-4 lg:gap-6 shrink-0">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-cta whitespace-nowrap',
                  location.pathname === link.path ? 'text-cta' : 'text-slate-600'
                )}
              >
                {link.name}
              </Link>
            ))}
            <LangToggle />
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="inline-flex items-center justify-center px-4 py-2 border-2 border-slate-300 text-sm font-bold rounded-full text-primary hover:border-cta hover:text-cta transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 mr-2 shrink-0" />
              {CLINIC_INFO.phoneDisplay}
            </a>
          </nav>

          <div className="flex md:hidden items-center gap-2 shrink-0">
            <LangToggle compact />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-primary p-2"
              aria-label="Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'block px-3 py-3 text-base font-medium rounded-md',
                  location.pathname === link.path ? 'bg-slate-50 text-cta' : 'text-slate-600'
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="flex items-center justify-center w-full px-4 py-3 border-2 border-slate-300 text-base font-bold rounded-lg text-primary"
              >
                <Phone className="w-5 h-5 mr-2" />
                {CLINIC_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
