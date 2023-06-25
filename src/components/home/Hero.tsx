import React from 'react';
import {StaticImage} from 'gatsby-plugin-image';

const Hero = () => {
  return (
    <main className='px-[20px] lg:px-[120px] xl:px-[160px] 2xl:px-[204px] xl:mt-[123px]'>
      <p className='font-mono lg:text-[18px] text-lemon uppercase mb-[20px] font-semibold leading-[28px]'>
        hi, my name is
      </p>
      <p className='text-white lg:text-[80px] font-bold lg:leading-[96px]'>
        John Olarinde
      </p>
      <p className='mb-[16px] text-blue-50 font-medium max-w-[984px] xl:text-[70px] lg:leading-[120%]'>
        I design solutions for organizations.
      </p>
      <p className='mb-[46px] text-blue-50 font-normal max-w-[984px] lg:text-[28px] lg:leading-[36px]'>
        I enjoy helping early-stage & series A companies validate ideas, build
        solutions, and go-to-market early using research, data, business and
        interface designs
      </p>
      <button className='flex gap-[8px] border border-1 rounded-[5px] border-lemon lg:px-[62px] lg:py-[20px]'>
        <span className='uppercase text-lemon font-medium text-[16px]'>
          let's talk
        </span>
        <StaticImage
          src={'../images/arrow-right.svg'}
          alt='talk to John Ayorinde'
          width={24}
          height={24}
        />
      </button>
    </main>
  );
};
export default Hero;
