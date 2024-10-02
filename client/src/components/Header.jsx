import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-hanmaxBlue p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/images/hanmax-logo.png" alt="HANMAX SECURITY" className="h-12 w-12" />
          <span className="text-hanmaxGold text-xl font-bold">HANMAX SECURITY</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/login" className="text-hanmaxGold hover:text-white transition-colors">Login</Link></li>
            <li><Link to="/register" className="text-hanmaxGold hover:text-white transition-colors">Register</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
