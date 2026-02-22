import { Github, Linkedin, Mail, Download, Code, Database, Cpu } from 'lucide-react';

export function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-20">
        <div className="mb-8 relative w-52 h-64 mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-50 animate-pulse"></div>
          <img
            src="/antor-profile.jpeg"
            alt="Antor Chandra Das"
            className="w-full h-full object-cover object-top rounded-2xl border-4 border-white dark:border-gray-800 shadow-2xl relative z-10"
          />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-500 via-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
          Antor Chandra Das
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            AI Developer & Full-Stack Engineer
          </span>
        </h2>

        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          <span className="text-gray-700 dark:text-gray-300">Passionate about leveraging </span>
          <span className="font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Generative AI</span>
          <span className="text-gray-700 dark:text-gray-300"> to create efficient, scalable systems. Specialized in </span>
          <span className="font-semibold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Python/Django</span>
          <span className="text-gray-700 dark:text-gray-300">, </span>
          <span className="font-semibold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">.NET</span>
          <span className="text-gray-700 dark:text-gray-300">, </span>
          <span className="font-semibold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Node.js</span>
          <span className="text-gray-700 dark:text-gray-300">, and modern web technologies.</span>
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="https://github.com/engrAntor"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
          >
            <Github size={20} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/engr-antor"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
          <a
            href="mailto:engr.antor.3@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 dark:bg-purple-500 text-white rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors"
          >
            <Mail size={20} />
            Personal Email
          </a>
          <a
            href="mailto:antor@sparktechagency.com"
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
          >
            <Mail size={20} />
            Official Email
          </a>
          <button className="flex items-center gap-2 px-6 py-3 bg-green-600 dark:bg-green-500 text-white rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-colors">
            <Download size={20} />
            Download CV
          </button>
        </div>
      </section>

      {/* Quick Overview Cards */}
      <section className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="relative group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-gradient"></div>
          <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500 transition-all duration-300"></div>
          <div className="relative z-10">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              <Code className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2 dark:text-white">Frontend Expert</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Specializing in React.js, Next.js, TypeScript, and modern UI frameworks
            </p>
          </div>
        </div>

        <div className="relative group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-gradient"></div>
          <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-purple-500 transition-all duration-300"></div>
          <div className="relative z-10">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
              <Database className="text-purple-600 dark:text-purple-400" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2 dark:text-white">Backend Developer</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Proficient in Python/Django, ASP.NET, Node.js, Nest.js, and multiple database systems
            </p>
          </div>
        </div>

        <div className="relative group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-gradient"></div>
          <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-green-500 transition-all duration-300"></div>
          <div className="relative z-10">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
              <Cpu className="text-green-600 dark:text-green-400" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2 dark:text-white">AI Integration</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Experience with Generative AI, LLM Integration, and machine learning
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative group bg-white dark:bg-gray-800 p-8 md:p-12 rounded-xl shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-400 transition-all duration-300"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
            I'm currently working as an AI Developer & Full-Stack Engineer at Sparktech IT LTD, where I lead
            development of production-grade ML systems and full-stack applications using Nest.js, Django, Next.js,
            and TypeScript. I architect AI chatbot integrations via RAG pipelines and drive operational excellence
            through complex n8n automation.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            A Software Engineering graduate from AIUB with expertise in .NET, Node.js, and Generative AI.
            I also serve as an Academic Tutor at AIUB, mentoring students in OOP, Data Structures, and Algorithms.
            Beyond coding, I enjoy playing guitar and continuous learning in AI/ML technologies.
          </p>
        </div>
      </section>
    </div>
  );
}