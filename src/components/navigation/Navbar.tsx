import React, {useEffect, useState} from 'react';
import {Link} from 'gatsby';
import MobileNav from '../../images/nav.svg';
import {motion, AnimatePresence} from 'framer-motion';

const Navbar = ({pathName}: {pathName: string | undefined}) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isNavVisible, toggleIsNavVisible] = useState(false);
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
    <div>
      <nav
        className={`${
          visible ? 'top-0 ' : 'top-[-60px]'
        }  fixed w-full  text-[18px] z-50 hidden md:flex justify-center h-[77px] gap-x-[67px] items-center font-mono px-[20px] lg:px-[120px] ${
          pathName === undefined ? 'bg-none' : 'bg-blue-100'
        }`}
      >
        {navLinks.map((navLink, index) => (
          <Link
            key={index}
            className={`${
              pathName === navLink.link
                ? 'border-b border-b-2 border-lemon'
                : ''
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
      </nav>
      <nav className='fixed flex items-center top-0 right-0 h-[80px] w-full bg-blue-100 flex md:hidden z-50'>
        <button
          onClick={() => toggleIsNavVisible(!isNavVisible)}
          className='absolute right-[40px]'
        >
          <img src={MobileNav} width={24} height={24} />
        </button>
      </nav>
      <AnimatePresence>
        {isNavVisible ? (
          <motion.div
            initial={{right: -50}}
            whileInView={{right: 0}}
            transition={{
              type: 'tween',
              duration: 0.2,
              ease: 'easeOut',
            }}
            exit={{opacity: 0, right: -50}}
            className='flex
          flex-col h-screen gap-y-[30px] w-[70%] sm:w-[50%] pt-[64px] fixed bg-blue-100 z-40'
          >
            {navLinks.map((navLink, index) => (
              <Link
                key={index}
                className='font-mono text-white text-[18px] leading-[28px] my-[24px] pl-[32px]'
                to={navLink.link}
              >
                {navLink.name}
              </Link>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};
export default Navbar;
