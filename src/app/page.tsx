'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Element, Link as ReactLink } from 'react-scroll';
import { SocialIcon } from 'react-social-icons';
import { Heading } from './components/Heading';
import { Paragraph } from './components/Paragraph';
import { Timeline } from './components/timeline';

export default function Home() {
  const data = [
    {
      title: 'July 2023 - Present',
      content: (
        <div>
          <p className="prose text-lg 2xl:text-xl mb-8 font-semibold">
            Senior Full Stack Software Developer, AceOne Technologies –
            Jonesboro, AR
          </p>
          <ul className="prose list-disc">
            <li>
              Lead a team of developers, ensuring timely project completion by
              planning for potential challenges and providing guidance
              throughout the software development lifecycle
            </li>
            <li>
              Architect new software solutions and rapidly develop
              proof-of-concept applications for client presentations,
              demonstrating technical feasibility and business value
            </li>
            <li>
              Manage and deliver numerous applications for various clients,
              overseeing projects from discovery and planning to production,
              ensuring alignment with client goals
            </li>
            <li>
              Promote and implement best practices in coding, testing, and
              deployment, improving project quality and efficiency
            </li>
            <li>
              Collaborate with a team of electrical engineers to develop an
              application for a conveyor company, streamlining operations and
              eliminating the need for PLC programming for typical use cases
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: 'July 2021 - July 2023',
      content: (
        <div>
          <p className="prose text-lg 2xl:text-xl mb-8 font-semibold">
            Full Stack Software Developer, AceOne Technologies – Jonesboro, AR
          </p>
          <ul className="prose list-disc">
            <li>
              Built new software projects from the ground up, actively
              contributing to all stages of the software development lifecycle,
              from initial planning and design to deployment and maintenance
            </li>
            <li>
              Enhanced an outdated API, achieving a performance improvement of
              50-70% by upgrading to the latest tools and optimizing database
              operations, resulting in faster response times and improved user
              experience
            </li>
            <li>
              Participated in client meetings to gather requirements and propose
              tailored software solutions, ensuring alignment with business
              goals and technical feasibility
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: 'June 2021 - July 2021',
      content: (
        <div>
          <p className="prose text-lg 2xl:text-xl mb-8 font-semibold">
            Software Development Intern, AceOne Technologies – Jonesboro, AR
          </p>
          <ul className="prose list-disc">
            <li>
              Investigated and resolved client-reported issues across multiple
              web applications, ensuring a smooth user experience and timely
              resolution of critical bugs
            </li>
            <li>
              Worked closely with cross-functional teams, including design,
              development, and QA, to contribute to diverse projects, adapting
              quickly to different technologies and project requirements
            </li>
            <li>
              Assisted in estimating tasks and implementing minor features in
              existing software projects, collaborating with project management
              to enhance functionality and meet client expectations
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <>
      <Element name="home">
        <section className="flex items-center justify-center px-4 min-h-screen">
          <div className="flex flex-col p-8 rounded-xl bg-base-300 z-10">
            <h1 className="text-3xl md:text-5xl 2xl:text-6xl font-medium prose text-center lg:text-left">
              Hello, I'm <span className="text-accent">Jagger</span>
            </h1>
            <p className="prose text-lg 2xl:text-xl pt-4 text-center lg:text-left">
              I'm a Full Stack Developer at{' '}
              <a
                className="text-secondary"
                href="https://www.aceonetechnologies.com"
                target="_blank"
                rel=""
              >
                AceOne Technologies
              </a>{' '}
              in Jonesboro, AR. My role involves developing custom software
              solutions, optimizing / maintaining existing software
              infrastructures, and helping to turn ideas into reality.
            </p>
            <ReactLink
              to="aboutMe"
              className="self-center"
              spy={true}
              smooth={true}
            >
              <button className="btn btn-primary mt-4 2xl:text-xl w-max">
                About Me
              </button>
            </ReactLink>
          </div>
        </section>
      </Element>
      <Element name="aboutMe">
        <section className="flex flex-col items-center bg-base-300 w-screen py-8">
          <div className="flex flex-col p-8 md:pt-8 z-10 w-fit">
            <h2 className="text-3xl md:text-4xl pt-8 font-bold">About Me</h2>
            <p className="prose 2xl:text-lg pt-4">
              My software development journey started back in 2017 at{' '}
              <a
                className="text-primary"
                href="https://www.astate.edu/"
                target="_blank"
                rel=""
              >
                Arkansas State University.
              </a>{' '}
              Fresh out of college in an unrelated field, I began to wonder what
              my true passion was. Despite having a background in an entirely
              different field, my fascination with computers and video game
              consoles persisted, leaving me wondering about the inner workings
              of the systems that brought me so much joy. Driven by curiosity
              and a desire for fulfillment, I joined an introductory computer
              science course, Concepts of Programming.{' '}
              <span className="italic">Everything clicked.</span> The joy and
              excitement I experienced while learning about programming were
              unlike anything I had felt before. It was in that moment that I
              knew I had found my true passion. Since then, I've graduated with
              a degree in computer science and have immersed myself in the world
              of software development, constantly learning and growing along the
              way.
            </p>
            <p className="prose 2xl:text-lg pt-4">
              Stay tuned for updates as I continue with exciting projects. I've
              got some interesting ideas in the pipeline.
            </p>
            <Image
              src={'/avatar.png'}
              alt="about-me-image"
              height="150"
              width="150"
              className="pt-16 mx-auto"
            />
          </div>
        </section>
      </Element>
      <Element name="experience">
        <Timeline data={data} />
      </Element>
      <Element name="portfolio">
        <section className="bg-base-300 w-screen h-fit">
          <div className="flex flex-col p-8 md:pt-8 pb-16 z-10 w-11/12 md:w-2/3 mx-auto">
            <h2 className="text-3xl md:text-4xl pt-8 font-bold">Portfolio</h2>
            <div className="grid grid-cols-1 gap-10 pt-8">
              <motion.div
                key={'https://workout-tracker-beige.vercel.app/'}
                initial={{
                  opacity: 0,
                  x: -50,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{ duration: 0.2, delay: 1 * 0.1 }}
              >
                <Link
                  href={'https://workout-tracker-beige.vercel.app/'}
                  key={'https://workout-tracker-beige.vercel.app/'}
                  className="group bg-base-100 hover:bg-base-200 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 rounded-2xl transition duration-200 p-4"
                >
                  <Image
                    src={'/liftlens-logo.png'}
                    alt="thumbnail"
                    height="150"
                    width="150"
                    className="rounded-md"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="flex flex-col justify-between">
                    <div>
                      <Heading
                        as="h4"
                        className="font-bold text-lg md:text-lg lg:text-lg "
                      >
                        {'LiftLens'}
                      </Heading>
                      <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
                        {
                          'A workout tracking app that helps you log workouts, plan routines, and gain insights into the muscles targeted by each exercise.'
                        }
                      </Paragraph>
                    </div>
                    <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0">
                      <span
                        key={'Next.js'}
                        className="text-xs md:text-xs lg:text-xs px-2 py-1 rounded-sm bg-base-300"
                      >
                        {'Next.js'}
                      </span>
                      <span
                        key={'Prisma'}
                        className="text-xs md:text-xs lg:text-xs px-2 py-1 rounded-sm bg-base-300"
                      >
                        {'Prisma'}
                      </span>
                      <span
                        key={'NeonDB'}
                        className="text-xs md:text-xs lg:text-xs px-2 py-1 rounded-sm bg-base-300"
                      >
                        {'NeonDB'}
                      </span>
                      <span
                        key={'TailwindCSS'}
                        className="text-xs md:text-xs lg:text-xs px-2 py-1 rounded-sm bg-base-300"
                      >
                        {'TailwindCSS'}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
              <motion.div
                key={'#'}
                initial={{
                  opacity: 0,
                  x: -50,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{ duration: 0.2, delay: 2 * 0.1 }}
              >
                <Link
                  href={'https://github.com/vunguyen7797/SmartPark'}
                  key={'https://github.com/vunguyen7797/SmartPark'}
                  className="group bg-base-100 hover:bg-base-200 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 rounded-2xl transition duration-200 p-4"
                >
                  <Image
                    src={'/smart-park-logo.png'}
                    alt="thumbnail"
                    height="150"
                    width="150"
                    className="rounded-md"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="flex flex-col justify-between">
                    <div>
                      <Heading
                        as="h4"
                        className="font-bold text-lg md:text-lg lg:text-lg "
                      >
                        {'Smart Park'}
                      </Heading>
                      <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
                        {
                          'A parking management system that uses computer vision to monitor parking lot occupancy in real-time. Completed as Senior Capstone Project at Arkansas State University.'
                        }
                      </Paragraph>
                    </div>
                    <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0">
                      <span
                        key={'Flutter'}
                        className="text-xs md:text-xs lg:text-xs px-2 py-1 rounded-sm bg-base-300"
                      >
                        {'Flutter'}
                      </span>
                      <span
                        key={'Node.js'}
                        className="text-xs md:text-xs lg:text-xs px-2 py-1 rounded-sm bg-base-300"
                      >
                        {'Node.js'}
                      </span>
                      <span
                        key={'TensorFlow'}
                        className="text-xs md:text-xs lg:text-xs px-2 py-1 rounded-sm bg-base-300"
                      >
                        {'TensorFlow'}
                      </span>
                      <span
                        key={'Python'}
                        className="text-xs md:text-xs lg:text-xs px-2 py-1 rounded-sm bg-base-300"
                      >
                        {'Python'}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </Element>
      <Element name="contact">
        <section className="bg-base-100 w-screen">
          <div className="flex flex-col p-8 md:pt-8 pb-16 z-10 w-11/12 md:w-2/3 mx-auto">
            <h2 className="text-3xl md:text-4xl pt-8 font-bold">Contact Me</h2>
            <p className="prose 2xl:text-lg pt-4">
              I'm always open to new opportunities and collaborations. Feel free
              to reach out to me if you have any questions or just want to chat.
            </p>
            <p className="flex flex-row pt-12 justify-between lg:gap-16 lg:justify-center">
              <SocialIcon
                url="https://linkedin.com/in/jaggerharness"
                target="_blank"
              />
              <SocialIcon
                url="https://github.com/jaggerharness"
                target="_blank"
              />
              <SocialIcon
                url="https://www.threads.net/@jaggerslade"
                target="_blank"
              />
              <SocialIcon
                url="https://discordapp.com/users/364610872816959498"
                network="discord"
                target="_blank"
              />
            </p>
          </div>
        </section>
      </Element>
    </>
  );
}
