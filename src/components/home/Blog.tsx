import React from 'react';
import Feedback from '../../images/feedback.svg';
import Arrow from '../../images/arrow.svg';
import Brain from '../../images/brain.svg';
import Success from '../../images/success.svg';
import {motion} from 'framer-motion';

const Blog = () => {
  return (
    <motion.div
      initial={{opacity: 0, y: '10vh'}}
      whileInView={{opacity: 1, y: 0}}
      transition={{type: 'tween', delay: 0.2, duration: 0.4, ease: 'easeOut'}}
      className='px-[20px] md:px-[40px] lg:px-[80px] xl:px-[120px] 2xl:px-[204px]'
    >
      <p className='mt-[202px] text-center uppercase font-mono lg:text-[18px] text-lemon uppercase mb-[20px] font-mono leading-[28px]'>
        MY BLOG
      </p>
      <h2 className='font-calibre max-w-[688px] mx-auto text-[50px] md:text-[60px] lg:text-[70px] leading-[120%] font-bold text-white text-center'>
        How I Detail My Writings And Thoughts
      </h2>
      <div className='w-full md:max-w-max mt-[50px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto gap-x-[11px] gap-y-[14px]'>
        <div className='w-full xl:w-[389px] flex flex-col'>
          <div className='w-full md:max-w-[389px] h-[232px]'>
            <img
              src={Feedback}
              alt='The Risks of Seeking too much Feedback on your Design Projects'
              height={232}
              width={389}
              className='object-cover rounded-t-[10px] h-full w-full'
            />
          </div>
          <div className='w-full md:max-w-[389px] bg-blue-200 rounded-b-[10px] pt-[16px] pl-[14px] '>
            <p className='font-calibre w-full xl:max-w-[347px] font-calibre font-semibold text-[24px]'>
              The Risks of Seeking too much Feedback on your Design Projects!
            </p>
            <p className='w-full font-thin xl:max-w-[334px] my-[19px] text-[18px] text-[#8892B0] font-calibre font-medium'>
              Many of us (designers) have tried once or numerous times tried to
              reach out to senior colleagues to have a look or give feedback on
              our design process or the project itself.
            </p>
            <a
              target='_blank'
              href='https://bootcamp.uxdesign.cc/the-risks-of-seeking-too-much-feedback-on-your-design-projects-ab838d0b4b94'
            >
              <div className='flex mb-[14px] items-center'>
                <p className='font-mono font-medium text-[14px] xl:text-[15px] leading-[28px] text-lemon mr-2'>
                  Read More
                </p>
                <div className='w-[15px] h-[15px] overflow-clip'>
                  <img
                    src={Arrow}
                    alt='view more about Rosita African Cuisine case study'
                    width={16}
                    height={16}
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className='w-full md:max-w-[389px] flex flex-col'>
          <div className='w-full xl:w-[389px] h-[232px]'>
            <img
              src={Brain}
              alt='The Risks of Seeking too much Feedback on your Design Projects'
              height={232}
              width={389}
              className='object-cover rounded-t-[10px] h-full w-full'
            />
          </div>
          <div className='w-full md:max-w-[389px] bg-blue-200 rounded-b-[10px] pt-[16px] pl-[14px] '>
            <p className='font-calibre w-full xl:max-w-[347px] font-calibre font-semibold text-[24px]'>
              Psychology in Design & how it make interfaces that are effective
            </p>
            <p className='w-full font-thin xl:max-w-[334px] my-[19px] text-[18px] text-[#8892B0] font-calibre font-medium'>
              Many of us (designers) have tried once or numerous times tried to
              reach out to senior colleagues to have a look or give feedback on
              our design process or the project itself.
            </p>
            <a
              target='_blank'
              href='https://bootcamp.uxdesign.cc/psychology-in-design-cf9883c2c4f8'
            >
              <div className='flex mb-[14px] items-center'>
                <p className='font-mono font-medium text-[14px] xl:text-[15px] leading-[28px] text-lemon mr-2'>
                  Read More
                </p>
                <div className='w-[15px] h-[15px] overflow-clip'>
                  <img
                    src={Arrow}
                    alt='view more about Rosita African Cuisine case study'
                    width={16}
                    height={16}
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='w-full md:max-w-[389px] h-[232px]'>
            <img
              src={Success}
              alt='The Risks of Seeking too much Feedback on your Design Projects'
              height={232}
              width={389}
              className='object-cover rounded-t-[10px] h-full w-full'
            />
          </div>
          <div className='w-full md:max-w-[389px] bg-blue-200 rounded-b-[10px] pt-[16px] pl-[14px] '>
            <p className='font-calibre w-full xl:max-w-[347px] font-calibre font-semibold text-[24px]'>
              How to measure success as a Designer
            </p>
            <p className='w-full font-thin xl:max-w-[334px] my-[19px] text-[18px] text-[#8892B0] font-calibre'>
              The proof of the pudding…’ as the famous maxim goes, ‘…is in the
              eating…’ and I beg to add ‘not in the cooking nor the dishing.’
              The same should go for the designs we create, but often, that is
            </p>
            <a
              target='_blank'
              href='https://bootcamp.uxdesign.cc/how-to-measure-success-as-a-designer-8dc1d12249f8'
            >
              <div className='flex mb-[14px] items-center'>
                <p className='font-mono font-medium text-[14px] xl:text-[15px] leading-[28px] text-lemon mr-2'>
                  Read More
                </p>
                <div className='w-[15px] h-[15px] overflow-clip'>
                  <img
                    src={Arrow}
                    alt='view more about Rosita African Cuisine case study'
                    width={16}
                    height={16}
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <a target='_blank' href='https://mztatobey.medium.com/'>
        <button className='block mx-auto mt-[128px] flex items-center gap-[8px] border border-1 rounded-[5px] border-lemon px-[42px] py-[16px] md:px-[52px] md:py-[18px] lg:px-[62px] lg:py-[20px]'>
          <span className='underline leading-[120%] font-mono uppercase text-lemon font-medium text-[12px] md:text-[14px] lg:text-[16px]'>
            view more
          </span>
          <img src={Arrow} alt='talk to John Ayorinde' width={16} height={12} />
        </button>
      </a>
    </motion.div>
  );
};
export default Blog;
