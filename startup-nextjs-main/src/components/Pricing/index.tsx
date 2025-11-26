"use client";
import Link from "next/link";

const Pricing = () => {
  const pricingPlans = [
    {
      id: "free",
      title: "Free",
      price: "0",
      priceNote: "VND/tháng",
      description: "Xem AI có thể làm gì",
      buttonText: "Gói hiện tại của bạn",
      buttonStyle: "bg-gray-200 text-gray-700 hover:bg-gray-300",
      isCurrent: true,
      features: [
        {
          icon: "✨",
          text: "Nhận lời giải thích đơn giản",
        },
        {
          icon: "💬",
          text: "Thực hiện các đoạn ngắn để giải đáp những câu hỏi thường gặp",
        },
        {
          icon: "🖼️",
          text: "Thử tính năng tạo hình ảnh",
        },
        {
          icon: "💾",
          text: "Tiết kiệm bộ nhớ và ngữ cảnh hạn chế",
        },
      ],
      footnote: "Hiện tại bạn có kế hoạch rồi? Xem trợ giúp thanh toán",
    },
    {
      id: "go",
      title: "Go",
      badge: "MỚI",
      price: "132.000",
      priceNote: "VND/tháng (bao gồm VAT)",
      description: "Làm được nhiều việc hơn với AI thông minh hơn",
      buttonText: "Nâng cấp lên Go",
      buttonStyle: "bg-purple-600 text-white hover:bg-purple-700",
      isCurrent: false,
      features: [
        {
          icon: "✨",
          text: "Đào sâu với những câu hỏi khó hơn",
        },
        {
          icon: "💬",
          text: "Trò chuyện lâu hơn và tải lên nhiều nội dung hơn",
        },
        {
          icon: "🖼️",
          text: "Tạo hình ảnh chân thực cho dự án của bạn",
        },
        {
          icon: "💾",
          text: "Lưu trữ nhiều ngữ cảnh hơn để nhận được câu trả lời thông minh hơn",
        },
        {
          icon: "👥",
          text: "Nhận trợ giúp về việc lập kế hoạch và nhiệm vụ",
        },
        {
          icon: "⚙️",
          text: "Khám phá các dự án, nhiệm vụ và GPT tùy chỉnh",
        },
      ],
      footnote: "Chỉ có ở một số khu vực nhất định. Có áp dụng giới hạn",
    },
    {
      id: "plus",
      title: "Plus",
      price: "522.500",
      priceNote: "VND/tháng (bao gồm VAT)",
      description: "Tận hưởng trải nghiệm đầy đủ",
      buttonText: "Dùng bản Plus",
      buttonStyle: "bg-black text-white hover:bg-gray-800",
      isCurrent: false,
      features: [
        {
          icon: "✨",
          text: "Giải quyết các vấn đề phức tạp",
        },
        {
          icon: "💬",
          text: "Thực hiện những đoạn chat kéo dài qua nhiều phiên",
        },
        {
          icon: "🖼️",
          text: "Tạo nhiều hình ảnh hơn và nhanh hơn",
        },
        {
          icon: "💾",
          text: "Ghi nhớ các mục tiêu và cuộc trò chuyện trước đây",
        },
        {
          icon: "👥",
          text: "Lên kế hoạch đi lại và nhiệm vụ với chế độ tác nhân",
        },
        {
          icon: "⚙️",
          text: "Tổ chức các dự án và tùy chỉnh GPT",
        },
        {
          icon: "🎥",
          text: "Sản xuất và chia sẻ video trên Sora",
        },
        {
          icon: "💻",
          text: "Viết mã và xây dựng ứng dụng với Codex",
        },
      ],
      footnote: "Có áp dụng giới hạn",
    },
    {
      id: "pro",
      title: "Pro",
      price: "5.225.000",
      priceNote: "VND/tháng (bao gồm VAT)",
      description: "Tối đa hóa năng suất của bạn",
      buttonText: "Chuyển sang Pro",
      buttonStyle: "bg-black text-white hover:bg-gray-800",
      isCurrent: false,
      features: [
        {
          icon: "✨",
          text: "Nắm vững các nhiệm vụ và chủ đề nâng cao",
        },
        {
          icon: "💬",
          text: "Xử lý các dự án lớn với tin nhắn không giới hạn",
        },
        {
          icon: "🖼️",
          text: "Tạo hình ảnh chất lượng cao ở mọi tỷ lệ",
        },
        {
          icon: "💾",
          text: "Duy trì toàn bộ ngữ cảnh với bộ nhớ tối đa",
        },
        {
          icon: "👥",
          text: "Tiến hành nghiên cứu và lập kế hoạch thực hiện nhiệm vụ với các tác nhân",
        },
        {
          icon: "⚙️",
          text: "Mở rộng quy mô dự án của bạn và tự động hóa quy trình làm việc",
        },
        {
          icon: "🎥",
          text: "Mở rộng giới hạn của bạn với tính năng tạo video bằng Sora",
        },
        {
          icon: "💻",
          text: "Triển khai mã nhanh hơn với Codex",
        },
        {
          icon: "🧪",
          text: "Nhận quyền truy cập sớm vào các tính năng thử nghiệm",
        },
      ],
      footnote: "Không giới hạn tùy thuộc vào các quy định bảo vệ tránh lạm dụng. Tìm hiểu thêm",
    },
  ];

  return (
    <section id="pricing" className="overflow-hidden bg-white py-16 dark:bg-gray-dark md:py-20 lg:py-28">
      <div className="container">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
            Đề Xuất Gói tính năng BlueEdu
          </h2>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
            >
              {/* Header */}
              <div className="mb-4">
                <div className="mb-2 flex items-center gap-2">
                  <h3 className="text-xl font-bold text-black dark:text-white">
                    {plan.title}
                  </h3>
                  {plan.badge && (
                    <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-semibold text-purple-700 dark:bg-purple-900 dark:text-purple-300">
                      {plan.badge}
                    </span>
                  )}
                </div>
                <div className="mb-2">
                  <span className="text-3xl font-light text-gray-600 dark:text-gray-400">
                    {plan.price}
                  </span>
                  <span className="ml-1 text-sm text-gray-500 dark:text-gray-500">
                    {plan.priceNote}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {plan.description}
                </p>
              </div>

              {/* CTA Button */}
              <Link
                href="#contact"
                className={`mb-6 w-full rounded-lg px-4 py-3 text-center text-sm font-semibold transition-colors ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </Link>

              {/* Features List */}
              <div className="mb-6 flex-1 space-y-3">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="mt-0.5 text-lg">{feature.icon}</span>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Footnote */}
              <p className="mt-auto text-xs text-gray-500 dark:text-gray-500">
                {plan.footnote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
