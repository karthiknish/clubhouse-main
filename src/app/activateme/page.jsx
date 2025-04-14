"use client";

import React from "react";
import Link from "next/link";
import { Footer } from "@/components/home";
import { Button } from "@/components/ui/button";
import SimpleNavbar from "@/components/SimpleNavbar";
import AnimatedDivider from "@/components/AnimatedDivider";
import {
  LogIn,
  ListChecks,
  CheckCircle,
  UploadCloud,
  HelpCircle,
  Mail,
  Phone,
  CreditCard,
} from "lucide-react";

export default function ActivateMePage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <SimpleNavbar />

      {/* Intro Section - Reduced padding */}
      <section className="w-full py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CreditCard
            className="h-12 w-12 mx-auto text-theme mb-3"
            strokeWidth={1.5}
          />
          <h1 className="text-4xl md:text-5xl font-bold font-display text-theme">
            Activate Your Clubhouse Card
          </h1>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to activate your card and manage your
            account.
          </p>
        </div>
      </section>

      {/* Activation Steps Section - Reduced padding */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="p-6 md:p-8 bg-green-50 rounded-xl border border-green-200 shadow-lg">
            <h2 className="text-3xl font-semibold font-display text-theme mb-4 flex items-center gap-3">
              <ListChecks className="h-7 w-7 flex-shrink-0" />
              How to Activate Your Card:
            </h2>
            <ol className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-start gap-4">
                <LogIn className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <span>Login to your Clubhouse account.</span>
              </li>
              <li className="flex items-start gap-4">
                <ListChecks className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <span>
                  Select <strong>"Card details"</strong> from the menu options
                  on the left.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <span>Click on the green button to activate your card.</span>
              </li>
            </ol>
            <p className="mt-4 text-base text-green-800 bg-green-100 p-4 rounded-lg inline-block">
              Your card is issued with an initial £200 limit.
            </p>
          </div>
        </div>
      </section>

      <AnimatedDivider color="bg-gray-200" className="py-4" />

      {/* KYC/Upgrade Steps Section - Reduced padding */}
      <section className="w-full py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="p-6 md:p-8 bg-blue-50 rounded-xl border border-blue-200 shadow-lg">
            <h2 className="text-3xl font-semibold font-display text-blue-800 mb-4 flex items-center gap-3">
              <UploadCloud className="h-7 w-7 flex-shrink-0" />
              Increase Your Card Limit:
            </h2>
            <p className="mb-4 text-gray-700 text-lg">
              To increase the limit you must upload KYC information, as follows:
            </p>
            <ol className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-start gap-4">
                <LogIn className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <span>Log into your Clubhouse account.</span>
              </li>
              <li className="flex items-start gap-4">
                <UploadCloud className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <span>
                  Click <strong>"Upgrade Card"</strong> from the menu options on
                  the left.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <span>Upload your ID and proof of address.</span>
              </li>
            </ol>
            <p className="mt-4 text-base text-blue-800 bg-blue-100 p-4 rounded-lg">
              Please refer to the KYC guidelines on screen to ensure you provide
              acceptable documents, otherwise it may delay the process.
            </p>
          </div>
        </div>
      </section>

      <AnimatedDivider color="bg-gray-200" className="py-4" />

      {/* Action/Support Section - Reduced padding */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          {/* Member Login Link */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold font-display text-gray-800 mb-5">
              Ready to Log In?
            </h3>
            <Button
              asChild
              className="bg-theme text-white hover:bg-theme/90 font-display px-12 py-4 text-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <Link
                href="https://member.theclubhouse.co.uk/Identity/Account/Login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Member Login
              </Link>
            </Button>
          </div>

          {/* Assistance Info */}
          <div className="text-gray-600">
            <h3 className="text-2xl font-semibold font-display text-gray-800 mb-4 flex items-center justify-center gap-3">
              <HelpCircle className="h-7 w-7 text-gray-500" />
              Need Assistance?
            </h3>
            <p className="mb-4 text-lg">
              If you require assistance or have any questions, please get in
              touch:
            </p>
            <div className="space-y-2 text-lg">
              <p className="flex items-center justify-center gap-2">
                <Mail className="h-6 w-6 text-theme" />
                <a
                  href="mailto:support@theclubhouse.co.uk"
                  className="text-theme hover:underline"
                >
                  support@theclubhouse.co.uk
                </a>
              </p>
              <p className="flex items-center justify-center gap-2">
                <Phone className="h-6 w-6 text-theme" />
                <span className="text-gray-800">Tel:</span>
                <a
                  href="tel:02071004018"
                  className="text-theme hover:underline"
                >
                  0207 100 4018
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
