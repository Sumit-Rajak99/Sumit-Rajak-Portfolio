import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    { name: "Certificates", id: "certificates" },
    { name: "Contact", id: "contact" },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      link: "https://github.com/Sumit-Rajak99",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/",
      label: "LinkedIn",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/",
      label: "Instagram",
    },
    {
      icon: <FaWhatsapp />,
      link: "https://wa.me/YOUR_NUMBER",
      label: "WhatsApp",
    },
    {
      icon: <FaTwitter />,
      link: "https://twitter.com/",
      label: "Twitter",
    },
  ];

  const handleLinkClick = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="relative bg-white border-t border-gray-200">

      {/* Top Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        {/* Main Footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                S
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-gray-900">
                  Sumit<span className="text-blue-600">.</span>
                </h2>

                <p className="text-xs uppercase tracking-[2px] text-gray-500">
                  Full Stack Developer
                </p>
              </div>

            </div>

            <p className="text-gray-500 leading-7 mt-6 max-w-md">
              I build modern, responsive and user-friendly web applications
              using React, Django, Python and modern web technologies.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-7">

              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-xl bg-gray-100 text-gray-600 flex items-center justify-center text-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-y-4">

              {quickLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className="text-left text-gray-500 hover:text-blue-600 transition-colors duration-300"
                >
                  → {item.name}
                </button>
              ))}

            </div>
          </div>

          {/* Let's Connect */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Let's Connect
            </h3>

            <p className="text-gray-500 leading-7">
              Have a project idea or freelance opportunity? Let's discuss
              how we can work together.
            </p>

            <button
              onClick={() => handleLinkClick("contact")}
              className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Get In Touch →
            </button>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-14 pt-7">

          <div className="flex flex-col md:flex-row items-center justify-between gap-5">

            {/* Copyright */}
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2026{" "}
              <span className="font-semibold text-gray-800">
                Sumit Rajak
              </span>
              . All rights reserved.
            </p>

            {/* Made With */}
            <p className="text-gray-500 text-sm flex items-center gap-2">
              Made with
              <FaHeart className="text-red-500" />
              using React & Tailwind CSS
            </p>

            {/* Back To Top */}
            <button
              onClick={scrollToTop}
              className="w-11 h-11 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
              aria-label="Back to top"
            >
              <FaArrowUp />
            </button>

          </div>

        </div>

      </div>
      
    </footer>
  );
};

export default Footer;