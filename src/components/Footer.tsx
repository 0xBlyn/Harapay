import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-[5%] lg:py-0 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row">
          {/* Logo and Copyright Section */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Link href="/" className="flex items-center mb-4">
              <Image 
                src="/images/logo.png" 
                alt="MyXspend" 
                width={32} 
                height={32} 
                className="mr-2"
              />
              <span className="text-xl font-semibold">Harapay</span>
            </Link>
            <p className="text-sm text-gray-400">
              Copyright 2024, MyXspend. All rights reserved.
            </p>
          </div>

          {/* Links Section */}
          <div className="md:w-1/2 flex flex-wrap">
            <div className="w-1/2 md:w-1/3 mb-8">
              <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
              <ul className="space-y-2">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/on-off-ramp">About Us</Link></li>
                <li><Link href="/worldwide-apms">Features</Link></li>
              </ul>
            </div>
            <div className="w-1/2 md:w-1/3 mb-8">
              <h3 className="text-lg font-semibold mb-4">SOCIAL</h3>
              <ul className="space-y-2">
                <li><Link href="https://instagram.com">Instagram</Link></li>
                <li><Link href="https://telegram.org">Telegram</Link></li>
                <li><Link href="mailto:info@myxspend.com">Email</Link></li>
              </ul>
            </div>
            <div className="w-1/2 md:w-1/3 mb-8">
              <h3 className="text-lg font-semibold mb-4">LEGAL</h3>
              <ul className="space-y-2">
                <li><Link href="/terms">Terms of services</Link></li>
                <li><Link href="/privacy">Privacy Notice</Link></li>
                <li><Link href="/cookie-policy">Cookie policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
