import React from 'react';

export default function TinhThue() {
  return (
    <div>
      <h1 style={{ borderBottom: '4px solid black' }}>Tính Thuế</h1>
      <div className='form-input'>
        <input type='text' placeholder='Thu Nhập Tháng' />
      </div>
      <div className='form-input'>
        <input type='text' placeholder='Lương Đóng Bảo Hiểm' />
      </div>
      <div className='form-input'>
        <input type='text' placeholder='Số Người Phụ Thuộc' />
      </div>
      <p>Số Tiền Thuế Phải Nộp:</p>
      <div className='form-btn'>
        <button>Tính</button>
      </div>
    </div>
  );
}
