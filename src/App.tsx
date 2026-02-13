import './App.css'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import StaticPage from './pages/StaticPage'

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <header className="top-nav">
          <div className="top-nav-left">
            <div className="logo-mark">16</div>
            <div className="logo-text">
              <span className="logo-title">16PAH Web Pro</span>
              <span className="logo-subtitle">Business Landing Collection</span>
            </div>
          </div>
          <nav className="top-nav-links">
            <NavLink to="/" className="top-link">
              Trang chủ
            </NavLink>
            <NavLink to="/services" className="top-link">
              Dịch vụ
            </NavLink>
            <NavLink to="/portfolio" className="top-link">
              Dự án mẫu
            </NavLink>
            <NavLink to="/pricing" className="top-link">
              Bảng giá
            </NavLink>
          </nav>
          <div className="top-nav-actions">
            <NavLink to="/login" className="top-link top-link-muted">
              Đăng nhập
            </NavLink>
            <NavLink to="/register" className="btn btn-primary top-signup">
              Đăng ký demo
            </NavLink>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/services"
            element={
              <StaticPage
                title="Dịch vụ thiết kế Web Pro cho doanh nghiệp"
                subtitle="Các gói thiết kế website giới thiệu, landing page dịch vụ và hệ sinh thái microsite cho thương hiệu."
                items={[
                  'Gói Website doanh nghiệp chuẩn thương hiệu',
                  'Gói Landing page chiến dịch / quảng cáo',
                  'Gói hệ sinh thái microsite cho nhiều sản phẩm/dịch vụ',
                ]}
              />
            }
          />
          <Route
            path="/portfolio"
            element={
              <StaticPage
                title="Một số hướng thiết kế demo cho doanh nghiệp"
                subtitle="Bộ sưu tập layout demo để bạn hình dung nhanh phong cách giao diện phù hợp với thương hiệu."
                items={[
                  'Layout sáng tối, tone màu theo nhận diện thương hiệu',
                  'Mẫu tập trung giới thiệu năng lực & đội ngũ',
                  'Mẫu ưu tiên case study, dự án tiêu biểu và số liệu',
                ]}
              />
            }
          />
          <Route
            path="/pricing"
            element={
              <StaticPage
                title="Định hướng ngân sách dự kiến cho Website doanh nghiệp"
                subtitle="Khoảng giá tham khảo để bạn chuẩn bị ngân sách, chưa phải báo giá chính thức."
                items={[
                  'Gói cơ bản: landing page giới thiệu 1–3 section nội dung chính',
                  'Gói tiêu chuẩn: 1 trang chủ + 3–5 trang nội dung con (dịch vụ, dự án, liên hệ...)',
                  'Gói nâng cao: tuỳ biến theo brief, tích hợp thêm form, blog, nhiều ngôn ngữ...',
                ]}
              />
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>

        <footer className="footer">
          <p>© {new Date().getFullYear()} 16PAH Web Pro · Demo gói Website Doanh nghiệp.</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
