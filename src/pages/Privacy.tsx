import { Shield } from 'lucide-react';
import { motion } from 'motion/react';
import { useI18n } from '../context/LanguageContext';

export default function Privacy() {
  const { messages } = useI18n();
  const p = messages.privacy;

  return (
    <div className="flex flex-col w-full">
      <section className="bg-white pt-16 pb-12 md:pt-24 md:pb-20">
        <div className="max-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-prose-content mx-auto"
          >
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-cta/10 rounded-full flex items-center justify-center">
                <Shield className="w-10 h-10 text-cta" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 text-center tracking-tight">
              {p.title}
            </h1>
            <p className="text-base text-slate-400 mb-16 text-center font-medium">{p.updated}</p>

            <div className="prose prose-slate prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">{p.lead}</p>

              <div className="space-y-12">
                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">{p.s1h}</h2>
                  <p className="text-slate-600 leading-relaxed">{p.s1b}</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">{p.s2h}</h2>
                  <p className="text-slate-600 leading-relaxed">{p.s2b}</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">{p.s3h}</h2>
                  <p className="text-slate-600 leading-relaxed">{p.s3b}</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">{p.s4h}</h2>
                  <p className="text-slate-600 leading-relaxed">{p.s4b}</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">{p.s5h}</h2>
                  <p className="text-slate-600 leading-relaxed">{p.s5b}</p>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
