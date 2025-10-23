"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import AnimatedDivider from "@/components/AnimatedDivider";

const FAQSection = () => {
  // Using null as initial state to avoid hydration mismatch
  const [mounted, setMounted] = useState(false);
  
  // Only run client-side effects after hydration
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const faqs = [
    {
      question: "What is Clubhouse?",
      answer:
        "Clubhouse is a business club tailored to the UK SME market—your concierge for advice, services, and the connections that help your company grow.",
    },
    {
      question: "How do I become a member?",
      answer:
        "To become a member, you can apply through our website by filling out the contact form. Our team will review your application and contact you to discuss membership options and arrange a tour of our facilities.",
    },
    {
      question: "What are the membership benefits?",
      answer:
        "Access to exclusive savings, educational resources, marketing support, well-being programs, professional networking opportunities, and private events.",
    },
    {
      question: "Are there different membership tiers?",
      answer:
        "We offer three distinct membership tiers, each granting a tailored level of access to the Clubhouse, thoughtfully designed to meet your business needs - contact us to discuss",
    },
  ];

  // Only initialize client-side state after mounting
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (mounted) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  return (
    <section className="w-full py-32 relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 w-1/3 h-1/3 bg-blue-50/50 rounded-br-[100px]" />
        <div className="absolute right-0 bottom-0 w-1/4 h-1/4 bg-blue-50/50 rounded-tl-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <AnimatedText
            text="Frequently Asked Questions"
            className="text-5xl font-bold mb-6 font-display text-theme"
            type="words"
          />
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto font-display font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Find answers to common questions about Clubhouse membership,
            benefits, and services.
          </motion.p>
          <AnimatedDivider color="bg-theme" className="mt-8" />
        </div>

        {/* FAQ accordion */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <button
                className={`w-full text-left p-6 rounded-xl flex justify-between items-center ${
                  mounted && activeIndex === index
                    ? "bg-theme text-white shadow-lg"
                    : "bg-white shadow-md hover:bg-gray-50"
                }`}
                onClick={() => toggleFAQ(index)}
                suppressHydrationWarning
              >
                <h3 className="text-xl font-semibold font-display">
                  {faq.question}
                </h3>
                <span
                  className="text-2xl transition-transform duration-300 transform"
                  suppressHydrationWarning
                >
                  {mounted && activeIndex === index ? "−" : "+"}
                </span>
              </button>
              <AnimatePresence>
                {mounted && activeIndex === index && (
                  <motion.div
                    className="overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.2,
                      ease: "easeOut",
                      opacity: { duration: 0.15 },
                    }}
                  >
                    <div className="p-6 bg-white border border-gray-100 rounded-b-xl shadow-inner">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
