import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

import dsa from "../assets/images/dsa.png";
import leetcode200 from "../assets/images/leetcode2026_200.png";
import rgc from "../assets/images/RGC.png";

const certificates = [
  {
    title: "Data Science & AI",
    issuer: "Cybrom Institute",
    image: dsa,
    link: "#",
  },
  {
    title: "200 Problems Achievement",
    issuer: "LeetCode",
    image: leetcode200,
    link: "#",
  },
  {
    title: "RGC Certificate",
    issuer: "RGC",
    image: rgc,
    link: "#",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[5px] text-blue-600 font-semibold">
            Achievements
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold mt-4">
            My{" "}
            <span className="text-blue-600">
              Certificates
            </span>
          </h2>

          <div className="w-32 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-5"></div>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificates.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <div className="flex justify-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg">
                    <FaAward className="text-white text-2xl" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-center mt-5">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-center mt-2">
                  {item.issuer}
                </p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
                >
                  <FaExternalLinkAlt />
                  View Certificate
                </a>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Certificates;