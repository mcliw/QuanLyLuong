// DanhSach.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import danhSachNhanVien from '../../Backend/NhanVien/DanhSach'; // Import danh sách nhân viên
import CapNhat from './update';

export default function DanhSach() {
  const [nhanViens, setNhanViens] = useState([]);

  useEffect(() => {
    const storedNhanViens = JSON.parse(localStorage.getItem('nhanViens'));
    if (storedNhanViens) {
      setNhanViens(storedNhanViens);
    } else {
      setNhanViens(danhSachNhanVien);
    }
  }, []);

  const handleCapNhat = (newNhanVien) => {
    const updatedNhanViens = [...nhanViens, newNhanVien];
    setNhanViens(updatedNhanViens);
    localStorage.setItem('nhanViens', JSON.stringify(updatedNhanViens));
  };

  return (
    <>
      <h1 style={{ borderBottom: '4px solid black' }}>Danh Sách Nhân Viên</h1>
      <div style={{ marginTop: '30px', marginBottom: '30px' }}>
        <table style={{ width: '100%', textAlign: 'center' }}>
          <thead style={{ height: '60px' }}>
            <tr>
              <th>STT</th>
              <th>Họ Và Tên</th>
              <th>Mã Nhân Viên</th>
              <th>Chức Vụ</th>
              <th>Quê Quán</th>
            </tr>
          </thead>
          <tbody>
            {nhanViens.map((nhanVien, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{nhanVien.hoTen}</td>
                <td>{nhanVien.maNhanVien}</td>
                <td>{nhanVien.chucVu}</td>
                <td>{nhanVien.queQuan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <ul className='pagination'>
          <li>
            <Link>1</Link>
          </li>
          <li>
            <Link>2</Link>
          </li>
          <li>
            <Link>3</Link>
          </li>
          <li>...</li>
        </ul>
      </div>
    </>
  );
}
