'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Heading } from '@/app/components/Heading';
import { Paragraph } from '@/app/components/Paragraph';

export default function PortfolioEntries() {
  return (
    <>
      <motion.div
        key={'https://www.liftlens.app'}
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
          href={'https://www.liftlens.app'}
          key={'https://www.liftlens.app'}
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
            <div className="flex flex-wrap gap-2 mt-2 md:mb-1 md:mt-0">
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
            <div className="flex flex-wrap gap-2 mt-2 md:mb-1 md:mt-0">
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
                key={'Python'}
                className="text-xs md:text-xs lg:text-xs px-2 py-1 rounded-sm bg-base-300"
              >
                {'Python'}
              </span>
              <span
                key={'TensorFlow'}
                className="text-xs md:text-xs lg:text-xs px-2 py-1 rounded-sm bg-base-300"
              >
                {'TensorFlow'}
              </span>
            </div>
          </div>
        </Link>
      </motion.div>
    </>
  );
}
