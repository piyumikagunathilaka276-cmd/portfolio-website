import { useEffect } from "react";
import { Frame, Code2, TrendingUp } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

import aboutImg from "../assets/aboute1.png";

const highlights = [
  {
    title: "UI/UX Design",
    icon: <Frame size={18} />,
  },
  {
    title: "Frontend Development",
    icon: <Code2 size={18} />,
  },
  {
    title: "Always Improving",
    icon: <TrendingUp size={18} />,
  },
];

function About() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-[#17366b] via-[#0e2650] to-[#020b1c] px-6 py-12 sm:px-10 lg:px-20"
    >
      {/* Background glows */}
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-[140px]" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left Image */}
        <div
          data-aos="fade-right"
          className="flex justify-center lg:justify-start"
        >
          <div className="relative max-w-sm rounded-2xl">
            <div className="absolute inset-0 rounded-2xl bg-blue-500/20 blur-2xl" />

            <img
              src={aboutImg}
              alt="About Nethmini"
              className="relative w-full rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>

        {/* Right Content */}
        <div
          data-aos="fade-left"
          className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-xl backdrop-blur-md sm:p-8"
        >
          <p className="mb-2 text-2xl font-bold uppercase tracking-[0.3em] text-blue-300">
            About Me
          </p>

           {/* Two color underline */}
          <div className="margin-left mb-5 h-0.5 w-24 rounded-full bg-gradient-to-r from-blue-600 to-white"></div>

          <h2 className="mb-2 text-3xl font-bold leading-tight sm:text-2xl">
            Building clean and user-friendly web experiences.
          </h2>

          <p className="mb-6 leading-relaxed text-gray-200">
             I am an undergraduate Software Engineering student with a strong interest in
             UI/UX design and frontend development. I enjoy creating clean, simple, and
             user-friendly digital experiences that solve real problems.
          </p>

          <p className="mb-8 leading-relaxed text-gray-300">
           Through academic work and personal projects, I am continuously improving my
           skills in React, Tailwind CSS, and modern web development. I am currently
           looking for an internship opportunity where I can learn, contribute, and grow
           as a software engineer.
          </p>

          <div className="grid gap-3 text-sm text-gray-200 sm:grid-cols-3">
            {highlights.map((item, index) => (
          <div
             key={index}
             className="rounded-xl border border-white/10 bg-white/5 p-2 transition hover:-translate-y-1 hover:bg-white/10"
          >
             <div className="mb-3 flex h-3 w-5 items-center justify-center rounded-lg bg-blue-400/10 text-blue-300">
             {item.icon}
             </div>

           <p>{item.title}</p>
          </div>
           ))}

         </div>
        </div>
      </div>
    </section>
  );
}

export default About;