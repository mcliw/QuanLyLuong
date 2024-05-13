import React from 'react';
import { Link } from 'react-router-dom';

export default function ThayDoi() {
  return (
    <div>
      <h1 style={{ borderBottom: '4px solid black' }}>Thay Đổi Thông Tin Thuế</h1>
      <div style={{ marginTop: '30px', marginBottom: '30px' }}>
        <table style={{ width: '100%', textAlign: 'center' }}>
          <thead style={{ height: '60px' }}>
            <tr>
              <th>Bậc</th>
              <th>Thu Nhập Tháng</th>
              <th>Số Thuế Phải Nộp</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <button style={{ border: 'none', backgroundColor: 'transparent', fontSize: '20px' }}>+</button> TN = 5tr{' '}
                <button style={{ border: 'none', backgroundColor: 'transparent', fontSize: '20px' }}>-</button>
              </td>
              <td>TN x 5%</td>
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
