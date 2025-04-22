"use client";

import React from "react";

export default function TermsAndConditions() {
  return (
    <main className="flex min-h-screen flex-col bg-white text-theme">
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 font-display">Terms and Conditions</h1>
        <h2 className="text-2xl font-semibold mt-10 mb-2">1. Use of Services</h2>
        <p className="mb-6">The Clubhouse grants you a limited, non-exclusive, non-transferable, and revocable license to use our Services strictly in accordance with these Terms.</p>
        <h2 className="text-2xl font-semibold mt-10 mb-2">2. Account Registration</h2>
        <p className="mb-6">You may be required to register for an account to access certain features of our Services. You must provide accurate and complete information and keep your account information updated.</p>
        <h2 className="text-2xl font-semibold mt-10 mb-2">3. User Conduct</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Violates any applicable law or regulation.</li>
          <li>Infringes the rights of any third party, including but not limited to intellectual property rights.</li>
          <li>Is harmful, fraudulent, deceptive, threatening, harassing, defamatory, obscene, or otherwise objectionable.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-10 mb-2">4. Intellectual Property Rights</h2>
        <p className="mb-6">All intellectual property rights in the Services and their content, including but not limited to text, graphics, logos, and software, are the property of The Clubhouse or its licensors and are protected by intellectual property laws.</p>
        <h2 className="text-2xl font-semibold mt-10 mb-2">5. Third-Party Links</h2>
        <p className="mb-6">Our Services may contain links to third-party websites or services that are not owned or controlled by The Clubhouse. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.</p>
        <h2 className="text-2xl font-semibold mt-10 mb-2">6. Disclaimers</h2>
        <p className="mb-6">The Services are provided "AS IS" and "AS AVAILABLE" without warranties of any kind, whether express or implied. The Clubhouse disclaims all warranties, including but not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
        <h2 className="text-2xl font-semibold mt-10 mb-2">7. Limitation of Liability</h2>
        <p className="mb-6">To the fullest extent permitted by applicable law, The Clubhouse shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.</p>
        <h2 className="text-2xl font-semibold mt-10 mb-2">8. Indemnification</h2>
        <p className="mb-6">You agree to indemnify and hold harmless The Clubhouse and its officers, directors, employees, and agents from any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses arising from your use of and access to the Services, or your violation of these Terms.</p>
        <h2 className="text-2xl font-semibold mt-10 mb-2">9. Modification of Terms</h2>
        <p className="mb-6">We reserve the right to modify these Terms at any time. If we make changes, we will notify you by revising the date at the top of these Terms and, in some cases, providing a more prominent notice. Your continued use of the Services after such modification constitutes your acceptance of the modified Terms.</p>
        <h2 className="text-2xl font-semibold mt-10 mb-2">10. Governing Law</h2>
        <p className="mb-6">These Terms shall be governed by the laws of [Your Country/State], without regard to its conflict of law provisions.</p>
        <h2 className="text-2xl font-semibold mt-10 mb-2">11. Dispute Resolution</h2>
        <p className="mb-6">Any disputes arising out of or in connection with these Terms shall be resolved through binding arbitration in accordance with the rules of [Applicable Arbitration Association] in [Your Country/State].</p>
        <h2 className="text-2xl font-semibold mt-10 mb-2">12. Contact Us</h2>
        <p className="mb-2">If you have any questions about these Terms, please contact us at:</p>
        <a href="mailto:support@theclubhouse.co.uk" className="text-blue-700 underline">support@theclubhouse.co.uk</a>
        <p className="mb-2 mt-4">Tel: 0207 100 4018</p>
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-2">Legal Links</h3>
          <ul className="list-disc pl-6">
            <li><a href="/privacy-policy" className="text-blue-700 underline">Privacy Policy</a></li>
            <li><a href="/terms-and-conditions" className="text-blue-700 underline">Terms & Conditions</a></li>
            <li><a href="https://www.theclubhouse.co.uk/modern-slavery" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">Modern Slavery</a></li>
          </ul>
        </div>
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-2">Affiliates</h3>
          <p>If you would like to know more about our affiliates programme please get in touch using the contact form or email above.</p>
        </div>
      </section>
    </main>
  );
}
