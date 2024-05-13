import React from 'react';
import { Link } from 'react-router-dom';

export default function TheoDoi() {
  return (
    <div>
      <h1 style={{ borderBottom: '4px solid black' }}>Theo Dõi Thời Gian Làm</h1>
      <div style={{ marginTop: '30px', marginBottom: '30px' }}>
        <div style={{ display: 'flex', columnGap: '10px' }}>
          <input type='date' />
          <select name='' id=''>
            <option value=''>-- Tất Cả Ca --</option>
          </select>
          <select name='' id=''>
            <option value=''>-- Tất Cả Nhân Viên --</option>
          </select>
        </div>
        <table style={{ width: '100%', textAlign: 'center' }}>
          <thead style={{ height: '60px' }}>
            <tr>
              <th>STT</th>
              <th>Họ Và Tên</th>
              <th>Mã Nhân Viên</th>
              <th>Ca Làm</th>
              <th>Giờ Vào</th>
              <th>Giờ Ra</th>
              <th>Nghỉ Phép</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Nguyễn Thanh Huy</td>
              <td>A5341</td>
              <td>Sáng</td>
              <td>7:04</td>
              <td>7:04</td>
              <td>Có</td>
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
