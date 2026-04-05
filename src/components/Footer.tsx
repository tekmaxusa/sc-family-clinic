import { Link } from 'react-router-dom';
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
    <footer className="bg-primary text-white pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-1">{CLINIC_INFO.name}</h3>
            <p lang="ko" className="text-sm font-semibold text-slate-300 mb-4">
              {CLINIC_INFO.nameKo}
            </p>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {messages.home.contactLead}
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-start">
                <span className="font-semibold mr-2 shrink-0">{messages.home.addressLabel}:</span>
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
                  className="text-slate-300 hover:text-white underline decoration-cta underline-offset-4"
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
            <h3 className="text-lg font-bold mb-4">{f.quickLinks}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="text-slate-300 hover:text-white transition-colors">
                  {f.aboutUs}
                </Link>
              </li>
              <li>
                <Link to="/korean" className="text-slate-300 hover:text-white transition-colors">
                  {messages.nav.korean}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-white transition-colors">
                  {f.ourServices}
                </Link>
              </li>
              <li>
                <Link to="/insurance-payments" className="text-slate-300 hover:text-white transition-colors">
                  {f.insurancePayments}
                </Link>
              </li>
              <li>
                <Link to="/location-hours" className="text-slate-300 hover:text-white transition-colors">
                  {f.locationHours}
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-slate-300 hover:text-white transition-colors">
                  {f.reviews}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-slate-300 hover:text-white transition-colors">
                  {f.faq}
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-slate-300 hover:text-white transition-colors">
                  {f.privacy}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{f.hoursTitle}</h3>
            <ul className="space-y-4 text-sm">
              {footerHours.map((h, i) => (
                <li key={i} className="border-b border-white/10 pb-3 last:border-0">
                  <div className="flex justify-between gap-2">
                    <span className="text-slate-300">{h.day}</span>
                    <span className="font-medium text-right">{h.time}</span>
                  </div>
                  {h.ko ? (
                    <p lang="ko" className="text-xs text-slate-500 mt-1">
                      {h.ko.day} · {h.ko.time}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
              {locale === 'ko' ? (
                <p lang="ko" className="text-xs text-slate-400 leading-relaxed">
                  {f.insuranceNote}
                </p>
              ) : (
                <p className="text-xs text-slate-400 leading-relaxed">{f.insuranceNote}</p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {CLINIC_INFO.name} ({CLINIC_INFO.nameKo}). {f.copyright}
          </p>
          <p className="mt-2">{CLINIC_INFO.address}</p>
        </div>
      </div>
    </footer>
  );
}
