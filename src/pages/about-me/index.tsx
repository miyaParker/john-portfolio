import React from 'react';
import Layout from '../../components/Layout';
import Arrow from '../../images/arrow.svg';
import Contact from '../../components/Contact';
import Chef from '../../images/chef.svg';
import Travel from '../../images/travel.svg';
import Microphone from '../../images/microphone.svg';
import Microphone2 from '../../images/mic.svg';

import Food1 from '../../images/food1.svg';
import Food2 from '../../images/food2.svg';
import Food3 from '../../images/food3.svg';
import Food4 from '../../images/food4.svg';

import Book from '../../images/book.svg';
import Book1 from '../../images/book1.svg';
import Book2 from '../../images/book2.svg';
import Book3 from '../../images/book3.svg';
import Book4 from '../../images/book4.svg';
import Book5 from '../../images/book5.svg';

import Pod1 from '../../images/pod1.svg';
import Pod2 from '../../images/pod2.svg';
import Pod3 from '../../images/pod3.svg';
import Pod4 from '../../images/pod4.svg';
import Pod5 from '../../images/pod5.svg';

import Music1 from '../../images/music1.svg';
import Music2 from '../../images/music2.svg';
import Music3 from '../../images/music3.svg';
import Music4 from '../../images/music4.svg';
import Music5 from '../../images/music5.svg';

const Projects = () => {
  return (
    <Layout>
      <div className='pt-[200px] px-[20px] md:px-[40px] lg:px-[80px] xl:px-[120px] 2xl:px-[204px]'>
        <div className='w-full flex flex-col lg:flex-row gap-x-[28px] lg:gap-x-[48px] xl:gap-x-[58px] 2xl:gap-x-[88px]'>
          <div className='w-full lg:w-[45%] h-[526px] md:h-[626px] lg:h-[826px] xl:h-[1176px] rounded-[10px] bg-center sm:bg-[center_top_-3rem] md:bg-[center_top_-5rem] lg:bg-center  bg-cover h-[430px] bg-[url("../images/john.svg")]'></div>
          <div className='w-full lg:w-[55%]'>
            <p className='uppercase font-mono lg:text-[18px] text-lemon uppercase mb-[20px] font-mono leading-[28px]'>
              A LITTLE ABOUT ME
            </p>
            <h2 className='font-calibre w-[full] text-[42px] leading-[52px] md:text-[50px] lg:text-[60px] xl:text-[70px] md:leading-[60px] lg:leading-[72px] xl:leading-[84px] font-bold text-white'>
              Hi, I’m John!
            </h2>
            <div className='border border-white border-1 w-[35px]'></div>
            <p className='font-calibre mt-[58px] text-gray max-w-[846px] text-[26px] xl:text-[28px] 2xl:text-[30px]'>
              I’m a product designer with many years of experience working cross
              functionally with companies across Africa (Co-Creation Hub),
              Europe (Geonode), and Asia (Oneistox). I am passionate about
              helping early-stage, and Series A companies bring their ideas to
              life and succeed in the market.
            </p>
            <p className='font-calibre mt-[50px] text-gray max-w-[846px] text-[26px] xl:text-[28px] 2xl:text-[30px]'>
              My deep understanding of different cultures and ability to adapt
              quickly to new environments set me apart. Having worked in Africa,
              Europe, and Asia, I have developed a unique perspective that
              allows them to create products that resonate with users from
              different backgrounds and with varying needs.
            </p>
            <p className='font-calibre mt-[50px] text-gray max-w-[846px] text-[26px] xl:text-[28px] 2xl:text-[30px]'>
              Throughout my career, I have demonstrated exceptional leadership
              skills, collaborating with cross-functional teams and stakeholders
              to deliver high quality products on time and within budget. My
              ability to think strategically, communicate effectively, and
              inspire others has earned my peers' respect and made me a go-to
              resource for companies looking to build innovative products.
            </p>
            <a href='mailto:johnolarinde@gmail.com'>
              <button className='block mt-[44px] flex items-center gap-[8px] border border-1 rounded-[5px] border-lemon px-[42px] py-[16px] md:px-[52px] md:py-[18px] lg:px-[62px] lg:py-[20px]'>
                <span className='underline leading-[120%] font-mono uppercase text-lemon font-medium text-[12px] md:text-[14px] lg:text-[16px]'>
                  LETS TALK
                </span>
                <img
                  src={Arrow}
                  alt='talk to John Ayorinde'
                  width={16}
                  height={12}
                />
              </button>
            </a>
          </div>
        </div>
        <div className='mt-[280px]'>
          <div className='flex flex-col lg:flex-row lg:gap-x-[40px] xl:gap-x-[90px] justify-between items-center'>
            <div className='w-full lg:w-[45%]'>
              <div className='flex items-start'>
                <img
                  src={Chef}
                  alt='chef'
                  height={40}
                  width={40}
                  className='block mr-[12px]'
                />
                <h2 className='font-calibre w-[full] text-[38px] md:text-[40px] lg:text-[45px] xl:text-[50px] leading-[120%] font-bold text-white'>
                  An Amateur Cook
                </h2>
              </div>
              <p className='font-calibre mt-[50px] text-gray max-w-[846px] text-[26px] xl:text-[28px] 2xl:text-[30px]'>
                The pandemic turned me into an avid cooking enthusiast. As
                someone whose meals revolved around local dishes before
                COVID-19, I’d like to think I’ve come a long way by exploring
                various cuisines and dishes. My favourite and most frequented
                are Indian, Italian and Chinese.
              </p>
              <div>
                <p className='font-calibre mt-[60px] text-gray max-w-[846px] text-[26px] xl:text-[28px] 2xl:text-[30px]'>
                  Here are three of my recent favorite dishes:
                </p>
                <div className='flex items-center'>
                  <div className='w-2 h-2 rounded-full bg-gray mr-2'></div>
                  <p className='mt-2 font-calibre text-gray max-w-[846px] text-[26px] xl:text-[28px] 2xl:text-[30px]'>
                    Kung Pao Chicken - a famous Sichuan-style specialty
                  </p>
                </div>
                <div className='flex items-center'>
                  <div className='w-2 h-2 rounded-full bg-gray mr-2'></div>
                  <p className='font-calibre text-gray max-w-[846px] text-[26px] xl:text-[28px] 2xl:text-[30px]'>
                    Dumplings - A traditional food type popular in North China
                  </p>
                </div>
                <div className='flex items-center'>
                  <div className='w-2 h-2 rounded-full bg-gray mr-2'></div>
                  <p className='font-calibre text-gray max-w-[846px] text-[26px] xl:text-[28px] 2xl:text-[30px]'>
                    Margherita Pizza
                  </p>
                </div>
                <div className='flex items-center'>
                  <div className='w-2 h-2 rounded-full bg-gray mr-2'></div>
                  <p className='font-calibre text-gray max-w-[846px] text-[26px] xl:text-[28px] 2xl:text-[30px]'>
                    Lasagna
                  </p>
                </div>
                <div className='flex items-center'>
                  <div className='w-2 h-2 rounded-full bg-gray mr-2'></div>
                  <p className='font-calibre text-gray max-w-[846px] text-[26px] xl:text-[28px] 2xl:text-[30px]'>
                    Tandoori Chicken
                  </p>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-2 w-full md:w-[60%] mx-auto lg:mx-0  lg:w-[45%] mt-[128px] lg:mt-0 justify-items-center'>
              <img
                src={Food1}
                alt='lasagna'
                width={445}
                height={465}
                className='relative top-[-32px]'
              />
              <img
                src={Food2}
                alt='lasagna'
                width={445}
                height={465}
                className='relative left-[8px] md:left-[16px] xl:left-[32px]'
              />
              <img
                src={Food3}
                alt='lasagna'
                width={445}
                height={465}
                className='relative top-[-16px]'
              />
              <img
                src={Food4}
                alt='lasagna'
                width={445}
                height={465}
                className='relative left-[8px] md:left-[16px] xl:left-[23px]'
              />
            </div>
          </div>
          <div className='flex mt-[216px] flex-col lg:flex-row lg:gap-x-[40px] xl:gap-x-[90px] justify-between items-center'>
            <div className='w-full'>
              <div className='flex items-start'>
                <img
                  src={Travel}
                  alt='chef'
                  height={40}
                  width={40}
                  className='block mr-[12px]'
                />
                <h2 className='font-calibre w-[full] text-[38px] md:text-[40px] lg:text-[45px] xl:text-[50px] leading-[120%] font-bold text-white'>
                  Travel Junkie
                </h2>
              </div>
              <p className='font-calibre mt-[50px] text-gray max-w-[846px] text-[26px] xl:text-[28px] 2xl:text-[30px]'>
                I’ve lived in 6 cities across Africa and Europe. I like to think
                this makes me quickly adapt to new environments and has taught
                me to be curious. My travelling experiences have made me happier
                as it allows me to disconnect & recharge and relieves me of
                stress and anxiety.
              </p>
              <p className='font-calibre mt-[50px] text-gray max-w-[846px] text-[26px] xl:text-[28px] 2xl:text-[30px]'>
                Meeting new people and exploring new foods, cultures, languages,
                and traditions has been a massive win for me travelling across
                different continents
              </p>
            </div>
            <div className='w-full'>
              <div className='flex items-start'>
                <img
                  src={Microphone}
                  alt='chef'
                  height={40}
                  width={40}
                  className='block mr-[12px]'
                />
                <h2 className='font-calibre w-[full] text-[38px] md:text-[40px] lg:text-[45px] xl:text-[50px] leading-[120%] font-bold text-white'>
                  Karaoke Lover
                </h2>
              </div>
              <p className='font-calibre mt-[50px] text-gray max-w-[846px] text-[26px] xl:text-[28px] 2xl:text-[30px]'>
                As an avid lover of music of different genres, I have recently
                found love with Karaoke. I join the Karaoke event every week in
                a local lounge around my home, where I sing along to different
                songs.
              </p>
              <p className='font-calibre mt-[50px] text-gray max-w-[846px] text-[26px] xl:text-[28px] 2xl:text-[30px]'>
                Karaoke allows me to connect directly to the emotions of
                different themes and lets me lose the steam and stress in me as
                endorphins are released, and they help reduce both anxiety and
                stress. It also stimulates my brain, allows me to socialize,
                improves my retentive memory and builds my confidence.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className='mt-[182px]'>
            <div className='flex items-start'>
              <img
                src={Book}
                alt='chef'
                height={40}
                width={40}
                className='block mr-[12px]'
              />
              <h2 className='font-calibre w-[full] text-[38px] md:text-[40px] lg:text-[45px] xl:text-[50px] leading-[120%] font-bold text-white'>
                Books I Love
              </h2>
            </div>
            <div className='mt-[50px] border border-white border-1 w-[35px]'></div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2Frame 36648.svg lg:grid-cols-3 xl:grid-cols-5 gap-[32px] mt-[70px]'>
            <div className='w-full h-[336px] rounded-[10px] '>
              <img
                src={Book1}
                className='object-cover w-full h-full max-h-full rounded-[10px]'
              />
            </div>
            <div className='w-full h-[336px] rounded-[10px]'>
              <img
                src={Book2}
                className='object-cover w-full h-full max-h-full rounded-[10px]'
              />
            </div>
            <div className='w-full h-[336px] rounded-[10px]'>
              <img
                src={Book3}
                className='object-cover w-full h-full rounded-[10px] max-h-full'
              />
            </div>
            <div className='w-full h-[336px] rounded-[10px]'>
              <img
                src={Book4}
                className='object-cover w-full h-full max-h-full rounded-[10px]'
              />
            </div>
            <div className='w-full h-[336px] rounded-[10px]'>
              <img
                src={Book5}
                className='object-cover w-full h-full max-h-full rounded-[10px]'
              />
            </div>
          </div>
        </div>
        <div>
          <div className='mt-[182px]'>
            <div className='flex items-start'>
              <img
                src={Microphone2}
                alt='chef'
                height={40}
                width={40}
                className='block mr-[12px]'
              />
              <h2 className='font-calibre w-[full] text-[38px] md:text-[40px] lg:text-[45px] xl:text-[50px] leading-[120%] font-bold text-white'>
                Podcasts I Listen To
              </h2>
            </div>
            <p className='font-calibre mt-[30px] text-gray text-[26px] xl:text-[28px] 2xl:text-[30px]'>
              When I am travelling, or don’t have anything else to do, here are
              the podcast I listen to
            </p>
            <div className='mt-[50px] border border-white border-1 w-[35px]'></div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[32px] mt-[70px]'>
            <div className='w-full h-[336px] rounded-[10px] '>
              <img
                src={Pod1}
                className='object-cover w-full h-full max-h-full rounded-[10px]'
              />
            </div>
            <div className='w-full h-[336px] rounded-[10px]'>
              <img
                src={Pod2}
                className='object-cover w-full h-full max-h-full rounded-[10px]'
              />
            </div>
            <div className='w-full h-[336px] rounded-[10px]'>
              <img
                src={Pod3}
                className='object-cover w-full h-full rounded-[10px] max-h-full'
              />
            </div>
            <div className='w-full h-[336px] rounded-[10px]'>
              <img
                src={Pod4}
                className='object-cover w-full h-full max-h-full rounded-[10px]'
              />
            </div>
            <div className='w-full h-[336px] rounded-[10px]'>
              <img
                src={Pod5}
                className='object-cover w-full h-full max-h-full rounded-[10px]'
              />
            </div>
          </div>
        </div>
        <div>
          <div className='mt-[182px]'>
            <div className='flex items-start'>
              <img
                src={Book}
                alt='chef'
                height={40}
                width={40}
                className='block mr-[12px]'
              />
              <h2 className='font-calibre w-[full] text-[38px] md:text-[40px] lg:text-[45px] xl:text-[50px] leading-[120%] font-bold text-white'>
                My Music Playlist
              </h2>
            </div>
            <div className='mt-[50px] border border-white border-1 w-[35px]'></div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[32px] mt-[70px]'>
            <div className='w-full h-[336px] rounded-[10px] '>
              <img
                src={Music1}
                className='object-cover w-full h-full max-h-full rounded-[10px]'
              />
            </div>
            <div className='w-full h-[336px] rounded-[10px]'>
              <img
                src={Music2}
                className='object-cover w-full h-full max-h-full rounded-[10px]'
              />
            </div>
            <div className='w-full h-[336px] rounded-[10px]'>
              <img
                src={Music3}
                className='object-cover w-full h-full rounded-[10px] max-h-full'
              />
            </div>
            <div className='w-full h-[336px] rounded-[10px]'>
              <img
                src={Music4}
                className='object-cover w-full h-full max-h-full rounded-[10px]'
              />
            </div>
            <div className='w-full h-[336px] rounded-[10px]'>
              <img
                src={Music5}
                className='object-cover w-full h-full max-h-full rounded-[10px]'
              />
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </Layout>
  );
};
export default Projects;
