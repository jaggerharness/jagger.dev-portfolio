'use client';

import { Element } from 'react-scroll';
import { SocialIcon } from 'react-social-icons';

export default function ContactSection() {
  return (
    <Element name="contact">
      <section className="bg-base-100 w-screen">
        <div className="flex flex-col p-8 md:pt-8 pb-16 z-10 w-11/12 md:w-2/3 mx-auto">
          <h2 className="text-3xl md:text-4xl pt-8 font-bold">Contact Me</h2>
          <p className="prose 2xl:text-lg pt-4">
            I&apos;m always open to new opportunities and collaborations. Feel
            free to reach out to me if you have any questions or just want to
            chat.
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
  );
}
