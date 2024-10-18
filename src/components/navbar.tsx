import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon, HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import Image from 'next/image';
import { Video } from 'lucide-react';

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    setMounted(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Render placeholder or null on the server
  if (!mounted) {
    return null; // or a simple placeholder
  }

  return (
    <>
      <nav className={`fixed top-0 py-2 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-50/70 backdrop-blur-md shadow-md' 
          : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/images/logo.png" alt="Harapay Logo" width={32} height={32} />
              <span className="text-xl font-bold text-brand">Harapay</span>
            </Link>
            
            <div className="hidden md:flex items-center text-lg font-normal justify-center space-x-6 flex-grow">  
              <Link href="/documentation" className="text-gray-600 hover:text-brand">
                Documentation
              </Link>
              <Link href="/faq" className="text-gray-600 hover:text-brand">
                FAQ
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-brand">
                Contact
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/login" className="px-4 py-2 rounded-full bg-brand text-white hover:bg-brand/80 text-center flex items-center justify-center space-x-2">
                <Video className="h-5 w-5" />
                <span>Live Demo</span>
              </Link>
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full hover:bg-gray-200"
              >
                {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
              </button>
            </div>
            
            <div className="flex md:hidden items-center space-x-4">
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full hover:bg-gray-200"
              >
                {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
              </button>
              <button className="md:hidden" onClick={toggleSidebar}>
                {isSidebarOpen ? <Cross1Icon className="w-6 h-6" /> : <HamburgerMenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar for mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 md:hidden">
          <div className="fixed right-0 top-0 bottom-0 w-64 bg-gray-50 p-6 overflow-y-auto">
            <button onClick={toggleSidebar} className="absolute top-4 right-4">
              <Cross1Icon className="w-6 h-6" />
            </button>
            <div className="flex flex-col space-y-4 mt-8">
              <Link href="/services" className="text-gray-600 hover:text-brand">
                Services
              </Link>
              <Link href="/documentation" className="text-gray-600 hover:text-brand">
                Documentation
              </Link>
              <Link href="/faq" className="text-gray-600 hover:text-brand">
                FAQ
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-brand">
                Contact
              </Link>
              <Link href="/login" className="px-4 py-2 rounded-full bg-brand text-white hover:bg-brand/80 text-center">
                Live Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
