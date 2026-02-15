import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: "AI Developer & Full-Stack Engineer",
      company: "Sparktech IT LTD",
      location: "Dhaka, Bangladesh",
      period: "Current",
      type: "Full-time",
      description: "Leading end-to-end development of production-grade ML systems and full-stack applications with modern tech stack.",
      responsibilities: [
        "Lead development of production-grade ML systems using Nest.js, Django, Next.js, and TypeScript",
        "Architect AI chatbot integrations for web and mobile via RAG pipelines and FAISS",
        "Drive operational excellence through complex n8n automation connecting LLMs to business systems",
        "Build high-performance UIs with modern stack including Tailwind CSS",
        "Implement scalable backend solutions with Node.js ecosystem and Python frameworks"
      ],
      technologies: ["Nest.js", "Django", "Next.js", "TypeScript", "Tailwind CSS", "n8n", "RAG", "FAISS", "LLMs"]
    },
    {
      title: "Academic Tutor",
      company: "American International University-Bangladesh (AIUB)",
      location: "Dhaka, Bangladesh",
      period: "Current",
      type: "Part-time",
      description: "Providing mentorship in core computer science subjects to improve student technical understanding.",
      responsibilities: [
        "Provide mentorship in OOP (Java, C#), Data Structures, and Algorithms",
        "Deliver simplified explanations for complex programming concepts",
        "Develop tailored examples and debugging strategies",
        "Consistently improve student academic performance and problem-solving skills"
      ],
      technologies: ["Java", "C#", "Data Structures", "Algorithms", "OOP"]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center dark:text-white">Professional Experience</h1>

      <div className="relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 dark:bg-blue-800 h-full"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className={`relative ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}>
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900 shadow"></div>

              <div className={`bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative group overflow-hidden ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 animate-gradient"></div>
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-400 transition-all duration-300"></div>
                <div className="relative z-10">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">{exp.title}</h3>
                        <p className="text-xl text-gray-700 dark:text-gray-300 mb-2">{exp.company}</p>
                      </div>
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-semibold">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 mb-4 italic">{exp.description}</p>

                  {/* Responsibilities */}
                  <div className="mb-4">
                    <h4 className="font-semibold mb-3 text-gray-700 dark:text-gray-300">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                          <CheckCircle className="text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" size={18} />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 text-white rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}