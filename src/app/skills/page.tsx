import { Metadata } from 'next';
import { Skills } from '../../components/Skills';

export const metadata: Metadata = {
  title: 'Technical Skills | Full Stack Developer Portfolio',
  description: 'Comprehensive technical skills including React.js, Next.js, TypeScript, Node.js, ASP.NET, Python, and more',
};

export default function SkillsPage() {
  return <Skills />;
}
