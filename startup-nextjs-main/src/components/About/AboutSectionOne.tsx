"use client";

import Link from "next/link";

const AboutSectionOne = () => {
  const features = [
    {
      title: "AI chuyên sâu tài liệu giáo dục",
      icon: "🤖",
      gradient: "from-blue-500 to-purple-500",
      delay: 0,
    },
    {
      title: "Tạo đề thi tự động",
      icon: "⚡",
      gradient: "from-purple-500 to-pink-500",
      delay: 100,
    },
    {
      title: "Số hóa tài liệu cực nhanh",
      icon: "📄",
      gradient: "from-green-500 to-emerald-500",
      delay: 200,
    },
    {
      title: "Dễ dùng cho giáo viên cá nhân",
      icon: "👨‍🏫",
      gradient: "from-orange-500 to-red-500",
      delay: 300,
    },
    {
      title: "Báo cáo tiến độ học sinh",
      icon: "📊",
      gradient: "from-cyan-500 to-blue-500",
      delay: 400,
    },
    {
      title: "Khả năng mở rộng lên hệ thống lớn",
      icon: "🚀",
      gradient: "from-indigo-500 to-purple-500",
      delay: 500,
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 py-16 dark:from-gray-dark dark:via-gray-900 dark:to-gray-dark md:py-20 lg:py-28">
      {/* Background decorative elements */}
      <div className="absolute right-0 top-0 -z-0 animate-float-slow opacity-10">
        <div className="h-96 w-96 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 -z-0 animate-float-slow-reverse opacity-10">
        <div className="h-96 w-96 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(rgba(74, 108, 247, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(74, 108, 247, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      <div className="container relative z-10">
        {/* Section Title */}
        <div className="mb-16 text-center animate-fade-in-down">
          <h2 className="mb-4 text-3xl font-extrabold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
              Vì sao Blue Edu vượt trội nhất trên thị trường?
            </span>
          </h2>
        </div>

        {/* Comparison Table - 3 Columns */}
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-800">
            {/* Table Header */}
            <div className="border-b border-gray-200 bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 p-6 dark:border-gray-700">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="font-bold text-gray-600 dark:text-gray-300">Tính năng</div>
                <div className="font-bold text-primary dark:text-primary">Blue Edu</div>
                <div className="font-bold text-gray-400 dark:text-gray-500">Hệ thống khác</div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group animate-fade-in-up transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  style={{ animationDelay: `${feature.delay}ms` }}
                >
                  <div className="grid grid-cols-3 gap-4 p-6">
                    {/* Feature Column */}
                    <div className="flex items-center gap-4">
                      <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} text-2xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                        {feature.icon}
                      </div>
                      <p className="text-base font-semibold text-black dark:text-white md:text-lg">
                        {feature.title}
                      </p>
                    </div>

                    {/* Blue Edu Column */}
                    <div className="flex items-center justify-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-lg transition-all duration-300 group-hover:scale-110">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>

                    {/* Competitor Column */}
                    <div className="flex items-center justify-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 text-white dark:bg-gray-600 transition-all duration-300 group-hover:scale-110">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlight Box */}
        <div className="mx-auto mt-12 max-w-4xl animate-fade-in-up animation-delay-600">
          <div className="relative overflow-hidden rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/10 via-purple-500/10 to-primary/10 p-8 shadow-xl dark:border-primary/30">
            {/* Decorative elements */}
            <div className="absolute -right-10 -top-10 h-32 w-32 animate-float rounded-full bg-primary/20 blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 h-40 w-40 animate-float-delayed rounded-full bg-purple-500/20 blur-2xl"></div>

            <div className="relative z-10 text-center">
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white md:text-3xl">
                Blue Edu - Giải pháp toàn diện cho giáo viên
              </h3>
              <p className="mb-6 text-lg leading-relaxed text-body-color dark:text-body-color-dark">
                Tất cả những gì bạn cần trong một nền tảng duy nhất, được thiết kế đặc biệt cho giáo viên Việt Nam
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mx-auto mt-12 max-w-3xl text-center animate-fade-in-up animation-delay-800">
          <Link
            href="#contact"
            className="group relative inline-block overflow-hidden rounded-xl bg-gradient-to-r from-primary via-purple-600 to-primary px-12 py-5 text-lg font-bold text-white shadow-2xl transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-primary/50 active:scale-95"
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-primary to-purple-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{
              backgroundSize: '200% 100%',
              animation: 'shimmer 3s linear infinite',
            }}></div>

            <span className="relative z-10 flex items-center">
              <span className="mr-3 animate-bounce text-2xl">🚀</span>
              <span>Bắt đầu ngay - miễn phí</span>
              <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>

            {/* Shine effect */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-full"></span>

            {/* Shadow running effect */}
            <span className="absolute -inset-3 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent blur-3xl transition-transform duration-1000 group-hover:translate-x-full opacity-0 group-hover:opacity-100"></span>
            <span className="absolute -inset-2 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent blur-2xl transition-transform duration-1000 delay-75 group-hover:translate-x-full opacity-0 group-hover:opacity-100"></span>
            <span className="absolute -inset-1 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent blur-xl transition-transform duration-1000 delay-150 group-hover:translate-x-full opacity-0 group-hover:opacity-100"></span>

            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-xl border-2 border-white/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-ping"></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
