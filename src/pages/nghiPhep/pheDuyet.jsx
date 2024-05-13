import React from 'react';
import { Link } from 'react-router-dom';

export default function PheDuyet() {
  return (
    <div>
      <h1 style={{ borderBottom: '4px solid black' }}>Phê Duyệt Nghỉ Phép</h1>
      <div style={{ marginTop: '30px', marginBottom: '30px' }}>
        <table style={{ width: '100%', textAlign: 'center' }}>
          <thead style={{ height: '60px' }}>
            <tr>
              <th>STT</th>
              <th>Họ Và Tên</th>
              <th>Mã Nhân Viên</th>
              <th>Lý Do</th>
              <th>Ngày Bắt Đầu</th>
              <th>Ngày Kết Thúc</th>
              <th>Ngày Nộp</th>
              <th>Duyệt</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Nguyễn Thanh Huy</td>
              <td>A5341</td>
              <td>Nghỉ Ốm</td>
              <td>20/01/2022</td>
              <td>20/01/2022</td>
              <td>20/01/2022</td>
              <td>
                <input type='checkbox' />
              </td>
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
      <div className='form-btn'>
        <button style={{ marginRight: '10px' }}>Duyệt</button>
        <button style={{ backgroundColor: 'red' }}>Từ Chối</button>
      </div>
    </div>
  );
}
