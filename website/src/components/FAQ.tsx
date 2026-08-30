import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { siteData } from '../data';
import { Section, FadeIn } from './ui';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section bg="bg-brand-bg">
      <div className="max-w-3xl mx-auto">
        <FadeIn className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-main mb-4">Frequently Asked Questions</h2>
        </FadeIn>

        <div className="space-y-4">
          {siteData.faqItems.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-surface rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                  <button
                    className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-lg text-main pr-8">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-muted shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-5 text-muted leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
