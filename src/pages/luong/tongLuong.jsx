import React from 'react';
import { Link } from 'react-router-dom';

export default function TongLuong() {
  return (
    <div>
      <h1 style={{ borderBottom: '4px solid black' }}>Tổng Lương</h1>
      <div style={{ marginTop: '30px', marginBottom: '30px' }}>
        <span>Chọn Nhân Viên:</span>
        <select name='' id=''>
          <option value=''>-- Tất Cả Nhân Viên --</option>
        </select>
        <table style={{ width: '100%', textAlign: 'center' }}>
          <thead style={{ height: '60px' }}>
            <tr>
              <th>STT</th>
              <th>Tên Mục</th>
              <th>Số Lượng</th>
              <th>Đơn Giá</th>
              <th>Thành Tiền</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Lương cơ bản</td>
              <td>1</td>
              <td>6.200.000</td>
              <td>6.200.000</td>
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
