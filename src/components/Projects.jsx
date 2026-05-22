import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import bgImage1 from "../assets/pro1.png";
import bgImage2 from "../assets/pro2.png";
import bgImage3 from "../assets/pro3.png";

const projects = [
  {
    title: "Food & Nutrition App",
    image: bgImage1,
    description:
      "A mobile app UI for tracking daily nutrition, workouts, and healthy habits.",
    tags: ["Figma", "UI/UX"],
    liveLink: "https://www.figma.com/proto/Ht9KdPuZlt57QMMS2LeEEP/Week-04?node-id=0-1&t=lmV3R83B1aeXl1Va-1",
    githubLink: "#",
  },
  {
    title: "Portfolio Web Page",
    image: bgImage2,
    description:
      "A personal portfolio website showcasing my projects, skills, and development journey.",
    tags: ["React.js", "Tailwind", "UI/UX"],
    liveLink: "https://portfolio-website-ochre-five-76.vercel.app/",
    githubLink: "https://github.com/piyumikagunathilaka276-cmd/portfolio-website",
  },
  {
    title: "Patient Record Management System",
    image: bgImage3,
    description:
      "A Java-based hospital OPD system for efficient patient record management and data handling.",
    tags: ["Java", "MySQL", "UI/UX"],
    liveLink: "#",
    githubLink: "https://github.com/TrojanSquadOrg/Patient_Record_Management_System",
  },
];

function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden bg-cover bg-center bg-fixed px-6 py-20 sm:px-10 lg:px-20"
      style={{ backgroundImage: "url('/ProBack.png')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Background glows */}
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blue-700/20 blur-[120px]" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl" data-aos="fade-up">
        {/* Title */}
        <div className="mb-11 text-center">
         <p className="mt-1 text-3xl font-medium uppercase tracking-[0.3em] text-blue-300">
             My Work
          </p>

        {/* Two color underline */}
          <div className="mx-auto mb-8 mt-0 h-0.5 w-24 rounded-full bg-gradient-to-r from-blue-800 to-white"></div>


          <h2 className="mb-2 text-2xl font-bold text-white sm:text-3xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-300 sm:text-base">
            Some of my recent academic, personal, and UI/UX design projects.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:bg-white/10"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="space-y-4 p-5">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-400">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-full bg-blue-500/15 px-3 py-1 text-xs text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <a
                    href={project.liveLink}
                    className="rounded-lg bg-blue-500 px-4 py-2 text-sm text-white transition hover:bg-blue-600"
                  >
                    Live
                  </a>

                  <a
                    href={project.githubLink}
                    className="rounded-lg border border-white/20 px-4 py-2 text-sm text-white transition hover:bg-white/10"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;