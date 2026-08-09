import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaJsSquare,
} from "react-icons/fa";
import {
  SiDjango,
  SiTailwindcss,
  SiMysql,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    level: 90,
    icon: <FaReact className="text-sky-500 text-4xl" />,
  },
  {
    name: "Django",
    level: 85,
    icon: <SiDjango className="text-green-700 text-4xl" />,
  },
  {
    name: "Python",
    level: 90,
    icon: <FaPython className="text-yellow-500 text-4xl" />,
  },
  {
    name: "JavaScript",
    level: 80,
    icon: <FaJsSquare className="text-yellow-400 text-4xl" />,
  },
  {
    name: "SQL",
    level: 85,
    icon: <SiMysql className="text-blue-500 text-4xl" />,
  },
  {
    name: "Tailwind CSS",
    level: 90,
    icon: <SiTailwindcss className="text-cyan-400 text-4xl" />,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16"
        >
          My <span className="text-blue-600">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                {skill.icon}

                <div className="flex-1">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-bold text-lg">
                      {skill.name}
                    </h3>

                    <span className="font-semibold">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${skill.level}%`,
                      }}
                      transition={{
                        duration: 1.5,
                      }}
                      viewport={{ once: true }}
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                    />

                  </div>

                </div>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;