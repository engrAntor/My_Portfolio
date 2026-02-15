import { Metadata } from 'next';
import { Experience } from '../../components/Experience';

export const metadata: Metadata = {
  title: 'Professional Experience | Full Stack Developer Portfolio',
  description: 'Professional work experience as a Full Stack Developer across multiple companies and technologies',
};

export default function ExperiencePage() {
  return <Experience />;
}
