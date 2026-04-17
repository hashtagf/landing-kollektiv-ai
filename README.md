# Kollektiv AI Landing Page

A modern, responsive landing page for Kollektiv AI built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Live Demo

- **Production**: [https://landing-kollektiv-ai.vercel.app](https://landing-kollektiv-ai.vercel.app)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Development](#development)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)

## ✨ Features

- **Modern Design**: Dark-themed landing page with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Built with Next.js 14 App Router for optimal performance
- **Type Safety**: Full TypeScript implementation
- **Accessibility**: Semantic HTML with accessible interactions
- **SEO Ready**: Optimized meta tags and structured data
- **Animation**: Smooth animations powered by Framer Motion
- **Health Endpoints**: `/api/health` and `/api/status` for monitoring

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Tailwind Typography, Tailwind Forms
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Validation**: Zod
- **Deployment**: Vercel
- **Code Quality**: ESLint, Prettier, TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm 8.0.0 or higher

### Installation

1. **Navigate to the project directory**
   ```bash
   cd landing-kollektiv-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables (optional)**

   Create a `.env.local` file in the project root:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 💻 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

### Development Workflow

1. **Code Style**: We use ESLint and Prettier for consistent code formatting
2. **Type Safety**: All code should be properly typed with TypeScript

### Code Quality Standards

- Follow Next.js and React best practices
- Use TypeScript for type safety
- Write accessible HTML with semantic elements
- Optimize for performance and SEO
- Follow responsive design principles

## 📁 Project Structure

```
src/
└── app/                   # Next.js 14 App Router
    ├── api/               # API routes
    │   ├── health/        # Health check endpoint
    │   └── status/        # Detailed status endpoint
    ├── globals.css        # Global styles (Tailwind)
    ├── layout.tsx         # Root layout
    ├── meta.json          # Metadata configuration
    └── page.tsx           # Home page
src/components/            # Landing page sections
    ├── About.tsx
    ├── Contact.tsx
    ├── Hero.tsx
    ├── Services.tsx
    └── Team.tsx
```

### Key Files

- `src/app/layout.tsx` - Root layout with global styles and metadata
- `src/app/page.tsx` - Main landing page component
- `src/app/api/health/route.ts` - Health check endpoint
- `src/app/api/status/route.ts` - Detailed status endpoint
- `tailwind.config.ts` - Tailwind CSS configuration
- `next.config.js` - Next.js configuration
- `vercel.json` - Vercel deployment configuration

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   - Import project in Vercel dashboard

2. **Configure Environment Variables**
   - Add production environment variables in Vercel dashboard
   - Ensure all required variables are set

3. **Deploy**
   - Push to `main` branch for automatic deployment
   - Monitor build logs for any issues

### Environment Variables

Optional for production:

```env
NEXT_PUBLIC_SITE_URL=https://landing-kollektiv-ai.vercel.app
```

### Build Optimization

- Automatic static optimization for better performance
- Image optimization with Next.js Image component
- CSS optimization with Tailwind CSS purging
- TypeScript compilation with strict mode

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Pull Request Guidelines

- Ensure the build passes (`npm run build`) and lint is clean (`npm run lint`)
- Update documentation as needed
- Follow the existing code style
- Include a clear description of changes
- Reference any related issues

## 📝 License

This project is proprietary software owned by Kollektiv AI. All rights reserved.

## 🆘 Support

For questions and support:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🔧 Troubleshooting

### Common Issues

1. **Build Errors**
   - Check Node.js version (>=18.0.0)
   - Clear node_modules and reinstall
   - Verify environment variables

2. **404 Errors**
   - Check vercel.json configuration
   - Verify page.tsx files exist
   - Check routing configuration

3. **Styling Issues**
   - Verify Tailwind CSS configuration
   - Check PostCSS setup
   - Rebuild and clear cache

### Getting Help

1. Check the build logs in Vercel
2. Review the console for client-side errors
3. Verify all dependencies are installed
4. Check environment variable configuration

---

Built with ❤️ by the Kollektiv AI team