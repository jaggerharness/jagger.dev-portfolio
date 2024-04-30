export default function About() {
  return (
    <section className="h-screen flex flex-col items-center justify-center px-4">
      <div className="flex flex-col p-8 rounded-xl bg-neutral">
        <p className="prose prose-neutral pt-4">
          My software development journey started back in 2017 at{' '}
          <a
            className="text-primary"
            href="https://www.astate.edu/"
            target="_blank"
            rel=""
          >
            Arkansas State University.
          </a>{' '}
          Fresh out of college in an unrelated field, I found myself questioning
          where my true passion lay. Despite having a background in an entirely
          different field, my fascination with computers and video game consoles
          persisted, leaving me wondering about the inner workings of the
          systems that brought me so much joy. Driven by curiosity and a desire
          for fulfillment, I joined an introductory computer science course,
          Concepts of Programming.{' '}
          <span className="italic">Everything clicked.</span> The joy and
          excitement I experienced while learning about programming were unlike
          anything I had felt before. It was in that moment that I knew I had
          found my true passion. Since then, I've graduated with a degree in
          computer science and have immersed myself in the world of software
          development, constantly learning and growing along the way.
        </p>
        <p className="prose prose-neutral pt-4">
          Stay tuned for updates as I continue with exciting projects. I've got
          some interesting ideas in the pipeline.
        </p>
      </div>
    </section>
  );
}
