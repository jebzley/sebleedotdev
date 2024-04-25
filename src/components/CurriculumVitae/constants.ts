export interface WorkItemData {
  company: string;
  jobTitle: string;
  description?: string;
  points?: string[];
  dateRange: string;
  tools?: string[];
  link?: string;
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
      "As part of the Engineering team at Immersive Labs I collaborated closely with backend, Data, UX, and Customer Success teams to build features for a cybersecurity training platform. React SPA frontend for a Ruby on Rails app.",
    points: [
      "Participated in and championed initiatives to improve frontend performance",
      "Member of the DX Guild, helping to maintain and build internal tooling and pipelines",
      "Aided in rebuilding the internal component library with developer experience and accessibility in mind",
      "Helped to implement internationalisation, translating in-platform text and building a CLI to update and cache translated strings at build time",
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
      "Built features from the ground up for project management software, in close collaboration with a backend developer and a designer.",
    points: [
      "Built a drag and drop kanban board, resource management forms and an employee tree",
      "Communicating with designer to ensure UI is intuitive and accessible",
      "Communicating with backend developer to spec out API and software architecture",
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
      "Built a miniumum viable product for a local startup. Food ordering system built in React with a Firebase backend.",
    points: [
      "Set up the end-to end test suite and CI pipelines.",
      "Took over as project manager for a portion of the project",
    ],
  },
];

export const FREELANCE_WORK_DATA: WorkItemData[] = [
  {
    company: "DeFi Protocol",
    jobTitle: "Software Engineer",
    tools: ["Next.JS", "Typescript", "Ethers", "Hardhat"],
    dateRange: "Sep 2021 - Jul 2022",
    description:
      "(Pseudonymous) part-time work to help build frontend features for a decentralised finance protocol.",
    points: [
      "Provided features for the frontend of a token staking vault",
      "Built a frontend for a custom automated market maker, allowing ERC20 token swaps",
      "Built a tool allowing admins to quickly populate and submit multisig transactions",
      "Updated theme and component library website for a rebrand based on designs",
    ],
  },
  {
    company: "dBS Pro",
    link: "https://pro.dbsmusic.co.uk/",
    jobTitle: "Sound Designer, App Developer",
    dateRange: "Sep 2017 - Aug 2017",
    description:
      "Co-developed a bespoke iOS app for the unveiling of a property development. An immersive audio tour utilising bluetooth beacons, motion tracking and binaural spatial audio.",
  },
];
