# Rita Moussalli - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive across all devices
- ⚡ Fast loading with optimized assets
- 🔧 Built with modern web technologies
- 🚀 Ready for production deployment

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS 3
- **Routing**: React Router 6
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Backend**: Express.js (for API endpoints)
- **Deployment**: Netlify

## 🚀 Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd REM-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📁 Project Structure

```
├── client/                 # React frontend
│   ├── pages/             # Page components
│   ├── components/        # Reusable UI components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   └── global.css         # Global styles
├── server/                # Express.js backend
├── public/                # Static assets
│   └── images/           # Image assets
├── netlify/              # Netlify deployment functions
└── shared/               # Shared code between client/server
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:client` - Build client only
- `npm run build:server` - Build server only
- `npm start` - Start production server
- `npm test` - Run tests
- `npm run typecheck` - Run TypeScript type checking
- `npm run format.fix` - Fix code formatting

## 🖼️ Customizing Images

Replace the placeholder images in `public/images/` with your own:

- `logo-header.png` - Your logo/brand image (SVG placeholder)
- `hero-image.png` - Main portrait/hero image (SVG placeholder)
- `portfolio-*.svg` - Your portfolio project images
- `about-hero.svg` - About page hero image
- `profile-small.svg` - Small profile image
- `icon-*.svg` - Testimonial/client avatars

## 🌐 Deployment

### Netlify (Recommended)

1. Connect your repository to Netlify
2. Build settings are already configured in `netlify.toml`
3. Deploy with a single click

### Manual Deployment

1. Build the project
```bash
npm run build
```

2. Deploy the `dist/spa` directory to your hosting provider

## 📄 License

© 2025 Rita Moussalli. All rights reserved.

---

Built with ❤️ using React and TypeScript 