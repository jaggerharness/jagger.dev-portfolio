'use client';

import { Element } from 'react-scroll';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutMeSection() {
  return (
    <Element name="aboutMe">
      <section className="flex flex-col items-center bg-base-300 w-screen py-8">
        <div className="flex flex-col p-8 md:pt-8 z-10 w-fit">
          <h2 className="text-3xl md:text-4xl pt-8 font-bold">About Me</h2>
          <p className="prose 2xl:text-lg pt-4">
            My software development journey started back in 2017 at{' '}
            <Link
              className="text-primary"
              href="https://www.astate.edu/"
              target="_blank"
              rel=""
            >
              Arkansas State University.
            </Link>{' '}
            Fresh out of college in an unrelated field, I began to wonder what
            my true passion was. Despite having a background in an entirely
            different field, my fascination with computers and video game
            consoles persisted, leaving me wondering about the inner workings of
            the systems that brought me so much joy. Driven by curiosity and a
            desire for fulfillment, I joined an introductory computer science
            course, Concepts of Programming.{' '}
            <span className="italic">Everything clicked.</span> The joy and
            excitement I experienced while learning about programming were
            unlike anything I had felt before. It was in that moment that I knew
            I had found my true passion. Since then, I&apos;ve graduated with a
            degree in computer science and have immersed myself in the world of
            software development, constantly learning and growing along the way.
          </p>
          <p className="prose 2xl:text-lg pt-4">
            Stay tuned for updates as I continue with exciting projects.
            I&apos;ve got some interesting ideas in the pipeline.
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
  );
}
