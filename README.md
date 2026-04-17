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
- [Testing](#testing)
- [Contributing](#contributing)

## ✨ Features

- **Modern Design**: Clean, professional landing page with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Built with Next.js 14 App Router for optimal performance
- **Type Safety**: Full TypeScript implementation
- **Accessibility**: WCAG compliant with proper semantic HTML
- **SEO Ready**: Optimized meta tags and structured data
- **Contact Form**: Integrated contact form with email functionality
- **Animation**: Smooth animations powered by Framer Motion

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Tailwind Typography, Tailwind Forms
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Forms**: Zod validation
- **Email**: Nodemailer
- **Database**: Mongoose (MongoDB)
- **Deployment**: Vercel
- **Code Quality**: ESLint, Prettier, TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm 8.0.0 or higher
- MongoDB connection (for contact form)

### Installation

1. **Navigate to the project directory**
   ```bash
   cd landing-kollektiv-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure the following variables in `.env.local`:
   ```env
   # Email Configuration
   SMTP_HOST=your-smtp-host
   SMTP_PORT=587
   SMTP_USER=your-email@domain.com
   SMTP_PASS=your-app-password
   
   # MongoDB
   MONGODB_URI=mongodb://localhost:27017/kollektiv-landing
   
   # Site Configuration
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
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

### Development Workflow

1. **Code Style**: We use ESLint and Prettier for consistent code formatting
2. **Type Safety**: All code should be properly typed with TypeScript
3. **Testing**: Write tests for new features and bug fixes
4. **Git Hooks**: Pre-commit hooks ensure code quality

### Code Quality Standards

- Follow Next.js and React best practices
- Use TypeScript for type safety
- Implement proper error boundaries
- Write accessible HTML with semantic elements
- Optimize for performance and SEO
- Follow responsive design principles

## 📁 Project Structure

```
src/
├── app/                    # Next.js 14 App Router
│   ├── api/               # API routes
│   │   └── contact/       # Contact form endpoint
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   └── meta.json         # Metadata configuration
├── components/            # Reusable UI components
├── lib/                  # Utility functions and configurations
├── styles/               # Global styles and Tailwind CSS
└── types/                # TypeScript type definitions
```

### Key Files

- `src/app/layout.tsx` - Root layout with global styles and metadata
- `src/app/page.tsx` - Main landing page component
- `src/app/api/contact/route.ts` - Contact form API endpoint
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

Required for production:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=noreply@kollektiv.ai
SMTP_PASS=your-app-password
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/kollektiv-landing
NEXT_PUBLIC_SITE_URL=https://landing-kollektiv-ai.vercel.app
```

### Build Optimization

- Automatic static optimization for better performance
- Image optimization with Next.js Image component
- CSS optimization with Tailwind CSS purging
- TypeScript compilation with strict mode

## 🧪 Testing

### Test Structure

```
__tests__/
├── components/           # Component tests
├── pages/               # Page tests
└── utils/               # Utility function tests
```

### Running Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

### Testing Guidelines

- Write unit tests for utility functions
- Write integration tests for API endpoints
- Write component tests for UI components
- Maintain high test coverage (>80%)

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

- Ensure all tests pass
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