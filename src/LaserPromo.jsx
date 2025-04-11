import React from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Face from "./img/face.jpg"; //

const FadeSection = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 20 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const HeroSection = () => {
  const heroControls = useAnimation();

  useEffect(() => {
    heroControls.start({ opacity: 1, y: 0 });
  }, [heroControls]);

  return (
    <motion.section
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={heroControls}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 -z-10"
        style={{
          backgroundImage: `url(${Face})`,
        }}
      />

      <div className="absolute inset-0 bg-pink-100 bg-opacity-60 -z-10" />
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
    </motion.section>
  );
};

const WhyChooseUs = () => (
  <FadeSection>
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
  </FadeSection>
);

const Testimonials = () => (
  <FadeSection>
    <section className="bg-pink-50 py-16 px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-12">
        What Our Clients Say
      </h2>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white shadow-md rounded-2xl p-6 text-left">
          <div className="mb-2">
            <h4 className="text-lg font-semibold text-gray-900">Elena S.</h4>
            <div className="text-yellow-500 text-sm">★★★★★</div>
          </div>
          <p className="text-gray-700 italic">
            This is the second time I have gotten laser hair removal. The first
            time it was super painful and I was seeing very little results after
            six sessions (at a different clinic). After my first session with
            Shela there was a noticeable improvement and the treatment was
            painless. Shela is so great and I couldn't be happier with my
            results so far!
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 text-left">
          <div className="mb-2">
            <h4 className="text-lg font-semibold text-gray-900">Chioma O.</h4>
            <div className="text-yellow-500 text-sm">★★★★★</div>
          </div>
          <p className="text-gray-700 italic">
            I have gone to different places for my laser treatment, all it took
            was 2 sessions and my facial hair thinned out and inflammations went
            down completely. Best place ever not everyone knows how to treat
            black skin but this place got it right immediately
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 text-left">
          <div className="mb-2">
            <h4 className="text-lg font-semibold text-gray-900">Simran S.</h4>
            <div className="text-yellow-500 text-sm">★★★★★</div>
          </div>
          <p className="text-gray-700 italic">
            Laser Spot Brampton is the best! I did laser hair removal on my
            face, and after five sessions my hair has barely grown back! Would
            definitely recommend 😊
          </p>
        </div>
      </div>
    </section>

    <section className="bg-pink-50 py-12 px-4 text-center">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        Ready to Experience the Laser Spot Difference?
      </h3>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
        <a
          href="https://www.laserspot.ca/booking-calendar/free-consultation?referral=service_list_widget"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-pink-700 transition shadow-md"
        >
          Book Online
        </a>
        <a
          href="tel:+14168431396"
          className="bg-white border border-pink-600 text-pink-600 font-semibold px-6 py-3 rounded-full hover:bg-pink-50 transition shadow-md"
        >
          Call Now
        </a>
      </div>
    </section>
  </FadeSection>
);

const ServiceExplanation = () => (
  <FadeSection>
    <section className="bg-white py-16 px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">What to Expect</h2>
      <p className="max-w-2xl mx-auto text-gray-600 text-lg">
        Our face laser hair removal treatment is quick, gentle, and customized
        for your skin type. You’ll see smoother skin in just a few sessions,
        with no downtime. Perfect for upper lip, chin, and jawline areas.
      </p>
    </section>
  </FadeSection>
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
