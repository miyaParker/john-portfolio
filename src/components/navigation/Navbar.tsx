import React, {useEffect, useState} from 'react';
import {Link} from 'gatsby';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
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
      } fixed w-full bg-blue-100 text-[18px] z-50 flex justify-between h-[77px] items-center font-mono px-[20px] lg:px-[120px] xl:px-[120px] 2xl:px-[204px]`}
    >
      <Link
        to='/'
        className='font-mono text-blue-50 text-[18px] font-semibold leading-[28px]'
      >
        Home
      </Link>
      <div className='lg:flex gap-x-[67px] hidden '>
        {navLinks.map((navLink, index) => (
          <Link
            key={index}
            className='font-mono text-blue-50 text-[18px] font-semibold leading-[28px]'
            to={navLink.link}
          >
            {navLink.name}
          </Link>
        ))}
        <a
          className='font-mono text-blue-50 text-[18px] font-semibold leading-[28px]'
          href='mailto:joolarinde@gmail.com'
        >
          joolarinde@gmail.com
        </a>
      </div>
      <button className='block lg:hidden'>Mobile Menu</button>
    </nav>
  );
};
export default Navbar;
