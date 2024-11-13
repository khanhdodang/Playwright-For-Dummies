
# Bảng hướng dẫn cách đặt tên các phần từ

| **Kiểu Phần tử**    | **Cách đặt tên**            | **Ví dụ các Phần tử**                          | **Ví dụ cách đặt tên**           |
|---------------------|-----------------------------|------------------------------------------------|----------------------------------|
| **Button**          | `btn<Description>`          | `page.locator('text=Submit')`                  | `btnSubmit`                      |
| **Input Field**     | `input<Description>`        | `page.locator('#email')`                       | `inputEmail`                     |
| **Checkbox**        | `chk<Description>`          | `page.locator('input[type="checkbox"]')`       | `chkAgreeTerms`                  |
| **Radio Button**    | `radio<Description>`        | `page.locator('input[type="radio"]')`          | `radioGenderMale`                |
| **Dropdown**        | `ddl<Description>`          | `page.locator('select#country')`               | `ddlCountry`                     |
| **Link**            | `lnk<Description>`          | `page.locator('text=Home')`                    | `lnkHome`                        |
| **Table**           | `tbl<Description>`          | `page.locator('table#userList')`               | `tblUserList`                    |
| **Table Row**       | `row<Description>`          | `page.locator('table#userList tr')`            | `rowUserListFirst`               |
| **Table Cell**      | `cell<Description>`         | `page.locator('table#userList td:nth-child(2)')` | `cellUserListName`             |
| **Image**           | `img<Description>`          | `page.locator('img[alt="Profile Picture"]')`   | `imgProfilePicture`              |
| **Heading**         | `hdr<Description>`          | `page.locator('h1')`                           | `hdrMainTitle`                   |
| **Paragraph**       | `p<Description>`            | `page.locator('p.intro')`                      | `pIntroText`                     |
| **Span**            | `span<Description>`         | `page.locator('span.badge')`                   | `spanBadgeCount`                 |
| **Div**             | `div<Description>`          | `page.locator('div.container')`                | `divMainContainer`               |
| **List (ul/ol)**    | `list<Description>`         | `page.locator('ul.menu')`                      | `listMenuItems`                  |
| **List Item**       | `item<Description>`         | `page.locator('ul.menu li:first-child')`       | `itemFirstMenuItem`              |
| **Form**            | `form<Description>`         | `page.locator('form#loginForm')`               | `formLogin`                      |
| **Modal**           | `modal<Description>`        | `page.locator('.modal')`                       | `modalLogin`                     |
