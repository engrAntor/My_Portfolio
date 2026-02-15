# 🚀 Quick Start Guide

## Project Overview
This is a **Next.js 14 + TypeScript + Tailwind CSS v4** portfolio application using the App Router architecture.

## ✅ What's Been Done

### ✨ Conversion Complete
- ✅ Converted from single-page React app to Next.js App Router
- ✅ Added TypeScript support throughout
- ✅ Updated routing to use Next.js `<Link>` components
- ✅ Fixed theme context for client/server compatibility
- ✅ Added proper 'use client' directives where needed
- ✅ Added SEO metadata to all pages
- ✅ Created proper page routes in `/app` directory

### 📁 Architecture

**Server Components (Default):**
- All page routes (`/app/*/page.tsx`)
- `Home.tsx`, `Education.tsx`, `Skills.tsx`, `Experience.tsx`, `Projects.tsx` components
- `Footer.tsx`

**Client Components ('use client'):**
- `ThemeContext.tsx` - Uses localStorage and state
- `Navigation.tsx` - Uses routing hooks and state  
- `Contact.tsx` - Form with state management
- `ChatBot.tsx` - Interactive chat interface
- `ChatBotWrapper.tsx` - Client wrapper for chatbot

## 🎯 Key Features

1. **Dark/Light Mode** - Persistent theme with smooth transitions
2. **Responsive Navigation** - Mobile menu with active state highlighting
3. **Animated Cards** - Hover effects with gradient backgrounds
4. **Contact Form** - Functional form with success state
5. **AI Chatbot** - Ready for Gemini API integration
6. **SEO Optimized** - Metadata for all pages

## 🏃 Running the Project

```bash
# Development mode
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📝 File Structure Quick Reference

```
/app
├── layout.tsx           # Root layout (ThemeProvider, Navigation, Footer)
├── page.tsx            # Home page (/)
├── education/page.tsx  # /education
├── skills/page.tsx     # /skills
├── experience/page.tsx # /experience
├── projects/page.tsx   # /projects
└── contact/page.tsx    # /contact

/components
├── Navigation.tsx      # Client component with routing
├── Footer.tsx         # Server component with links
├── Home.tsx           # Home page content
├── Education.tsx      # Education content
├── Skills.tsx         # Skills display
├── Experience.tsx     # Work experience
├── Projects.tsx       # Projects showcase
├── Contact.tsx        # Contact form (client)
├── ChatBot.tsx        # Chatbot UI (client)
└── ChatBotWrapper.tsx # Chat wrapper (client)

/context
└── ThemeContext.tsx   # Theme state (client)

/styles
└── globals.css        # Tailwind + custom animations
```

## 🔧 Next Steps & Customization

### 1. Update Personal Information
- [ ] Replace placeholder email/phone in `Contact.tsx`, `Home.tsx`, `Footer.tsx`
- [ ] Update social media links (GitHub, LinkedIn, Twitter)
- [ ] Add your actual CV/resume link

### 2. Customize Content
- [ ] Update skills in `Skills.tsx`
- [ ] Add your work experience in `Experience.tsx`
- [ ] Add your real projects in `Projects.tsx`
- [ ] Update education details in `Education.tsx`

### 3. Integrate Gemini AI (Optional)
- [ ] Get API key from Google AI Studio
- [ ] Create `.env.local` with `NEXT_PUBLIC_GEMINI_API_KEY`
- [ ] Update `ChatBot.tsx` to use actual API calls
- [ ] Replace mock responses with real AI responses

### 4. Deploy
- [ ] Push to GitHub
- [ ] Deploy to Vercel (recommended) or other hosting
- [ ] Set up environment variables if using AI features
- [ ] Configure custom domain (optional)

## 🎨 Theme Customization

### Colors
Edit `styles/globals.css` for global color tokens or use Tailwind classes directly:

```css
/* Example: Change primary color */
.text-blue-600 → .text-purple-600
.bg-blue-600 → .bg-purple-600
```

### Animations
Custom animations are in `styles/globals.css`:
- `animate-gradient` - Animated gradient backgrounds
- `animate-border-spin` - Rotating borders

## 🐛 Troubleshooting

### Hydration Errors
- Ensure components using `localStorage` have 'use client' directive
- Check ThemeContext for proper mounting state

### Routing Issues
- Use `<Link>` from 'next/link' for internal navigation
- Use `<a>` tags only for external links

### Build Errors
- Check TypeScript errors with `npm run build`
- Verify all imports use correct paths
- Ensure 'use client' is added to components with hooks

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Lucide Icons](https://lucide.dev)

## ✨ Pro Tips

1. **Performance**: Keep as many components as Server Components as possible
2. **SEO**: Update metadata in each page route for better search rankings
3. **Images**: Use Next.js `<Image>` component for optimized images
4. **Fonts**: Already using Next.js font optimization with Inter
5. **Analytics**: Add Google Analytics or Vercel Analytics for insights

---

Happy coding! 🎉
