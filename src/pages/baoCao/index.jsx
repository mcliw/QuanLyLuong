import React from 'react';
import { Link } from 'react-router-dom';

export default function BaoCao() {
  return (
    <>
      <div>
        <h1 style={{ borderBottom: '4px solid black' }}>Báo Cáo</h1>
        <div style={{ marginTop: '30px', marginBottom: '30px' }}>
          <table style={{ width: '100%', textAlign: 'center' }}>
            <thead style={{ height: '60px' }}>
              <tr>
                <th>STT</th>
                <th>Họ Và Tên</th>
                <th>Mã Nhân Viên</th>
                <th>Tạo Báo Cáo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Nguyễn Văn An</td>
                <td>A2123</td>
                <td>
                  <div className='form-btn'>
                    <button>Tạo Báo Cáo</button>
                  </div>
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
      </div>
    </>
  );
}
