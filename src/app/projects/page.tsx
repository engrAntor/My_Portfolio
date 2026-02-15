import { Metadata } from 'next';
import { Projects } from '../../components/Projects';

export const metadata: Metadata = {
  title: 'Projects | Full Stack Developer Portfolio',
  description: 'Featured projects showcasing expertise in full-stack development, AI integration, and enterprise solutions',
};

export default function ProjectsPage() {
  return <Projects />;
}
