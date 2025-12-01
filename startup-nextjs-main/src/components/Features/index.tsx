"use client";
import Link from "next/link";
import { useMemo } from "react";
import Button from "@/components/Common/Button";

const Features = () => {
  const painPoints = [
    "Giao bài trên Zalo – nhận bài trên Drive – lưu điểm trong Excel",
    "Gõ lại đề từ PDF/ảnh để đưa lên nền tảng",
    "Chấm bài thủ công, tổng hợp điểm chậm",
    "Không có báo cáo học sinh theo thời gian thực",
    "Dùng nhiều công cụ rời rạc, không nền tảng nào 'tròn trịa'",
  ];

  // Generate random positions for particles once
  const particleData = useMemo<Array<{ left: number; top: number; delay: number; duration: number }>>(() => {
    return Array.from({ length: 12 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
    }));
  }, []);

  return (
    <>
      <section id="features" className="relative overflow-hidden bg-gradient-to-br from-gray-light via-white to-gray-light py-12 dark:from-gray-dark dark:via-gray-900 dark:to-gray-dark md:py-16 lg:py-20">
        {/* Animated Background decorative elements */}
        <div className="absolute right-0 top-0 -z-0 animate-float-slow opacity-20">
          <div className="h-96 w-96 rounded-full bg-gradient-to-br from-red-400 to-orange-400 blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 -z-0 animate-float-slow-reverse opacity-20">
          <div className="h-96 w-96 rounded-full bg-gradient-to-br from-primary to-blue-600 blur-3xl"></div>
        </div>

        {/* Floating particles */}
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

        {/* Grid pattern overlay */}
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
            <div className="relative inline-block">
              {/* Decorative circles */}
              <div className="absolute -left-8 -top-8 h-12 w-12 animate-float rounded-full bg-red-200/50 blur-xl dark:bg-red-800/30"></div>
              <div className="absolute -right-8 -bottom-8 h-16 w-16 animate-float-delayed rounded-full bg-orange-200/50 blur-xl dark:bg-orange-800/30"></div>

              <div className="relative inline-flex flex-col items-center justify-center sm:flex-row">
                <div className="mb-3 animate-bounce text-2xl sm:mb-0 sm:mr-3 sm:text-3xl">⚠️</div>
                <h2 className="relative text-xl font-extrabold leading-tight text-black dark:text-white sm:text-2xl md:text-3xl">
                  <span className="relative bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
                    Giáo viên đang quá tải vì những việc &apos;không phải là dạy&apos;
                  </span>
                  {/* Underline animation */}
                  <span className="absolute -bottom-2 left-0 h-1 w-full animate-pulse bg-gradient-to-r from-red-500 via-orange-500 to-red-500 opacity-50"></span>
                </h2>
                <div className="mt-3 animate-bounce text-2xl sm:ml-3 sm:mt-0 sm:text-3xl" style={{ animationDelay: '0.5s' }}>⚠️</div>
              </div>
            </div>
          </div>

          {/* Pain List */}
          <div className="mx-auto mb-12 max-w-5xl">

            <div className="grid gap-6 md:grid-cols-2 md:items-stretch">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className={`group flex animate-fade-in-up ${index === painPoints.length - 1 ? 'md:col-span-2 md:mx-auto md:max-w-2xl' : ''}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative flex w-full flex-col overflow-hidden rounded-lg border-l-4 border-red-400 bg-gradient-to-br from-white to-gray-50 p-4 shadow-lg transition-all duration-500 hover:scale-[1.03] hover:border-red-500 hover:shadow-2xl hover:shadow-red-200/50 dark:from-gray-800 dark:to-gray-900 dark:hover:shadow-red-900/20 sm:p-5">
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 -z-0 bg-gradient-to-r from-red-50/0 via-red-50/50 to-red-50/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-red-900/0 dark:via-red-900/20 dark:to-red-900/0"></div>

                    {/* Glow effect on hover */}
                    <div className="absolute -inset-1 -z-0 rounded-xl bg-gradient-to-r from-red-400 via-orange-400 to-red-400 opacity-0 blur transition-opacity duration-500 group-hover:opacity-20"></div>

                    <div className="relative z-10 flex flex-1 items-start">
                      <div className="mr-4 flex-shrink-0">
                        <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-red-100 to-orange-100 text-red-600 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 dark:from-red-900/30 dark:to-orange-900/30 dark:text-red-400">
                          <svg
                            className="h-5 w-5 animate-bounce"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                          </svg>
                          {/* Pulse ring */}
                          <div className="absolute inset-0 animate-ping rounded-full border-2 border-red-400 opacity-20"></div>
                        </div>
                      </div>
                      <p className="flex-1 text-sm leading-relaxed text-black transition-colors duration-300 group-hover:text-gray-800 dark:text-body-color-dark dark:group-hover:text-gray-200 sm:text-base">
                        {point}
                      </p>
                    </div>

                    {/* Animated line indicator */}
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-400 to-orange-400 transition-all duration-500 group-hover:w-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pain Feeling - Quote Style */}
          <div className="mx-auto mb-12 max-w-4xl animate-fade-in-up animation-delay-600">
            <div className="group relative overflow-hidden rounded-lg border-l-4 border-red-400 bg-gradient-to-br from-white to-gray-50 p-4 shadow-lg transition-all duration-500 hover:scale-[1.02] hover:border-red-500 hover:shadow-2xl hover:shadow-red-200/50 dark:from-gray-800 dark:to-gray-900 dark:border-red-800 dark:hover:shadow-red-900/20 sm:p-5">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(239, 68, 68, 0.3) 1px, transparent 0)`,
                  backgroundSize: '40px 40px',
                }}></div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -right-10 -top-10 h-32 w-32 animate-float rounded-full bg-red-200/30 blur-2xl dark:bg-red-800/20"></div>
              <div className="absolute -bottom-10 -left-10 h-40 w-40 animate-float-delayed rounded-full bg-orange-200/30 blur-2xl dark:bg-orange-800/20"></div>

              <div className="absolute left-4 top-4 animate-pulse text-3xl text-red-200 dark:text-red-800 sm:left-6 sm:top-6 sm:text-4xl">&ldquo;</div>
              <div className="relative z-10 text-center">
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-red-100 px-4 py-2 dark:bg-red-900/30">
                  <p className="text-lg font-semibold text-red-700 dark:text-red-300">
                    Cảm giác:
                  </p>
                </div>
                <div className="mt-4 space-x-2 space-y-2 sm:space-x-3">
                  <span className="inline-block animate-bounce rounded-lg bg-white/80 px-3 py-1.5 text-lg font-bold text-red-600 shadow-md transition-all duration-300 hover:scale-110 dark:bg-gray-800/80 dark:text-red-400 sm:text-xl">
                    Rối.
                  </span>
                  <span className="inline-block animate-bounce rounded-lg bg-white/80 px-3 py-1.5 text-lg font-bold text-red-600 shadow-md transition-all duration-300 hover:scale-110 animation-delay-200 dark:bg-gray-800/80 dark:text-red-400 sm:text-xl">
                    Mệt.
                  </span>
                  <span className="inline-block animate-bounce rounded-lg bg-white/80 px-3 py-1.5 text-lg font-bold text-red-600 shadow-md transition-all duration-300 hover:scale-110 animation-delay-400 dark:bg-gray-800/80 dark:text-red-400 sm:text-xl">
                    Dễ lỗi.
                  </span>
                  <span className="inline-block animate-bounce rounded-lg bg-white/80 px-3 py-1.5 text-lg font-bold text-red-600 shadow-md transition-all duration-300 hover:scale-110 animation-delay-600 dark:bg-gray-800/80 dark:text-red-400 sm:text-xl">
                    Mất thời gian.
                  </span>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 animate-pulse text-3xl text-red-200 dark:text-red-800 sm:bottom-6 sm:right-6 sm:text-4xl" style={{ animationDelay: '0.5s' }}>&rdquo;</div>

              {/* Animated border glow */}
              <div className="absolute -inset-1 -z-0 rounded-lg bg-gradient-to-r from-red-400 via-orange-400 to-red-400 opacity-0 blur transition-opacity duration-500 group-hover:opacity-20"></div>
            </div>
          </div>

          {/* Transition Line */}
          <div className="mx-auto max-w-4xl text-center animate-fade-in-up animation-delay-800">
            <div className="relative mb-8">
              {/* Decorative elements */}
              <div className="absolute -left-20 top-1/2 hidden -translate-y-1/2 animate-float lg:block">
                <div className="h-16 w-16 rounded-full bg-primary/20 blur-xl"></div>
              </div>
              <div className="absolute -right-20 top-1/2 hidden -translate-y-1/2 animate-float-delayed lg:block">
                <div className="h-20 w-20 rounded-full bg-primary/20 blur-xl"></div>
              </div>

              <p className="relative text-xl font-bold text-black dark:text-white sm:text-2xl md:text-2xl">
                <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
                  BlueEdu được tạo ra để thay đổi điều đó.
                </span>
              </p>
            </div>

            <div className="relative">
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
        </div>
      </section>
    </>
  );
};

export default Features;
