import React from 'react';
import Arrow from '../../images/arrow.svg';
import Checkbox from '../../images/checkbox.jpg';
import Rosita from '../../images/rosita.png';
import Finder from '../../images/finder.jpg';
import Lifeblood from '../../images/life-blood.jpg';
import {Link} from 'gatsby';
import {motion} from 'framer-motion';

const Projects = () => {
  return (
    <motion.div
      initial={{opacity: 0, y: '10vh'}}
      whileInView={{opacity: 1, y: 0}}
      transition={{type: 'tween', duration: 0.6, ease: 'easeOut'}}
      className='px-[20px] md:px-[40px] lg:px-[80px] xl:px-[120px] 2xl:px-[204px]'
    >
      <p className='pt-[120px] pt-[200px] lg:pt-[250px] text-center uppercase font-mono lg:text-[18px] text-lemon uppercase mb-[20px] font-mono leading-[28px]'>
        MY PROJECTS
      </p>
      <h2 className='font-calibre max-w-[688px] mx-auto text-[50px] md:text-[60px] lg:text-[70px] leading-[120%] font-bold text-white text-center'>
        Preview Some Of My Personal Projects
      </h2>
      <div className='w-full flex justify-center flex-col items-center md:flex-row mt-[97px] justify-center gap-x-[30px] gap-y-[40px] md:gap-y-[120px]'>
        <div className='w-full md:w-[50%]'>
          <div className='w-full rounded-[10px] h-[430px] rounded-[10px] h-[430px] overflow-hidden'>
            <motion.img
              initial={{scale: 1.2}}
              whileInView={{scale: 1}}
              transition={{duration: 0.5, ease: 'easeOut'}}
              src={Finder}
              alt='view more about Rosita African Cuisine case study'
              width={16}
              height={16}
              className='w-full h-full object-cover'
            />
          </div>
          <p className='font-calibre font-bold mt-[55px] font-bold text-[28px] md:text-[32px] lg:text-[35px] leading-[120%]'>
            Easy Commute
          </p>
          <p className='font-calibre font-thin mt-[8px] text-gray max-w-[540px] text-[20px] md:text-[22px] lg:text-[23px] leading-[173%]'>
            Easy Commute offers train ticket and rail card sales, with free
            access to live train times and station info.
          </p>
          <Link to='/projects/easy-commute'>
            <button className='block mt-[17px] flex items-center gap-[8px] border border-1 rounded-[5px] border-lemon px-[42px] py-[16px] md:px-[52px] md:py-[18px] lg:px-[62px] lg:py-[20px]'>
              <p className='font-mono font-medium uppercase text-[14px] md:text-[16px] leading-[150%] text-lemon mr-2'>
                View Case Study
              </p>
              <div className='w-[16px] h-[16px] overflow-clip'>
                <motion.img
                  src={Arrow}
                  alt='view more about Rosita African Cuisine case study'
                  width={16}
                  height={16}
                  className='w-full h-full object-cover'
                />
              </div>
            </button>
          </Link>
        </div>
        <div className='w-full md:w-[50%]'>
          <div className='w-full rounded-[10px] h-[430px] rounded-[10px] h-[430px] overflow-hidden'>
            <motion.img
              initial={{scale: 1.2}}
              whileInView={{scale: 1}}
              transition={{duration: 0.5, ease: 'easeOut'}}
              src={Rosita}
              alt='view more about Rosita African Cuisine case study'
              width={16}
              height={16}
              className='w-full h-full object-cover'
            />
          </div>
          <p className='font-calibre font-bold mt-[55px] font-bold text-[28px] md:text-[32px] lg:text-[35px] leading-[120%]'>
            Rosita African Cuisine
          </p>
          <p className='font-calibre font-thin mt-[8px] text-gray max-w-[540px] text-[20px] md:text-[22px] lg:text-[23px] leading-[173%]'>
            Rosita African Cuisine is a chain of restaurants with the vision of
            delivering the best African dishes to everyone across Africa.
          </p>
          <Link to='/projects/rosita'>
            <button className='block mt-[17px] flex items-center gap-[8px] border border-1 rounded-[5px] border-lemon px-[42px] py-[16px] md:px-[52px] md:py-[18px] lg:px-[62px] lg:py-[20px]'>
              <p className='font-mono font-medium uppercase text-[14px] md:text-[16px] leading-[150%] text-lemon mr-2'>
                View Case Study
              </p>
              <div className='w-[16px] h-[16px] overflow-clip'>
                <img
                  src={Arrow}
                  alt='view more about Rosita African Cuisine case study'
                  width={16}
                  height={16}
                  className='w-full h-full object-cover'
                />
              </div>
            </button>
          </Link>
        </div>
      </div>
      <div className='w-full flex justify-center flex-col md:flex-row mt-[40px] md:mt-[120px] lg:mt-[160px] justify-center gap-x-[30px] gap-y-[40px] md:gap-y-[120px]'>
        <div className='w-full md:w-[50%] md:max-w-[600px] lg:max-w-max'>
          <div className='w-full rounded-[10px] h-[430px] overflow-hidden'>
            <motion.img
              initial={{scale: 1.2}}
              whileInView={{scale: 1}}
              transition={{duration: 0.5, ease: 'easeOut'}}
              src={Checkbox}
              alt='view more about Rosita African Cuisine case study'
              width={16}
              height={16}
              className='w-full h-full object-cover'
            />
          </div>
          <p className='font-calibre font-bold mt-[55px] font-bold text-[28px] md:text-[32px] lg:text-[35px] leading-[120%]'>
            CheckBox
          </p>
          <p className='font-calibre font-thin mt-[8px] text-gray max-w-[540px] text-[20px] md:text-[22px] lg:text-[23px] leading-[173%]'>
            CheckBox is a web application that places all the human resources
            management goals in one software.
          </p>
          <Link to='/projects/checkbox'>
            <button className='block mt-[17px] flex items-center gap-[8px] border border-1 rounded-[5px] border-lemon px-[42px] py-[16px] md:px-[52px] md:py-[18px] lg:px-[62px] lg:py-[20px]'>
              <p className='font-mono font-medium uppercase text-[14px] md:text-[16px] leading-[150%] text-lemon mr-2'>
                View Case Study
              </p>
              <div className='w-[16px] h-[16px] overflow-clip'>
                <img
                  src={Arrow}
                  alt='view more about Rosita African Cuisine case study'
                  width={16}
                  height={16}
                  className='w-full h-full object-cover'
                />
              </div>
            </button>
          </Link>
        </div>
        <div className='w-full md:w-[50%]'>
          <div className='w-full rounded-[10px] h-[430px] w-full rounded-[10px] h-[430px] overflow-hidden'>
            <motion.img
              initial={{scale: 1.2}}
              whileInView={{scale: 1}}
              transition={{duration: 0.5, ease: 'easeOut'}}
              src={Lifeblood}
              alt='view more about Rosita African Cuisine case study'
              width={16}
              height={16}
              className='w-full h-full object-cover'
            />
          </div>
          <p className='font-calibre font-bold mt-[55px] font-bold text-[28px] md:text-[32px] lg:text-[35px] leading-[120%]'>
            Life Source
          </p>
          <p className='font-calibre font-thin mt-[8px] text-gray max-w-[540px] text-[20px] md:text-[22px] lg:text-[23px] leading-[173%]'>
            LifeSource is a blood donation app that connects potential donors to
            patients in need of blood.
          </p>
          <Link to='/projects/lifesource'>
            <button className='block mt-[17px] flex items-center gap-[8px] border border-1 rounded-[5px] border-lemon px-[42px] py-[16px] md:px-[52px] md:py-[18px] lg:px-[62px] lg:py-[20px]'>
              <p className='font-mono font-medium uppercase text-[14px] md:text-[16px] leading-[150%] text-lemon mr-2'>
                View Case Study
              </p>
              <div className='w-[16px] h-[16px] overflow-clip'>
                <img
                  src={Arrow}
                  alt='view more about Rosita African Cuisine case study'
                  width={16}
                  height={16}
                  className='w-full h-full object-cover'
                />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
export default Projects;
