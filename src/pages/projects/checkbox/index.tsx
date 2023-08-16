import React from 'react';
import {motion} from 'framer-motion';
import {ProjectBodyLayout, ProjectLayout} from '../../../components/Layout';
import Contact from '../../../components/Contact';
import Flowchart from '../../../images/checkbox-flow.png';
import Persona1 from '../../../images/checkbox-persona1.png';
import Persona2 from '../../../images/checkbox-persona2.png';
import Design from '../../../images/checkbox-design.png';
import Screen1 from '../../../images/checkbox-screen1.png';
import Screen2 from '../../../images/checkbox-screen2.png';
import Screen3 from '../../../images/checkbox-screen3.png';
import Screen4 from '../../../images/checkbox-screen4.png';
import Screen5 from '../../../images/checkbox-screen5.png';
import Screen6 from '../../../images/checkbox-screen6.png';
import Screen7 from '../../../images/checkbox-screen7.png';
import Screen8 from '../../../images/checkbox-screen8.png';
import Screen9 from '../../../images/checkbox-screen9.png';
import Screen10 from '../../../images/checkbox-screen10.png';
import Screen11 from '../../../images/checkbox-screen11.png';
import Screen12 from '../../../images/checkbox-screen12.png';
import Logo from '../../../images/checkbox-logo.png';
import Typo from '../../../images/checkbox-typo.png';
import Conclusion from '../../../images/checkbox-conclusion.png';

const Rosita = () => {
  return (
    <ProjectLayout>
      <div className=''>
        <motion.div className='relative w-full h-[640px] bg-white overflow-hidden relative top-[-120px] bg-fixed bg-[url("../images/commute-hero.jpg")]'>
          <div className='w-full h-full absolute z-10 bg-black opacity-80 top-0 bottom-0 left-0 right-0'></div>
        </motion.div>
        <div className='absolute top-[180px] lg:top-[245px] z-20 w-full  px-[20px] md:px-[40px] lg:px-[80px]'>
          <div className=''>
            <p className='text-lemon text-center text-[18px] font-mono font-semibold'>
              CheckBox Human Resource Management Software
            </p>
            <motion.h1 className='font-calibre font-bold text-center mx-auto max-w-[883px] text-[42px] md:text-[50px] lg:text-[60px] xl:text-[69px] leading-[120%]'>
              Your Management Goals in One Place
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
                CheckBox
              </p>
            </div>
            <div>
              <p className='font-bold font-calibre text-[28px] md:text-center'>
                Industry
              </p>
              <p className='font-thin font-calibre text-[23px] md:text-center'>
                Human Resource Management
              </p>
            </div>
            <div>
              <p className='font-bold font-calibre text-[28px] md:text-center'>
                Platform
              </p>
              <p className='font-thin font-calibre text-[23px] md:text-center'>
                Web Application
              </p>
            </div>
          </div>
        </div>
        <ProjectBodyLayout>
          <div className='w-full px-[20px] md:px-[40px] lg:px-[80px] xl:px-[200px]'>
            <div className='mb-[80px]'>
              <h2 className='font-calibre font-semibold w-[full] text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
                The Brief
              </h2>
              <p className='font-calibre font-thin leading-[150%] mt-[13px]  text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                The Human Resources field has experienced several changes over
                the years. Changes have led to the automation of specific tasks
                and processes. Some of those improvements have made it easier to
                monitor the records of employees, reduce paper waste, retrieve
                employee data, and effectively manage onsite and remote
                employees. However, most HR Management software lacks some core
                HR functions, which we seek to solve.
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
              <h2 className='font-calibre font-semibold w-[full] text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
                Objectives we are trying to solve for
              </h2>
              <div className='ml-8'>
                <p className='font-calibre mb-8 font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                  {' '}
                  <span className='font-medium text-white'>
                    1. Applicant Tracking (AT):{' '}
                  </span>{' '}
                  This Includes managing job postings, apps, and even onboarding
                  of new employees.
                </p>
                <p className='font-calibre mb-8 font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                  <span className='font-medium text-white'>
                    2. Benefits Administration:{' '}
                  </span>{' '}
                  Managing employee enrollment all the way to offering specific
                  benefit plans to customers
                </p>
                <p className='font-calibre mb-8 font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                  <span className='font-medium text-white'>
                    3. Scheduling and Shift Planning:{' '}
                  </span>{' '}
                  Although this is a dedicated tool, the capability can show up
                  as part of a larger HRMS — Human Resource Management Software
                  or those that focus on businesses where this capability is
                  essential.
                </p>
                <p className='font-calibre mb-8 font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                  <span className='font-medium text-white'>
                    4. Performance Management:{' '}
                  </span>{' '}
                  The ability to record employee goals or track goals down to
                  the task level and tie success directly and automatically to
                  compensation and payroll.
                </p>
                <p className='font-calibre mb-8 font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                  <span className='font-medium text-white'>
                    5. Online Learning:{' '}
                  </span>{' '}
                  It can be another offshoot of performance management, letting
                  managers provide the training employees need to achieve their
                  goals and keep the company in compliance if certifications are
                  required for specific jobs.
                </p>
                <p className='font-calibre mb-8 font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                  <span className='font-medium text-white'>
                    6. Integration:{' '}
                  </span>{' '}
                  Implementing with an existing legacy system (e.g., Office 365,
                  Slack, etc.)
                </p>
                <p className='font-calibre mb-8 font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                  <span className='font-medium text-white'>
                    7. Scalability:{' '}
                  </span>{' '}
                  Mobility, and security (protection of customers financial and
                  personal data)
                </p>
                <p className='font-calibre mb-8 font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                  8. <span className='font-medium text-white'>Others: </span>{' '}
                  Set up wizard, phone support, video tutorial, 24/7 live chat.
                </p>
              </div>
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
              <h2 className='mt-[128px] font-calibre font-semibold w-[full] text-[32px] md:text-[38px] lg:text-[40px] leading-[138%] text-white'>
                Solution
              </h2>
              <p className='w-full font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] leading-[138%] md:text-[24px] lg:text-[28px]'>
                We decided to develop a web application that helps place all the
                human resources management goals in one software. We solved the
                following problems in this version of the project:
              </p>
              <p className='font-calibre mb-4 font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                1. Performance Management
              </p>
              <p className='font-calibre mb-4 font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                2. Scalability
              </p>
              <p className='font-calibre mb-4 font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                3. Mobility
              </p>
              <p className='font-calibre mb-4 font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                4. Security
              </p>
              <p className='font-calibre mb-4 font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                5. Benefits Administration
              </p>
              <p className='font-calibre mb-4 font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                6. Seamless Reporting
              </p>
              <p className='font-calibre mb-4 font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                7. Real-Time Notifications
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
                Design Thinking Process
              </h2>
              <img
                src={Design}
                width={567}
                height={367}
                className='w-full max-w-[1024px] mt-[40px] mx-auto'
              />
            </motion.div>

            <motion.div
              className='mt-[128px]'
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
              <h2 className='font-calibre font-semibold w-[full] text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
                User Persona
              </h2>
              <img
                src={Persona1}
                width={567}
                height={367}
                className='w-full max-w-[1024px] mt-[40px] mx-auto'
              />
              <img
                src={Persona2}
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
                Flowchart
              </h2>
              <img
                src={Flowchart}
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
                Wireframes
              </h2>
              <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                The Sign-Up & Login Pages provide the user with a fast and easy
                process to register and enjoy the benefits of the software. The
                Sign Up with Google feature was also added as demanded from the
                User Research.
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
                Main Dashboard
              </h2>
              <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                The Dashboard section conveys a summary of employee statistics,
                upcoming activities, and notifications. The salary statistics
                option on the dashboard is a unique feature of the platform. It
                provides insight into the company’s spending on employee
                benefits.
              </p>
              <img
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
                Payroll
              </h2>
              <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                The payroll section gives general information about employees’
                pay and keeps track of their earnings. This feature eliminates
                the miscalculation of data and affords a system for managing
                payroll details automatically. With CheckBox, HR managers can
                easily generate salary statements, control payday, and ensure
                accuracy.
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
              <h2 className='font-calibre font-semibold lg:min-w-max text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
                Company Structure
              </h2>
              <p className='w-full font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                Eliminates repetitive and paperwork tasks associated with HR
                activities and speeds up the documentation process. This feature
                improves overall organizational workflow and monitors and
                allocates projects while managing employee activities.
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
              <h2 className='font-calibre font-semibold lg:min-w-max text-[32px] md:text-[38px] lg:text-[40px] leading-[200%] text-white'>
                Performance Management
              </h2>
              <p className='w-full font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                Keeps track of employee productivity. With this, an HR manager
                can assign KPIs and monitor employees’ performance, ensuring
                prompt and active feedback. The overtime feature ensures
                employees are properly compensated for their work time without
                missing any detail. The attendance management system is equipped
                to track employee attendance and leave, thus helping both
                parties process their requests easily.
              </p>
              <img
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
                Report
              </h2>
              <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                Promotes transparency and improves employees’ engagement in the
                company’s activities. The report generated helps the company
                make decisions on hiring costs, turnover rate, performance, etc.
              </p>
              <img
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
                Projects
              </h2>
              <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                Keeps track of the projects in the organization, views project
                status, and assigns team members to particular projects. Create
                projects, assign team members and team leaders to them, and
                monitor progress.
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
                src={Screen8}
                width={567}
                height={367}
                className='w-full max-w-[1024px] mt-[40px] mx-auto'
              />
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
                Accessories Management
              </h2>
              <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                Assign accessories and gadgets to employees, keep track of the
                gadget’s health and easily find gadgets assigned to employees.
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
                Notifications
              </h2>
              <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                View Notifications in real-time and stay abreast of the
                activities of employees. Get updates on new leave requests,
                payroll creation, attendance management, new clients, project
                deadlines, etc.
              </p>
              <img
                src={Screen11}
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
                Leave Management
              </h2>
              <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                View employees on leave, the duration of leave, the leave
                progress, and the type of leave. Also, an option to apply for
                leave on behalf of an employee, approve or decline leave
                requests.
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
                src={Screen12}
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
                Conclusion
              </h2>
              <p className='font-calibre font-thin leading-[150%] mt-[13px] text-gray text-[22px] md:text-[24px] lg:text-[28px]'>
                Checkbox considerably solves many Human Resources Management
                problems and provides a seamless way of managing small and large
                organizations from one system. The next version would be updated
                with more features to improve the overall user experience and
                aesthetic beauty
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
                src={Conclusion}
                width={567}
                height={367}
                className='w-full max-w-[936px] mt-[40px] mx-auto'
              />
            </motion.div>
            <Contact />
          </div>
        </ProjectBodyLayout>
      </div>
    </ProjectLayout>
  );
};
export default Rosita;
