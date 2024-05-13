// web/src/Context/NhanVienContext.js

import React, { createContext, useState } from 'react';

const NhanVienContext = createContext();

const NhanVienProvider = ({ children }) => {
  const [nhanViens, setNhanViens] = useState([]);

  return (
    <NhanVienContext.Provider value={{ nhanViens, setNhanViens }}>
      {children}
    </NhanVienContext.Provider>
  );
};

export { NhanVienProvider, NhanVienContext };
