import React, { useState } from 'react';

// Navbar Component (từ file của bạn)
function Navbar() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [registerData, setRegisterData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    bloodType: '',
    address: ''
  });

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRegisterInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Đăng nhập với:', loginData);
    alert(`Đang đăng nhập với email: ${loginData.email}`);
    setShowLoginForm(false);
    setLoginData({ email: '', password: '' });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      alert('Mật khẩu xác nhận không khớp!');
      return;
    }
    console.log('Đăng ký với:', registerData);
    alert(`Đăng ký thành công cho: ${registerData.fullName}`);
    setShowRegisterForm(false);
    setRegisterData({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      bloodType: '',
      address: ''
    });
  };

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleCloseLoginForm = () => {
    setShowLoginForm(false);
    setLoginData({ email: '', password: '' });
  };

  const handleCloseRegisterForm = () => {
    setShowRegisterForm(false);
    setRegisterData({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      bloodType: '',
      address: ''
    });
  };

  const handleShowRegister = () => {
    setShowLoginForm(false);
    setShowRegisterForm(true);
  };

  const handleShowLogin = () => {
    setShowRegisterForm(false);
    setShowLoginForm(true);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4 fixed-top">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src="https://th.bing.com/th/id/OIP.77dgISHWSmlAGTmDFcrp3QAAAA?cb=iwc2&rs=1&pid=ImgDetMain"
            alt="Logo"
            style={{ height: '40px', marginRight: '10px' }}
          />
          <span className="fw-bold text-danger">Dòng Máu Việt</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#home">Trang Chủ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#donate">Hiến Máu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#locations">Địa Điểm</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#about">Về Chúng Tôi</a>
            </li>
            <li className="nav-item ms-2">
              <button 
                className="btn btn-danger fw-bold px-4"
                onClick={handleLoginClick}
              >
                Đăng nhập
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Login Modal */}
      {showLoginForm && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title fw-bold text-danger">Đăng Nhập</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={handleCloseLoginForm}
                ></button>
              </div>
              <div className="modal-body pt-0">
                <div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-semibold">Email</label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="email"
                      name="email"
                      value={loginData.email}
                      onChange={handleLoginInputChange}
                      placeholder="Nhập địa chỉ email của bạn"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label fw-semibold">Mật khẩu</label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="password"
                      name="password"
                      value={loginData.password}
                      onChange={handleLoginInputChange}
                      placeholder="Nhập mật khẩu"
                    />
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="rememberMe" />
                      <label className="form-check-label" htmlFor="rememberMe">
                        Ghi nhớ đăng nhập
                      </label>
                    </div>
                    <a href="#" className="text-decoration-none text-danger">Quên mật khẩu?</a>
                  </div>
                  <div className="d-grid gap-2">
                    <button 
                      type="button" 
                      className="btn btn-danger btn-lg"
                      onClick={handleLoginSubmit}
                    >
                      Đăng Nhập
                    </button>
                    <button 
                      type="button" 
                      className="btn btn-outline-secondary"
                      onClick={handleCloseLoginForm}
                    >
                      Hủy
                    </button>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="text-center">
                  <p className="mb-2">Chưa có tài khoản?</p>
                  <button 
                    className="btn btn-outline-danger"
                    onClick={handleShowRegister}
                  >
                    Đăng ký ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Register Modal */}
      {showRegisterForm && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title fw-bold text-danger">Đăng Ký Tài Khoản</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={handleCloseRegisterForm}
                ></button>
              </div>
              <div className="modal-body pt-0">
                <div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="fullName" className="form-label fw-semibold">Họ và tên *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        name="fullName"
                        value={registerData.fullName}
                        onChange={handleRegisterInputChange}
                        placeholder="Nhập họ và tên đầy đủ"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="registerEmail" className="form-label fw-semibold">Email *</label>
                      <input
                        type="email"
                        className="form-control"
                        id="registerEmail"
                        name="email"
                        value={registerData.email}
                        onChange={handleRegisterInputChange}
                        placeholder="Nhập địa chỉ email"
                      />
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="registerPassword" className="form-label fw-semibold">Mật khẩu *</label>
                      <input
                        type="password"
                        className="form-control"
                        id="registerPassword"
                        name="password"
                        value={registerData.password}
                        onChange={handleRegisterInputChange}
                        placeholder="Nhập mật khẩu"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="confirmPassword" className="form-label fw-semibold">Xác nhận mật khẩu *</label>
                      <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={registerData.confirmPassword}
                        onChange={handleRegisterInputChange}
                        placeholder="Nhập lại mật khẩu"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="phone" className="form-label fw-semibold">Số điện thoại</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={registerData.phone}
                        onChange={handleRegisterInputChange}
                        placeholder="Nhập số điện thoại"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="bloodType" className="form-label fw-semibold">Nhóm máu</label>
                      <select
                        className="form-select"
                        id="bloodType"
                        name="bloodType"
                        value={registerData.bloodType}
                        onChange={handleRegisterInputChange}
                      >
                        <option value="">Chọn nhóm máu</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="address" className="form-label fw-semibold">Địa chỉ</label>
                    <textarea
                      className="form-control"
                      id="address"
                      name="address"
                      rows="2"
                      value={registerData.address}
                      onChange={handleRegisterInputChange}
                      placeholder="Nhập địa chỉ của bạn"
                    ></textarea>
                  </div>
                  
                  <div className="form-check mb-4">
                    <input className="form-check-input" type="checkbox" id="agreeTerms" />
                    <label className="form-check-label" htmlFor="agreeTerms">
                      Tôi đồng ý với <a href="#" className="text-decoration-none text-danger">điều khoản sử dụng</a> và <a href="#" className="text-decoration-none text-danger">chính sách bảo mật</a>
                    </label>
                  </div>

                  <div className="d-grid gap-2">
                    <button 
                      type="button" 
                      className="btn btn-danger btn-lg"
                      onClick={handleRegisterSubmit}
                    >
                      Đăng Ký
                    </button>
                    <button 
                      type="button" 
                      className="btn btn-outline-secondary"
                      onClick={handleCloseRegisterForm}
                    >
                      Hủy
                    </button>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="text-center">
                  <p className="mb-2">Đã có tài khoản?</p>
                  <button 
                    className="btn btn-outline-danger"
                    onClick={handleShowLogin}
                  >
                    Đăng nhập ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Hero Section Component
function HeroSection() {
  const [showDonationForm, setShowDonationForm] = useState(false);
  const [donationFormData, setDonationFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    bloodType: '',
    weight: '',
    height: '',
    address: '',
    city: '',
    medicalHistory: '',
    lastDonation: '',
    preferredDate: '',
    preferredTime: '',
    preferredLocation: '',
    emergencyContact: '',
    emergencyPhone: '',
    hasChronicDisease: false,
    isTakingMedication: false,
    hasRecentSurgery: false,
    agreesToTerms: false
  });

  const handleDonationInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDonationFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!donationFormData.agreesToTerms) {
      alert('Vui lòng đồng ý với các điều khoản và điều kiện!');
      return;
    }

    if (!donationFormData.fullName || !donationFormData.email || !donationFormData.phone) {
      alert('Vui lòng điền đầy đủ thông tin bắt buộc!');
      return;
    }

    // Calculate age
    const today = new Date();
    const birthDate = new Date(donationFormData.dateOfBirth);
    const age = today.getFullYear() - birthDate.getFullYear();
    
    if (age < 18 || age > 60) {
      alert('Tuổi hiến máu phải từ 18 đến 60 tuổi!');
      return;
    }

    if (donationFormData.weight && parseInt(donationFormData.weight) < 45) {
      alert('Cân nặng tối thiểu để hiến máu là 45kg!');
      return;
    }

    console.log('Đăng ký hiến máu:', donationFormData);
    alert(`Cảm ơn ${donationFormData.fullName}! Đăng ký hiến máu thành công. Chúng tôi sẽ liên hệ với bạn trong vòng 24h để xác nhận lịch hẹn.`);
    
    setShowDonationForm(false);
    setDonationFormData({
      fullName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      gender: '',
      bloodType: '',
      weight: '',
      height: '',
      address: '',
      city: '',
      medicalHistory: '',
      lastDonation: '',
      preferredDate: '',
      preferredTime: '',
      preferredLocation: '',
      emergencyContact: '',
      emergencyPhone: '',
      hasChronicDisease: false,
      isTakingMedication: false,
      hasRecentSurgery: false,
      agreesToTerms: false
    });
  };

  const handleCloseDonationForm = () => {
    setShowDonationForm(false);
  };

  return (
    <>
      <section id="home" className="hero-section bg-gradient-danger text-white py-5" style={{ marginTop: '80px', background: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)' }}>
        <div className="container py-5">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">
                Hiến Máu Cứu Người
                <br />
                <span className="text-warning">Chia Sẻ Yêu Thương</span>
              </h1>
              <p className="lead mb-4">
                Mỗi lần hiến máu của bạn có thể cứu sống đến 3 người. Hãy tham gia cùng chúng tôi trong sứ mệnh cao quý này.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <button 
                  className="btn btn-warning btn-lg fw-bold px-4"
                  onClick={() => setShowDonationForm(true)}
                >
                  Đăng Ký Hiến Máu
                </button>
                <button className="btn btn-outline-light btn-lg fw-bold px-4">
                  Tìm Hiểu Thêm
                </button>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Blood Donation" 
                className="img-fluid rounded-3 shadow-lg"
                style={{ maxHeight: '500px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Donation Registration Modal */}
      {showDonationForm && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header border-0 pb-0 bg-danger text-white">
                <h4 className="modal-title fw-bold">
                  <i className="fas fa-heart me-2"></i>
                  Đăng Ký Hiến Máu Tình Nguyện
                </h4>
                <button 
                  type="button" 
                  className="btn-close btn-close-white" 
                  onClick={handleCloseDonationForm}
                ></button>
              </div>
              <div className="modal-body p-4">
                <div className="alert alert-info mb-4">
                  <h6 className="fw-bold mb-2">
                    <i className="fas fa-info-circle me-2"></i>
                    Điều kiện hiến máu:
                  </h6>
                  <ul className="mb-0 small">
                    <li>Tuổi từ 18-60, cân nặng tối thiểu 45kg</li>
                    <li>Khỏe mạnh, không mắc bệnh truyền nhiễm</li>
                    <li>Không uống rượu bia 24h trước khi hiến máu</li>
                    <li>Nghỉ ngơi đủ giấc, ăn uống đầy đủ</li>
                  </ul>
                </div>

                <form onSubmit={handleDonationSubmit}>
                  {/* Thông tin cá nhân */}
                  <div className="border rounded p-3 mb-4">
                    <h6 className="fw-bold text-danger mb-3">
                      <i className="fas fa-user me-2"></i>
                      Thông Tin Cá Nhân
                    </h6>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-semibold">Họ và tên *</label>
                        <input
                          type="text"
                          className="form-control"
                          name="fullName"
                          value={donationFormData.fullName}
                          onChange={handleDonationInputChange}
                          placeholder="Nhập họ tên đầy đủ"
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-semibold">Email *</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={donationFormData.email}
                          onChange={handleDonationInputChange}
                          placeholder="Nhập địa chỉ email"
                          required
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <label className="form-label fw-semibold">Số điện thoại *</label>
                        <input
                          type="tel"
                          className="form-control"
                          name="phone"
                          value={donationFormData.phone}
                          onChange={handleDonationInputChange}
                          placeholder="Số điện thoại"
                          required
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label className="form-label fw-semibold">Ngày sinh *</label>
                        <input
                          type="date"
                          className="form-control"
                          name="dateOfBirth"
                          value={donationFormData.dateOfBirth}
                          onChange={handleDonationInputChange}
                          required
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label className="form-label fw-semibold">Giới tính</label>
                        <select
                          className="form-select"
                          name="gender"
                          value={donationFormData.gender}
                          onChange={handleDonationInputChange}
                        >
                          <option value="">Chọn giới tính</option>
                          <option value="male">Nam</option>
                          <option value="female">Nữ</option>
                          <option value="other">Khác</option>
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-8 mb-3">
                        <label className="form-label fw-semibold">Địa chỉ</label>
                        <input
                          type="text"
                          className="form-control"
                          name="address"
                          value={donationFormData.address}
                          onChange={handleDonationInputChange}
                          placeholder="Số nhà, tên đường"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label className="form-label fw-semibold">Thành phố</label>
                        <input
                          type="text"
                          className="form-control"
                          name="city"
                          value={donationFormData.city}
                          onChange={handleDonationInputChange}
                          placeholder="Thành phố"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Thông tin sức khỏe */}
                  <div className="border rounded p-3 mb-4">
                    <h6 className="fw-bold text-danger mb-3">
                      <i className="fas fa-heartbeat me-2"></i>
                      Thông Tin Sức Khỏe
                    </h6>
                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <label className="form-label fw-semibold">Nhóm máu</label>
                        <select
                          className="form-select"
                          name="bloodType"
                          value={donationFormData.bloodType}
                          onChange={handleDonationInputChange}
                        >
                          <option value="">Chọn nhóm máu</option>
                          <option value="A+">A+</option>
                          <option value="A-">A-</option>
                          <option value="B+">B+</option>
                          <option value="B-">B-</option>
                          <option value="AB+">AB+</option>
                          <option value="AB-">AB-</option>
                          <option value="O+">O+</option>
                          <option value="O-">O-</option>
                          <option value="unknown">Chưa biết</option>
                        </select>
                      </div>
                      <div className="col-md-4 mb-3">
                        <label className="form-label fw-semibold">Cân nặng (kg) *</label>
                        <input
                          type="number"
                          className="form-control"
                          name="weight"
                          value={donationFormData.weight}
                          onChange={handleDonationInputChange}
                          placeholder="Cân nặng"
                          min="30"
                          max="200"
                          required
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label className="form-label fw-semibold">Chiều cao (cm)</label>
                        <input
                          type="number"
                          className="form-control"
                          name="height"
                          value={donationFormData.height}
                          onChange={handleDonationInputChange}
                          placeholder="Chiều cao"
                          min="100"
                          max="250"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Lần hiến máu gần nhất</label>
                      <input
                        type="date"
                        className="form-control"
                        name="lastDonation"
                        value={donationFormData.lastDonation}
                        onChange={handleDonationInputChange}
                      />
                      <div className="form-text">Để trống nếu lần đầu hiến máu</div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Tiền sử bệnh (nếu có)</label>
                      <textarea
                        className="form-control"
                        name="medicalHistory"
                        value={donationFormData.medicalHistory}
                        onChange={handleDonationInputChange}
                        rows="2"
                        placeholder="Mô tả các bệnh đã từng mắc hoặc đang điều trị"
                      ></textarea>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="hasChronicDisease"
                            checked={donationFormData.hasChronicDisease}
                            onChange={handleDonationInputChange}
                          />
                          <label className="form-check-label">
                            Có bệnh mãn tính
                          </label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="isTakingMedication"
                            checked={donationFormData.isTakingMedication}
                            onChange={handleDonationInputChange}
                          />
                          <label className="form-check-label">
                            Đang dùng thuốc
                          </label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="hasRecentSurgery"
                            checked={donationFormData.hasRecentSurgery}
                            onChange={handleDonationInputChange}
                          />
                          <label className="form-check-label">
                            Phẫu thuật gần đây
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Thông tin lịch hẹn */}
                  <div className="border rounded p-3 mb-4">
                    <h6 className="fw-bold text-danger mb-3">
                      <i className="fas fa-calendar-alt me-2"></i>
                      Lịch Hẹn Hiến Máu
                    </h6>
                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <label className="form-label fw-semibold">Ngày mong muốn</label>
                        <input
                          type="date"
                          className="form-control"
                          name="preferredDate"
                          value={donationFormData.preferredDate}
                          onChange={handleDonationInputChange}
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label className="form-label fw-semibold">Giờ mong muốn</label>
                        <select
                          className="form-select"
                          name="preferredTime"
                          value={donationFormData.preferredTime}
                          onChange={handleDonationInputChange}
                        >
                          <option value="">Chọn giờ</option>
                          <option value="08:00">08:00 - 09:00</option>
                          <option value="09:00">09:00 - 10:00</option>
                          <option value="10:00">10:00 - 11:00</option>
                          <option value="11:00">11:00 - 12:00</option>
                          <option value="13:00">13:00 - 14:00</option>
                          <option value="14:00">14:00 - 15:00</option>
                          <option value="15:00">15:00 - 16:00</option>
                          <option value="16:00">16:00 - 17:00</option>
                        </select>
                      </div>
                      <div className="col-md-4 mb-3">
                        <label className="form-label fw-semibold">Địa điểm</label>
                        <select
                          className="form-select"
                          name="preferredLocation"
                          value={donationFormData.preferredLocation}
                          onChange={handleDonationInputChange}
                        >
                          <option value="">Chọn địa điểm</option>
                          <option value="central">Bệnh viện Đa khoa Trung ương</option>
                          <option value="hematology">Trung tâm Huyết học Quốc gia</option>
                          <option value="choray">Bệnh viện Chợ Rẫy</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Người liên hệ khẩn cấp */}
                  <div className="border rounded p-3 mb-4">
                    <h6 className="fw-bold text-danger mb-3">
                      <i className="fas fa-phone me-2"></i>
                      Người Liên Hệ Khẩn Cấp
                    </h6>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-semibold">Họ tên</label>
                        <input
                          type="text"
                          className="form-control"
                          name="emergencyContact"
                          value={donationFormData.emergencyContact}
                          onChange={handleDonationInputChange}
                          placeholder="Tên người thân"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-semibold">Số điện thoại</label>
                        <input
                          type="tel"
                          className="form-control"
                          name="emergencyPhone"
                          value={donationFormData.emergencyPhone}
                          onChange={handleDonationInputChange}
                          placeholder="Số điện thoại người thân"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Đồng ý điều khoản */}
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="agreesToTerms"
                      checked={donationFormData.agreesToTerms}
                      onChange={handleDonationInputChange}
                      required
                    />
                    <label className="form-check-label">
                      Tôi xác nhận rằng tất cả thông tin trên là chính xác và đồng ý với{' '}
                      <a href="#" className="text-decoration-none text-danger">điều khoản hiến máu</a> và{' '}
                      <a href="#" className="text-decoration-none text-danger">chính sách bảo mật</a> *
                    </label>
                  </div>

                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button 
                      type="button" 
                      className="btn btn-outline-secondary me-md-2"
                      onClick={handleCloseDonationForm}
                    >
                      Hủy
                    </button>
                    <button 
                      type="submit" 
                      className="btn btn-danger btn-lg px-4"
                    >
                      <i className="fas fa-heart me-2"></i>
                      Đăng Ký Hiến Máu
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Statistics Section
function StatisticsSection() {
  const stats = [
    { number: '15,000+', label: 'Người hiến máu', icon: '👥' },
    { number: '45,000+', label: 'Đơn vị máu thu được', icon: '🩸' },
    { number: '135,000+', label: 'Người được cứu sống', icon: '❤️' },
    { number: '50+', label: 'Điểm hiến máu', icon: '📍' }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row text-center">
          {stats.map((stat, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body py-5">
                  <div className="fs-1 mb-3">{stat.icon}</div>
                  <h3 className="fw-bold text-danger mb-2">{stat.number}</h3>
                  <p className="text-muted mb-0">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Blood Donation Process
function DonationProcess() {
  const steps = [
    {
      step: '01',
      title: 'Đăng Ký',
      description: 'Đăng ký trực tuyến hoặc đến trực tiếp tại các điểm hiến máu',
      icon: '📝'
    },
    {
      step: '02',
      title: 'Khám Sàng Lọc',
      description: 'Kiểm tra sức khỏe tổng quát và thông tin cá nhân',
      icon: '🩺'
    },
    {
      step: '03',
      title: 'Hiến Máu',
      description: 'Quy trình hiến máu an toàn và nhanh chóng chỉ trong 10-15 phút',
      icon: '🩸'
    },
    {
      step: '04',
      title: 'Nghỉ Ngơi',
      description: 'Nghỉ ngơi và thưởng thức đồ ăn nhẹ sau khi hiến máu',
      icon: '☕'
    }
  ];

  return (
    <section id="donate" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-danger mb-3">Quy Trình Hiến Máu</h2>
          <p className="lead text-muted">Quy trình hiến máu đơn giản và an toàn</p>
        </div>
        <div className="row">
          {steps.map((step, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-sm position-relative">
                <div className="position-absolute top-0 start-0 bg-danger text-white px-3 py-1 rounded-bottom fw-bold">
                  {step.step}
                </div>
                <div className="card-body text-center pt-5">
                  <div className="fs-1 mb-3">{step.icon}</div>
                  <h5 className="fw-bold mb-3">{step.title}</h5>
                  <p className="text-muted">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Blood Types Information
function BloodTypesSection() {
  const bloodTypes = [
    { type: 'O-', compatibility: 'Người cho máu toàn năng', color: 'success' },
    { type: 'O+', compatibility: 'Có thể cho nhóm máu dương', color: 'info' },
    { type: 'A-', compatibility: 'Cho A-, A+, AB-, AB+', color: 'warning' },
    { type: 'A+', compatibility: 'Cho A+, AB+', color: 'primary' },
    { type: 'B-', compatibility: 'Cho B-, B+, AB-, AB+', color: 'secondary' },
    { type: 'B+', compatibility: 'Cho B+, AB+', color: 'dark' },
    { type: 'AB-', compatibility: 'Cho AB-, AB+', color: 'danger' },
    { type: 'AB+', compatibility: 'Người nhận máu toàn năng', color: 'success' }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-danger mb-3">Thông Tin Nhóm Máu</h2>
          <p className="lead text-muted">Tìm hiểu về các nhóm máu và khả năng tương thích</p>
        </div>
        <div className="row">
          {bloodTypes.map((blood, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-3">
              <div className={`card border-0 bg-${blood.color} text-white h-100`}>
                <div className="card-body text-center">
                  <h3 className="fw-bold mb-2">{blood.type}</h3>
                  <p className="mb-0 small">{blood.compatibility}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Locations Section
function LocationsSection() {
  const locations = [
    {
      name: 'Bệnh viện Đa khoa Trung ương',
      address: '123 Đường Lê Lợi, Quận 1, TP.HCM',
      hours: '8:00 - 17:00 (Thứ 2 - Chủ nhật)',
      phone: '(028) 3825 2525'
    },
    {
      name: 'Trung tâm Huyết học Quốc gia',
      address: '456 Đường Nguyễn Huệ, Quận 1, TP.HCM',
      hours: '7:30 - 16:30 (Thứ 2 - Thứ 7)',
      phone: '(028) 3829 7070'
    },
    {
      name: 'Bệnh viện Chợ Rẫy',
      address: '201B Đường Nguyễn Chí Thanh, Quận 5, TP.HCM',
      hours: '8:00 - 16:00 (Thứ 2 - Thứ 6)',
      phone: '(028) 3855 4269'
    }
  ];

  return (
    <section id="locations" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-danger mb-3">Địa Điểm Hiến Máu</h2>
          <p className="lead text-muted">Các điểm thu gom máu gần bạn</p>
        </div>
        <div className="row">
          {locations.map((location, index) => (
            <div key={index} className="col-lg-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="fw-bold text-danger mb-3">{location.name}</h5>
                  <div className="mb-2">
                    <i className="fas fa-map-marker-alt text-danger me-2"></i>
                    <span>{location.address}</span>
                  </div>
                  <div className="mb-2">
                    <i className="fas fa-clock text-danger me-2"></i>
                    <span>{location.hours}</span>
                  </div>
                  <div className="mb-3">
                    <i className="fas fa-phone text-danger me-2"></i>
                    <span>{location.phone}</span>
                  </div>
                  <button className="btn btn-outline-danger w-100">
                    Chỉ Đường
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img 
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="About Us" 
              className="img-fluid rounded-3 shadow"
            />
          </div>
          <div className="col-lg-6">
            <h2 className="fw-bold text-danger mb-4">Về Trung Tâm Hiến Máu</h2>
            <p className="mb-4">
              Chúng tôi là tổ chức phi lợi nhuận hàng đầu trong việc vận động hiến máu tình nguyện tại Việt Nam. 
              Với hơn 20 năm kinh nghiệm, chúng tôi đã kết nối hàng triệu người hiến máu với những bệnh nhân cần máu.
            </p>
            <div className="row mb-4">
              <div className="col-6">
                <h4 className="fw-bold text-danger">Sứ Mệnh</h4>
                <p>Cung cấp máu an toàn và đủ để cứu sống các bệnh nhân.</p>
              </div>
              <div className="col-6">
                <h4 className="fw-bold text-danger">Tầm Nhìn</h4>
                <p>Trở thành trung tâm hiến máu hàng đầu khu vực.</p>
              </div>
            </div>
            <button className="btn btn-danger btn-lg">
              Liên Hệ Chúng Tôi
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="d-flex align-items-center mb-3">
              <img
                src="https://th.bing.com/th/id/OIP.77dgISHWSmlAGTmDFcrp3QAAAA?cb=iwc2&rs=1&pid=ImgDetMain"
                alt="Logo"
                style={{ height: '40px', marginRight: '10px' }}
              />
              <span className="fw-bold fs-4">Blood Donation Center</span>
            </div>
            <p className="text-muted">
              Cùng nhau xây dựng cộng đồng hiến máu tình nguyện, mang lại hy vọng cho những người cần máu.
            </p>
          </div>
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">Liên Kết</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#home" className="text-muted text-decoration-none">Trang Chủ</a></li>
              <li className="mb-2"><a href="#donate" className="text-muted text-decoration-none">Hiến Máu</a></li>
              <li className="mb-2"><a href="#locations" className="text-muted text-decoration-none">Địa Điểm</a></li>
              <li className="mb-2"><a href="#about" className="text-muted text-decoration-none">Về Chúng Tôi</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">Thông Tin</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Điều kiện hiến máu</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Câu hỏi thường gặp</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Chính sách bảo mật</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Điều khoản sử dụng</a></li>
            </ul>
          </div>
          <div className="col-lg-3 mb-4">
            <h5 className="fw-bold mb-3">Liên Hệ</h5>
            <div className="mb-2">
              <i className="fas fa-phone me-2"></i>
              <span>Hotline: 1900 123 456</span>
            </div>
            <div className="mb-2">
              <i className="fas fa-envelope me-2"></i>
              <span>info@blooddonation.vn</span>
            </div>
            <div className="mb-3">
              <i className="fas fa-map-marker-alt me-2"></i>
              <span>123 Đường ABC, Quận 1, TP.HCM</span>
            </div>
            <div className="d-flex gap-2">
              <a href="#" className="btn btn-outline-light btn-sm">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="btn btn-outline-light btn-sm">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="btn btn-outline-light btn-sm">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="btn btn-outline-light btn-sm">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0 text-muted">
              © 2024 Blood Donation Center. Tất cả quyền được bảo lưu.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <span className="text-muted">Made with ❤️ for humanity</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Emergency Banner Component
function EmergencyBanner() {
  const [showBanner, setShowBanner] = useState(true);

  if (!showBanner) return null;

  return (
    <div className="alert alert-warning alert-dismissible fade show mb-0 text-center" style={{ borderRadius: 0 }}>
      <strong>🚨 KHẨN CẤP:</strong> Cần gấp nhóm máu O- và AB+. 
      <a href="#donate" className="alert-link fw-bold ms-2">Đăng ký ngay!</a>
      <button 
        type="button" 
        className="btn-close" 
        onClick={() => setShowBanner(false)}
      ></button>
    </div>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Nguyễn Văn Minh",
      role: "Người hiến máu thường xuyên",
      content: "Tôi đã hiến máu hơn 20 lần tại đây. Dịch vụ chuyên nghiệp, nhân viên tận tâm. Cảm ơn vì đã tạo điều kiện cho chúng tôi làm việc tốt.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Trần Thị Hoa",
      role: "Bệnh nhân được cứu sống",
      content: "Nhờ có máu hiến tặng, tôi đã vượt qua ca phẫu thuật khó khăn. Tôi vô cùng biết ơn những người hiến máu tình nguyện.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lê Hoàng Nam",
      role: "Bác sĩ điều trị",
      content: "Chất lượng máu từ trung tâm luôn đảm bảo tiêu chuẩn cao nhất. Điều này rất quan trọng trong việc điều trị bệnh nhân.",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-danger mb-3">Câu Chuyện Chia Sẻ</h2>
          <p className="lead text-muted">Lời cảm ơn từ cộng đồng</p>
        </div>
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-lg-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="text-warning mb-3">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="mb-4 fst-italic">"{testimonial.content}"</p>
                  <div className="d-flex align-items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="rounded-circle me-3"
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    />
                    <div>
                      <h6 className="fw-bold mb-0">{testimonial.name}</h6>
                      <small className="text-muted">{testimonial.role}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// News Section
function NewsSection() {
  const news = [
    {
      title: "Chiến dịch hiến máu mùa hè 2024",
      date: "15/05/2024",
      excerpt: "Tham gia chiến dịch hiến máu lớn nhất trong năm với nhiều ưu đãi hấp dẫn...",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=250&fit=crop"
    },
    {
      title: "Hướng dẫn chăm sóc sau hiến máu",
      date: "10/05/2024",
      excerpt: "Những lưu ý quan trọng để đảm bảo sức khỏe sau khi hiến máu tình nguyện...",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop"
    },
    {
      title: "Kỷ niệm 20 năm thành lập trung tâm",
      date: "05/05/2024",
      excerpt: "Nhìn lại chặng đường 20 năm phát triển và những thành tựu đạt được...",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-danger mb-3">Tin Tức & Sự Kiện</h2>
          <p className="lead text-muted">Cập nhật những thông tin mới nhất</p>
        </div>
        <div className="row">
          {news.map((article, index) => (
            <div key={index} className="col-lg-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <img 
                  src={article.image} 
                  className="card-img-top"
                  alt={article.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <div className="text-muted small mb-2">
                    <i className="fas fa-calendar-alt me-1"></i>
                    {article.date}
                  </div>
                  <h5 className="card-title fw-bold">{article.title}</h5>
                  <p className="card-text text-muted">{article.excerpt}</p>
                  <a href="#" className="btn btn-outline-danger">
                    Đọc thêm <i className="fas fa-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-danger btn-lg">
            Xem Tất Cả Tin Tức
          </button>
        </div>
      </div>
    </section>
  );
}

// Quick Donation Form
function QuickDonationForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    bloodType: '',
    preferredDate: '',
    location: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Quick donation form:', formData);
    alert('Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ sớm nhất.');
    setFormData({
      name: '',
      phone: '',
      bloodType: '',
      preferredDate: '',
      location: ''
    });
  };

  return (
    <section className="py-5 bg-danger text-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="fw-bold mb-3">Đăng Ký Hiến Máu Nhanh</h2>
            <p className="lead mb-4">
              Chỉ cần 2 phút để đăng ký. Chúng tôi sẽ liên hệ và hướng dẫn bạn các bước tiếp theo.
            </p>
            <div className="d-flex align-items-center">
              <div className="bg-white bg-opacity-20 rounded-circle p-3 me-3">
                <i className="fas fa-shield-alt fa-2x"></i>
              </div>
              <div>
                <h5 className="fw-bold mb-1">An Toàn 100%</h5>
                <p className="mb-0">Quy trình hiến máu đạt tiêu chuẩn quốc tế</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card border-0 shadow-lg">
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Họ và tên *"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="tel"
                      className="form-control form-control-lg"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Số điện thoại *"
                      required
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <select
                        className="form-select form-select-lg"
                        name="bloodType"
                        value={formData.bloodType}
                        onChange={handleInputChange}
                      >
                        <option value="">Nhóm máu</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="date"
                        className="form-control form-control-lg"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        placeholder="Ngày mong muốn"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <select
                      className="form-select form-select-lg"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                    >
                      <option value="">Chọn địa điểm</option>
                      <option value="central">Bệnh viện Đa khoa Trung ương</option>
                      <option value="hematology">Trung tâm Huyết học Quốc gia</option>
                      <option value="choray">Bệnh viện Chợ Rẫy</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-warning btn-lg w-100 fw-bold">
                    <i className="fas fa-heart me-2"></i>
                    Đăng Ký Ngay
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main App Component
export default function BloodDonationWebsite() {
  return (
    <div>
      {/* External CSS Links */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
        rel="stylesheet" 
      />
      
      <EmergencyBanner />
      <Navbar />
      <HeroSection />
      <StatisticsSection />
      <DonationProcess />
      <BloodTypesSection />
      <QuickDonationForm />
      <LocationsSection />
      <TestimonialsSection />
      <NewsSection />
      <AboutSection />
      <Footer />
      
      {/* Custom Styles */}
      <style jsx>{`
        .min-vh-75 {
          min-height: 75vh !important;
        }
        
        .bg-gradient-danger {
          background: linear-gradient(135deg, #dc3545 0%, #c82333 100%) !important;
        }
        
        .card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 1rem 3rem rgba(0,0,0,.175) !important;
        }
        
        .btn {
          transition: all 0.3s ease;
        }
        
        .btn:hover {
          transform: translateY(-2px);
        }
        
        .navbar {
          transition: all 0.3s ease;
        }
        
        .hero-section {
          position: relative;
          overflow: hidden;
        }
        
        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.1);
          z-index: 1;
        }
        
        .hero-section > * {
          position: relative;
          z-index: 2;
        }
        
        @media (max-width: 768px) {
          .display-4 {
            font-size: 2.5rem;
          }
        }
        
        .alert {
          animation: slideDown 0.5s ease-out;
        }
        
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}