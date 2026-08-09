import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaCode,
  FaTwitter,
  FaPaperPlane,
  FaArrowRight,
} from "react-icons/fa";

const contactLinks = [
  {
    name: "Email",
    username: "sumitrajaksumitrajak793@gmail.com",
    icon: <FaEnvelope />,
    link: "mailto:sumitrajaksumitrajak793@gmail.com",
  },
  {
    name: "GitHub",
    username: "Sumit-Rajak99",
    icon: <FaGithub />,
    link: "https://github.com/Sumit-Rajak99",
  },
  {
    name: "LinkedIn",
    username: "Connect with me",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/sumit-rajak14/",
  },
  {
    name: "LeetCode",
    username: "Coding Profile",
    icon: <FaCode />,
    link: "https://leetcode.com/u/logics_sumit/",
  },
  {
    name: "WhatsApp",
    username: "Let's chat",
    icon: <FaWhatsapp />,
    link: "https://wa.me/919926381513",
  },
  {
    name: "Instagram",
    username: "Follow me",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/sidwebstudio/",
  },
  {
    name: "Twitter / X",
    username: "Follow me",
    icon: <FaTwitter />,
    link: "https://x.com/SumitRajak95517",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp number with India country code
    const whatsappNumber = "919926381513";

    const whatsappMessage = `Hello Sumit 👋

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 px-6 bg-white"
    >
      {/* Background Decoration */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-100 rounded-full blur-3xl opacity-60"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[5px] text-blue-600 font-semibold">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mt-4">
            Let's Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Together
            </span>
          </h2>

          <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-6"></div>

          <p className="max-w-2xl mx-auto text-gray-500 mt-6 text-lg leading-8">
            Have a project idea, freelance opportunity, or just want to say
            hello? I'd love to hear from you.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Intro Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 shadow-sm mb-8">

              <span className="inline-block px-4 py-2 rounded-full bg-white border border-blue-100 text-blue-600 text-sm font-semibold shadow-sm">
                Available for opportunities
              </span>

              <h3 className="text-3xl font-bold text-gray-900 mt-6">
                Let's build something{" "}
                <span className="text-blue-600">
                  amazing.
                </span>
              </h3>

              <p className="text-gray-600 mt-5 leading-7">
                I'm a Full Stack Developer passionate about creating modern,
                responsive and user-friendly web applications using React,
                Django, Python and modern technologies.
              </p>

              <a
                href="mailto:sumitrajaksumitrajak793@gmail.com"
                className="inline-flex items-center gap-3 mt-7 text-blue-600 font-semibold hover:text-cyan-600 transition"
              >
                Start a conversation
                <FaArrowRight />
              </a>
            </div>

            {/* Social Cards */}
            <div className="grid sm:grid-cols-2 gap-4">

              {contactLinks.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-500 text-white text-xl shadow-md">
                    {item.icon}
                  </div>

                  <div className="min-w-0">
                    <h4 className="text-gray-900 font-bold">
                      {item.name}
                    </h4>

                    <p className="text-gray-500 text-sm truncate">
                      {item.username}
                    </p>
                  </div>
                </motion.a>
              ))}

            </div>
          </motion.div>

          {/* RIGHT SIDE - FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="p-8 md:p-10 rounded-3xl bg-white border border-gray-200 shadow-xl">

              <div className="mb-8">
                <p className="text-blue-600 font-semibold tracking-wide">
                  SEND A MESSAGE
                </p>

                <h3 className="text-3xl font-bold text-gray-900 mt-2">
                  Tell me about your project
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name */}
                <div>
                  <label className="text-gray-700 text-sm font-semibold">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="mt-2 w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-gray-700 text-sm font-semibold">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="mt-2 w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="text-gray-700 text-sm font-semibold">
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    required
                    className="mt-2 w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-gray-700 text-sm font-semibold">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell me about your project..."
                    required
                    className="mt-2 w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 outline-none resize-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
                  ></textarea>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg shadow-lg shadow-blue-200 hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
                >
                  <FaPaperPlane />
                  Send Message
                </button>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;