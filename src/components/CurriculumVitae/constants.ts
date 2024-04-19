export interface WorkItemData {
  company: string;
  jobTitle: string;
  description?: string;
  points?: string[];
  dateRange: string;
  tools?: string[];
  link: string;
  promotions?: Promotion[];
}

interface Promotion {
  jobTitle: string;
}

export const WORK_HISTORY_DATA: WorkItemData[] = [
  {
    company: "Immersive Labs",
    dateRange: "Sep 2021 - Feb 2024",
    jobTitle: "Mid Frontend Developer",
    link: "https://www.immersivelabs.com/",
    promotions: [
      {
        jobTitle: "Associate Frontend Developer",
      },
      {
        jobTitle: "Junior Software Engineer",
      },
    ],
    tools: [
      "React",
      "TypeScript",
      "Apollo",
      "GraphQL",
      "Docker",
      "Redux",
      "Semaphore",
      "Github Actions",
      "Testcafe",
      "Playwright",
    ],
    description:
      "My time at Immersive Labs saw the cybersecurity training platform scale up from a small tool for SMEs to enterprise software with a huge number of concurrent users.",
    points: [
      "Built features in close collaboration with Data, UX and Customer Success teams",
      "Wrote and maintained end to end tests in Testcafe and Playwright",
      "Participated in and led initiatives to improve frontend performance.",
      "Member of the DX Guild, helping to maintain and build internal tooling and pipelines.",
      "Aided in rebuilding the internal component library with developer experience and accessibility in mind.",
      "Helped to implement internationalisation, translating in-platform text and building a CLI to update translations at build time",
      "Mentored and held regular pairing sessions with a junior developer",
    ],
  },

  {
    company: "01 Group",
    link: "https://www.01group.com/",
    jobTitle: "Frontend Developer",
    dateRange: "Apr 2021 - Sep 2021",
    tools: ["Angular", "TypeScript"],
    description:
      "I was recommended for this role by a bootcamp coach. As part of a small team, I built out features for project management software.",
    points: [
      "Building a drag and drop kanban board",
      "Communicating with backend developer to spec out API",
    ],
  },
  {
    company: "_nology",
    link: "https://nology.io/",
    jobTitle: "Trainee Software Developer",
    tools: [
      "React",
      "JavaScript",
      "SCSS",
      "Node",
      "Firebase",
      "Cypress",
      "Github Actions",
    ],
    dateRange: "Jan 2021 - Apr 2021",
    description:
      "After two years in the manufacturing industry, I found myself missing the challenges that programming had brought and decided to pursue a career in software development. I'm including it on my CV as it involved professional work, building a food ordering app as a minimum viable product for a startup",
    points: [
      "Served as project manager on the third sprint",
      "Built the end-to-end tests and continuous integration pipelines for the project.",
    ],
  },
  {
    company: "Minirigs",
    link: "https://minirigs.co.uk/",
    jobTitle: "Head Repair Technician",
    dateRange: "Jan 2019 - Dec 2020",
    promotions: [{ jobTitle: "Loudspeaker Production Technician" }],
  },
];
