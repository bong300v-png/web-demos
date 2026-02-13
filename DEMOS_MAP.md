# Web Demos Map – 16PAH Web Pro

File này để **quản lý tất cả demo landing** trong project `web-demos` và làm “hướng dẫn hành động” cho AI agent.  
Mỗi demo có:

- **key**: định danh duy nhất cho AI agent.
- **route**: đường dẫn truy cập trên web.
- **folder**: vị trí code chính.
- **style**: phong cách thiết kế.
- **use case**: demo cho ngành gì.
- **taken**: khi một AI agent đã “nhận” demo này thì tick `✔` để agent khác không dùng lại (hoặc xoá dòng đó).

> Quy ước:  
> - Khi agent chọn một demo để sử dụng, hãy thay `taken` thành `✔` hoặc xoá hẳn dòng đó.  
> - Không sửa key/folder/route của các demo đã có, chỉ thêm dòng mới ở dưới.

---

## Bảng demo hiện tại

> Các demo đã **code xong** sẽ có folder thực tế.  
> Các demo **chưa code** vẫn khai báo trước key/route/folder để agent sau này bám đúng chuẩn, không trùng.

| key                | route                 | folder                                           | style / phong cách                                       | use case chính                                   | taken |
|--------------------|-----------------------|--------------------------------------------------|----------------------------------------------------------|--------------------------------------------------|-------|
| business-01        | `/`                   | `src/demos/business/BusinessDemo.tsx`           | Dark modern, gradient brand, corporate clean             | Website doanh nghiệp giới thiệu công ty          | ✔     |
| pet-grooming-01    | `/pet-grooming`       | `src/pages/PetGrooming.tsx`                     | Claymorphism, thẻ bo tròn, màu ấm playful                | Dịch vụ spa / grooming thú cưng                  |       |
| crypto-wallet-01   | `/crypto-wallet`      | `src/demos/crypto-wallet/CryptoWalletLanding.tsx` | Dark glassmorphism, neon crypto-native                | Landing cho ví crypto đa chuỗi, bảo mật          |       |
| saas-landing-01    | `/demo/saas-01`       | `src/demos/saas/SaasDemo.tsx`                   | Neon SaaS, card pricing, layout 2 cột, nhiều badge       | SaaS / app / startup                              |       |
| ai-tools-01        | `/demo/ai-tools-01`   | `src/demos/ai-tools/AiToolsDemo.tsx`           | Futuristic, gradient tím/xanh, card use-case            | Sản phẩm AI, chatbot, automation                  |       |
| ecommerce-01       | `/demo/ecommerce-01`  | `src/demos/ecommerce/EcommerceDemo.tsx`        | E‑commerce hiện đại, nhiều block sản phẩm, CTA mạnh      | Shop bán hàng online tổng quát                    |       |
| digital-accounts-01| `/demo/digital-acc-01`| `src/demos/digital-accounts/DigitalAccountsDemo.tsx` | Dark/light mix, bảng gói, badge bảo hành          | Shop tài khoản số (Netflix, Spotify, game...)     |       |
| software-keys-01   | `/demo/software-keys-01` | `src/demos/software-keys/SoftwareKeysDemo.tsx`| Bảng key, icon phần mềm, highlight legal                 | Shop key phần mềm & tool bản quyền                |       |
| social-clone-01    | `/demo/social-clone-01` | `src/demos/social-clone/SocialCloneDemo.tsx`  | Layout đậm chất “pro tools”, bảng clone, alert rủi ro    | Shop clone MXH, via, BM, page                     |       |
| topup-game-01      | `/demo/topup-01`      | `src/demos/topup-game/TopupGameDemo.tsx`       | Màu game, card chọn game/server, step-by-step form       | Nạp game, thẻ, code ingame                        |       |
| proxy-tools-01     | `/demo/proxy-tools-01`| `src/demos/proxy-tools/ProxyToolsDemo.tsx`    | Bảng gói proxy/tool, card thông số, tone kỹ thuật        | Shop proxy, VPN, tool/bot marketing               |       |
| beauty-spa-01      | `/demo/beauty-01`     | `src/demos/beauty/BeautySpaDemo.tsx`           | Hình ảnh trước-sau, tone hồng/beige, card dịch vụ        | Spa, salon tóc, beauty clinic                      |       |
| fitness-01         | `/demo/fitness-01`    | `src/demos/fitness/FitnessDemo.tsx`           | Dark/bright fitness, hero mạnh, kết quả học viên          | PT cá nhân, phòng gym, yoga, coaching             |       |
| education-01       | `/demo/education-01`  | `src/demos/education/EducationDemo.tsx`       | Clean, nhiều block chương trình, giảng viên, lịch khai giảng | Trung tâm, khoá học, mentor                     |       |
| service-landing-01 | `/demo/service-01`    | `src/demos/service-landing/ServiceLandingDemo.tsx` | Long-form AIDA, section lợi ích/quy trình/FAQ       | Landing cho 1 dịch vụ chạy quảng cáo              |       |
| healthcare-01      | `/demo/healthcare-01` | `src/demos/healthcare/HealthcareDemo.tsx`     | Tone tin cậy, nhiều info bác sĩ, lịch khám, form đặt lịch | Phòng khám, phòng nha, bác sĩ chuyên khoa         |       |
| restaurant-01      | `/demo/restaurant-01` | `src/demos/restaurant/RestaurantDemo.tsx`     | Hình món ăn, menu card, CTA đặt bàn/đặt món              | Nhà hàng, quán ăn, cafe, cloud kitchen            |       |
| creator-01         | `/demo/creator-01`    | `src/demos/creator/CreatorDemo.tsx`           | Personal brand, avatar lớn, link-in-bio nâng cấp         | Creator, KOL, influencer                          |       |
| media-podcast-01   | `/demo/media-01`      | `src/demos/media/MediaPodcastDemo.tsx`        | Dark media hub, card tập mới, player, CTA subscribe      | Kênh YouTube, podcast, studio media               |       |
| event-landing-01   | `/demo/event-01`      | `src/demos/event/EventDemo.tsx`               | Landing sự kiện với countdown, agenda, diễn giả          | Hội thảo, workshop, concert, meetup                |       |
| gaming-esport-01   | `/demo/gaming-01`     | `src/demos/gaming/GamingEsportDemo.tsx`      | Dark neon, style gaming, card team & lịch thi đấu        | Team esports, clan, server game                    |       |
| custom-store-01    | `/demo/custom-store-01` | `src/demos/custom-store/CustomStoreDemo.tsx` | Layout custom theo brief, nhiều block linh hoạt          | Shop bán hàng tuỳ biến, concept đặc biệt          |       |

---

## Cách thêm demo mới

1. Tạo folder và component mới, ví dụ cho SaaS:

- `src/demos/saas/SaasDemo.tsx`
- Thêm route trong `src/App.tsx`, ví dụ:  
  - `<Route path="/demo/saas-01" element={<SaasDemoPage />} />`

2. Thêm dòng vào bảng trong file này, ví dụ:

```markdown
| saas-01 | `/demo/saas-01` | `src/demos/saas/SaasDemo.tsx` | Neon SaaS, pricing table, testimonial slider | Landing SaaS / startup |       |
```

3. Khi một AI agent “chiếm” demo này, đổi cột `taken` thành `✔` hoặc xoá dòng nếu không muốn dùng lại.

---

## Ghi chú cho AI agents

- **Mục tiêu**: Đọc file này là **tự làm được** demo, không cần hỏi người dùng thêm.

### 1. Quy trình làm việc bắt buộc

1. **Chọn demo**  
   - Đọc bảng, chọn một dòng có `taken` đang trống.  
   - Ghi nhớ `key`, `route`, `folder`, `style`, `use case`.
2. **Đánh dấu đã nhận**  
   - Cập nhật lại chính dòng đó, đặt `taken` = `✔`.  
   - Không chọn lại demo đã có `✔`.
3. **Tạo code tương ứng**  
   - Tạo file/component đúng với cột `folder`.  
   - Nếu folder cha chưa tồn tại thì tạo folder theo đúng path.  
   - Không đổi tên file hoặc route đã ghi trong bảng.
4. **Gắn route**  
   - Mở `src/App.tsx` và thêm `<Route>` tương ứng với `route` trong bảng, dùng component từ `folder`.  
   - Không xoá, không sửa route của các demo khác.
5. **Phong cách giao diện**  
   - Thiết kế UI theo mô tả trong cột `style / phong cách` và `use case chính`.  
   - Mỗi demo phải có **tone, layout, cảm giác khác nhau**, không copy nguyên xi layout demo khác.
6. **Kiểm tra build**  
   - Chạy `npm run build`. Nếu lỗi, tự sửa cho tới khi build thành công.  
   - Không bỏ qua lỗi TypeScript/React.
7. **Commit**  
   - Chỉ commit các file thuộc `web-demos` liên quan tới demo mới: component, CSS, route, cập nhật `DEMOS_MAP.md`.  
   - Không commit, không sửa code của dự án chính `frontend` hoặc các thư mục khác.

### 2. Những điều tuyệt đối không được làm

- Không được xoá hoặc chỉnh code của demo đã có (trừ khi owner yêu cầu rõ ràng).  
- Không đổi `key`, `route`, `folder` của các dòng đã tồn tại trong bảng.  
- Không dùng lại `key` đã tồn tại để chỉ demo khác. Nếu cần biến thể mới, hãy tạo key mới (ví dụ: `business-02`).

### 3. Ví dụ workflow hoàn chỉnh (cho AI agent)

- Agent được giao làm demo SaaS:
  1. Đọc bảng, tìm dòng `saas-landing-01`, thấy `taken` trống → chọn dòng này.  
  2. Ghi nhớ:  
     - `key`: `saas-landing-01`  
     - `route`: `/demo/saas-01`  
     - `folder`: `src/demos/saas/SaasDemo.tsx`  
     - `style`: Neon SaaS, pricing table, testimonial slider  
  3. Cập nhật bảng, đặt `taken` = `✔` cho dòng đó.  
  4. Tạo folder `src/demos/saas/` và file `SaasDemo.tsx` với giao diện đúng phong cách.  
  5. Thêm `<Route path="/demo/saas-01" element={<SaasDemoPage />} />` trong `src/App.tsx`.  
  6. Tạo `SaasDemoPage` nếu cần làm shell giống `CryptoWalletPage` / `PetGroomingPage`.  
  7. Chạy `npm run build` và sửa mọi lỗi nếu có.  
  8. Commit các file mới + thay đổi trong `DEMOS_MAP.md` và `App.tsx`.

Nếu làm đúng các bước trên, agent **không cần hỏi thêm người dùng** mà vẫn có thể tạo mới, mở rộng và quản lý 20–30 demo một cách an toàn.

