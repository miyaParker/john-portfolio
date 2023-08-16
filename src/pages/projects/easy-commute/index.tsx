import React from 'react';
import {motion} from 'framer-motion';
import Layout from '../../../components/Layout';
import Outcome from '../../../images/outcome.png';
import Research from '../../../images/desk-research.png';
import Research2 from '../../../images/desk-research-2b.png';
import Interview from '../../../images/user-interview.png';
import Map1 from '../../../images/map1.jpg';
import Map2 from '../../../images/map2.jpg';
import Feature from '../../../images/feature2.png';
import Constraints from '../../../images/constraints2.png';
import Screen1 from '../../../images/commute-screen-1.png';
import Screen2 from '../../../images/commute-screen-2.png';
import Screen3 from '../../../images/commute-screen-3.png';
import Screen4 from '../../../images/commute-screen-4.png';
import Screen5 from '../../../images/commute-screen-5.png';
import Screen6 from '../../../images/commute-screen-6.png';
import Screen7 from '../../../images/commute-screen-7.png';
import Screen8 from '../../../images/commute-screen-8.png';
import Screen9 from '../../../images/commute-screen-9.png';
import TaskFlow from '../../../images/taskflow.png';
import Icons from '../../../images/icons.png';
import Sketch1 from '../../../images/sketch1.png';
import Sketch2 from '../../../images/sketch2.png';
import Logo from '../../../images/commute-logo.png';
import Typo from '../../../images/commute-typo.png';
import Metrics from '../../../images/commute-metrics.png';
import StyleGuide from '../../../images/commute-style-guide.png';
import Contact from '../../../components/Contact';

const Rosita = () => {
  return (
    <Layout>
      <div className=''>
        <div className='relative w-full h-[640px] overflow-hidden relative top-[-120px] bg-fixed bg-[url("../images/commute-hero.jpg")]'>
          <div className='w-full h-full absolute z-10 bg-black opacity-80 top-0 bottom-0 left-0 right-0'></div>
        </div>
        <div className='absolute top-[180px] lg:top-[245px] z-20 w-full  px-[20px] md:px-[40px] lg:px-[80px]'>
          <div className=''>
            <p className='text-lemon text-center text-[18px] font-mono font-semibold'>
              Easy Commute Train Booking App
            </p>
            <h1 className='font-calibre font-bold text-center mx-auto max-w-[883px] text-[42px] md:text-[50px] lg:text-[60px] xl:text-[69px] leading-[120%]'>
              Free access to live train times and railway station information
            </h1>
          </div>
        </div>
        <div className='relative top-[-120px] w-full py-[0.8rem] px-[20px] md:px-[40px] lg:px-[80px] xl:px-[200px] flex flex-wrap gap-[20px] justify-between bg-white text-blue-100'>
          <div>
            <p className='font-bold font-calibre text-[28px] md:text-center'>
              Client
            </p>
            <p className='font-thin font-calibre text-[23px] md:text-center'>
              Easy Commute
            </p>
          </div>
          <div>
            <p className='font-bold font-calibre text-[28px] md:text-center'>
              Industry
            </p>
            <p className='font-thin font-calibre text-[23px] md:text-center'>
              Transportation
            </p>
          </div>
          <div>
            <p className='font-bold font-calibre text-[28px] md:text-center'>
              Platform
            </p>
            <p className='font-thin font-calibre text-[23px] md:text-center'>
              iOS
            </p>
          </div>
        </div>
        <div className='w-full px-[20px] md:px-[40px] lg:px-[80px] xl:px-[200px]'>
          <div className='mb-[80px]'>
            <h2 className='font-calibre font-semibold w-[full] text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
              Overview
            </h2>
            <p className='font-calibre font-thin leading-[150%] mt-[13px]  text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
              Easy Commute is a digital rail technology platform that sells
              train tickets and rail cards and provides free access to live
              train times and railway station information through a digital
              mobile app. You can view the prototype here. Based on field
              interviews and usability testing, Easy Commute allows the booking
              of tickets to be easy and uncomplicated, as well as making it easy
              for users to see and track their journeys and train times.
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
              Introducing Easy Commute
            </h2>
            <div className='pt-[28px] lg:pt-[36px] flex flex-col lg:flex-row gap-[18px] justify-between'>
              <div className='max-w-[586px] flex-1'>
                <h3 className='font-calibre font-semibold w-[full] text-[18px] md:text-[20px] lg:text-[22px] leading-[200%] text-white'>
                  What is Easy Commute?
                </h3>
                <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] leading-[138%] md:text-[24px] lg:text-[28px]'>
                  Easy Commute is a digital rail technology platform that offers
                  train tickets and rail cards for sale. It provides a
                  user-friendly mobile app with live train times and railway
                  station information. The platform simplifies the ticket
                  booking process and enables users to easily track their
                  journeys and train schedules based on positive feedback from
                  field interviews and usability testing.
                </p>
              </div>
              <div className='max-w-[593px] flex-1'>
                <h3 className='font-calibre font-semibold w-[full] text-[18px] md:text-[20px] lg:text-[22px] leading-[200%] text-white'>
                  My Role
                </h3>
                <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] leading-[138%] md:text-[24px] lg:text-[28px]'>
                  My role during this project was as a UX Designer and UX
                  Researcher. I was involved with each stage of the process,
                  which included initial user research, sketching and
                  wireframing, prototyping, usability testing and presenting
                  final designs and findings to clients.
                </p>
              </div>
            </div>

            <div className='pt-[28px] lg:pt-[36px] flex flex-col lg:flex-row gap-[18px] justify-between'>
              <div className='max-w-[586px] flex-1'>
                <h3 className='font-calibre font-semibold w-[full] text-[18px] md:text-[20px] lg:text-[22px] leading-[200%] text-white'>
                  Timeline
                </h3>
                <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] leading-[138%] md:text-[24px] lg:text-[28px]'>
                  12 Weeks
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
                  Easy Commute
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
          >
            <h2 className='mt-[128px] font-calibre font-semibold w-[full] text-[32px] md:text-[38px] lg:text-[40px] leading-[138%] text-white'>
              Defining the problem
            </h2>
            <p className='w-full font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] leading-[138%] md:text-[24px] lg:text-[28px]'>
              "Who am I designing for, and what challenges are they facing
              currently with accessing and booking the train?". I kept asking
              myself these questions as I tried to define the problem space and
              who to design for. I first narrowed my user group to Nigerians
              between the ages of 16 - 64, as this age range has the highest
              internet adoption rate (source).
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
          >
            <h2 className='font-calibre mt-[128px] font-semibold w-[full] text-[32px] md:text-[38px] lg:text-[40px] leading-[138%] text-white'>
              Problem Statement
            </h2>
            <p className='w-full font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] leading-[138%] md:text-[24px] lg:text-[28px]'>
              Booking and managing train trips in Nigeria can be difficult due
              to a fragmented and confusing transportation system. There is a
              need for a personalized mobile app product that integrates
              multiple train operators' ticketing systems, offers real-time
              information on train schedules and delays, and facilitates
              seamless booking and payment processes.
            </p>
            <p className='w-full font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] leading-[138%] md:text-[24px] lg:text-[28px]'>
              This app will ultimately improve the travel experience of train
              users in Nigeria by increasing efficiency, reducing the risk of
              missed trips, and decreasing additional costs.
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
              Final Outcome
            </h2>
            <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
              These were the final results of what we decided as the metrics and
              KPIs for the Easy Commute Mobile App.
            </p>
            <img
              src={Outcome}
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
              Conducting Desk Research
            </h2>
            <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
              I did some problem exploration by exploring the Desk Research
              method to understand the existing pain points of the train users
              and how competitors and users behave. I researched several forums
              and top websites with personal rapport with users and detailed
              their pain points. Getting this information early in the process
              was essential before having an idea or prototyping.
            </p>
            <img
              src={Research}
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
              src={Research2}
              width={567}
              height={367}
              className='w-full max-w-[1024px] mt-[40px] mx-auto'
            />
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
              To further buttress and solidify the response gotten from this
              desk research, I did deeper research and got a paper published
              around the “Challenges of Rail Transportation in South West
              Nigeria by Centre for Logistics and Transport Studies (
              <span className='font-bold'>CELTRAS</span>), Faculty of Social
              Sciences, School of Graduate Studies, University of Port Harcourt,
              Nigeria which is available{' '}
              <span className='underline font-bold text-lemon'>HERE</span>
            </motion.p>
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
              User Research
            </h2>
            <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
              In this process phase, I created an interview guide for each of
              the guided interviews. I approached the data collection with f
              ixed, non-leading questions to maintain consistency across the
              discussions and gain relevant insights. The goal for the interview
              was to indiscriminately gather personal opinions on each
              individual's experience with train booking and gather their pain
              points and challenges.
            </p>
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
              src={Interview}
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
              Affinity Mapping
            </h2>
            <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
              In this process phase, I created an interview guide for each of
              the guided interviews. I approached the data collection with
              fixed, non-leading questions to maintain consistency across the
              discussions and gain relevant insights. The goal for the interview
              was to indiscriminately gather personal opinions on each
              individual's experience with train booking and gather their pain
              points and challenges.
            </p>
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
              src={Map1}
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
              src={Map2}
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
            <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
              For Easy Commute Mobile app, I ranked and organized features based
              on customer value, business goals, the amount of time and cost,
              and technical viability.
            </p>
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
              Constraints
            </h2>
            <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
              For this project, I detailed the constraints I encountered while
              brainstorming and ideating for Easy Commute MVP design
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
            <h2 className='font-calibre font-semibold lg:min-w-max  text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
              Solution
            </h2>
            <p className='w-full font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
              For this project, I detailed the constraints I encountered while
              brainstorming and ideating for Easy Commute MVP design
            </p>
            <img
              src={Screen1}
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
              src={Screen2}
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
              src={Screen3}
              width={567}
              height={367}
              className='w-full max-w-[1024px] mt-[40px] mx-auto'
            />
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
              className='w-full mt-[80px] font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'
            >
              My solution is a digital ticket booking product that helps users
              interested in traveling to order and buy tickets from the comfort
              of their homes. The users can search for daily train movements
              based on timings and locations, verify their ID cards within
              minutes of upload, top up their rail cards, and pay for tickets
              with their debit card, PayPal, or their Apple or Google Pay wallet
              within seconds.
            </motion.p>
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
              Core Taskflow
            </h2>
            <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
              The core flow of the application was to provide people with an
              easy means to book a train at their convenience. I decided to go
              with a simplified process and task flow for efficiency. For this
              project, I had the constraint of exploring only one task flow, and
              the MVP will allow people to book a train.
            </p>
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
              src={TaskFlow}
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
              Component Library and UI Explorations
            </h2>
            <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
              Here, I used all the available data and guidance from the mood
              board to create an atomic design component library for the Easy
              Commute Mobile app. This included creating buttons, accordions,
              sections, and pages from scratch to ensure visual consistency and
              facilitate quick design changes.
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
              Icons and Illustrations
            </h2>
            <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
              Icons relevant to Easy Commute were carefully sourced from
              Untitled Icons libraries, and Illustrations used across the entire
              product were sourced{' '}
              <span className='text-lemon font-bold underline'>HERE</span>.
            </p>
            <img
              src={Icons}
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
              Wireframe - Initial Sketches
            </h2>
            <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
              I sketched some ideas to understand the problem and flesh out my
              initial thoughts of the necessary screens needed for Easy Commute
            </p>
            <img
              src={Sketch1}
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
              src={Sketch2}
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
              Onboarding Screens
            </h2>
            <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
              These are the first things the users see when launching your
              application. The goal here is to demonstrate some facts about the
              application, such as how to use it, its features, and how it can
              help the users.
            </p>
            <img
              src={Screen4}
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
              Book a Train
            </h2>
            <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
              These screens show the user how to search for trains, check time
              availability and price, verify documents for a first-time user,
              and an option to choose a payment method for the ticket purchase.
            </p>
            <img
              src={Screen5}
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
              src={Screen6}
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
              Payment Method
            </h2>
            <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
              As a solution to one of the problems gotten from both desk
              research and user interviews and to cater for accessibility for
              all, I factored in different methods of payment so that everyone,
              irrespective of their persona, would be able to pay for their
              train ticket at not more than 2-3 clicks of a button. This has
              accommodated the cash-only means of payment problem identified
              during the research phase.
            </p>
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
              src={Screen7}
              width={567}
              height={367}
              className='w-full max-w-[1024px] mt-[40px] mx-auto'
            />
            <motion.img
              src={Screen8}
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
              Verify Documents
            </h2>
            <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
              One of the major problems highlighted during the research phase
              was that users were streamlined to just a limited number of types
              of ID cards to verify their details. As a solution, I added a
              feature to the product that allows everyone to verify their
              documents with different ID cards.
            </p>
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
              src={Screen9}
              width={567}
              height={367}
              className='w-full max-w-[1024px] mt-[40px] mx-auto'
            />
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
              You can view the full design screens{' '}
              <span className='underline font-bold text-lemon'>HERE</span>
            </motion.p>
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
              Go-to-Market Strategy
            </h2>
            <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
              I created a step-by-step plan to launch the Easy Commute mobile
              app successfully. It incorporates a roadmap that measures the
              viability of Easy Commute's success and predicts its performance
              based on market research, prior examples, and competitive data.
            </p>
            <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
              The Go-To-Market strategy elucidates and identifies our target
              audience, includes a marketing plan, and outlines the sales
              strategy to implement.
            </p>
            <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
              You can take a look at the detailed GTM Strategy{' '}
              <span className='underline font-bold text-lemon'>HERE</span>
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
              Style Guide and Colors
            </h2>
            <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
              For this project, I created a document that addresses logo usage,
              font usage, and color usage to ensure complete uniformity in style
              and formatting wherever the brand is used.
            </p>
            <img
              src={StyleGuide}
              width={567}
              height={367}
              className='w-full max-w-[881px] mt-[40px] mx-auto'
            />

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
              className='ml-8 mt-[80px]'
            >
              <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                The idea for the primary color Blue (03045E) was borne out of
                four thoughts:
              </p>

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
                1. <span className='font-bold text-white'>Trust: </span> Blue is
                often associated with trust, dependability, and reliability. As
                such, using blue as the primary color for a train booking app
                can help establish a sense of trust between the user and the
                app.
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
                className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'
              >
                2. <span className='font-bold text-white'>Calmness: </span> Blue
                is also often associated with calmness, serenity, and
                relaxation. As booking a train can be a stressful experience for
                some users, using blue as the primary color can help create a
                calming effect and reduce anxiety.
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
                className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'
              >
                2.{' '}
                <span className='font-bold text-white'>Gender-neutral: </span>{' '}
                Blue is a color that is generally considered to be
                gender-neutral, which can be important for a train booking app
                that is likely to have users of all genders.
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
                className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'
              >
                2.{' '}
                <span className='font-bold text-white'>
                  {' '}
                  Association with travel:{' '}
                </span>{' '}
                Blue is a color that is commonly associated with travel. Using
                blue as the primary color for a train booking app can help to
                create a connection in the user's mind between the app and
                travel more broadly.
              </motion.p>
            </motion.div>
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
              Logo
            </h2>
            <img
              src={Logo}
              width={567}
              height={367}
              className='w-full max-w-[881px] mt-[40px] mx-auto'
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
              Typography
            </h2>
            <img
              src={Typo}
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
              Product KPIs and Success Metrics
            </h2>
            <img
              src={Metrics}
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
              Validation
            </h2>
            <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
              Easy Commute app should not become just a one-time delivery. It
              should be iterated by considering usability tests, A/B tests, and
              other in-depth surveys with the user to improve the initial
              version. That said, launching this functionality is only the first
              step toward the product’s success.
            </p>
            <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
              In this way, analyzing metrics such as daily and monthly active
              users, bounce rate, churn rate, and retention rate, would be
              important for understanding success and elaborating the product
              roadmap.
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
              Aftermath
            </h2>
            <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
              This project was exciting and interesting. It allowed me to learn
              a new prototyping tool, Protopie, become more versed in using
              interactive components, and involve tons of desk and market
              research.
            </p>
            <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
              The next step will be to conduct more robust user testing on the
              prototype I currently have to improve the user flow. I would also
              love to explore more User Epics for the application, such as
              precise booking dates and times, phone notifications for discount
              prices, and opportunities for ticket refunds.
            </p>
          </motion.div>
          <Contact />
        </div>
      </div>
    </Layout>
  );
};
export default Rosita;
