import DiemDanh from '../../pages/chamCong/diemDanh';
import TheoDoi from '../../pages/chamCong/theoDoi';
import DangKy from '../../pages/nghiPhep/dangKy';
import PheDuyet from '../../pages/nghiPhep/pheDuyet';
import CapNhat from '../../pages/nhanVien/capNhat';
import DanhSach from '../../pages/nhanVien/danhSach';
import XoaNhanVien from '../../pages/nhanVien/xoa';
import ThongTin from '../../pages/thue/thongTin';
import TinhThue from '../../pages/thue/tinhThue';
import ThayDoi from '../../pages/thue/thayDoi';
import TinhThuong from '../../pages/thuong/tinhThuong';
import DieuChinh from '../../pages/thuong/dieuChinh';
import ThongTinThuong from '../../pages/thuong/thongTin';
import TinhLuong from '../../pages/luong/tinhLuong';
import TongLuong from '../../pages/luong/tongLuong';
import BaoCao from '../../pages/baoCao';

export const routes = [
  {
    path: '/',
    component: DanhSach,
  },
  {
    path: '/nhan-vien/danh-sach',
    component: DanhSach,
  },
  {
    path: '/nhan-vien/cap-nhat',
    component: CapNhat,
  },
  {
    path: '/nhan-vien/xoa',
    component: XoaNhanVien,
  },
  {
    path: '/nghi-phep/dang-ki',
    component: DangKy,
  },
  {
    path: '/nghi-phep/phe-duyet',
    component: PheDuyet,
  },
  {
    path: '/cham-cong/diem-danh',
    component: DiemDanh,
  },
  {
    path: '/cham-cong/theo-doi',
    component: TheoDoi,
  },
  {
    path: '/thue/tinh-thue',
    component: TinhThue,
  },
  {
    path: '/thue/thong-tin',
    component: ThongTin,
  },
  {
    path: '/thue/thay-doi',
    component: ThayDoi,
  },
  {
    path: '/thuong/tinh-thuong',
    component: TinhThuong,
  },
  {
    path: '/thuong/dieu-chinh',
    component: DieuChinh,
  },
  {
    path: '/thuong/thong-tin',
    component: ThongTinThuong,
  },
  {
    path: '/luong/tinh-luong',
    component: TinhLuong,
  },
  {
    path: '/luong/tong-luong',
    component: TongLuong,
  },
  {
    path: '/bao-cao',
    component: BaoCao,
  },
];
