import React, {useEffect, useState} from 'react';
import {Link} from 'gatsby';

const Navbar = ({pathName}: {pathName: string | undefined}) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const navLinks = [
    {
      name: 'Home',
      link: '/',
    },
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
  ];
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(
      prevScrollPos < 80 ||
        (prevScrollPos > currentScrollPos && prevScrollPos > 80)
    );
    setPrevScrollPos(currentScrollPos);

    return;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    if (prevScrollPos)
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <nav
      className={`${
        visible ? 'top-0 ' : 'top-[-60px]'
      }  fixed w-full  text-[18px] z-50 hidden lg:flex justify-center h-[77px] gap-x-[67px] items-center font-mono px-[20px] lg:px-[120px] ${
        pathName === undefined ? 'bg-none' : 'bg-blue-100'
      }`}
    >
      {navLinks.map((navLink, index) => (
        <Link
          key={index}
          className={`${
            pathName === navLink.link ? 'border-b border-b-2 border-lemon' : ''
          } font-mono text-white text-[18px] font-semibold leading-[28px]`}
          to={navLink.link}
        >
          {navLink.name}
        </Link>
      ))}
      <a
        className='font-mono text-white text-[18px] font-semibold leading-[28px]'
        href='mailto:joolarinde@gmail.com'
      >
        joolarinde@gmail.com
      </a>
      <button className='block lg:hidden'>Mobile Menu</button>
    </nav>
  );
};
export default Navbar;
