import { Phone, CheckCircle2, Languages } from 'lucide-react';
import { CLINIC_INFO } from '../constants';
import CTASection from '../components/CTASection';
import { useI18n } from '../context/LanguageContext';

export default function Korean() {
  const { messages } = useI18n();
  const k = messages.koreanPage;

  return (
    <div className="flex flex-col w-full">
      <section className="bg-white pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="max-content">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-20">
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center">
                  <Languages className="w-8 h-8 text-secondary" />
                </div>
                <span className="text-lg font-bold text-secondary">{k.hubLabel}</span>
              </div>
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-3">
                {k.officialLabel}
              </p>
              <h1 className="text-3xl md:text-5xl font-extrabold text-primary mb-3 leading-tight tracking-tight">
                {CLINIC_INFO.name}
              </h1>
              <p className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 leading-snug" lang="ko">
                {CLINIC_INFO.nameKo}
              </p>
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium">{k.intro}</p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-bg-alt p-10 rounded-[3rem] border border-slate-100 shadow-xl">
                <h2 className="text-2xl font-bold text-primary mb-2">{k.drTitle}</h2>
                <p className="text-sm text-slate-500 mb-6">{k.drSubtitle}</p>
                <p className="text-lg text-slate-700 leading-relaxed mb-8">{k.drBio}</p>
                <div className="space-y-5">
                  {k.bullets.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center p-4 bg-white rounded-2xl border border-slate-100 shadow-sm"
                    >
                      <CheckCircle2 className="w-6 h-6 text-accent-green mr-4 shrink-0" />
                      <span className="font-bold text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="max-prose-content">
            <div className="prose prose-slate max-w-none mb-20">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">{k.topicsTitle}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {k.topics.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center p-5 bg-slate-50 rounded-2xl border border-slate-100"
                  >
                    <div className="w-2 h-2 bg-cta rounded-full mr-4" />
                    <span className="font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-100 border border-slate-200 text-primary p-10 md:p-12 rounded-[3rem] text-center relative">
              <h3 className="text-2xl font-bold mb-4">{k.contactTitle}</h3>
              <p className="text-lg text-slate-600 mb-2 max-w-xl mx-auto leading-relaxed">{k.contactBody}</p>
              <p className="text-base text-slate-500 mb-8">
                {k.office}{' '}
                <a href={`tel:${CLINIC_INFO.phone}`} className="font-bold text-cta underline underline-offset-4">
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </p>
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-bold rounded-xl hover:bg-white transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                {k.callBtn}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection title={k.ctaEndTitle} subtitle={k.ctaEndBody} footerNote={null} />
    </div>
  );
}
