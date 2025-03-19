"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      if (typeof window !== "undefined" && window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Return a simplified navbar initially to prevent hydration errors
  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 w-full z-50 py-5 bg-transparent">
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
            <NavLink href="#about" label="About" isScrolled={isScrolled} />
            <NavLink
              href="#membership"
              label="Membership"
              isScrolled={isScrolled}
            />
            <NavLink
              href="#locations"
              label="Locations"
              isScrolled={isScrolled}
            />
            <NavLink href="#card" label="Card" isScrolled={isScrolled} />
            <NavLink href="#app" label="App" isScrolled={isScrolled} />
            <NavLink
              href="#testimonials"
              label="Testimonials"
              isScrolled={isScrolled}
            />
            <NavLink href="#faq" label="FAQ" isScrolled={isScrolled} />

            <Button
              onClick={() => {
                window.location.href = "/contact";
              }}
              variant={isScrolled ? "default" : "outline"}
              className={
                isScrolled
                  ? "bg-green-950 text-white hover:bg-green-950 hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-green-950"
              }
            >
              Contact Us
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
              <MobileNavLink href="#about" label="About" onClick={toggleMenu} />
              <MobileNavLink
                href="#membership"
                label="Membership"
                onClick={toggleMenu}
              />
              <MobileNavLink
                href="#locations"
                label="Locations"
                onClick={toggleMenu}
              />
              <MobileNavLink
                href="#testimonials"
                label="Testimonials"
                onClick={toggleMenu}
              />
              <MobileNavLink href="#card" label="Card" onClick={toggleMenu} />
              <MobileNavLink href="#app" label="App" onClick={toggleMenu} />
              <Button className="w-full mt-4">Contact Us</Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({ href, label, isScrolled }) {
  const handleClick = (e) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for the navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`relative font-medium hover:text-green-950 transition-colors ${
        isScrolled ? "text-blue-950" : "text-white"
      }`}
    >
      {label}
    </a>
  );
}

function MobileNavLink({ href, label, onClick }) {
  const handleClick = (e) => {
    e.preventDefault();
    onClick(); // Close mobile menu

    // Scroll to section after a small delay to allow menu to close
    setTimeout(() => {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80, // Offset for the navbar height
          behavior: "smooth",
        });
      }
    }, 300);
  };

  return (
    <a
      href={href}
      className="block py-2 text-lg font-medium hover:text-green-950 transition-colors"
      onClick={handleClick}
    >
      {label}
    </a>
  );
}
