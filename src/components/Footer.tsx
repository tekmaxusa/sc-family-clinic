import { CLINIC_INFO } from '../constants';
import { useI18n } from '../context/LanguageContext';

export default function Footer() {
  const { locale, messages } = useI18n();
  const f = messages.footer;

  const footerHours = CLINIC_INFO.hours.map((h, i) => {
    const ko = CLINIC_INFO.hoursKo[i];
    return { ...h, ko };
  });

  return (
    <footer className="bg-primary text-white pt-3 pb-[max(7rem,calc(5.5rem+env(safe-area-inset-bottom,0px)))] md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <h3 className="text-xl font-bold mb-0.5 text-white">{CLINIC_INFO.name}</h3>
            <p lang="ko" className="text-sm font-semibold text-white mb-3">
              {CLINIC_INFO.nameKo}
            </p>
            <div className="space-y-1.5 text-sm">
              <p className="flex items-start gap-2">
                <span className="font-semibold shrink-0">{messages.home.addressLabel}:</span>
                <span className="text-slate-300">{CLINIC_INFO.address}</span>
              </p>
              <p>
                <span className="font-semibold mr-2">{messages.home.phoneLabel}:</span>
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="text-slate-300 hover:text-white underline decoration-cta underline-offset-4"
                >
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </p>
              <p>
                <span className="font-semibold mr-2">{messages.home.emailLabel}:</span>
                <a
                  href={`mailto:${CLINIC_INFO.email}`}
                  className="text-slate-300 hover:text-white underline decoration-cta underline-offset-4 break-all"
                >
                  {CLINIC_INFO.email}
                </a>
              </p>
              <p>
                <span className="font-semibold mr-2">{messages.home.websiteLabel}:</span>
                <a
                  href={CLINIC_INFO.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white underline decoration-cta underline-offset-4"
                >
                  {CLINIC_INFO.websiteDisplay}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">{f.hoursTitle}</h3>
            <ul className="space-y-1.5 text-sm">
              {footerHours.map((h, i) => (
                <li key={i}>
                  <div className="flex justify-between gap-2">
                    <span className="text-slate-300">{h.day}</span>
                    <span className="font-medium text-right">{h.time}</span>
                  </div>
                  {h.ko ? (
                    <p lang="ko" className="text-xs text-slate-500 mt-0.5">
                      {h.ko.day} · {h.ko.time}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
            <div className="mt-3 px-3 pt-2.5 pb-1.5 bg-white/5 rounded-lg border border-white/10">
              {locale === 'ko' ? (
                <p lang="ko" className="text-xs text-slate-400 leading-relaxed mb-0">
                  {f.insuranceNote}
                </p>
              ) : (
                <p className="text-xs text-slate-400 leading-relaxed mb-0">{f.insuranceNote}</p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-white/10 text-center text-xs text-slate-400">
          <p className="leading-snug">
            © {new Date().getFullYear()} {CLINIC_INFO.name} ({CLINIC_INFO.nameKo}). {f.copyright}
          </p>
          <p className="mt-0.5 leading-snug">{CLINIC_INFO.address}</p>
        </div>
      </div>
    </footer>
  );
}
