import React from 'react';
import {motion} from 'framer-motion';
import {ProjectLayout, ProjectBodyLayout} from '../../../components/Layout';
import Research from '../../../images/desk-research.png';
import Results from '../../../images/results.png';
import Registration from '../../../images/registration.png';
import Rosita1 from '../../../images/rosita-screen-1.png';
import Rosita2 from '../../../images/rosita-screen-2.png';
import Rosita3 from '../../../images/rosita-screen-3.png';
import RositaMob1 from '../../../images/rosita-mob-1.png';
import RositaMob2 from '../../../images/rosita-mob-2.png';
import RositaMob3 from '../../../images/rosita-mob-3.png';
import RositaMob4 from '../../../images/rosita-mob-4.png';
import RositaMob5 from '../../../images/rosita-mob-5.png';
import RositaMob6 from '../../../images/rosita-mob-6.png';
import RositaMob7 from '../../../images/rosita-mob-7.png';
import RositaMob8 from '../../../images/rosita-mob-8.png';
import RositaMob9 from '../../../images/rosita-mob-9.png';
import RositaMob10 from '../../../images/rosita-mob-10.png';
import RositaMob11 from '../../../images/rosita-mob-11.png';
import RositaMob12 from '../../../images/rosita-mob-12.png';

import Feature from '../../../images/feature.png';
import Constraints from '../../../images/constraints.png';
import Proto from '../../../images/proto.png';
import Contact from '../../../components/Contact';

const Rosita = () => {
  return (
    <ProjectLayout>
      <div className=''>
        <div className='relative w-full h-[640px] overflow-hidden relative top-[-120px] bg-fixed bg-[url("../images/rosita-hero.png")]'>
          <div className='w-full h-full absolute z-10 bg-black opacity-80 top-0 bottom-0 left-0 right-0'></div>
        </div>
        <div className='absolute top-[180px] lg:top-[245px] z-20 w-full  px-[20px] md:px-[40px] lg:px-[80px]'>
          <div className=''>
            <p className='text-lemon text-center text-[18px] font-mono font-semibold'>
              Rosita African Cuisine
            </p>
            <h1 className='font-calibre font-bold text-center mx-auto max-w-[914px] text-[42px] md:text-[50px] lg:text-[60px] xl:text-[69px] leading-[120%]'>
              An Easier way to deliver African Meals to everyone across Africa
            </h1>
          </div>
        </div>
        <div className='w-full relative top-[-120px] py-[0.8rem] bg-white text-blue-100'>
          <div className='max-w-[1962px] mx-auto flex flex-wrap gap-x-[20px] justify-between px-[20px] md:px-[40px] lg:px-[80px] xl:px-[200px]'>
            <div>
              <p className='font-bold font-calibre text-[28px] md:text-center'>
                Client
              </p>
              <p className='font-thin font-calibre text-[23px] md:text-center'>
                Rosita Cuisine
              </p>
            </div>
            <div>
              <p className='font-bold font-calibre text-[28px] md:text-center'>
                Industry
              </p>
              <p className='font-thin font-calibre text-[23px] md:text-center'>
                Hospitality
              </p>
            </div>
            <div>
              <p className='font-bold font-calibre text-[28px] md:text-center'>
                Platform
              </p>
              <p className='font-thin font-calibre text-[23px] md:text-center'>
                iOS & Android
              </p>
            </div>
          </div>
        </div>
        <ProjectBodyLayout>
          <div
            initial={{opacity: 0, y: 100}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{
              type: 'tween',
              delay: 0.2,
              duration: 0.4,
              ease: 'easeOut',
            }}
            className='w-full px-[20px] md:px-[40px] lg:px-[80px] xl:px-[200px]'
          >
            <div className='mb-[80px]'>
              <h2 className='font-calibre font-semibold w-[full] text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
                Highlight
              </h2>
              <p className='font-calibre font-thin leading-[150%] mt-[13px]  text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                Rosita African Cuisine Cuisine aims to enable its customers to
                place food orders from the restaurant’s menu and request home
                delivery through their cellphones. In this case study you can
                follow along on my journey to use technology to place food
                orders from the a restaurant request home delivery while
                battling COVID-19.
              </p>
            </div>
            <motion.div
              initial={{opacity: 0, y: 100}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                type: 'tween',
                delay: 0.2,
                duration: 0.6,
                ease: 'easeOut',
              }}
              className='mt-[128px]'
            >
              <h2 className='font-calibre font-semibold w-[full] text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
                Introducing Rosita Mobile App
              </h2>
              <div className='pt-[28px] lg:pt-[36px] flex flex-col lg:flex-row gap-[18px] justify-between'>
                <div className='max-w-[586px] flex-1'>
                  <h3 className='font-calibre font-semibold w-[full] text-[18px] md:text-[20px] lg:text-[22px] leading-[200%] text-white'>
                    What is Rosita African Cuisine?
                  </h3>
                  <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] leading-[138%] md:text-[24px] lg:text-[28px]'>
                    Rosita African Cuisine is a chain of restaurants with the
                    vision of delivering the best African dishes to everyone
                    across Africa. The mobile app is a mobile solution that
                    enables its customers to place food orders from the
                    restaurant’s menu and request home delivery.
                  </p>
                </div>
                <div className='max-w-[593px] flex-1'>
                  <h3 className='font-calibre font-semibold w-[full] text-[18px] md:text-[20px] lg:text-[22px] leading-[200%] text-white'>
                    My Role
                  </h3>
                  <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] leading-[138%] md:text-[24px] lg:text-[28px]'>
                    Lead the prototyping, conducted design sprints, led
                    usability testing, designed low-fi and mid-fi applications,
                    led high fidelity design and visual direction.
                  </p>
                </div>
              </div>

              <div className='pt-[28px] lg:pt-[36px] flex flex-col lg:flex-row gap-[18px] justify-between'>
                <div className='max-w-[586px] flex-1'>
                  <h3 className='font-calibre font-semibold w-[full] text-[18px] md:text-[20px] lg:text-[22px] leading-[200%] text-white'>
                    Timeline
                  </h3>
                  <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] leading-[138%] md:text-[24px] lg:text-[28px]'>
                    8 Weeks
                  </p>
                </div>
                <div className='max-w-[593px] flex-1'>
                  <h3 className='font-calibre font-semibold w-[full] text-[18px] md:text-[20px] lg:text-[22px] leading-[200%] text-white'>
                    Tools
                  </h3>
                  <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] leading-[138%] md:text-[24px] lg:text-[28px]'>
                    Figma, Pen and Paper Sketch, Google Docs, Miro
                  </p>
                </div>
              </div>

              <div className='pt-[28px] lg:pt-[36px] flex flex-col lg:flex-row gap-[18px] justify-between'>
                <div className='max-w-[586px] flex-1'>
                  <h3 className='font-calibre font-semibold w-[full] text-[18px] md:text-[20px] lg:text-[22px] leading-[200%] text-white'>
                    Client
                  </h3>
                  <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] leading-[138%] md:text-[24px] lg:text-[28px]'>
                    Rosita Cuisine
                  </p>
                </div>
                <div className='max-w-[593px] flex-1'>
                  <h3 className='font-calibre font-semibold w-[full] text-[18px] md:text-[20px] lg:text-[22px] leading-[200%] text-white'>
                    Skills
                  </h3>
                  <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] leading-[138%] md:text-[24px] lg:text-[28px]'>
                    Experimentation, A/B testing, Qualitative research, , User
                    interviews, Usability testing, UX design, UI design
                  </p>
                </div>
              </div>
            </motion.div>
            <div className='mt-[128px] flex flex-col lg:flex-row gap-[18px] justify-between lg:items-center'>
              <div>
                <h2 className='font-calibre font-semibold w-[full] text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
                  The Challenge
                </h2>
                <p className='max-w-[530px] font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] leading-[138%] md:text-[24px] lg:text-[28px]'>
                  The actual focus of this project was to design a reservation
                  app for Rosita African Cuisine’s customers to order their
                  meals and food promptly and get delivered as fast as possible.
                </p>
              </div>
              <div className='grid grid-cols-2 gap-[20px] lg:gap-[40px] font-calibre'>
                <motion.div
                  initial={{scale: 0.8}}
                  whileInView={{scale: 1}}
                  transition={{
                    type: 'spring',
                    duration: 0.2,
                    ease: 'easeOut',
                    stiffness: 120,
                  }}
                  className='bg-blue-200 py-[32px] px-[48px] flex flex-col justify-center items-center'
                >
                  <p className='leading-[267%] text-[16px] lg:text-[18px] text-center'>
                    Market Size
                  </p>
                  <p className='font-bold text-[35px] leading-[175%] text-center'>
                    $834.7 Million
                  </p>
                </motion.div>
                <motion.div
                  initial={{scale: 0.8}}
                  whileInView={{scale: 1}}
                  transition={{
                    type: 'spring',
                    duration: 0.2,
                    ease: 'easeOut',
                    stiffness: 120,
                  }}
                  className='bg-white text-blue-200 py-[32px] px-[48px]  flex flex-col justify-center items-center'
                >
                  <p className='leading-[267%] text-[16px] lg:text-[18px] text-center'>
                    Total Population
                  </p>
                  <p className='font-bold text-[35px] leading-[175%] text-center'>
                    200 Million
                  </p>
                </motion.div>
                <motion.div
                  initial={{scale: 0.8}}
                  whileInView={{scale: 1}}
                  transition={{
                    type: 'spring',
                    duration: 0.2,
                    ease: 'easeOut',
                    stiffness: 120,
                  }}
                  className='bg-white text-blue-200 py-[32px] px-[48px] flex flex-col justify-center items-center'
                >
                  <p className='leading-[267%] text-[16px] lg:text-[18px] text-center'>
                    Growth Rate
                  </p>
                  <p className='font-bold text-[35px] leading-[175%]'>12.2%</p>
                </motion.div>
                <motion.div
                  initial={{scale: 0.8}}
                  whileInView={{scale: 1}}
                  transition={{
                    type: 'spring',
                    duration: 0.2,
                    ease: 'easeOut',
                    stiffness: 120,
                  }}
                  className='bg-blue-200 py-[32px] px-[48px] flex flex-col justify-center items-center'
                >
                  <p className='leading-[267%] text-[16px] lg:text-[18px] text-center'>
                    Key Region
                  </p>
                  <p className='font-bold text-[35px] leading-[175%] text-center'>
                    North West
                  </p>
                </motion.div>
              </div>
            </div>
            <motion.div
              initial={{opacity: 0, y: 100}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                type: 'tween',
                delay: 0.2,
                duration: 0.6,
                ease: 'easeOut',
              }}
              className='mt-[128px] flex flex-col lg:flex-row gap-[18px] justify-between'
            >
              <div>
                <h2 className='font-calibre font-semibold w-[full] text-[32px] md:text-[38px] lg:text-[40px] leading-[138%] text-white'>
                  Defining the problem
                </h2>
                <p className='max-w-[603px] font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] leading-[138%] md:text-[24px] lg:text-[28px]'>
                  Defining the problem "Who am I designing for, and what
                  challenges are they facing currently with placing orders,
                  ordering food, and delivery?". I kept asking myself these
                  questions as I tried to define the problem space and who to
                  design for. I first narrowed my user group to Nigerians
                  between the ages of 16 - 64, as this age range has the highest
                  internet adoption rate (source).
                </p>
              </div>
              <div>
                <h2 className='font-calibre font-semibold w-[full] text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
                  Opportunity
                </h2>
                <p className='max-w-[603px] font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] leading-[138%] md:text-[24px] lg:text-[28px]'>
                  With a population of over 200 million people, Rosita African
                  Cuisine aims to increase customer satisfaction by providing a
                  convenient and efficient ordering experience while expanding
                  the delivery reach and reducing operational costs for the
                  restaurant, ultimately leading to increased revenue.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{opacity: 0, y: 100}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                type: 'tween',
                delay: 0.2,
                duration: 0.6,
                ease: 'easeOut',
              }}
              className='mt-[128px]'
            >
              <h2 className='font-calibre font-semibold w-[full] text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
                Hypothesis Statement
              </h2>
              <div className='py-[32px] bg-blue-200 rounded-[20px] px-[32px] w-full relative'>
                <p className='mx-auto font-calibre text-gray font-thin text-[24px] lg:text-[28px] max-w-[1036px] before:block before:relative before:left-[-48px] before:top-[40px] before:content-[url("../images/format-quote.svg")] after:rotate-[180deg] after:relative after:block after:right-0 after:top-[-24px] after:content-[url("../images/format-quote.svg")]'>
                  John is a Busy Executive who needs an easy way to get food
                  (preferably lunch) during work hours because his kind work
                  does not allow leave his workspace for a long time to get
                  food.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{opacity: 0, y: 100}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                type: 'tween',
                delay: 0.2,
                duration: 0.6,
                ease: 'easeOut',
              }}
              className='mt-[128px]'
            >
              <h2 className='font-calibre font-semibold w-[full] text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
                Conducting Desk Research
              </h2>
              <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                For this project, I conducted secondary research to collect data
                from existing resources, reports and documents available in
                public libraries and websites on the state of food delivery in
                the country.
              </p>
              <img
                src={Research}
                width={567}
                height={367}
                className='w-full max-w-[1024px] mt-[40px] mx-auto'
              />
            </motion.div>

            <div className='mt-[128px]'>
              <motion.h2
                initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{
                  type: 'tween',
                  delay: 0.2,
                  duration: 0.6,
                  ease: 'easeOut',
                }}
                className='font-calibre font-semibold w-[full] text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'
              >
                User Research
              </motion.h2>
              <motion.p
                initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{
                  type: 'tween',
                  delay: 0.2,
                  duration: 0.6,
                  ease: 'easeOut',
                }}
                className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'
              >
                From here, I started interviews with our customers. Watching
                them interact with me gave me physical cues that could affect
                the research outcomes. To help capture observations, I took
                detailed notes and even recorded some sessions with users. For
                the purposes of the interview, I took into consideration some
                selected demographics, which included:
              </motion.p>
              <div className='ml-8'>
                <motion.p
                  initial={{opacity: 0, y: 100}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{
                    type: 'tween',
                    delay: 0.2,
                    duration: 0.6,
                    ease: 'easeOut',
                  }}
                  className='flex gap-x-4 items-center font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'
                >
                  <span className='block w-2 h-2 bg-gray leading-[150%] rounded-full'></span>
                  Ages 18–62
                </motion.p>
                <motion.p
                  initial={{opacity: 0, y: 100}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{
                    type: 'tween',
                    delay: 0.2,
                    duration: 0.6,
                    ease: 'easeOut',
                  }}
                  className='flex gap-x-4 items-center font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'
                >
                  <span className='block w-2 h-2 bg-gray leading-[150%] rounded-full'></span>
                  Lives in metropolitan or suburban areas
                </motion.p>
                <motion.p
                  initial={{opacity: 0, y: 100}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{
                    type: 'tween',
                    delay: 0.2,
                    duration: 0.6,
                    ease: 'easeOut',
                  }}
                  className='flex gap-x-4 items-center font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'
                >
                  <span className='block w-2 h-2 bg-gray leading-[150%] rounded-full'></span>
                  Include participants of different genders
                </motion.p>
                <motion.p
                  initial={{opacity: 0, y: 100}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{
                    type: 'tween',
                    delay: 0.2,
                    duration: 0.6,
                    ease: 'easeOut',
                  }}
                  className='flex gap-x-4 items-center font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'
                >
                  <span className='block w-2 h-2 bg-gray leading-[150%] rounded-full'></span>
                  Include participants with different abilities
                </motion.p>
                <motion.p
                  initial={{opacity: 0, y: 100}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{
                    type: 'tween',
                    delay: 0.2,
                    duration: 0.6,
                    ease: 'easeOut',
                  }}
                  className='flex gap-x-4 items-center font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'
                >
                  <span className='block w-2 h-2 bg-gray leading-[150%] rounded-full'></span>
                  Working professionals busy with work duties are conscious
                  about budget and want to eat healthily.
                </motion.p>
              </div>
            </div>

            <motion.div
              initial={{opacity: 0, y: 100}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                type: 'tween',
                delay: 0.2,
                duration: 0.6,
                ease: 'easeOut',
              }}
              className='mt-[128px]'
            >
              <h2 className='font-calibre font-semibold w-[full] text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
                Insights from the research
              </h2>
              <img
                src={Results}
                width={567}
                height={367}
                className='w-full max-w-[1024px] mt-[40px] mx-auto'
              />
            </motion.div>

            <motion.div
              initial={{opacity: 0, y: 100}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                type: 'tween',
                delay: 0.2,
                duration: 0.6,
                ease: 'easeOut',
              }}
              className='mt-[128px]'
            >
              <h2 className='font-calibre font-semibold w-[full] text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
                Feature Prioritization
              </h2>
              <img
                src={Feature}
                width={567}
                height={367}
                className='w-full max-w-[1024px] mt-[40px] mx-auto'
              />
            </motion.div>

            <motion.div
              initial={{opacity: 0, y: 100}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                type: 'tween',
                delay: 0.2,
                duration: 0.6,
                ease: 'easeOut',
              }}
              className='mt-[128px]'
            >
              <h2 className='font-calibre font-semibold w-[full] text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
                Competitive Audit
              </h2>
              <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                To develop relevant ideas for the project, I did a comprehensive
                audit and an overview of our competitor’s strengths and
                weaknesses. I analyzed brands and products of competitors and
                companies that offer similar products as we do to have a
                well-rounded foundation of knowledge about the market our
                product will enter.
              </p>
              <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                For the project, I looked into competitors like Bolt Eats,
                Debonair Pizza, Jumia Foods, and Uber Eats. Due to the short
                duration of developing ideas, I audited the Google Play store
                reviews to identify what users identified as their pain points.
              </p>
              <p className='font-calibre font-bold leading-[150%] mt-[13px] text-lemon text-[22px] md:text-[24px] lg:text-[28px]'>
                The Comprehensive Audit is available{' '}
                <span className='underline'>HERE</span>
              </p>
            </motion.div>

            <motion.div
              initial={{opacity: 0, y: 100}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                type: 'tween',
                delay: 0.2,
                duration: 0.6,
                ease: 'easeOut',
              }}
              className='mt-[128px]'
            >
              <h2 className='font-calibre font-semibold w-[full] text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
                Conducting Desk Research
              </h2>
              <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                For this project, I conducted secondary research to collect data
                from existing resources, reports and documents available in
                public libraries and websites on the state of food delivery in
                the country.
              </p>
              <img
                src={Research}
                width={567}
                height={367}
                className='w-full max-w-[1024px] mt-[40px] mx-auto'
              />
            </motion.div>

            <motion.div
              initial={{opacity: 0, y: 100}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                type: 'tween',
                delay: 0.2,
                duration: 0.6,
                ease: 'easeOut',
              }}
              className='mt-[128px]'
            >
              <h2 className='font-calibre font-semibold w-[full] text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
                Constraints
              </h2>
              <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                Here are the constraints we experienced when designing and
                building Rosita African Cuisine Food Ordering Mobile app
              </p>
              <img
                src={Constraints}
                width={567}
                height={367}
                className='w-full max-w-[1024px] mt-[40px] mx-auto'
              />
            </motion.div>
            <motion.div
              initial={{opacity: 0, y: 100}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                type: 'tween',
                delay: 0.2,
                duration: 0.6,
                ease: 'easeOut',
              }}
              className='mt-[128px]'
            >
              <h2 className='font-calibre font-semibold w-[full] text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
                Sitemap
              </h2>
              <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                I decided to design a hierarchical diagram that visually
                represents the structure and organization of the mobile app. The
                purpose of this sitemap was to allow you to visualize how
                individual sections are related to each other. They also help
                you understand how users navigate through the mobile app.
              </p>

              <p className='font-calibre font-bold leading-[150%] mt-[13px] text-lemon text-[22px] md:text-[24px] lg:text-[28px]'>
                The Sitemap is available <span className='underline'>HERE</span>
              </p>
            </motion.div>

            <div className='mt-[128px] flex flex-col lg:flex-row gap-[18px] justify-between'>
              <h2 className='self-start top-10 lg:sticky z-10 font-calibre font-semibold lg:min-w-max text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
                Designing the Solution
              </h2>
              <div className='font-calibre'>
                <p className='max-w-[750px] font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                  To design a solution to the pain points, I combined some ideas
                  from the Comprehensive Audit sketches to form a solution.
                </p>
                <p className='max-w-[750px] font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                  I created a low-fidelity wireframe to represent the app's
                  skeleton and conducted usability studies with stakeholders.
                </p>
                <img
                  src={Proto}
                  width={567}
                  height={367}
                  className='w-full max-w-[750px] mt-[40px] mx-auto'
                />
              </div>
            </div>
            <div className='mt-[128px] flex flex-col lg:flex-row gap-[18px] justify-between'>
              <h2 className='self-start top-10 lg:sticky z-10 font-calibre font-semibold lg:min-w-max text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
                Final Solution
              </h2>
              <p className='max-w-[750px] font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                The design decisions were centered around seamless user
                experience, inclusion, and accessibility.
              </p>
            </div>

            <motion.div
              initial={{opacity: 0, y: 100}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                type: 'tween',
                delay: 0.2,
                duration: 0.6,
                ease: 'easeOut',
              }}
              className='mt-[128px]'
            >
              <h2 className='font-calibre font-semibold w-[full] text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
                Registration
              </h2>
              <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                I tried to simplify the registration process to accommodate the
                not-to-learned individuals so they could follow through. The
                users are prompted to choose their preferred sign-up account
                type before signing up. The sign-up process includes SSO (Single
                Identity Sign-On), thus prioritizing popular sign-up methods
                like Google and Apple.
              </p>
              <img
                src={Registration}
                width={567}
                height={367}
                className='w-full max-w-[1024px] mt-[40px] mx-auto'
              />
            </motion.div>

            <motion.div
              initial={{opacity: 0, y: 100}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                type: 'tween',
                delay: 0.2,
                duration: 0.6,
                ease: 'easeOut',
              }}
              className='mt-[128px]'
            >
              <h2 className='font-calibre font-semibold w-[full] text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
                End-to-End Screens
              </h2>
              <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                Each final implementation went through a series of iterations of
                user testing to meet the specific need of the final customer.
              </p>
              <motion.div
                initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{
                  type: 'tween',
                  delay: 0.2,
                  duration: 0.6,
                  ease: 'easeOut',
                }}
                className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[40px] lg:gap-x-[80px] lg:gap-y-[20px] font-calibre'
              >
                <img
                  src={RositaMob1}
                  width={567}
                  height={367}
                  className='w-full max-w-[1024px] mt-[40px] mx-auto'
                />
                <img
                  src={RositaMob2}
                  width={567}
                  height={367}
                  className='w-full max-w-[1024px] mt-[40px] mx-auto'
                />
                <img
                  src={RositaMob3}
                  width={567}
                  height={367}
                  className='w-full max-w-[1024px] mt-[40px] mx-auto'
                />
                <img
                  src={RositaMob4}
                  width={567}
                  height={367}
                  className='w-full max-w-[1024px] mt-[40px] mx-auto'
                />
                <img
                  src={RositaMob5}
                  width={567}
                  height={367}
                  className='w-full max-w-[1024px] mt-[40px] mx-auto'
                />
                <img
                  src={RositaMob6}
                  width={567}
                  height={367}
                  className='w-full max-w-[1024px] mt-[40px] mx-auto'
                />
                <img
                  src={RositaMob7}
                  width={567}
                  height={367}
                  className='w-full max-w-[1024px] mt-[40px] mx-auto'
                />
                <img
                  src={RositaMob8}
                  width={567}
                  height={367}
                  className='w-full max-w-[1024px] mt-[40px] mx-auto'
                />
                <img
                  src={RositaMob9}
                  width={567}
                  height={367}
                  className='w-full max-w-[1024px] mt-[40px] mx-auto'
                />
                <img
                  src={RositaMob10}
                  width={567}
                  height={367}
                  className='w-full max-w-[1024px] mt-[40px] mx-auto'
                />
                <img
                  src={RositaMob11}
                  width={567}
                  height={367}
                  className='w-full max-w-[1024px] mt-[40px] mx-auto'
                />
                <img
                  src={RositaMob12}
                  width={567}
                  height={367}
                  className='w-full max-w-[1024px] mt-[40px] mx-auto'
                />
              </motion.div>
              <motion.img
                initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{
                  type: 'tween',
                  delay: 0.2,
                  duration: 0.6,
                  ease: 'easeOut',
                }}
                src={Rosita1}
                width={567}
                height={367}
                className='w-full max-w-[1024px] mt-[40px] mx-auto'
              />
              <motion.img
                initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{
                  type: 'tween',
                  delay: 0.2,
                  duration: 0.6,
                  ease: 'easeOut',
                }}
                src={Rosita2}
                width={567}
                height={367}
                className='w-full max-w-[1024px] mt-[40px] mx-auto'
              />
              <motion.img
                initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{
                  type: 'tween',
                  delay: 0.2,
                  duration: 0.6,
                  ease: 'easeOut',
                }}
                src={Rosita3}
                width={567}
                height={367}
                className='w-full max-w-[1024px] mt-[40px] mx-auto'
              />
              <p className='font-calibre text-center font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                Would you like to see all the screens in a prototype? —{' '}
                <span className='underline text-lemon font-normal '>
                  Here is the final prototype.
                </span>
              </p>
            </motion.div>

            <motion.div
              initial={{opacity: 0, y: 100}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                type: 'tween',
                delay: 0.2,
                duration: 0.6,
                ease: 'easeOut',
              }}
              className='mt-[128px]'
            >
              <h2 className='font-calibre font-semibold w-[full] text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
                Usability Testing
              </h2>
              <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                Usability testing of the high-fidelity prototype was conducted
                to see how users interact with the product. I designed a test
                plan and conducted usability testing to validate the concept.
                Participants were given different tasks, and their behaviour was
                observed. They were encouraged to discuss openly whatever came
                into their mind while using the prototype.
              </p>
              <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                The application evaluation was conducted with three users, and
                below are the observations and feedback.
              </p>

              <div className='ml-8'>
                <motion.p
                  initial={{opacity: 0, y: 100}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{
                    type: 'tween',
                    delay: 0.2,
                    duration: 0.6,
                    ease: 'easeOut',
                  }}
                  className='flex gap-x-4 items-center font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'
                >
                  1. All the screens were neat, clean, and easy to understand
                </motion.p>
                <motion.p
                  initial={{opacity: 0, y: 100}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{
                    type: 'tween',
                    delay: 0.2,
                    duration: 0.6,
                    ease: 'easeOut',
                  }}
                  className='flex gap-x-4 items-center font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'
                >
                  2. Process of ordering food was seamless and quick
                </motion.p>
                <motion.p
                  initial={{opacity: 0, y: 100}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{
                    type: 'tween',
                    delay: 0.2,
                    duration: 0.6,
                    ease: 'easeOut',
                  }}
                  className='flex gap-x-4 items-center font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'
                >
                  3. It would be better if I could customize my meals
                </motion.p>
                <motion.p
                  initial={{opacity: 0, y: 100}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{
                    type: 'tween',
                    delay: 0.2,
                    duration: 0.6,
                    ease: 'easeOut',
                  }}
                  className='flex gap-x-4 items-center font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'
                >
                  4. Icons and navigation were spelled out correctly
                </motion.p>
              </div>
              <motion.p
                initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{
                  type: 'tween',
                  delay: 0.2,
                  duration: 0.6,
                  ease: 'easeOut',
                }}
                className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'
              >
                From the overall test findings, it can be inferred that the
                concept would succeed in performing specific tasks. It has
                helped uncover usability issues that need to be addressed.
              </motion.p>
            </motion.div>
            <motion.p
              initial={{opacity: 0, y: 100}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                type: 'tween',
                delay: 0.2,
                duration: 0.6,
                ease: 'easeOut',
              }}
              className='font-calibre leading-[150%] mt-[13px] text-lemon font-bold text-[22px] md:text-[24px] lg:text-[28px]'
            >
              See the Rosita Cuisine Usability Test Plan{' '}
              <span className='underline'>HERE</span>
            </motion.p>
            <motion.div
              initial={{opacity: 0, y: 100}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                type: 'tween',
                delay: 0.2,
                duration: 0.6,
                ease: 'easeOut',
              }}
              className='mt-[128px] flex flex-col lg:flex-row gap-[18px] justify-between'
            >
              <h2 className='self-start top-10 lg:sticky z-10 font-calibre font-semibold lg:min-w-max text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
                Major Takeaways
              </h2>
              <motion.div
                initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{
                  type: 'tween',
                  delay: 0.2,
                  duration: 0.6,
                  ease: 'easeOut',
                }}
                className='font-calibre'
              >
                <p className='max-w-[750px] font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                  I found this task amazing as it opened my mind to various
                  techniques and processes for creating solutions to pertinent
                  business challenges.
                </p>
                <p className='mt-10 border-b border-b-1 border-b-gray  max-w-[750px] font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px] leading-[218%]'>
                  01
                </p>

                <p className='mt-4 max-w-[750px] font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                  I loved working on this project as I learned how to manage
                  time, make decisions based on our limited resources, and hack
                  through all blockers.
                </p>
                <p className='mt-14 border-b border-b-1 border-b-gray max-w-[750px] font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px] leading-[218%]'>
                  02
                </p>
                <p className='mt-4 max-w-[750px] font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                  Also, I could apply all my knowledge and learnings while
                  collaborating and simultaneously meeting with stakeholders to
                  get the result.
                </p>
              </motion.div>
            </motion.div>
            <Contact />
          </div>
        </ProjectBodyLayout>
      </div>
    </ProjectLayout>
  );
};
export default Rosita;
