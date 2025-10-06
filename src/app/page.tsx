"use client";
import { motion } from "framer-motion";

export default function Home() {
  const websites = [
    {
      title: "My Steak Restaurant",
      url: "https://mysteak.com",
      desc: "Online reservation system for a steakhouse.",
      img: "/websites/mysteak.png",
    },
    {
      title: "Art Portfolio",
      url: "https://artbyattala.com",
      desc: "Showcasing my digital illustration works.",
      img: "/websites/portfolio.png",
    },
    {
      title: "Task Manager App",
      url: "https://taskapp.com",
      desc: "A simple task reminder and to-do list app.",
      img: "/websites/taskapp.png",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur shadow">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold">Attala</h1>
          <nav className="space-x-6 font-medium">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#websites" className="hover:text-blue-600">Websites</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Hello, I’m Attala 👋
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-xl md:text-2xl max-w-xl"
        >
          Visual Communication Designer & Digital Illustrator
        </motion.p>
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100"
        >
          Explore My Work
        </motion.a>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-24 max-w-4xl mx-auto">
        <motion.h3 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          About Me
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="text-lg leading-relaxed text-gray-700"
        >
          I’m passionate about digital illustration and design. For me, design is more than just visuals — it’s a way to tell stories and connect with people. I love working on creative projects, from posters to UI/UX design, always aiming for clean and meaningful results.
        </motion.p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-24 bg-gray-100">
        <h3 className="text-4xl font-bold mb-12 text-center">Featured Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1,2,3].map((project) => (
            <motion.div 
              key={project}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center">Image {project}</div>
              <div className="p-6">
                <h4 className="font-bold text-xl">Project {project}</h4>
                <p className="mt-2 text-gray-600">Short description of this project.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Websites Section */}
      <section id="websites" className="px-6 py-24">
        <h3 className="text-4xl font-bold mb-12 text-center">Websites I’ve Built</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {websites.map((site, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white shadow-lg rounded-2xl overflow-hidden group"
            >
              <div className="relative h-48 bg-gray-200">
                <img src={site.img} alt={site.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <a href={site.url} target="_blank" rel="noopener noreferrer" 
                     className="bg-white text-indigo-600 px-4 py-2 rounded-full font-semibold">
                    Visit →
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-xl">{site.title}</h4>
                <p className="mt-2 text-gray-600">{site.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-24 max-w-4xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-6">Contact Me</h3>
        <p className="mb-8 text-lg text-gray-700">Interested in working together? Let’s connect!</p>
        <a href="mailto:youremail@example.com" 
           className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-700 transition">
          Say Hello
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 bg-gray-900 text-gray-400">
        © {new Date().getFullYear()} Attala. All rights reserved.
      </footer>
    </main>
  );
}
