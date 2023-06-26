import React from 'react';
import Layout from '../../../components/Layout';
import RositaHero from '../../../images/rosita-hero.svg';
import Quote from '../../../images/format-quote.svg';

const Rosita = () => {
  return (
    <Layout>
      <div className='pt-[200px] px-[20px] md:px-[40px] lg:px-[80px] xl:px-[120px] 2xl:px-[204px]'>
        <div className='w-full'>
          <p className='uppercase font-mono lg:text-[18px] text-lemon uppercase mb-[20px] font-mono leading-[28px]'>
            Case Study
          </p>
          <h1 className='font-calibre w-[full] text-[42px] leading-[52px] md:text-[50px] lg:text-[60px] xl:text-[70px] md:leading-[60px] lg:leading-[72px] xl:leading-[84px] font-bold text-white'>
            Rosita African Cuisine
          </h1>
          <img
            width={974}
            height={735}
            src={RositaHero}
            className='block mt-[102px] mb-[240px]'
          />
          <h2 className='font-calibre w-[full] text-[30px] leading-[52px] md:text-[32px] lg:text-[35px] xl:text-[40px] md:leading-[68px] lg:leading-[70px] xl:leading-[75px] font-bold text-white'>
            Overview
          </h2>
          <p className='font-calibre mt-[13px] mb-[80px] xl:max-w-[1030px] text-gray max-w-[846px] text-[22px] xl:text-[24px]'>
            Rosita African Cuisine is a chain of restaurants with the vision of
            delivering the best African dishes to everyone across Africa. Being
            a premium brand that emphasizes excellent service delivery, Rosita
            African Cuisine has decided to develop an online solution that will
            enable its customers to place food orders from the restaurant’s menu
            and request home delivery.
          </p>
          <h2 className='font-calibre w-[full] text-[30px] leading-[52px] md:text-[32px] lg:text-[35px] xl:text-[40px] md:leading-[68px] lg:leading-[70px] xl:leading-[75px] font-bold text-white'>
            Goal
          </h2>
          <p className='font-calibre mt-[13px] mb-[80px] text-gray max-w-[846px] text-[26px] xl:text-[28px] 2xl:text-[30px]'>
            To develop an online solution that will enable its customers to
            place food orders from the restaurant’s menu, and request home
            delivery
          </p>
          <h2 className='font-calibre w-[full] text-[30px] leading-[52px] md:text-[32px] lg:text-[35px] xl:text-[40px] md:leading-[68px] lg:leading-[70px] xl:leading-[75px] font-bold text-white'>
            The Challenge
          </h2>
          <p className='font-calibre mt-[13px] mb-[80px] text-gray xl:max-w-[1030px] text-[26px] xl:text-[28px] 2xl:text-[30px]'>
            The actual focus of this project was to design a reservation app for
            Rosita African Cuisine’s customers to order their meals and food
            promptly and get delivered as fast as possible.
          </p>
          <h2 className='font-calibre w-[full] text-[30px] leading-[52px] md:text-[32px] lg:text-[35px] xl:text-[40px] md:leading-[68px] lg:leading-[70px] xl:leading-[75px] font-bold text-white'>
            Problem Statement
          </h2>
          <p className='font-calibre mt-[13px] text-gray max-w-[910px] mb-[64px] text-[26px] xl:text-[28px] 2xl:text-[30px]'>
            For this project, I created a problem statement using the 5 W’s
            framework (who, what, when, where, why, and how).
          </p>
          <div className='prob py-[64px] mb-[80px] bg-blue-200 rounded-[20px] px-[195px] w-full relative'>
            <p className='font-calibre text-[24px] max-w-[910px] before:block before:relative before:left-[-48px] before:top-[40px] before:content-[url("../images/format-quote.svg")] after:rotate-[180deg] after:relative after:block after:right-0 after:top-[-24px] after:content-[url("../images/format-quote.svg")]'>
              John is a Busy Executive who needs an easy way to get food
              (preferably lunch) during work hours because his kind work does
              not allow leave his workspace for a long time to get food.
            </p>
          </div>

          <h2 className='font-calibre w-[full] text-[30px] leading-[52px] md:text-[32px] lg:text-[35px] xl:text-[40px] md:leading-[68px] lg:leading-[70px] xl:leading-[75px] font-bold text-white'>
            My Design Process
          </h2>
          <p className='font-calibre mt-[13px] text-gray xl:max-w-[1030px] text-[26px] xl:text-[28px] 2xl:text-[30px]'>
            As the UX designer on the team, I couldn’t afford to make
            assumptions about the needs of the users. Instead, I took out time
            to ask users directly about their needs and wants, which our product
            design can address. I asked questions that begin with what, how, and
            why to gain a deeper understanding of users’ perspectives.
          </p>
          <h2 className='font-calibre w-[full] text-[30px] leading-[52px] md:text-[32px] lg:text-[35px] xl:text-[40px] md:leading-[68px] lg:leading-[70px] xl:leading-[75px] font-bold text-white'>
            Empathize
          </h2>
          <h3 className='font-calibre w-[full] text-[30px] leading-[52px] md:text-[32px] lg:text-[35px] xl:text-[40px] md:leading-[68px] lg:leading-[70px] xl:leading-[75px] font-bold text-white'>
            User Research
          </h3>
          <p className='font-calibre mt-[13px] text-gray xl:max-w-[1030px] text-[26px] xl:text-[28px] 2xl:text-[30px]'>
            From here, I started interviews with our customers. Taking time to
            watch them interact with me provided me with physical cues that
            affected my research outcomes. To help capture observations, I took
            detailed notes and even recorded some sessions with users.
          </p>
          <div>
            <p className='font-calibre mt-[13px] text-gray xl:max-w-[1030px] text-[26px] xl:text-[28px] 2xl:text-[30px]'>
              For the purposes of the interview, I took into consideration some
              selected demographics, which included:
            </p>
            <div className='flex flex-row ju items-center'>
              <div className='w-[8px] h-[2px] bg-gray mr-2 leading-[48px]'></div>
              <p className='font-calibre text-gray max-w-[846px] text-[26px] xl:text-[28px] 2xl:text-[30px]'>
                Ages 18–62
              </p>
            </div>
            <div className='flex items-center'>
              <div className='w-2 h-2 bg-gray mr-2'></div>
              <p className='font-calibre text-gray max-w-[846px] text-[26px] xl:text-[28px] 2xl:text-[30px]'>
                Lives in metropolitan or suburban areas
              </p>
            </div>
            <div className='flex flex-row items-center'>
              <div className='w-2 h-2 bg-gray mr-2'></div>
              <p className='font-calibre text-gray max-w-[846px] text-[26px] xl:text-[28px] 2xl:text-[30px]'>
                Include participants of different genders
              </p>
            </div>
            <div className='flex items-center'>
              <div className='w-2 h-2 bg-gray mr-2'></div>
              <p className='font-calibre text-gray max-w-[846px] text-[26px] xl:text-[28px] 2xl:text-[30px]'>
                Include participants with different abilities
              </p>
            </div>
            <div className='flex items-center'>
              <div className='w-2 h-2  bg-gray mr-2'></div>
              <p className='font-calibre text-gray max-w-[846px] text-[26px] xl:text-[28px] 2xl:text-[30px]'>
                Working professionals that are busy with work duties, are
                conscious about budget and want to eat healthily
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Rosita;
