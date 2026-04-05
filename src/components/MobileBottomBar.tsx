import { Phone } from 'lucide-react';
import { CLINIC_INFO } from '../constants';
import { useI18n } from '../context/LanguageContext';

export default function MobileBottomBar() {
  const { messages } = useI18n();
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur border-t border-slate-200 px-4 py-3 shadow-[0_-4px_12px_rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-between gap-3 max-w-lg mx-auto">
        <div className="min-w-0 text-left">
          <p className="text-xs font-bold text-primary truncate">{CLINIC_INFO.name}</p>
          <p lang="ko" className="text-[10px] text-slate-500 truncate">
            {CLINIC_INFO.nameKo}
          </p>
          <p className="text-[10px] text-slate-400">{messages.mobile.officeLine}</p>
        </div>
        <a
          href={`tel:${CLINIC_INFO.phone}`}
          className="shrink-0 inline-flex items-center px-4 py-3 border-2 border-cta text-cta font-bold text-sm rounded-xl active:scale-[0.98] transition-transform"
        >
          <Phone className="w-4 h-4 mr-2" />
          {CLINIC_INFO.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
