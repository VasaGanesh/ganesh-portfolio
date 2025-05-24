import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="px-6 py-20 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-lg text-gray-300 mb-10">
          I’m currently looking for new opportunities. If you have a role that matches my background or want to collaborate,
          feel free to reach out!
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="mailto:ganeshjob02@gmail.com"
            className="bg-purple-700 hover:bg-purple-800 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
          >
            Say Hello
          </a>

          <a
            href="https://www.linkedin.com/in/ganesh-vasa"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white hover:bg-white hover:text-[#302b63] text-white font-medium py-3 px-6 rounded-lg transition duration-300"
          >
            Connect on LinkedIn
          </a>
        </div>

        <p className="mt-12 text-sm text-gray-400">© {new Date().getFullYear()} Ganesh Vasa. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Contact;
