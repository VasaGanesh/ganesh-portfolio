import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Technologies from './components/Technologies';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white font-sans">
      <div className="absolute top-6 left-10 text-lg font-semibold border border-white px-2 py-1 rounded shadow">
        GV
      </div>

      <div className="absolute top-6 right-10 flex space-x-4 text-2xl text-white">
        <a href="https://www.linkedin.com/in/ganesh-vasa" target="_blank" rel="noreferrer">
          <FaLinkedin className="hover:text-blue-400 transition duration-200" />
        </a>
        <a href="https://github.com/VasaGanesh" target="_blank" rel="noreferrer">
          <FaGithub className="hover:text-blue-400 transition duration-200" />
        </a>
      </div>

      <section className="min-h-screen flex flex-col justify-center items-center px-4 text-center">
        <h1 className="text-5xl sm:text-7xl font-light mb-3">Ganesh Vasa</h1>
        <p className="text-2xl sm:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 mb-6">
          AI & Full Stack Developer
        </p>
        <div className="max-w-3xl text-lg sm:text-xl leading-relaxed text-gray-300 text-justify">
          <p>
            AI & Full Stack Developer with 3+ years of experience in designing intelligent, scalable systems using Java, Spring Boot, React, and cloud platforms.
            Proven ability to build and deploy production-ready AI solutions leveraging large language models (LLMs), embeddings, and RAG architectures.
            Specialized in integrating RESTful APIs and crafting modular frontend components that enhance user experience across devices.
            Hands-on with cloud-native deployment strategies using AWS, Azure, Docker, and Kubernetes to ensure high availability and resilience.
            Built real-time recommendation systems, resume matchers, and smart chatbots for enterprise and educational platforms.
            Strong understanding of data pipelines, NLP, and ML workflows using PySpark, TensorFlow, and vector databases like FAISS.
            Passionate about writing clean, testable code and collaborating in Agile environments to turn ideas into impactful applications.
            Always exploring new technologies and committed to continuous learning in the evolving AI and software development landscape.
          </p>
        </div>
      </section>

      <Technologies />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;