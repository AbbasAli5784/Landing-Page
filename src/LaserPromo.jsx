import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Face from "./img/face.jpg"; // Hero background image

const searchParams = new URLSearchParams(window.location.search);
const adVariant = searchParams.get("ad");

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

  const getHeadline = () => {
    switch (adVariant) {
      case "face":
        return "🌟 50% Off Face Laser Hair Removal 🌟";
      case "general":
        return "🌟 50% Off Laser Hair Removal Services 🌟";
      default:
        return "🌟 Face Laser Hair Removal – Only $79.99 🌟";
    }
  };

  const getSubtext = () => {
    switch (adVariant) {
      case "face":
        return "Get 50% off our gentle and effective face treatments. First-time clients only.";
      case "general":
        return "Smooth, safe, and lasting results — now 50% off for new clients.";
      default:
        return "(Reg. $150) Smooth, safe, and long-lasting results. First-time clients only.";
    }
  };

  return (
    <motion.section
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={heroControls}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 -z-10"
        style={{ backgroundImage: `url(${Face})` }}
      />
      <div className="absolute inset-0 bg-pink-100 bg-opacity-60 -z-10" />
      <div className="z-10 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 drop-shadow-lg">
          {getHeadline()}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6 drop-shadow">
          {getSubtext()}
        </p>
        <a
          href="https://www.laserspot.ca/booking-calendar/free-consultation?referral=service_list_widget"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.preventDefault();
            gtag_report_conversion(
              "https://www.laserspot.ca/booking-calendar/free-consultation?referral=service_list_widget"
            );
            setTimeout(() => {
              window.location.href =
                "https://www.laserspot.ca/booking-calendar/free-consultation?referral=service_list_widget";
            }, 300);
          }}
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

      {/* Elfsight Google Reviews */}
      <div className="max-w-4xl mx-auto">
        <div
          className="elfsight-app-fef96e09-37fc-4b5d-bebf-caa44cf77e84"
          data-elfsight-app-lazy
        ></div>
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
          onClick={(e) => {
            e.preventDefault();
            gtag_report_conversion(
              "https://www.laserspot.ca/booking-calendar/free-consultation?referral=service_list_widget"
            );
            setTimeout(() => {
              window.location.href =
                "https://www.laserspot.ca/booking-calendar/free-consultation?referral=service_list_widget";
            }, 300);
          }}
          className="bg-pink-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-pink-700 transition shadow-md"
        >
          Book Online
        </a>
        <a
          href="tel:+14168431396"
          onClick={(e) => {
            e.preventDefault();
            gtag_report_conversion("tel:+14168431396");
            setTimeout(() => {
              window.location.href = "tel:+14168431396";
            }, 300);
          }}
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
        for your skin type. You'll see smoother skin in just a few sessions,
        with no downtime.
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
