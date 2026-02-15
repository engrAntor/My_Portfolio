import { GraduationCap, Calendar, Award } from 'lucide-react';

export function Education() {
  const educationData = [
    {
      degree: "BSc in Computer Science & Engineering",
      institution: "American International University-Bangladesh (AIUB)",
      period: "September 2021 - September 2025",
      description: "Major in Software Engineering with a minor in Information Systems. Focused on developing expertise in full-stack development, AI integration, and advanced database management systems.",
      achievements: [
        "Major: Software Engineering",
        "Minor: Information Systems",

        "Active member of AIUB Computer Club (2022-present)",
        "Computer Graphics Designer at AIUB Environment Club (2022-present)",
        "Research on AI-driven code optimization and ML for stroke risk stratification"
      ]
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Islamia Degree College, Chittagong",
      period: "2020",
      description: "Completed higher secondary education with focus on science subjects, building foundation for computer science studies.",
      achievements: [
        "Science background",
        "Successfully completed HSC examination"
      ]
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "St. Placid's High School and College, Chittagong",
      period: "2018",
      description: "Completed secondary education with strong academic performance, developing early interest in technology.",
      achievements: [
        "Completed SSC with good results",
        "Foundation in mathematics and science"
      ]
    }
  ];

  const certifications: Array<{ name: string; issuer: string; date: string }> = [
    {
      name: "Python for Data Science",
      issuer: "IBM PY0101EN: Cognitiveclass.AI",
      date: "2024"
    },
    {
      name: "Machine Learning with Python",
      issuer: "IBM ML0101EN: Cognitiveclass.AI",
      date: "2024"
    },
    {
      name: "Natural Language Processing with Attention Models",
      issuer: "DeepLearning.AI - (Coursera)",
      date: "2024"
    },
    {
      name: "Intro to Amazon Web Services (AWS)",
      issuer: "Cybrary.IT",
      date: "2024"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center dark:text-white">Education</h1>

      {/* Academic Education */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 dark:text-white">
          <GraduationCap className="text-blue-600 dark:text-blue-400" size={28} />
          Academic Background
        </h2>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div key={index} className="relative group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 animate-gradient"></div>
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-400 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">{edu.degree}</h3>
                    <p className="text-xl text-gray-700 dark:text-gray-300 mb-2">{edu.institution}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900 px-4 py-2 rounded-lg">
                    <Calendar size={18} />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4">{edu.description}</p>

                <div className="border-t dark:border-gray-700 pt-4">
                  <p className="font-semibold mb-2 text-gray-700 dark:text-gray-300">Key Achievements:</p>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                        <Award className="text-yellow-500 dark:text-yellow-400 mt-1 flex-shrink-0" size={18} />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      {certifications.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 dark:text-white">
            <Award className="text-purple-600 dark:text-purple-400" size={28} />
            Certifications & Courses
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="relative group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-600 dark:border-purple-400 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-purple-400 transition-all duration-300"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2 dark:text-white">{cert.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{cert.issuer}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}