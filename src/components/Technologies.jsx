import React from 'react';
import { motion } from 'framer-motion';

const techCards = [
  {
    title: "PROGRAMMING and WEB",
    content: "Java, JavaScript, C#, TypeScript, C, Python, HTML5, Tailwind CSS, Bootstrap"
  },
  {
    title: "FRAMEWORKS",
    content: "React.js, Node.js, Spring Boot, Spring Security, REST APIs, Microservices"
  },
  {
    title: "CLOUD & DEVOPS",
    content: "AWS (EC2, S3, Lambda), Azure, Kubernetes, Docker, Jenkins, CI/CD"
  },
  {
    title: "EVENT-DRIVEN and J2EE",
    content: "Kafka, Event-Driven Architecture, Servlets, JSP, JDBC"
  },
  {
    title: "DATABASE and SERVERS",
    content: "SQL, PostgreSQL, MongoDB, NoSQL, Apache Tomcat, Oracle Cloud, Google Cloud"
  },
  {
    title: "METHODOLOGY and TOOLS",
    content: "Agile, Git, GitHub, Postman, VS Code, IntelliJ, Eclipse, Bitbucket"
  }
];

const Technologies = () => {
  return (
    <section
      id="technologies"
      className="py-20 px-6 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Technologies</h2>
      <div className="flex flex-col gap-6 items-center">
        {techCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="w-full max-w-3xl bg-[#111827] p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">{card.title}</h3>
            <p className="text-gray-300 leading-relaxed">{card.content}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
