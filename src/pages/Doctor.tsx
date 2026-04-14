import { Award, Languages, GraduationCap } from 'lucide-react';
import { CLINIC_INFO, DR_CHAE_PHOTO_URL } from '../constants';
import { useI18n } from '../context/LanguageContext';

export default function Doctor() {
  const { messages } = useI18n();
  const d = messages.doctor;

  return (
    <div className="flex flex-col w-full">
      <section className="bg-white pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="max-content">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/3 flex flex-col items-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute -inset-4 bg-secondary/10 rounded-[3rem] rotate-6 -z-10" />
                <img
                  src={DR_CHAE_PHOTO_URL}
                  alt="Dr. Steven Chae, MD"
                  className="w-full h-full object-cover object-top rounded-[2.5rem] shadow-2xl"
                />
              </div>

            </div>
            <div className="w-full lg:w-2/3">
              <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-4 tracking-tight">
                {CLINIC_INFO.doctor}
              </h1>
              <p className="text-2xl text-secondary font-bold mb-10">{d.role}</p>

              <div className="prose prose-slate max-w-none">
                <h2 className="text-2xl font-bold text-primary mb-6">{d.bioTitle}</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">{d.bio1}</p>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">{d.bio2}</p>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">{d.bio3}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-alt">
        <div className="max-content">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">{d.credTitle}</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 card-shadow">
              <div className="flex items-start">
                <GraduationCap className="w-6 h-6 text-cta mr-4 shrink-0" />
                <div>
                  <h3 className="font-bold text-primary mb-2">{d.eduTitle}</h3>
                  <ul className="text-sm text-slate-600 space-y-2">
                    {d.eduItems.map((line) => (
                      <li key={line}>• {line}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 card-shadow">
              <div className="flex items-start">
                <Award className="w-6 h-6 text-cta mr-4 shrink-0" />
                <div>
                  <h3 className="font-bold text-primary mb-2">{d.certTitle}</h3>
                  <ul className="text-sm text-slate-600 space-y-2">
                    {d.certItems.map((line) => (
                      <li key={line}>• {line}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 card-shadow">
              <div className="flex items-start">
                <Languages className="w-6 h-6 text-cta mr-4 shrink-0" />
                <div>
                  <h3 className="font-bold text-primary mb-2">{d.langTitle}</h3>
                  <p className="text-sm text-slate-600">{d.langBody}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
