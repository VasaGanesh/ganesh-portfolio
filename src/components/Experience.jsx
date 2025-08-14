import React from 'react';

const experiences = [
    {
    date: 'Jun 2025 – Present',
    title: 'Software Engineer',
    company: 'U.S Bank, USA',
    description:
      "I designed and built a real-time alerting platform using Java, Spring Boot, and Apache Kafka, delivering secure notifications for high-risk events such as suspicious logins and large withdrawals. To enhance fraud detection, I integrated a Python-based Isolation Forest microservice for anomaly detection, improving fraud signal accuracy by 27% through real-time behavioral scoring. I implemented a scalable notification pipeline leveraging AWS Lambda and Amazon SNS, enabling low-latency delivery of SMS, email, and push messages. To ensure system efficiency during high-volume event bursts, I developed Redis-based caching and rate limiting to manage per-user alert frequency and prevent duplicate notifications. Additionally, I built a React.js dashboard for internal teams to monitor Kafka-driven alerts, track delivery logs, and configure user notification settings. The microservices were deployed on AWS EKS using Docker and Kubernetes, with CI/CD pipelines in GitHub Actions reducing deployment time by 40%. I also monitored system health and model performance through AWS CloudWatch, setting up automated alarms for delivery failures and ML model drift.",
    technologies: ['Java', 'Spring Boot', 'Python', 'Isolation Forest (Scikit-learn)', 'RESTful APIs', 'Apache Kafka', 'Amazon SNS', 'AWS Lambda', 'AWS EKS', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis', 'GitHub Actions', 'AWS CloudWatch'],
  },
  {
    date: 'Jan 2025 – May 2025',
    title: 'Application Engineer',
    company: 'University of North Carolina at Charlotte, USA',
    description:
      "Designed a full-stack workflow automation platform using React.js, Flask, and MongoDB to simplify DAG-based Spark job creation. This system reduced manual effort by 75% and boosted data processing throughput by 60%. Built a drag-and-drop DAG editor with React Flow to streamline Spark workflow configurations by 40%. Integrated Google Gemini LLM into a chatbot that generates PySpark code, providing autocompletion for beginners and script generation for advanced users. Developed a real-time code editor for Java/Python featuring live output rendering and syntax validation. Created a Parsons-style visual coding interface to enhance understanding of distributed data logic through interactive puzzles.",
    technologies: ['ReactJS', 'React Flow', 'Flask', 'Python', 'MongoDB Atlas', 'Gemini', 'PySpark', 'JWT', 'RESTful APIs', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    date: 'Oct 2022 – Nov 2023',
    title: 'Software Developer',
    company: 'Hexagon Capability Center, India',
    description:
      "Dcontributed to the development of a monitoring dashboard for HxGN Databridge Pro by building frontend components with React.js and integrating REST APIs to display real-time pipeline and file processing statuses. On the backend, you developed Spring Boot APIs to fetch and aggregate data from multiple systems, enabling real-time visualization for the frontend. You enhanced PostgreSQL performance by optimizing slow queries, adding indexes, and streamlining join operations, which significantly improved report generation speed and reduced query latency. Additionally, you streamlined API response times by refining backend endpoints, implementing pagination and caching, and minimizing data payloads, resulting in faster dashboard load times and an improved user experience. You also configured Docker-based local development environments and assisted in setting up CI/CD workflows using AWS CodePipeline, increasing efficiency in testing and deployment. Throughout Agile sprints, you collaborated with senior developers and QA engineers to refine requirements, validate features, and ensure the timely delivery of updates.",
    technologies: ['React.js', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap', 'RESTful APIs', 'Axios', 'Fetch', 'JSON', 'Java', 'Spring Boot', 'Git', 'Docker', 'Maven', 'AWS', 'Multi-Tenant Architecture', 'Agile (Scrum)', 'Code Reviews', 'React Hooks', 'React Router'],
  },
  {
    date: 'Nov 2021 – Sep 2022',
    title: 'Software Engineer',
    company: 'CITI Bank, India',
    description:
      "Built a full-stack web application using Spring Boot, React.js, and GraphQL, integrated with Apache Kafka for real-time transaction streaming, which reduced response latency by 30%. I designed secure GraphQL and RESTful APIs with JWT, OAuth 2.0, and RBAC, ensuring compliance with Citi’s internal encryption and access control standards. I built and deployed an AI-powered chatbot using RASA to automate FAQs, loan eligibility checks, and customer support, achieving 95% intent accuracy and reducing support workload by 40%. On the backend, I engineered services with efficient data access layers using JPA/Hibernate and optimized SQL queries for high-volume transactional data in PostgreSQL, improving API response times by 25%. I containerized applications using Docker and orchestrated deployments via Kubernetes and Terraform on AWS, ensuring scalability and fault tolerance. Additionally, I automated CI/CD pipelines using Jenkins and GitHub Actions, enabling faster and more reliable deployments while reducing manual effort by 50%. I also contributed to system architecture and microservices design, enhancing reliability and enabling scalable enterprise application development.",
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
