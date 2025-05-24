import React from 'react';

const experiences = [
  {
    date: 'Jan 2024 – May 2025',
    title: 'Research Assistant',
    company: 'University of North Carolina at Charlotte, Charlotte NC, USA',
    description:
      "Designed a full-stack workflow automation platform using React.js, Flask, and MongoDB to simplify DAG-based Spark job creation. This system reduced manual effort by 75% and boosted data processing throughput by 60%. Built a drag-and-drop DAG editor with React Flow to streamline Spark workflow configurations by 40%. Integrated Google Gemini LLM into a chatbot that generates PySpark code, providing autocompletion for beginners and script generation for advanced users. Developed a real-time code editor for Java/Python featuring live output rendering and syntax validation. Created a Parsons-style visual coding interface to enhance understanding of distributed data logic through interactive puzzles.",
    technologies: ['ReactJS', 'React Flow', 'Flask', 'Python', 'MongoDB Atlas', 'Gemini', 'PySpark', 'JWT', 'RESTful APIs', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    date: 'Oct 2022 – Dec 2023',
    title: 'Software Developer',
    company: 'Hexagon Capability Center, Hyderabad, India',
    description:
      "Developed dashboards for HxGN Databridge Pro using React.js and TypeScript to monitor backend pipelines. Built responsive UIs with HTML5, CSS, and Bootstrap. Integrated REST APIs via Axios to fetch real-time diagnostics. Implemented reusable UI components and CI/CD monitoring dashboards to streamline DevOps. Collaborated with teams to refine frontend workflows and ensure architectural alignment.",
    technologies: ['React.js', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap', 'RESTful APIs', 'Axios', 'Java', 'Spring Boot', 'Git', 'Docker', 'Maven', 'AWS', 'Agile'],
  },
  {
    date: 'May 2022 – Sep 2022',
    title: 'Software Engineer',
    company: 'OpenText, Hyderabad, India',
    description:
      "Created scalable content modules and templates using Java, Velocity, and XML in OpenText Web CMS. Integrated REST APIs with external systems like CRMs and DAMs to improve data sync. Developed reusable React.js components and containerized services using Docker. Prototyped AI-powered features with LLMs for improved semantic search and auto-tagging.",
    technologies: ['Java', 'Velocity', 'XML', 'React.js', 'TypeScript', 'Spring Boot', 'Docker', 'Kubernetes', 'Python', 'Bootstrap', 'LLMs', 'Embeddings'],
  },
  {
    date: 'Oct 2020 – Apr 2022',
    title: 'Software Engineer',
    company: 'CITI Bank, Hyderabad, India',
    description:
      "Built a full-stack web app using Spring Boot, React, and GraphQL integrated with Kafka for real-time streaming. Enhanced security with JWT, OAuth 2.0, and RBAC. Created a RASA-based AI chatbot for loan checks and FAQs. Managed deployments using Docker, Kubernetes, and Terraform. Automated CI/CD with Jenkins and GitHub Actions. Improved system design with microservices and design patterns.",
    technologies: ['Java', 'Spring Boot', 'GraphQL', 'ReactJS', 'OAuth 2.0', 'RASA', 'Docker', 'Kubernetes', 'AWS', 'Jenkins', 'GitHub Actions', 'Material-UI'],
  },
];

const Experience = () => {
  return (
    <section className="px-6 py-16 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
      <div className="space-y-10 max-w-4xl mx-auto">
        {experiences.map((exp, idx) => (
          <div key={idx} className="flex flex-col md:flex-row md:justify-between md:items-start">
            <div className="text-sm text-gray-400 md:w-1/3">{exp.date}</div>
            <div className="md:w-2/3 bg-white bg-opacity-5 p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-white">
                {exp.title} <span className="text-sm text-gray-400">– {exp.company}</span>
              </h3>
              <p className="text-gray-300 mt-2 whitespace-pre-line text-justify">{exp.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {exp.technologies.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="bg-purple-800 bg-opacity-30 text-purple-300 text-xs px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
