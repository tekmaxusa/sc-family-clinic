import { Phone } from 'lucide-react';
import { CLINIC_INFO } from '../constants';
import { useI18n } from '../context/LanguageContext';
import { cn } from '../lib/utils';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
  dark?: boolean;
  tone?: 'informational' | 'standard';
  footerNote?: string | null;
}

export default function CTASection({
  title,
  subtitle,
  className,
  dark = false,
  tone = 'informational',
  footerNote,
}: CTASectionProps) {
  const { messages } = useI18n();
  const resolvedTitle = title ?? messages.ctaDefaults.title;
  const resolvedSubtitle = subtitle ?? messages.ctaDefaults.subtitle;
  const defaultFooter = messages.ctaDefaults.footer;
  const note = footerNote === undefined ? defaultFooter : footerNote;
  const phoneLabel = messages.ctaDefaults.phoneLabel;

  return (
    <section
      className={cn(
        'section-padding',
        dark ? 'bg-primary text-white' : 'bg-bg-alt text-primary',
        className
      )}
    >
      <div className="max-content text-center max-w-3xl mx-auto">
        <h2
          className={cn(
            'text-2xl md:text-3xl font-bold mb-4 tracking-tight',
            dark ? 'text-white' : 'text-primary'
          )}
        >
          {resolvedTitle}
        </h2>
        <p
          className={cn(
            'text-base md:text-lg mb-8 leading-relaxed',
            dark ? 'text-slate-300' : 'text-slate-600'
          )}
        >
          {resolvedSubtitle}
        </p>

        {tone === 'standard' ? (
          <a
            href={`tel:${CLINIC_INFO.phone}`}
            className="inline-flex items-center justify-center px-8 py-4 bg-cta hover:bg-blue-700 text-white text-lg font-bold rounded-full shadow-lg transition-colors"
          >
            <Phone className="w-5 h-5 mr-2" />
            {CLINIC_INFO.phoneDisplay}
          </a>
        ) : (
          <p className={cn('text-lg', dark ? 'text-slate-200' : 'text-slate-700')}>
            <span className="opacity-90">{phoneLabel} </span>
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className={cn(
                'font-semibold underline underline-offset-4 decoration-2',
                dark ? 'text-white hover:text-slate-200' : 'text-cta hover:text-blue-800'
              )}
            >
              {CLINIC_INFO.phoneDisplay}
            </a>
          </p>
        )}

        {note ? (
          <p
            className={cn(
              'mt-8 text-sm leading-relaxed max-w-xl mx-auto',
              dark ? 'text-slate-400' : 'text-slate-500'
            )}
          >
            {note}
          </p>
        ) : null}
      </div>
    </section>
  );
}
