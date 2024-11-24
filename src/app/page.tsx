import AboutMeSection from './components/about-me-section';
import ContactSection from './components/contact-section';
import ExperienceSection from './components/experience-section';
import HomeSection from './components/home-section';
import PortfolioSection from './components/portfolio-section';

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
      <HomeSection />
      <AboutMeSection />
      <ExperienceSection data={data} />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}
