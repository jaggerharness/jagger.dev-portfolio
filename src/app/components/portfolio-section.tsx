import PortfolioEntries from './portfolio-entries';

export default function PortfolioSection() {
  return (
    <section className="bg-base-300 w-screen h-fit">
      <div className="flex flex-col p-8 md:pt-8 pb-16 z-10 w-11/12 md:w-2/3 mx-auto">
        <h2 className="text-3xl md:text-4xl pt-8 font-bold">Portfolio</h2>
        <div className="grid grid-cols-1 gap-10 pt-8">
          <PortfolioEntries />
        </div>
      </div>
    </section>
  );
}
