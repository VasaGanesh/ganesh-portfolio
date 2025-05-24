import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ResumeMatcherImg from '../assets/AI-Resume Matcher.png';
import BigDataImg from '../assets/Bigdataworkflow.png';
import EcommerceImg from '../assets/E-commerce.png';
import FinanceImg from '../assets/AI-finance platform.png';
import PortfolioImg from '../assets/My portfolio.png';
import LibraryImg from '../assets/Digital Library.png';

const projectData = [
  {
    title: 'AI-Powered Job & Resume Matcher',
    description:
      'Built a full-stack AI application using React, Node.js, and OpenAI APIs that matches job descriptions with tailored resumes. Integrated embedding models for semantic similarity and developed an intuitive dashboard for recruiters. Boosted candidate-job fit accuracy by 35%.',
    tech: ['React.js', 'Node.js', 'OpenAI API', 'Tailwind CSS', 'MongoDB'],
    image: ResumeMatcherImg,
  },
  {
    title: 'Big Data Workflow Automation Tool',
    description:
      'Designed a drag-and-drop Spark DAG editor using React Flow and Flask. Integrated Google Gemini for generating PySpark code and deployed the platform for research workflow automation at UNC Charlotte.',
    tech: ['React Flow', 'Flask', 'MongoDB', 'Gemini', 'PySpark'],
    image: BigDataImg,
  },
  {
    title: 'E-Commerce Product Management System',
    description:
      'Engineered a web application to manage product listings, orders, and payments. Supported over 100 concurrent users with secure AWS payment integration and improved load times by 50%.',
    tech: ['Java', 'Spring Boot', 'React.js', 'MongoDB', 'PostgreSQL', 'AWS'],
    image: EcommerceImg,
  },
  {
    title: 'AI Finance Platform (Next.js)',
    description:
      'Developed a smart finance assistant using Next.js, Tailwind CSS, and Prisma, powered by Gemini AI to provide users with real-time predictions, portfolio analysis, and investment suggestions.',
    tech: ['Next.js', 'Gemini AI', 'Tailwind CSS', 'Prisma', 'Shadcn UI'],
    image: FinanceImg,
  },
  {
    title: 'Portfolio Website',
    description:
      'Built a personal portfolio to showcase my AI and Full Stack skills, projects, and experiences. Integrated animations and responsive layout to improve user engagement and accessibility.',
    tech: ['React.js', 'Tailwind CSS'],
    image: PortfolioImg,
  },
  {
    title: 'Digital Library Management System',
    description:
      'Designed and implemented a digital library management system with advanced search and role-based access, improving efficiency by 30%.',
    tech: ['HTML', 'CSS', 'JavaScript', 'MongoDB'],
    image: LibraryImg,
  },
];

const Projects = () => {
  const [index, setIndex] = useState(0);
  const visibleCount = 3;

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % projectData.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + projectData.length) % projectData.length);
  };

  const getVisibleProjects = () => {
    const projects = [];
    for (let i = 0; i < visibleCount; i++) {
      projects.push(projectData[(index + i) % projectData.length]);
    }
    return projects;
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">Featured Projects</h2>
      <div className="relative flex justify-center items-center">
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-2xl bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200"
        >
          <FaArrowLeft />
        </button>
        <div className="flex gap-6 overflow-hidden">
          {getVisibleProjects().map((project, i) => (
            <div
              key={i}
              className="w-80 bg-white text-black rounded-xl p-5 shadow-xl transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-contain rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-indigo-100 text-indigo-700 text-xs font-medium px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-2xl bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Projects;
