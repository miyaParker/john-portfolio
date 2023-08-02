import React from 'react';
import Arrow from '../../images/arrow.svg';
import Checkbox from '../../images/checkbox.jpg';
import {Link} from 'gatsby';

const Projects = () => {
  return (
    <div className='px-[20px] md:px-[40px] lg:px-[80px] xl:px-[120px] 2xl:px-[204px]'>
      <p className='pt-[140px] text-center uppercase font-mono lg:text-[18px] text-lemon uppercase mb-[20px] font-mono leading-[28px]'>
        MY PROJECTS
      </p>
      <h2 className='font-calibre max-w-[688px] mx-auto text-[50px] md:text-[60px] lg:text-[70px] leading-[120%] font-bold text-white text-center'>
        Preview Some Of My Personal Projects
      </h2>
      <div className='w-full flex justify-center flex-col lg:flex-row mt-[97px] justify-center gap-x-[30px] gap-y-[40px] md:gap-y-[120px]'>
        <div className='w-full lg:w-[50%]'>
          <div className='w-full rounded-[10px] bg-center bg-no-repeat bg-cover h-[430px] bg-[url("../images/rosita.svg")]'></div>
          <p className='font-calibre font-bold mt-[55px] font-bold text-[28px] md:text-[32px] lg:text-[35px] leading-[120%]'>
            UrbanGrowth - Redefining Urban Farming
          </p>
          <p className='font-calibre font-thin mt-[8px] text-gray max-w-[732px] text-[20px] md:text-[22px] lg:text-[23px] leading-[173%]'>
            UrbanGrowth, a mobile application designed to empower urban dwellers
            to grow their produce within the confines of their homes.
          </p>
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
        </div>
        <div className='w-full lg:w-[50%]'>
          <div className='w-full rounded-[10px] bg-center bg-no-repeat bg-cover h-[430px] bg-[url("../images/rosita.svg")]'></div>
          <p className='font-calibre font-bold mt-[55px] font-bold text-[28px] md:text-[32px] lg:text-[35px] leading-[120%]'>
            Rosita African Cuisine
          </p>
          <p className='font-calibre font-thin mt-[8px] text-gray max-w-[732px] text-[20px] md:text-[22px] lg:text-[23px] leading-[173%]'>
            Rosita African Cuisine is a chain of restaurants with the vision of
            delivering the best African dishes to everyone across Africa.
          </p>
          <Link to='/projects/rosita-case-study'>
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
      <div className='mt-[40px] md:mt-[120px] lg:mt-[160px] w-full h-[613px] rounded-[10px] bg-center bg-no-repeat bg-[url("../images/checkbox.jpg")] bg-cover'>
        <img
          src={Checkbox}
          alt={'checkbox image'}
          width={645}
          height={430}
          className='block w-full h-full object-cover rounded-[10px]'
        />
      </div>
      <p className='font-calibre font-bold mt-[55px] font-bold text-[28px] md:text-[32px] lg:text-[35px] leading-[120%]'>
        CheckBox Human Resource Management Software
      </p>
      <p className='font-calibre font-thin mt-[8px] text-gray max-w-[732px] text-[20px] md:text-[22px] lg:text-[23px] leading-[173%]'>
        CheckBox is a web application that helps place all the human resources
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
      <div className='w-full flex justify-center flex-col lg:flex-row mt-[40px] md:mt-[120px] lg:mt-[160px] justify-center gap-x-[30px] gap-y-[40px] md:gap-y-[120px]'>
        <div className='w-full lg:w-[50%]'>
          <div className='w-full rounded-[10px] bg-center bg-no-repeat h-[430px] bg-[url("../images/finder.jpg")] bg-cover'></div>
          <p className='font-calibre font-bold mt-[55px] font-bold text-[28px] md:text-[32px] lg:text-[35px] leading-[120%]'>
            Easy Commute Train Booking App
          </p>
          <p className='font-calibre font-thin mt-[8px] text-gray max-w-[732px] text-[20px] md:text-[22px] lg:text-[23px] leading-[173%]'>
            Easy Commute is a digital rail technology platform that sells train
            tickets and rail cards and provides free access to live train times
            and railway station information through a digital mobile app.
          </p>
          <Link to='/projects/easy-commute'>
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
        <div className='w-full lg:w-[50%]'>
          <div className='w-full rounded-[10px] bg-center bg-no-repeat  h-[430px] bg-[url("../images/life-blood.jpg")] bg-cover'></div>
          <p className='font-calibre font-bold mt-[55px] font-bold text-[28px] md:text-[32px] lg:text-[35px] leading-[120%]'>
            Life Source Blood Donation App
          </p>
          <p className='font-calibre font-thin mt-[8px] text-gray max-w-[732px] text-[20px] md:text-[22px] lg:text-[23px] leading-[173%]'>
            LifeSource is a blood donation app that connects potential donors to
            patients in need of blood.
          </p>
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
        </div>
      </div>
    </div>
  );
};
export default Projects;
