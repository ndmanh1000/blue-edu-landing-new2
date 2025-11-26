"use client";

import Link from "next/link";
import { useMemo } from "react";

const Blog = () => {
  const products = [
    {
      name: "BlueEdu",
      description: "Module LMS chuyên biệt cho giáo viên",
      icon: "📚",
      gradient: "from-blue-500 to-cyan-500",
      delay: 0,
    },
    {
      name: "Blue Rise",
      description: "Hệ thống tổng thể cho trung tâm giáo dục",
      icon: "🏢",
      gradient: "from-purple-500 to-pink-500",
      delay: 100,
    },
    {
      name: "DSchool",
      description: "Hệ thống quản lý toàn diện cho trường học",
      icon: "🏫",
      gradient: "from-orange-500 to-red-500",
      delay: 200,
    },
  ];

  // Generate random positions for particles once
  const particleData = useMemo<Array<{ left: number; top: number; delay: number; duration: number }>>(() => {
    return Array.from({ length: 15 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
    }));
  }, []);

  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 py-12 dark:from-gray-dark dark:via-gray-900 dark:to-gray-dark md:py-16 lg:py-20"
    >
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
        {particleData.map((particle, i) => (
          <div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-primary/20 animate-float-delayed"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container relative z-10">
        {/* Section Title */}
        <div className="mb-12 text-center animate-fade-in-down">
          <div className="relative inline-block">
            <div className="absolute -right-12 -top-8 animate-float-delayed text-4xl opacity-30">🌐</div>
            <div className="absolute -left-12 -top-8 animate-float text-4xl opacity-30">🔗</div>

            <h2 className="relative text-xl font-extrabold leading-tight text-black dark:text-white sm:text-2xl md:text-3xl">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
                Hệ sinh thái giáo dục hoàn chỉnh
              </span>
              {/* Animated Underline */}
              <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-50">
                <span className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white to-transparent"></span>
              </span>
            </h2>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-12 grid gap-5 md:grid-cols-3 lg:gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${product.delay}ms` }}
            >
              <div className="relative h-full overflow-hidden rounded-xl border border-gray-200 bg-white p-5 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 -z-0 bg-gradient-to-br ${product.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}></div>

                {/* Animated Border Glow */}
                <div className={`absolute -inset-1 -z-0 rounded-2xl bg-gradient-to-r ${product.gradient} opacity-0 blur transition-opacity duration-500 group-hover:opacity-30`}></div>

                {/* Icon */}
                <div className="mb-6 flex items-center justify-center">
                  <div className={`relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${product.gradient} text-4xl shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    <span className="relative z-10">{product.icon}</span>
                    {/* Pulse Ring */}
                    <div className={`absolute inset-0 animate-ping rounded-2xl bg-gradient-to-br ${product.gradient} opacity-20`} style={{ animationDelay: `${product.delay}ms` }}></div>
                    {/* Shine Effect */}
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <h3 className="mb-3 text-xl font-bold text-black transition-colors duration-300 group-hover:text-primary dark:text-white sm:text-2xl">
                    {product.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-body-color transition-colors duration-300 group-hover:text-gray-700 dark:text-body-color-dark dark:group-hover:text-gray-300 sm:text-base">
                    {product.description}
                  </p>
                </div>

                {/* Animated Bottom Line */}
                <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${product.gradient} transition-all duration-500 group-hover:w-full`}></div>

                {/* Floating Particles Inside Card */}
                <div className="absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute h-2 w-2 rounded-full bg-gradient-to-br ${product.gradient} animate-float-delayed`}
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${30 + i * 20}%`,
                        animationDelay: `${i * 0.3}s`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefit Statement */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl border-2 border-primary/30 bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-blue-50/50 p-6 shadow-xl dark:from-gray-800/50 dark:via-gray-900/50 dark:to-gray-800/50 sm:p-7">
            {/* Animated Border Glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-0 blur transition-opacity duration-500 hover:opacity-30"></div>

            <div className="relative z-10 text-center">
              <div className="mb-4 text-3xl">✨</div>
              <p className="text-base font-semibold leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                Dữ liệu của bạn được <span className="font-bold text-primary">đồng bộ xuyên suốt</span>, không bao giờ mất. Khi cần mở rộng, chỉ cần <span className="font-bold text-primary">nâng cấp</span> – không cần đổi nền tảng.
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -right-8 -top-8 animate-float text-4xl opacity-10">🔒</div>
            <div className="absolute -bottom-8 -left-8 animate-float-delayed text-4xl opacity-10">📊</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <Link
            href="#"
            className="group relative inline-block overflow-hidden rounded-xl bg-gradient-to-r from-primary via-purple-600 to-primary px-5 py-2.5 text-sm font-bold text-white shadow-2xl transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-primary/50 active:scale-95 sm:px-6 sm:py-3 sm:text-base"
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-primary to-purple-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

            <span className="relative z-10 flex items-center">
              <span className="mr-2 animate-bounce text-lg">🚀</span>
              <span>Tìm hiểu Blue Rise</span>
              <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>

            {/* Shine effect */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-full"></span>

            {/* Shadow running effect */}
            <span className="absolute -inset-3 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent blur-3xl transition-transform duration-1000 group-hover:translate-x-full opacity-0 group-hover:opacity-100"></span>
            <span className="absolute -inset-2 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent blur-2xl transition-transform duration-1000 delay-75 group-hover:translate-x-full opacity-0 group-hover:opacity-100"></span>
            <span className="absolute -inset-1 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent blur-xl transition-transform duration-1000 delay-150 group-hover:translate-x-full opacity-0 group-hover:opacity-100"></span>
          </Link>

          <Link
            href="#"
            className="group relative inline-block overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-2xl transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-orange-500/50 active:scale-95 sm:px-6 sm:py-3 sm:text-base"
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

            <span className="relative z-10 flex items-center">
              <span className="mr-2 animate-bounce text-lg">🏫</span>
              <span>Tìm hiểu DSchool</span>
              <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>

            {/* Shine effect */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-full"></span>

            {/* Shadow running effect */}
            <span className="absolute -inset-3 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent blur-3xl transition-transform duration-1000 group-hover:translate-x-full opacity-0 group-hover:opacity-100"></span>
            <span className="absolute -inset-2 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent blur-2xl transition-transform duration-1000 delay-75 group-hover:translate-x-full opacity-0 group-hover:opacity-100"></span>
            <span className="absolute -inset-1 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent blur-xl transition-transform duration-1000 delay-150 group-hover:translate-x-full opacity-0 group-hover:opacity-100"></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
