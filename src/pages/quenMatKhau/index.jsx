import React from 'react';
import { Link } from 'react-router-dom';

export default function QuenMatKhau() {
  return (
    <div className='form-wrapper'>
      <div className='form-content'>
        <h1>Quên Mật Khẩu</h1>
        <div className='form-input'>
          <input type='text' placeholder='Tài Khoản' />
        </div>
        <div className='form-input'>
          <input type='text' placeholder='Mã Nhân Viên' />
        </div>
        <div className='form-input'>
          <input type='password' placeholder='Mật Khẩu Mới' />
        </div>
        <div className='form-btn'>
          <button>Đổi Mật Khẩu</button>
        </div>
      </div>
    </div>
  );
}
