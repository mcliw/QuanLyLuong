import React from 'react';
import { Link } from 'react-router-dom';

export default function DangNhap() {
  return (
    <div className='form-wrapper'>
      <div className='form-content'>
        <h1>Đăng Nhập</h1>
        <div className='form-input'>
          <input type='text' placeholder='Tài Khoản' />
        </div>
        <div className='form-input'>
          <input type='password' placeholder='Mật Khẩu' />
        </div>
        <div style={{ textAlign: 'right' }}>
          <Link style={{ color: 'black', textDecoration: 'none' }}>Quên Mật Khẩu?</Link>
        </div>
        <div className='form-btn'>
          <button>Đăng Nhập</button>
        </div>
      </div>
    </div>
  );
}
