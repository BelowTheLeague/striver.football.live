// src/components/AfconHeader.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // if you use react-router, else replace with <a>

export default function AfconHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-gray-900 text-white">
      {/* Top row: logos + title */}
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex-shrink-0">
          <Link to="/">
            <img src="/striver-logo.png" alt="Striver.Football" className="h-10 object-contain" />
          </Link>
        </div>

        <div className="text-center">
          <div className="text-sm">AFCON 2025</div>
          <div className="text-2xl font-bold">Striver.Football</div>
        </div>

        <div className="flex-shrink-0">
          <Link to="/">
            <img src="/btl-logo.png" alt="BelowTheLeague" className="h-10 object-contain" />
          </Link>
        </div>
      </div>

      {/* Navigation / menu row */}
      <nav className="border-t border-gray-700">
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between py-2">
          <ul className="hidden md:flex space-x-6 font-medium">
            <li><Link to="/live-centre">Live Centre</Link></li>
            <li><Link to="/match-reports">Match Reports</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/fixtures">Fixtures</Link></li>
            <li><Link to="/tables">Tables</Link></li>
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? '×' : '☰'}
          </button>
        </div>

        {/* Mobile menu, if open */}
        {menuOpen && (
          <div className="bg-gray-800 md:hidden">
            <ul className="flex flex-col space-y-2 px-4 py-2 font-medium">
              <li><Link to="/live-centre">Live Centre</Link></li>
              <li><Link to="/match-reports">Match Reports</Link></li>
              <li><Link to="/news">News</Link></li>
              <li><Link to="/fixtures">Fixtures</Link></li>
              <li><Link to="/tables">Tables</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
