import '../App.css'

function PetGroomingPage() {
  return (
    <div className="pet-page">
      {/* Hero */}
      <section className="pet-hero">
        <div className="pet-hero-content">
          <span className="pet-badge">Pet Spa · Grooming · Yêu Thú Cưng</span>
          <h1>
            Chăm sóc &amp; làm đẹp cho thú cưng
            <br />
            <span className="pet-hero-highlight">Nhẹ nhàng – Thơm tho – Hạnh phúc</span>
          </h1>
          <p className="pet-hero-subtitle">
            Không chỉ là tắm rửa, đó là một buổi thư giãn trọn vẹn cho boss: làm sạch, tỉa lông, massage và chăm sóc da lông với
            sản phẩm an toàn, mùi thơm dễ chịu.
          </p>
          <div className="pet-hero-actions">
            <button className="btn pet-btn-primary btn-full">Đặt lịch grooming ngay</button>
            <p className="pet-hero-note">Miễn phí tư vấn kiểu lông &amp; lịch chăm sóc định kỳ phù hợp với từng bé.</p>
          </div>
        </div>

        <div className="pet-hero-visual">
          <div className="pet-paw-orbit">
            <div className="pet-paw pet-paw-main">🐶</div>
            <div className="pet-paw pet-paw-small pet-paw-1">🐾</div>
            <div className="pet-paw pet-paw-small pet-paw-2">🐱</div>
            <div className="pet-paw pet-paw-small pet-paw-3">🛁</div>
          </div>
          <div className="pet-floating-card">
            <p className="pet-floating-label">Hôm nay có</p>
            <p className="pet-floating-number">12 bé</p>
            <p className="pet-floating-desc">đặt lịch tắm thơm &amp; cắt tỉa lông</p>
          </div>
        </div>
      </section>

      {/* Services clay cards */}
      <section className="pet-section">
        <header className="pet-section-header">
          <h2>Các dịch vụ grooming nổi bật</h2>
          <p>Thiết kế dành riêng cho thú cưng nhà bạn, không gò bó theo &quot;một kiểu cho tất cả&quot;.</p>
        </header>
        <div className="pet-grid pet-grid-3">
          <div className="pet-card pet-card-clay">
            <div className="pet-card-icon">🛁</div>
            <h3>Tắm thơm &amp; sấy bồng</h3>
            <p>Làm sạch da lông, sấy phồng nhẹ nhàng, giữ mùi thơm lâu nhưng không gắt.</p>
            <ul>
              <li>Sữa tắm an toàn cho da nhạy cảm</li>
              <li>Làm sạch kẽ chân, tai, vùng bụng</li>
              <li>Sấy mát, hạn chế stress cho bé</li>
            </ul>
          </div>

          <div className="pet-card pet-card-clay">
            <div className="pet-card-icon">✂️</div>
            <h3>Cắt tỉa tạo kiểu</h3>
            <p>Tỉa lông gọn gàng, tạo form gương mặt &amp; body theo tính cách từng bé.</p>
            <ul>
              <li>Gợi ý kiểu lông hợp giống &amp; dáng</li>
              <li>Dụng cụ vô trùng, an toàn</li>
              <li>Ưu tiên sự thoải mái cho thú cưng</li>
            </ul>
          </div>

          <div className="pet-card pet-card-clay">
            <div className="pet-card-icon">🧴</div>
            <h3>Spa thư giãn</h3>
            <p>Massage nhẹ, chăm sóc da lông &amp; móng, giúp bé giảm ngứa, giảm rụng lông.</p>
            <ul>
              <li>Ngâm chân thảo mộc ấm</li>
              <li>Vệ sinh móng, đệm chân</li>
              <li>Chải lông kỹ, tháo rối dịu nhẹ</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="pet-section">
        <header className="pet-section-header">
          <h2>Gói chăm sóc theo nhu cầu</h2>
          <p>Chọn nhanh gói phù hợp, phần còn lại để chúng mình lo cho boss.</p>
        </header>
        <div className="pet-grid pet-grid-3">
          <div className="pet-card pet-card-package">
            <h3>Gói Basic</h3>
            <p className="pet-price">từ 250.000đ</p>
            <ul>
              <li>Tắm thơm &amp; sấy khô</li>
              <li>Vệ sinh tai &amp; cắt móng</li>
              <li>Xịt thơm dịu nhẹ</li>
            </ul>
            <button className="btn pet-btn-outline btn-full">Đặt lịch nhanh</button>
          </div>

          <div className="pet-card pet-card-package pet-card-package-highlight">
            <h3>Gói Healthy Coat</h3>
            <p className="pet-price">từ 390.000đ</p>
            <ul>
              <li>Tắm dưỡng da &amp; chống rối lông</li>
              <li>Massage thư giãn &amp; chải lông kỹ</li>
              <li>Vệ sinh toàn diện, cắt móng</li>
            </ul>
            <button className="btn pet-btn-primary btn-full">Gợi ý cho bé lần đầu</button>
          </div>

          <div className="pet-card pet-card-package">
            <h3>Gói Styling</h3>
            <p className="pet-price">từ 520.000đ</p>
            <ul>
              <li>Tạo kiểu lông toàn thân</li>
              <li>Tư vấn form mặt &amp; dáng phù hợp</li>
              <li>Lưu hồ sơ để lần sau giữ đúng kiểu</li>
            </ul>
            <button className="btn pet-btn-outline btn-full">Trao đổi với stylist</button>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pet-section">
        <header className="pet-section-header">
          <h2>Album các bé trước &amp; sau grooming</h2>
          <p>Những khoảnh khắc dễ thương sau khi tắm thơm, cắt tỉa gọn gàng.</p>
        </header>
        <div className="pet-gallery">
          <div className="pet-gallery-item pet-gallery-1">
            <span className="pet-gallery-label">Bé Corgi</span>
            <span className="pet-gallery-chip">Tỉa lông mùa hè</span>
          </div>
          <div className="pet-gallery-item pet-gallery-2">
            <span className="pet-gallery-label">Bé Mèo Anh</span>
            <span className="pet-gallery-chip">Spa thư giãn</span>
          </div>
          <div className="pet-gallery-item pet-gallery-3">
            <span className="pet-gallery-label">Bé Poodle</span>
            <span className="pet-gallery-chip">Tạo kiểu teddy</span>
          </div>
          <div className="pet-gallery-item pet-gallery-4">
            <span className="pet-gallery-label">Bé Alaska</span>
            <span className="pet-gallery-chip">Chải lông &amp; tắm dưỡng</span>
          </div>
        </div>
      </section>

      {/* Booking form + testimonials */}
      <section className="pet-section pet-section-split">
        <div className="pet-booking">
          <h2>Đặt lịch cho bé</h2>
          <p>Điền thông tin nhanh, chúng mình sẽ liên hệ xác nhận trong vòng 15 phút trong giờ làm việc.</p>
          <form className="pet-form">
            <div className="pet-form-row">
              <div className="pet-form-field">
                <label htmlFor="ownerName">Tên chủ nuôi</label>
                <input id="ownerName" type="text" placeholder="Ví dụ: Nguyễn Minh Anh" />
              </div>
              <div className="pet-form-field">
                <label htmlFor="phone">Số điện thoại</label>
                <input id="phone" type="tel" placeholder="Số liên hệ để xác nhận lịch" />
              </div>
            </div>
            <div className="pet-form-row">
              <div className="pet-form-field">
                <label htmlFor="petName">Tên &amp; giống thú cưng</label>
                <input id="petName" type="text" placeholder="Bé Miu – Mèo Anh lông ngắn" />
              </div>
              <div className="pet-form-field">
                <label htmlFor="package">Gói mong muốn</label>
                <select id="package">
                  <option>Chưa rõ, cần tư vấn</option>
                  <option>Gói Basic</option>
                  <option>Gói Healthy Coat</option>
                  <option>Gói Styling</option>
                </select>
              </div>
            </div>
            <div className="pet-form-field">
              <label htmlFor="time">Thời gian mong muốn</label>
              <input id="time" type="text" placeholder="Ví dụ: Chiều thứ 7 tuần này" />
            </div>
            <div className="pet-form-field">
              <label htmlFor="note">Ghi chú thêm cho bé (nếu có)</label>
              <textarea
                id="note"
                rows={3}
                placeholder="Tính cách, thói quen, lưu ý sức khoẻ hoặc tiền sử da lông..."
              />
            </div>
            <button type="button" className="btn pet-btn-primary btn-full">
              Gửi yêu cầu đặt lịch
            </button>
            <p className="pet-form-note">Không thu bất kỳ khoản phí nào cho đến khi hoàn tất dịch vụ tại spa.</p>
          </form>
        </div>

        <div className="pet-testimonials">
          <h2>Cảm nhận từ các sen</h2>
          <div className="pet-testimonial-list">
            <article className="pet-card pet-testimonial">
              <p className="pet-testimonial-quote">
                “Bé Corgi nhà mình rất sợ nước, nhưng ở đây các bạn cho làm quen từ từ nên bé không hề hoảng, tắm xong còn
                chạy vòng vòng khoe bộ lông mới.”
              </p>
              <p className="pet-testimonial-meta">— Thúy An &amp; bé Bơ</p>
            </article>
            <article className="pet-card pet-testimonial">
              <p className="pet-testimonial-quote">
                “Mèo thì khó tính mà sau buổi spa về vẫn ngoan, lông mượt, thơm nhẹ. Mình thích nhất là được tư vấn lịch chải
                lông ở nhà rất chi tiết.”
              </p>
              <p className="pet-testimonial-meta">— Anh Quân &amp; bé Miu</p>
            </article>
            <article className="pet-card pet-testimonial">
              <p className="pet-testimonial-quote">
                “Điểm cộng lớn là chụp hình trước – sau gửi lại cho chủ. Nhìn bé khác hẳn, rất sạch sẽ mà vẫn giữ đúng dáng
                ban đầu, không bị cắt quá tay.”
              </p>
              <p className="pet-testimonial-meta">— Chị Hạnh &amp; bé Momo</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PetGroomingPage

