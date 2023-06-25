import React, {useEffect, useState} from 'react';
import {StaticImage} from 'gatsby-plugin-image';

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const testimonials = [
    {
      name: 'Anayo Obiajulu',
      role: 'Senior Product Designer',
      company: 'NERDBUG LIMITED',
      image: '',
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
      image: '',
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
      image: '',
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
      image: '',
      quote:
        'I had the privilege of working with John at eLimu World and can confidently say that' +
        'he is a creative designer. Not only does he ' +
        'possess a good level of creativity and ' +
        'design skills, but he also can align his ' +
        'designs with the business goals and user ' +
        'needs. He is well-skilled in user-centered ' +
        'designs and consistently thrives to deliver' +
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
    <div>
      <h2 className='max-w-[688px] mx-auto mt-[140px] lg:text-[70px] leading-[84px] font-bold text-white text-center'>
      What People Are Saying About Me
  </h2>
  <div className='flex justify-center mt-[50px]'>
  <div className='bg-blue-200 w-[400px] relative h-[707px] pl-[70px] rounded-l-[10px] overflow-'>
  <p className='max-w-[250px] mt-[97px] uppercase text-[28px] tracking-[0.04em] font-normal text-white'>
    What people are saying
  </p>
  <div className='absolute top-[486px]'>
  <p className='text-[64px] font-bold z-20 w-max leading-[77px] text-white'>
    {testimonials[index].name}
    </p>
    <p className='font-normal'>
    {testimonials[index].role},
    <span className='font-bold uppercase'>
      {' '}
  {testimonials[index].company}
  </span>
  </p>
  </div>
  </div>
  <div className='bg-blue-50 h-[707px] w-[400px]'>
    {/*<StaticImage*/}
  {/*  src={'../../images/anayo.svg'}*/}
  {/*  alt={'anayo'}*/}
  {/*  width={400}*/}
  {/*  height={707}*/}
  {/*  className='h-[707px] w-[400px]'*/}
  {/*/>*/}
  </div>
  <div className='relative px-[56px] h-[707px] w-[460px] bg-white rounded-r-[10px]'>
  <StaticImage
    src={'../../images/quotes.svg'}
  alt={'quote one'}
  width={158}
  height={140}
  className='z-10 absolute top-[97px] right-[103px] opacity-[0.1]'
  />
  <p className='mt-[198px] text-[25px] tracking-[-0.02em] text-blue-100 relative z-20'>
    {testimonials[index].quote}
    </p>
    </div>
    </div>
    <div className='flex justify-center items-center mt-[28px] gap-x-[19px]'>
  <div
    onClick={() => setIndex(0)}
  className='cursor-pointer w-[5px] h-[5px] rounded-full bg-white'
    ></div>
    <div
  onClick={() => setIndex(1)}
  className='cursor-pointer w-[5px] h-[5px] rounded-full bg-white'
    ></div>
    <div
  onClick={() => setIndex(2)}
  className='cursor-pointer w-[5px] h-[5px] rounded-full bg-white'
    ></div>
    <div
  onClick={() => setIndex(3)}
  className='cursor-pointer w-[5px] h-[5px] rounded-full bg-white'
    ></div>
    </div>
    </div>
);
};
export default Testimonials;
