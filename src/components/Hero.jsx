import heroImg from "../assets/webpic1.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#15346a] text-white"
    >
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[34%_66%]">
        {/* Left Content */}
        <div className="relative z-20 flex flex-col justify-center px-6 py-24 sm:px-10 lg:px-12">
          <p className="absolute left-6 top-6 text-sm font-medium text-blue-300 sm:left-10 lg:left-12">
            Nethmi.me
          </p>

          <p className="-mt-5 text-base tracking-[0.35em] text-blue-200">
            HELLO
          </p>

          <h1 className="mb-6 max-w-4xl text-5xl font-bold leading-tight drop-shadow-xl sm:text-6xl lg:absolute lg:left-[8%] lg:top-[32%] lg:text-8xl whitespace-nowrap">
            I’m Nethmini
          </h1>

          <p className="mb-24 max-w-sm text-xl leading-relaxed text-white/90 sm:text-2xl lg:mt-40">
            Aspiring Software Engineer <br />
            Passionate About UI/UX Design
          </p>

          <a
            href="#projects"
            className="w-fit border border-white px-6 py-3 text-sm font-medium transition hover:bg-white hover:text-[#15346A]"
            >
             Explore My Work
           </a>

           </div>

        {/* Right Image */}
        <div className="relative min-h-[420px] lg:min-h-screen">
          <img
            src={heroImg}
            alt="Nethmini portfolio hero"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#15346A]/40 lg:to-transparent" />

          {/* Summary Box */}
          <div className="absolute bottom-0 left-0 right-0 bg-white px-1 py-1 text-gray-700 shadow-xl sm:px-10 lg:px-12">
            <p className="mb-3 max-w-4xl text-sm leading-relaxed sm:text-base">
              Turning ideas into clean, responsive, and user-friendly web experiences is 
              what I enjoy most. My main focus is frontend development with React and
              Tailwind CSS, while I continue building my knowledge in backend development
              to become a well-rounded developer.
            </p>

            <button className="bg-gray-900 px-4 py-1 text-sm font-medium text-white transition hover:bg-[#15346A]">
              VIEW RESUME
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
