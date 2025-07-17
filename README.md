# Sourabh Singh - Portfolio Website

A modern, responsive portfolio website showcasing machine learning engineering expertise and AI projects.

## Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Dark Mode**: Toggle between light and dark themes
- **Interactive Elements**: 3D animations, hover effects, and micro-interactions
- **Performance Optimized**: Fast loading with efficient code splitting
- **SEO Friendly**: Meta tags and semantic HTML structure

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navigation.tsx   # Main navigation with mobile menu
│   ├── ThemeToggle.tsx  # Dark/light mode toggle
│   ├── Counter.tsx      # Animated counter component
│   └── ParticleBackground.tsx # Particle animation background
├── sections/            # Main page sections
│   ├── Hero.tsx         # Landing section with intro
│   ├── About.tsx        # About and education section
│   ├── Skills.tsx       # Skills showcase with animations
│   ├── Experience.tsx   # Professional experience timeline
│   ├── Projects.tsx     # Featured projects gallery
│   ├── Achievements.tsx # Certifications and achievements
│   ├── Contact.tsx      # Contact form and information
│   └── Footer.tsx       # Site footer
├── data/               # Static data and content
│   └── portfolio.ts    # All portfolio data
├── types/              # TypeScript type definitions
│   └── index.ts        # Interface definitions
└── App.tsx             # Main application component
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sourabh-singh-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### Updating Content

All content is centralized in `src/data/portfolio.ts`. Update the following sections:

- **Personal Information**: Name, email, phone, social links
- **Experience**: Add/modify work experience entries
- **Projects**: Showcase your projects with descriptions and tech stacks
- **Skills**: Update skill categories and items
- **Achievements**: Add certifications and platform achievements

### Styling

The design uses Tailwind CSS with a custom color scheme:

- **Primary**: Blue (#3B82F6)
- **Secondary**: Purple (#8B5CF6) 
- **Accent**: Orange (#F59E0B)
- **Success**: Green (#10B981)
- **Warning**: Yellow (#F59E0B)
- **Error**: Red (#EF4444)

### Adding New Sections

1. Create a new component in `src/sections/`
2. Import and add it to `src/App.tsx`
3. Add navigation link in `src/components/Navigation.tsx`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with automatic builds on push

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting provider

## Performance Features

- **Code Splitting**: Automatic route-based code splitting
- **Image Optimization**: Responsive images with proper sizing
- **Animation Optimization**: Hardware-accelerated animations
- **Bundle Optimization**: Tree shaking and minification
- **Caching**: Proper cache headers for static assets

## Browser Support

- Chrome (latest)
- Firefox (latest) 
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or collaborations, reach out:

- **Email**: singhsourabh16c@gmail.com
- **LinkedIn**: [Sourabh Singh](https://www.linkedin.com/in/saurabh-singh-b420b3197)
- **GitHub**: [sr16official1](https://github.com/sr16official1)