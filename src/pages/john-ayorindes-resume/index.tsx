import React from 'react';
import Contact from '../../components/Contact';
import Layout from '../../components/Layout';
import {motion} from 'framer-motion';
import Download from '../../images/download.png';
import Instagram from '../../images/instagram.svg';
import LinkedIn from '../../images/linkedin.svg';
import Twitter from '../../images/twitter.svg';
import Dribbble from '../../images/dribbble.svg';

const Resume = () => {
  const handleDownload = () => {
    fetch('/John-Resume.pdf', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/pdf',
        Accept: 'application/pdf',
      },
    })
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'John-Ayorindes-Resume.pdf');
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      });
  };
  return (
    <Layout pathName='/john-ayorindes-resume'>
      <div className='pt-[120px] md:pt-[200px] lg:pt-[300px] font-thin px-[20px] md:px-[40px] lg:px-[80px] xl:px-[120px] 2xl:px-[204px]'>
        <motion.div
          initial={{opacity: 0, y: '10vh'}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{
            type: 'tween',
            duration: 0.6,
            ease: 'easeOut',
          }}
          className='w-full'
        >
          <h2 className=' font-calibre text-[50px] md:text-[60px] lg:text-[70px] leading-[120%] font-bold text-white text-center'>
            Resume
          </h2>
          <motiondiv className='w-full mt-[40px] md:mt-[60px] lg:mt-[80px] flex flex-col lg:flex-row gap-[18px] justify-between'>
            <h2 className='lg:w-[30%] self-start top-[80px] lg:sticky z-10 font-calibre font-semibold lg:min-w-max text-[24px] md:text-[28px] lg:text-[32px] leading-[200%] text-white'>
              Bio
            </h2>
            <div className='lg:w-[70%] font-calibre'>
              <p className='max-w-[750px] font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                Highly skilled Product Designer with extensive experience in
                developing SaaS product experiences, including B2B. Proven track
                record of pushing boundaries in product and visual execution and
                a solid ability to dream big and ship small.
              </p>
              <p className='max-w-[750px] font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                Strong communicator and collaborator, able to effectively
                present work and incorporate feedback. Skilled in design tools
                such as Figma and Adobe software and proficient in prototyping
                and creating pixel-perfect production assets
              </p>
            </div>
          </motiondiv>
          <motiondiv className='mt-[40px] md:mt-[60px] mt-[80px] flex flex-col lg:flex-row gap-[18px] justify-between'>
            <h2 className='lg:w-[30%] self-start top-[80px] lg:sticky z-10 font-calibre font-semibold lg:min-w-max text-[24px] md:text-[28px] lg:text-[32px] leading-[200%] text-white'>
              Experience
            </h2>
            <div className='font-calibre lg:w-[70%]'>
              <div>
                <p className='text-white max-w-[750px] font-calibre font-medium leading-[150%] mt-[13px] text-gray text-[18px] md:text-[20px] lg:text-[22px]'>
                  2021{'  '}
                  <span className='inline-block w-2 h-2 bg-gray rounded-full'></span>
                  {'  '}
                  Present
                </p>
                <p className='text-lemon max-w-[750px] font-mono font-medium leading-[150%] mt-[13px] text-gray text-[18px] md:text-[20px] lg:text-[22px]'>
                  Co-Creation Hub
                </p>
                <p className='max-w-[750px] font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                  Improved user satisfaction by 25% through the redesign of a
                  business-focused web application, resulting in a 10% increase
                  in daily active users
                </p>
                <p className='max-w-[750px] font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                  Collaborated with cross-functional teams to design and launch
                  a new feature to uncover hidden business opportunities,
                  resulting in a 30% increase in feature adoption.
                </p>
                <p className='max-w-[750px] font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                  Developed and expanded a product design system, leading to a
                  15% increase in design efficiency and consistency across the
                  product.
                </p>
                <p className='max-w-[750px] font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                  Aimed for high transparency, inviting and welcoming feedback,
                  and demonstrated an open attitude for collaboration
                </p>
                <p className='max-w-[750px] font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                  Pushed boundaries of product and visual execution and
                  regularly tried new ideas.
                </p>
                <p className='max-w-[750px] font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                  Developed and shared deep organizational knowledge of primary
                  users and used this knowledge to empower the team to design
                  remarkable products with great customer experience.
                </p>
              </div>
              <div className='mt-[40px] md:mt-[60px] mt-[80px]'>
                <p className='text-white max-w-[750px] font-calibre font-medium leading-[150%] mt-[13px] text-gray text-[18px] md:text-[20px] lg:text-[22px]'>
                  2021
                </p>
                <p className='text-lemon max-w-[750px] font-mono font-medium leading-[150%] mt-[13px] text-gray text-[18px] md:text-[20px] lg:text-[22px]'>
                  Oneistox
                </p>
                <p className='max-w-[750px] font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                  Led the team that carried out the complete overhaul and
                  redesign of the Learning Management System, thus adding more
                  features like the Question Query section and Discussion Forum
                  that later increased the engagement rate by 40% and retention
                  rate by 74%.
                </p>
                <p className='max-w-[750px] font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                  As the sole designer, I led the design vision for the company
                  and contributed to product strategy and decision-making. I
                  designed new features and overhauled the visual design for
                  both the product and marketing by introducing a company-wide
                  style guide, all while working closely across multiple
                  development teams in an agile environment.
                </p>
              </div>
            </div>
          </motiondiv>
          <motiondiv className='mt-[40px] md:mt-[60px] mt-[80px] flex flex-col lg:flex-row gap-[18px] justify-between'>
            <h2 className='lg:w-[30%] self-start top-[80px] lg:sticky z-10 font-calibre font-semibold lg:min-w-max text-[24px] md:text-[28px] lg:text-[32px] leading-[200%] text-white'>
              Projects
            </h2>
            <div className='font-calibre lg:w-[70%]'>
              <p className='text-white max-w-[750px] font-calibre font-medium leading-[150%] mt-[13px] text-gray text-[18px] md:text-[20px] lg:text-[22px]'>
                2022
              </p>
              <p className='text-lemon max-w-[750px] font-mono font-medium leading-[150%] mt-[13px] text-gray text-[18px] md:text-[20px] lg:text-[22px]'>
                Geonode
              </p>
              <p className='max-w-[750px] font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                Worked closely with the CEO, engineering, and marketing team to
                craft simple, intuitive, and delightful experiences. Also led
                the client's product design efforts across iOS, Android, and Web
                platforms, worth over $500,000.
              </p>
            </div>
          </motiondiv>
          <motiondiv className='mt-[40px] md:mt-[60px] mt-[80px] flex flex-col lg:flex-row gap-[18px] justify-between'>
            <h2 className='lg:w-[30%] self-start top-[80px] lg:sticky z-10 font-calibre font-semibold lg:min-w-max text-[24px] md:text-[28px] lg:text-[32px] leading-[200%] text-white'>
              Tools
            </h2>
            <div className='lg:w-[70%] font-calibre'>
              <p className='max-w-[750px] font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                Figma
              </p>
              <p className='max-w-[750px] font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                Sketch
              </p>
              <p className='max-w-[750px] font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                Jira
              </p>
              <p className='max-w-[750px] font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                Amplitude
              </p>
              <p className='max-w-[750px] font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                Mixpanel
              </p>
            </div>
          </motiondiv>
        </motion.div>
      </div>
      <Contact />
      <div className='block max-w-[2560px]:hidden'>
        <motion.div
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          transition={{
            type: 'tween',
            duration: 0.3,
            ease: 'easeOut',
          }}
          className='hidden lg:flex flex-col gap-[30px] fixed left-[20px] xl:left-[40px] 2xl:left-[70px] bottom-[40px] items-center'
        >
          <img src={Instagram} width={24} height={24} />
          <img src={LinkedIn} width={24} height={24} />
          <img src={Twitter} width={24} height={24} />
          <img src={Dribbble} width={24} height={24} />
          <div className='h-[204px] w-[2px] bg-white'></div>
        </motion.div>
        <motion.div
          initial={{opacity: 0, scale: 0.5}}
          animate={{opacity: 1, scale: 1}}
          transition={{
            type: 'spring',
            stiffness: 200,
            delay: 0.2,
            duration: 0.4,
            ease: 'easeOut',
          }}
          className='fixed right-[20px] xl:right-[40px] bottom-[40px] items-center'
        >
          <div
            onClick={handleDownload}
            className='cursor-pointer bg-lemon w-[60px] h-[60px] flex items-center justify-center rounded-full'
          >
            <img src={Download} width={24} height={24} />
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Resume;
