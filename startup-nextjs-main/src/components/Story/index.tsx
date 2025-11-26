"use client";

import Image from "next/image";

export default function Story() {
  return (
    <>
      <section id="story" className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 py-12 dark:from-gray-dark dark:via-gray-900 dark:to-gray-dark md:py-16 lg:py-20">
        {/* Animated Background Elements */}
        <div className="absolute right-0 top-0 -z-0 animate-float-slow opacity-20">
          <div className="h-96 w-96 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 -z-0 animate-float-slow-reverse opacity-20">
          <div className="h-96 w-96 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 blur-3xl"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 -z-0 opacity-5 dark:opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(rgba(74, 108, 247, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(74, 108, 247, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 -z-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-primary/20 animate-float-delayed"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="container relative z-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
            {/* Content Section */}
            <div className="animate-fade-in-up">
              {/* Title */}
              <div className="mb-8">
                <div className="relative inline-block">
                  {/* Decorative Icons */}


                  <h2 className="relative text-xl font-extrabold leading-tight text-black dark:text-white sm:text-2xl md:text-3xl">
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
                      BlueEdu là gì ?
                    </span>
                    {/* Animated Underline */}
                    <span className="absolute -bottom-3 left-0 h-1.5 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-50">
                      <span className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white to-transparent"></span>
                    </span>
                  </h2>
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-4">
                <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg">
                  BlueEdu được sinh ra từ <span className="font-semibold text-primary">Blue Rise</span> – giải pháp chuyển đổi số giáo dục đang được sử dụng bởi nhiều đơn vị, trường học và trung tâm lớn tại Việt Nam.
                </p>

                <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg">
                  Chúng tôi tách BlueEdu ra để giáo viên cá nhân có thể sở hữu một công cụ <span className="font-semibold text-primary">LMS thực thụ</span>, dễ dùng, nhỏ gọn, nhưng vẫn mang sức mạnh từ nền tảng lớn.
                </p>

                <div className="relative rounded-lg border-2 border-primary/20 bg-gradient-to-br from-blue-50/50 to-purple-50/50 p-4 dark:from-gray-800/50 dark:to-gray-900/50 sm:p-5">
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-0 blur transition-opacity duration-500 group-hover:opacity-100"></div>

                  <p className="relative text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg">
                    <span className="mr-2 text-lg">✨</span>
                    Bạn không dùng công cụ rời rạc. Bạn đang dùng một <span className="font-bold text-primary">mảnh ghép chuyên nghiệp</span> trong một <span className="font-bold text-primary">hệ sinh thái giáo dục hoàn chỉnh</span>.
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-primary"></div>
                  <span className="text-sm font-medium text-body-color dark:text-body-color-dark">Hệ sinh thái hoàn chỉnh</span>
                </div>
                <div className="h-4 w-px bg-gray-300 dark:bg-gray-600"></div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-purple-500"></div>
                  <span className="text-sm font-medium text-body-color dark:text-body-color-dark">Nền tảng mạnh mẽ</span>
                </div>
              </div>
            </div>

            {/* Visual Section - Ecosystem Mockup */}
            <div className="relative animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="relative">
                {/* Main Desktop/Laptop Mockup */}
                <div className="relative mx-auto max-w-full">
                  {/* Laptop Frame */}
                  <div className="group relative mx-auto w-full max-w-2xl">
                    {/* Laptop Screen */}
                    <div className="relative overflow-hidden rounded-t-lg border-4 border-gray-800 bg-gray-900 shadow-2xl transition-all duration-500 group-hover:scale-[1.02] dark:border-gray-700">
                      {/* Screen Content */}
                      <div className="aspect-video bg-gradient-to-br from-blue-600 via-purple-600 to-blue-600">
                        {/* Browser Chrome */}
                        <div className="flex items-center gap-2 border-b border-gray-700 bg-gray-800 px-4 py-2">
                          <div className="flex gap-1.5">
                            <div className="h-3 w-3 rounded-full bg-red-500"></div>
                            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                            <div className="h-3 w-3 rounded-full bg-green-500"></div>
                          </div>
                          <div className="ml-4 flex-1 rounded bg-gray-700 px-3 py-1 text-xs text-gray-300">
                            blueedu.vn
                          </div>
                        </div>
                        {/* Web Interface Mockup */}
                        <div className="flex h-full items-center justify-center p-8">
                          <div className="w-full space-y-4">
                            <div className="h-4 w-3/4 rounded bg-white/20"></div>
                            <div className="h-4 w-1/2 rounded bg-white/15"></div>
                            <div className="grid grid-cols-3 gap-4 pt-4">
                              {[1, 2, 3].map((i) => (
                                <div key={i} className="h-20 rounded-lg bg-white/10"></div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Shine Effect */}
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full"></div>
                    </div>

                    {/* Laptop Base */}
                    <div className="h-2 rounded-b-lg bg-gray-800 shadow-xl dark:bg-gray-700"></div>
                    <div className="mx-auto h-1 w-3/4 rounded-b-lg bg-gray-900 dark:bg-gray-800"></div>
                  </div>

                  {/* Mobile App Mockup - Floating */}
                  <div className="absolute -right-4 top-1/4 z-10 animate-float-delayed md:-right-8">
                    <div className="group relative">
                      {/* Phone Frame */}
                      <div className="relative h-64 w-32 overflow-hidden rounded-[2rem] border-4 border-gray-800 bg-gray-900 shadow-2xl transition-all duration-500 group-hover:scale-110 dark:border-gray-700">
                        {/* Screen Content */}
                        <div className="h-full bg-gradient-to-br from-blue-600 via-purple-600 to-blue-600">
                          {/* Status Bar */}
                          <div className="flex items-center justify-between border-b border-white/10 bg-black/20 px-3 py-1 text-xs text-white">
                            <span>9:41</span>
                            <div className="flex gap-1">
                              <div className="h-1 w-1 rounded-full bg-white"></div>
                              <div className="h-1 w-1 rounded-full bg-white"></div>
                              <div className="h-1 w-1 rounded-full bg-white"></div>
                            </div>
                          </div>
                          {/* App Interface */}
                          <div className="flex h-[calc(100%-2.5rem)] flex-col items-center justify-center space-y-3 p-4">
                            <div className="h-12 w-12 rounded-full bg-white/20"></div>
                            <div className="h-2 w-20 rounded bg-white/15"></div>
                            <div className="h-2 w-16 rounded bg-white/10"></div>
                            <div className="mt-4 space-y-2">
                              {[1, 2, 3].map((i) => (
                                <div key={i} className="h-8 w-24 rounded bg-white/10"></div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Shine Effect */}
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full"></div>
                      </div>

                      {/* Glow Effect */}
                      <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"></div>
                    </div>
                  </div>

                  {/* Tablet Mockup - Bottom Left */}
                  <div className="absolute -bottom-8 -left-4 z-10 hidden animate-float md:block lg:-left-8">
                    <div className="group relative">
                      {/* Tablet Frame */}
                      <div className="relative h-48 w-64 overflow-hidden rounded-xl border-4 border-gray-800 bg-gray-900 shadow-2xl transition-all duration-500 group-hover:scale-105 dark:border-gray-700">
                        {/* Screen Content */}
                        <div className="h-full bg-gradient-to-br from-purple-600 via-blue-600 to-purple-600">
                          {/* App Interface */}
                          <div className="flex h-full flex-col items-center justify-center space-y-3 p-6">
                            <div className="h-16 w-16 rounded-full bg-white/20"></div>
                            <div className="h-3 w-32 rounded bg-white/15"></div>
                            <div className="grid grid-cols-2 gap-3 pt-4">
                              {[1, 2].map((i) => (
                                <div key={i} className="h-16 rounded-lg bg-white/10"></div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Shine Effect */}
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full"></div>
                      </div>

                      {/* Glow Effect */}
                      <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-purple-500/30 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"></div>
                    </div>
                  </div>

                  {/* Connecting Lines Animation */}
                  <div className="absolute inset-0 -z-10">
                    <svg className="h-full w-full opacity-20">
                      <line
                        x1="50%"
                        y1="30%"
                        x2="75%"
                        y2="25%"
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        className="animate-pulse"
                      />
                      <line
                        x1="30%"
                        y1="70%"
                        x2="20%"
                        y2="85%"
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        className="animate-pulse"
                        style={{ animationDelay: '0.5s' }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.5" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>

                {/* Floating Icons */}
                <div className="absolute -left-8 top-1/4 animate-float text-3xl opacity-30">💻</div>
                <div className="absolute -right-12 top-1/2 animate-float-delayed text-3xl opacity-30">📱</div>
                <div className="absolute bottom-0 left-1/4 animate-float text-2xl opacity-30">🌐</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
