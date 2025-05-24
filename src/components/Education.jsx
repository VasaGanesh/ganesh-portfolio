import React from 'react';

const Education = () => {
  const data = [
    {
      degree: 'Master of Science in Computer Science',
      university: 'University of North Carolina, Charlotte',
      duration: 'Aug 2023 - Dec 2024',
      gpa: '3.9/4.0'
    },
    {
      degree: 'Bachelor of Technology in Computer Science',
      university: 'Jawaharlal Nehru Technological University',
      duration: 'July 2018 - May 2022'
    }
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {data.map((edu, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 rounded-xl shadow-lg p-6 relative overflow-hidden"
          >
            <div className="text-xl font-semibold mb-1">{edu.degree}</div>
            <div className="text-gray-600 mb-2">{edu.university}</div>
            {edu.gpa && (
              <div className="text-sm font-medium text-blue-700 mb-1">
                GPA: <span className="text-blue-800 font-bold">{edu.gpa}</span>
              </div>
            )}
            <div className="absolute top-6 right-6 bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium">
              {edu.duration}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
