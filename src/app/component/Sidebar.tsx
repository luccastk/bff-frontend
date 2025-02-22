'use client';

import React from 'react';
import DropdownUser from './DropdownUser';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const menuItens = [
    { name: 'Home', path: '/', icon: 'bi-house' },
    { name: 'Dashboard', path: '/dashboard', icon: 'bi-speedometer2' },
    { name: 'Venda', path: '/sales', icon: 'bi-currency-dollar' },
    { name: 'Estoque', path: '/stock', icon: 'bi-box-seam' },
    { name: 'Relatórios', path: '/reports', icon: 'bi-graph-up' },
  ];

  return (
    <div className="d-flex me-4">
      <div className="bg-dark text-white p-3 d-flex flex-column" style={{ width: '250px' }}>
        <ul className="nav nav-pills flex-column mb-auto">
          {menuItens.map((item) => {
            const isHome = item.path === '/' && pathname === '/';
            const isActive = 
                isHome || (item.path !== '/' && pathname.startsWith(item.path))
            return (
              <li key={item.path} className="nav-item">
                <Link
                  href={item.path}
                  className={`mt-2 text-start nav-link btn ${
                    isActive ? 'btn-primary text-white active' : 'btn-outline-primary text-white'
                  }`}
                >
                  <i className={`bi ${item.icon} me-2`}></i>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="mt-auto">
          <DropdownUser />
        </div>
      </div>
    </div>
  );
}
