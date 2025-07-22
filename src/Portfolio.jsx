import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-600 to-blue-400 text-white">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Aryaman Jaiman</h1>
        <p className="text-xl mb-6">Full-Stack Developer | AI Enthusiast | Cinematographer</p>
        <div className="space-x-4">
          <a href="#projects">
            <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100">
              View Projects
            </button>
          </a>
          <a href="/resume.pdf" download>
            <button className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700">
              Download Resume
            </button>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto py-16 px-4" id="about">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <p className="text-lg leading-relaxed text-center">
          I'm Aryaman Jaiman, a third-year student at Manipal Institute of Technology (MIT),
          pursuing Electronics and Communication Engineering. With experience in web development,
          backend systems, and a passion for AI, I love building impactful, real-world applications.
        </p>
        <p className="mt-4 text-center">
          Email: aaryamanjaiman@gmail.com | Phone: +91-7740992200
        </p>
      </section>

      {/* Projects Section */}
      <section className="bg-gray-100 py-16 px-4" id="projects">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Project 1 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <img src="/images/admin-dashboard.png" alt="Admin Dashboard" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">AI-Powered Admin Dashboard</h3>
              <p className="text-gray-600 mb-4">
                A full-stack admin dashboard built with React, Node.js, SQL, and integrated AI tools for real-time data insights and analytics.
              </p>
              <a href="#" className="text-blue-600 hover:underline">View Live</a> | <a href="#" className="text-blue-600 hover:underline">GitHub</a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <img src="/images/ecommerce.png" alt="E-commerce" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">E-commerce Website</h3>
              <p className="text-gray-600 mb-4">
                Developed a responsive e-commerce platform with PHP, MySQL, and Bootstrap, including payment gateway integration and shopping cart features.
              </p>
              <a href="#" className="text-blue-600 hover:underline">View Live</a> | <a href="#" className="text-blue-600 hover:underline">GitHub</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-blue-600 text-white text-center" id="contact">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-6">Let's connect for collaborations or opportunities.</p>
        <div className="flex justify-center space-x-6">
          <a href="mailto:aaryamanjaiman@gmail.com" className="text-2xl hover:text-gray-300"><FaEnvelope /></a>
          <a href="https://linkedin.com/in/aryamanjaiman" className="text-2xl hover:text-gray-300"><FaLinkedin /></a>
          <a href="https://github.com/" className="text-2xl hover:text-gray-300"><FaGithub /></a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-gray-800 text-gray-400 text-center">
        © {new Date().getFullYear()} Aryaman Jaiman | Portfolio
      </footer>
    </div>
  );
}