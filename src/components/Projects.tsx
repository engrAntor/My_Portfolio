import { ExternalLink, Github, Code, Layers, Zap } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "Online Learning Platform",
      description: "Comprehensive Learning Management System with course management, payments, and AI chatbot.",
      longDescription: "Developed a comprehensive Learning Management System using React.js/Next.js, TypeScript, and Tailwind CSS, featuring a robust backend powered by Node.js/Nest.js and PostgreSQL/Supabase. The platform enables seamless course management, certificate generation, quizzes, course progress tracking, payments (Stripe, Mastercard, Bkash), user authentication, notifications, messaging, and an AI chatbot agent.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Nest.js", "PostgreSQL", "Supabase", "Stripe"],
      features: [
        "Course management & certificate generation",
        "Payment integration (Stripe, Bkash)",
        "AI Chatbot Agent",
        "Real-time messaging & notifications",
        "Progress tracking & Quizzes"
      ],
      category: "Full Stack",
      image: "online learning",
      github: null,
      demo: "https://engrantorlms.netlify.app"
    },
    {
      title: "Recipe Sharing Platform",
      description: "Full-stack social recipe platform with personalized news feed and recommendation engine.",
      longDescription: "Architected and developed a full-stack social recipe platform featuring a personalized news feed and recommendation engine. The backend is a secure, 3-tier ASP.NET Web API with JWT authentication, and the front end is a responsive UI built with Next.js, TypeScript, and Tailwind CSS.",
      technologies: ["ASP.NET Core", "Web API", "Next.js", "TypeScript", "Tailwind CSS", "JWT", "SQL Server"],
      features: [
        "Personalized news feed",
        "Recommendation engine",
        "Secure 3-tier Architecture",
        "JWT Authentication",
        "Responsive UI"
      ],
      category: "Full Stack",
      image: "recipe sharing",
      github: "https://github.com/engrAntor/Recipe-Sharing-Platform--.NET-Project/tree/main",
      demo: null
    },
    {
      title: "University Semester Registration",
      description: "Responsive Course Management System with secure authentication and automated notifications.",
      longDescription: "Developed a responsive full-stack Course Management System using PHP, MySQL, and JavaScript, featuring secure user authentication and data persistence. Integrated PHPMailer and Composer for automated notifications and streamlined course administration.",
      technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "PHPMailer", "Composer"],
      features: [
        "Secure user authentication",
        "Course registration management",
        "Automated email notifications",
        "Data persistence",
        "Responsive design"
      ],
      category: "Full Stack",
      image: "semester registration",
      github: "https://github.com/engrAntor/my-web-tech-project",
      demo: null
    },
    {
      title: "International Trade Fair Management System",
      description: "Complex database system managing trade fair operations using Oracle 10g and PL/SQL.",
      longDescription: "Developed and implemented an International Trade Fair Management System using Oracle 10g, incorporating advanced database concepts such as PL/SQL functions, procedures, triggers, cursors, and packages. Efficiently manages trade fair operations and automates workflows.",
      technologies: ["Oracle 10g", "PL/SQL", "Database Design", "Stored Procedures", "Triggers"],
      features: [
        "Advanced PL/SQL implementation",
        "Automated workflows",
        "Trade fair operations management",
        "Analytical insights",
        "Complex database triggers"
      ],
      category: "Database",
      image: "trade fair",
      github: "https://github.com/engrAntor/Advanced-Database",
      demo: null
    },
    {
      title: "Car Parking Rental System",
      description: "Online car parking rental system developed using Agile methodology.",
      longDescription: "Developed and implemented the \"Online Car Parking Rental System\" using Agile methodology. Contributed to project planning, software design, testing, and maintenance, including creating architectural diagrams, test cases, and a comprehensive maintenance plan.",
      technologies: ["Java", "Agile", "Software Design", "UML", "Testing"],
      features: [
        "Agile development methodology",
        "Rental booking system",
        "Architectural design patterns",
        "Comprehensive testing",
        "Maintenance planning"
      ],
      category: "Enterprise",
      image: "car parking",
      github: "https://github.com/engrAntor/Software-Engineering",
      demo: null
    },
    {
      title: "Online Learning Platform (SQAT)",
      description: "Software Quality Assurance project with Selenium WebDriver and rigorous testing.",
      longDescription: "Developed a comprehensive Software Test Plan utilizing Selenium WebDriver and structured QA methodologies to validate system requirements. Implemented rigorous boundary value analysis and performance criteria to ensure platform reliability and adherence to industry standards.",
      technologies: ["Selenium WebDriver", "QA automation", "Testing", "Java", "Bug Tracking"],
      features: [
        "Automated testing with Selenium",
        "Structured QA methodologies",
        "Boundary value analysis",
        "Performance testing",
        "Test plan development"
      ],
      category: "Testing",
      image: "sqat",
      github: "https://github.com/engrAntor/Software-Quality-Assurance-and-testing",
      demo: null
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Academic": "from-blue-500 to-cyan-500",
      "Backend": "from-purple-500 to-pink-500",
      "Full Stack": "from-green-500 to-emerald-500",
      "Database": "from-orange-500 to-red-500",
      "Enterprise": "from-indigo-500 to-violet-500",
      "Research": "from-pink-500 to-rose-500",
      "Testing": "from-teal-500 to-cyan-500"
    };
    return colors[category] || "from-gray-500 to-gray-700";
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center dark:text-white">Featured Projects</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
        A showcase of my recent work demonstrating expertise across various technologies and domains
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="relative group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-gradient"></div>
            <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-400 transition-all duration-300"></div>

            {/* Project Image */}
            <div className={`h-48 bg-gradient-to-br ${getCategoryColor(project.category)} flex items-center justify-center relative z-10`}>
              <Code className="text-white" size={64} />
            </div>

            {/* Project Content */}
            <div className="p-6 relative z-10">
              <div className="flex items-center justify-between mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getCategoryColor(project.category)}`}>
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{project.description}</p>

              {/* Technologies */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs hover:scale-105 transition-transform duration-200">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Layers className="text-blue-600 dark:text-blue-400" size={16} />
                  <span className="font-semibold text-sm dark:text-gray-300">Key Features:</span>
                </div>
                <ul className="space-y-1">
                  {project.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-1">
                      <Zap className="text-yellow-500 dark:text-yellow-400 flex-shrink-0 mt-0.5" size={12} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t dark:border-gray-700">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors text-sm flex-1 justify-center"
                  >
                    <Github size={16} />
                    Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors text-sm flex-1 justify-center"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}