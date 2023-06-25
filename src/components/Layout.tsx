import React from 'react';
import Navbar from './navigation/Navbar';
import Footer from './navigation/Footer';

const Layout = ({children}) => {
  return (
    <div className='bg-blue-100 w-full mx-auto'>
      <div className='bg-blue-100 text-white max-w-[1962px] mx-auto'>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
