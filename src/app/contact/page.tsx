import { Metadata } from 'next';
import { Contact } from '../../components/Contact';

export const metadata: Metadata = {
  title: 'Contact | Full Stack Developer Portfolio',
  description: 'Get in touch for project inquiries and professional opportunities',
};

export default function ContactPage() {
  return <Contact />;
}
