"use client";

import Image from "next/image";

const Brands = () => {
  return (
    <section id="brands" className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 py-12 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 md:py-16 lg:py-20">
      {/* Background decorative elements */}
      <div className="absolute right-0 top-0 -z-0 animate-float-slow opacity-10">
        <div className="h-96 w-96 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 -z-0 animate-float-slow-reverse opacity-10">
        <div className="h-96 w-96 rounded-full bg-gradient-to-br from-yellow-400 to-amber-400 blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Title */}
        <div className="mb-8 text-center animate-fade-in-down md:mb-10">
          <h2 className="mb-4 text-xl font-extrabold leading-tight text-black dark:text-white sm:text-2xl md:text-3xl">
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
              Tính năng chuyên sâu của Blue Edu
            </span>
          </h2>
        </div>

        {/* Image Container - Responsive for desktop and mobile */}
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-6xl mx-auto px-4">
            <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] md:aspect-[16/10] lg:aspect-[16/9] overflow-hidden rounded-lg shadow-2xl transition-all duration-500 hover:shadow-primary/20 dark:shadow-gray-800">
              <Image
                src="/images/all/tinhnang.png"
                alt="Tính năng chuyên sâu của Blue Edu"
                fill
                className="object-contain object-center"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1152px"
              />

              {/* Animated Overlay for Branch Effects */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Top-Left Branch - Blue (Quản lý lớp học) */}
                <div className="absolute left-[8%] top-[12%] sm:left-[10%] sm:top-[15%] md:left-[12%] md:top-[18%]">
                  {/* Connection Line Animation */}
                  <svg className="absolute left-[60%] top-[70%] w-[25%] h-[15%] opacity-60" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path
                      d="M 0 0 Q 50 30 100 100"
                      stroke="url(#gradient-blue-1)"
                      strokeWidth="2"
                      fill="none"
                      className="animate-draw-line"
                    />
                    <defs>
                      <linearGradient id="gradient-blue-1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4A6CF7" stopOpacity="0" />
                        <stop offset="50%" stopColor="#4A6CF7" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#4A6CF7" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* Glow Point */}
                  <div className="absolute left-[60%] top-[70%] w-3 h-3 bg-primary rounded-full animate-pulse-blue shadow-lg shadow-primary/50"></div>
                  {/* Floating Particles */}
                  <div className="absolute left-[45%] top-[50%] w-1.5 h-1.5 bg-primary/60 rounded-full animate-float-delayed"></div>
                  <div className="absolute left-[75%] top-[80%] w-1 h-1 bg-primary/40 rounded-full animate-float-delayed-2"></div>
                </div>

                {/* Top-Right Branch - Blue (Giao bài - Chấm bài) */}
                <div className="absolute right-[8%] top-[12%] sm:right-[10%] sm:top-[15%] md:right-[12%] md:top-[18%]">
                  {/* Connection Line Animation */}
                  <svg className="absolute right-[60%] top-[70%] w-[25%] h-[15%] opacity-60" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path
                      d="M 100 0 Q 50 30 0 100"
                      stroke="url(#gradient-blue-2)"
                      strokeWidth="2"
                      fill="none"
                      className="animate-draw-line"
                      style={{ animationDelay: '0.3s' }}
                    />
                    <defs>
                      <linearGradient id="gradient-blue-2" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#4A6CF7" stopOpacity="0" />
                        <stop offset="50%" stopColor="#4A6CF7" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#4A6CF7" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* Glow Point */}
                  <div className="absolute right-[60%] top-[70%] w-3 h-3 bg-primary rounded-full animate-pulse-blue shadow-lg shadow-primary/50" style={{ animationDelay: '0.3s' }}></div>
                  {/* Floating Particles */}
                  <div className="absolute right-[45%] top-[50%] w-1.5 h-1.5 bg-primary/60 rounded-full animate-float-delayed" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute right-[75%] top-[80%] w-1 h-1 bg-primary/40 rounded-full animate-float-delayed-2" style={{ animationDelay: '0.7s' }}></div>
                </div>

                {/* Bottom-Left Branch - Yellow (Báo cáo học sinh) */}
                <div className="absolute left-[8%] bottom-[20%] sm:left-[10%] sm:bottom-[22%] md:left-[12%] md:bottom-[25%]">
                  {/* Connection Line Animation */}
                  <svg className="absolute left-[60%] bottom-[70%] w-[25%] h-[15%] opacity-60" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path
                      d="M 0 100 Q 50 70 100 0"
                      stroke="url(#gradient-yellow-1)"
                      strokeWidth="2"
                      fill="none"
                      className="animate-draw-line"
                      style={{ animationDelay: '0.6s' }}
                    />
                    <defs>
                      <linearGradient id="gradient-yellow-1" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FBBF24" stopOpacity="0" />
                        <stop offset="50%" stopColor="#FBBF24" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#FBBF24" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* Glow Point */}
                  <div className="absolute left-[60%] bottom-[70%] w-3 h-3 bg-yellow-400 rounded-full animate-pulse-yellow shadow-lg shadow-yellow-400/50" style={{ animationDelay: '0.6s' }}></div>
                  {/* Floating Particles */}
                  <div className="absolute left-[45%] bottom-[50%] w-1.5 h-1.5 bg-yellow-400/60 rounded-full animate-float-delayed" style={{ animationDelay: '0.8s' }}></div>
                  <div className="absolute left-[75%] bottom-[80%] w-1 h-1 bg-yellow-400/40 rounded-full animate-float-delayed-2" style={{ animationDelay: '1s' }}></div>
                </div>

                {/* Bottom-Right Branch - Yellow (Kho tài nguyên giáo viên) */}
                <div className="absolute right-[8%] bottom-[20%] sm:right-[10%] sm:bottom-[22%] md:right-[12%] md:bottom-[25%]">
                  {/* Connection Line Animation */}
                  <svg className="absolute right-[60%] bottom-[70%] w-[25%] h-[15%] opacity-60" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path
                      d="M 100 100 Q 50 70 0 0"
                      stroke="url(#gradient-yellow-2)"
                      strokeWidth="2"
                      fill="none"
                      className="animate-draw-line"
                      style={{ animationDelay: '0.9s' }}
                    />
                    <defs>
                      <linearGradient id="gradient-yellow-2" x1="100%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#FBBF24" stopOpacity="0" />
                        <stop offset="50%" stopColor="#FBBF24" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#FBBF24" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* Glow Point */}
                  <div className="absolute right-[60%] bottom-[70%] w-3 h-3 bg-yellow-400 rounded-full animate-pulse-yellow shadow-lg shadow-yellow-400/50" style={{ animationDelay: '0.9s' }}></div>
                  {/* Floating Particles */}
                  <div className="absolute right-[45%] bottom-[50%] w-1.5 h-1.5 bg-yellow-400/60 rounded-full animate-float-delayed" style={{ animationDelay: '1.1s' }}></div>
                  <div className="absolute right-[75%] bottom-[80%] w-1 h-1 bg-yellow-400/40 rounded-full animate-float-delayed-2" style={{ animationDelay: '1.3s' }}></div>
                </div>

                {/* Bottom Center Branch - Blue (Hệ sinh thái Blue Rise) */}
                <div className="absolute left-1/2 bottom-[8%] sm:bottom-[10%] md:bottom-[12%] transform -translate-x-1/2">
                  {/* Connection Line Animation - Vertical */}
                  <svg className="absolute left-1/2 bottom-[60%] w-[2%] h-[20%] opacity-60 transform -translate-x-1/2" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path
                      d="M 50 100 L 50 0"
                      stroke="url(#gradient-blue-3)"
                      strokeWidth="2"
                      fill="none"
                      className="animate-draw-line"
                      style={{ animationDelay: '1.2s' }}
                    />
                    <defs>
                      <linearGradient id="gradient-blue-3" x1="50%" y1="100%" x2="50%" y2="0%">
                        <stop offset="0%" stopColor="#4A6CF7" stopOpacity="0" />
                        <stop offset="50%" stopColor="#4A6CF7" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#4A6CF7" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* Glow Point */}
                  <div className="absolute left-1/2 bottom-[60%] w-3 h-3 bg-primary rounded-full animate-pulse-blue shadow-lg shadow-primary/50 transform -translate-x-1/2" style={{ animationDelay: '1.2s' }}></div>
                  {/* Floating Particles */}
                  <div className="absolute left-[45%] bottom-[50%] w-1.5 h-1.5 bg-primary/60 rounded-full animate-float-delayed" style={{ animationDelay: '1.4s' }}></div>
                  <div className="absolute left-[55%] bottom-[70%] w-1 h-1 bg-primary/40 rounded-full animate-float-delayed-2" style={{ animationDelay: '1.6s' }}></div>
                </div>

                {/* Central Circle Glow Effect */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-primary/20 rounded-full animate-ping"></div>
                  <div className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-primary/10 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animations to global CSS or use inline styles */}
      <style jsx>{`
        @keyframes draw-line {
          0% {
            stroke-dasharray: 0, 1000;
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dasharray: 1000, 1000;
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dasharray: 1000, 1000;
            stroke-dashoffset: -1000;
          }
        }
        
        @keyframes pulse-blue {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(74, 108, 247, 0.7);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
            box-shadow: 0 0 0 8px rgba(74, 108, 247, 0);
          }
        }
        
        @keyframes pulse-yellow {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(251, 191, 36, 0.7);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
            box-shadow: 0 0 0 8px rgba(251, 191, 36, 0);
          }
        }
        
        .animate-draw-line {
          animation: draw-line 3s ease-in-out infinite;
        }
        
        .animate-pulse-blue {
          animation: pulse-blue 2s ease-in-out infinite;
        }
        
        .animate-pulse-yellow {
          animation: pulse-yellow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Brands;


