import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TheoDoi() {
  const [nhanViens, setNhanViens] = useState([]);
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [filterByMaNhanVien, setFilterByMaNhanVien] = useState('');
  const [filterByDate, setFilterByDate] = useState('');
  const [filterByCa, setFilterByCa] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  useEffect(() => {
    const storedNhanViens = JSON.parse(localStorage.getItem('nhanViens'));
    if (storedNhanViens) {
      setNhanViens(storedNhanViens);
    }

    const storedAttendanceRecords = JSON.parse(localStorage.getItem('attendanceRecords'));
    if (storedAttendanceRecords) {
      setAttendanceRecords(storedAttendanceRecords);
    }

    const storedLeaveRequests = JSON.parse(localStorage.getItem('danhSachNghiPhep')) || [];
    const approvedLeaveRequests = storedLeaveRequests.filter(request => request.trangThai === 'Đã Duyệt');
    setLeaveRequests(approvedLeaveRequests);
  }, []);

  useEffect(() => {
    const combinedRecords = [
      ...attendanceRecords.map(record => ({ ...record, nghiPhep: 'Không' })),
      ...leaveRequests.map(request => ({
        maNhanVien: request.maNhanVien,
        thoiGian: request.ngayNghiPhep,
        caLam: request.ca,
        nghiPhep: 'Có'
      }))
    ];

    // Apply filters
    let filtered = combinedRecords;
    if (filterByMaNhanVien) {
      filtered = filtered.filter(record => record.maNhanVien === filterByMaNhanVien);
    }
    if (filterByDate) {
      filtered = filtered.filter(record => record.thoiGian === filterByDate);
    }
    if (filterByCa) {
      filtered = filtered.filter(record => record.caLam === filterByCa);
    }
    setFilteredRecords(filtered);
  }, [attendanceRecords, leaveRequests, filterByMaNhanVien, filterByDate, filterByCa]);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredRecords.slice(indexOfFirstRecord, indexOfLastRecord);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredRecords.length / recordsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <h1 style={{ borderBottom: '4px solid black' }}>Theo Dõi Thời Gian Làm</h1>
      <div style={{ marginTop: '30px', marginBottom: '30px' }}>
        <div style={{ display: 'flex', columnGap: '10px' }}>
          <select value={filterByMaNhanVien} onChange={(e) => setFilterByMaNhanVien(e.target.value)}>
            <option value=''>-- Chọn Mã Nhân Viên --</option>
            {nhanViens.map(nv => (
              <option key={nv.maNhanVien} value={nv.maNhanVien}>{nv.maNhanVien}</option>
            ))}
          </select>
          <select value={filterByCa} onChange={(e) => setFilterByCa(e.target.value)}>
            <option value=''>-- Chọn Ca --</option>
            <option value='Ca Sáng'>Ca Sáng</option>
            <option value='Ca Trưa'>Ca Trưa</option>
            <option value='Ca Chiều'>Ca Chiều</option>
            <option value='Ca Tối'>Ca Tối</option>
            <option value='Ca Đêm'>Ca Đêm</option>
          </select>
          <input type='date' value={filterByDate} onChange={(e) => setFilterByDate(e.target.value)} />
        </div>
        <table style={{ width: '100%', textAlign: 'center' }}>
          <thead style={{ height: '60px' }}>
            <tr>
              <th>STT</th>
              <th>Họ Và Tên</th>
              <th>Mã Nhân Viên</th>
              <th>Thời Gian</th>
              <th>Ca Làm</th>
              <th>Nghỉ Phép</th>
            </tr>
          </thead>
          <tbody>
            {currentRecords.map((record, index) => (
                <tr key={`${record.maNhanVien}-${record.thoiGian}-${record.caLam}`}>
                <td>{indexOfFirstRecord + index + 1}</td>
                <td>{nhanViens.find(nv => nv.maNhanVien === record.maNhanVien)?.hoTen}</td>
                <td>{record.maNhanVien}</td>
                <td>{record.thoiGian}</td>
                <td>{record.caLam}</td>
                <td>{record.nghiPhep}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <ul className='pagination' style={{ display: 'flex', justifyContent: 'center' }}>
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
