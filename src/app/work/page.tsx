import { WorkItem } from "./components/WorkItem";

export interface WorkItemData {
  company: string;
  jobTitle: string;
  description: string;
  dateRange: string;
}

const data: WorkItemData[] = [
  {
    company: "Immersive Labs",
    dateRange: "Jan 2023 - Feb 2024",
    jobTitle: "Mid Frontend Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero adipisci dicta, cumque dolorum, sint ea exercitationem repellendus eligendi sunt, impedit rerum maiores non blanditiis aperiam assumenda beatae voluptate error doloribus.",
  },
  {
    company: "Immersive Labs",
    dateRange: "Jul 2022 - Jan 2023",
    jobTitle: "Associate Frontend Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero adipisci dicta, cumque dolorum, sint ea exercitationem repellendus eligendi sunt, impedit rerum maiores non blanditiis aperiam assumenda beatae voluptate error doloribus.",
  },
  {
    company: "Immersive Labs",
    dateRange: "Sep 2021 - Jul 2022",
    jobTitle: "Junior Software Engineer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero adipisci dicta, cumque dolorum, sint ea exercitationem repellendus eligendi sunt, impedit rerum maiores non blanditiis aperiam assumenda beatae voluptate error doloribus.",
  },
];
export default function WorkPage() {
  return (
    <div className="h-full flex">
      <div className="flex flex-col mx-auto gap-6 max-w-xl">
        <div className="flex gap-6 flex-wrap items-center">
          <hgroup>
            <h1 className="text-5xl">Curriculum Vitae</h1>
            <p className="text-2xl">Sebastian Lee</p>
          </hgroup>
        </div>
        <ul className="list-none">
          {data.map((item, index) => {
            return (
              <WorkItem
                key={`${item.company}${item.jobTitle}`}
                isLastIndex={index + 1 === data.length}
                item={item}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
