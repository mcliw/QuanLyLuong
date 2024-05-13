import { Route, Routes } from 'react-router-dom';
import { routes } from './components/route';
import DangNhap from './pages/dangNhap';
import Layout from './components/layouts/Layout';
import QuenMatKhau from './pages/quenMatKhau';

function App() {
  return (
    <>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <route.component />
              </Layout>
            }
          />
        ))}
        <Route path='dang-nhap' element={<DangNhap />} />
        <Route path='quen-mat-khau' element={<QuenMatKhau />} />
      </Routes>
    </>
  );
}

export default App;
