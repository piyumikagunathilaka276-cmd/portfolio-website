import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Code2, Database, Layout, Wrench, User, Frame } from "lucide-react";

const skills = [
  {
    title: "Frontend Development",
    icon: <Layout size={20} />,
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Programming Languages",
    icon: <Code2 size={20} />,
    items: ["Java", "C", "Python"],
  },
  {
    title: "Tools & Technologies",
    icon: <Wrench size={20} />,
    items: ["Git & GitHub", "VS Code", "NetBeans"],
  },
  {
    title: "UI/UX Design",
    icon: <Frame size={20} />,
    items: ["Figma", "Wireframing", "Prototyping", "User Flow Design"],
  },
  {
    title: "Backend / Database",
    icon: <Database size={20} />,
    items: ["MySQL", "REST API Basics"],
  },
  {
    title: "Soft Skills",
    icon: <User size={20} />,
    items: ["Teamwork", "Communication", "Problem Solving", "Time Management"],
  },
];

function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden bg-cover bg-center bg-fixed px-6 py-20 text-white sm:px-10 lg:px-20"
      style={{ backgroundImage: "url('/SkillBack.png')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Background glows */}
      <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl" data-aos="fade-up">
        {/* Title */}
        <div className="mb-11 text-center">
          <p className="mb-3 text-3xl font-medium uppercase tracking-[0.3em] text-blue-300">
            My Skills
          </p>

          <div className="mx-auto mt-4 h-0.5 w-24 rounded-full bg-gradient-to-r from-blue-600 to-white" />

          <h2 className="mt-11 text-3xl font-bold text-white sm:text-3xl">
            Technologies I Work With
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-300 sm:text-base">
            A collection of technologies, tools, and skills I use for frontend
            development, UI/UX design, and software projects.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:bg-white/10"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-400/10 text-blue-300">
                  {skill.icon}
                </div>

                <h3 className="text-base font-semibold text-white sm:text-lg">
                  {skill.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-gray-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;