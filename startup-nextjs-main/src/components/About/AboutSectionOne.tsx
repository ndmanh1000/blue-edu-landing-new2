"use client";

import Link from "next/link";
import Button from "@/components/Common/Button";

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
    <section id="about" className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 py-12 dark:from-gray-dark dark:via-gray-900 dark:to-gray-dark md:py-16 lg:py-20">
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
        <div className="mb-12 text-center animate-fade-in-down">
          <h2 className="mb-4 text-xl font-extrabold leading-tight text-black dark:text-white sm:text-2xl md:text-3xl">
            <span className="bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
              Vì sao Blue Edu vượt trội nhất trên thị trường?
            </span>
          </h2>
        </div>

        {/* Comparison Table - 3 Columns */}
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
            {/* Table Header - Hidden on mobile, shown on desktop */}
            <div className="hidden border-b border-gray-200 bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 p-4 md:p-6 dark:border-gray-700 md:grid md:grid-cols-3 md:gap-4 md:text-center">
              <div className="font-bold text-gray-600 dark:text-gray-300">Tính năng</div>
              <div className="font-bold text-primary dark:text-primary">Blue Edu</div>
              <div className="font-bold text-gray-400 dark:text-gray-500">Hệ thống khác</div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group animate-fade-in-up transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  style={{ animationDelay: `${feature.delay}ms` }}
                >
                  {/* Mobile Layout - Stacked */}
                  <div className="block md:hidden">
                    <div className="p-4">
                      {/* Feature Title */}
                      <div className="mb-4 flex items-center gap-3">
                        <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} text-lg shadow-lg`}>
                          {feature.icon}
                        </div>
                        <p className="text-sm font-semibold text-black dark:text-white">
                          {feature.title}
                        </p>
                      </div>

                      {/* Comparison Row */}
                      <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3 dark:bg-gray-800/50">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Blue Edu:</span>
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-md">
                            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Hệ thống khác:</span>
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-300 text-white dark:bg-gray-600">
                            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout - 3 Columns */}
                  <div className="hidden md:grid md:grid-cols-3 md:gap-4 md:p-6">
                    {/* Feature Column */}
                    <div className="flex items-center gap-4">
                      <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} text-xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                        {feature.icon}
                      </div>
                      <p className="text-base font-semibold text-black dark:text-white md:text-lg">
                        {feature.title}
                      </p>
                    </div>

                    {/* Blue Edu Column */}
                    <div className="flex items-center justify-center">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-lg transition-all duration-300 group-hover:scale-110">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>

                    {/* Competitor Column */}
                    <div className="flex items-center justify-center">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300 text-white dark:bg-gray-600 transition-all duration-300 group-hover:scale-110">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="relative overflow-hidden rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/10 via-purple-500/10 to-primary/10 p-6 shadow-xl dark:border-primary/30 sm:p-7">
            {/* Decorative elements */}
            <div className="absolute -right-10 -top-10 h-32 w-32 animate-float rounded-full bg-primary/20 blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 h-40 w-40 animate-float-delayed rounded-full bg-purple-500/20 blur-2xl"></div>

            <div className="relative z-10 text-center">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                Blue Edu - Giải pháp toàn diện cho giáo viên
              </h3>
              <p className="mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg">
                Tất cả những gì bạn cần trong một nền tảng duy nhất, được thiết kế đặc biệt cho giáo viên Việt Nam
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mx-auto mt-12 max-w-3xl text-center animate-fade-in-up animation-delay-800">
          <Button
            href=""
            variant="primary"
            icon="🚀"
            className="inline-block"
            fullWidth={false}
          >
            Bắt đầu ngay - miễn phí
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
