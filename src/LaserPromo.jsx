import React from "react";

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-20 -z-10"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1599658880436-c61792e70672?auto=format&fit=crop&w=1600&q=80')`,
      }}
    />

    {/* Pink overlay */}
    <div className="absolute inset-0 bg-pink-100 bg-opacity-60 -z-10" />

    {/* Content */}
    <div className="z-10 animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 drop-shadow-lg">
        🌟 Face Laser Hair Removal – Only $79.99 🌟
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-6 drop-shadow">
        (Reg. $150) Smooth, safe, and long-lasting results. First-time clients
        only.
      </p>
      <a
        href="https://www.laserspot.ca/booking-calendar/free-consultation?referral=service_list_widget"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-pink-700 transition drop-shadow-lg"
      >
        Book Now
      </a>
    </div>
  </section>
);

const WhyChooseUs = () => (
  <section className="bg-white py-16 px-4 text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">
      Why Choose Laser Spot?
    </h2>
    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-xl font-semibold text-pink-600 mb-2">
          20+ Years Experience
        </h3>
        <p className="text-gray-600">
          Our technician has over two decades of expertise in precision laser
          treatment.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-pink-600 mb-2">
          Premium Equipment
        </h3>
        <p className="text-gray-600">
          We use advanced laser machines for safe and highly effective results
          on all skin types.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-pink-600 mb-2">
          Personalized Care
        </h3>
        <p className="text-gray-600">
          We take extra time with each client, ensuring comfort and optimal
          results.
        </p>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="bg-gray-100 py-16 px-4 text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-8">
      What Our Clients Say
    </h2>
    <div className="max-w-4xl mx-auto space-y-8">
      <blockquote className="text-gray-700 italic">
        “I’ve been to several spas, but Laser Spot is the only one where I saw
        real results. Highly recommend!”
        <footer className="mt-2 text-sm text-gray-500">— Sarah M.</footer>
      </blockquote>
      <blockquote className="text-gray-700 italic">
        “The staff is so gentle and professional. I felt completely at ease and
        loved the results.”
        <footer className="mt-2 text-sm text-gray-500">— Amanda T.</footer>
      </blockquote>
    </div>
  </section>
);

const ServiceExplanation = () => (
  <section className="bg-white py-16 px-4 text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">What to Expect</h2>
    <p className="max-w-2xl mx-auto text-gray-600 text-lg">
      Our face laser hair removal treatment is quick, gentle, and customized for
      your skin type. You’ll see smoother skin in just a few sessions, with no
      downtime. Perfect for upper lip, chin, and jawline areas.
    </p>
  </section>
);

const LaserPromo = () => (
  <div>
    <HeroSection />
    <WhyChooseUs />
    <ServiceExplanation />
    <Testimonials />
  </div>
);

export default LaserPromo;
