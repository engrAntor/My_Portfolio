import { Metadata } from 'next';
import { Education } from '../../components/Education';

export const metadata: Metadata = {
  title: 'Education | Full Stack Developer Portfolio',
  description: 'Academic background and professional certifications in Computer Science and Software Engineering',
};

export default function EducationPage() {
  return <Education />;
}
