import Link from "next/link";
import { WorkItem } from "./components/WorkItem";
import { WORK_HISTORY_DATA } from "./constants";
import { PageLayout } from "@/components/PageLayout";

export interface WorkItemData {
  company?: string;
  jobTitle: string;
  description?: string;
  dateRange: string;
  tools?: string[];
}

export default function WorkPage() {
  return (
    <PageLayout>
      <div className="flex gap-6 flex-col">
        <hgroup>
          <h1 className="text-5xl">Curriculum Vitae</h1>
          <p className="text-2xl">Sebastian Lee</p>
        </hgroup>
        <p>
          A detailed list of my work history (excluding my retail and kitchen
          work as a student).{" "}
          <Link href="#">
            You can download a PDF copy of my CV by clicking here.
          </Link>
        </p>
      </div>
      <div className="overflow-scroll">
        <ul className="list-none">
          {WORK_HISTORY_DATA.map((item, index) => {
            return (
              <WorkItem
                key={`${item.company}${item.jobTitle}`}
                isLastIndex={index + 1 === WORK_HISTORY_DATA.length}
                item={item}
              />
            );
          })}
        </ul>
      </div>
    </PageLayout>
  );
}
