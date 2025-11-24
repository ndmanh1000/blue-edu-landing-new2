"use client";

import Link from "next/link";
import { useState } from "react";

const Brands = () => {
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const features = [
    {
      title: "Quản lý lớp học",
      icon: "🎯",
      iconBg: "bg-red-500",
      iconColor: "text-white",
      features: [
        "Tạo lớp 1 phút",
        "Mời học sinh bằng link hoặc mã lớp",
        "Tự động đồng bộ danh sách",
      ],
      gradient: "from-red-500 to-orange-500",
      pageNumber: 1,
    },
    {
      title: "Giao bài – chấm bài",
      icon: "📝",
      iconBg: "bg-green-500",
      iconColor: "text-white",
      features: [
        "Tự luận, trắc nghiệm, file",
        "Chấm trực tiếp trên giao diện",
        "Lưu toàn bộ lịch sử điểm, bài nộp",
      ],
      gradient: "from-green-500 to-emerald-500",
      pageNumber: 2,
    },
    {
      title: "Kho tài nguyên giáo viên",
      icon: "📚",
      iconBg: "bg-green-500",
      iconColor: "text-white",
      features: [
        "Lưu trữ đề – bài tập – tài liệu",
        "Tái sử dụng cho nhiều lớp",
        "Phân loại thông minh + tìm nhanh",
      ],
      gradient: "from-green-500 to-teal-500",
      pageNumber: 3,
    },
    {
      title: "Báo cáo học sinh",
      icon: "📊",
      iconBg: "bg-green-500",
      iconColor: "text-white",
      features: [
        "Ai đã nộp – chưa nộp",
        "Đúng hạn – trễ hạn",
        "Điểm từng em – biểu đồ tổng quan lớp",
      ],
      gradient: "from-green-500 to-cyan-500",
      pageNumber: 4,
    },
    {
      title: "Hệ sinh thái Blue Rise",
      icon: "🌊",
      iconBg: "bg-black",
      iconColor: "text-white",
      features: [
        "Khi bạn muốn mở rộng cấp độ quản lý → chuyển sang Blue Rise Enterprise trong 1 nốt nhạc",
        "Không mất dữ liệu, không làm lại từ đầu",
      ],
      gradient: "from-gray-800 to-black",
      pageNumber: 5,
    },
  ];

  const handleBookClick = () => {
    if (!isBookOpen) {
      setIsBookOpen(true);
    }
  };

  const handlePageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentPage < features.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentPage < features.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const currentFeature = features[currentPage];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 py-16 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 md:py-20 lg:py-28">
      {/* Background decorative elements */}
      <div className="absolute right-0 top-0 -z-0 animate-float-slow opacity-10">
        <div className="h-96 w-96 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 -z-0 animate-float-slow-reverse opacity-10">
        <div className="h-96 w-96 rounded-full bg-gradient-to-br from-yellow-400 to-amber-400 blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Title */}
        <div className="mb-12 text-center animate-fade-in-down">
          <h2 className="mb-4 text-3xl font-extrabold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
              Tính năng chuyên sâu của Blue Edu
            </span>
          </h2>
          {!isBookOpen && (
            <p className="mt-4 text-lg text-body-color dark:text-body-color-dark">
              👆 Click vào quyển vở để khám phá
            </p>
          )}
        </div>

        {/* Notebook Book */}
        <div className="flex items-center justify-center">
          <div
            className="relative cursor-pointer perspective-1000"
            onClick={handleBookClick}
            style={{ perspective: '1000px' }}
          >
            {/* Book Container */}
            <div className={`relative transition-all duration-1000 ${isBookOpen ? 'book-open' : 'book-closed'}`}>
              {/* Left Cover */}
              <div className={`book-cover book-cover-left ${isBookOpen ? 'open' : ''}`}>
                <div className="book-cover-inner">
                  <div className="book-spine"></div>
                  {!isBookOpen && (
                    <div className="book-cover-content">
                      <div className="text-6xl mb-4">📖</div>
                      <h3 className="text-2xl font-bold text-white">Blue Edu</h3>
                      <p className="text-white/80 mt-2">Tính năng chuyên sâu</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Pages */}
              <div className={`book-pages ${isBookOpen ? 'open' : ''}`}>
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`book-page ${index === currentPage ? 'active' : ''} ${index < currentPage ? 'turned' : ''} ${index === currentPage && isBookOpen ? 'cursor-pointer' : ''}`}
                    onClick={index === currentPage ? handlePageClick : undefined}
                    style={{
                      zIndex: features.length - index,
                    }}
                  >
                    {/* Page Content */}
                    <div className="book-page-content">
                      {/* Notebook Lines */}
                      <div className="notebook-lines"></div>

                      {/* Page Header */}
                      <div className="page-header">
                        <div className="page-number">Trang {feature.pageNumber}</div>
                        <div className="page-date">Blue Edu</div>
                      </div>

                      {/* Content */}
                      <div className="page-body">
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`flex h-16 w-16 items-center justify-center rounded-xl ${feature.iconBg} ${feature.iconColor} text-4xl shadow-lg`}>
                            {feature.icon}
                          </div>
                          <h3 className="text-3xl font-bold text-black dark:text-white">
                            {feature.title}
                          </h3>
                        </div>

                        <ul className="space-y-4">
                          {feature.features.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex items-start gap-3 text-lg leading-relaxed text-body-color dark:text-body-color-dark"
                            >
                              <span className="mt-1 flex-shrink-0 text-primary text-xl">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Click hint for current page */}
                        {index === currentPage && currentPage < features.length - 1 && (
                          <div className="mt-8 text-center">
                            <p className="text-sm text-body-color dark:text-body-color-dark animate-pulse">
                              👆 Click để lật trang tiếp theo
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Page Footer */}
                      <div className="page-footer">
                        <div className="page-footer-line"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Cover */}
              <div className={`book-cover book-cover-right ${isBookOpen ? 'open' : ''}`}>
                <div className="book-cover-inner">
                  {!isBookOpen && (
                    <div className="book-cover-content">
                      <div className="text-6xl mb-4">📚</div>
                      <h3 className="text-2xl font-bold text-white">Blue Edu</h3>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        {isBookOpen && (
          <div className="mt-12 flex items-center justify-center gap-4 animate-fade-in-up">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white border-2 border-gray-300 text-gray-600 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-white hover:border-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex items-center gap-2">
              {features.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${index === currentPage
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-gray-300 dark:bg-gray-600'
                    }`}
                ></div>
              ))}
            </div>

            <button
              onClick={handleNextPage}
              disabled={currentPage === features.length - 1}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white border-2 border-gray-300 text-gray-600 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-white hover:border-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {/* CTA Section */}
        {isBookOpen && currentPage === features.length - 1 && (
          <div className="mt-12 mx-auto max-w-3xl text-center animate-fade-in-up">
            <Link
              href="#contact"
              className="group relative inline-block overflow-hidden rounded-xl bg-gradient-to-r from-primary via-green-600 to-primary px-12 py-5 text-lg font-bold text-white shadow-2xl transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-primary/50 active:scale-95"
            >
              <span className="relative z-10 flex items-center">
                <span className="mr-3 animate-bounce text-2xl">🚀</span>
                <span>Bắt đầu ngay - miễn phí</span>
                <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>

              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-full"></span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Brands;


