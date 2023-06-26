import Arrow from '../../images/arrow.svg';
import Checkbox from '../../images/checkbox.svg';
import React from 'react';
import Layout from '../../components/Layout';
import {Link} from 'gatsby';

const Projects = () => {
  return (
    <Layout>
      <div className='px-[20px] md:px-[40px] lg:px-[80px] xl:px-[160px] 2xl:px-[204px]'>
        <p className=' pt-[200px] text-center uppercase font-mono lg:text-[18px] text-lemon uppercase mb-[20px] font-mono leading-[28px]'>
          MY PROJECTS
        </p>
        <h2 className='font-calibre max-w-[688px] mx-auto text-[42px] leading-[52px] md:text-[50px] lg:text-[60px] xl:text-[70px] md:leading-[60px] lg:leading-[72px] xl:leading-[84px] font-bold text-white text-center'>
          Preview Some Of My Personal Projects
        </h2>
        <div className='w-full flex justify-center items-center flex-col lg:flex-row mt-[97px] justify-center gap-x-[30px]'>
          <div className='w-full lg:w-[50%]'>
            <div className='w-full rounded-[10px] bg-center bg-no-repeat bg-cover h-[430px] bg-[url("../images/rosita.svg")]'></div>
            <p className='font-calibre mt-[55px] font-bold text-[20px] xl:text-[32px] 2xl:text-[35px] xl:leading-[42px]'>
              UrbanGrowth - Redefining Urban Farming
            </p>
            <p className='font-calibre mt-[8px] text-gray max-w-[732px] text-[16px] xl:text-[22px] 2xl:text-[24px]'>
              UrbanGrowth, a mobile application designed to empower urban
              dwellers to grow their produce within the confines of their homes.
            </p>
            <div className='flex mt-[17px] items-center'>
              <p className='font-mono font-medium text-[16px] xl:text-[20px] leading-[45px] text-lemon mr-2'>
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
            </div>
          </div>
          <div className='w-full lg:w-[50%]'>
            <div className='w-full rounded-[10px] bg-center bg-no-repeat bg-cover h-[430px] bg-[url("../images/rosita.svg")]'></div>
            <p className='font-calibre mt-[55px] font-bold text-[20px] xl:text-[32px] 2xl:text-[35px] xl:leading-[42px]'>
              Rosita African Cuisine
            </p>
            <p className='font-calibre mt-[8px] text-gray max-w-[732px] text-[16px] xl:text-[22px] 2xl:text-[24px]'>
              Rosita African Cuisine is a chain of restaurants with the vision
              of delivering the best African dishes to everyone across Africa.
            </p>

            <div className='flex mt-[17px] items-center cursor-pointer'>
              <p className='font-mono font-medium text-[18px] 2xl:text-[20px] leading-[45px] text-lemon mr-2'>
                View Case Study
              </p>
              <div className='w-[16px] h-[16px] overflow-clip'>
                <img
                  src={Arrow}
                  alt='view more about Rosita African Cuisine case study'
                  width={16}
                  height={16}
                  className='rounded-[10px] object-cover w-[100%] h-auto'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='mt-[186px] w-full h-[613px] '>
          <img
            src={Checkbox}
            alt={'checkbox image'}
            width={645}
            height={430}
            className='block w-full h-full object-cover rounded-[10px]'
          />
        </div>
        <p className='font-calibre mt-[55px] font-bold text-[20px] xl:text-[32px] 2xl:text-[35px] xl:leading-[42px]'>
          CheckBox Human Resource Management Software
        </p>
        <p className='font-calibre mt-[8px] text-gray max-w-[759px] text-[16px] xl:text-[22px] 2xl:text-[24px]'>
          CheckBox is a web application that helps place all the human resources
          management goals in one software.
        </p>
        <div className='flex mt-[17px] items-center'>
          <p className='font-mono font-medium text-[18px] 2xl:text-[20px] leading-[45px] text-lemon mr-2'>
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
        </div>
        <div className='w-full flex justify-center items-center flex-col lg:flex-row mt-[97px] justify-center gap-x-[30px]'>
          <div className='w-full lg:w-[50%]'>
            <div className='w-full rounded-[10px] bg-center bg-no-repeat h-[430px] bg-[url("../images/rosita.svg")] bg-cover'></div>
            <p className='font-calibre mt-[55px] font-bold text-[20px] xl:text-[32px] 2xl:text-[35px] xl:leading-[42px]'>
              UrbanGrowth - Redefining Urban Farming
            </p>
            <p className='font-calibre mt-[8px] text-gray max-w-[732px] text-[16px] xl:text-[22px] 2xl:text-[24px]'>
              UrbanGrowth, a mobile application designed to empower urban
              dwellers to grow their produce within the confines of their homes.
            </p>
            <div className='flex mt-[17px] items-center'>
              <p className='font-mono font-medium text-[16px] xl:text-[20px] leading-[45px] text-lemon mr-2'>
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
            </div>
          </div>
          <div className='w-full lg:w-[50%]'>
            <div className='w-full rounded-[10px] bg-center bg-no-repeat  h-[430px] bg-[url("../images/rosita.svg")] bg-cover'></div>
            <p className='font-calibre mt-[55px] font-bold text-[20px] xl:text-[32px] 2xl:text-[35px] xl:leading-[42px]'>
              Rosita African Cuisine
            </p>
            <p className='font-calibre mt-[8px] text-gray max-w-[732px] text-[16px] xl:text-[22px] 2xl:text-[24px]'>
              Rosita African Cuisine is a chain of restaurants with the vision
              of delivering the best African dishes to everyone across Africa.
            </p>
            <div className='flex mt-[17px] items-center'>
              <p className='font-mono font-medium text-[18px] 2xl:text-[20px] leading-[45px] text-lemon mr-2'>
                View Case Study
              </p>
              <div className='w-[16px] h-[16px] overflow-clip'>
                <img
                  src={Arrow}
                  alt='view more about Rosita African Cuisine case study'
                  width={16}
                  height={16}
                  className='rounded-[10px] object-cover w-[100%] h-auto'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Projects;
