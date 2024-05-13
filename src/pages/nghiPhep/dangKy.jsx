import React from 'react';

export default function DangKy() {
  return (
    <div>
      <h1 style={{ borderBottom: '4px solid black' }}>Đăng Ký Nghỉ Phép</h1>
      <div className='form-input'>
        <input type='text' placeholder='Họ Và Tên' />
      </div>
      <div className='form-input'>
        <input type='text' placeholder='Mã Nhân Viên' />
      </div>
      <div className='form-input'>
        <input type='text' placeholder='Lý Do' />
      </div>
      <div className='form-input'>
        <input type='text' placeholder='Ngày Bắt Đầu' />
      </div>
      <div className='form-input'>
        <input type='text' placeholder='Ngày Kết Thúc' />
      </div>
      <div className='form-btn'>
        <button>Cập Nhật</button>
      </div>
    </div>
  );
}
