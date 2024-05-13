// XoaNhanVien.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function XoaNhanVien({ danhSachNhanVien, onXoaNhanVien }) {
  const [nhanVienDuocChon, setNhanVienDuocChon] = useState([]);

  const handleCheckboxChange = (index) => {
    const updatedNhanVienDuocChon = [...nhanVienDuocChon];
    if (updatedNhanVienDuocChon.includes(index)) {
      updatedNhanVienDuocChon.splice(updatedNhanVienDuocChon.indexOf(index), 1);
    } else {
      updatedNhanVienDuocChon.push(index);
    }
    setNhanVienDuocChon(updatedNhanVienDuocChon);
  };

  const handleXoa = () => {
    const updatedDanhSachNhanVien = danhSachNhanVien.filter((_, index) => !nhanVienDuocChon.includes(index));
    onXoaNhanVien(updatedDanhSachNhanVien);
    setNhanVienDuocChon([]);
  };

  return (
    <div>
      <h1 style={{ borderBottom: '4px solid black' }}>Xoá Nhân Viên</h1>
      <div style={{ marginTop: '30px', marginBottom: '30px' }}>
        <table style={{ width: '100%', textAlign: 'center' }}>
          <thead style={{ height: '60px' }}>
            <tr>
              <th>STT</th>
              <th>Họ Và Tên</th>
              <th>Mã Nhân Viên</th>
              <th>Chức Vụ</th>
              <th>Quê Quán</th>
              <th>Xoá</th>
            </tr>
          </thead>
          <tbody>
            {danhSachNhanVien.map((nhanVien, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{nhanVien.hoTen}</td>
                <td>{nhanVien.maNhanVien}</td>
                <td>{nhanVien.chucVu}</td>
                <td>{nhanVien.queQuan}</td>
                <td>
                  <input type='checkbox' onChange={() => handleCheckboxChange(index)} />
                </td>
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
      <div className='form-btn'>
        <button onClick={handleXoa}>Xóa</button>
      </div>
    </div>
  );
}
