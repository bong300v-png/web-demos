import '../../App.css'

function CryptoWalletLanding() {
  return (
    <div className="crypto-page">
      <header className="crypto-hero">
        <div className="crypto-hero-badge">Web Pro • Crypto Wallet</div>
        <h1 className="crypto-hero-title">Ví crypto đa chuỗi, bảo mật chuẩn native</h1>
        <p className="crypto-hero-subtitle">
          Một landing page demo cho sản phẩm ví crypto hiện đại: dark mode, glassmorphism, tối ưu cho cộng đồng
          Web3 và nhà đầu tư nghiêm túc.
        </p>

        <div className="crypto-hero-actions">
          <button className="btn btn-primary crypto-btn-main">Tải ứng dụng cho Android</button>
          <button className="btn crypto-btn-secondary">Tải cho iOS</button>
          <button className="btn crypto-btn-outline">Mở bản Web</button>
        </div>

        <div className="crypto-hero-metadata">
          <div className="crypto-chip">Non-custodial • Bạn giữ private key</div>
          <div className="crypto-chip">Multi-chain: BTC, ETH, Solana, EVM chain</div>
          <div className="crypto-chip">Ledger / Trezor ready</div>
        </div>
      </header>

      <main className="crypto-main">
        <section className="crypto-section crypto-section-grid">
          <div className="crypto-section-text">
            <h2>Giao diện dark glassmorphism, sinh ra cho Web3</h2>
            <p>
              Thiết kế tối ưu cho môi trường crypto: nền tối, khối kính mờ, màu accent neon, mọi thứ được sắp xếp
              để vừa đẹp vừa dễ đọc số liệu giao dịch.
            </p>
            <ul className="crypto-feature-list">
              <li>Card số dư đa chuỗi với gradient mềm, bo tròn, đổ bóng mờ.</li>
              <li>Bảng giao dịch theo thời gian thực, nhấn mạnh số lượng và phí gas.</li>
              <li>Thanh điều hướng dưới thân thiện mobile, icon crypto-native.</li>
            </ul>
          </div>

          <div className="crypto-section-preview">
            <div className="crypto-phone-frame">
              <div className="crypto-phone-notch" />
              <div className="crypto-phone-screen">
                <div className="crypto-balance-card">
                  <div className="crypto-balance-header">
                    <span className="crypto-label-sm">Tổng tài sản</span>
                    <span className="crypto-chip crypto-chip-soft">Private Mode</span>
                  </div>
                  <div className="crypto-balance-value">$128,420.74</div>
                  <div className="crypto-balance-change positive">+3.82% hôm nay</div>
                  <div className="crypto-balance-row">
                    <span>Ví đa chuỗi</span>
                    <span className="crypto-label-sm">BTC • ETH • SOL • USDT</span>
                  </div>
                </div>

                <div className="crypto-chains-row">
                  <div className="crypto-chain-pill">
                    <span className="crypto-dot btc" />
                    <span>Bitcoin</span>
                    <span className="crypto-chain-value">1.24 BTC</span>
                  </div>
                  <div className="crypto-chain-pill">
                    <span className="crypto-dot eth" />
                    <span>Ethereum</span>
                    <span className="crypto-chain-value">14.8 ETH</span>
                  </div>
                  <div className="crypto-chain-pill">
                    <span className="crypto-dot sol" />
                    <span>Solana</span>
                    <span className="crypto-chain-value">2,480 SOL</span>
                  </div>
                </div>

                <div className="crypto-tx-card">
                  <div className="crypto-tx-header">
                    <span className="crypto-label-sm">Xem trước giao dịch</span>
                    <span className="crypto-chip crypto-chip-outline">Testnet</span>
                  </div>
                  <div className="crypto-tx-row">
                    <div>
                      <div className="crypto-tx-label">Gửi tới</div>
                      <div className="crypto-tx-value">0x3a9f...8C12</div>
                    </div>
                    <div className="crypto-tx-network">Ethereum • Mainnet</div>
                  </div>
                  <div className="crypto-tx-row">
                    <div>
                      <div className="crypto-tx-label">Số lượng</div>
                      <div className="crypto-tx-value">2.5 ETH</div>
                    </div>
                    <div>
                      <div className="crypto-tx-label">Phí gas ước tính</div>
                      <div className="crypto-tx-value crypto-tx-muted">0.0032 ETH (~6.42$)</div>
                    </div>
                  </div>
                  <div className="crypto-tx-footer">
                    <button className="btn crypto-btn-outline-sm">Chỉnh sửa gas</button>
                    <button className="btn btn-primary crypto-btn-confirm">Xác nhận gửi</button>
                  </div>
                </div>

                <div className="crypto-bottom-nav">
                  <button className="crypto-nav-item active">
                    <span className="crypto-nav-icon">◎</span>
                    <span>Wallet</span>
                  </button>
                  <button className="crypto-nav-item">
                    <span className="crypto-nav-icon">⇄</span>
                    <span>Swap</span>
                  </button>
                  <button className="crypto-nav-item">
                    <span className="crypto-nav-icon">☰</span>
                    <span>DApp</span>
                  </button>
                  <button className="crypto-nav-item">
                    <span className="crypto-nav-icon">⚙</span>
                    <span>Settings</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="crypto-section crypto-security">
          <div className="crypto-section-text">
            <h2>Bảo mật nhiều lớp cho tài sản on-chain</h2>
            <p>
              Đây là khu vực demo để truyền thông về các lớp bảo mật của ví: từ seed phrase, hardware wallet cho đến
              cảnh báo giao dịch on-chain.
            </p>
          </div>
          <div className="crypto-security-grid">
            <div className="crypto-security-card">
              <h3>Non-custodial 100%</h3>
              <p>Bạn sở hữu private key, không lưu trữ tập trung trên server của bên thứ ba.</p>
              <ul className="crypto-feature-list">
                <li>Seed phrase 12/24 từ, hướng dẫn backup an toàn.</li>
                <li>Tự động ẩn số dư khi chia sẻ màn hình.</li>
              </ul>
            </div>
            <div className="crypto-security-card">
              <h3>Tích hợp Hardware Wallet</h3>
              <p>Hỗ trợ kết nối Ledger, Trezor và các thiết bị tương thích chuẩn WebHID.</p>
              <ul className="crypto-feature-list">
                <li>Giao dịch lớn yêu cầu xác nhận trên thiết bị cứng.</li>
                <li>Cho phép cấu hình whitelist địa chỉ đáng tin cậy.</li>
              </ul>
            </div>
            <div className="crypto-security-card">
              <h3>Cảnh báo giao dịch thông minh</h3>
              <p>Đưa ví dụ về việc phân tích smart contract và cảnh báo rủi ro trước khi ký.</p>
              <ul className="crypto-feature-list">
                <li>Highlight phần token bị approve vô hạn.</li>
                <li>Đánh dấu DApp có lịch sử rủi ro.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="crypto-section crypto-download">
          <div className="crypto-download-card">
            <div>
              <h2>Sẵn sàng cho bản production của ví crypto của bạn</h2>
              <p>
                Đây là landing page demo, chưa kết nối thật với App Store/Play Store. Khi triển khai thực tế, có thể
                gắn link tải app, deep link tới ví hoặc dẫn vào bản web.
              </p>
              <div className="crypto-download-badges">
                <button className="crypto-store-badge">
                  <span className="crypto-store-icon">▶</span>
                  <span>
                    <span className="crypto-store-label">Có trên</span>
                    <span className="crypto-store-name">Google Play</span>
                  </span>
                </button>
                <button className="crypto-store-badge">
                  <span className="crypto-store-icon"></span>
                  <span>
                    <span className="crypto-store-label">Tải trên</span>
                    <span className="crypto-store-name">App Store</span>
                  </span>
                </button>
              </div>
            </div>
            <div className="crypto-download-meta">
              <div className="crypto-meta-row">
                <span className="crypto-label-sm">Đã tối ưu</span>
                <span>Dark mode • OLED • 120Hz friendly</span>
              </div>
              <div className="crypto-meta-row">
                <span className="crypto-label-sm">Đối tượng</span>
                <span>DeFi user, NFT collector, trader, builder Web3</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default CryptoWalletLanding

