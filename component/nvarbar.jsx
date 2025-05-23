import React, { useState } from 'react';

export default function Navbar() {
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
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-4">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src="https://th.bing.com/th/id/OIP.77dgISHWSmlAGTmDFcrp3QAAAA?cb=iwc2&rs=1&pid=ImgDetMain"
            alt="Logo"
            style={{ height: '40px', marginRight: '10px' }}
          />
          <span className="fw-bold">Blood Donation</span>
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Trang Chủ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/donate">Hiến Máu</a>
            </li>
            <li className="nav-item">
              <button 
                className="btn btn-outline-danger fw-bold"
                onClick={handleLoginClick}
              >
                Đăng nhập
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Modal đăng nhập */}
      {showLoginForm && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Đăng Nhập</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={handleCloseLoginForm}
                ></button>
              </div>
              <div className="modal-body">
                <div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Gmail</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={loginData.email}
                      onChange={handleLoginInputChange}
                      placeholder="Nhập địa chỉ Gmail của bạn"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Mật khẩu</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={loginData.password}
                      onChange={handleLoginInputChange}
                      placeholder="Nhập mật khẩu"
                    />
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="rememberMe" />
                      <label className="form-check-label" htmlFor="rememberMe">
                        Ghi nhớ đăng nhập
                      </label>
                    </div>
                    <a href="#" className="text-decoration-none">Quên mật khẩu?</a>
                  </div>
                  <div className="d-grid gap-2">
                    <button 
                      type="button" 
                      className="btn btn-danger"
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
                <hr />
                <div className="text-center">
                  <p className="mb-2">Chưa có tài khoản?</p>
                  <button 
                    className="btn btn-outline-primary"
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

      {/* Modal đăng ký */}
      {showRegisterForm && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Đăng Ký Tài Khoản</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={handleCloseRegisterForm}
                ></button>
              </div>
              <div className="modal-body">
                <div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="fullName" className="form-label">Họ và tên *</label>
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
                      <label htmlFor="registerEmail" className="form-label">Gmail *</label>
                      <input
                        type="email"
                        className="form-control"
                        id="registerEmail"
                        name="email"
                        value={registerData.email}
                        onChange={handleRegisterInputChange}
                        placeholder="Nhập địa chỉ Gmail"
                      />
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="registerPassword" className="form-label">Mật khẩu *</label>
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
                      <label htmlFor="confirmPassword" className="form-label">Xác nhận mật khẩu *</label>
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
                      <label htmlFor="phone" className="form-label">Số điện thoại</label>
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
                      <label htmlFor="bloodType" className="form-label">Nhóm máu</label>
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
                    <label htmlFor="address" className="form-label">Địa chỉ</label>
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

                  <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" id="agreeTerms" />
                    <label className="form-check-label" htmlFor="agreeTerms">
                      Tôi đồng ý với <a href="#" className="text-decoration-none">điều khoản sử dụng</a> và <a href="#" className="text-decoration-none">chính sách bảo mật</a>
                    </label>
                  </div>

                  <div className="d-grid gap-2">
                    <button 
                      type="button" 
                      className="btn btn-primary"
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
                <hr />
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

      {/* Bootstrap CSS CDN */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
    </>
  );
}