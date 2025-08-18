'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '@/assets/imgs/craftdle_logo.png';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <nav id="navbar">
      <div id="navHeader">
        <Link href="/">
          <img id="craftdleLogo" src={logo.src} alt="Craftdle Logo" />
        </Link>
        <button 
          id="menuToggle" 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </div>
      <ul className={isOpen ? "navLinks open" : "navLinks"}>
        <li>
          <Link 
            href="/" 
            className={isActive('/') ? 'active' : ''} 
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            href="/comparison" 
            className={isActive('/comparison') ? 'active' : ''} 
            onClick={() => setIsOpen(false)}
          >
            Why Choose Craftdle?
          </Link>
        </li>
        <li>
          <Link 
            href="/credits" 
            className={isActive('/credits') ? 'active' : ''} 
            onClick={() => setIsOpen(false)}
          >
            Credits
          </Link>
        </li>
      </ul>
    </nav>
  );
}