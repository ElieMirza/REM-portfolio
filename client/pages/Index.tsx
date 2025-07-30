import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-portfolio-dark text-white font-inter">
      {/* Navigation Header */}
      <header className="relative z-10">
        <div className="container mx-auto px-4 md:px-8 lg:px-60">
          <nav className="flex items-center justify-between py-4 h-[70px]">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="/images/logo-header.png"
                alt="Rita Moussalli Logo"
                className="h-8 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-portfolio-green text-base font-normal">
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
            </div>

            {/* Contact Button */}
            <div className="hidden lg:block">
              <button className="px-5 py-0.5 border border-white/80 rounded-full bg-portfolio-dark text-white text-md font-normal hover:bg-white hover:text-portfolio-dark transition-colors">
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
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative min-h-screen">
        <div className="relative min-h-[calc(100vh-70px)] flex flex-col justify-start pt-16 lg:pt-20 space-y-12 lg:space-y-16">
          {/* Availability Status - Screen Centered */}
          <div className="flex items-center justify-center">
            <div className="flex items-center px-4 py-1 border-[0.5px] border-white rounded-full">
              <div className="w-3 h-3 bg-portfolio-green rounded-full mr-3 flex-shrink-0"></div>
              <span className="text-white text-base font-montserrat italic uppercase tracking-wide">
                Available for Work
              </span>
            </div>
          </div>

          {/* Main Heading - Screen Centered */}
          <div className="flex items-center justify-center">
            <h1 className="text-white font-normal uppercase leading-[0.9] tracking-[-0.04em]">
              <div className="text-6xl md:text-8xl lg:text-[12.5rem] xl:text-[12.5rem]">
                <span className="font-montserrat">R</span>
                <span className="font-pacifico lowercase">ita.</span>
              </div>
            </h1>
          </div>

          {/* Description - Left Aligned */}
          <div className="container mx-auto px-4 md:px-8 lg:px-60">
            <div className="max-w-md">
              <p className="text-white text-base font-normal leading-relaxed">
                I blend artistry with cutting-edge technology to deliver
                websites that not only look stunning but also drive results.
              </p>
            </div>
          </div>

          {/* CTA Button - Left Aligned */}
          <div className="container mx-auto px-4 md:px-8 lg:px-60">
            <div className="flex justify-start">
              <button className="flex items-center px-4 py-2 bg-portfolio-green rounded-full text-portfolio-dark-text text-base font-normal hover:bg-portfolio-green/90 transition-colors">
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z" fill="#366560"/>
                </svg>
                Schedule a consultation
              </button>
            </div>
          </div>
        </div>

        {/* Right Content - Portrait */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 lg:flex items-end justify-end hidden lg:block">
          <div className="relative mx-auto lg:mx-0 max-w-md lg:max-w-3xl">
            <img
              src="/images/hero-image.png"
              alt="Rita Moussalli Portrait"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </main>

      {/* Why Work with Me Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-60">
          {/* Section Header */}
          <div className="mb-12 lg:mb-16">
            {/* Why Choose Me Indicator */}
            <div className="flex items-center mb-6">
              <div className="flex items-center px-4 py-2 border-[0.5px] border-portfolio-dark rounded-full">
                <div className="w-3 h-3 bg-portfolio-green rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-portfolio-dark text-base font-montserrat italic uppercase tracking-wide">
                  Why Choose me
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h2 className="text-portfolio-dark text-5xl md:text-6xl lg:text-[5rem] font-normal leading-tight tracking-tight">
              Why <span className="font-pacifico">Work</span> with Me
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-6 lg:gap-8">
            {/* Tailored Design Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-6">
                <div className="w-10 h-10 bg-portfolio-dark rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_12_1073)">
                      <path
                        d="M7.78125 0H3.51562C1.57711 0 0 1.57711 0 3.51562V7.78125C0 9.71977 1.57711 11.2969 3.51562 11.2969H7.78125C9.71977 11.2969 11.2969 9.71977 11.2969 7.78125V3.51562C11.2969 1.57711 9.71977 0 7.78125 0Z"
                        fill="#82FF1F"
                      />
                      <path
                        d="M20.4844 12.7031H16.2188C14.2802 12.7031 12.7031 14.2802 12.7031 16.2188V20.4844C12.7031 22.4229 14.2802 24 16.2188 24H20.4844C22.4229 24 24 22.4229 24 20.4844V16.2188C24 14.2802 22.4229 12.7031 20.4844 12.7031Z"
                        fill="#82FF1F"
                      />
                      <path
                        d="M20.4844 0H16.2188C14.2802 0 12.7031 1.57711 12.7031 3.51562V7.78125C12.7031 10.4952 10.4952 12.7031 7.78125 12.7031H3.51562C1.57711 12.7031 0 14.2802 0 16.2188V20.4844C0 22.4229 1.57711 24 3.51562 24H7.78125C9.71977 24 11.2969 22.4229 11.2969 20.4844V16.2188C11.2969 13.5048 13.5048 11.2969 16.2188 11.2969H20.4844C22.4229 11.2969 24 9.71977 24 7.78125V3.51562C24 1.57711 22.4229 0 20.4844 0Z"
                        fill="#82FF1F"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_12_1073">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <h3 className="text-portfolio-dark-text text-2xl font-normal leading-6 mb-2">
                    Tailored Design
                  </h3>
                  <p className="text-portfolio-dark-text text-base font-normal leading-relaxed">
                    I believe that every brand is unique and deserves a website
                    that is just as distinctive.
                  </p>
                </div>
              </div>
            </div>

            {/* User-Centric Approach Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-6">
                <div className="w-10 h-10 bg-portfolio-dark rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 546 546"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_12_1102)">
                      <path
                        d="M90.9986 182.002C40.7609 182.002 0 141.257 0 90.9986C0 40.74 40.7609 0 90.9986 0C141.252 0 181.997 40.7453 181.997 90.9986C181.997 141.252 222.748 182.002 273.001 182.002C323.254 182.002 364 141.257 364 91.0038C364 40.7505 404.75 0 455.003 0C505.257 0 546.002 40.7453 546.002 90.9986C546.002 141.252 505.257 181.997 455.003 181.997C304.212 181.997 182.002 304.259 182.002 454.993C182.002 505.22 141.257 545.992 91.0038 545.992C40.7505 545.992 0 505.257 0 455.003C0 404.75 40.7453 364 90.9986 364C141.252 364 181.987 323.254 181.987 273.001C181.987 222.748 141.257 182.002 90.9986 182.002Z"
                        fill="#82FF1F"
                      />
                      <path
                        d="M250.251 398.122C250.251 316.407 316.444 250.246 398.132 250.246C479.82 250.251 546.002 316.407 546.002 398.122C546.002 479.8 479.82 546.002 398.122 546.002C316.433 546.002 250.251 479.8 250.251 398.122Z"
                        fill="#82FF1F"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_12_1102">
                        <rect width="546" height="546" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <h3 className="text-portfolio-dark-text text-2xl font-normal leading-6 mb-2">
                    User-Centric Approach
                  </h3>
                  <p className="text-portfolio-dark-text text-base font-normal leading-relaxed">
                    With a strong focus on user experience, I design websites
                    that are intuitive and easy to navigate.
                  </p>
                </div>
              </div>
            </div>

            {/* Trending Technologies Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-6">
                <div className="w-10 h-10 bg-portfolio-dark rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 512 512"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M48.896 318.805C48.2986 321.024 48.5546 323.328 49.7493 325.291L92.8426 399.957C95.232 404.053 100.437 405.419 104.533 403.115L204.373 345.429V460.8C204.373 465.493 208.213 469.333 212.907 469.333H299.179C303.872 469.333 307.712 465.493 307.712 460.8V345.429L407.552 403.115C409.515 404.224 411.904 404.565 414.037 403.968C416.256 403.371 418.133 401.92 419.243 399.957L462.336 325.291C464.725 321.195 463.275 315.989 459.264 313.685L359.339 256L459.264 198.315C461.141 197.205 462.592 195.328 463.189 193.109C463.787 190.976 463.445 188.587 462.336 186.624L419.243 111.957C416.853 107.861 411.648 106.496 407.552 108.885L307.712 166.485V51.2C307.712 46.5066 303.872 42.6666 299.179 42.6666H212.907C208.213 42.6666 204.373 46.5066 204.373 51.2V166.485L104.533 108.885C100.437 106.496 95.232 107.861 92.8426 111.957L49.7493 186.624C48.5546 188.587 48.2986 190.976 48.896 193.109C49.4933 195.328 50.8586 197.205 52.8213 198.315L152.747 256L52.8213 313.685C50.8586 314.795 49.4933 316.672 48.896 318.805Z"
                      fill="#82FF1F"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-portfolio-dark-text text-2xl font-normal leading-6 mb-2">
                    Trending Technologies
                  </h3>
                  <p className="text-portfolio-dark-text text-base font-normal leading-relaxed">
                    I stay at the forefront of web design trends and technologies
                    to offer you the most innovative solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="bg-portfolio-dark py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-60">
          {/* Section Header */}
          <div className="mb-12 lg:mb-16">
            {/* Selected Work Indicator */}
            <div className="flex items-center mb-6">
              <div className="flex items-center px-4 py-2 border-[0.5px] border-white rounded-full">
                <div className="w-3 h-3 bg-portfolio-green rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-white text-base font-montserrat italic uppercase tracking-wide">
                  Selected Work 2022-2023
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h2 className="text-white text-5xl md:text-6xl lg:text-[5rem] font-normal leading-tight tracking-tight max-w-4xl">
              <span className="font-pacifico">Elevating</span> <span className="font-montserrat">Brands with Design Brilliance</span>
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {/* Project 1 */}
            <div className="group cursor-pointer">
              <div className="border border-portfolio-gray-border rounded-3xl overflow-hidden bg-transparent hover:bg-white/5 transition-colors">
                {/* Project Header */}
                <div className="p-6 lg:p-8 flex items-center justify-between">
                  <div className="flex items-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-4"
                    >
                      <g clipPath="url(#clip0_12_1120)">
                        <path
                          d="M13.125 10L16.875 13.75L13.125 17.5"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.625 2.5V13.75H16.875"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_12_1120">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <h3 className="text-white text-lg font-normal leading-tight tracking-tight">
                      Project Name Here
                    </h3>
                  </div>
                  <span className="text-white text-base font-normal leading-tight tracking-tight">
                    2023
                  </span>
                </div>

                {/* Project Image */}
                <div className="px-2 pb-2">
                  <img
                    src="/images/portfolio-1.svg"
                    alt="Project thumbnail"
                    className="w-full h-64 lg:h-80 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group cursor-pointer">
              <div className="border border-portfolio-gray-border rounded-3xl overflow-hidden bg-transparent hover:bg-white/5 transition-colors">
                {/* Project Header */}
                <div className="p-6 lg:p-8 flex items-center justify-between">
                  <div className="flex items-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-4"
                    >
                      <g clipPath="url(#clip0_12_1128)">
                        <path
                          d="M13.125 10L16.875 13.75L13.125 17.5"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.625 2.5V13.75H16.875"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_12_1128">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <h3 className="text-white text-lg font-normal leading-tight tracking-tight">
                      Project Name Here
                    </h3>
                  </div>
                  <span className="text-white text-base font-normal leading-tight tracking-tight">
                    2023
                  </span>
                </div>

                {/* Project Image */}
                <div className="px-2 pb-2">
                  <img
                    src="/images/portfolio-2.svg"
                    alt="Project thumbnail"
                    className="w-full h-64 lg:h-80 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group cursor-pointer">
              <div className="border border-portfolio-gray-border rounded-3xl overflow-hidden bg-transparent hover:bg-white/5 transition-colors">
                {/* Project Header */}
                <div className="p-6 lg:p-8 flex items-center justify-between">
                  <div className="flex items-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-4"
                    >
                      <g clipPath="url(#clip0_12_1136)">
                        <path
                          d="M13.125 10L16.875 13.75L13.125 17.5"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.625 2.5V13.75H16.875"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_12_1136">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <h3 className="text-white text-lg font-normal leading-tight tracking-tight">
                      Project Name Here
                    </h3>
                  </div>
                  <span className="text-white text-base font-normal leading-tight tracking-tight">
                    2023
                  </span>
                </div>

                {/* Project Image */}
                <div className="px-2 pb-2">
                  <img
                    src="/images/portfolio-3.svg"
                    alt="Project thumbnail"
                    className="w-full h-64 lg:h-80 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="group cursor-pointer">
              <div className="border border-portfolio-gray-border rounded-3xl overflow-hidden bg-transparent hover:bg-white/5 transition-colors">
                {/* Project Header */}
                <div className="p-6 lg:p-8 flex items-center justify-between">
                  <div className="flex items-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-4"
                    >
                      <g clipPath="url(#clip0_12_1144)">
                        <path
                          d="M13.125 10L16.875 13.75L13.125 17.5"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.625 2.5V13.75H16.875"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_12_1144">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <h3 className="text-white text-lg font-normal leading-tight tracking-tight">
                      Project Name Here
                    </h3>
                  </div>
                  <span className="text-white text-base font-normal leading-tight tracking-tight">
                    2023
                  </span>
                </div>

                {/* Project Image */}
                <div className="px-2 pb-2">
                  <img
                    src="/images/portfolio-4.svg"
                    alt="Project thumbnail"
                    className="w-full h-64 lg:h-80 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Browse All Work Button */}
          <div className="flex justify-center">
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-3 bg-portfolio-green rounded-full text-portfolio-dark-text text-base font-normal hover:bg-portfolio-green/90 transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-3"
              >
                <g clipPath="url(#clip0_12_1152)">
                  <path
                    d="M10.5 8L13.5 11L10.5 14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.5 2V11H13.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_12_1152">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Browse all work
            </Link>
          </div>
        </div>
      </section>

      {/* My Creative Workflow Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-60">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Process Indicator */}
              <div className="flex items-center">
                <div className="flex items-center px-4 py-2 border-[0.5px] border-portfolio-dark rounded-full">
                  <div className="w-3 h-3 bg-portfolio-green rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-portfolio-dark text-base font-montserrat italic uppercase tracking-wide">
                    my Process
                  </span>
                </div>
              </div>

              {/* Main Heading */}
              <h2 className="text-portfolio-dark text-5xl md:text-6xl lg:text-[5rem] font-normal leading-tight tracking-tight max-w-sm">
                My Creative Workflow
              </h2>

              {/* CTA Button */}
              <div>
                <button className="inline-flex items-center px-8 py-3 bg-portfolio-green rounded-full text-portfolio-dark-text text-base font-normal hover:bg-portfolio-green/90 transition-colors">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-3"
                  >
                    <g clipPath="url(#clip0_12_1164)">
                      <path
                        d="M10.5 8L13.5 11L10.5 14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.5 2V11H13.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_12_1164">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Schedule a consultation
                </button>
              </div>
            </div>

            {/* Right Content - Process Steps */}
            <div className="space-y-0">
              {/* Step 1 - Discovery */}
              <div className="border-b border-portfolio-gray-border pb-8 mb-8">
                <h3 className="text-portfolio-dark-text text-2xl lg:text-[2rem] font-normal leading-tight tracking-tight mb-4">
                  1. Discovery
                </h3>
                <p className="text-portfolio-dark-text text-base font-normal leading-relaxed">
                  I dive deep into understanding your brand, goals, and target
                  audience. Through detailed consultations and research, I
                  gather essential insights that inform the entire design
                  process.
                </p>
              </div>

              {/* Step 2 - Design */}
              <div className="border-b border-portfolio-gray-border pb-8 mb-8">
                <h3 className="text-portfolio-dark-text text-2xl lg:text-[2rem] font-normal leading-tight tracking-tight mb-4">
                  2. Design
                </h3>
                <p className="text-portfolio-dark-text text-base font-normal leading-relaxed">
                  I begin crafting visually compelling and strategic designs.
                  This step focuses on translating ideas into tangible visual
                  concepts that align with your brand.
                </p>
              </div>

              {/* Step 3 - Development */}
              <div className="border-b border-portfolio-gray-border pb-8 mb-8">
                <h3 className="text-portfolio-dark-text text-2xl lg:text-[2rem] font-normal leading-tight tracking-tight mb-4">
                  3. Development
                </h3>
                <p className="text-portfolio-dark-text text-base font-normal leading-relaxed">
                  I transform the visuals into a fully functional website. This
                  phase involves meticulous coding and integration to ensure
                  your site is responsive and performs seamlessly across
                  devices.
                </p>
              </div>

              {/* Step 4 - Launch */}
              <div className="border-b border-portfolio-gray-border pb-8">
                <h3 className="text-portfolio-dark-text text-2xl lg:text-[2rem] font-normal leading-tight tracking-tight mb-4">
                  4. Launch
                </h3>
                <p className="text-portfolio-dark-text text-base font-normal leading-relaxed">
                  I rigorously test the website to ensure everything functions
                  flawlessly before going live. Post-launch, I provide support
                  and guidance to help you maximize your new online presence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Offer Section */}
      <section className="bg-portfolio-dark py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-60">
          {/* Section Header */}
          <div className="mb-12 lg:mb-16">
            {/* What I Offer Indicator */}
            <div className="flex items-center mb-6">
              <div className="flex items-center px-4 py-2 border-[0.5px] border-white rounded-full">
                <div className="w-3 h-3 bg-portfolio-green rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-white text-base font-montserrat italic uppercase tracking-wide">
                  What I Offer
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h2 className="text-white text-5xl md:text-6xl lg:text-[5rem] font-normal leading-tight tracking-tight max-w-4xl">
              Empowering Brands Through Design
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Web Design Service */}
            <div className="bg-portfolio-green rounded-3xl p-8">
              <div className="mb-8">
                <svg
                  width="125"
                  height="62"
                  viewBox="0 0 125 62"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-6"
                >
                  <g clipPath="url(#clip0_12_1188)">
                    <mask
                      id="mask0_12_1188"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="125"
                      height="62"
                    >
                      <path d="M124.5 0H0.5V62H124.5V0Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_12_1188)">
                      <path
                        d="M62.5 31C62.5 48.0863 48.6488 61.9375 31.5625 61.9375C14.4762 61.9375 0.625 48.0863 0.625 31C0.625 13.9137 14.4762 0.0625 31.5625 0.0625C48.6488 0.0625 62.5 13.9137 62.5 31ZM62.5 61.9375C79.5863 61.9375 93.4375 48.0863 93.4375 31C93.4375 13.9137 79.5863 0.0625 62.5 0.0625V61.9375ZM93.4375 61.9375C110.524 61.9375 124.375 48.0863 124.375 31C124.375 13.9137 110.524 0.0625 93.4375 0.0625V61.9375Z"
                        fill="url(#paint0_linear_12_1188)"
                      />
                    </g>
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_12_1188"
                      x1="0.625"
                      y1="31"
                      x2="124.375"
                      y2="31"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#A4FF50" />
                      <stop offset="1" stopColor="#E3FFC4" />
                    </linearGradient>
                    <clipPath id="clip0_12_1188">
                      <rect width="125" height="62" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <h3 className="text-portfolio-dark-text text-2xl lg:text-[2rem] font-normal mb-4">
                  Web Design
                </h3>

                <p className="text-portfolio-dark-text text-base font-normal leading-relaxed mb-6">
                  Creating visually stunning and user-friendly websites is at
                  the heart of what I do.
                </p>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  <div className="border-b border-gray-600 pb-4">
                    <span className="text-portfolio-dark-text text-base font-normal">
                      Custom Tailored Design
                    </span>
                  </div>
                  <div className="border-b border-gray-600 pb-4">
                    <span className="text-portfolio-dark-text text-base font-normal">
                      Responsive Layouts
                    </span>
                  </div>
                  <div className="pb-4">
                    <span className="text-portfolio-dark-text text-base font-normal">
                      Custom Tailored Design
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="inline-flex items-center px-8 py-3 bg-green-200 rounded-full text-portfolio-dark-text text-base font-normal hover:bg-green-300 transition-colors">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-3"
                  >
                    <g clipPath="url(#clip0_12_1202)">
                      <path
                        d="M10.5 8L13.5 11L10.5 14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.5 2V11H13.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_12_1202">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Schedule a consultation
                </button>
              </div>
            </div>

            {/* Development Service */}
            <div className="bg-gray-900 rounded-3xl p-8">
              <div className="mb-8">
                <svg
                  width="63"
                  height="62"
                  viewBox="0 0 63 62"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-6"
                >
                  <g clipPath="url(#clip0_12_1208)">
                    <path
                      d="M0.5 31C0.5 13.8788 14.3788 0 31.5 0C31.5 0 31.5 31 0.5 31ZM0.5 31C0.5 48.1212 14.3788 62 31.5 62C31.5 62 31.5 31 0.5 31ZM31.5 62C48.6206 62 62.5 48.1212 62.5 31C31.5 31 31.5 62 31.5 62ZM62.5 31C62.5 13.8788 48.6206 0 31.5 0C31.5 0 31.5 31 62.5 31Z"
                      fill="url(#paint0_linear_12_1208)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_12_1208"
                      x1="31.5"
                      y1="0"
                      x2="31.5"
                      y2="62"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F8F8F8" stopOpacity="0.8" />
                      <stop offset="1" stopColor="#D1D1D1" stopOpacity="0.2" />
                    </linearGradient>
                    <clipPath id="clip0_12_1208">
                      <rect width="63" height="62" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <h3 className="text-white text-2xl lg:text-[2rem] font-normal mb-4 tracking-tight">
                  Development
                </h3>

                <p className="text-white text-base font-normal leading-relaxed mb-6">
                  I bring your designs to life with clean, efficient, and
                  high-performing code.
                </p>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  <div className="border-b border-portfolio-gray-border pb-4">
                    <span className="text-white text-base font-normal">
                      HTML, CSS, & JS Expertise
                    </span>
                  </div>
                  <div className="border-b border-portfolio-gray-border pb-4">
                    <span className="text-white text-base font-normal">
                      Cross-Browser Compatibility
                    </span>
                  </div>
                  <div className="pb-4">
                    <span className="text-white text-base font-normal">
                      Faster Load Times
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="inline-flex items-center px-8 py-3 bg-portfolio-green rounded-full text-portfolio-dark-text text-base font-normal hover:bg-portfolio-green/90 transition-colors">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-3"
                  >
                    <g clipPath="url(#clip0_12_1218)">
                      <path
                        d="M10.5 8L13.5 11L10.5 14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.5 2V11H13.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_12_1218">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Schedule a consultation
                </button>
              </div>
            </div>

            {/* Brand Identity Service */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <div className="mb-8">
                <svg
                  width="63"
                  height="62"
                  viewBox="0 0 63 62"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-6"
                >
                  <g clipPath="url(#clip0_12_1224)">
                    <mask
                      id="mask0_12_1224"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="63"
                      height="62"
                    >
                      <path d="M62.5 0H0.5V62H62.5V0Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_12_1224)">
                      <path
                        d="M9.66741 19.1937C9.31866 19.1322 8.96325 19.1011 8.6111 19.1011C5.67009 19.1011 3.16453 21.2056 2.65327 24.1051L0.592609 35.792C0.0128094 39.0798 2.21612 42.2263 5.50395 42.8061C5.8527 42.8676 6.20811 42.8988 6.56025 42.8988C9.50103 42.8988 12.0068 40.7941 12.5181 37.8948L14.5789 26.2079C15.1584 22.9199 12.9552 19.7735 9.66741 19.1937Z"
                        fill="url(#paint0_linear_12_1224)"
                      />
                      <path
                        d="M26.5569 13.8275C26.2082 13.766 25.8527 13.7349 25.5006 13.7349C22.5597 13.7349 20.054 15.8394 19.5429 18.7388L15.5896 41.1587C15.3088 42.7513 15.6651 44.3581 16.5927 45.6829C17.5203 47.0076 18.9084 47.8919 20.501 48.1729C20.8497 48.2344 21.2051 48.2655 21.5573 48.2655C24.4982 48.2655 27.0039 46.1609 27.5151 43.2615L31.4684 20.8416C32.048 17.5537 29.8447 14.4073 26.5569 13.8275Z"
                        fill="url(#paint1_linear_12_1224)"
                      />
                      <path
                        d="M47.3539 10.0563C46.4262 8.73156 45.0382 7.84733 43.4457 7.56639C43.0969 7.50488 42.7413 7.47363 42.3891 7.47363C39.4483 7.47363 36.9427 9.57813 36.4315 12.4777L30.2703 47.4192C29.9895 49.0119 30.3458 50.6187 31.2733 51.9434C32.201 53.2681 33.589 54.1524 35.1815 54.4334C35.5303 54.4949 35.8857 54.5261 36.2381 54.5261C39.1791 54.5261 41.6845 52.4215 42.1958 49.522L48.3569 14.5805C48.6378 12.9879 48.2816 11.3811 47.3539 10.0563Z"
                        fill="url(#paint2_linear_12_1224)"
                      />
                      <path
                        d="M57.4957 19.1937C57.1469 19.1322 56.7915 19.1011 56.4394 19.1011C53.4983 19.1011 50.9928 21.2056 50.4815 24.1051L48.4207 35.792C47.8409 39.0798 50.0442 42.2263 53.3321 42.8061C53.6808 42.8676 54.0362 42.8988 54.3884 42.8988C57.3292 42.8988 59.835 40.7941 60.3462 37.8948L62.407 26.2079C62.9868 22.9199 60.7836 19.7735 57.4957 19.1937Z"
                        fill="url(#paint3_linear_12_1224)"
                      />
                    </g>
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_12_1224"
                      x1="7.58571"
                      y1="19.1011"
                      x2="7.58571"
                      y2="42.8988"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#B0B0B0" />
                      <stop offset="1" stopColor="#D1D1D1" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_12_1224"
                      x1="23.5285"
                      y1="13.7349"
                      x2="23.5285"
                      y2="48.2655"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#B0B0B0" />
                      <stop offset="1" stopColor="#D1D1D1" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_12_1224"
                      x1="39.3136"
                      y1="7.47363"
                      x2="39.3136"
                      y2="54.5261"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#B0B0B0" />
                      <stop offset="1" stopColor="#D1D1D1" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_12_1224"
                      x1="55.4139"
                      y1="19.1011"
                      x2="55.4139"
                      y2="42.8988"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#B0B0B0" />
                      <stop offset="1" stopColor="#D1D1D1" stopOpacity="0.8" />
                    </linearGradient>
                    <clipPath id="clip0_12_1224">
                      <rect width="63" height="62" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <h3 className="text-portfolio-dark-text text-2xl lg:text-[2rem] font-normal mb-4 tracking-tight">
                  Brand Identity
                </h3>

                <p className="text-portfolio-dark-text text-base font-normal leading-relaxed mb-6">
                  Building a strong brand identity is essential for standing out
                  in a crowded market.
                </p>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  <div className="border-b border-gray-600 pb-4">
                    <span className="text-portfolio-dark-text text-base font-normal">
                      Logo Design
                    </span>
                  </div>
                  <div className="border-b border-gray-600 pb-4">
                    <span className="text-portfolio-dark-text text-base font-normal">
                      Cohesive Color Palettes
                    </span>
                  </div>
                  <div className="pb-4">
                    <span className="text-portfolio-dark-text text-base font-normal">
                      Brand Guidelines
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="inline-flex items-center px-8 py-3 bg-portfolio-green rounded-full text-portfolio-dark-text text-base font-normal hover:bg-portfolio-green/90 transition-colors">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-3"
                  >
                    <g clipPath="url(#clip0_12_1241)">
                      <path
                        d="M10.5 8L13.5 11L10.5 14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.5 2V11H13.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_12_1241">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Schedule a consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-60">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Content - Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src="/images/about-hero.svg"
                                      alt="Rita Moussalli"
                  className="w-full h-auto object-cover rounded-3xl max-w-md mx-auto lg:mx-0"
                />
              </div>
            </div>

            {/* Right Content - Text and Social */}
            <div className="order-1 lg:order-2 space-y-8">
              {/* About Me Indicator */}
              <div className="flex items-center justify-center lg:justify-start">
                <div className="flex items-center px-4 py-2 border-[0.5px] border-portfolio-dark rounded-full">
                  <div className="w-3 h-3 bg-portfolio-green rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-portfolio-dark text-base font-montserrat italic uppercase tracking-wide">
                    About Me
                  </span>
                </div>
              </div>

              {/* Main Heading */}
              <div className="text-center lg:text-left">
                <h2 className="text-portfolio-dark text-5xl md:text-6xl lg:text-[5rem] font-normal leading-tight tracking-tight">
                  Discover My Design Journey
                </h2>
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
                    <g clipPath="url(#clip0_about_dribbble)">
                      <path
                        d="M12 0.375C5.58994 0.375 0.375 5.58994 0.375 12C0.375 18.4101 5.58994 23.625 12 23.625C18.4101 23.625 23.625 18.4101 23.625 12C23.625 5.58994 18.4101 0.375 12 0.375ZM19.6861 5.73591C21.069 7.42556 21.9065 9.57764 21.9284 11.9213C21.601 11.8521 18.3181 11.1862 15.0142 11.6017C14.7446 10.9435 14.4901 10.3645 14.1415 9.65105C17.8128 8.15213 19.4767 6.01908 19.6861 5.73591ZM18.5822 4.58766C18.4036 4.84205 16.9089 6.85106 13.3781 8.17448C11.751 5.18498 9.94758 2.72911 9.67313 2.36161C12.822 1.60256 16.1403 2.42114 18.5822 4.58766ZM7.77848 3.02906C8.04028 3.38808 9.81464 5.847 11.4599 8.77167C6.8152 10.0051 2.72428 9.98733 2.28019 9.98147C2.92406 6.90023 5.00053 4.33936 7.77848 3.02906ZM2.07047 12.0151C2.07047 11.9136 2.07248 11.8125 2.07553 11.7117C2.50997 11.7206 7.32178 11.7826 12.2805 10.2986C12.5648 10.8549 12.8363 11.4196 13.0855 11.9837C9.49495 12.9951 6.23269 15.8991 4.62314 18.6543C3.03722 16.894 2.07047 14.5655 2.07047 12.0151ZM5.90517 19.8486C6.94237 17.7283 9.75727 14.9913 13.7604 13.6256C15.1545 17.2483 15.731 20.2844 15.8787 21.1555C12.6859 22.5155 8.84672 22.1424 5.90517 19.8486ZM17.548 20.2465C17.4462 19.6425 16.9177 16.7357 15.619 13.1668C18.7305 12.6687 21.4643 13.4841 21.804 13.5913C21.3614 16.3541 19.7756 18.7402 17.548 20.2465Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_about_dribbble">
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
                    <g clipPath="url(#clip0_about_linkedin)">
                      <path
                        d="M5.20062 21H0.846875V6.97971H5.20062V21ZM3.02141 5.06721C1.62922 5.06721 0.5 3.91408 0.5 2.52189C0.5 1.85318 0.765647 1.21185 1.2385 0.738991C1.71136 0.266136 2.35269 0.000488281 3.02141 0.000488281C3.69012 0.000488281 4.33145 0.266136 4.80431 0.738991C5.27716 1.21185 5.54281 1.85318 5.54281 2.52189C5.54281 3.91408 4.41313 5.06721 3.02141 5.06721ZM21.4953 21H17.1509V14.175C17.1509 12.5485 17.1181 10.4625 14.8873 10.4625C12.6237 10.4625 12.2769 12.2297 12.2769 14.0578V21H7.92781V6.97971H12.1034V8.89221H12.1644C12.7456 7.79064 14.1655 6.62814 16.2838 6.62814C20.69 6.62814 21.5 9.52971 21.5 13.2985V21H21.4953Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_about_linkedin">
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
                    <g clipPath="url(#clip0_about_instagram)">
                      <path
                        d="M11.0047 6.60928C8.02344 6.60928 5.61876 9.01396 5.61876 11.9952C5.61876 14.9765 8.02344 17.3812 11.0047 17.3812C13.9859 17.3812 16.3906 14.9765 16.3906 11.9952C16.3906 9.01396 13.9859 6.60928 11.0047 6.60928ZM11.0047 15.4968C9.07813 15.4968 7.50313 13.9265 7.50313 11.9952C7.50313 10.064 9.07344 8.49365 11.0047 8.49365C12.9359 8.49365 14.5063 10.064 14.5063 11.9952C14.5063 13.9265 12.9313 15.4968 11.0047 15.4968ZM17.8672 6.38896C17.8672 7.0874 17.3047 7.64522 16.6109 7.64522C15.9125 7.64522 15.3547 7.08271 15.3547 6.38896C15.3547 5.69521 15.9172 5.13271 16.6109 5.13271C17.3047 5.13271 17.8672 5.69521 17.8672 6.38896ZM21.4344 7.66397C21.3547 5.98115 20.9703 4.49053 19.7375 3.2624C18.5094 2.03428 17.0188 1.6499 15.3359 1.56553C13.6016 1.46709 8.40313 1.46709 6.66876 1.56553C4.99063 1.64521 3.50001 2.02959 2.26719 3.25771C1.03438 4.48584 0.654694 5.97646 0.570319 7.65928C0.471881 9.39365 0.471881 14.5921 0.570319 16.3265C0.650006 18.0093 1.03438 19.4999 2.26719 20.728C3.50001 21.9562 4.98594 22.3405 6.66876 22.4249C8.40313 22.5233 13.6016 22.5233 15.3359 22.4249C17.0188 22.3452 18.5094 21.9608 19.7375 20.728C20.9656 19.4999 21.35 18.0093 21.4344 16.3265C21.5328 14.5921 21.5328 9.39834 21.4344 7.66397ZM19.1938 18.1874C18.8281 19.1062 18.1203 19.814 17.1969 20.1843C15.8141 20.7327 12.5328 20.6062 11.0047 20.6062C9.47657 20.6062 6.19063 20.728 4.81251 20.1843C3.89376 19.8187 3.18594 19.1108 2.81563 18.1874C2.26719 16.8046 2.39376 13.5233 2.39376 11.9952C2.39376 10.4671 2.27188 7.18115 2.81563 5.80303C3.18126 4.88428 3.88907 4.17646 4.81251 3.80615C6.19532 3.25771 9.47657 3.38428 11.0047 3.38428C12.5328 3.38428 15.8188 3.2624 17.1969 3.80615C18.1156 4.17178 18.8234 4.87959 19.1938 5.80303C19.7422 7.18584 19.6156 10.4671 19.6156 11.9952C19.6156 13.5233 19.7422 16.8093 19.1938 18.1874Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_about_instagram">
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

      {/* Achievements Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-60">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Years of Experience */}
            <div className="text-center md:text-left">
              <div className="border-b border-portfolio-gray-border pb-6 mb-6">
                <h3 className="text-portfolio-dark text-5xl lg:text-[5rem] font-normal leading-tight tracking-tight mb-2">
                  05+
                </h3>
              </div>
              <h4 className="text-portfolio-dark-text text-xl lg:text-2xl font-normal leading-tight tracking-tight mb-2">
                Years of Experience
              </h4>
              <p className="text-portfolio-dark-text text-base font-normal leading-relaxed">
                Decades of experience in delivering exceptional projects.
              </p>
            </div>

            {/* Projects Delivered */}
            <div className="text-center md:text-left">
              <div className="border-b border-portfolio-gray-border pb-6 mb-6">
                <h3 className="text-portfolio-dark text-5xl lg:text-[5rem] font-normal leading-tight tracking-tight mb-2">
                  50+
                </h3>
              </div>
              <h4 className="text-portfolio-dark-text text-xl lg:text-2xl font-normal leading-tight tracking-tight mb-2">
                Projects Delivered
              </h4>
              <p className="text-portfolio-dark-text text-base font-normal leading-relaxed">
                Decades of experience in delivering exceptional projects.
              </p>
            </div>

            {/* Client Satisfaction */}
            <div className="text-center md:text-left">
              <div className="border-b border-portfolio-gray-border pb-6 mb-6">
                <h3 className="text-portfolio-dark text-5xl lg:text-[5rem] font-normal leading-tight tracking-tight mb-2">
                  98%
                </h3>
              </div>
              <h4 className="text-portfolio-dark-text text-xl lg:text-2xl font-normal leading-tight tracking-tight mb-2">
                Client Satisfaction
              </h4>
              <p className="text-portfolio-dark-text text-base font-normal leading-relaxed">
                I build long-term partnerships through proven results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-portfolio-dark py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-60">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Success Stories Card */}
            <div className="border border-portfolio-gray-border rounded-2xl p-8 bg-transparent">
              <div className="mb-8">
                <img
                  src="/images/profile-small.svg"
                  alt="Client Logo"
                  className="h-6 w-auto mb-8"
                />
                <h3 className="text-white text-2xl lg:text-[2rem] font-normal leading-tight tracking-tight mb-16">
                  My Success Stories
                </h3>
              </div>
              <p className="text-white text-base font-normal leading-relaxed">
                I take pride in collaborating with a diverse range of clients,
                from ambitious startups to established enterprises.
              </p>
            </div>

            {/* Testimonial 1 - Jerome Bell */}
            <div className="bg-portfolio-dark-text rounded-2xl p-8">
              <div className="mb-8">
                {/* Star Rating */}
                <div className="flex items-center mb-8">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-1"
                    >
                      <path
                        d="M8.10312 0.556158L6.0625 4.69366L1.49687 5.35928C0.678125 5.47803 0.35 6.48741 0.94375 7.06553L4.24687 10.2843L3.46562 14.8312C3.325 15.653 4.19062 16.2687 4.91562 15.8843L9 13.7374L13.0844 15.8843C13.8094 16.2655 14.675 15.653 14.5344 14.8312L13.7531 10.2843L17.0562 7.06553C17.65 6.48741 17.3219 5.47803 16.5031 5.35928L11.9375 4.69366L9.89688 0.556158C9.53125 -0.181342 8.47187 -0.190717 8.10312 0.556158Z"
                        fill="#82FF1F"
                      />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-white text-lg lg:text-xl font-normal leading-snug tracking-tight mb-16">
                  "Working with Wilson was a game-changer for our online
                  presence. The new website exceeded our expectations in both
                  design and functionality."
                </blockquote>
              </div>

              <div className="border-t border-portfolio-gray-border pt-6">
                <div className="flex items-center">
                  <img
                    src="/images/icon-1.svg"
                    alt="Jerome Bell"
                    className="w-15 h-15 rounded-full mr-4"
                  />
                  <div>
                    <div className="text-white text-base font-normal leading-6">
                      Jerome Bell
                    </div>
                    <div className="text-black text-sm font-normal leading-none">
                      CTO, Waverio
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 - Wade Warren */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="mb-8">
                {/* Star Rating */}
                <div className="flex items-center mb-8">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-1"
                    >
                      <path
                        d="M8.10314 0.556158L6.06251 4.69366L1.49689 5.35928C0.67814 5.47803 0.350015 6.48741 0.943765 7.06553L4.24689 10.2843L3.46564 14.8312C3.32501 15.653 4.19064 16.2687 4.91564 15.8843L9.00002 13.7374L13.0844 15.8843C13.8094 16.2655 14.675 15.653 14.5344 14.8312L13.7531 10.2843L17.0563 7.06553C17.65 6.48741 17.3219 5.47803 16.5031 5.35928L11.9375 4.69366L9.89689 0.556158C9.53127 -0.181342 8.47189 -0.190717 8.10314 0.556158Z"
                        fill="#82FF1F"
                      />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-portfolio-dark-text text-lg lg:text-xl font-normal leading-snug tracking-tight mb-16">
                  "Wilson delivered a stunning website that truly reflects our
                  brand's essence. He continuously involves in feedbacks. Highly
                  recommend his expertise!"
                </blockquote>
              </div>

              <div className="border-t border-portfolio-gray-border pt-6">
                <div className="flex items-center">
                  <img
                    src="/images/icon-2.svg"
                    alt="Wade Warren"
                    className="w-15 h-15 rounded-full mr-4"
                  />
                  <div>
                    <div className="text-portfolio-dark-text text-base font-normal leading-6">
                      Wade Warren
                    </div>
                    <div className="text-gray-700 text-sm font-normal leading-none">
                      Founder, Creaty
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-portfolio-dark-text py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-60">
          <div className="bg-portfolio-dark rounded-2xl py-16 lg:py-20 px-8 lg:px-16 text-center">
            {/* Have Project in Mind Indicator */}
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center px-4 py-2 border-[0.5px] border-white rounded-full">
                <div className="w-3 h-3 bg-portfolio-green rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-white text-base font-montserrat italic uppercase tracking-wide">
                  Have Project in Mind?
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="mb-12">
              <h2 className="text-white text-4xl md:text-6xl lg:text-[5rem] font-normal leading-tight tracking-tight">
                Let's Turn your Ideas
              </h2>
              <h2 className="text-white text-4xl md:text-6xl lg:text-[5rem] font-normal leading-tight tracking-tight">
                into Reality
              </h2>
            </div>

            {/* Email Contact */}
            <div className="inline-block">
              <div className="flex items-center border-b-2 border-portfolio-gray-border pb-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-4"
                >
                  <g clipPath="url(#clip0_contact_arrow)">
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
                  </g>
                  <defs>
                    <clipPath id="clip0_contact_arrow">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <a
                  href="mailto:hello@wilsonbrock.com"
                  className="text-white text-2xl lg:text-[2rem] font-normal leading-8 tracking-tight hover:text-portfolio-green transition-colors"
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
          <nav className="flex items-center justify-center space-x-8">
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
