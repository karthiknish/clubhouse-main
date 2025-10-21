"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(() => !isHomePage);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      if (typeof window !== "undefined" && window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    if (typeof window !== "undefined") {
      handleScroll();
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [mounted, isHomePage]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Return a simplified navbar initially to prevent hydration errors
  if (!mounted) {
    return (
      <header
        className={`fixed top-0 left-0 z-50 w-full ${
          isHomePage
            ? "bg-transparent py-5 text-white"
            : "bg-white py-3 text-blue-950 shadow-md"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="font-bold text-2xl">
              THE CLUBHOUSE
            </Link>
            <div className="md:hidden">
              <Menu className="text-2xl" />
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white text-blue-950 shadow-md py-3"
          : "bg-transparent text-white py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-bold text-2xl">
            <Image
              src={
                isScrolled ? "/images/GreenLogo.svg" : "/images/WhiteLogo.svg"
              }
              alt="The Clubhouse"
              width={180}
              height={50}
              className="h-12 w-auto transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink href="/" label="Home" isScrolled={isScrolled} />
            <NavLink
              href="/club-hospitality"
              label="Club Hospitality"
              isScrolled={isScrolled}
            />
            <NavLink
              href="/luxury-travel"
              label="Luxury Travel"
              isScrolled={isScrolled}
            />
            <NavLink href="/contact" label="Contact" isScrolled={isScrolled} />
            <Button
              asChild
              className="rounded-full bg-green-950 text-white hover:bg-green-900"
            >
              <Link
                href="https://member.theclubhouse.co.uk/Identity/Account/Login?ReturnUrl=%2F"
                target="_blank"
                rel="noopener noreferrer"
              >
                Member Sign In
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white text-blue-950"
          >
            <nav className="container mx-auto px-4 py-5 flex flex-col space-y-4">
              <MobileNavLink href="/" label="Home" onClick={toggleMenu} />
              <MobileNavLink
                href="/club-hospitality"
                label="Club Hospitality"
                onClick={toggleMenu}
              />
              <MobileNavLink
                href="/luxury-travel"
                label="Luxury Travel"
                onClick={toggleMenu}
              />
              <MobileNavLink
                href="/contact"
                label="Contact"
                onClick={toggleMenu}
              />
              <Button
                onClick={() => {
                  toggleMenu();
                  window.open(
                    "https://member.theclubhouse.co.uk/Identity/Account/Login?ReturnUrl=%2F",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className="mt-4 w-full rounded-full bg-green-950 text-white hover:bg-green-900"
              >
                Member Sign In
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({ href, label, isScrolled }) {
  const isExternal = href.startsWith("http");

  const sharedClasses = `relative font-medium hover:text-green-950 transition-colors ${
    isScrolled ? "text-blue-950" : "text-white"
  }`;

  return (
    <Link
      href={href}
      className={sharedClasses}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {label}
    </Link>
  );
}

function MobileNavLink({ href, label, onClick, openInNewTab = false }) {
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      className="block py-2 text-lg font-medium hover:text-green-950 transition-colors"
      onClick={onClick}
      target={isExternal || openInNewTab ? "_blank" : undefined}
      rel={isExternal || openInNewTab ? "noopener noreferrer" : undefined}
    >
      {label}
    </Link>
  );
}
