'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <section className="flex items-center justify-center px-4">
      <div className="flex flex-col p-8 rounded-xl bg-neutral z-10">
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
          solutions, optimizing / maintaining existing software infrastructures,
          and helping to turn dreams into reality.
        </p>
        <button
          onClick={() => router.push('/about')}
          className="btn btn-primary mt-4 2xl:text-xl w-max self-center"
        >
          About Me
        </button>
      </div>
    </section>
  );
}
