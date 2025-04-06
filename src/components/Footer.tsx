"use client";

import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-teal-50 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-teal-700 mb-2">Devon's Dapper Dogs</h3>
            <p className="text-gray-600">Mobile Pet Grooming</p>
          </div>

          <div className="flex space-x-4">
            <Link
              href="https://www.facebook.com/devonsmobilepetgrooming"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </Link>
            <Link
              href="https://www.instagram.com/devonsdapperdogs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-800 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </Link>
            <Link
              href="mailto:devonsdapperdogspetgrooming@gmail.com"
              className="text-red-600 hover:text-red-800 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-6 border-t border-teal-100">
          <div>
            <h4 className="text-lg font-semibold text-teal-700 mb-3">Contact Us</h4>
            <div className="flex items-start space-x-2 mb-2">
              <Phone size={18} className="text-teal-600 mt-0.5" />
              <p className="text-gray-600">
                <a href="tel:+18566283610" className="hover:text-teal-700">(856) 628-3610</a>
              </p>
            </div>
            <div className="flex items-start space-x-2">
              <Mail size={18} className="text-teal-600 mt-0.5" />
              <p className="text-gray-600 break-all">
                <a href="mailto:devonsdapperdogspetgrooming@gmail.com" className="hover:text-teal-700">
                  devonsdapperdogspetgrooming@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-teal-700 mb-3">Visit Us</h4>
            <div className="flex items-start space-x-2">
              <MapPin size={18} className="text-teal-600 mt-0.5" />
              <address className="text-gray-600 not-italic">
                1999 Gateway Blvd Suite 8<br />
                Westville, NJ 08093<br />
                United States
              </address>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-teal-700 mb-3">Hours</h4>
            <p className="text-gray-600 mb-1">Please contact us to schedule your mobile grooming appointment.</p>
            <p className="text-gray-600">We come to you!</p>
          </div>
        </div>

        <div className="border-t border-teal-100 pt-6 mt-2">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Devon's Dapper Dogs Pet Grooming LLC. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <Link href="/about" className="text-sm text-gray-500 hover:text-teal-700 mr-4">
                About Us
              </Link>
              <Link href="/contact" className="text-sm text-gray-500 hover:text-teal-700">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
