import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import uniLogo from "../assets/education.png";

function Education() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <section
      id="education"
      className="relative overflow-hidden bg-gradient-to-br from-[#0d1c48] via-[#10285f] to-[#020b1c] px-6 py-12 text-white sm:px-10 lg:px-20"
    >
      {/* Background glow */}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-400/20 blur-[120px]" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-[140px]" />

      <div
        data-aos="fade-up"
        className="relative mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        {/* Title */}
        <p className="mb-2 text-3xl font-medium uppercase tracking-[0.3em] text-blue-300">
          My Journey
        </p>

        {/* Underline */}
        <div className="mt-0 h-0.5 w-20 rounded-full bg-gradient-to-r from-blue-800 to-white" />

        <h2 className="mt-11 text-3xl font-bold text-white sm:text-3xl">
          Education
        </h2>

        {/* Education Card */}
        <div
          data-aos="zoom-in"
          data-aos-delay="150"
          className="mt-5 w-full max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-md sm:p-8"
        >
          <img
            src={uniLogo}
            alt="Open University of Sri Lanka logo"
            className="mx-auto mb-6 w-28 sm:w-36"
          />

          <h3 className="mb-2 text-xl font-semibold text-white sm:text-2xl">
            Bachelor of Software Engineering (Hons)
          </h3>

          <p className="text-gray-300">
            Open University of Sri Lanka
          </p>

          <p className="mt-2 text-base font-medium text-blue-300">
            Undergraduate
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;