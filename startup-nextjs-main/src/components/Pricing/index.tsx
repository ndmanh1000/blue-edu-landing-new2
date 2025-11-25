"use client";
import { useState } from "react";
import Link from "next/link";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const features = [
    {
      name: "Số lượng lớp học",
      free: "Không giới hạn",
      premium: "Không giới hạn",
    },
    {
      name: "Số lượng học sinh",
      free: "Không giới hạn",
      premium: "Không giới hạn",
    },
    {
      name: "Thống kê kết quả học tập",
      free: "Có",
      premium: "Có",
    },
    {
      name: "Tạo Ma trận, tạo phiếu, chấm bài tự động",
      free: "Có",
      premium: "Có",
    },
    {
      name: "Số lượt giao bài",
      free: "10 lượt",
      premium: "Không giới hạn",
    },
    {
      name: "Ngân hàng học liệu số BlueEdu",
      free: "-",
      premium: "Có",
    },
    {
      name: "Tải xuống đề bài",
      free: "1 lần",
      premium: "Không giới hạn",
    },
    {
      name: "Tải kết quả thi",
      free: "Không giới hạn",
      premium: "Không giới hạn",
    },
    {
      name: "Dung lượng lưu trữ",
      free: "100 MB",
      premium: "5 GB",
    },
    {
      name: "Số lượng thiết bị đăng nhập",
      free: "Không giới hạn",
      premium: "Không giới hạn",
    },
    {
      name: "AI Số hoá học liệu và phân loại câu hỏi",
      free: "Miễn phí 5,000 point AI",
      premium: "Miễn phí 5,000 point AI",
    },
  ];

  const premiumPricing = {
    monthly: {
      price: "199,000",
      promotion: "Tặng 20,000 point AI",
    },
    yearly: {
      price: "1,999,000",
      promotion: "Tặng 2 Tháng + Tặng 50,000 point AI",
    },
  };

  return (
    <section id="pricing" className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 py-16 dark:from-gray-dark dark:via-gray-900 dark:to-gray-dark md:py-20 lg:py-28">
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

      <div className="container relative z-10">
        {/* Section Title */}
        <div className="mb-12 text-center animate-fade-in-down">
          <div className="relative inline-block">
            <div className="absolute -right-12 -top-8 animate-float-delayed text-6xl opacity-30">💰</div>
            <div className="absolute -left-12 -top-8 animate-float text-6xl opacity-30">💎</div>

            <h2 className="relative text-2xl font-extrabold leading-tight text-black dark:text-white sm:text-4xl md:text-3xl lg:text-3xl">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
                Đề Xuất Gói tính năng BlueEdu
              </span>
              {/* Animated Underline */}
              <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-50">
                <span className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white to-transparent"></span>
              </span>
            </h2>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
          {/* Feature Comparison Table */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-800 animate-fade-in-up">
              {/* Table Header */}
              <div className="grid grid-cols-3 border-b-2 border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 dark:border-gray-700 dark:from-gray-800 dark:to-gray-900">
                <div className="px-6 py-4 font-bold text-gray-700 dark:text-gray-300">
                  Danh sách tính năng
                </div>
                <div className="border-x border-gray-200 px-6 py-4 text-center font-bold text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  Free
                </div>
                <div className="px-6 py-4 text-center font-bold text-primary">
                  Premium
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-3 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 animate-fade-in-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="px-6 py-4 text-sm font-medium text-body-color dark:text-body-color-dark md:text-base">
                      {feature.name}
                    </div>
                    <div className="border-x border-gray-200 px-6 py-4 text-center text-sm text-body-color dark:border-gray-700 dark:text-body-color-dark md:text-base">
                      {feature.free === "Có" ? (
                        <span className="inline-flex items-center justify-center">
                          <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                      ) : feature.free === "-" ? (
                        <span className="text-gray-400">-</span>
                      ) : (
                        <span>{feature.free}</span>
                      )}
                    </div>
                    <div className="px-6 py-4 text-center text-sm font-semibold text-primary md:text-base">
                      {feature.premium === "Có" ? (
                        <span className="inline-flex items-center justify-center">
                          <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                      ) : (
                        <span>{feature.premium}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Premium Pricing Card */}
          <div className="lg:col-span-1">
            <div className="relative overflow-hidden rounded-2xl border-2 border-primary bg-gradient-to-br from-primary/10 via-purple-50 to-blue-50 p-8 shadow-2xl dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              {/* Badge */}
              <div className="absolute right-0 top-0 rounded-bl-2xl rounded-tr-2xl bg-gradient-to-r from-primary to-purple-600 px-4 py-2">
                <span className="text-sm font-bold text-white">PREMIUM</span>
              </div>

              {/* Price Toggle */}
              <div className="mb-6 mt-4">
                <div className="mb-4 flex justify-center gap-4">
                  <button
                    onClick={() => setIsMonthly(true)}
                    className={`px-4 py-2 text-sm font-semibold transition-all ${isMonthly
                      ? "text-primary underline decoration-2 underline-offset-4"
                      : "text-gray-500 dark:text-gray-400"
                      }`}
                  >
                    Theo tháng
                  </button>
                  <button
                    onClick={() => setIsMonthly(false)}
                    className={`px-4 py-2 text-sm font-semibold transition-all ${!isMonthly
                      ? "text-primary underline decoration-2 underline-offset-4"
                      : "text-gray-500 dark:text-gray-400"
                      }`}
                  >
                    Theo năm
                  </button>
                </div>

                {/* Price Display */}
                <div className="text-center">
                  <div className="mb-2">
                    <span className="text-4xl font-extrabold text-primary">
                      {premiumPricing[isMonthly ? "monthly" : "yearly"].price}
                    </span>
                    <span className="ml-2 text-lg text-body-color dark:text-body-color-dark">
                      VNĐ
                    </span>
                  </div>
                  <div className="text-sm text-body-color dark:text-body-color-dark">
                    / {isMonthly ? "tháng" : "năm"}
                  </div>
                </div>
              </div>

              {/* Promotion Badge */}
              <div className="mb-6 rounded-xl border-2 border-primary/30 bg-gradient-to-r from-primary/20 to-purple-500/20 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-2xl">🎉</span>
                  <span className="font-bold text-primary">Khuyến mại: Launch Event</span>
                </div>
                <p className="text-sm text-body-color dark:text-body-color-dark">
                  {isMonthly
                    ? premiumPricing.monthly.promotion
                    : premiumPricing.yearly.promotion}
                </p>
              </div>

              {/* CTA Button */}
              <Link
                href="#contact"
                className="group relative block w-full overflow-hidden rounded-xl bg-gradient-to-r from-primary via-purple-600 to-primary px-6 py-4 text-center font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-primary to-purple-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                <span className="relative z-10 flex items-center justify-center">
                  <span className="mr-2 animate-bounce text-xl">🚀</span>
                  <span>Đăng ký ngay</span>
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>

                {/* Shine effect */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-full"></span>

                {/* Shadow running effect */}
                <span className="absolute -inset-3 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent blur-3xl transition-transform duration-1000 group-hover:translate-x-full opacity-0 group-hover:opacity-100"></span>
                <span className="absolute -inset-2 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent blur-2xl transition-transform duration-1000 delay-75 group-hover:translate-x-full opacity-0 group-hover:opacity-100"></span>
                <span className="absolute -inset-1 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent blur-xl transition-transform duration-1000 delay-150 group-hover:translate-x-full opacity-0 group-hover:opacity-100"></span>
              </Link>

              {/* Free Trial CTA */}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
