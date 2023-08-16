import React from 'react';
import {motion} from 'framer-motion';
import {ProjectLayout, ProjectBodyLayout} from '../../../components/Layout';
import Contact from '../../../components/Contact';
import Features from '../../../images/life-features.jpg';
import Wireframe from '../../../images/life-wireframe.jpg';
import Design from '../../../images/life-design.jpg';
import Screen1 from '../../../images/life-screen1.jpg';
import Screen2 from '../../../images/life-screen2.jpg';
import Screen3 from '../../../images/life-screen3.jpg';
import Screen4 from '../../../images/life-screen4.jpg';
import Screen5 from '../../../images/life-screen5.jpg';
import Screen6 from '../../../images/life-screen6.jpg';
import Screen7 from '../../../images/life-screen7.jpg';
import Screen8 from '../../../images/life-screen8.jpg';
import Screen9 from '../../../images/life-screen9.jpg';
import Screen10 from '../../../images/life-screen10.jpg';
import Screen11 from '../../../images/life-screen11.jpg';
import Logo from '../../../images/life-logo.jpg';
import Typo from '../../../images/life-typo.jpg';
import Color from '../../../images/life-colors.jpg';

const Rosita = () => {
  return (
    <ProjectLayout>
      <div className=''>
        <motion.div className='relative w-full  h-[640px] bg-white overflow-hidden relative top-[-120px] bg-fixed bg-contain bg-center bg-[url("../images/life-hero.jpg")]'>
          <div className='w-full h-full absolute z-10 bg-black opacity-80 top-0 bottom-0 left-0 right-0'></div>
        </motion.div>
        <div className='absolute top-[180px] lg:top-[245px] z-20 w-full  px-[20px] md:px-[40px] lg:px-[80px]'>
          <div className=''>
            <p className='text-lemon text-center text-[18px] font-mono font-semibold'>
              LifeSource Blood Donation App
            </p>
            <motion.h1 className='font-calibre font-bold text-center mx-auto max-w-[883px] text-[42px] md:text-[50px] lg:text-[60px] xl:text-[69px] leading-[120%]'>
              Ensuring the Sustainability of live and blood banks in Nigeria
            </motion.h1>
          </div>
        </div>
        <div className='w-full relative top-[-120px] py-[0.8rem] bg-white text-blue-100'>
          <div className='max-w-[1962px] mx-auto flex flex-wrap gap-x-[20px] justify-between px-[20px] md:px-[40px] lg:px-[80px] xl:px-[200px]'>
            <div>
              <p className='font-bold font-calibre text-[28px] md:text-center'>
                Client
              </p>
              <p className='font-thin font-calibre text-[23px] md:text-center'>
                LifeSource
              </p>
            </div>
            <div>
              <p className='font-bold font-calibre text-[28px] md:text-center'>
                Industry
              </p>
              <p className='font-thin font-calibre text-[23px] md:text-center'>
                HealthTech
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
        </div>
        <ProjectBodyLayout>
          <div className='w-full px-[20px] md:px-[40px] lg:px-[80px] xl:px-[200px]'>
            <div className='mb-[80px]'>
              <h2 className='font-calibre font-semibold w-[full] text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
                The Problem
              </h2>
              <p className='font-calibre font-thin leading-[150%] mt-[13px]  text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                There has been a recent rise in deaths due to the absence of
                quick blood donors and the bureaucracy associated with sick
                people quickly getting their required blood type. According to
                the WHO, out of the 75 countries that report fewer than 10
                donations per 1000 people, 38 are from Africa.
              </p>
            </div>
            <motion.div
              initial={{opacity: 0, y: '10vh'}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                type: 'tween',
                delay: 0.2,
                duration: 0.5,
                ease: 'easeOut',
              }}
            >
              <h2 className='mt-[128px] font-calibre font-semibold w-[full] text-[32px] md:text-[38px] lg:text-[40px] leading-[138%] text-white'>
                The Challenge
              </h2>
              <p className='w-full font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] leading-[138%] md:text-[24px] lg:text-[28px]'>
                To ensure the sustainability of lives and blood banks in
                Nigeria, we thought it important to design a mobile application
                that allows people desperately in need of blood to get quick
                access to blood in their neighborhood and locality without
                distance being a challenge to them getting good health care.
              </p>
              <p className='w-full font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] leading-[138%] md:text-[24px] lg:text-[28px]'>
                It also provides an opportunity for donors to donate blood
                freely at their convenience and at the nearest preferred blood
                donation center close to them without necessarily visiting a
                hospital.
              </p>
            </motion.div>

            <motion.div
              initial={{opacity: 0, y: '10vh'}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                type: 'tween',
                delay: 0.2,
                duration: 0.5,
                ease: 'easeOut',
              }}
            >
              <h2 className='font-calibre mt-[128px] font-semibold w-[full] text-[32px] md:text-[38px] lg:text-[40px] leading-[138%] text-white'>
                The Solution
              </h2>
              <p className='w-full font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] leading-[138%] md:text-[24px] lg:text-[28px]'>
                LifeSource is a blood donation app that connects potential
                donors to patients in need of blood. It makes reaching out to
                potential donors simple and helps people to become voluntary
                donors. In addition, donors can track the impact of their
                donations and create awareness around blood donation.
              </p>
              <p className='w-full font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] leading-[138%] md:text-[24px] lg:text-[28px]'>
                Every human being requires blood; hence, it is essential to all
                human life and the world over. This seems obvious because blood
                constitutes approximately 8 percent of body weight; the average
                male’s volume is between 5 and 6 liters, and the average
                female's is between 4 and 5 liters.
              </p>
              <motion.img
                initial={{opacity: 0, y: '10vh'}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{
                  type: 'tween',
                  delay: 0.2,
                  duration: 0.5,
                  ease: 'easeOut',
                }}
                src={Screen1}
                width={567}
                height={367}
                className='w-full max-w-[1024px] mt-[40px] mx-auto'
              />
              <p className='w-full font-calibre font-thin leading-[150%] mt-[80px] text-gray text-[22px] leading-[138%] md:text-[24px] lg:text-[28px]'>
                Underscoring the need for blood donations is the fact that
                Nigeria has the fourth-highest maternal mortality rate in the
                world, accounting for 19% of all maternal deaths globally, with
                postpartum hemorrhage (the loss of too much blood following
                birth) leading the cause of such deaths, and the lack of
                infrastructure to get crucial blood supplies in Nigeria
                compounds this problem.
              </p>
              <motion.img
                initial={{opacity: 0, y: '10vh'}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{
                  type: 'tween',
                  delay: 0.2,
                  duration: 0.5,
                  ease: 'easeOut',
                }}
                src={Screen2}
                width={567}
                height={367}
                className='w-full max-w-[1024px] mt-[40px] mx-auto'
              />
              <p className='w-full font-calibre font-thin leading-[150%] mt-[80px] text-gray text-[22px] leading-[138%] md:text-[24px] lg:text-[28px]'>
                Nigeria’s low blood donation rate is associated with the way
                people perceive it based on their religious beliefs. For
                instance, Jehovah's Witness believers see blood donation and
                transfusion as against the will of God.
              </p>
              <motion.img
                initial={{opacity: 0, y: '10vh'}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{
                  type: 'tween',
                  delay: 0.2,
                  duration: 0.5,
                  ease: 'easeOut',
                }}
                src={Screen3}
                width={567}
                height={367}
                className='w-full max-w-[1024px] mt-[40px] mx-auto'
              />
            </motion.div>

            <motion.div
              initial={{opacity: 0, y: '10vh'}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                type: 'tween',
                delay: 0.2,
                duration: 0.5,
                ease: 'easeOut',
              }}
              className='mt-[128px]'
            >
              <h2 className='font-calibre font-semibold w-[full] text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
                Design Process
              </h2>
              <img
                src={Design}
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
                To understand the problem better, I created two separate
                interviews for the project:
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
                  i) The Donors and Receivers
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
                  ii) The Hospital and Blood Banks
                </motion.p>
              </div>
            </div>
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
                Purpose of the Research
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
                This research aims to validate the claim of a lack of blood
                donors and the problems associated with blood donations.
                Furthermore, this research enlightens us on the steps and
                decisions to design a better solution to the problem. Design
                decisions were made regarding user flow, user pain points, and
                user goals based on the research results.
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
                After performing user interviews with 18 people, we discovered
                the key problem areas. This can be seen HERE
              </motion.p>
            </div>
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
                Major Problems from the Research
              </motion.h2>
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
                  i) The process of blood donation is cumbersome and tiring for
                  a lot of people
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
                  ii) The challenge of not being able to find donors nearby or
                  readily available
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
                  iii) Lack of proper awareness to donors on the benefits
                  attached to blood donation to citizens
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
                  iv) Poor Motivation to Donate
                </motion.p>
              </div>
            </div>
            <motion.div
              initial={{opacity: 0, y: '10vh'}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                type: 'tween',
                delay: 0.2,
                duration: 0.5,
                ease: 'easeOut',
              }}
              className='mt-[128px]'
            >
              <h2 className='font-calibre font-semibold w-[full] text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
                Solutions and App Features
              </h2>
              <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                After going through the response from the interview and
                pinpointing the pain points, frustrations, needs, and emotions
                of donors, I came up with a potential solution that addresses
                the discovered problems, putting the patients and donors in
                mind.
              </p>
              <motion.img
                initial={{opacity: 0, y: '10vh'}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{
                  type: 'tween',
                  delay: 0.2,
                  duration: 0.5,
                  ease: 'easeOut',
                }}
                src={Features}
                width={567}
                height={367}
                className='w-full max-w-[1024px] mt-[40px] mx-auto'
              />
            </motion.div>

            <motion.div
              initial={{opacity: 0, y: '10vh'}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                type: 'tween',
                delay: 0.2,
                duration: 0.5,
                ease: 'easeOut',
              }}
              className='mt-[128px]'
            >
              <h2 className='font-calibre font-semibold w-[full] text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
                User Persona and Empathy Map
              </h2>
              <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                After going through the response from the interview and
                pinpointing the pain points, frustrations, needs, and emotions
                of donors, I came up with a potential solution that addresses
                the discovered problems, putting the patients and donors in
                mind.
              </p>
            </motion.div>

            <motion.div
              initial={{opacity: 0, y: '10vh'}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                type: 'tween',
                delay: 0.2,
                duration: 0.5,
                ease: 'easeOut',
              }}
              className='mt-[128px]'
            >
              <h2 className='font-calibre font-semibold w-[full] text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
                User flow and Sitemap
              </h2>
              <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                After going through the response from the interview and
                pinpointing the pain points, frustrations, needs, and emotions
                of donors, I came up with a potential solution that addresses
                the discovered problems, putting the patients and donors in
                mind.
              </p>
            </motion.div>

            <motion.div
              initial={{opacity: 0, y: '10vh'}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                type: 'tween',
                delay: 0.2,
                duration: 0.5,
                ease: 'easeOut',
              }}
              className='mt-[128px]'
            >
              <h2 className='font-calibre font-semibold lg:min-w-max text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
                Low-fidelity Wireframe
              </h2>
              <img
                src={Wireframe}
                width={567}
                height={367}
                className='w-full max-w-[1024px] mt-[40px] mx-auto'
              />
            </motion.div>

            <motion.div
              initial={{opacity: 0, y: '10vh'}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                type: 'tween',
                delay: 0.2,
                duration: 0.5,
                ease: 'easeOut',
              }}
              className='mt-[128px]'
            >
              <h2 className='font-calibre font-semibold lg:min-w-max text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
                Onboarding Screens
              </h2>
              <p className='w-full font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                I decided to go ahead with a simple onboarding screen using
                illustrations to demonstrate blood donation. illustrations were
                gotten from storyset.com
              </p>
              <img
                src={Screen4}
                width={567}
                height={367}
                className='w-full max-w-[1024px] mt-[40px] mx-auto'
              />
            </motion.div>

            <motion.div
              initial={{opacity: 0, y: '10vh'}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                type: 'tween',
                delay: 0.2,
                duration: 0.5,
                ease: 'easeOut',
              }}
              className='mt-[128px]'
            >
              <h2 className='font-calibre font-semibold w-[full] text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
                Authentication
              </h2>
              <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                Users will be given two choices: login or sign up. Users are
                also asked to complete their accounts using a one-time password
                sent to their email box.
              </p>
              <img
                src={Screen5}
                width={567}
                height={367}
                className='w-full max-w-[1024px] mt-[40px] mx-auto'
              />
            </motion.div>

            <motion.div
              initial={{opacity: 0, y: '10vh'}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                type: 'tween',
                delay: 0.2,
                duration: 0.5,
                ease: 'easeOut',
              }}
              className='mt-[128px]'
            >
              <h2 className='font-calibre font-semibold w-[full] text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
                Home Screen
              </h2>
              <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                The card home screen was designed to simplify the content on the
                home page, thus creating pleasing and actionable experiences
                that keep the users engaged with the app.
              </p>
              <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                Based on research, I introduced a bottom navigation, so users
                have access to important features instantly.
              </p>
              <motion.img
                initial={{opacity: 0, y: '10vh'}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{
                  type: 'tween',
                  delay: 0.2,
                  duration: 0.5,
                  ease: 'easeOut',
                }}
                src={Screen6}
                width={567}
                height={367}
                className='w-full max-w-[1024px] mt-[40px] mx-auto'
              />
            </motion.div>
            <motion.div
              initial={{opacity: 0, y: '10vh'}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                type: 'tween',
                delay: 0.2,
                duration: 0.5,
                ease: 'easeOut',
              }}
              className='mt-[128px]'
            >
              <h2 className='font-calibre font-semibold w-[full] text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
                Blood Test Questions
              </h2>
              <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                The card home screen was designed to simplify the content on the
                home page, thus creating pleasing and actionable experiences
                that keep the users engaged with the app.
              </p>
              <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                Based on research, I introduced a bottom navigation, so users
                have access to important features instantly.
              </p>
              <motion.img
                initial={{opacity: 0, y: '10vh'}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{
                  type: 'tween',
                  delay: 0.2,
                  duration: 0.5,
                  ease: 'easeOut',
                }}
                src={Screen7}
                width={567}
                height={367}
                className='w-full max-w-[1024px] mt-[40px] mx-auto'
              />
            </motion.div>

            <motion.div
              initial={{opacity: 0, y: '10vh'}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                type: 'tween',
                delay: 0.2,
                duration: 0.5,
                ease: 'easeOut',
              }}
              className='mt-[128px]'
            >
              <h2 className='font-calibre font-semibold w-[full] text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
                Result of Test Questions
              </h2>
              <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                After a series of questions have been asked of the donor, a
                screen is shown to tell whether the screening stage was
                successful or not. From there, the donor would be prompted to
                either go back to the homepage or proceed to donate blood. This
                reduces the process of blood donation from being cumbersome and
                tiring for a lot of people, which was one of the problems
                highlighted during the research and empathizing stages.
              </p>
              <img
                src={Screen8}
                width={567}
                height={367}
                className='w-full max-w-[1024px] mt-[40px] mx-auto'
              />
            </motion.div>
            <motion.div
              initial={{opacity: 0, y: '10vh'}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                type: 'tween',
                delay: 0.2,
                duration: 0.5,
                ease: 'easeOut',
              }}
              className='mt-[128px]'
            >
              <h2 className='font-calibre font-semibold w-[full] text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
                Donor Section
              </h2>
              <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                In the donor section, users can enter the blood type and
                location they are looking for and proceed to send messages.
                After obtaining a list of donors available through donor search,
                donor search can send donor requests to available donors.
              </p>
              <motion.img
                initial={{opacity: 0, y: '10vh'}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{
                  type: 'tween',
                  delay: 0.2,
                  duration: 0.5,
                  ease: 'easeOut',
                }}
                src={Screen9}
                width={567}
                height={367}
                className='w-full max-w-[936px] mt-[40px] mx-auto'
              />
            </motion.div>
            <motion.div
              initial={{opacity: 0, y: '10vh'}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                type: 'tween',
                delay: 0.2,
                duration: 0.5,
                ease: 'easeOut',
              }}
              className='mt-[128px]'
            >
              <h2 className='font-calibre font-semibold w-[full] text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
                Profile Section
              </h2>
              <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                Users can turn on and off their donor status on the profile
                page, check rewards won, points earned, badges, total donations,
                and active donations and rewards.
              </p>
              <motion.img
                initial={{opacity: 0, y: '10vh'}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{
                  type: 'tween',
                  delay: 0.2,
                  duration: 0.5,
                  ease: 'easeOut',
                }}
                src={Screen10}
                width={567}
                height={367}
                className='w-full max-w-[936px] mt-[40px] mx-auto'
              />
            </motion.div>
            <motion.div
              initial={{opacity: 0, y: '10vh'}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                type: 'tween',
                delay: 0.2,
                duration: 0.5,
                ease: 'easeOut',
              }}
              className='mt-[128px]'
            >
              <h2 className='font-calibre font-semibold w-[full] text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
                Schedule Appointment
              </h2>
              <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                The user can schedule a donation appointment at his convenience
                and choose the preferred and closest blood collection center,
                date, and time. He can also reschedule based on his
                availability.
              </p>
              <motion.img
                initial={{opacity: 0, y: '10vh'}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{
                  type: 'tween',
                  delay: 0.2,
                  duration: 0.5,
                  ease: 'easeOut',
                }}
                src={Screen11}
                width={567}
                height={367}
                className='w-full max-w-[936px] mt-[40px] mx-auto'
              />
            </motion.div>
            <motion.div
              initial={{opacity: 0, y: '10vh'}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                type: 'tween',
                delay: 0.2,
                duration: 0.5,
                ease: 'easeOut',
              }}
              className='mt-[128px]'
            >
              <h2 className='font-calibre font-semibold w-[full] text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
                Logo
              </h2>
              <motion.img
                initial={{opacity: 0, y: '10vh'}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{
                  type: 'tween',
                  delay: 0.2,
                  duration: 0.5,
                  ease: 'easeOut',
                }}
                src={Logo}
                width={567}
                height={367}
                className='w-full max-w-[936px] mt-[40px] mx-auto'
              />
            </motion.div>
            <motion.div
              initial={{opacity: 0, y: '10vh'}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                type: 'tween',
                delay: 0.2,
                duration: 0.5,
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
                className='w-full max-w-[936px] mt-[40px] mx-auto'
              />
            </motion.div>
            <motion.div
              initial={{opacity: 0, y: '10vh'}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                type: 'tween',
                delay: 0.2,
                duration: 0.5,
                ease: 'easeOut',
              }}
              className='mt-[128px]'
            >
              <h2 className='font-calibre font-semibold w-[full] text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
                Color
              </h2>
              <img
                src={Color}
                width={567}
                height={367}
                className='w-full max-w-[936px] mt-[40px] mx-auto'
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
                What I Learnt
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
                Designing the app has been a challenging and rewarding journey.
                It was clear from the onset that the major challenge would be to
                design a mobile application that allows people desperately in
                need of blood to get quick access to blood in their neighborhood
                and locality without distance being a challenge to them getting
                good health care.
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
                I researched the pain points and the underlying reasons and
                opinions behind the dwindling state of blood donation. I
                understood the users’ needs through the interviews and
                conversations with people in selected categories (Medical
                Personnel and Individuals). Finally, I faced the challenge of
                creating an engaging app both from the user experience
                perspective and the visual perspective.
              </motion.p>
            </div>
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
                What I Learnt
              </motion.h2>
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
                  Deep research about specific features
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
                  Usability testing of the prototype with users
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
                  Improve user flow
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
                  A comprehensive business model
                </motion.p>
              </div>
            </div>
            <Contact />
          </div>
        </ProjectBodyLayout>
      </div>
    </ProjectLayout>
  );
};
export default Rosita;
