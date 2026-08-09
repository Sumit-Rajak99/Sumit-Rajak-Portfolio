import { motion } from "framer-motion";
import {
  FaUser,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaBriefcase,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

import profile from "../assets/images/profile.png";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 px-6"
    >
      {/* Background Decorations */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-60"></div>

      <div className="absolute bottom-10 -right-20 w-72 h-72 bg-cyan-100 rounded-full blur-3xl opacity-60"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[5px] text-blue-600 font-semibold">
            Get To Know Me
          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mt-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Me
            </span>
          </h2>

          <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-6"></div>

          <p className="max-w-2xl mx-auto text-gray-500 mt-6 text-lg leading-8">
            A passionate developer focused on building modern and meaningful
            digital experiences.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT - PROFILE */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">

              {/* Outer Glow */}
              <div className="absolute -inset-5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-[2.5rem] blur-xl opacity-20"></div>

              {/* Profile Card */}
              <div className="relative bg-white p-4 rounded-[2.5rem] shadow-2xl border border-gray-100">

                <div className="relative overflow-hidden rounded-[2rem]">

                  <img
                    src={profile}
                    alt="Sumit Rajak"
                    className="w-80 h-[420px] md:w-[380px] md:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                  />

                  {/* Image Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-7 pt-20">
                    <h3 className="text-white text-2xl font-bold">
                      Sumit Rajak
                    </h3>

                    <p className="text-cyan-300 mt-1">
                      Full Stack Developer
                    </p>
                  </div>

                </div>

                {/* Floating Badge */}
                <div className="absolute -right-6 top-12 bg-white rounded-2xl shadow-xl px-5 py-4 border border-gray-100">
                  <p className="text-2xl font-extrabold text-blue-600">
                    BCA
                  </p>

                  <p className="text-xs text-gray-500">
                    Student
                  </p>
                </div>

              </div>
            </div>
          </motion.div>

          {/* RIGHT - CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <p className="text-blue-600 font-semibold uppercase tracking-wider">
              Who I Am
            </p>

            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 leading-tight">
              I'm a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Full Stack Developer
              </span>
            </h3>

            <p className="text-gray-600 leading-8 mt-6">
              I'm{" "}
              <span className="font-bold text-blue-600">
                Sumit Rajak
              </span>
              , a passionate developer who enjoys creating modern,
              responsive and user-friendly web applications.
            </p>

            <p className="text-gray-600 leading-8 mt-4">
              I work with technologies like{" "}
              <span className="font-semibold text-gray-800">
                React, Django, Python, JavaScript, SQL and Tailwind CSS
              </span>
              . I continuously improve my development and problem-solving
              skills by building projects and practicing DSA.
            </p>

            {/* Information Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">

              {/* Name */}
              <div className="group flex items-center gap-4 p-5 rounded-2xl bg-blue-50 border border-blue-100 hover:bg-blue-600 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-600 group-hover:bg-white flex items-center justify-center text-white group-hover:text-blue-600 transition">
                  <FaUser />
                </div>

                <div>
                  <p className="text-sm text-gray-500 group-hover:text-blue-100">
                    Name
                  </p>

                  <h4 className="font-bold text-gray-900 group-hover:text-white">
                    Sumit Rajak
                  </h4>
                </div>
              </div>

              {/* Degree */}
              <div className="group flex items-center gap-4 p-5 rounded-2xl bg-cyan-50 border border-cyan-100 hover:bg-cyan-500 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-cyan-500 group-hover:bg-white flex items-center justify-center text-white group-hover:text-cyan-500 transition">
                  <FaGraduationCap />
                </div>

                <div>
                  <p className="text-sm text-gray-500 group-hover:text-cyan-100">
                    Degree
                  </p>

                  <h4 className="font-bold text-gray-900 group-hover:text-white">
                    BCA
                  </h4>
                </div>
              </div>

              {/* Location */}
              <div className="group flex items-center gap-4 p-5 rounded-2xl bg-blue-50 border border-blue-100 hover:bg-blue-600 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-600 group-hover:bg-white flex items-center justify-center text-white group-hover:text-blue-600 transition">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-sm text-gray-500 group-hover:text-blue-100">
                    Location
                  </p>

                  <h4 className="font-bold text-gray-900 group-hover:text-white">
                    Bhopal, India
                  </h4>
                </div>
              </div>

              {/* Experience */}
              <div className="group flex items-center gap-4 p-5 rounded-2xl bg-cyan-50 border border-cyan-100 hover:bg-cyan-500 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-cyan-500 group-hover:bg-white flex items-center justify-center text-white group-hover:text-cyan-500 transition">
                  <FaBriefcase />
                </div>

                <div>
                  <p className="text-sm text-gray-500 group-hover:text-cyan-100">
                    Experience
                  </p>

                  <h4 className="font-bold text-gray-900 group-hover:text-white">
                    Fresher
                  </h4>
                </div>
              </div>

            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <FaDownload />
                Download Resume
              </a>

              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl border-2 border-blue-600 text-blue-600 font-bold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Contact Me
                <FaArrowRight />
              </button>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;