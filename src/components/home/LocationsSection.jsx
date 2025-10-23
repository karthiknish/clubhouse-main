"use client";

import { motion } from "framer-motion"; // Keep for subtitle animation
import MagneticButton from "@/components/MagneticButton";
import AnimatedText from "@/components/AnimatedText";
import AnimatedDivider from "@/components/AnimatedDivider";
import Image from "next/image";

// LocationsSection is temporarily kept for reference; remove when no longer needed.
export default function LocationsSection() {
  // City data with images and descriptions - using smaller images for better performance
  const cities = [
    {
      name: "London",
      image:
        "https://directorsbox.co.uk/wp-content/uploads/2025/02/tower-bridge-the-shard-and-city-hall-wapping-lo-2024-06-20-18-21-15-utc-min-scaled.jpg",
    },
    {
      name: "Manchester",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a6/Deansgate_Square_%26_Elizabeth_Tower_Manchester_Winter_2020.jpg",
    },
    {
      name: "Birmingham",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fe/78/birmingham.jpg?w=1200&h=700&s=1",
    },
    {
      name: "Edinburgh",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c1/Edinburgh_Castle_from_the_south_east.JPG",
    },
    {
      name: "Cardiff",
      image:
        "https://directorsbox.co.uk/wp-content/uploads/2025/02/pexels-david-atkins-11679899-6241160-scaled.jpg",
    },
    {
      name: "Leeds",
      image:
        "https://directorsbox.co.uk/wp-content/uploads/2025/02/pexels-howard-senton-2148272793-30389574-scaled.jpg",
    },
  ];

  return (
    <section className="w-full py-20 md:py-32 relative overflow-hidden bg-theme/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:mb-20">
          <AnimatedText
            text="Our Locations"
            className="text-4xl md:text-5xl font-bold font-display text-theme mb-4 md:mb-6"
            type="words"
          />
          {/* Keep simple subtitle animation */}
          <motion.p
            className="text-lg md:text-xl text-theme/90 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            viewport={{ once: true }}
          >
            Establishing networking opportunities throughout the UK with a network in the most Influential Cities, designed for innovation and collaboration.
          </motion.p>
          <AnimatedDivider
            color="bg-theme"
            className="mt-6 md:mt-8 mb-10 md:mb-16"
          />
        </div>

        {/* Location cards grid - Static */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-green-900/20 group-hover:bg-green-900/10 transition-colors duration-300 z-10"></div>
                {/* Use Next.js Image with proper settings */}
                <div className="relative w-full h-full">
                  <Image
                    src={city.image}
                    alt={`${city.name} office`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700" // Keep hover scale
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-theme mb-2 font-display">
                  {city.name}
                </h3>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
