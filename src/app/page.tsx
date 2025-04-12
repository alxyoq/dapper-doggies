"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ───────────────────────── Hero Section ───────────────────────── */}
      <section
        className="relative h-[70vh] bg-[length:121%_auto] bg-top md:bg-[center_32%] md:bg-cover bg-center flex items-start md:items-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(/home-page.png)",
        }}
      >
        <div className="container mx-auto px-4 z-20 text-center pt-10 md:pt-0">
          {/* Desktop heading raised; desktop gap smaller, mobile unchanged */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-2 md:-mt-24">
            Premium Mobile Pet Grooming
          </h1>

          {/* Mobile keeps big gap (mt‑60); desktop closer (md:mt‑8) */}
          <div className="mt-60 md:mt-8">
            <p className="text-xl md:text-2xl text-white mb-4">
              We bring professional grooming services directly to your doorstep
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                <Link href="/contact">Book Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white"
              >
                <a href="tel:+18566283610">Call (856) 628-3610</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── About Mobile Grooming Section ───────────────── */}
      <section className="py-16 bg-white -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose Mobile Grooming?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Devon's Dapper Dogs, we bring the salon experience to your
              doorstep, eliminating travel stress for your pets and saving you
              valuable time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <InfoCard
              title="Stress‑Free Experience"
              iconPath="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              text="No more stressful car rides or waiting in cages. Your pet is groomed in a familiar environment."
            />

            {/* Card 2 */}
            <InfoCard
              title="One‑on‑One Attention"
              iconPath="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              text="Each pet receives dedicated, personalized care throughout their grooming session."
            />

            {/* Card 3 */}
            <InfoCard
              title="Convenient Scheduling"
              iconPath="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              text="We work around your schedule, making pet grooming fit seamlessly into your busy life."
            />
          </div>
        </div>
      </section>

      {/* ───────────────────────── Gallery Section ──────────────────────── */}
      <GallerySection />
    </div>
  );
}

/* ─────────────────────────── Helper Components ─────────────────────────── */

function InfoCard({
  title,
  iconPath,
  text,
}: {
  title: string;
  iconPath: string;
  text: string;
}) {
  return (
    <div className="bg-teal-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-teal-100 w-16 h-16 flex items-center justify-center rounded-full mb-4 mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-teal-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{text}</p>
    </div>
  );
}

function GallerySection() {
  /* Rotating image component */
  function RotatingImage({ images, alt }: { images: string[]; alt: string }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(
        () => setCurrentIndex((i) => (i + 1) % images.length),
        3000
      );
      return () => clearInterval(interval);
    }, [images]);

    return (
      <Image src={images[currentIndex]} alt={alt} fill className="object-cover" />
    );
  }

  /* Gallery images */
  const galleryImages = [
    {
      id: 1,
      src: "/logo.png",
      alt: "Mobile grooming van",
      caption:
        "Our fully equipped mobile grooming van brings the salon to your doorstep",
    },
    {
      id: 2,
      src: [
        "/louie.jpg",
        "/louie-alt1.jpg",
        "/louie-alt2.jpg",
        "/louie-alt3.jpg",
        "/louie-alt4.jpg",
        "/louie-alt5.jpg",
      ],
      alt: "Freshly groomed dog",
      caption: "Our happy clients after grooming",
    },
    {
      id: 3,
      src: "/happy-customer1.jpg",
      alt: "Dog being groomed",
      caption: "Professional grooming with personalized attention",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64">
                {Array.isArray(image.src) ? (
                  <RotatingImage images={image.src} alt={image.alt} />
                ) : (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="p-4">
                <p className="text-gray-700 text-center">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700 mb-6">
            Want to see your pet looking their best after a mobile grooming
            session?
          </p>
          <Button asChild className="bg-teal-600 hover:bg-teal-700">
            <Link href="/contact">Book Your Appointment Today</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
