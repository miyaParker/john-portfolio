import React, {useState, cloneElement} from 'react';
import Navbar from './navigation/Navbar';
import Footer from './navigation/Footer';

const Layout = ({children, pathName}) => {
  return (
    <div className='bg-blue-100 w-full mx-auto'>
      <div className='bg-blue-100 text-white max-w-[1962px] mx-auto'>
        <Navbar pathName={pathName} />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export const ProjectLayout = ({children, pathName}) => {
  return (
    <div className='bg-blue-100 w-full mx-auto'>
      <div className='bg-blue-100 text-white mx-auto'>
        <Navbar pathName={pathName} />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export const ProjectBodyLayout = ({children}) => {
  return (
    <div className='bg-blue-100 w-full mx-auto'>
      <div className='max-w-[1962px] bg-blue-100 text-white mx-auto'>
        {children}
      </div>
    </div>
  );
};

export default Layout;
