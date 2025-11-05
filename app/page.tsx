"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-gray-700 backdrop-blur-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold tracking-wide bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Abhay Kumar
        </h1>
        <div className="space-x-6 text-gray-300">
          {["About", "Experience", "Skills", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-20 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          React Native & React.js Developer
        </motion.h2>
        <p className="text-gray-400 max-w-2xl mt-4 text-lg">
          Student at <span className="text-cyan-400 font-medium">Chitkara University</span> | 
          Passionate about building seamless web and mobile experiences using modern technologies.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <Button
            variant="outline"
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300"
            asChild
          >
            <a href="mailto:your-email@example.com">
              <Mail className="mr-2 h-4 w-4" /> Email
            </a>
          </Button>
          <Button
            variant="outline"
            className="border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300"
            asChild
          >
            <a
              href="https://linkedin.com/in/abhay-kumar-b1186b34b/"
              target="_blank"
            >
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        className="px-8 py-24 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-4xl font-semibold mb-6 text-cyan-400">About Me</h3>
        <p className="text-gray-300 leading-relaxed text-lg">
          I’m a passionate and dedicated <span className="text-cyan-400">React Native</span> and <span className="text-blue-400">React.js Developer</span> currently pursuing my engineering degree at <span className="text-cyan-400">Chitkara University</span>.
          Through internships and training, I’ve gained hands-on experience building scalable, user-friendly apps using React Native, Redux, and JavaScript (ES6+).
        </p>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        className="px-8 py-24 bg-gray-900/60 backdrop-blur-md"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h3 className="text-4xl font-semibold mb-12 text-center text-blue-400">
          Experience
        </h3>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <Card className="bg-gray-800/60 border border-gray-700 hover:border-cyan-400 transition-all duration-300 shadow-xl hover:shadow-cyan-400/20">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold text-cyan-300">
                React Native Developer (Trainee)
              </h4>
              <p className="text-gray-400 mt-1">
                CodingZone Solutions | May 2025 – Jul 2025
              </p>
              <ul className="list-disc list-inside text-gray-300 mt-3 space-y-1">
                <li>Developed mobile apps using React Native with Redux and APIs.</li>
                <li>Worked on UI design, navigation, and form validations.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/60 border border-gray-700 hover:border-blue-400 transition-all duration-300 shadow-xl hover:shadow-blue-400/20">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold text-blue-300">
                React.js Developer (Trainee)
              </h4>
              <p className="text-gray-400 mt-1">
                AiMantra | May 2024 – Jul 2024
              </p>
              <ul className="list-disc list-inside text-gray-300 mt-3 space-y-1">
                <li>Learned and applied React.js, HTML, CSS, and JavaScript fundamentals.</li>
                <li>Created responsive, modern UI web pages.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="px-8 py-24 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h3 className="text-4xl font-semibold mb-10 text-center text-cyan-400">
          Technical Skills
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-gray-300">
          {[
            "React.js",
            "React Native",
            "Redux",
            "JavaScript (ES6+)",
            "HTML & CSS",
            "API Integration",
          ].map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-800/60 p-4 rounded-xl text-center border border-gray-700 hover:border-cyan-400 shadow-md hover:shadow-cyan-400/10 transition-all duration-300"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="px-8 py-24 text-center bg-gray-900/60"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-4xl font-semibold mb-6 text-blue-400">
          Get In Touch
        </h3>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          I’m open to opportunities, collaborations, and internships. Let’s connect and create something amazing together!
        </p>
        <Button
          className="bg-cyan-500 hover:bg-cyan-600 px-6 py-2 text-lg font-semibold rounded-xl shadow-lg hover:shadow-cyan-400/30 transition-all duration-300"
          asChild
        >
          <a href="mailto:your-email@example.com">Contact Me</a>
        </Button>
      </motion.section>

      <footer className="text-center text-gray-500 py-6 border-t border-gray-700 text-sm">
        © {new Date().getFullYear()} Abhay Kumar. Built with ❤️ using Next.js.
      </footer>
    </div>
  );
}
