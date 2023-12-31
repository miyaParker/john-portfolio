import React from 'react';
import type {HeadFC, PageProps} from 'gatsby';
import Layout from '../components/Layout';
import Hero from '../components/home/Hero';
import Testimonials from '../components/home/Testimonials';
import Projects from '../components/home/Projects';
import Blog from '../components/home/Blog';
import Contact from '../components/Contact';
import Instagram from '../images/instagram.svg';
import LinkedIn from '../images/linkedin.svg';
import Twitter from '../images/twitter.svg';
import Dribbble from '../images/dribbble.svg';
import Mail from '../images/mail.svg';
import {motion} from 'framer-motion';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pathName='/'>
      <div className='hidden lg:block max-w-[1962px]:hidden'>
        <motion.div
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          transition={{
            type: 'tween',
            duration: 0.3,
            ease: 'easeOut',
          }}
          className='flex flex-col gap-[30px] fixed left-[40px] 2xl:left-[70px] bottom-[40px] items-center'
        >
          <a
            target='_blank'
            href='https://instagram.com/mztatobey?igshid=OGQ5ZDc2ODk2ZA=='
          >
            <img src={Instagram} width={24} height={24} />
          </a>
          <a target='_blank' href='https://www.linkedin.com/in/olarinde-john/'>
            <img src={LinkedIn} width={24} height={24} />
          </a>
          <a target='_blank' href='https://twitter.com/mztatobey'>
            <img src={Twitter} width={24} height={24} />
          </a>
          <a target='_blank' href='https://dribbble.com/Mztatobey'>
            <img src={Dribbble} width={24} height={24} />
          </a>
          <div className='h-[204px] w-[2px] bg-white'></div>
        </motion.div>
        <motion.div
          initial={{opacity: 0, y: 200}}
          whileInView={{opacity: 1, y: 0}}
          transition={{
            type: 'tween',
            delay: 0.2,
            duration: 0.4,
            ease: 'easeOut',
          }}
          className='flex flex-col gap-[30px] fixed right-[20px] xl:right-[40px] 2xl:right-[70px]  bottom-[40px] items-center'
        >
          <img src={Mail} width={240} height={24} className='w-auto' />
          <div className='h-[204px] w-[2px] bg-white'></div>
        </motion.div>
      </div>
      <Hero />
      <Testimonials />
      <Projects />
      <Blog />
      <Contact />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
