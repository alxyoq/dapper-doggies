import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/home-page.png)',
          backgroundPosition: 'center 30%'
        }}>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Premium Mobile Pet Grooming
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            We bring professional grooming services directly to your doorstep
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
              <Link href="/contact">Book Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white">
              <a href="tel:+18566283610">Call (856) 628-3610</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Mobile Grooming */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Mobile Grooming?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Devon's Dapper Dogs, we bring the salon experience to your doorstep,
              eliminating travel stress for your pets and saving you valuable time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-teal-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-teal-100 w-16 h-16 flex items-center justify-center rounded-full mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Stress-Free Experience</h3>
              <p className="text-gray-600 text-center">
                No more stressful car rides or waiting in cages. Your pet is groomed in a familiar environment.
              </p>
            </div>

            <div className="bg-teal-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-teal-100 w-16 h-16 flex items-center justify-center rounded-full mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">One-on-One Attention</h3>
              <p className="text-gray-600 text-center">
                Each pet receives dedicated, personalized care throughout their grooming session.
              </p>
            </div>

            <div className="bg-teal-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-teal-100 w-16 h-16 flex items-center justify-center rounded-full mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Convenient Scheduling</h3>
              <p className="text-gray-600 text-center">
                We work around your schedule, making pet grooming fit seamlessly into your busy life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Pet Photos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Happy Clients</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our furry friends who enjoy our mobile grooming services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/client1.jpg"
                  alt="Groomed dog"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/client2.jpg"
                  alt="Dog being groomed"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <div className="relative h-64">
                <Image
                  src="/images/client3.jpg"
                  alt="Mobile grooming van"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" className="bg-white border border-teal-600 text-teal-600 hover:bg-teal-50">
              <Link href="/gallery">See More Photos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to schedule a grooming session?</h2>
          <p className="mb-8 max-w-2xl mx-auto text-teal-50">
            Give your pet the royal treatment with our mobile grooming services.
            We come to you, eliminating the stress of transport for your furry friend.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="outline" className="bg-white border border-teal-600 text-teal-600 hover:bg-teal-50">
              <Link href="/contact">Book An Appointment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white border border-teal-600 text-teal-600 hover:bg-teal-50">
              <a href="tel:+18566283610">Call Us Now</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
