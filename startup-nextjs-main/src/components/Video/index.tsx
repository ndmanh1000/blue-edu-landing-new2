"use client";

import Link from "next/link";
import { useState } from "react";

export default function Video() {
  const features = [
    {
      icon: "📄",
      title: "Số hóa tài liệu trong vài giây",
      description: "Upload PDF, ảnh đề → AI tự nhận diện toàn bộ câu hỏi, đáp án, format đúng chuẩn. Không gõ lại – không chỉnh tay – không mất cả buổi.",
      gradient: "from-blue-500 to-cyan-500",
      delay: 0,
    },
    {
      icon: "💡",
      title: "Tạo ngân hàng câu hỏi thông minh",
      description: "AI tự phân loại dạng bài, gợi ý độ khó, đề xuất thêm câu hỏi tương tự để mở rộng kho. Từ 10 câu → thành 50 câu trong tích tắc.",
      gradient: "from-purple-500 to-pink-500",
      delay: 100,
    },
    {
      icon: "⚡",
      title: "Sinh đề tự động & tạo nhiều phiên bản",
      description: "Chọn chương – độ khó – số câu → AI xếp đề hoàn chỉnh. Tạo đề A/B/C chỉ bằng 1 click.",
      gradient: "from-orange-500 to-red-500",
      delay: 200,
    },
    {
      icon: "✅",
      title: "Gợi ý đáp án – thang điểm – nhận xét bài làm",
      description: "AI hỗ trợ chấm, đánh dấu, đề xuất nhận xét theo từng dạng câu. Giảm thời gian chấm bài đến 60-70%.",
      gradient: "from-green-500 to-emerald-500",
      delay: 300,
    },
    {
      icon: "📊",
      title: "Phân tích tiến độ học sinh theo thời gian thực",
      description: "Theo dõi và phân tích chi tiết tiến độ học tập của từng học sinh, báo cáo tự động, đề xuất cải thiện.",
      gradient: "from-indigo-500 to-blue-500",
      delay: 400,
    },
  ];

  return (
    <>
      <section id="video" className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 py-12 dark:from-gray-dark dark:via-gray-900 dark:to-gray-dark md:py-16 lg:py-20">
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
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute h-3 w-3 rounded-full bg-primary/20 animate-float-delayed"
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
          {/* Section Title */}
          <div className="mb-12 text-center animate-fade-in-down">
            <div className="relative inline-block">
              {/* Decorative AI Icons */}

              <div className="absolute -right-8 -top-6 animate-float-delayed text-3xl opacity-30 sm:-right-12 sm:-top-8 sm:text-4xl">⚡</div>

              <div className="relative inline-flex flex-col items-center justify-center sm:flex-row">
                <div className="mb-3 text-2xl sm:mb-0 sm:mr-3 sm:text-3xl">
                  <span className="inline-block animate-bounce">✨</span>

                </div>
                <h2 className="relative text-xl font-extrabold leading-tight text-black dark:text-white sm:text-2xl md:text-3xl">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
                    Blue Edu – Trợ lý dạy học tốc độ cao với AI
                  </span>
                  {/* Tech underline */}
                  <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-50">
                    <span className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white to-transparent"></span>
                  </span>
                </h2>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${feature.delay}ms` }}
              >
                <div className="relative h-full overflow-hidden rounded-xl border border-gray-200 bg-white p-5 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 -z-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}></div>

                  {/* Animated Border Glow */}
                  <div className={`absolute -inset-1 -z-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 blur transition-opacity duration-500 group-hover:opacity-30`}></div>

                  {/* Icon */}
                  <div className="mb-6 flex items-center justify-center">
                    <div className={`relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} text-3xl shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                      <span className="relative z-10">{feature.icon}</span>
                      {/* Pulse Ring */}
                      <div className={`absolute inset-0 animate-ping rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-20`} style={{ animationDelay: `${feature.delay}ms` }}></div>
                      {/* Shine Effect */}
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="mb-3 text-lg font-bold text-black transition-colors duration-300 group-hover:text-primary dark:text-white sm:text-xl">
                      <span className="mr-2 inline-block animate-pulse text-lg">✨</span>
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-body-color transition-colors duration-300 group-hover:text-gray-700 dark:text-body-color-dark dark:group-hover:text-gray-300 sm:text-base">
                      {feature.description}
                    </p>
                  </div>

                  {/* Animated Bottom Line */}
                  <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${feature.gradient} transition-all duration-500 group-hover:w-full`}></div>

                  {/* Floating Particles Inside Card */}
                  <div className="absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute h-2 w-2 rounded-full bg-gradient-to-br ${feature.gradient} animate-float-delayed`}
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

          {/* CTA Section */}
          <div className="mx-auto max-w-3xl text-center animate-fade-in-up animation-delay-600">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -left-20 top-1/2 hidden -translate-y-1/2 animate-float lg:block">
                <div className="h-16 w-16 rounded-full bg-primary/20 blur-xl"></div>
              </div>
              <div className="absolute -right-20 top-1/2 hidden -translate-y-1/2 animate-float-delayed lg:block">
                <div className="h-20 w-20 rounded-full bg-purple-500/20 blur-xl"></div>
              </div>

              <Link
                href="#contact"
                className="group relative inline-block overflow-hidden rounded-xl bg-gradient-to-r from-primary via-purple-600 to-primary px-6 py-2.5 text-sm font-bold text-white shadow-2xl transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-primary/50 active:scale-95 sm:px-7 sm:py-3 sm:text-base"
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-primary to-purple-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 3s linear infinite',
                }}></div>

                <span className="relative z-10 flex items-center">
                  <span className="mr-2 animate-bounce text-lg">🚀</span>
                  <span>Dùng thử miễn phí</span>
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
        </div>
      </section>
    </>
  );
};
