# Giới Thiệu Về Playwright

### Playwright là gì?

[Playwright](https://playwright.dev/) là một framework mã nguồn mở dành cho kiểm thử end-to-end đáng tin cậy cho các ứng dụng web hiện đại. Mặc dù khá mới (ra mắt vào năm 2020), Playwright vẫn duy trì lịch phát hành thường xuyên, bổ sung tính năng mới và sửa lỗi nhanh chóng [(release schedule)](https://playwright.dev/docs/release-notes). Theo xu hướng về kiểm thử của StateOfJS 2022, Playwright đang ngày càng trở nên phổ biến và được duy trì đều đặn trong cộng đồng phát triển web. Playwright hỗ trợ tất cả các công cụ rendering hiện đại, bao gồm Chromium, WebKit, và Firefox. Có thể kiểm thử trên Windows, Linux, và macOS, trên máy cục bộ hoặc trên CI, ở chế độ không hiển thị (headless) hoặc có hiển thị (headed) với khả năng giả lập thiết bị di động gốc của Google Chrome cho Android và Mobile Safari.

![playwright-ranking](https://learn.microsoft.com/en-us/training/advocates/build-with-playwright/media/playwright-ranking.png)

### Tại Sao Nên Sử Dụng Playwright?

**Có nhiều lý do để chọn Playwright làm framework tự động hóa kiểm thử. Dưới đây là bốn lý do chính:**

- **API đồng nhất (Unified API)**. Playwright hoạt động trên tất cả các engine trình duyệt hiện đại (Chromium, WebKit, Firefox) và hỗ trợ giả lập thiết bị cho các bài kiểm thử di động. Nó bao gồm cả tùy chọn trình duyệt có hiển thị (headed) và không hiển thị (headless), cho phép các nhà phát triển ưu tiên giữa sự thuận tiện khi gỡ lỗi và việc thực thi trên CI/Cloud.

- **Kiểm thử bền vững (Resilient Testing)**. Playwright triển khai "auto-wait" (không có timeout giả) và "auto-retry" (kiểm tra web) - loại bỏ những nguyên nhân chính gây ra các bài kiểm thử không ổn định. Các công cụ phong phú (tracing, time-travel) giúp việc gỡ lỗi và sửa lỗi dễ dàng nếu có sự cố xảy ra.

- **Cách ly kiểm thử (Test Isolation)**. Mỗi bài kiểm thử chạy trong một `BrowserContext` riêng biệt, độc lập với các bài kiểm thử khác đang chạy cùng lúc. Các bài kiểm thử được chạy song song (để tối ưu hóa), và một bài kiểm thử thất bại sẽ không ảnh hưởng đến các bài kiểm thử khác (đảm bảo độ tin cậy).

- **Công cụ mạnh mẽ (Powerful Tooling)**. Playwright đơn giản hóa trải nghiệm của nhà phát triển từ việc viết kiểm thử, thực thi, gỡ lỗi, báo cáo, đến profiling - với các tùy chọn sử dụng CLI hoặc tiện ích mở rộng Visual Studio Code.


### Tham khảo

- [Playwright Introduction](https://playwright.dev/docs/intro#introduction)