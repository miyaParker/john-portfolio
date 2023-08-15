import React, {useEffect, useState, useRef} from 'react';
import Anayo from '../../images/anayo.svg';
import Michael from '../../images/michael.svg';
import Bridget from '../../images/bridget.svg';
import Quotes from '../../images/quotes.svg';
import {motion, useInView} from 'framer-motion';

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

  const titleRef = useRef(null);
  const textRef = useRef(null);
  const infoRef = useRef(null);
  const isTitleInView = useInView(titleRef, {once: true});
  const isTextInView = useInView(textRef, {once: true});
  const isInfoInView = useInView(infoRef, {once: true});

  return (
    <motion.div
      initial={{opacity: 0, y: '10vh'}}
      whileInView={{opacity: 1, y: 0}}
      transition={{type: 'tween', delay: 0.2, duration: 0.3, ease: 'easeOut'}}
      className='w-full px-[20px] md:px-[40px] lg:px-[140px] xl:px-[120px] 2xl:px-[204px]'
    >
      <p className='mt-[20px] text-center uppercase font-mono lg:text-[18px] text-lemon uppercase mb-[20px] font-mono leading-[28px]'>
        MY PROJECTS
      </p>
      <h2 className='font-calibre max-w-[541px] mx-auto  text-[35px] leading-[45px] md:leading-[55px] md:text-[45px] lg:text-[55px] md:leading-[60px] lg:leading-[66px] font-bold text-white text-center'>
        What People Are Saying About Me
      </h2>
      <div className='flex justify-center mt-[50px] w-full'>
        <div className='bg-blue-200 w-[30%] relative h-[707px] pl-[20px] lg:pl-[40px] xl:pl-[70px] rounded-l-[10px]'>
          <motion.p
            ref={titleRef}
            initial={{opacity: 0, x: -50}}
            animate={isTitleInView ? {opacity: 1, x: 0} : {}}
            transition={{delay: 0.2, duration: 0.5}}
            className='font-mono lg:max-w-[250px] mt-[97px] uppercase text-[24px] lg:text-[26px] xl:text-[28px] tracking-[0.04em] font-normal text-white'
          >
            What people are saying
          </motion.p>
          <motion.div
            ref={infoRef}
            className='absolute top-[486px]'
            initial={{opacity: 0, x: -50}}
            animate={isInfoInView ? {opacity: 1, x: 0} : {}}
            transition={{delay: 0.2, duration: 0.3}}
          >
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
          </motion.div>
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
          <motion.p
            ref={textRef}
            initial={{opacity: 0, y: 40}}
            animate={isTextInView ? {opacity: 1, y: 0} : {}}
            transition={{delay: 0.2, duration: 0.4}}
            className='font-calibre font-thin mt-[178px] lg:mt-[198px] text-[20px] md:text-[22px] lg:text-[25px] tracking-[-2%] leading-[44px] text-blue-100 relative z-20'
          >
            {testimonials[index].quote}
          </motion.p>
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
    </motion.div>
  );
};
export default Testimonials;
