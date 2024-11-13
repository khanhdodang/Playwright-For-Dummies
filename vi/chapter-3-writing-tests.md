# Giới thiệu

**Các bài kiểm tra Playwright rất đơn giản:**

- thực hiện các hành động, và
- xác nhận trạng thái dựa trên các kỳ vọng.

- Không cần chờ đợi trước khi thực hiện một hành động nào cả: Playwright tự động đợi cho đến khi hàng loạt các kiểm tra về khả năng tương tác được đáp ứng trước khi thực hiện mỗi hành động.

- Cũng không cần phải xử lý các điều kiện tranh chấp khi thực hiện các kiểm tra - các xác nhận (assertions) của Playwright được thiết kế để mô tả các kỳ vọng cần phải được đáp ứng cuối cùng.

Vậy thôi! Những lựa chọn thiết kế này cho phép người dùng Playwright không cần phải lo lắng về các lỗi timeout không ổn định và các kiểm tra tranh chấp trong các bài kiểm tra của mình nữa.


## Bài kiểm tra đầu tiên

Hãy xem ví dụ sau để biết cách viết một bài kiểm tra.

`tests/example.spec.ts`
```typescript
import { test, expect } from '@playwright/test';

test('Kiểm tra tiêu đề', async ({ page }) => {

  // Hầu hết các test sẽ bắt đầu bằng cách điều hướng trang đến URL. Sau đó sẽ có thể tương tác với các thành phần của trang.
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  // Kỳ vọng tiêu đề "chứa" một chuỗi con.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
   // Nhấp vào liên kết với chữ "Get started".
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  // Kỳ vọng trang có một tiêu đề với tên "Installation".
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
```

### Tham khảo

- [Writing tests](https://playwright.dev/docs/writing-tests)
