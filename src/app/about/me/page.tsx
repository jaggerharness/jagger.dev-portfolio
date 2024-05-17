export default function About() {
  return (
    <section className="flex items-center justify-center px-4">
      <div className="flex flex-col p-4 md:p-8 rounded-xl bg-neutral z-10">
        <p className="prose 2xl:text-xl pt-4">
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
        </p>
        <p className="prose 2xl:text-xl pt-4">
          Stay tuned for updates as I continue with exciting projects. I've got
          some interesting ideas in the pipeline.
        </p>
      </div>
    </section>
  );
}
