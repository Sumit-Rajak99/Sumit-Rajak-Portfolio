import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import profile from "../assets/images/profile.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl mb-3">👋 Hello, I'm</h3>

          <h1 className="text-6xl font-bold mb-4">
            Sumit Rajak
          </h1>

          <TypeAnimation
            sequence={[
              "React Developer", 2000,
              "Django Developer", 2000,
              "Python Developer", 2000,
              

            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            className="text-3xl text-blue-600 font-semibold"
          />

          <p className="mt-6 text-gray-600">
            I build modern, responsive and user-friendly web applications.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Hire Me
            </button>

            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white">
              Download CV
            </button>
          </div>

          <div className="flex gap-6 mt-8 text-3xl">
            <FaGithub className="cursor-pointer hover:text-blue-600" />
            <FaLinkedin className="cursor-pointer hover:text-blue-600" />
            <FaEnvelope className="cursor-pointer hover:text-blue-600" />
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src={profile}
            alt="Profile"
            className="w-80 rounded-full shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;