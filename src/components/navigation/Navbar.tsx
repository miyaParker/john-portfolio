import React from 'react';
import {Link} from 'gatsby';

const Navbar = () => {
  const navLinks = [
    {
      name: 'About Me',
      link: '/about-me',
    },
    {
      name: 'Work',
      link: '/projects',
    },
    {
      name: 'Resume',
      link: '/john-ayorindes-resume',
    },
    {
      name: 'joolarinde@gmail.com',
      link: 'mailto:joolarinde@gmail.com',
    },
  ];
  return (
    <nav className='text-[18px] flex justify-between h-[77px] items-center font-mono px-[20px] lg:px-[120px] xl:px-[120px] 2xl:px-[204px]'>
      <Link
        to='/'
        className='font-mono text-blue-50 text-[18px] font-semibold leading-[28px]'
      >
        Home
      </Link>
      <div className='lg:flex gap-x-[67px] hidden '>
        {navLinks.map((navLink) => (
          <Link
            className='font-mono text-blue-50 text-[18px] font-semibold leading-[28px]'
            to={navLink.link}
          >
            {navLink.name}
          </Link>
        ))}
      </div>
      <button className='block lg:hidden'>Mobile Menu</button>
    </nav>
  );
};
export default Navbar;
