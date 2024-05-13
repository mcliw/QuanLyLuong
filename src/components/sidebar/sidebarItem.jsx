import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SidebarItem({ item }) {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  console.log(item);

  return (
    <>
      <div>
        {item.type === 'sub' && (
          <div onClick={handleToggle} className='sidebar-title'>
            {item.title}
          </div>
        )}
        {item.type === 'link' && (
          <Link to={item.path} className='sidebar-title' style={{ display: 'block', textDecoration: 'none' }}>
            {item.title}
          </Link>
        )}
        {expanded && item.type === 'sub' && item.children && (
          <ul>
            {item.children.map((child, index) => (
              <li key={index} className='sidebar-item'>
                <Link to={child.path}>{child.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
