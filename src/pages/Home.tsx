import { Link } from 'react-router-dom';
import {
  Phone,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  Award,
  ArrowRight,
  Mail,
  Heart,
  Sparkles,
} from 'lucide-react';
import { CLINIC_INFO, DR_CHAE_PHOTO_URL, HOME_HERO_IMAGE_URL, clinicGoogleMapsEmbedSrc } from '../constants';
import { useI18n } from '../context/LanguageContext';

export default function Home() {
  const { messages, locale } = useI18n();
  const h = messages.home;

  return (
    <div className="flex flex-col w-full">
      <section className="relative bg-white pt-16 pb-20 md:pt-32 md:pb-40 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50" />
        <div className="max-content relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-4">
                {h.heroKicker}
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-2 leading-[1.1] tracking-tight">
                {CLINIC_INFO.name}
              </h1>
              <p
                lang="ko"
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-6 leading-snug"
              >
                {CLINIC_INFO.nameKo}
              </p>

              <h2
                lang={locale === 'ko' ? 'ko' : undefined}
                className="text-2xl md:text-3xl font-bold text-primary mb-4 leading-snug max-w-2xl mx-auto lg:mx-0"
              >
                {h.heroHeadline}
              </h2>
              <p
                lang={locale === 'ko' ? 'ko' : undefined}
                className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                {h.heroIntro}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary text-white text-base font-bold rounded-2xl hover:bg-slate-800 transition-colors shadow-md whitespace-nowrap"
                >
                  {h.ctaAbout}
                </Link>
                <Link
                  to="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-primary border-2 border-slate-200 text-base font-bold rounded-2xl hover:bg-slate-50 transition-colors whitespace-nowrap"
                >
                  {h.ctaServices}
                </Link>
                <Link
                  to="/korean"
                  lang="ko"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-secondary border-2 border-secondary/30 rounded-2xl hover:bg-secondary/5 transition-colors whitespace-nowrap"
                >
                  {h.ctaKoreanHub}
                </Link>
              </div>
            </div>

            <div className="flex-1 w-full max-w-xl lg:max-w-none">
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-100/50 rounded-[2.5rem] blur-2xl -z-10" />
                <img
                  src={HOME_HERO_IMAGE_URL}
                  alt={h.heroAlt}
                  className="w-full h-auto rounded-[2rem] shadow-2xl object-cover object-center aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-8 sm:pt-10 md:pt-12 pb-16 md:pb-24 lg:pb-32 bg-white">
        <div className="max-content">
          <div className="text-center mb-12 md:mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 md:mb-5">{h.servicesTitle}</h2>
            <div className="mx-auto w-full max-w-3xl px-2 text-center md:flex md:justify-center md:overflow-x-auto md:[-webkit-overflow-scrolling:touch]">
              <p className="text-sm sm:text-[0.9375rem] md:text-base text-slate-600 font-medium leading-snug whitespace-normal md:whitespace-nowrap">
                {h.servicesTopics}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {h.serviceCards.map((service, i) => (
              <Link
                key={i}
                to={service.link}
                className="group p-8 bg-white border border-slate-100 rounded-[2rem] card-shadow hover:border-cta/30 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-cta group-hover:text-white transition-all mb-6">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-primary group-hover:text-cta transition-colors mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-slate-50 text-primary font-bold rounded-full hover:bg-slate-100 transition-all"
            >
              {h.viewAllServices} <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-alt border-y border-slate-200">
        <div className="max-content">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">{h.whyTitle}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{h.whyLead}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {h.whyCards.map((item, i) => {
              const WhyIcon = [Heart, Award, Sparkles, ShieldCheck][i];
              return (
                <div
                  key={i}
                  className="p-8 bg-white rounded-[2rem] border border-slate-100 card-shadow text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-cta/10 flex items-center justify-center mx-auto mb-5">
                    <WhyIcon className="w-7 h-7 text-cta" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-alt">
        <div className="max-content">
          <div className="bg-white p-8 md:p-16 rounded-[3rem] card-shadow border border-slate-100">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full lg:w-1/3">
                <div className="relative aspect-square max-w-[320px] mx-auto">
                  <div className="absolute -inset-4 bg-secondary/10 rounded-[3rem] -z-10 rotate-6" />
                  <img
                    src={DR_CHAE_PHOTO_URL}
                    alt="Dr. Steven Chae, MD"
                    className="w-full h-full object-cover object-top rounded-[2.5rem] shadow-xl"
                  />
                </div>
              </div>
              <div className="w-full lg:w-2/3 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">{h.doctorMeet}</h2>
                <p className="text-xl text-secondary font-bold mb-6">{h.doctorRole}</p>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed">{h.doctorBio}</p>
                <Link
                  to="/dr-steven-chae-plano"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-bold rounded-2xl hover:bg-slate-50 transition-all"
                >
                  {h.doctorCta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 md:mb-5">{h.insuranceLabel}</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
            {h.insuranceBody}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <span className="text-xl font-black text-slate-400">UnitedHealthcare</span>
            <span className="text-xl font-black text-slate-400">Medicare</span>
            <span className="text-xl font-black text-slate-400">Molina</span>
            <span className="text-xl font-black text-slate-400">UHC Advantage</span>
          </div>
          <p className="mt-8 text-sm text-slate-500">
            {h.insuranceViewList}{' '}
            <Link to="/insurance-payments" className="text-cta underline">
              {h.insuranceViewListLink}
            </Link>
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-content">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">{h.contactTitle}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{h.contactLead}</p>
          </div>
          <div className="bg-bg-alt rounded-[3rem] overflow-hidden border border-slate-200 flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 h-80 lg:min-h-[28rem] lg:h-auto relative bg-slate-200">
              <iframe
                title={`${CLINIC_INFO.name} — ${CLINIC_INFO.address}`}
                src={clinicGoogleMapsEmbedSrc()}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="w-full lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <div className="space-y-10">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm mr-5 shrink-0">
                    <MapPin className="w-6 h-6 text-cta" />
                  </div>
                  <div>
                    <p className="font-bold text-black text-lg mb-1">{h.addressLabel}</p>
                    <p className="text-black leading-relaxed">{CLINIC_INFO.address}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm mr-5 shrink-0">
                    <Phone className="w-6 h-6 text-cta" />
                  </div>
                  <div>
                    <p className="font-bold text-black text-lg mb-1">{h.phoneLabel}</p>
                    <p className="text-black leading-relaxed">{CLINIC_INFO.phoneDisplay}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm mr-5 shrink-0">
                    <Mail className="w-6 h-6 text-cta" />
                  </div>
                  <div>
                    <p className="font-bold text-black text-lg mb-1">{h.emailLabel}</p>
                    <p className="text-black leading-relaxed break-all">{CLINIC_INFO.email}</p>
                  </div>
                </div>
              </div>
              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-lg"
                >
                  {h.getDirections}
                </a>
                <Link
                  to="/location-hours"
                  className="flex-1 inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-slate-200 text-primary font-bold rounded-2xl hover:bg-slate-50 transition-all"
                >
                  {h.officeHoursBtn}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
