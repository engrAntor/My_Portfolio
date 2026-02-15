import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { message } = await req.json();
        const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;

        if (!apiKey) {
            return NextResponse.json(
                { error: 'API key not configured' },
                { status: 500 }
            );
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const knowledgeBase = {
            name: "Antor Chandra Das",
            email: "antor@sparktechagency.com, engr.antor.3@gmail.com",
            phone: "+880 1832 814129",
            location: "Basundhara, Dhaka, Bangladesh",
            skills: {
                languages: ["C#", "JavaScript (ES6+)", "TypeScript", "Python", "PHP", "Java", "SQL"],
                backend: ["ASP.NET", ".NET Framework", "Node.js", "Nest.js", "Entity Framework", "LINQ", "SQLAlchemy", "Django"],
                frontend: ["React.js", "Next.js", "Redux", "Tailwind CSS", "Material UI", "shadcn/ui", "DaisyUI", "HTML5", "CSS3"],
                databases: ["Microsoft SQL Server", "PostgreSQL", "MySQL", "Oracle SQL", "PL/SQL", "SQLite"],
                ai: ["Generative AI", "LLM Integration", "Machine Learning", "Data Structures", "Algorithms", "RAG", "FAISS", "n8n automation"],
                tools: ["Git", "GitHub", "Postman", "Visual Studio", "VS Code", "IntelliJ IDEA", "PgAdmin", "Figma", "Docker", "Jira"]
            },
            education: [
                {
                    degree: "BSc in Computer Science & Engineering",
                    institution: "American International University-Bangladesh (AIUB)",
                    period: "September 2021 - Present",
                    major: "Software Engineering",
                    minor: "Information Systems"
                },
                {
                    degree: "Higher Secondary Certificate (HSC)",
                    institution: "Islamia Degree College, Chittagong",
                    period: "2020"
                },
                {
                    degree: "Secondary School Certificate (SSC)",
                    institution: "St. Placid's High School and College, Chittagong",
                    period: "2018"
                }
            ],
            experience: [
                {
                    title: "AI Developer & Full-Stack Engineer",
                    company: "Sparktech IT LTD",
                    period: "Current",
                    description: "Lead end-to-end development of production-grade ML systems and full-stack applications using Nest.js, Django, Next.js, and TypeScript. Architect AI chatbot integrations via RAG pipelines and FAISS. Drive operational excellence through complex n8n automation connecting LLMs to business systems."
                },
                {
                    title: "Academic Tutor",
                    company: "AIUB",
                    period: "Current",
                    description: "Provide mentorship in OOP (Java, C#), Data Structures, and Algorithms. Deliver simplified explanations and develop tailored examples to improve student understanding and problem-solving skills."
                }
            ],
            projects: [
                "Student Portal Management System (C#)",
                "Recipe Sharing API (.NET)",
                "Semester Registration System (Web Technologies)",
                "Online Learning Platform (Advanced Web Technologies)",
                "International Trade Fair Management System (PL/SQL)",
                "Car Parking Rental System (Software Engineering)",
                "Stroke Risk Stratification ML Research",
                "Online Learning Platform QA Testing"
            ],
            achievements: [
                "Major: Software Engineering",
                "Minor: Information Systems",
                "Active member of AIUB Computer Club (2022-present)",
                "Computer Graphics Designer at AIUB Environment Club (2022-present)",
                "Research on AI-driven code optimization and ML for stroke risk stratification"
            ],
            interests: ["Programming", "Playing Guitar", "Tutoring Students"]
        };

        const prompt = `
      You are a helpful AI assistant for Antor Chandra Das's portfolio. 
      Use the following information to answer questions about him:
      ${JSON.stringify(knowledgeBase)}
      
      User question: ${message}
      
      Keep answers concise, professional, and friendly. 
      If the user asks about something not in the knowledge base (like general knowledge unrelated to Antor), 
      you can briefly answer but try to steer the conversation back to Antor's skills and experience if appropriate.
      
      Important:
      - Antor is an AI Developer & Full-Stack Engineer.
      - He is proficient in Python/Django, .NET, Node.js, and modern web tech.
      - He works at Sparktech IT LTD.
    `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return NextResponse.json({ response: text });
    } catch (error) {
        console.error('CRITICAL ERROR in chat API:', error);
        if (error instanceof Error) {
            console.error('Error message:', error.message);
            console.error('Error stack:', error.stack);
        }
        return NextResponse.json(
            { error: 'Failed to generate response', details: String(error) },
            { status: 500 }
        );
    }
}
