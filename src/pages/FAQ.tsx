import { Plus, Minus } from 'lucide-react';
import React, { useMemo } from 'react';
import { CLINIC_INFO } from '../constants';
import { useI18n } from '../context/LanguageContext';

export default function FAQ() {
  const { messages } = useI18n();
  const f = messages.faq;

  const faqs = useMemo(
    () =>
      f.items.map((item) => ({
        q: item.q,
        a: item.a.replace('{phone}', CLINIC_INFO.phoneDisplay),
      })),
    [f.items]
  );

  return (
    <div className="flex flex-col w-full">
      <section className="bg-white pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="max-content">
          <div className="max-prose-content">
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-8 text-center tracking-tight">
              {f.title}
            </h1>
            <p className="text-xl text-slate-600 mb-16 text-center leading-relaxed">{f.intro}</p>

            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <FAQItem question={faq.q} answer={faq.a} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((x) => ({
            '@type': 'Question',
            name: x.q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: x.a,
            },
          })),
        })}
      </script>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-white border border-slate-100 rounded-2xl card-shadow overflow-hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-bold text-primary pr-4">{question}</span>
        {isOpen ? <Minus className="w-5 h-5 text-cta shrink-0" /> : <Plus className="w-5 h-5 text-cta shrink-0" />}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 animate-in fade-in slide-in-from-top-2 duration-200">
          <p className="text-slate-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
