import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { ThemeProvider } from '../context/ThemeContext';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ChatBotWrapper } from '../components/ChatBotWrapper';
import { Background3D } from '../components/Background3D';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Full Stack Developer Portfolio',
  description: 'Professional portfolio showcasing full-stack development skills across multiple technologies',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 flex flex-col relative z-0">
            <Background3D />
            <Navigation />
            <main className="container mx-auto px-4 py-8 flex-1 relative z-10">
              {children}
            </main>
            <Footer />
            <ChatBotWrapper />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
