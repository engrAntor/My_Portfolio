# Full Stack Developer Portfolio

A professional portfolio website built with **Next.js 14**, **TypeScript**, **React**, and **Tailwind CSS v4**. Features dark/light mode, responsive design, animated components, and an AI-powered chatbot interface.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: React with Lucide Icons
- **State Management**: React Context API
- **Deployment Ready**: Optimized for production

## 📁 Project Structure

```
/app                      # Next.js App Router
  /education             # Education page route
  /skills                # Skills page route  
  /experience            # Experience page route
  /projects              # Projects page route
  /contact               # Contact page route
  layout.tsx             # Root layout with theme provider
  page.tsx               # Home page

/components              # Reusable React components
  /ui                    # UI component library
  ChatBot.tsx           # AI chatbot component
  ChatBotWrapper.tsx    # Client-side chatbot wrapper
  Contact.tsx           # Contact form component
  Education.tsx         # Education section
  Experience.tsx        # Work experience
  Footer.tsx            # Footer component
  Home.tsx              # Home page content
  Navigation.tsx        # Navigation bar
  Projects.tsx          # Projects showcase
  Skills.tsx            # Skills display

/context                 # React Context
  ThemeContext.tsx      # Theme (dark/light mode) management

/styles                  # Global styles
  globals.css           # Tailwind CSS and custom animations

tsconfig.json           # TypeScript configuration
next.config.js          # Next.js configuration
package.json            # Dependencies
```

## ✨ Features

### 🎨 Design
- **Glassmorphism Navigation**: Transparent navigation bar with backdrop blur
- **Dark/Light Mode**: Theme toggle with localStorage persistence
- **Gradient Animations**: Animated gradient backgrounds on hover
- **Responsive Design**: Mobile-first approach with breakpoints
- **Professional Aesthetics**: Badge-style skill tags without percentages

### 📄 Pages
1. **Home**: Hero section with social links and quick overview cards
2. **Education**: Academic background and certifications
3. **Skills**: Technical skills organized by category
4. **Experience**: Professional work history with timeline
5. **Projects**: Featured projects with technologies and demos
6. **Contact**: Contact form with social media links

### 🤖 Chatbot
- AI assistant powered by Gemini 2.5 Flash (ready for integration)
- Knowledge base about portfolio, skills, and experience
- Real-time message interface
- Expandable/collapsible chat window

### 🎯 Technical Highlights
- **Next.js App Router**: Modern file-based routing
- **TypeScript**: Full type safety
- **Server Components**: Optimized performance
- **Client Components**: Interactive features where needed
- **SEO Optimized**: Metadata for each page
- **Accessibility**: ARIA labels and semantic HTML

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## 🎨 Customization

### Update Personal Information

1. **Contact Details**: Update email, phone, location in:
   - `/components/Home.tsx`
   - `/components/Contact.tsx`
   - `/components/Footer.tsx`

2. **Skills**: Modify skill categories in `/components/Skills.tsx`

3. **Experience**: Update work history in `/components/Experience.tsx`

4. **Projects**: Add/edit projects in `/components/Projects.tsx`

5. **Education**: Update degrees and certifications in `/components/Education.tsx`

### Integrate Gemini AI Chatbot

To connect the chatbot to Google's Gemini API:

1. Get API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Update `/components/ChatBot.tsx`:
   - Replace `generateBotResponse()` with actual API calls
   - Add API key to environment variables
   - Implement streaming responses if desired

Example API integration:
```typescript
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

// Use in handleSendMessage function
```

### Theme Colors

Modify colors in `/styles/globals.css` or use Tailwind's color system directly in components.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 Technologies Details

### Frontend
- React 18 with TypeScript
- Next.js 14 App Router
- Tailwind CSS v4 for styling
- Lucide React for icons

### State Management
- React Context API for theme
- Local state with useState hooks
- URL-based navigation with Next.js

### Animations
- CSS animations for gradients
- Tailwind transition utilities
- Hover effects with transform

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

For questions or feedback about this portfolio template:
- Email: your.email@example.com
- GitHub: [Your GitHub](https://github.com)
- LinkedIn: [Your LinkedIn](https://linkedin.com)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
