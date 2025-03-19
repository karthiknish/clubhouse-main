"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

import { Footer } from "@/components/home";

export default function Contact() {
  const router = useRouter();
  
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header with navigation back to home */}
      <header className="w-full py-6 px-4 md:px-8 bg-white/90 backdrop-blur-md fixed top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/GreenLogo.svg" alt="Clubhouse Logo" width={200} height={200} />

          </Link>
          
          <button 
            onClick={() => router.push('/')}
            className="text-theme hover:text-theme-dark transition-colors"
          >
            Back to Home
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full pt-32 pb-16 relative bg-gradient-to-b from-theme/5 to-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-theme mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Have questions about membership or want to schedule a tour? 
              We'd love to hear from you.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute left-0 top-1/4 w-32 h-32 bg-theme/10 rounded-full blur-3xl -z-10" />
        <div className="absolute right-0 bottom-1/4 w-40 h-40 bg-theme/10 rounded-full blur-3xl -z-10" />
      </section>

      {/* Main content */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
            
            {/* Contact information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ContactInfo />
            </motion.div>
          </div>
        </div>
      </section>
      
    

      {/* Footer */}
      <Footer />
    </main>
  );
}
