import { CheckCircle2 } from 'lucide-react';
import { useI18n } from '../context/LanguageContext';

export default function About() {
  const { messages } = useI18n();
  const a = messages.about;

  return (
    <div className="flex flex-col w-full">
      <section className="bg-white pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="max-content">
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-8 text-center tracking-tight">
            {a.title}
          </h1>
          <div className="max-prose-content">
            <p className="text-xl text-slate-600 mb-12 text-center leading-relaxed">{a.intro}</p>

            <div className="prose prose-slate max-w-none">
              <h2 className="text-3xl font-bold text-primary mt-16 mb-6">{a.missionTitle}</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">{a.missionBody}</p>

              <h2 className="text-3xl font-bold text-primary mt-16 mb-6">{a.visionTitle}</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">{a.visionBody}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-alt">
        <div className="max-content">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">{a.valuesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {a.values.map((value, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-[2.5rem] border border-slate-100 card-shadow flex flex-col h-full"
              >
                <div className="w-14 h-14 bg-cta/10 rounded-2xl flex items-center justify-center mb-8">
                  <CheckCircle2 className="w-7 h-7 text-cta" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed flex-grow">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
