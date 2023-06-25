import React, {useEffect, useState} from 'react';
import {StaticImage} from 'gatsby-plugin-image';
import Anayo from '../../images/anayo.svg';
import Michael from '../../images/michael.svg';
import Bridget from '../../images/bridget.svg';
import Fiwa from '../../images/fiwa.svg';
import Quotes from '../../images/quotes.svg';

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const testimonials = [
    {
      name: 'Anayo Obiajulu',
      role: 'Senior Product Designer',
      company: 'NERDBUG LIMITED',
      image: Anayo,
      quote:
        ' John is a prolific product designer . He is very thorough in\n' +
        '            documenting product requirements and design considerations as well\n' +
        '            as user interface and user experience design. I’ve worked with him\n' +
        '            on a number of projects and I can say that he’ll be an asset to any\n' +
        '            team anywhere in the world',
    },
    {
      name: 'Michael Emmanuel',
      role: 'Senior Product Designer',
      company: 'NOMBA',
      image: Michael,
      quote:
        'John is a highly skilled designer. He is \n' +
        'not only friendly and helpful but also \n' +
        'goes above and beyond to maintain \n' +
        'the team spirit. Moreover, I have seen \n' +
        'him working his way through challenges \n' +
        'and crises. He uses innovative \n' +
        'approaches to tackling and solving \n' +
        'problems. He is such an inspiration \n' +
        'to me',
    },
    {
      name: 'Fiwa Okunade',
      role: 'CEO, Senior Product Designer & Mentor',
      company: 'Perxels',
      image: Fiwa,
      quote:
        'John Olarinde is a smart designer. His \n' +
        'designs are top-notch because \n' +
        'he pays attention to details \n' +
        'and product requirements.',
    },
    {
      name: 'Bridget Iyere',
      role: 'Product Manager',
      company: 'e-LIMU WORLD',
      image: Bridget,
      quote:
        'I had the privilege of working with John at eLimu World and can confidently say that' +
        'he is a creative designer. Not only does he ' +
        'possess a good level of creativity and ' +
        'design skills, but he also can align his ' +
        'designs with the business goals and user ' +
        'needs. He is well-skilled in user-centered ' +
        'designs and consistently thrives to deliver ' +
        'designs that look not only great but also ' +
        'drive measurable results.',
    },
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = index <= 2 ? index + 1 : 0;
      setIndex(newIndex);
    }, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, [index]);
  return (
    <div className='w-full px-[20px] md:px-[40px] lg:px-[140px] xl:px-[120px] 2xl:px-[204px]'>
      <h2 className='font-calibre max-w-[688px] mx-auto mt-[157px] text-[42px] leading-[52px] md:text-[50px] lg:text-[60px] xl:text-[70px] md:leading-[60px] lg:leading-[72px] xl:leading-[84px] font-bold text-white text-center'>
        What People Are Saying About Me
      </h2>
      <div className='flex justify-center mt-[50px] w-full'>
        <div className='bg-blue-200 w-[30%] relative h-[707px] pl-[20px] lg:pl-[40px] xl:pl-[70px] rounded-l-[10px]'>
          <p className='font-mono lg:max-w-[250px] mt-[97px] uppercase text-[24px] lg:text-[26px] xl:text-[28px] tracking-[0.04em] font-normal text-white'>
            What people are saying
          </p>
          <div className='absolute top-[486px]'>
            <p className='font-calibre text-[48px] lg:text-[54px] xl:text-[64px] font-bold z-20 w-max leading-[77px] text-white'>
              {testimonials[index].name}
            </p>
            <p className='font-normal font-calibre'>
              {testimonials[index].role},
              <span className='font-bold uppercase font-calibre'>
                {' '}
                {testimonials[index].company}
              </span>
            </p>
          </div>
        </div>
        <div className='bg-blue-50 w-[30%] h-[707px]'>
          <img
            src={testimonials[index].image}
            alt={testimonials[index].image}
            width={400}
            height={707}
            className='h-[100%] w-full object-cover'
          />
        </div>
        <div className='relative px-[20px] lg:px-[30px] xl:px-[56px] h-[707px] w-[40%] bg-white rounded-r-[10px]'>
          <img
            src={Quotes}
            alt={'quotes'}
            width={158}
            height={140}
            className='z-10 absolute top-[87px] xl:top-[97px] right-[103px] opacity-[0.1]'
          />
          <p className='mt-[178px] xl:mt-[198px] text-[16px] lg:text-[18px] xl:text-[20px] xl:text-[25px] tracking-[-0.02em] leading-[35.5px] text-blue-100 relative z-20'>
            {testimonials[index].quote}
          </p>
        </div>
      </div>
      <div className='flex justify-center items-center mt-[28px] gap-x-[19px]'>
        <div
          onClick={() => setIndex(0)}
          className={`hover:opacity-80 cursor-pointer w-[8px] h-[8px] rounded-full bg-white ${
            index === 0 ? '' : 'opacity-50'
          }`}
        ></div>
        <div
          onClick={() => setIndex(1)}
          className={`hover:opacity-80 cursor-pointer w-[8px] h-[8px] rounded-full bg-white ${
            index === 1 ? '' : 'opacity-50'
          }`}
        ></div>
        <div
          onClick={() => setIndex(2)}
          className={`hover:opacity-80 cursor-pointer w-[8px] h-[8px] rounded-full bg-white ${
            index === 2 ? '' : 'opacity-50'
          }`}
        ></div>
        <div
          onClick={() => setIndex(3)}
          className={`hover:opacity-80 cursor-pointer w-[8px] h-[8px] rounded-full bg-white ${
            index === 3 ? '' : 'opacity-50'
          }`}
        ></div>
      </div>
    </div>
  );
};
export default Testimonials;
