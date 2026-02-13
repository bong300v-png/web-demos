import '../App.css'

function RegisterPage() {
  return (
    <main className="section auth-section">
      <div className="auth-card">
        <h1>Đăng ký tài khoản (demo)</h1>
        <p className="auth-subtitle">
          Trang này dùng để minh họa flow đăng ký cho khách doanh nghiệp. Form chưa được kích hoạt.
        </p>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="fullname">Họ tên</label>
              <input id="fullname" placeholder="Nguyễn Văn A" />
            </div>
            <div className="form-field">
              <label htmlFor="companyReg">Tên doanh nghiệp</label>
              <input id="companyReg" placeholder="Công ty TNHH ABC" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="emailReg">Email</label>
              <input id="emailReg" type="email" placeholder="you@company.com" />
            </div>
            <div className="form-field">
              <label htmlFor="phoneReg">Số điện thoại</label>
              <input id="phoneReg" placeholder="Số để team liên hệ" />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="goal">Mục tiêu chính của website</label>
            <textarea
              id="goal"
              rows={3}
              placeholder="Giới thiệu doanh nghiệp, nhận form tư vấn, chạy quảng cáo, tuyển dụng..."
            />
          </div>
          <button type="submit" className="btn btn-primary btn-full" disabled>
            Đăng ký (demo – không gửi được)
          </button>
          <p className="form-note">
            Khi triển khai thật, thao tác đăng ký có thể lưu vào CRM hoặc gửi về email chăm sóc khách hàng.
          </p>
        </form>
      </div>
    </main>
  )
}

export default RegisterPage

