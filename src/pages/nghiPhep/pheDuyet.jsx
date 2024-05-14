import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PheDuyet() {
  const [requests, setRequests] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const requestsPerPage = 10;

  useEffect(() => {
    const storedRequests = JSON.parse(localStorage.getItem('danhSachNghiPhep')) || [];
    setRequests(storedRequests);
  }, []);

  const handleApproval = (id, status) => {
    const updatedRequests = requests.map(request => 
      request.id === id ? { ...request, trangThai: status } : request
    );
    setRequests(updatedRequests);
    localStorage.setItem('danhSachNghiPhep', JSON.stringify(updatedRequests));
  };

  const handleDelete = (id) => {
    const updatedRequests = requests.filter(request => request.id !== id);
    setRequests(updatedRequests);
    localStorage.setItem('danhSachNghiPhep', JSON.stringify(updatedRequests));
  };

  // Get current requests
  const indexOfLastRequest = currentPage * requestsPerPage;
  const indexOfFirstRequest = indexOfLastRequest - requestsPerPage;
  const currentRequests = requests.slice(indexOfFirstRequest, indexOfLastRequest);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Get total page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(requests.length / requestsPerPage); i++) {
    pageNumbers.push(i);
  }

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
              <th>Ngày Nghỉ Phép</th>
              <th>Ca</th>
              <th>Duyệt</th>
              <th>Trạng Thái</th>
              <th>Xóa Đơn</th>
            </tr>
          </thead>
          <tbody>
            {currentRequests.map((request, index) => (
              <tr key={request.id}>
                <td>{indexOfFirstRequest + index + 1}</td>
                <td>{request.hoTen}</td>
                <td>{request.maNhanVien}</td>
                <td>{request.lyDo}</td>
                <td>{request.ngayNghiPhep}</td>
                <td>{request.ca}</td>
                <td>
                  <input
                    type='checkbox'
                    checked={request.trangThai === 'Đã Duyệt'}
                    onChange={e => handleApproval(request.id, e.target.checked ? 'Đã Duyệt' : 'Không Được Duyệt')}
                  />
                </td>
                <td>{request.trangThai}</td>
                <td>
                  <button onClick={() => handleDelete(request.id)}>Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='pagination' style={{ display: 'flex', justifyContent: 'center' }}>
        <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
          {pageNumbers.map(number => (
            <li key={number} className={number === currentPage ? 'active' : ''} style={{ margin: '0 5px' }}>
              <Link onClick={() => paginate(number)} to='#'>
                {number}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
