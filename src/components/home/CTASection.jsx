"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";

export default function CTASection() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="w-full py-24 bg-gray-100 text-green-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="text-4xl md:text-5xl font-bold mb-6 font-display"
          >
            Unlock a World of Exclusive Opportunities
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="text-xl text-green-950/80 mb-10 font-display font-light"
          >
            Become part of a community that celebrates success, innovation, and
            connection. Seize the chance to enhance your network, enjoy
            unparalleled benefits, and access curated experiences designed just
            for you.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <MagneticButton
              size="lg"
              className="bg-white text-blue-950 hover:bg-white/90 text-lg px-8 py-6 font-display"
            >
              Apply for Membership
            </MagneticButton>


          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
