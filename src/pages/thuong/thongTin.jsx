import React from 'react';
import { Link } from 'react-router-dom';

export default function ThongTin() {
  return (
    <div>
      <h1 style={{ borderBottom: '4px solid black' }}>XXem Thông Tin Về Thưởng</h1>
      <div style={{ marginTop: '30px', marginBottom: '30px' }}>
        <span>Chọn Nhân Viên:</span>
        <select name='' id=''>
          <option value=''>-- Tất Cả Nhân Viên --</option>
        </select>
        <table style={{ width: '100%', textAlign: 'center' }}>
          <thead style={{ height: '60px' }}>
            <tr>
              <th>STT</th>
              <th>Tên Thưởng</th>
              <th>Đơn Giá</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Hoa Hồng</td>
              <td>3.3% Lương</td>
            </tr>
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
    </div>
  );
}
