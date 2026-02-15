import { Code, Server, Database, Wrench, Brain, Palette } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "blue",
      skills: ["Python", "C++", "C#", "Java", "JavaScript (ES6+)", "TypeScript", "PHP"]
    },
    {
      title: "Backend & Frameworks",
      icon: Server,
      color: "purple",
      skills: ["Django(Rest API, Fast API)", "ASP.NET", ".NET Framework", "Node.js", "Nest.js", "Entity Framework", "LINQ", "SQLAlchemy"]
    },
    {
      title: "Frontend Technologies",
      icon: Palette,
      color: "pink",
      skills: ["React.js", "Next.js", "Redux", "Tailwind CSS", "Material UI", "shadcn/ui", "DaisyUI", "HTML5", "CSS3"]
    },
    {
      title: "Databases",
      icon: Database,
      color: "green",
      skills: ["Microsoft SQL Server", "PostgreSQL", "MySQL", "Oracle SQL", "PL/SQL", "SQLite"]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "orange",
      skills: ["Generative AI", "LLM Integration", "n8n automation", "RAG", "FAISS", "Data Structures", "Algorithms"]
    },
    {
      title: "Tools & Environment",
      icon: Wrench,
      color: "indigo",
      skills: ["Git", "GitHub", "Postman", "Jira", "Visual Studio", "VS Code", "IntelliJ IDEA", "PgAdmin", "Figma", "Docker"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { text: string; iconBg: string; skillBg: string; skillBorder: string }> = {
      blue: { text: 'text-blue-600', iconBg: 'bg-blue-100', skillBg: 'bg-blue-50 dark:bg-blue-900/30', skillBorder: 'border-blue-200 dark:border-blue-800' },
      purple: { text: 'text-purple-600', iconBg: 'bg-purple-100', skillBg: 'bg-purple-50 dark:bg-purple-900/30', skillBorder: 'border-purple-200 dark:border-purple-800' },
      pink: { text: 'text-pink-600', iconBg: 'bg-pink-100', skillBg: 'bg-pink-50 dark:bg-pink-900/30', skillBorder: 'border-pink-200 dark:border-pink-800' },
      green: { text: 'text-green-600', iconBg: 'bg-green-100', skillBg: 'bg-green-50 dark:bg-green-900/30', skillBorder: 'border-green-200 dark:border-green-800' },
      orange: { text: 'text-orange-600', iconBg: 'bg-orange-100', skillBg: 'bg-orange-50 dark:bg-orange-900/30', skillBorder: 'border-orange-200 dark:border-orange-800' },
      indigo: { text: 'text-indigo-600', iconBg: 'bg-indigo-100', skillBg: 'bg-indigo-50 dark:bg-indigo-900/30', skillBorder: 'border-indigo-200 dark:border-indigo-800' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center dark:text-white">Technical Skills</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
        Comprehensive expertise across the full technology stack
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          const colors = getColorClasses(category.color);

          return (
            <div key={index} className="relative group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 animate-gradient"></div>
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-400 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 ${colors.iconBg} dark:opacity-80 rounded-lg flex items-center justify-center`}>
                    <Icon className={colors.text} size={24} />
                  </div>
                  <h2 className="text-2xl font-bold dark:text-white">{category.title}</h2>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-4 py-2 ${colors.skillBg} border ${colors.skillBorder} rounded-lg text-gray-800 dark:text-gray-200 font-medium transition-all hover:shadow-md hover:scale-105 duration-200`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional Skills Summary */}
      <div className="mt-12 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 p-8 rounded-xl shadow-lg text-white">
        <h2 className="text-2xl font-bold mb-4 text-center">Core Competencies</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-4xl font-bold mb-2">7+</p>
            <p className="text-blue-100">Programming Languages</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">15+</p>
            <p className="text-blue-100">Frameworks & Libraries</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">10+</p>
            <p className="text-blue-100">Development Tools</p>
          </div>
        </div>
      </div>
    </div>
  );
}