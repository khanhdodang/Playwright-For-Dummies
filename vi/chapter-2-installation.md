# Cài đặt Playwright


**[Yêu cầu hệ thống](https://playwright.dev/docs/intro#system-requirements):**
- Node.js 18+ [Node.js](https://nodejs.org/en/download/package-manager) (**Lưu ý:** Chúng tôi khuyên bạn nên sử dụng phiên bản mới nhất.)
- Windows 10+, Windows Server 2016+ or Windows Subsystem for Linux (WSL).
- macOS 13 Ventura, or macOS 14 Sonoma.
- Debian 11, Debian 12, Ubuntu 20.04 or Ubuntu 22.04, Ubuntu 24.04, on x86-64 and arm64 architecture.

**Cài đặt khác:**
- Cài đặt [Java JDK](https://www.oracle.com/java/technologies/downloads/) ([Allure Report](https://allurereport.org/docs/playwright/) là Java bắt buộc để tạo báo cáo.)
- Cài đặt [Visual Studio Code (VS Code)](https://code.visualstudio.com/) cho Code Editor của bạn
- Cài đặt [Git Version Control](https://git-scm.com/download/)


Bắt đầu bằng cách cài đặt Playwright thông qua `npm`, `yarn` hoặc pnpm. Ngoài ra, bạn cũng có thể bắt đầu và chạy các bài kiểm thử của mình bằng cách sử dụng [Tiện ích Mở rộng VS Code](https://playwright.dev/docs/getting-started-vscode).

**Cài đặt qua npm:**

```bash
npm init playwright@latest
```

**Cài đặt qua yarn:**

```bash
yarn create playwright
```

**Cài đặt qua pnpm:**

```bash
pnpm create playwright
```

**Chạy lệnh cài đặt và chọn các tùy chọn sau để bắt đầu:**

- Chọn giữa `TypeScript` hoặc `JavaScript` (mặc định là `TypeScript`)
- Tên của thư mục Tests (mặc định là `tests`, hoặc e2e nếu bạn đã có thư mục `tests` trong dự án)
- Thêm `GitHub Actions` workflow để dễ dàng chạy các bài kiểm tra (test) trên CI
- Cài đặt các trình duyệt của Playwright (mặc định là `true`)


# Dưới đây là những gì sẽ được cài đặt:

Playwright sẽ tải xuống các trình duyệt cần thiết và tạo các tệp sau.

**Cấu Trúc Thư Mục Cơ Bản:**
Playwright sẽ tạo ra cấu trúc thư mục mặc định sau:

```plaintext
my-playwright-project/
│
├── tests/                    # Nơi chứa các tệp kiểm thử của bạn
│   ├── example.spec.ts        # Tệp kiểm thử mẫu
│   └── ...                    # Các kiểm thử bổ sung
│
├── tests-examples/           # Ví dụ về các kịch bản kiểm thử
│   └── demo-todo-app.spec.ts
│
├── playwright.config.ts      # Tệp cấu hình Playwright
│
├── package.json              # Thông tin về các thư viện và script của dự án
├── tsconfig.json             # Cấu hình TypeScript cho dự án
│
└── README.md                 # Thông tin chung về dự án
```

- `playwright.config` là nơi bạn có thể thêm cấu hình cho Playwright, bao gồm việc chỉnh sửa các trình duyệt mà bạn muốn Playwright chạy. 
- Nếu bạn đang chạy các bài kiểm tra (test) trong một dự án hiện có, thì các thư viện phụ thuộc sẽ được thêm trực tiếp vào `package.json` của bạn.
- Thư mục `tests` chứa một bài kiểm tra (test) ví dụ cơ bản để giúp bạn bắt đầu với việc kiểm thử. Để có một ví dụ chi tiết hơn, hãy xem thư mục `tests-examples`, trong đó có các bài kiểm tra (test) được viết để kiểm thử một ứng dụng `todo`.

### Thông tin cấu hình trong `playwright.config.ts`
```typescript
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',  // Thư mục chứa các kịch bản kiểm thử
  timeout: 30000,      // Thời gian chờ mặc định cho mỗi kiểm thử
  retries: 2,          // Số lần lặp lại nếu kiểm thử thất bại
  use: {
    headless: true,    // Chạy trong chế độ không có giao diện
    viewport: { width: 1280, height: 720 },
    video: 'retain-on-failure', // Lưu video khi kiểm thử thất bại
    screenshot: 'only-on-failure', // Lưu ảnh chụp màn hình khi thất bại
  },
});
```

# Thực thi bài kiểm tra (test)

- Theo mặc định, các bài kiểm tra (test) sẽ được chạy trên cả 3 trình duyệt: Chromium, Firefox và WebKit, sử dụng 3 workers. Điều này được cấu hình trong tệp [playwright.config](https://playwright.dev/docs/test-configuration).
- Các bài kiểm tra (test) sẽ chạy ở chế độ `headless`, nghĩa là không có trình duyệt nào mở khi chạy kiểm tra.
- Kết quả của các bài kiểm tra (test) và nhật ký sẽ được hiển thị trong `terminal`.

**Thực thi qua npm:**

```bash
npx playwright test
```

**Thực thi qua yarn:**

```bash
yarn playwright test
```

**Thực thi qua pnpm:**

```bash
pnpm exec playwright test
```

![Running the Example Test](https://github.com/microsoft/playwright/assets/13063165/981c1b2b-dc7e-4b85-b241-272b44da6628)

# Kiểm tra kết quả HTML Test Reports

Sau khi bài kiểm tra hoàn tất, một [báo cáo HTML](https://playwright.dev/docs/test-reporters#html-reporter) sẽ được tạo ra, hiển thị toàn bộ báo cáo của các bài kiểm tra, cho phép bạn lọc báo cáo theo trình duyệt, các bài kiểm tra đã Passed, Failed, Skipped, và Flaky (không ổn định). Bạn có thể nhấp vào từng bài kiểm tra để xem chi tiết lỗi cũng như từng bước thực hiện của bài kiểm tra. Theo mặc định, báo cáo HTML sẽ tự động mở nếu có bất kỳ bài kiểm tra nào thất bại (Failed).


# Để chạy kiểm thử trong chế độ giao diện - UI Mode, bạn có thể sử dụng lệnh:

**Thực thi qua npm:**

```bash
npx playwright test --ui
```

**Thực thi qua yarn:**

```bash
yarn playwright test --ui
```

**Thực thi qua pnpm:**

```bash
pnpm exec playwright test --ui
```

![Running the Example Test in UI Mode](https://github.com/microsoft/playwright/assets/13063165/c5b501cc-4f5d-485a-87cc-66044c651786)


# Cập nhật Playwright

Để cập nhật phiên bản Playwright mới nhất, bạn có thể sử dụng lệnh:

**Thực thi qua npm:**

```bash
npx playwright --version
```

**Thực thi qua yarn:**

```bash
yarn playwright --version
```

**Thực thi qua pnpm:**

```bash
pnpm exec playwright --version
```