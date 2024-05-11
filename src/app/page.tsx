'use client';

import { TracingBeam } from './ui/tracing-beams';

export default function Home() {
  return (
    <>
      <section className="flex items-center justify-center px-4 min-h-screen">
        <div className="flex flex-col p-8 rounded-xl bg-base-200 z-10">
          <h1 className="text-5xl 2xl:text-6xl font-medium prose">
            What's up, I'm{' '}
            <span className="text-accent hover:text-primary">Jagger</span>
          </h1>
          <p className="prose 2xl:text-xl pt-4">
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
            infrastructures, and helping to turn dreams into reality.
          </p>
          <button className="btn btn-primary mt-4 2xl:text-xl w-max self-center">
            About Me
          </button>
        </div>
      </section>
      <TracingBeam className="p-6">
        <div className="max-w-2xl mx-auto pt-4 relative">
          {
            <section className="flex items-center justify-center px-4">
              <div className="flex flex-col p-4 md:p-8 rounded-xl z-10">
                <h2 className="text-3xl md:text-4xl font-bold">About Me </h2>
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
                  Fresh out of college in an unrelated field, I found myself
                  questioning where my true passion lay. Despite having a
                  background in an entirely different field, my fascination with
                  computers and video game consoles persisted, leaving me
                  wondering about the inner workings of the systems that brought
                  me so much joy. Driven by curiosity and a desire for
                  fulfillment, I joined an introductory computer science course,
                  Concepts of Programming.{' '}
                  <span className="italic">Everything clicked.</span> The joy
                  and excitement I experienced while learning about programming
                  were unlike anything I had felt before. It was in that moment
                  that I knew I had found my true passion. Since then, I've
                  graduated with a degree in computer science and have immersed
                  myself in the world of software development, constantly
                  learning and growing along the way.
                </p>
                <p className="prose 2xl:text-lg py-4">
                  Stay tuned for updates as I continue with exciting projects.
                  I've got some interesting ideas in the pipeline.
                </p>
                <h2 className="text-3xl md:text-4xl font-bold">Experience </h2>
                <h2 className="text-xl pt-4">AceOne Technologies</h2>
                <span className="w-fit rounded-full py-1 text-sm italic">
                  Full Stack Developer / June 2021 - Present
                </span>
                <ul className="prose 2xl:text-lg py-4 list-disc list-inside">
                  <li>
                    Maintain and develop full-stack web applications for the
                    company, meeting numerous client requirements. Utilize
                    Laravel, jQuery, MySQL, and Bootstrap while adhering to best
                    practices.
                  </li>
                  <li>
                    Implement RESTful APIs, which facilitate seamless
                    integration between web and mobile applications and various
                    third-party platforms, enabling enhanced functionality and a
                    user-friendly experience for clients across diverse
                    platforms.
                  </li>
                  <li>
                    Utilize Flutter and .NET Xamarin frameworks to develop
                    multiple cross-platform mobile applications, employing MVVM
                    design patterns to ensure efficient code architecture and
                    deliver exceptional user experiences.
                  </li>
                  <li>
                    Lead a small team of developers, providing mentorship and
                    guidance to enhance their technical skills and productivity.
                    Drive the adoption of best practices in software
                    development, ensuring the creation of clean, testable, and
                    maintainable code across all projects.
                  </li>
                  <li>
                    Maintain and develop a .NET WPF Windows application and
                    companion .NET Xamarin cross-platform mobile application for
                    a large conveyor manufacturer that would allow end-users to
                    program and diagnose their conveyor systems without the use
                    of PLC or pneumatic logic components.
                  </li>
                </ul>
              </div>
            </section>
          }
        </div>
      </TracingBeam>
    </>
  );
}
