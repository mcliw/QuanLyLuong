// DanhSach.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import danhSachNhanVien from '../../Backend/NhanVien/DanhSach'; // Import danh sách nhân viên
import CapNhat from './update';
import XoaNhanVien from './delete';

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

  const handleXoaNhanVien = (updatedNhanViens) => {
    setNhanViens(updatedNhanViens);
    localStorage.setItem('nhanViens', JSON.stringify(updatedNhanViens));
  };

  return (
    <>
      <div>
        <XoaNhanVien danhSachNhanVien={nhanViens} onXoaNhanVien={handleXoaNhanVien} />
      </div>
    </>
  );
}
