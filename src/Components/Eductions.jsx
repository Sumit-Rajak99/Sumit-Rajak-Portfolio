import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaCalendarAlt,
  FaLaptopCode,
  FaBrain,
  FaRobot,
  FaSchool,
} from "react-icons/fa";

const education = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    institute: "Barkatullah University, Bhopal",
    year: "2024 - Present",
    icon: <FaGraduationCap />,
    description:
      "Pursuing BCA with core subjects including Programming, Data Structures, DBMS, Operating Systems, Computer Networks and Software Engineering.",
  },

  {
    title: "Full Stack Web Development",
    institute: "Cybrom Institute of Technology",
    year: "2025 - Present",
    icon: <FaLaptopCode />,
    description:
      "Learning React.js, JavaScript, Tailwind CSS, Django, Django REST Framework, REST APIs, SQL, Git and GitHub by building real-world projects.",
  },

  {
    title: "Data Science & Artificial Intelligence",
    institute: "Cybrom Institute of Technology",
    year: "2025 - Present",
    icon: <FaBrain />,
    description:
      "Learning Python, NumPy, Pandas, Data Analysis, Statistics, Machine Learning and Data Visualization using real-world datasets.",
  },

  {
    title: "Generative AI",
    institute: "Cybrom Institute of Technology",
    year: "2026 - Present",
    icon: <FaRobot />,
    description:
      "Learning Prompt Engineering, Large Language Models (LLMs), OpenAI APIs, AI Chatbots, RAG and AI-powered application development.",
  },

  {
    title: "Higher Secondary (12th)",
    institute: "MP Board",
    year: "2024",
    icon: <FaSchool />,
    description:
      "Completed Higher Secondary Education with a strong academic foundation.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 bg-gradient-to-b from-white via-blue-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-blue-600 uppercase tracking-[4px] font-semibold">
            Qualification
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold mt-4">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              My Education
            </span>
          </h2>

          <div className="w-32 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-6"></div>
        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-6 top-0 w-1 h-full bg-blue-200 rounded-full"></div>

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="relative flex gap-8 mb-12"
            >
              {/* Timeline Icon */}

              <div className="relative z-10 flex-shrink-0">

                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-xl text-2xl">
                  {item.icon}
                </div>

              </div>

              {/* Card */}

              <div className="flex-1 bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-blue-300/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 p-8">

                {/* Year */}

                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
                  <FaCalendarAlt />
                  {item.year}
                </div>

                {/* Title */}

                <h3 className="text-2xl font-bold text-gray-800 mt-5">
                  {item.title}
                </h3>

                {/* Institute */}

                <div className="flex items-center gap-3 mt-3 text-gray-600">
                  <FaUniversity className="text-blue-600" />
                  <span className="font-medium">{item.institute}</span>
                </div>

                {/* Description */}

                <p className="text-gray-600 leading-8 mt-5">
                  {item.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Education;