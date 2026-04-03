import { Phone } from 'lucide-react';
import { CLINIC_INFO } from '../constants';
import { cn } from '../lib/utils';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
  dark?: boolean;
}

export default function CTASection({ 
  title = "Schedule Your Visit Today", 
  subtitle = "Call us to schedule your appointment. Now accepting new patients. Medicare welcome. Please call for insurance verification.",
  className,
  dark = false
}: CTASectionProps) {
  return (
    <section className={cn(
      "section-padding",
      dark ? "bg-primary text-white" : "bg-bg-alt text-primary",
      className
    )}>
      <div className="max-content text-center">
        <h2 className={cn("text-3xl md:text-4xl font-bold mb-6", dark ? "text-white" : "text-primary")}>
          {title}
        </h2>
        <p className={cn("text-lg mb-10 leading-relaxed", dark ? "text-slate-300" : "text-slate-600")}>
          {subtitle}
        </p>
        <a
          href={`tel:${CLINIC_INFO.phone}`}
          className="inline-flex items-center justify-center px-8 py-4 bg-cta hover:bg-blue-700 text-white text-xl font-bold rounded-full shadow-xl transition-all hover:scale-105 active:scale-95"
        >
          <Phone className="w-6 h-6 mr-3" />
          {CLINIC_INFO.phoneDisplay}
        </a>
        <p className="mt-6 text-sm opacity-80">
          Accepting United Healthcare Advantage and Traditional (Molina). Uninsured patients welcome—call for details.
        </p>
      </div>
    </section>
  );
}
