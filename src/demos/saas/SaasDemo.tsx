import '../../App.css'

function SaasDemo() {
  return (
    <div className="saas-page">
      {/* Hero */}
      <section className="saas-hero">
        <div className="saas-hero-left">
          <div className="saas-badge">Web Pro • SaaS Landing</div>
          <h1 className="saas-title">
            Launch SaaS nhanh, <span className="saas-title-gradient">tối ưu chuyển đổi</span>
          </h1>
          <p className="saas-subtitle">
            Demo landing page cho sản phẩm SaaS / app: nhấn mạnh giá trị cốt lõi, bảng giá rõ ràng, testimonial xã hội
            và CTA dùng thử nổi bật.
          </p>
          <div className="saas-hero-actions">
            <button className="btn saas-btn-primary">Bắt đầu dùng thử miễn phí 14 ngày</button>
            <button className="btn saas-btn-secondary">Xem demo sản phẩm</button>
          </div>
          <div className="saas-metrics">
            <div className="saas-metric">
              <span className="saas-metric-value">2.5K+</span>
              <span className="saas-metric-label">team đang sử dụng</span>
            </div>
            <div className="saas-metric">
              <span className="saas-metric-value">43%</span>
              <span className="saas-metric-label">tăng tỉ lệ giữ chân user</span>
            </div>
            <div className="saas-metric">
              <span className="saas-metric-value">99.9%</span>
              <span className="saas-metric-label">uptime hạ tầng</span>
            </div>
          </div>
        </div>

        <div className="saas-hero-right">
          <div className="saas-app-card">
            <header className="saas-app-header">
              <div>
                <p className="saas-app-name">Flowstack</p>
                <p className="saas-app-label">Workspace analytics</p>
              </div>
              <span className="saas-app-pill">Live demo</span>
            </header>
            <div className="saas-app-body">
              <div className="saas-app-chart">
                <div className="saas-app-chart-bar saas-app-chart-bar-1" />
                <div className="saas-app-chart-bar saas-app-chart-bar-2" />
                <div className="saas-app-chart-bar saas-app-chart-bar-3" />
                <div className="saas-app-chart-bar saas-app-chart-bar-4" />
              </div>
              <div className="saas-app-sidebar">
                <div className="saas-app-pill-row">
                  <span className="saas-pill-dot saas-pill-green" />
                  <span>Onboarding funnel</span>
                  <span className="saas-pill-value">+18%</span>
                </div>
                <div className="saas-app-pill-row">
                  <span className="saas-pill-dot saas-pill-blue" />
                  <span>Team activation</span>
                  <span className="saas-pill-value">72%</span>
                </div>
                <div className="saas-app-pill-row">
                  <span className="saas-pill-dot saas-pill-purple" />
                  <span>Feature adoption</span>
                  <span className="saas-pill-value">63%</span>
                </div>
              </div>
            </div>
            <footer className="saas-app-footer">
              <p className="saas-app-footer-label">Chỉ là mockup UI</p>
              <p className="saas-app-footer-text">
                Khi chạy thật, phần này sẽ nhúng dashboard hoặc video demo sản phẩm thực tế.
              </p>
            </footer>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="saas-section">
        <header className="saas-section-header">
          <h2>Tập trung vào giá trị thay vì giải thích tính năng</h2>
          <p>
            Block này giúp bạn kể câu chuyện vì sao sản phẩm giúp đội nhóm làm việc hiệu quả hơn – không phải liệt kê
            toàn bộ chức năng.
          </p>
        </header>
        <div className="saas-grid saas-grid-3">
          <article className="saas-card">
            <h3>Onboarding trong 5 phút</h3>
            <p>Flow đầu vào rõ ràng, checklist từng bước, hướng dẫn in-app và email tự động.</p>
            <ul>
              <li>Template onboarding có sẵn theo từng ngành</li>
              <li>Checklist cá nhân hoá cho từng vai trò</li>
              <li>Gợi ý bước tiếp theo trong sản phẩm</li>
            </ul>
          </article>
          <article className="saas-card">
            <h3>View 360° về khách hàng</h3>
            <p>Kết nối dữ liệu từ nhiều nguồn: app, CRM, billing để ra một timeline dễ đọc.</p>
            <ul>
              <li>Timeline tương tác theo từng tài khoản</li>
              <li>Tag trạng thái: trial, active, at-risk</li>
              <li>Báo cáo cohort giữ chân/huỷ gói</li>
            </ul>
          </article>
          <article className="saas-card">
            <h3>Insights cho team product</h3>
            <p>Biết được feature nào đang tạo giá trị, feature nào nên bỏ hoặc cải thiện.</p>
            <ul>
              <li>Heatmap tính năng được sử dụng nhiều</li>
              <li>So sánh cohort theo phiên bản sản phẩm</li>
              <li>Export nhanh cho slide pitching nội bộ</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Pricing */}
      <section className="saas-section">
        <header className="saas-section-header">
          <h2>Bảng giá rõ ràng, dễ so sánh</h2>
          <p>
            Đây là ví dụ bảng giá cho SaaS B2B – khi triển khai thật, chỉ cần thay số liệu, tính năng và nút thanh
            toán.
          </p>
        </header>
        <div className="saas-grid saas-grid-3">
          <article className="saas-pricing-card">
            <div className="saas-pricing-header">
              <h3>Starter</h3>
              <p className="saas-pricing-price">$29<span>/tháng</span></p>
              <p className="saas-pricing-note">Dành cho team nhỏ bắt đầu tracking</p>
            </div>
            <ul>
              <li>Tối đa 3 workspace</li>
              <li>Basic dashboard &amp; funnel</li>
              <li>Email reports hàng tuần</li>
            </ul>
            <button className="btn saas-btn-outline btn-full">Chọn gói Starter</button>
          </article>

          <article className="saas-pricing-card saas-pricing-card-highlight">
            <div className="saas-pricing-header">
              <h3>Growth</h3>
              <p className="saas-pricing-price">$79<span>/tháng</span></p>
              <p className="saas-pricing-note">Phù hợp scale từ 5–50 thành viên</p>
              <span className="saas-pricing-pill">Được chọn nhiều nhất</span>
            </div>
            <ul>
              <li>Không giới hạn workspace</li>
              <li>Segmentation nâng cao &amp; cohort</li>
              <li>Webhook &amp; integration với CRM</li>
            </ul>
            <button className="btn saas-btn-primary btn-full">Dùng thử gói Growth</button>
          </article>

          <article className="saas-pricing-card">
            <div className="saas-pricing-header">
              <h3>Enterprise</h3>
              <p className="saas-pricing-price">Liên hệ</p>
              <p className="saas-pricing-note">Cần custom theo quy trình &amp; hạ tầng riêng</p>
            </div>
            <ul>
              <li>SSO, role chi tiết, data residency</li>
              <li>Onboarding &amp; training cho team</li>
              <li>CSM riêng &amp; SLA theo hợp đồng</li>
            </ul>
            <button className="btn saas-btn-outline btn-full">Trao đổi với chúng tôi</button>
          </article>
        </div>
      </section>

      {/* Testimonials */}
      <section className="saas-section">
        <header className="saas-section-header">
          <h2>Khách hàng nói gì về sản phẩm</h2>
          <p>Khối testimonial này giúp tăng trust: logo, quote ngắn, kết quả định lượng.</p>
        </header>
        <div className="saas-testimonials">
          <article className="saas-testimonial">
            <p className="saas-testimonial-quote">
              “Sau 2 tuần bật Flowstack, team growth của mình chốt được đúng điểm rơi onboarding – tỉ lệ active user tăng
              từ 61% lên 78%.”
            </p>
            <p className="saas-testimonial-meta">– Lan Anh, Head of Growth tại GoSuite</p>
          </article>
          <article className="saas-testimonial">
            <p className="saas-testimonial-quote">
              “Điều mình thích nhất là có thể cho sales, CS và product xem chung một bức tranh. Mỗi team có cách nhìn
              khác nhưng đều dùng chung data.”
            </p>
            <p className="saas-testimonial-meta">– Minh Tuấn, Co‑founder Taskly</p>
          </article>
          <article className="saas-testimonial">
            <p className="saas-testimonial-quote">
              “Chỉ cần gửi link dashboard cho nhà đầu tư là họ hiểu ngay sản phẩm đang đi đúng hướng hay không.”
            </p>
            <p className="saas-testimonial-meta">– Trí, CEO Finlytics</p>
          </article>
        </div>
      </section>
    </div>
  )
}

export default SaasDemo

