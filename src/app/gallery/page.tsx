"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// RotatingImage component rotates through the provided images every 3 seconds
function RotatingImage({ images, alt }: { images: string[]; alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <Image
      src={images[currentIndex]}
      alt={alt}
      fill
      className="object-cover"
    />
  );
}

const galleryImages = [
  {
    id: 1,
    src: '/images/logo.png',
    alt: 'Mobile grooming van',
    caption: 'Our fully equipped mobile grooming van brings the salon to your doorstep',
  },
  {
    id: 2,
    // Change the src to an array of image paths for rotating images
    src: ['/images/louie.jpg', '/images/louie-alt1.jpg', '/images/louie-alt2.jpg', '/images/louie-alt3.jpg', '/images/louie-alt4.jpg', '/images/louie-alt5.jpg'],
    alt: 'Freshly groomed dog',
    caption: 'Our happy clients after grooming',
  },
  {
    id: 3,
    src: '/images/happy-customer1.jpg',
    alt: 'Dog being groomed',
    caption: 'Professional grooming with personalized attention',
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-teal-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Gallery</h1>
          <p className="text-xl text-teal-100 mt-4 max-w-3xl mx-auto">
            See our mobile pet grooming services in action
          </p>
        </div>
      </div>

      {/* Gallery */}
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
              Want to see your pet looking their best after a mobile grooming session?
            </p>
            <Button asChild className="bg-teal-600 hover:bg-teal-700">
              <Link href="/contact">Book Your Appointment Today</Link>
            </Button>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              About Our Mobile Grooming Service
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">
                At Devon's Dapper Dogs, we bring professional grooming services directly to your doorstep. Our mobile grooming van is fully equipped with everything needed to provide top-quality grooming for your pets in a stress-free environment.
              </p>
              <p className="text-gray-700 mb-4">
                Mobile grooming eliminates the anxiety many pets experience during travel and in unfamiliar environments. With our one-on-one service, your pet receives personalized attention throughout their grooming session, ensuring they look and feel their best.
              </p>
              <p className="text-gray-700">
                Our mobile service is convenient for you too - no more driving to and from appointments or waiting while your pet is groomed. We come to you, saving you valuable time while providing exceptional care for your furry family members.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Follow Us on Social Media
            </h2>
            <p className="text-gray-700 mb-6">
              See more photos of our happy clients on our social media pages!
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.facebook.com/devonsmobilepetgrooming"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                Facebook
              </a>
              <a
                href="https://www.instagram.com/devonsdapperdogs/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-md transition-colors flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
