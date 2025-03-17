/* eslint-disable prettier/prettier */
// components/Header.js

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown, Mail, Phone } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Courses', href: '/courses', dropdown: true },
  { name: 'Placements', href: '/placements' },
  { name: 'Mentors', href: '/mentors' },
  { name: 'Events', href: '/events' },
  { name: 'Corporate Training', href: '/corporate-training' },
  { name: 'Live Jobs', href: '/live-jobs' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'About', href: '/about' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top Strip */}
      <div className="bg-[#FFD5AC] py-[10px] text-base">
        <div className="container mx-auto flex justify-evenly items-center flex-wrap gap-4">
          {/* Email Section */}
          <a
            href="mailto:contact@cinutedigital.com"
            className="flex items-center gap-2 text-black hover:text-[#ff8c00] transition-colors duration-300"
          >
            <Mail size={16} className="text-[#ff8c00]" />
            <span>contact@cinutedigital.com</span>
          </a>

          {/* Contact Numbers */}
          <div className="flex items-center gap-2 text-black">
            <Phone size={16} className="text-[#ff8c00]" />
            <a
              href="tel:+917888383788"
              className="hover:text-[#ff8c00] transition-colors duration-300"
            >
              +91 788-83-83-788
            </a>
            <span>|</span>
            <a
              href="tel:+918488988984"
              className="hover:text-[#ff8c00] transition-colors duration-300"
            >
              +91 84-889-889-84
            </a>
            <span>|</span>
            <a
              href="tel:+918062785870"
              className="hover:text-[#ff8c00] transition-colors duration-300"
            >
              +91 806-27-85-870
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-[#FEF7F3] shadow-md">
        <div className="w-full px-[5%] py-3 flex justify-between items-center">
          {/* Logo Section */}
          <Link href="/">
            <span className="flex items-center gap-2 font-bold text-xl cursor-pointer text-black">
              <img
                src="/cdpl-logo.png"
                alt="Logo"
                className="h-[78px] w-auto"
              />
              Cinute Digital
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-6 items-center">
            {navLinks.map(({ name, href, dropdown }) => (
              <div key={name} className="relative group">
                <Link
                  href={href}
                  className="flex items-center gap-1 text-black hover:text-[#007BFF] transition duration-300 font-medium"
                >
                  {name}
                  {dropdown && <ChevronDown size={16} />}
                </Link>
                {dropdown && (
                  <div className="absolute hidden group-hover:block bg-white shadow-lg p-2 rounded mt-2">
                    <Link
                      href="/courses/software-testing"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Software Testing
                    </Link>
                    <Link
                      href="/courses/data-science"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Data Science
                    </Link>
                    <Link
                      href="/courses/ai-ml"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      AI & ML
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Hamburger Icon */}
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-[#FEF7F3] shadow-lg">
            <nav className="flex flex-col items-start px-4 py-4 gap-4">
              {navLinks.map(({ name, href }) => (
                <Link
                  key={name}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="text-black hover:text-[#007BFF] transition duration-300 font-medium"
                >
                  {name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
}
