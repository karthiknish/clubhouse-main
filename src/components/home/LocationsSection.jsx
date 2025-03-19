"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";
import AnimatedText from "@/components/AnimatedText";
import AnimatedDivider from "@/components/AnimatedDivider";
import Image from "next/image";

export default function LocationsSection() {
  // City data with images and descriptions
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
    {
      name: "Glasgow",
      image:
        "https://www.premiersuiteseurope.com/wp-content/uploads/2023/05/Glasgow.jpg",
    },
    {
      name: "Newcastle",
      image:
        "https://directorsbox.co.uk/wp-content/uploads/2025/02/pexels-anthony-holmes-1500340-2893285-scaled.jpg",
    },
    {
      name: "Liverpool",
      image:
        "https://directorsbox.co.uk/wp-content/uploads/2025/02/liverpool-merseyside-united-kingdom-2023-11-27-05-25-47-utc-min-scaled.jpg",
    },
  ];

  return (
    <section
      id="locations"
      className="w-full py-32 relative overflow-hidden bg-gray-100"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-100 rounded-full opacity-30 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-100 rounded-full opacity-40 blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <AnimatedText
            text="Our Locations"
            className="text-5xl md:text-6xl font-bold font-display text-theme mb-6"
            once
          />
          <motion.p
            className="text-theme text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Establishing a network of premium workspaces across the UK&apos;s
            most influential cities, designed for innovation and collaboration.
          </motion.p>
          <AnimatedDivider
            color="bg-green-300"
            className="mt-8 max-w-md mx-auto"
          />
        </div>

        {/* City grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {cities.map((city, index) => (
            <motion.div
              key={city.name}
              className="rounded-xl bg-white shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-green-900/20 group-hover:bg-green-900/10 transition-colors duration-300 z-10"></div>
                <Image
                  src={city.image}
                  alt={`${city.name} office`}
                  fill={true}
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-theme mb-2 font-display">
                  {city.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-10 max-w-4xl mx-auto shadow-xl border border-green-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h4 className="text-2xl font-bold text-theme mb-4 font-display">
            Ready to join our community?
          </h4>
          <p className="text-theme text-lg mb-8 max-w-2xl mx-auto">
            Access all our premium locations with a single membership. Work from
            anywhere in our nationwide network.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <MagneticButton
              variant="outline"
              size="lg"
              className="border-theme text-theme hover:bg-theme/10 font-display px-8"
            >
              Contact Us
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
