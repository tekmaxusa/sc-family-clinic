import { Link } from 'react-router-dom';
import {
  Phone,
  CheckCircle2,
  ShieldCheck,
  Languages,
  MapPin,
  Award,
  ArrowRight,
  Mail,
  Globe,
  Heart,
  Sparkles,
  Calendar,
} from 'lucide-react';
import { CLINIC_INFO, DR_CHAE_PHOTO_URL } from '../constants';
import { useI18n } from '../context/LanguageContext';
import CTASection from '../components/CTASection';

export default function Home() {
  const { locale, messages } = useI18n();
  const h = messages.home;
  const scheduleText =
    locale === 'ko' ? CLINIC_INFO.inPersonScheduleKo : CLINIC_INFO.inPersonScheduleEn;

  const trustItems = [
    { icon: Award, text: h.trustBoard },
    { icon: Calendar, text: h.trustInPerson },
    { icon: Languages, text: h.trustBilingual },
    { icon: ShieldCheck, text: h.trustTraining },
    { icon: MapPin, text: h.trustPlano },
  ];

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
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-8 leading-snug"
              >
                {CLINIC_INFO.nameKo}
              </p>

              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {h.heroIntro}
              </p>

              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 md:p-6 mb-8 max-w-2xl mx-auto lg:mx-0 text-left">
                <div className="flex gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-cta" />
                  </div>
                  <div>
                    <p className="font-bold text-primary mb-1">{h.inPersonLabel}</p>
                    <p
                      className="text-sm text-slate-600 leading-relaxed"
                      lang={locale === 'ko' ? 'ko' : undefined}
                    >
                      {scheduleText}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-10">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-white text-slate-700 border border-slate-200">
                  <Languages className="w-3.5 h-3.5 mr-1.5 text-secondary" />
                  {h.badgeBilingual}
                </span>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-white text-slate-700 border border-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-accent-green" />
                  {h.badgeNewPatients}
                </span>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-white text-slate-700 border border-slate-200">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-medicare-green" />
                  {h.badgeInsurance}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary text-white text-base font-bold rounded-2xl hover:bg-slate-800 transition-colors shadow-md"
                >
                  {h.ctaAbout}
                </Link>
                <Link
                  to="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-primary border-2 border-slate-200 text-base font-bold rounded-2xl hover:bg-slate-50 transition-colors"
                >
                  {h.ctaServices}
                </Link>
                <Link
                  to="/korean"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-secondary border-2 border-secondary/30 rounded-2xl hover:bg-secondary/5 transition-colors"
                >
                  {h.ctaKoreanHub}
                </Link>
              </div>
              <p className="mt-6 text-sm text-slate-500">
                {h.officePhone}{' '}
                <a href={`tel:${CLINIC_INFO.phone}`} className="font-semibold text-cta hover:underline">
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </p>
            </div>

            <div className="flex-1 w-full max-w-xl lg:max-w-none">
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-100/50 rounded-[2.5rem] blur-2xl -z-10" />
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
                  alt={h.officeAlt}
                  className="w-full h-auto rounded-[2rem] shadow-2xl object-cover aspect-[4/3]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block max-w-[220px]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent-green/10 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-accent-green" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary">{h.floatingBoard}</p>
                      <p className="text-xs text-slate-500">{h.floatingFamily}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-alt py-8 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
          <div className="flex items-center justify-between min-w-[800px] md:min-w-0 gap-8">
            {trustItems.map((item, i) => (
              <div key={i} className="flex items-center space-x-2 whitespace-nowrap">
                <item.icon className="w-5 h-5 text-secondary" />
                <span className="text-sm font-bold text-slate-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-content">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">{h.servicesTitle}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-2">{h.servicesLead}</p>
            <p className="text-sm text-slate-500 max-w-2xl mx-auto mt-4">{h.servicesTopics}</p>
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
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
                  {h.doctorTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-slate-50 rounded-xl text-sm font-bold text-slate-600 border border-slate-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
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
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">{h.insuranceLabel}</p>
          <p className="text-base text-slate-600 mb-8 max-w-2xl mx-auto">{h.insuranceBody}</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all">
            <span className="text-xl font-black text-slate-700">UnitedHealthcare</span>
            <span className="text-xl font-black text-slate-700">Medicare</span>
            <span className="text-xl font-black text-slate-700">Molina</span>
            <span className="text-xl font-black text-slate-700">UHC Advantage</span>
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
            <div className="w-full lg:w-1/2 h-80 lg:h-auto bg-slate-300 relative">
              <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium bg-slate-100">
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mx-auto mb-6">
                    <MapPin className="w-8 h-8 text-cta" />
                  </div>
                  <p className="text-lg font-bold text-primary mb-2">5168 Village Creek Dr, Suite 300</p>
                  <p className="text-slate-600">Plano, TX 75093</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <div className="space-y-10">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm mr-5 shrink-0">
                    <MapPin className="w-6 h-6 text-cta" />
                  </div>
                  <div>
                    <p className="font-bold text-primary text-lg mb-1">{h.addressLabel}</p>
                    <p className="text-slate-600 leading-relaxed">{CLINIC_INFO.address}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm mr-5 shrink-0">
                    <Phone className="w-6 h-6 text-cta" />
                  </div>
                  <div>
                    <p className="font-bold text-primary text-lg mb-1">{h.phoneLabel}</p>
                    <a
                      href={`tel:${CLINIC_INFO.phone}`}
                      className="text-cta font-bold text-2xl hover:underline"
                    >
                      {CLINIC_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm mr-5 shrink-0">
                    <Mail className="w-6 h-6 text-cta" />
                  </div>
                  <div>
                    <p className="font-bold text-primary text-lg mb-1">{h.emailLabel}</p>
                    <a
                      href={`mailto:${CLINIC_INFO.email}`}
                      className="text-cta font-bold text-lg hover:underline break-all"
                    >
                      {CLINIC_INFO.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm mr-5 shrink-0">
                    <Globe className="w-6 h-6 text-cta" />
                  </div>
                  <div>
                    <p className="font-bold text-primary text-lg mb-1">{h.websiteLabel}</p>
                    <a
                      href={CLINIC_INFO.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cta font-bold text-lg hover:underline"
                    >
                      {CLINIC_INFO.websiteDisplay}
                    </a>
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

      <CTASection
        dark
        title={h.ctaFinalTitle}
        subtitle={h.ctaFinalSubtitle}
        footerNote={h.ctaFinalFooter}
      />
    </div>
  );
}
