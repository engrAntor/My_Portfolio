'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  Code, 
  Database, 
  Cpu, 
  Cloud, 
  ArrowRight,
  Briefcase,
  FolderGit2,
  Bot
} from 'lucide-react';

export function Home() {
  const titles = ["AI Developer", "RAG & LLM Engineer", "Full-Stack Builder"];
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const typingSpeed = isDeleting ? 45 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentTitle.length) {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentTitle.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, titleIndex]);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="text-center pt-4 pb-12">
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

        {/* Rotating Typed Tagline */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 h-10 flex items-center justify-center">
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            {displayedText}
          </span>
          <span className="inline-block w-0.5 h-7 ml-1 bg-purple-500 animate-pulse rounded-full"></span>
        </h2>

        {/* Hero Subtitle */}
        <div className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-center">
          <p className="mb-1">
            <span className="text-gray-700 dark:text-gray-300">Focused on </span>
            <span className="font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">LLM fine-tuning</span>
            <span className="text-gray-700 dark:text-gray-300">, </span>
            <span className="font-semibold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Retrieval-Augmented Generation (RAG)</span>
            <span className="text-gray-700 dark:text-gray-300">, and building scalable AI systems.</span>
          </p>
          <p>
            <span className="text-gray-700 dark:text-gray-300">Specialized in </span>
            <span className="font-semibold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Python/Django</span>
            <span className="text-gray-700 dark:text-gray-300">, </span>
            <span className="font-semibold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">.NET Core 9</span>
            <span className="text-gray-700 dark:text-gray-300">, </span>
            <span className="font-semibold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Node.js (Nest.js)</span>
            <span className="text-gray-700 dark:text-gray-300">, and modern web technologies.</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
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

        {/* Quick Stats Bar */}
        <div className="max-w-4xl mx-auto mb-16 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700">
            <div className="flex items-center justify-center gap-4 py-2">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Briefcase size={24} />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">1+ Years</div>
                <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold">Industry Experience</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 py-2">
              <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <FolderGit2 size={24} />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">10+ Projects</div>
                <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold">Shipped &amp; Deployed</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 py-2">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <Bot size={24} />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">5+ AI Systems</div>
                <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold">LLM &amp; RAG Deployed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Card Overview Grid */}
      <section className="mb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Frontend */}
          <div className="relative group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-gradient"></div>
            <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500 transition-all duration-300"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2 dark:text-white">Frontend Architecture</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Next.js 14/16, React.js, TypeScript, Tailwind CSS — building high-performance, responsive UI systems.
              </p>
            </div>
          </div>

          {/* Card 2: Backend */}
          <div className="relative group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-gradient"></div>
            <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-purple-500 transition-all duration-300"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <Database className="text-purple-600 dark:text-purple-400" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2 dark:text-white">Scalable Backend</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                ASP.NET Core (.NET 9), Node.js (Nest.js), Django REST / FastAPI — PostgreSQL, Redis, clean architecture.
              </p>
            </div>
          </div>

          {/* Card 3: AI & RAG */}
          <div className="relative group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-gradient"></div>
            <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-emerald-500 transition-all duration-300"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="text-emerald-600 dark:text-emerald-400" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2 dark:text-white">Generative AI &amp; RAG</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                RAG pipelines, FAISS vector search, LLM fine-tuning, LangChain, Gemini API — autonomous AI agents.
              </p>
            </div>
          </div>

          {/* Card 4: DevOps & Cloud */}
          <div className="relative group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-gradient"></div>
            <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-orange-500 transition-all duration-300"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="text-orange-600 dark:text-orange-400" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2 dark:text-white">DevOps &amp; Cloud</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Docker, CI/CD pipelines, MLOps, n8n automation, AWS/Azure cloud environments and monitoring.
              </p>
            </div>
          </div>
        </div>

        {/* View My Work CTA */}
        <div className="text-center mt-10 mb-16">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
          >
            <span>View My Work</span>
            <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="relative group bg-white dark:bg-gray-800 p-8 md:p-12 rounded-xl shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-400 transition-all duration-300"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
            I am an AI Developer and Full-Stack Engineer with a deep focus on Generative AI, LLM Integration, Fine-Tuning and RAG pipelines. I specialize in building production-grade ML systems and complex business automations that bridge the gap between advanced AI models and real-world utility.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
            As a Software Engineering graduate from AIUB, I architect high-performance, full-stack ecosystems. My expertise spans building scalable backends using ASP.NET Core, Node.js (Nest.js), and Django REST Framework/Fast API. These are seamlessly integrated with modern, high-performance frontend architectures powered by Next.js, React.js, TypeScript, and Tailwind CSS to deliver exceptional user experiences.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            I drive operational excellence by engineering MLOps environments and CI/CD pipelines, utilizing n8n to connect Large Language Models with core business systems for measurable impact.
          </p>
        </div>
      </section>
    </div>
  );
}
