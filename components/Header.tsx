import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn('header flex items-center', className)}>
      <Link href="/" className='md:flex-1 flex items-center'>
        <Image
          src="/assets/icons/logo.svg"
          alt='Logo with name'
          width={120}
          height={32}
          className='hidden md:block'
          style={{ width: 'auto', height: 'auto' }} // Ensure aspect ratio is maintained
        />
        <Image
          src="/assets/icons/logo-icon.svg"
          alt='Logo'
          width={32}
          height={32}
          className='md:hidden mr-2'
          style={{ width: 'auto', height: 'auto' }} // Ensure aspect ratio is maintained
        />
      </Link>
      {children}
    </div>
  );
};

export default Header;
