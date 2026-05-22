const contactLinks = [
  {
    label: "Email",
    icon: "📧",
    text: "piyumikagunathilaka276@gmail.com",
    href: "mailto:piyumikagunathilaka276@gmail.com",
  },
  {
    label: "GitHub",
    icon: "💻",
    text: "github.com/piyumikagunathilaka276-cmd",
    href: "https://github.com/piyumikagunathilaka276-cmd",
  },
  {
    label: "LinkedIn",
    icon: "💼",
    text: "linkedin.com/in/nethmini-gunathilaka",
    href: "https://www.linkedin.com/in/nethmini-gunathilaka-0b597221b/",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-[#093f6c] to-[#040e35] px-6 py-5 text-white sm:px-10 lg:px-20"
    >
      {/* Background glow */}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-400/20 blur-[120px]" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-[140px]" />

      <div className="relative mx-auto max-w-3xl text-center">
        {/* Heading */}
        <p className="mb-3 text-3xl font-medium uppercase tracking-[0.3em] text-blue-300">
          Get In Touch
        </p>

        <div className="mx-auto mt-4 h-0.5 w-24 rounded-full bg-gradient-to-r from-blue-600 to-white" />

        <h2 className="mt-8 text-3xl font-bold text-white sm:text-3xl">
          Contact Me
        </h2>


        <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-gray-300 sm:text-base">
          I am currently looking for internship opportunities. Feel free to
          contact me for collaborations, projects, or opportunities.
        </p>

        {/* Contact Box */}
        <div className="mx-auto mt-3 max-w-xl rounded-2xl border border-white/10 bg-white/5 p-3 text-left shadow-xl backdrop-blur-md sm:p-8">
          <div className="space-y-4">  
            {contactLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.label === "Email" ? "_self" : "_blank"}
                rel={item.label === "Email" ? undefined : "noopener noreferrer"}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-400/10 text-lg">
                  {item.icon}
                </span>

                <div>
                  <p className="text-sm font-medium text-white">
                    {item.label}
                  </p>
                  <p className="break-all text-sm text-gray-300">
                    {item.text}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="mailto:piyumikagunathilaka276@gmail.com"
              className="inline-block rounded-full border border-white px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-[#040e35]"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 