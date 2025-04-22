import Image from "next/image";

export default function LegalSimpleNav({ logoSrc = "/images/WhiteLogo.svg" }) {
  return (
    <nav className="w-full py-6 bg-white border-b border-gray-100 flex justify-center items-center">
      <Image
        src={logoSrc}
        alt="The Clubhouse Logo"
        width={120}
        height={40}
        className="object-contain"
        priority
      />
    </nav>
  );
}
