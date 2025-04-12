"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-8 sticky top-0 z-50 shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-2 max-w-7xl flex justify-between items-center">
        <div className="flex items-center space-x-8">
          {/* Logo and Text - responsive margin adjustment */}
          <Link href="/" className="flex items-center ml-0 md:-ml-20">
            <Image
              src="/logo1.png"
              alt="Devon's Dapper Dogs Pet Grooming"
              width={90}
              height={90}
              className="h-[4.5rem] w-[4.5rem] rounded-full object-cover"
            />
            <div className="ml-4">
              <h1 className="text-3xl font-bold text-teal-600 font-serif">Devon's Dapper Dogs</h1>
              <p className="text-lg text-gray-600">Mobile Pet Grooming</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-teal-600 hover:bg-transparent px-3 py-2 text-xl font-semibold transition-transform transform hover:scale-125 duration-300 ease-in-out hover:shadow-lg"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Call Info */}
        <div className="hidden md:block">
          <div className="transition-transform transform hover:scale-110 duration-300 cursor-pointer">
            <div className="flex items-center">
              <Image src="/phone.png" alt="Phone Icon" width={64} height={64} className="mr-2" />
              <div>
                <p className="text-black text-lg font-normal">Call for an appointment</p>
                <p className="text-black text-2xl font-bold">(856) 628-3610</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <button aria-label="Toggle Menu" className="p-2">
                <Menu size={28} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <div className="flex flex-col gap-4 mt-8">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-transparent rounded transition-transform hover:scale-125 duration-300 ease-in-out hover:shadow-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-4 px-4 transition-transform transform hover:scale-110 duration-300">
                  <div className="flex items-center">
                    <Image src="/phone.png" alt="Phone Icon" width={64} height={64} className="mr-2" />
                    <div>
                      <p className="text-black text-lg font-normal">Call for an appointment</p>
                      <p className="text-black text-2xl font-bold">(856) 628-3610</p>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
