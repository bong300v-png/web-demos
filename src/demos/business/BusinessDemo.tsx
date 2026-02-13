import '../../App.css'

function BusinessDemo() {
  return (
    <>
      <header className="hero">
        <div className="hero-badge">Web Pro • Gói Doanh nghiệp</div>
        <h1>Website doanh nghiệp chuẩn thương hiệu, tối ưu chuyển đổi</h1>
        <p className="hero-subtitle">
          Một landing page được thiết kế riêng cho doanh nghiệp, bám sát nhận diện thương hiệu,
          kể câu chuyện về công ty, dịch vụ và đội ngũ trên mọi thiết bị.
        </p>

        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">
            Đăng ký tư vấn miễn phí
          </a>
          <p className="hero-note">
            Sau khi gửi form, đội ngũ 16PAH sẽ gợi ý cấu trúc trang, nội dung và thời gian triển khai
            phù hợp với doanh nghiệp của bạn.
          </p>
        </div>

        <div className="hero-stats">
          <div className="stat-card">
            <span className="stat-label">Phù hợp cho</span>
            <p className="stat-value">Doanh nghiệp vừa & nhỏ</p>
            <p className="stat-desc">Cần website giới thiệu bài bản, có thể mở rộng sau này.</p>
          </div>
          <div className="stat-card">
            <span className="stat-label">Mục tiêu chính</span>
            <p className="stat-value">Xây niềm tin &amp; nhận lead</p>
            <p className="stat-desc">Tập trung vào thông tin rõ ràng, CTA liên hệ nổi bật.</p>
          </div>
          <div className="stat-card">
            <span className="stat-label">Tối ưu</span>
            <p className="stat-value">Mobile &amp; tốc độ tải</p>
            <p className="stat-desc">Thiết kế cho người dùng di động và chạy quảng cáo.</p>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="section section-layout">
          <div className="section-text">
            <h2>Câu chuyện doanh nghiệp được kể trọn vẹn trên một trang</h2>
            <p>
              Trang demo này mô phỏng cấu trúc điển hình cho website doanh nghiệp: mở đầu bằng hero
              ấn tượng, tiếp theo là giới thiệu công ty, dịch vụ chủ lực, dự án tiêu biểu và thông tin liên hệ.
            </p>
            <ul className="feature-list">
              <li>Block giới thiệu ngắn gọn về doanh nghiệp, tầm nhìn, giá trị cốt lõi.</li>
              <li>Danh sách dịch vụ chính kèm lợi ích nổi bật cho từng nhóm khách hàng.</li>
              <li>Vùng trưng bày dự án/khách hàng tiêu biểu để tăng độ tin cậy.</li>
              <li>Thông tin liên hệ rõ ràng: hotline, email, địa chỉ, bản đồ và mạng xã hội.</li>
            </ul>
          </div>

          <div className="section-mockup">
            <div className="mockup-browser">
              <div className="mockup-browser-bar">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
                <span className="mockup-url">demo.16pah.shop/doanh-nghiep</span>
              </div>
              <div className="mockup-hero">
                <div className="mockup-tag">DEMO GIAO DIỆN</div>
                <h3>Thương hiệu của bạn xứng đáng với một website chuẩn chỉnh</h3>
                <p>
                  Hình ảnh hero lớn, slogan rõ ràng và nút kêu gọi hành động dẫn thẳng về form tư vấn
                  hoặc nút gọi nhanh.
                </p>
              </div>
              <div className="mockup-columns">
                <div className="mockup-card" />
                <div className="mockup-card" />
                <div className="mockup-card" />
              </div>
            </div>
          </div>
        </section>

        <section className="section section-grid">
          <div>
            <h2>Những gì khách hàng sẽ cảm nhận khi vào trang</h2>
            <div className="pill-row">
              <span className="pill">Chuyên nghiệp</span>
              <span className="pill">Tin cậy</span>
              <span className="pill">Rõ ràng</span>
            </div>
            <p>
              Mục tiêu của trang demo là giúp khách hàng của bạn chỉ mất vài giây để hiểu doanh nghiệp
              làm gì, dành cho ai và vì sao nên liên hệ ngay bây giờ.
            </p>
          </div>
          <div>
            <h3>3 điểm chạm chính</h3>
            <ul className="feature-list">
              <li>Hero rõ ràng: logo, slogan, mô tả ngắn và 1–2 nút CTA nổi bật.</li>
              <li>Phần giới thiệu &amp; dịch vụ: ít chữ nhưng trúng insight khách hàng.</li>
              <li>Khối social proof: dự án, khách hàng, review, chứng nhận.</li>
            </ul>
          </div>
        </section>

        <section id="contact" className="section section-contact">
          <div className="contact-card">
            <h2>Đăng ký tư vấn demo cho doanh nghiệp của bạn</h2>
            <p>
              Điền thông tin cơ bản, 16PAH sẽ đề xuất cấu trúc trang, phong cách giao diện và lộ trình triển khai
              cụ thể cho case của bạn.
            </p>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="company">Tên doanh nghiệp</label>
                  <input id="company" placeholder="VD: Công ty TNHH ABC" />
                </div>
                <div className="form-field">
                  <label htmlFor="industry">Lĩnh vực chính</label>
                  <input id="industry" placeholder="VD: Dịch vụ, sản xuất, công nghệ..." />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Người liên hệ</label>
                  <input id="name" placeholder="Họ tên" />
                </div>
                <div className="form-field">
                  <label htmlFor="phone">Số điện thoại / Zalo</label>
                  <input id="phone" placeholder="Số điện thoại để tư vấn nhanh" />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="note">Nhu cầu / ghi chú</label>
                <textarea
                  id="note"
                  rows={3}
                  placeholder="Mô tả nhanh website bạn muốn làm, ngân sách dự kiến, deadline triển khai..."
                />
              </div>
              <button type="submit" className="btn btn-primary btn-full">
                Gửi yêu cầu tư vấn demo
              </button>
              <p className="form-note">
                Đây là trang demo, form chưa kết nối thực tế. Khi triển khai chính thức, form sẽ gửi về email hoặc
                CRM/Zalo OA theo yêu cầu của bạn.
              </p>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}

export default BusinessDemo

