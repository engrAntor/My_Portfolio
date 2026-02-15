import { Metadata } from 'next';
import { Home } from '../components/Home';

export const metadata: Metadata = {
  title: 'Home | Full Stack Developer Portfolio',
  description: 'Professional portfolio showcasing full-stack development skills in React, Next.js, Node.js, ASP.NET, and AI technologies',
};

export default function HomePage() {
  return <Home />;
}
