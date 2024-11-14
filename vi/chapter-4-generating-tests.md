# Giới thiệu


Playwright đi kèm với khả năng tạo các bài kiểm tra sẵn có, là một cách tuyệt vời để bắt đầu nhanh chóng với việc kiểm thử. Nó sẽ mở hai cửa sổ: một cửa sổ trình duyệt nơi bạn tương tác với trang web mà bạn muốn kiểm thử, và một cửa sổ Playwright Inspector nơi bạn có thể ghi lại các bài kiểm tra của mình, sao chép, xóa cũng như thay đổi ngôn ngữ của các bài kiểm tra.

# Sử dụng Codegen
Sử dụng lệnh `codegen` để chạy trình tạo bài kiểm tra, theo sau là URL của trang web mà bạn muốn tạo bài kiểm tra. URL là tùy chọn, và bạn luôn có thể chạy lệnh mà không cần URL, sau đó thêm URL trực tiếp vào cửa sổ trình duyệt.

```bash
npx playwright codegen demo.playwright.dev/todomvc
```

# Ghi lại bài kiểm tra

Chạy `codegen` và thực hiện các thao tác trong trình duyệt. Playwright sẽ tạo mã cho các tương tác của người dùng. `Codegen` sẽ xem xét trang đã hiển thị và xác định bộ định vị được đề xuất, ưu tiên các bộ định vị theo vai trò, văn bản và mã kiểm tra (test id). Nếu trình tạo nhận dạng nhiều phần tử khớp với bộ định vị, nó sẽ cải thiện bộ định vị để làm cho nó linh hoạt và xác định duy nhất phần tử mục tiêu, do đó loại bỏ và giảm thiểu lỗi bài kiểm tra do bộ định vị gây ra.

**Với trình tạo bài kiểm tra, bạn có thể ghi lại:**

- Các thao tác như nhấp chuột hoặc điền thông tin chỉ bằng cách tương tác với trang

- Các kiểm tra (assertions) bằng cách nhấp vào một trong các biểu tượng trên thanh công cụ, sau đó nhấp vào một phần tử trên trang để thực hiện kiểm tra. Bạn có thể chọn:
    + `'assert visibility'` để kiểm tra rằng một phần tử hiển thị
    + `'assert text'` để kiểm tra rằng một phần tử chứa văn bản cụ thể
    + `'assert value'` để kiểm tra rằng một phần tử có giá trị cụ thể

![Recording a test](https://github.com/microsoft/playwright/assets/13063165/34a79ea1-639e-4cb3-8115-bfdc78e3d34d)

- Khi bạn đã hoàn thành tương tác với trang, nhấn nút `'record'` để dừng ghi và sử dụng nút `'copy'` để sao chép mã đã tạo vào trình chỉnh sửa của bạn.

- Sử dụng nút `'clear'` để xóa mã và bắt đầu ghi lại từ đầu. Khi hoàn tất, đóng cửa sổ `Playwright Inspector` hoặc dừng lệnh trong terminal.

- Để tìm hiểu thêm về cách tạo bài kiểm tra, hãy xem hướng dẫn chi tiết về [Codegen](https://playwright.dev/docs/codegen).


# Tạo bộ định vị

**Bạn có thể tạo [bộ định vị](https://playwright.dev/docs/locators) bằng trình tạo bài kiểm tra.**

- Nhấn nút `'Record'` để dừng ghi, và nút `'Pick Locator'` sẽ xuất hiện. Nhấp vào nút `'Pick Locator'` và di chuột qua các phần tử trong cửa sổ trình duyệt để xem bộ định vị được đánh dấu bên dưới mỗi phần tử.

- Để chọn một bộ định vị, nhấp vào phần tử mà bạn muốn xác định, và mã cho bộ định vị đó sẽ xuất hiện trong khu vực chơi bộ định vị (locator playground) bên cạnh nút `Pick Locator`.

- Bạn có thể chỉnh sửa bộ định vị trong khu vực làm việc để tinh chỉnh và xem phần tử phù hợp được đánh dấu trong cửa sổ trình duyệt. Sử dụng nút sao chép để sao chép bộ định vị và dán vào mã của bạn.

### Tham khảo

- [Running Codegen](https://playwright.dev/docs/codegen-intro#running-codegen)
- [Recording a test](https://playwright.dev/docs/codegen-intro#recording-a-test)
- [Generating locators](https://playwright.dev/docs/codegen-intro#generating-locators)