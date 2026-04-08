import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useI18n } from '../context/LanguageContext';

interface ServiceSubpageProps {
  type: 'primary' | 'preventive' | 'chronic' | 'physical';
}

export default function ServiceSubpage({ type }: ServiceSubpageProps) {
  const { messages } = useI18n();
  const sub = messages.serviceSub;
  const data = sub[type];

  return (
    <div className="flex flex-col w-full">
      <section className="bg-white pt-16 pb-16 md:pt-24 md:pb-24">
        <div className="max-content">
          <div className="max-prose-content">
            <Link
              to="/services"
              className="inline-flex items-center text-sm font-bold text-slate-400 hover:text-cta mb-10 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> {sub.back}
            </Link>

            <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-10 leading-tight tracking-tight">
              {data.h1}
            </h1>

            <div className="bg-bg-alt p-10 rounded-[2.5rem] mb-16 border border-slate-100">
              <p className="text-xl text-slate-700 leading-relaxed">{data.explanation}</p>
            </div>

            <h2 className="text-3xl font-bold text-primary mb-8">{sub.keyBenefits}</h2>
            <ul className="space-y-6 mb-16">
              {data.benefits.map((benefit, i) => (
                <li
                  key={i}
                  className="flex items-start p-6 bg-white rounded-2xl border border-slate-100 card-shadow"
                >
                  <CheckCircle2 className="w-7 h-7 text-accent-green mr-5 shrink-0" />
                  <span className="text-lg text-slate-700 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
