import React from 'react';
import Instagram from '../../images/instagram.svg';
import Twitter from '../../images/twitter.svg';
import LinkedIn from '../../images/linkedin.svg';
import Dribbble from '../../images/dribbble.svg';

const Footer = () => {
  return (
    <footer className='w-full mt-[360px]'>
      <div className='pb-[78px] w-full lg:px-[120px] xl:px-[120px] 2xl:px-[204px] '>
        <div className='relative'>
          <div className='absolute bottom-[24px] right-0 flex gap-x-[40px]'>
            <img src={Instagram} width={24} height={24} />
            <img src={LinkedIn} width={24} height={24} />
            <img src={Twitter} width={24} height={24} />
            <img src={Dribbble} width={24} height={24} />
          </div>
        </div>
        <div className='border-t border-white'></div>
        <div className='flex flex-row justify-between mt-[36px]'>
          <p className='font-calibre font-semibold text-[18px] leading-[42.5%]'>
            ALL RIGHTS RESERVED
          </p>
          <p className='font-calibre font-semibold text-[18px] leading-[42.5%]'>
            DESIGNED & BUILT BY MYSELF WITH FIGMA
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
