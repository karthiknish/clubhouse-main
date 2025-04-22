"use client";

import React from "react";

import LegalSimpleNav from "@/components/LegalSimpleNav";
import Footer from "@/components/home/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <LegalSimpleNav logoSrc="/images/GreenLogo.svg" />
      <main className="flex min-h-screen flex-col bg-white text-theme">
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 font-display">Privacy Policy</h1>
        <p className="mb-2 text-lg font-semibold">Effective Date: 01.04.24</p>
        <p className="mb-6">Welcome to The Clubhouse. We are committed to protecting your privacy and ensuring that your personal information is collected and used properly, lawfully, and transparently.</p>
        <p className="mb-6">This Privacy Policy explains how we, The Clubhouse, collect, use, disclose, and safeguard your personal data when you visit our website, use our services, or engage with us through other channels. This policy applies to all individuals who interact with us, including but not limited to our customers, employees, and website visitors.</p>
        <h2 className="text-2xl font-semibold mt-10 mb-2">1. Information We Collect</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Personal Identification Information: Name, email address, phone number, etc.</li>
          <li>Demographic Information: Age, gender, preferences, interests, and favorites.</li>
          <li>Technical Information: IP address, browser type and version, operating system.</li>
          <li>Usage Information: Information about how you use our website and services.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-10 mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>To provide and manage our services.</li>
          <li>To communicate with you, including responding to your inquiries and sending service updates.</li>
          <li>To improve our website and services through analysis and personalization.</li>
          <li>For marketing purposes, if you have consented to such use.</li>
          <li>To comply with legal obligations.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-10 mb-2">3. Sharing Your Information</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Service providers and partners who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.</li>
          <li>To comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.</li>
          <li>In the event of a merger, acquisition, or sale of all or a portion of our assets.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-10 mb-2">4. Data Security</h2>
        <p className="mb-6">We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.</p>
        <h2 className="text-2xl font-semibold mt-10 mb-2">5. Your Rights</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Access your personal data.</li>
          <li>Request correction of any inaccurate data that we hold about you.</li>
          <li>Request deletion of your personal data.</li>
          <li>Object to processing of your personal data.</li>
          <li>Request the restriction of processing of your personal data.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-10 mb-2">6. Cookies</h2>
        <p className="mb-6">Our website uses cookies to enhance your experience. You have the option to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer.</p>
        <h2 className="text-2xl font-semibold mt-10 mb-2">7. Changes to Our Privacy Policy</h2>
        <p className="mb-6">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We encourage you to review this Privacy Policy periodically for any changes.</p>
        <h2 className="text-2xl font-semibold mt-10 mb-2">8. Contact Us</h2>
        <p className="mb-2">If you have any questions about this Privacy Policy, please contact us at:</p>
        <a href="mailto:support@theclubhouse.co.uk" className="text-blue-700 underline">support@theclubhouse.co.uk</a>
      </section>
    </main>
      <Footer />
    </>
  );
}
