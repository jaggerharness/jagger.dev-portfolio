'use client';

import { Element, Link as ReactLink } from 'react-scroll';
import Link from 'next/link';

export default function HomeSection() {
  return (
    <Element name="home">
      <section className="flex items-center justify-center px-4 min-h-screen">
        <div className="flex flex-col p-8 rounded-xl bg-base-300 z-10">
          <h1 className="text-3xl md:text-5xl 2xl:text-6xl font-medium prose text-center lg:text-left">
            Hello, I&apos;m <span className="text-accent">Jagger</span>
          </h1>
          <p className="prose text-lg 2xl:text-xl pt-4 text-center lg:text-left">
            I&apos;m a Full Stack Developer at{' '}
            <Link
              className="text-secondary"
              href="https://www.aceonetechnologies.com"
              target="_blank"
              rel=""
            >
              AceOne Technologies
            </Link>{' '}
            in Jonesboro, AR. My role involves developing custom software
            solutions, optimizing / maintaining existing software
            infrastructures, and helping to turn ideas into reality.
          </p>
          <ReactLink
            href="#aboutMe"
            to="aboutMe"
            className="self-center btn btn-primary mt-4 2xl:text-xl w-max"
            spy={true}
            smooth={true}
          >
            About Me
          </ReactLink>
        </div>
      </section>
    </Element>
  );
}
