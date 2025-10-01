'use client'
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav>
        <div className="nav-container">
          {/* Logo */}
          <Link href="/" className="nav-logo gradient-text">
            DevCraft
          </Link>

          {/* Desktop Navigation - PROPER SPACING */}
          <div className="nav-links">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`nav-link ${pathname === item.path ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(true)}
            style={{
              padding: '8px',
              background: 'rgba(30, 41, 59, 0.5)',
              border: '1px solid #374151',
              borderRadius: '8px',
              color: '#cbd5e1',
              cursor: 'pointer'
            }}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem'
          }}>
            <div className="nav-logo gradient-text">DevCraft</div>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                padding: '8px',
                background: 'rgba(30, 41, 59, 0.5)',
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#cbd5e1',
                cursor: 'pointer'
              }}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`mobile-nav-link ${pathname === item.path ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}