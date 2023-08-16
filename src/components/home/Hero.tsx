import React from 'react';
import Arrow from '../../images/arrow-right.png';
import {motion} from 'framer-motion';

const Hero = () => {
  return (
    <motion.main
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{type: 'tween', delay: 0.2, duration: 0.4, ease: 'easeOut'}}
      className='h-max mb-[80px] px-[20px] md:px-[40px] lg:px-[80px] xl:px-[120px] 2xl:px-[204px] pt-[120px] md:pt-[200px] lg:pt-[300px]'
    >
      <motion.p
        initial={{opacity: 0, overflow: '50%', y: 30}}
        whileInView={{opacity: 1, overflow: '100%', y: 0}}
        transition={{type: 'tween', delay: 0.2, duration: 0.3, ease: 'easeOut'}}
        className='font-calibre font-medium text-[48px] sm:text-[60px] md:text-[76px] lg:text-[86px] text-white leading-[120%]'
      >
        Hi, my name is
      </motion.p>
      <motion.h1
        animate={{color: '#DEA995'}}
        transition={{duration: 0.7}}
        className='font-calibre text-[#DEA995] text-[80px] md:text-[90px] lg:text-[108px] font-bold leading-[88%]'
      >
        Olarinde John
      </motion.h1>
      <p className='font-calibre mb-[46px] text-white font-thin max-w-[662px] text-[20px] md:text-[22px] lg:text-[23px] leading-[170%]'>
        I am a seasoned Product Designer specializing in designing and
        developing impactful digital products and experiences for both startups
        and large-scale established organizations.
      </p>

      <a href='mailto:johnolarinde@gmail.com'>
        <button className='flex items-center gap-[8px] border border-1 rounded-[5px] border-lemon px-[42px] py-[16px] md:px-[52px] md:py-[18px] lg:px-[62px] lg:py-[20px]'>
          <span className='font-mono uppercase text-lemon font-medium text-[12px] md:text-[14px] lg:text-[16px]'>
            let's talk
          </span>
          <img src={Arrow} alt='talk to John Ayorinde' width={24} height={24} />
        </button>
      </a>
    </motion.main>
  );
};
export default Hero;
