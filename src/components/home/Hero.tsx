import React from 'react';
import Arrow from '../../images/arrow-right.svg';

const Hero = () => {
  return (
    <main className='px-[20px] md:px-[40px] lg:px-[80px] xl:px-[120px] 2xl:px-[204px] pt-[200px]'>
      <p className='font-mono font-semibold lg:text-[18px] text-lemon uppercase mb-[20px] leading-[28px]'>
        hi, my name is
      </p>
      <h1 className='font-calibre text-white text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] font-bold lg:leading-[96px]'>
        John Olarinde
      </h1>
      <p className='font-calibre font-medium mb-[16px] text-blue-50 font-medium w-full md:w-max text-[40px] md:text-[50px] lg:text-[55px] xl:text-[70px] lg:leading-[120%]'>
        I design solutions for organizations.
      </p>
      <p className='font-calibre mb-[46px] text-blue-50 font-normal max-w-[984px] text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] lg:leading-[36px]'>
        I enjoy helping early-stage & series A companies validate ideas, build
        solutions, and go-to-market early using research, data, business and
        interface designs
      </p>
      <button className='flex items-center gap-[8px] border border-1 rounded-[5px] border-lemon px-[42px] py-[16px] md:px-[52px] md:py-[18px] lg:px-[62px] lg:py-[20px]'>
        <span className='font-mono uppercase text-lemon font-medium text-[12px] md:text-[14px] lg:text-[16px]'>
          let's talk
        </span>
        <img src={Arrow} alt='talk to John Ayorinde' width={24} height={24} />
      </button>
    </main>
  );
};
export default Hero;
