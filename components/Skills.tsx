"use client";

import { motion } from "motion/react";
import { Code2, Palette, Zap, Users, Rocket, Sparkles } from "lucide-react";

const skills = [
  {
    category: "Frontend Development",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    items: [
      "React",
      "TypeScript",
      "Next.js",
      "Vue.js",
      "Tailwind CSS",
      "Redux",
    ],
  },
  {
    category: "UI/UX Design",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    items: [
      "Figma",
      "Adobe XD",
      "Responsive Design",
      "Accessibility",
      "User Testing",
    ],
  },
  {
    category: "Performance",
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
    items: ["Web Vitals", "Code Splitting", "Lazy Loading", "SEO", "PWA"],
  },
  {
    category: "Collaboration",
    icon: Users,
    color: "from-green-500 to-emerald-500",
    items: ["Git", "Agile", "Code Review", "Mentoring", "Documentation"],
  },
  {
    category: "Build Tools",
    icon: Rocket,
    color: "from-red-500 to-rose-500",
    items: ["Vite", "Webpack", "npm/pnpm", "CI/CD", "Docker"],
  },
  {
    category: "Modern Tech",
    icon: Sparkles,
    color: "from-indigo-500 to-violet-500",
    items: ["GraphQL", "WebSockets", "Three.js", "Motion", "Zustand"],
  },
];

export default function Skills() {
  return (
    <section className="py-32 bg-linear-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-[#1F2937] bg-linear-to-r">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div
                  className={`inline-flex p-4 rounded-xl bg-linear-to-r ${skill.color} mb-4`}
                >
                  <Icon className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-bold mb-4">{skill.category}</h3>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <motion.span
                      key={item}
                      className="px-3 py-1.5 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-linear-to-r hover:from-purple-100 hover:to-pink-100 hover:text-purple-700 transition-all"
                      whileHover={{ scale: 1.05 }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
