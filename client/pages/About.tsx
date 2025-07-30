import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-portfolio-dark text-white font-inter">
      {/* Navigation Header */}
      <header className="relative z-10">
        <nav className="flex items-center justify-between px-4 md:px-8 lg:px-60 py-4 h-[70px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src="images/logo-header.png"
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
              className="text-portfolio-green text-base font-normal"
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
              className="text-white text-base font-normal hover:text-portfolio-green transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <button className="px-6 py-3 border border-white/80 rounded-full bg-portfolio-dark text-white text-base font-normal hover:bg-white hover:text-portfolio-dark transition-colors">
                Contact Me
              </button>
            </Link>
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

      {/* About Me Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-60">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Content - Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src="images/about-hero.svg"
                                      alt="Rita Moussalli"
                  className="w-full h-auto object-cover rounded-3xl max-w-md mx-auto lg:mx-0"
                />
              </div>
            </div>

            {/* Right Content - Text and Social */}
            <div className="order-1 lg:order-2 space-y-8">
              {/* About Me Indicator */}
              <div className="flex items-center justify-center lg:justify-start">
                <div className="flex items-center px-4 py-2 border border-portfolio-gray-border rounded-full">
                  <div className="w-3 h-3 bg-portfolio-green rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-portfolio-dark-text text-base font-normal uppercase tracking-wide">
                    About Me
                  </span>
                </div>
              </div>

              {/* Main Heading */}
              <div className="text-center lg:text-left">
                <h1 className="text-portfolio-dark text-5xl md:text-6xl lg:text-[5rem] font-normal leading-tight tracking-tight">
                  Discover My Design Journey
                </h1>
              </div>

              {/* Description */}
              <div className="max-w-xl mx-auto lg:mx-0">
                <p className="text-portfolio-dark-text text-base font-normal leading-relaxed text-center lg:text-left">
                  Hello! I'm Wilson Brock, a passionate Web Designer with over a
                  5+ of experience in creating visually appealing and
                  user-friendly websites. My mission is to bring your brand to
                  life through innovative design solutions tailored to your
                  unique needs.
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                {/* Behance */}
                <a
                  href="#"
                  className="w-14 h-14 bg-portfolio-dark-text rounded-full flex items-center justify-center hover:bg-portfolio-dark transition-colors"
                >
                  <svg
                    width="24"
                    height="22"
                    viewBox="0 0 24 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.66667 10.2168C10.9917 9.58343 11.6833 8.6251 11.6833 7.13343C11.6833 4.19176 9.49167 3.4751 6.9625 3.4751H0V18.2418H7.15833C9.84167 18.2418 12.3625 16.9543 12.3625 13.9543C12.3625 12.1001 11.4833 10.7293 9.66667 10.2168ZM3.24583 5.99593H6.29167C7.4625 5.99593 8.51667 6.3251 8.51667 7.68343C8.51667 8.9376 7.69583 9.44176 6.5375 9.44176H3.24583V5.99593ZM6.71667 15.7334H3.24583V11.6668H6.78333C8.2125 11.6668 9.11667 12.2626 9.11667 13.7751C9.11667 15.2668 8.0375 15.7334 6.71667 15.7334ZM21.6542 5.70426H15.6667V4.2501H21.6542V5.70426ZM24 13.0501C24 9.8876 22.15 7.2501 18.7958 7.2501C15.5375 7.2501 13.325 9.7001 13.325 12.9084C13.325 16.2376 15.4208 18.5209 18.7958 18.5209C21.35 18.5209 23.0042 17.3709 23.8 14.9251H21.2083C20.9292 15.8376 19.7792 16.3209 18.8875 16.3209C17.1667 16.3209 16.2625 15.3126 16.2625 13.6001H23.975C23.9875 13.4251 24 13.2376 24 13.0501ZM16.2667 11.7501C16.3625 10.3459 17.2958 9.46676 18.7042 9.46676C20.1792 9.46676 20.9208 10.3334 21.0458 11.7501H16.2667Z"
                      fill="white"
                    />
                  </svg>
                </a>

                {/* Dribbble */}
                <a
                  href="#"
                  className="w-14 h-14 bg-portfolio-dark-text rounded-full flex items-center justify-center hover:bg-portfolio-dark transition-colors"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_dribbble)">
                      <path
                        d="M12 0.375C5.58994 0.375 0.375 5.58994 0.375 12C0.375 18.4101 5.58994 23.625 12 23.625C18.4101 23.625 23.625 18.4101 23.625 12C23.625 5.58994 18.4101 0.375 12 0.375ZM19.6861 5.73591C21.069 7.42556 21.9065 9.57764 21.9284 11.9213C21.601 11.8521 18.3181 11.1862 15.0142 11.6017C14.7446 10.9435 14.4901 10.3645 14.1415 9.65105C17.8128 8.15213 19.4767 6.01908 19.6861 5.73591ZM18.5822 4.58766C18.4036 4.84205 16.9089 6.85106 13.3781 8.17448C11.751 5.18498 9.94758 2.72911 9.67313 2.36161C12.822 1.60256 16.1403 2.42114 18.5822 4.58766ZM7.77848 3.02906C8.04028 3.38808 9.81464 5.847 11.4599 8.77167C6.8152 10.0051 2.72428 9.98733 2.28019 9.98147C2.92406 6.90023 5.00053 4.33936 7.77848 3.02906ZM2.07047 12.0151C2.07047 11.9136 2.07248 11.8125 2.07553 11.7117C2.50997 11.7206 7.32178 11.7826 12.2805 10.2986C12.5648 10.8549 12.8363 11.4196 13.0855 11.9837C9.49495 12.9951 6.23269 15.8991 4.62314 18.6543C3.03722 16.894 2.07047 14.5655 2.07047 12.0151ZM5.90517 19.8486C6.94237 17.7283 9.75727 14.9913 13.7604 13.6256C15.1545 17.2483 15.731 20.2844 15.8787 21.1555C12.6859 22.5155 8.84672 22.1424 5.90517 19.8486ZM17.548 20.2465C17.4462 19.6425 16.9177 16.7357 15.619 13.1668C18.7305 12.6687 21.4643 13.4841 21.804 13.5913C21.3614 16.3541 19.7756 18.7402 17.548 20.2465Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_dribbble">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  className="w-14 h-14 bg-portfolio-dark-text rounded-full flex items-center justify-center hover:bg-portfolio-dark transition-colors"
                >
                  <svg
                    width="22"
                    height="24"
                    viewBox="0 0 22 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_linkedin)">
                      <path
                        d="M5.20062 21H0.846875V6.97971H5.20062V21ZM3.02141 5.06721C1.62922 5.06721 0.5 3.91408 0.5 2.52189C0.5 1.85318 0.765647 1.21185 1.2385 0.738991C1.71136 0.266136 2.35269 0.000488281 3.02141 0.000488281C3.69012 0.000488281 4.33145 0.266136 4.80431 0.738991C5.27716 1.21185 5.54281 1.85318 5.54281 2.52189C5.54281 3.91408 4.41313 5.06721 3.02141 5.06721ZM21.4953 21H17.1509V14.175C17.1509 12.5485 17.1181 10.4625 14.8873 10.4625C12.6237 10.4625 12.2769 12.2297 12.2769 14.0578V21H7.92781V6.97971H12.1034V8.89221H12.1644C12.7456 7.79064 14.1655 6.62814 16.2838 6.62814C20.69 6.62814 21.5 9.52971 21.5 13.2985V21H21.4953Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_linkedin">
                        <rect
                          width="21"
                          height="24"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  className="w-14 h-14 bg-portfolio-dark-text rounded-full flex items-center justify-center hover:bg-portfolio-dark transition-colors"
                >
                  <svg
                    width="22"
                    height="24"
                    viewBox="0 0 22 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_instagram)">
                      <path
                        d="M11.0047 6.60928C8.02344 6.60928 5.61876 9.01396 5.61876 11.9952C5.61876 14.9765 8.02344 17.3812 11.0047 17.3812C13.9859 17.3812 16.3906 14.9765 16.3906 11.9952C16.3906 9.01396 13.9859 6.60928 11.0047 6.60928ZM11.0047 15.4968C9.07813 15.4968 7.50313 13.9265 7.50313 11.9952C7.50313 10.064 9.07344 8.49365 11.0047 8.49365C12.9359 8.49365 14.5063 10.064 14.5063 11.9952C14.5063 13.9265 12.9313 15.4968 11.0047 15.4968ZM17.8672 6.38896C17.8672 7.0874 17.3047 7.64522 16.6109 7.64522C15.9125 7.64522 15.3547 7.08271 15.3547 6.38896C15.3547 5.69521 15.9172 5.13271 16.6109 5.13271C17.3047 5.13271 17.8672 5.69521 17.8672 6.38896ZM21.4344 7.66397C21.3547 5.98115 20.9703 4.49053 19.7375 3.2624C18.5094 2.03428 17.0188 1.6499 15.3359 1.56553C13.6016 1.46709 8.40313 1.46709 6.66876 1.56553C4.99063 1.64521 3.50001 2.02959 2.26719 3.25771C1.03438 4.48584 0.654694 5.97646 0.570319 7.65928C0.471881 9.39365 0.471881 14.5921 0.570319 16.3265C0.650006 18.0093 1.03438 19.4999 2.26719 20.728C3.50001 21.9562 4.98594 22.3405 6.66876 22.4249C8.40313 22.5233 13.6016 22.5233 15.3359 22.4249C17.0188 22.3452 18.5094 21.9608 19.7375 20.728C20.9656 19.4999 21.35 18.0093 21.4344 16.3265C21.5328 14.5921 21.5328 9.39834 21.4344 7.66397ZM19.1938 18.1874C18.8281 19.1062 18.1203 19.814 17.1969 20.1843C15.8141 20.7327 12.5328 20.6062 11.0047 20.6062C9.47657 20.6062 6.19063 20.728 4.81251 20.1843C3.89376 19.8187 3.18594 19.1108 2.81563 18.1874C2.26719 16.8046 2.39376 13.5233 2.39376 11.9952C2.39376 10.4671 2.27188 7.18115 2.81563 5.80303C3.18126 4.88428 3.88907 4.17646 4.81251 3.80615C6.19532 3.25771 9.47657 3.38428 11.0047 3.38428C12.5328 3.38428 15.8188 3.2624 17.1969 3.80615C18.1156 4.17178 18.8234 4.87959 19.1938 5.80303C19.7422 7.18584 19.6156 10.4671 19.6156 11.9952C19.6156 13.5233 19.7422 16.8093 19.1938 18.1874Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_instagram">
                        <rect
                          width="21"
                          height="24"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="bg-gray-100 py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-60">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Content - Heading */}
            <div className="space-y-8">
              {/* Experience Indicator */}
              <div className="flex items-center justify-center lg:justify-start">
                <div className="flex items-center px-4 py-2 border border-portfolio-gray-border rounded-full">
                  <div className="w-3 h-3 bg-portfolio-green rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-portfolio-dark-text text-base font-normal uppercase tracking-wide">
                    Experience
                  </span>
                </div>
              </div>

              {/* Main Heading */}
              <div className="text-center lg:text-left">
                <h2 className="text-portfolio-dark text-5xl md:text-6xl lg:text-[5rem] font-normal leading-tight tracking-tight">
                  My Work Experience
                </h2>
              </div>
            </div>

            {/* Right Content - Experience List */}
            <div className="space-y-0">
              {/* Product Designer */}
              <div className="border-b border-portfolio-gray-border pb-6 mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                  <div className="flex-1">
                    <h3 className="text-portfolio-dark text-xl md:text-2xl font-normal leading-6 tracking-tight">
                      Product Designer
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-portfolio-dark text-lg font-normal leading-6 tracking-tight">
                      Cool Craft
                    </div>
                    <div className="text-portfolio-dark text-base font-normal mt-1">
                      Nov 2024 - Now
                    </div>
                  </div>
                </div>
              </div>

              {/* Design Specialist */}
              <div className="border-b border-portfolio-gray-border pb-6 mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                  <div className="flex-1">
                    <h3 className="text-portfolio-dark text-xl md:text-2xl font-normal leading-6 tracking-tight">
                      Design Specialist
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-portfolio-dark text-lg font-normal leading-6 tracking-tight">
                      Amazing Pixel
                    </div>
                    <div className="text-portfolio-dark text-base font-normal mt-1">
                      Nov 2022 - Nov 2024
                    </div>
                  </div>
                </div>
              </div>

              {/* UX/UI Designer */}
              <div className="border-b border-portfolio-gray-border pb-6 mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                  <div className="flex-1">
                    <h3 className="text-portfolio-dark text-xl md:text-2xl font-normal leading-6 tracking-tight">
                      UX/UI Designer
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-portfolio-dark text-lg font-normal leading-6 tracking-tight">
                      Design Studio
                    </div>
                    <div className="text-portfolio-dark text-base font-normal mt-1">
                      Nov 2021 - Nov 2022
                    </div>
                  </div>
                </div>
              </div>

              {/* Web Designer */}
              <div className="border-b border-portfolio-gray-border pb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                  <div className="flex-1">
                    <h3 className="text-portfolio-dark text-xl md:text-2xl font-normal leading-6 tracking-tight">
                      Web Designer
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-portfolio-dark text-lg font-normal leading-6 tracking-tight">
                      Freelancer
                    </div>
                    <div className="text-portfolio-dark text-base font-normal mt-1">
                      Nov 2018 - Nov 2021
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Section */}
      <section className="bg-portfolio-dark py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-60">
          <div className="text-center space-y-8">
            {/* My World Indicator */}
            <div className="flex items-center justify-center">
              <div className="flex items-center px-4 py-2 border border-portfolio-gray-border rounded-full">
                <div className="w-3 h-3 bg-portfolio-green rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-white text-base font-normal uppercase tracking-wide">
                  My World
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h2 className="text-white text-5xl md:text-6xl lg:text-[5rem] font-normal leading-tight tracking-tight">
                When I am not Working
              </h2>
              <h3 className="text-white text-5xl md:text-6xl lg:text-[5rem] font-normal leading-tight tracking-tight">
                I am Travelling
              </h3>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-12">
              <div className="w-full">
                <img
                  src="images/about-gallery-1.webp"
                  alt="Travel destination 1"
                  className="w-full h-[400px] md:h-[437px] object-cover rounded-2xl"
                />
              </div>
              <div className="w-full">
                <img
                  src="images/about-gallery-2.webp"
                  alt="Travel destination 2"
                  className="w-full h-[400px] md:h-[437px] object-cover rounded-2xl"
                />
              </div>
              <div className="w-full">
                <img
                  src="images/about-gallery-3.webp"
                  alt="Travel destination 3"
                  className="w-full h-[400px] md:h-[437px] object-cover rounded-2xl"
                />
              </div>
              <div className="w-full">
                <img
                  src="images/about-gallery-4.webp"
                  alt="Travel destination 4"
                  className="w-full h-[400px] md:h-[437px] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy Section */}
      <section className="bg-gray-100 py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-60">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Content - Heading */}
            <div className="space-y-8">
              {/* Experience Indicator */}
              <div className="flex items-center justify-center lg:justify-start">
                <div className="flex items-center px-4 py-2 border border-portfolio-gray-border rounded-full">
                  <div className="w-3 h-3 bg-portfolio-green rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-portfolio-dark-text text-base font-normal uppercase tracking-wide">
                    Experience
                  </span>
                </div>
              </div>

              {/* Main Heading */}
              <div className="text-center lg:text-left">
                <h2 className="text-portfolio-dark text-5xl md:text-6xl lg:text-[5rem] font-normal leading-tight tracking-tight">
                  My Design Philosophy
                </h2>
              </div>
            </div>

            {/* Right Content - Philosophy Points */}
            <div className="space-y-8">
              {/* Description */}
              <div>
                <p className="text-portfolio-dark-text text-base font-normal leading-normal">
                  Today, I am driven by the belief that great design is not just
                  about aesthetics; it's about creating meaningful connections
                  between brands and their audiences. I am committed to
                  continuous learning and innovation, ensuring that my designs
                  not only look great but also deliver results.
                </p>
              </div>

              {/* Philosophy Points */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-portfolio-green rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.6667 1.5L4 8.16667L1.33333 5.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-portfolio-dark text-lg font-normal leading-6 tracking-tight">
                    Crafting Purposeful Experiences
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-portfolio-green rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.6667 1.5L4 8.16667L1.33333 5.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-portfolio-dark text-lg font-normal leading-6 tracking-tight">
                    User-Centric Approach
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-portfolio-green rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.6667 1.5L4 8.16667L1.33333 5.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-portfolio-dark text-lg font-normal leading-6 tracking-tight">
                    Innovation and Adaptability
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-portfolio-green rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.6667 1.5L4 8.16667L1.33333 5.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-portfolio-dark text-lg font-normal leading-6 tracking-tight">
                    Collaboration and Communication
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Awards Section */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Awwwards Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="mb-4">
                <svg
                  width="18"
                  height="24"
                  viewBox="0 0 18 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.55247 16.9983C4.14513 16.5909 4.35747 16.7058 3.37497 16.4428C2.92919 16.3233 2.53731 16.0936 2.18294 15.8184L0.0562205 21.0328C-0.149561 21.5377 0.234814 22.0861 0.779502 22.0655L3.24935 21.9713L4.9481 23.7656C5.3231 24.1612 5.98122 24.038 6.187 23.5331L8.62684 17.5509C8.11872 17.8341 7.55481 18 6.97169 18C6.05763 18 5.19888 17.6442 4.55247 16.9983ZM17.9437 21.0328L15.817 15.8184C15.4626 16.0941 15.0708 16.3233 14.625 16.4428C13.6373 16.7072 13.8539 16.5919 13.4475 16.9983C12.8011 17.6442 11.9418 18 11.0278 18C10.4447 18 9.88075 17.8336 9.37263 17.5509L11.8125 23.5331C12.0183 24.038 12.6768 24.1612 13.0514 23.7656L14.7506 21.9713L17.2204 22.0655C17.7651 22.0861 18.1495 21.5372 17.9437 21.0328ZM12.3281 15.9375C13.0443 15.2086 13.1264 15.2714 14.1464 14.9934C14.7975 14.8158 15.3065 14.2978 15.4809 13.635C15.8315 12.3038 15.7406 12.4645 16.6973 11.4905C17.174 11.0053 17.3601 10.298 17.1858 9.63516C16.8356 8.30484 16.8351 8.49047 17.1858 7.15875C17.3601 6.49594 17.174 5.78859 16.6973 5.30344C15.7406 4.32938 15.8315 4.48969 15.4809 3.15891C15.3065 2.49609 14.7975 1.97813 14.1464 1.80047C12.8395 1.44375 12.997 1.53703 12.0393 0.5625C11.5626 0.077344 10.8675 -0.1125 10.2164 0.0651565C8.90997 0.421407 9.09231 0.421875 7.78356 0.0651565C7.13247 -0.1125 6.43731 0.0768753 5.9606 0.5625C5.00388 1.53656 5.16138 1.44375 3.85403 1.80047C3.20294 1.97813 2.69388 2.49609 2.5195 3.15891C2.16935 4.48969 2.25981 4.32938 1.3031 5.30344C0.826377 5.78859 0.639814 6.49594 0.814658 7.15875C1.16481 8.48812 1.16528 8.3025 0.814658 9.63469C0.640283 10.2975 0.826377 11.0048 1.3031 11.4905C2.25981 12.4645 2.16888 12.3038 2.5195 13.635C2.69388 14.2978 3.20294 14.8158 3.85403 14.9934C4.9031 15.2794 4.98138 15.2344 5.67185 15.9375C6.292 16.5689 7.2581 16.6819 8.00341 16.2103C8.30145 16.0211 8.64718 15.9206 9.00021 15.9206C9.35323 15.9206 9.69896 16.0211 9.997 16.2103C10.7418 16.6819 11.7079 16.5689 12.3281 15.9375ZM4.57778 8.24813C4.57778 5.76234 6.55778 3.74719 8.99997 3.74719C11.4422 3.74719 13.4222 5.76234 13.4222 8.24813C13.4222 10.7339 11.4422 12.7491 8.99997 12.7491C6.55778 12.7491 4.57778 10.7339 4.57778 8.24813Z"
                    fill="#1A1A1A"
                  />
                </svg>
              </div>
              <h3 className="text-portfolio-dark text-2xl font-normal leading-6 tracking-tight mb-2">
                Awwwards
              </h3>
              <p className="text-gray-600 text-base font-normal">
                Site of the day
              </p>
            </div>

            {/* CSS Design Award Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="mb-4">
                <svg
                  width="18"
                  height="24"
                  viewBox="0 0 18 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.55247 16.9983C4.14513 16.5909 4.35747 16.7058 3.37497 16.4428C2.92919 16.3233 2.53731 16.0936 2.18294 15.8184L0.0562205 21.0328C-0.149561 21.5377 0.234814 22.0861 0.779502 22.0655L3.24935 21.9713L4.9481 23.7656C5.3231 24.1612 5.98122 24.038 6.187 23.5331L8.62684 17.5509C8.11872 17.8341 7.55481 18 6.97169 18C6.05763 18 5.19888 17.6442 4.55247 16.9983ZM17.9437 21.0328L15.817 15.8184C15.4626 16.0941 15.0708 16.3233 14.625 16.4428C13.6373 16.7072 13.8539 16.5919 13.4475 16.9983C12.8011 17.6442 11.9418 18 11.0278 18C10.4447 18 9.88075 17.8336 9.37263 17.5509L11.8125 23.5331C12.0183 24.038 12.6768 24.1612 13.0514 23.7656L14.7506 21.9713L17.2204 22.0655C17.7651 22.0861 18.1495 21.5372 17.9437 21.0328ZM12.3281 15.9375C13.0443 15.2086 13.1264 15.2714 14.1464 14.9934C14.7975 14.8158 15.3065 14.2978 15.4809 13.635C15.8315 12.3038 15.7406 12.4645 16.6973 11.4905C17.174 11.0053 17.3601 10.298 17.1858 9.63516C16.8356 8.30484 16.8351 8.49047 17.1858 7.15875C17.3601 6.49594 17.174 5.78859 16.6973 5.30344C15.7406 4.32938 15.8315 4.48969 15.4809 3.15891C15.3065 2.49609 14.7975 1.97813 14.1464 1.80047C12.8395 1.44375 12.997 1.53703 12.0393 0.5625C11.5626 0.077344 10.8675 -0.1125 10.2164 0.0651565C8.90997 0.421407 9.09231 0.421875 7.78356 0.0651565C7.13247 -0.1125 6.43731 0.0768753 5.9606 0.5625C5.00388 1.53656 5.16138 1.44375 3.85403 1.80047C3.20294 1.97813 2.69388 2.49609 2.5195 3.15891C2.16935 4.48969 2.25981 4.32938 1.3031 5.30344C0.826377 5.78859 0.639814 6.49594 0.814658 7.15875C1.16481 8.48812 1.16528 8.3025 0.814658 9.63469C0.640283 10.2975 0.826377 11.0048 1.3031 11.4905C2.25981 12.4645 2.16888 12.3038 2.5195 13.635C2.69388 14.2978 3.20294 14.8158 3.85403 14.9934C4.9031 15.2794 4.98138 15.2344 5.67185 15.9375C6.292 16.5689 7.2581 16.6819 8.00341 16.2103C8.30145 16.0211 8.64718 15.9206 9.00021 15.9206C9.35323 15.9206 9.69896 16.0211 9.997 16.2103C10.7418 16.6819 11.7079 16.5689 12.3281 15.9375ZM4.57778 8.24813C4.57778 5.76234 6.55778 3.74719 8.99997 3.74719C11.4422 3.74719 13.4222 5.76234 13.4222 8.24813C13.4222 10.7339 11.4422 12.7491 8.99997 12.7491C6.55778 12.7491 4.57778 10.7339 4.57778 8.24813Z"
                    fill="#1A1A1A"
                  />
                </svg>
              </div>
              <h3 className="text-portfolio-dark text-2xl font-normal leading-6 tracking-tight mb-2">
                CSS Design Award
              </h3>
              <p className="text-gray-600 text-base font-normal">CSS Ninja</p>
            </div>

            {/* CSS Design Award Champion Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="mb-4">
                <svg
                  width="18"
                  height="24"
                  viewBox="0 0 18 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.55247 16.9983C4.14513 16.5909 4.35747 16.7058 3.37497 16.4428C2.92919 16.3233 2.53731 16.0936 2.18294 15.8184L0.0562205 21.0328C-0.149561 21.5377 0.234814 22.0861 0.779502 22.0655L3.24935 21.9713L4.9481 23.7656C5.3231 24.1612 5.98122 24.038 6.187 23.5331L8.62684 17.5509C8.11872 17.8341 7.55481 18 6.97169 18C6.05763 18 5.19888 17.6442 4.55247 16.9983ZM17.9437 21.0328L15.817 15.8184C15.4626 16.0941 15.0708 16.3233 14.625 16.4428C13.6373 16.7072 13.8539 16.5919 13.4475 16.9983C12.8011 17.6442 11.9418 18 11.0278 18C10.4447 18 9.88075 17.8336 9.37263 17.5509L11.8125 23.5331C12.0183 24.038 12.6768 24.1612 13.0514 23.7656L14.7506 21.9713L17.2204 22.0655C17.7651 22.0861 18.1495 21.5372 17.9437 21.0328ZM12.3281 15.9375C13.0443 15.2086 13.1264 15.2714 14.1464 14.9934C14.7975 14.8158 15.3065 14.2978 15.4809 13.635C15.8315 12.3038 15.7406 12.4645 16.6973 11.4905C17.174 11.0053 17.3601 10.298 17.1858 9.63516C16.8356 8.30484 16.8351 8.49047 17.1858 7.15875C17.3601 6.49594 17.174 5.78859 16.6973 5.30344C15.7406 4.32938 15.8315 4.48969 15.4809 3.15891C15.3065 2.49609 14.7975 1.97813 14.1464 1.80047C12.8395 1.44375 12.997 1.53703 12.0393 0.5625C11.5626 0.077344 10.8675 -0.1125 10.2164 0.0651565C8.90997 0.421407 9.09231 0.421875 7.78356 0.0651565C7.13247 -0.1125 6.43731 0.0768753 5.9606 0.5625C5.00388 1.53656 5.16138 1.44375 3.85403 1.80047C3.20294 1.97813 2.69388 2.49609 2.5195 3.15891C2.16935 4.48969 2.25981 4.32938 1.3031 5.30344C0.826377 5.78859 0.639814 6.49594 0.814658 7.15875C1.16481 8.48812 1.16528 8.3025 0.814658 9.63469C0.640283 10.2975 0.826377 11.0048 1.3031 11.4905C2.25981 12.4645 2.16888 12.3038 2.5195 13.635C2.69388 14.2978 3.20294 14.8158 3.85403 14.9934C4.9031 15.2794 4.98138 15.2344 5.67185 15.9375C6.292 16.5689 7.2581 16.6819 8.00341 16.2103C8.30145 16.0211 8.64718 15.9206 9.00021 15.9206C9.35323 15.9206 9.69896 16.0211 9.997 16.2103C10.7418 16.6819 11.7079 16.5689 12.3281 15.9375ZM4.57778 8.24813C4.57778 5.76234 6.55778 3.74719 8.99997 3.74719C11.4422 3.74719 13.4222 5.76234 13.4222 8.24813C13.4222 10.7339 11.4422 12.7491 8.99997 12.7491C6.55778 12.7491 4.57778 10.7339 4.57778 8.24813Z"
                    fill="#1A1A1A"
                  />
                </svg>
              </div>
              <h3 className="text-portfolio-dark text-2xl font-normal leading-6 tracking-tight mb-2">
                CSS Design Award
              </h3>
              <p className="text-gray-600 text-base font-normal">
                CSS Champion
              </p>
            </div>

            {/* Awwwards Site of the Day Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="mb-4">
                <svg
                  width="18"
                  height="24"
                  viewBox="0 0 18 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.55247 16.9983C4.14513 16.5909 4.35747 16.7058 3.37497 16.4428C2.92919 16.3233 2.53731 16.0936 2.18294 15.8184L0.0562205 21.0328C-0.149561 21.5377 0.234814 22.0861 0.779502 22.0655L3.24935 21.9713L4.9481 23.7656C5.3231 24.1612 5.98122 24.038 6.187 23.5331L8.62684 17.5509C8.11872 17.8341 7.55481 18 6.97169 18C6.05763 18 5.19888 17.6442 4.55247 16.9983ZM17.9437 21.0328L15.817 15.8184C15.4626 16.0941 15.0708 16.3233 14.625 16.4428C13.6373 16.7072 13.8539 16.5919 13.4475 16.9983C12.8011 17.6442 11.9418 18 11.0278 18C10.4447 18 9.88075 17.8336 9.37263 17.5509L11.8125 23.5331C12.0183 24.038 12.6768 24.1612 13.0514 23.7656L14.7506 21.9713L17.2204 22.0655C17.7651 22.0861 18.1495 21.5372 17.9437 21.0328ZM12.3281 15.9375C13.0443 15.2086 13.1264 15.2714 14.1464 14.9934C14.7975 14.8158 15.3065 14.2978 15.4809 13.635C15.8315 12.3038 15.7406 12.4645 16.6973 11.4905C17.174 11.0053 17.3601 10.298 17.1858 9.63516C16.8356 8.30484 16.8351 8.49047 17.1858 7.15875C17.3601 6.49594 17.174 5.78859 16.6973 5.30344C15.7406 4.32938 15.8315 4.48969 15.4809 3.15891C15.3065 2.49609 14.7975 1.97813 14.1464 1.80047C12.8395 1.44375 12.997 1.53703 12.0393 0.5625C11.5626 0.077344 10.8675 -0.1125 10.2164 0.0651565C8.90997 0.421407 9.09231 0.421875 7.78356 0.0651565C7.13247 -0.1125 6.43731 0.0768753 5.9606 0.5625C5.00388 1.53656 5.16138 1.44375 3.85403 1.80047C3.20294 1.97813 2.69388 2.49609 2.5195 3.15891C2.16935 4.48969 2.25981 4.32938 1.3031 5.30344C0.826377 5.78859 0.639814 6.49594 0.814658 7.15875C1.16481 8.48812 1.16528 8.3025 0.814658 9.63469C0.640283 10.2975 0.826377 11.0048 1.3031 11.4905C2.25981 12.4645 2.16888 12.3038 2.5195 13.635C2.69388 14.2978 3.20294 14.8158 3.85403 14.9934C4.9031 15.2794 4.98138 15.2344 5.67185 15.9375C6.292 16.5689 7.2581 16.6819 8.00341 16.2103C8.30145 16.0211 8.64718 15.9206 9.00021 15.9206C9.35323 15.9206 9.69896 16.0211 9.997 16.2103C10.7418 16.6819 11.7079 16.5689 12.3281 15.9375ZM4.57778 8.24813C4.57778 5.76234 6.55778 3.74719 8.99997 3.74719C11.4422 3.74719 13.4222 5.76234 13.4222 8.24813C13.4222 10.7339 11.4422 12.7491 8.99997 12.7491C6.55778 12.7491 4.57778 10.7339 4.57778 8.24813Z"
                    fill="#1A1A1A"
                  />
                </svg>
              </div>
              <h3 className="text-portfolio-dark text-2xl font-normal leading-6 tracking-tight mb-2">
                Awwwards
              </h3>
              <p className="text-gray-600 text-base font-normal">
                Site of the day
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-portfolio-dark-text py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-60">
          <div className="bg-portfolio-dark rounded-2xl py-16 lg:py-20 px-8 lg:px-16 text-center">
            {/* Have Project in Mind Indicator */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center px-4 py-2 border border-portfolio-gray-border rounded-full">
                <div className="w-3 h-3 bg-portfolio-green rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-white text-base font-normal uppercase tracking-wide">
                  Have Project in Mind?
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4 mb-12">
              <h2 className="text-white text-5xl md:text-6xl lg:text-[5rem] font-normal leading-tight tracking-tight">
                Let's Turn your Ideas
              </h2>
              <h3 className="text-white text-5xl md:text-6xl lg:text-[5rem] font-normal leading-tight tracking-tight">
                into Reality
              </h3>
            </div>

            {/* Email Contact */}
            <div className="flex items-center justify-center">
              <div className="flex items-center bg-portfolio-dark border-b-2 border-portfolio-gray-border pb-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-4"
                >
                  <path
                    d="M21 16L27 22L21 28"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 4V22H27"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <a
                  href="mailto:hello@wilsonbrock.com"
                  className="text-white text-2xl md:text-3xl lg:text-[2rem] font-normal leading-8 tracking-tight hover:text-portfolio-green transition-colors"
                >
                  hello@wilsonbrock.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-portfolio-dark-text py-6">
        <div className="container mx-auto px-4 md:px-8 lg:px-60">
          <nav className="flex items-center justify-center space-x-6 md:space-x-8">
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
              className="text-white text-base font-normal hover:text-portfolio-green transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
