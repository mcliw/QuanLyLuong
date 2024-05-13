import React from 'react';
import Sidebar from '../sidebar';
import { menuItems } from '../../data/menu';

export default function Layout({ children }) {
  return (
    <div>
      <Sidebar data={menuItems} />
      <div className='content'>{children}</div>
    </div>
  );
}
