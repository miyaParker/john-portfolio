import React from 'react';
import Arrow from '../images/arrow.svg';
import {motion} from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      initial={{opacity: 0, y: 50}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      transition={{type: 'tween', delay: 0.2, duration: 0.3, ease: 'easeOut'}}
      className='px-[20px] md:px-[40px] lg:px-[80px] xl:px-[200px] '
    >
      <h2 className='mt-[150px] font-calibre max-w-[687px] mx-auto text-[42px] leading-[52px] md:text-[50px] lg:text-[60px] xl:text-[70px] md:leading-[60px] lg:leading-[72px] xl:leading-[84px] font-bold text-white text-center'>
        Get In Touch
      </h2>
      <p className='max-w-[627px] mx-auto font-calibre font-thin mt-[8px] text-gray max-w-[565px] text-center text-[22px] md:text-[24px] lg:text-[28px] leading-[150%]'>
        Thanks for taking time to go over my portfolio. Got any awesome ideas
        you'd love to share? Let’s have a conversation
      </p>
      <a href='mailto:johnolarinde@gmail.com'>
        <button className='block mx-auto mt-[15px] flex items-center gap-[8px] border border-1 rounded-[5px] border-lemon px-[42px] py-[16px] md:px-[52px] md:py-[18px] lg:px-[62px] lg:py-[20px]'>
          <span className='underline leading-[120%] font-mono uppercase text-lemon font-medium text-[12px] md:text-[14px] lg:text-[16px]'>
            LETS TALK
          </span>
          <img src={Arrow} alt='talk to John Ayorinde' width={16} height={12} />
        </button>
      </a>
    </motion.div>
  );
};
export default Contact;
