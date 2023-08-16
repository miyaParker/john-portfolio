import Proto from '../../images/proto.png';
import React from 'react';

<div className='mt-[128px] flex flex-col lg:flex-row gap-[18px] justify-between'>
  <h2 className='self-start top-10 lg:sticky z-10 font-calibre font-semibold lg:min-w-max text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
    Designing the Solution
  </h2>
  <div className='font-calibre'>
    <p className='max-w-[750px] font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
      To design a solution to the pain points, I combined some ideas from the
      Comprehensive Audit sketches to form a solution.
    </p>
    <p className='max-w-[750px] font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
      I created a low-fidelity wireframe to represent the app's skeleton and
      conducted usability studies with stakeholders.
    </p>
    <img
      src={Proto}
      width={567}
      height={367}
      className='w-full max-w-[750px] mt-[40px] mx-auto'
    />
  </div>
</div>;
