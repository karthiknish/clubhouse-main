import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function SimpleNavbar() {
  return (
    <header className="w-full py-4 px-4 md:px-8 bg-white shadow-sm">
      <div className="container mx-auto flex justify-center items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/GreenLogo.svg"
            alt="Clubhouse Logo"
            width={160}
            height={45}
            priority
          />
        </Link>
      </div>
    </header>
  );
}
