import { WORK_HISTORY_DATA } from "./constants";
import { WorkItem } from "./WorkItem";

export function CurriculumVitae() {
  return (
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
  );
}
