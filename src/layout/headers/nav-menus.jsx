import Link from 'next/link';
import React from 'react';
import menu_data from './menu-data';

const NavMenus = () => {
  return (
    <ul>
      {menu_data.map((menu, i) => (
        <li key={i} className={`${menu.has_dropdown ? 'has-dropdown' : ''}
      ${menu.mega_menu ? 'has-mega-menu' : ''}`}>
          <Link href={menu.link}>
            <a>{menu.title} </a>
          </Link>
         
        </li>
      ))}
    </ul>
  );
};

export default NavMenus;