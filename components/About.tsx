"use client";
import { motion } from "motion/react";
import { Award, Coffee, Heart, Star } from "lucide-react";

const stats = [
  { icon: Award, label: "Years Experience", value: "5" },
  { icon: Coffee, label: "Projects Completed", value: "6" },
];

export default function About() {
  return (
    <section className="py-32 bg-linear-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-purple-600 to-pink-600">
              About Me
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                {" "}
                I’m a frontend developer who genuinely enjoys turning ideas into
                clean, usable, and high-performing web experiences. I focus a
                lot on how things feel to the user, making sure interfaces are
                responsive, accessible, and intuitive while still keeping
                performance and scalability top of mind.
              </p>

              <p>
                Technically, I’m comfortable with modern frontend tools like
                React, Next.js, TypeScript, Tailwind CSS, and REST APIs, and I
                enjoy collaborating with designers using tools like Figma to
                bring designs to life. I also have experience working in Agile
                environments, setting up CI/CD pipelines, and maintaining clean,
                well-structured codebases.
              </p>

              <p>
                Overall, I’m someone who cares deeply about building reliable,
                user-centric products—apps that not only look good, but work
                smoothly across devices and stand the test of time.
              </p>
            </div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-xl transition-shadow"
              >
                Let's Work Together
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="bg-white rounded-2xl p-8 shadow-lg text-center"
                >
                  <motion.div
                    className="inline-flex p-4 rounded-full bg-linear-to-r from-purple-500 to-pink-500 mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="text-white" size={28} />
                  </motion.div>
                  <div className="text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-purple-600 to-pink-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
