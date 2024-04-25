import { FREELANCE_WORK_DATA, WORK_HISTORY_DATA } from "./constants";
import { WorkItem } from "./WorkItem";

export function CurriculumVitae() {
  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-xl">Employment History</h3>
      <ol className="list-none">
        {WORK_HISTORY_DATA.map((item, index) => {
          return (
            <WorkItem
              key={`${item.company}${item.jobTitle}`}
              isLastIndex={index + 1 === WORK_HISTORY_DATA.length}
              item={item}
            />
          );
        })}
      </ol>
      <h3 className="text-xl">Additional Experience</h3>
      <ol className="list-none">
        {FREELANCE_WORK_DATA.map((item, index) => {
          return (
            <WorkItem
              key={`${item.company}${item.jobTitle}`}
              isLastIndex={index + 1 === FREELANCE_WORK_DATA.length}
              item={item}
            />
          );
        })}
      </ol>
    </div>
  );
}
