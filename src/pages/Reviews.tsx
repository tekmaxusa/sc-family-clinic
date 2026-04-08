import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { useI18n } from '../context/LanguageContext';

export default function Reviews() {
  const { messages } = useI18n();
  const r = messages.reviews;

  return (
    <div className="flex flex-col w-full">
      <section className="bg-white pt-16 pb-12 md:pt-24 md:pb-20">
        <div className="max-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">{r.title}</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">{r.intro}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {r.items.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 card-shadow relative overflow-hidden group"
              >
                <Quote className="absolute top-6 right-6 w-16 h-16 text-slate-50 group-hover:text-cta/5 transition-colors" />
                <div className="flex mb-6">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg text-slate-700 italic mb-8 leading-relaxed relative z-10">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold mr-4">
                    {review.name[0]}
                  </div>
                  <p className="font-bold text-primary text-lg">— {review.name}.</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <a
              href="https://www.google.com/search?q=SC+Family+Clinic+Plano+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border-2 border-slate-200 text-primary font-bold rounded-full hover:border-cta hover:text-cta transition-all"
            >
              {r.googleCta}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
