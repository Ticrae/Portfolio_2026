"use client";

import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Blog App",
    description:
      "Modern, Netlify-hosted blog web app that showcases cryptocurrency and tech articles in a clean, user-friendly layout with easy navigation and subscription functionality.",
    image: "/blog.png",
    tags: ["Nextjs", "TypeScript", "Tailwind CSS", "SEO"],
    github: "https://github.com/Ticrae/blog_nextjs",
    demo: "https://utibeblog.netlify.app/",
  },
  {
    id: 2,
    title: "Food App",
    description:
      "A secure, role-based frontend system with authentication-restricted user flows. Order management, reinforcing experience with enterprise-style interfaces and data-driven UI.",
    image: "/foodapp.png",
    tags: [
      "Wordpress",
      "WooCommerce",
      "Responsive web design",
      "Wordpress REST API",
    ],
    github: "https://github.com/Ticrae",
    demo: "https://dessertsandmain.com/",
  },
  {
    id: 3,
    title: "Movie App",
    description:
      "A high-performance frontend application integrating external REST APIs (TMDB) with optimized API call caching to reduce latency and improve scalability.Implemented dynamic search and filtering with a focus on performance and maintainability.",
    image: "/movieapp.png",
    tags: ["React", "MUI", "Tailwind", "TDMB-UI"],
    github: "https://github.com/Ticrae/MovieApp",
    demo: "https://utimovieapp.netlify.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-purple-600 to-pink-600">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600">A selection of my recent work</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <ExternalLink size={20} />
                    <span>Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
