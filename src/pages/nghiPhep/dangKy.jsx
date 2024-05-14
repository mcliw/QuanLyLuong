import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function DangKy() {
  const [hoTen, setHoTen] = useState('');
  const [maNhanVien, setMaNhanVien] = useState('');
  const [lyDo, setLyDo] = useState('');
  const [ngayNghiPhep, setNgayNghiPhep] = useState(null);
  const [ca, setCa] = useState('');

  const handleSubmit = () => {
    const newRequest = {
      id: Date.now(),
      hoTen,
      maNhanVien,
      lyDo,
      ngayNghiPhep: ngayNghiPhep ? ngayNghiPhep.toISOString().split('T')[0] : '',
      ca,
      trangThai: ''
    };

    const existingRequests = JSON.parse(localStorage.getItem('danhSachNghiPhep')) || [];
    existingRequests.push(newRequest);
    localStorage.setItem('danhSachNghiPhep', JSON.stringify(existingRequests));

    setHoTen('');
    setMaNhanVien('');
    setLyDo('');
    setNgayNghiPhep(null);
    setCa('');
  };

  return (
    <div>
      <h1 style={{ borderBottom: '4px solid black' }}>Đăng Ký Nghỉ Phép</h1>
      <div className='form-input'>
        <input
          type='text'
          placeholder='Họ Và Tên'
          value={hoTen}
          onChange={(e) => setHoTen(e.target.value)}
        />
      </div>
      <div className='form-input'>
        <input
          type='text'
          placeholder='Mã Nhân Viên'
          value={maNhanVien}
          onChange={(e) => setMaNhanVien(e.target.value)}
        />
      </div>
      <div className='form-input'>
        <input
          type='text'
          placeholder='Lý Do'
          value={lyDo}
          onChange={(e) => setLyDo(e.target.value)}
        />
      </div>
      <div className='form-input'>
        <DatePicker
          selected={ngayNghiPhep}
          onChange={(date) => setNgayNghiPhep(date)}
          dateFormat='yyyy/MM/dd'
          placeholderText='Ngày Nghỉ Phép'
        />
      </div>
      <div className='form-input'>
        <div>
          <label>
            <input
              type='radio'
              value='Ca Sáng'
              checked={ca === 'Ca Sáng'}
              onChange={(e) => setCa(e.target.value)}
            />
            Ca Sáng
          </label>
          <label>
            <input
              type='radio'
              value='Ca Trưa'
              checked={ca === 'Ca Trưa'}
              onChange={(e) => setCa(e.target.value)}
            />
            Ca Trưa
          </label>
          <label>
            <input
              type='radio'
              value='Ca Chiều'
              checked={ca === 'Ca Chiều'}
              onChange={(e) => setCa(e.target.value)}
            />
            Ca Chiều
          </label>
          <label>
            <input
              type='radio'
              value='Ca Tối'
              checked={ca === 'Ca Tối'}
              onChange={(e) => setCa(e.target.value)}
            />
            Ca Tối
          </label>
          <label>
            <input
              type='radio'
              value='Ca Đêm'
              checked={ca === 'Ca Đêm'}
              onChange={(e) => setCa(e.target.value)}
            />
            Ca Đêm
          </label>
        </div>
      </div>
      <div className='form-btn'>
        <button onClick={handleSubmit}>Cập Nhật</button>
      </div>
    </div>
  );
}
