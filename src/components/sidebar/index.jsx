import React from 'react';
import SidebarItem from './sidebarItem';

export default function Sidebar({ data }) {
  return (
    <>
      <div className='sidebar'>
        {data.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </div>
    </>
  );
}
