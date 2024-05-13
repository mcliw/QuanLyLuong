export const menuItems = [
  {
    title: 'Hồ sơ nhân viên',
    type: 'sub',
    children: [
      {
        path: '/nhan-vien/danh-sach',
        title: 'Danh sách nhân viên',
      },
      {
        path: '/nhan-vien/cap-nhat',
        title: 'Cập nhật hồ sơ nhân viên',
      },
      {
        path: '/nhan-vien/xoa',
        title: 'Xoá nhân viên',
      },
    ],
  },
  {
    title: 'Nghỉ phép',
    type: 'sub',
    children: [
      {
        path: '/nghi-phep/dang-ki',
        title: 'Đăng ký nghỉ phép',
      },
      {
        path: '/nghi-phep/phe-duyet',
        title: 'Phê duyệt nghỉ phép',
      },
    ],
  },
  {
    title: 'Chấm công',
    type: 'sub',
    children: [
      {
        path: '/cham-cong/diem-danh',
        title: 'Điểm danh',
      },
      {
        path: '/cham-cong/theo-doi',
        title: 'Theo Dõi Thời Gian Làm',
      },
    ],
  },
  {
    title: 'Phụ Cấp',
    type: 'sub',
    children: [
      {
        path: '/phu-cap/thong-tin',
        title: 'Thông Tin Phụ Cấp',
      },
      {
        path: '/phu-cap/dieu-chinh',
        title: 'Điều Chinh Phụ Cấp',
      },
    ],
  },
  {
    title: 'Phúc Lợi Xã Hội',
    type: 'sub',
    children: [
      {
        path: '/phuc-loi-xa-hoi/thong-tin',
        title: 'Thông Tin Phúc Lợi Xã Hội',
      },
      {
        path: '/phuc-loi-xa-hoi/dieu-chinh',
        title: 'Điều Chinh PLXH',
      },
    ],
  },
  {
    title: 'Thuế',
    type: 'sub',
    children: [
      {
        path: '/thue/tinh-thue',
        title: 'Tính Thuế',
      },
      {
        path: '/thue/thong-tin',
        title: 'Xem Thông Tin Thuế',
      },
      {
        path: '/thue/thay-doi',
        title: 'Thay Đổi Thông Tin Thuế',
      },
    ],
  },
  {
    title: 'Thưởng',
    type: 'sub',
    children: [
      {
        path: '/thuong/tinh-thuong',
        title: 'Tính Thưởng',
      },
      {
        path: '/thuong/dieu-chinh',
        title: 'Điều Chinh Thưởng',
      },
      {
        path: '/thuong/thong-tin',
        title: 'Xem Thông Tin Về Thưởng',
      },
    ],
  },
  {
    title: 'Lương',
    type: 'sub',
    children: [
      {
        path: '/luong/tinh-luong',
        title: 'Tính Lương Cơ Bản',
      },
      {
        path: '/luong/tong-luong',
        title: 'Tính Tổng Lương',
      },
    ],
  },
  {
    title: 'Báo Cáo',
    type: 'link',
    path: '/bao-cao',
  },
];
