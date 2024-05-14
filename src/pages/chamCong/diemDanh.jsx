import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function DiemDanh() {
  const [nhanViens, setNhanViens] = useState([]);
  const [selectedNhanVien, setSelectedNhanVien] = useState('');
  const [selectedCa, setSelectedCa] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const storedNhanViens = JSON.parse(localStorage.getItem('nhanViens'));
    if (storedNhanViens) {
      setNhanViens(storedNhanViens);
    }

    const storedAttendanceRecords = JSON.parse(localStorage.getItem('attendanceRecords'));
    if (storedAttendanceRecords) {
      setAttendanceRecords(storedAttendanceRecords);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('attendanceRecords', JSON.stringify(attendanceRecords));
  }, [attendanceRecords]);

  const handleDiemDanh = () => {
    if (selectedNhanVien && selectedDate && selectedCa) {
      const newRecord = {
        maNhanVien: selectedNhanVien,
        thoiGian: selectedDate,
        caLam: selectedCa
      };
      setAttendanceRecords([...attendanceRecords, newRecord]);
      setSelectedNhanVien('');
      setSelectedDate('');
      setSelectedCa('');
    }
  };

  const handleDeleteRecord = (index) => {
    const updatedRecords = [...attendanceRecords];
    updatedRecords.splice(index, 1);
    setAttendanceRecords(updatedRecords);
  };

  const indexOfLastRow = currentPage * 10;
  const indexOfFirstRow = indexOfLastRow - 10;
  const currentRows = attendanceRecords.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1 style={{ borderBottom: '4px solid black' }}>Điểm Danh</h1>
      <div style={{ marginTop: '30px', marginBottom: '30px' }}>
        <div style={{ display: 'flex', columnGap: '10px' }}>
          <input
            type='date'
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
          <select
            value={selectedCa}
            onChange={(e) => setSelectedCa(e.target.value)}
          >
            <option value=''>-- Tất Cả Ca --</option>
            <option value='Ca Sáng'>Ca Sáng</option>
            <option value='Ca Trưa'>Ca Trưa</option>
            <option value='Ca Chiều'>Ca Chiều</option>
            <option value='Ca Tối'>Ca Tối</option>
            <option value='Ca Đêm'>Ca Đêm</option>
          </select>
          <select
            value={selectedNhanVien}
            onChange={(e) => setSelectedNhanVien(e.target.value)}
          >
            <option value=''>-- Tất Cả Nhân Viên --</option>
            {nhanViens.map((nhanVien) => (
              <option key={nhanVien.maNhanVien} value={nhanVien.maNhanVien}>
                {nhanVien.maNhanVien}
              </option>
            ))}
          </select>
          <button className='btn' onClick={handleDiemDanh}>
            Điểm Danh
          </button>
        </div>
        <table style={{ width: '100%', textAlign: 'center' }}>
          <thead style={{ height: '60px' }}>
            <tr>
              <th>STT</th>
              <th>Họ Và Tên</th>
              <th>Mã Nhân Viên</th>
              <th>Thời Gian</th>
              <th>Ca Làm</th>
              <th>Xóa</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((record, index) => (
              <tr key={index}>
                <td>{indexOfFirstRow + index + 1}</td>
                <td>{nhanViens.find(nv => nv.maNhanVien === record.maNhanVien)?.hoTen}</td>
                <td>{record.maNhanVien}</td>
                <td>{record.thoiGian}</td>
                <td>{record.caLam}</td>
                <td>
                  <button onClick={() => handleDeleteRecord(index)}>Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ul className='pagination'>
          {Array.from({ length: Math.ceil(attendanceRecords.length / 10) }).map((_, index) => (
            <li key={index}>
              <Link onClick={() => paginate(index + 1)}>{index + 1}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
