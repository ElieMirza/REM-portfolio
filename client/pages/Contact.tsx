import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="min-h-screen bg-portfolio-dark text-white font-inter">
      {/* Navigation Header */}
      <header className="relative z-10">
        <nav className="flex items-center justify-between px-4 md:px-8 lg:px-60 py-4 h-[70px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src="/images/logo-header.png"
                                  alt="Rita Moussalli Logo"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white text-base font-normal hover:text-portfolio-green transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white text-base font-normal hover:text-portfolio-green transition-colors"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-white text-base font-normal hover:text-portfolio-green transition-colors"
            >
              Projects
            </Link>
            <Link
              to="/services"
              className="text-white text-base font-normal hover:text-portfolio-green transition-colors"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-portfolio-green text-base font-normal"
            >
              Contact
            </Link>
          </div>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <button className="px-6 py-3 border border-portfolio-green rounded-full bg-portfolio-dark text-portfolio-green text-base font-normal">
              Contact Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-8 lg:px-60 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-normal text-white mb-8">
            Contact
          </h1>
          <p className="text-lg text-white/80 mb-8">
            This page is currently under development. Please continue prompting
            to help me build out the full Contact form and information.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-8 py-3 bg-portfolio-green rounded-full text-portfolio-dark-text text-base font-normal hover:bg-portfolio-green/90 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
