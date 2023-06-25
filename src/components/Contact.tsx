import React from 'react';
import Arrow from '../images/arrow.svg';

const Contact = () => {
  return (
    <div className='px-[20px] md:px-[40px] lg:px-[80px] xl:px-[120px] 2xl:px-[204px]'>
      <p className='mt-[150px] text-center uppercase font-mono lg:text-[18px] text-lemon uppercase mb-[20px] font-mono leading-[28px]'>
        WHAT’S NEXT
      </p>
      <h2 className='font-calibre max-w-[688px] mx-auto text-[42px] leading-[52px] md:text-[50px] lg:text-[60px] xl:text-[70px] md:leading-[60px] lg:leading-[72px] xl:leading-[84px] font-bold text-white text-center'>
        Get In Touch
      </h2>
      <p className='mx-auto font-calibre font-medium mt-[8px] text-gray max-w-[732px] text-[22px] lg:text-[24px] xl:text-[25px] xl:leading-[75px]'>
        Got any Awesome Ideas you'd love to share? Let’s have a conversation
      </p>
      <a href='mailto:johnolarinde@gmail.com'>
        <button className='block mx-auto mt-[15px] flex items-center gap-[8px] border border-1 rounded-[5px] border-lemon px-[42px] py-[16px] md:px-[52px] md:py-[18px] lg:px-[62px] lg:py-[20px]'>
          <span className='underline leading-[120%] font-mono uppercase text-lemon font-medium text-[12px] md:text-[14px] lg:text-[16px]'>
            LETS TALK
          </span>
          <img src={Arrow} alt='talk to John Ayorinde' width={16} height={12} />
        </button>
      </a>
    </div>
  );
};
export default Contact;
