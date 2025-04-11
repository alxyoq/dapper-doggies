"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-teal-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Us</h1>
          <p className="text-xl text-teal-100 mt-4 max-w-3xl mx-auto">
            Devon's Dapper Dogs brings professional grooming services directly to your doorstep
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Our Story */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Story</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
              <div className="md:w-1/3">
                <div className="relative h-64 w-full rounded-lg overflow-hidden">
                  <Image
                    src="/devon-dapper.jpg"
                    alt="Devon's Dapper Dogs mobile grooming van"
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-700 mb-4">
                  At Devon's Dapper Dogs, we're passionate about providing exceptional pet grooming services with the added convenience of coming directly to you. We understand that many pets experience anxiety during car rides or in unfamiliar environments, which is why we bring the salon experience right to your doorstep.
                </p>
                <p className="text-gray-700">
                  Our mobile grooming service was born from a desire to make pet grooming a stress-free, enjoyable experience for both pets and their owners. By eliminating the need for travel and providing one-on-one attention in a familiar environment, we ensure your furry friend receives the care they deserve.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Mission */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Mission</h2>
          <div className="bg-teal-50 p-8 rounded-lg shadow-md">
            <p className="text-gray-700 text-center text-xl italic mb-6">
              "To provide exceptional mobile grooming services that prioritize your pet's comfort, safety, and well-being while offering unmatched convenience for pet owners."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-3">For Your Pet</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>One-on-one attention throughout the grooming session</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Reduced anxiety in a familiar environment</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>No exposure to other animals during grooming</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Personalized care tailored to your pet's needs</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-3">For You</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>No travel time or waiting at a salon</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Flexible scheduling that works with your lifestyle</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Direct communication with the groomer</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Peace of mind knowing your pet is comfortable</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Grooming Benefits */}
        {/* ...no changes needed in the rest of the code */}
        {/* Service Area */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Service Area</h2>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <p className="text-gray-700 mb-6">
              Devon's Dapper Dogs is proud to serve Westville, NJ and surrounding areas. Our mobile grooming van brings professional pet grooming services right to your doorstep.
            </p>
            <div className="flex justify-center">
              <Button asChild className="bg-teal-600 hover:bg-teal-700">
                <Link href="/contact">Book Your Mobile Grooming Appointment</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
