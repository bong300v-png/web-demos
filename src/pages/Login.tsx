import '../App.css'

function LoginPage() {
  return (
    <main className="section auth-section">
      <div className="auth-card">
        <h1>Đăng nhập</h1>
        <p className="auth-subtitle">
          Đây là trang đăng nhập demo. Form chỉ để minh họa giao diện, chưa kết nối hệ thống tài khoản.
        </p>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-field">
            <label htmlFor="email">Email đăng nhập</label>
            <input id="email" type="email" placeholder="you@company.com" />
          </div>
          <div className="form-field">
            <label htmlFor="password">Mật khẩu</label>
            <input id="password" type="password" placeholder="••••••••" />
          </div>
          <button type="submit" className="btn btn-primary btn-full" disabled>
            Đăng nhập (demo – không gửi được)
          </button>
          <p className="form-note">
            Khi triển khai thật, phần này sẽ kết nối với hệ thống auth (email, SSO, OAuth...) theo yêu cầu.
          </p>
        </form>
      </div>
    </main>
  )
}

export default LoginPage

