import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqItem {
  ask: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
}

export function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  function toggleFaq(index: number) {
    setFaqOpen((prev) => (prev === index ? null : index));
  }

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`transition-all duration-200 border rounded-2xl overflow-hidden ${
            faqOpen === index
              ? "border-purple-200 shadow-md bg-white"
              : "border-slate-200 bg-white hover:border-purple-200"
          }`}
        >
          <button
            onClick={() => toggleFaq(index)}
            className="w-full cursor-pointer flex justify-between items-center p-5 text-left transition-colors"
          >
            <span
              className={`font-bold text-sm md:text-base ${
                faqOpen === index ? "text-purple-600" : "text-slate-700"
              }`}
            >
              {faq.ask}
            </span>

            {faqOpen === index ? (
              <ChevronUp className="text-purple-600 shrink-0" size={20} />
            ) : (
              <ChevronDown className="text-slate-400 shrink-0" size={20} />
            )}
          </button>

          {faqOpen === index && (
            <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4 animate-in slide-in-from-top-2">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}