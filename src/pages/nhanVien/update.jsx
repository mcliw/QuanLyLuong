// CapNhat.jsx
import React, { useState } from 'react';

export default function CapNhat({ onCapNhat }) {
  const [hoTen, setHoTen] = useState('');
  const [maNhanVien, setMaNhanVien] = useState('');
  const [chucVu, setChucVu] = useState('');
  const [queQuan, setQueQuan] = useState('');

  const handleCapNhat = () => {
    // Tạo một đối tượng mới chứa thông tin nhân viên
    const newNhanVien = {
      hoTen,
      maNhanVien,
      chucVu,
      queQuan
    };
    // Gọi hàm onCapNhat và truyền đối tượng mới vào
    onCapNhat(newNhanVien);
  };

  return (
    <>
      <h1 style={{ borderBottom: '4px solid black' }}>Cập Nhật Hồ Sơ Nhân Viên</h1>
      <div className='form-input'>
        <input type='text' value={hoTen} onChange={(e) => setHoTen(e.target.value)} placeholder='Họ và Tên' />
      </div>
      <div className='form-input'>
        <input type='text' value={maNhanVien} onChange={(e) => setMaNhanVien(e.target.value)} placeholder='Mã Nhân Viên' />
      </div>
      <div className='form-input'>
        <input type='text' value={chucVu} onChange={(e) => setChucVu(e.target.value)} placeholder='Chức Vụ' />
      </div>
      <div className='form-input'>
        <input type='text' value={queQuan} onChange={(e) => setQueQuan(e.target.value)} placeholder='Quê Quán' />
      </div>
      <div className='form-btn'>
        <button onClick={handleCapNhat}>Cập Nhật</button>
      </div>
    </>
  );
}
