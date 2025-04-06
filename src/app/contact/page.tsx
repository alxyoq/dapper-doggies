import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-teal-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
          <p className="text-xl text-teal-100 mt-4 max-w-3xl mx-auto">
            We're here to help with all your mobile pet grooming needs
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>

              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <div className="flex items-start mb-6">
                  <div className="bg-teal-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+18566283610" className="hover:text-teal-600">(856) 628-3610</a>
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Call us to schedule your mobile grooming appointment
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-6">
                  <div className="bg-teal-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600 break-all">
                      <a href="mailto:devonsdapperdogspetgrooming@gmail.com" className="hover:text-teal-600">
                        devonsdapperdogspetgrooming@gmail.com
                      </a>
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      We'll respond to your inquiry as soon as possible
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-6">
                  <div className="bg-teal-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Visit Us</h3>
                    <address className="text-gray-600 not-italic">
                      1999 Gateway Blvd Suite 8<br />
                      Westville, NJ 08093<br />
                      United States
                    </address>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-teal-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Please contact us for available mobile grooming appointment times
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/devonsmobilepetgrooming"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-colors"
                  >
                    <Facebook className="h-6 w-6 text-blue-600" />
                  </a>
                  <a
                    href="https://www.instagram.com/devonsdapperdogs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-100 p-3 rounded-full hover:bg-pink-200 transition-colors"
                  >
                    <Instagram className="h-6 w-6 text-pink-600" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div>
                    <label htmlFor="petInfo" className="block text-sm font-medium text-gray-700 mb-1">
                      Pet Information
                    </label>
                    <input
                      type="text"
                      id="petInfo"
                      name="petInfo"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Type, breed, age, etc."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Tell us about your grooming needs..."
                      required
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Find Us</h2>
            <div className="rounded-lg overflow-hidden shadow-md">
              <iframe
                title="Devon's Dapper Dogs location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.9748652878924!2d-75.13851842332897!3d39.86187097153981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6cefb6a6a800d%3A0xad72e3d965461dd0!2s1999%20Gateway%20Blvd%20%238%2C%20Westville%2C%20NJ%2008093!5e0!3m2!1sen!2sus!4v1717638423018!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <p className="text-xl text-gray-700 mb-6">
              Ready to book your mobile pet grooming appointment?
            </p>
            <div className="flex justify-center space-x-4">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                <a href="tel:+18566283610">Call Now</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
