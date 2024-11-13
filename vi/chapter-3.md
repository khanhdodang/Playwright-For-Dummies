# Hiểu Các Khái Niệm Cơ Bản Về Playwright

## Các Trình Duyệt Được Hỗ Trợ Bởi Playwright

Playwright hỗ trợ tự động hóa kiểm thử trên nhiều trình duyệt hiện đại, bao gồm Chromium, WebKit, và Firefox. Playwright cho phép bạn viết một bộ kiểm thử duy nhất để chạy trên nhiều trình duyệt khác nhau, giúp tăng khả năng bao phủ kiểm thử trên các môi trường khác nhau.

## Chế Độ Headless (Không Giao Diện) và Headed (Có Giao Diện)

- **Headless (Không Giao Diện)**: Chế độ chạy trình duyệt mà không hiển thị giao diện đồ họa. Điều này giúp tăng tốc độ chạy kiểm thử và tiết kiệm tài nguyên hệ thống. Đây là lựa chọn phổ biến khi chạy kiểm thử trong CI/CD và các môi trường tự động khác.

- **Headed (Có Giao Diện)**: Chế độ chạy trình duyệt hiển thị đầy đủ giao diện đồ họa. Đây là lựa chọn tốt cho quá trình phát triển, debug, và quan sát trực tiếp các kiểm thử đang thực thi.

Để bật chế độ `headless`, bạn chỉ cần cài đặt tuỳ chọn `headless: true` trong cấu hình Playwright:

```typescript
const browser = await playwright.chromium.launch({ headless: true });
```

## Các thành phần chính của Playwright

Playwright cung cấp ba thành phần cốt lõi giúp điều khiển và tương tác với trình duyệt để thực hiện các bài kiểm thử tự động:

### 1. **Browser**
- Đại diện cho một phiên bản trình duyệt. Playwright hỗ trợ nhiều trình duyệt khác nhau như Chromium, Firefox, WebKit.
- `Browser` thường được khởi tạo một lần cho mỗi session và có thể được tái sử dụng để tiết kiệm tài nguyên.
- Mỗi `Browser` có thể chứa nhiều `Context`, giúp quản lý các phiên làm việc độc lập trong cùng một trình duyệt.

   ```typescript
   const browser = await playwright.chromium.launch();
   ```

### 2. **Context**
- `BrowserContext` tạo ra một ngữ cảnh duyệt web mới, tương tự như một tab hoặc một cửa sổ riêng biệt trong trình duyệt.
- Mỗi `Context` có bộ cookies, bộ nhớ cache và phiên riêng biệt, cho phép chạy các bài kiểm thử song song mà không bị ảnh hưởng lẫn nhau.
- `Context` thường được dùng để kiểm thử các trường hợp yêu cầu các phiên khác nhau, như người dùng khác nhau đăng nhập vào cùng một ứng dụng.

    ```typescript
    const context = await browser.newContext();
    ```

### 3. **Page**
- `Page` đại diện cho một trang web, là nơi các hành động tương tác (click, nhập liệu, kiểm tra) diễn ra.
- Mỗi `Page` được mở trong một `Context`, và có thể mở nhiều `Page` trong cùng một `Context`.
- `Page` chứa các API để thao tác với các thành phần HTML, điều hướng, và chụp ảnh màn hình.

    ```typescript
    const page = await context.newPage();
    await page.goto('https://example.com');
    ```

> Các thành phần này kết hợp với nhau để tạo ra một cấu trúc mạnh mẽ, dễ quản lý và linh hoạt cho các bài kiểm thử tự động với Playwright.