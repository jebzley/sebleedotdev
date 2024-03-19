import Chip from "@/components/Chip";
import { WorkItemData } from "../page";

export function WorkItem({
  item,
  isLastIndex,
}: {
  item: WorkItemData;
  isLastIndex: boolean;
}) {
  const ariaLabel = `${item.company} - ${item.jobTitle}`;
  return (
    <li className="relative pb-4" aria-label={ariaLabel}>
      {!isLastIndex && (
        <span
          aria-hidden
          className="min-h-full border border-black absolute top-3"
        />
      )}
      <span aria-hidden className="w-3 border border-black absolute top-3" />
      <div className="ml-6 flex gap-6">
        <p className="min-w-max text-xs uppercase leading-loose">
          {item.dateRange}
        </p>
        <div>
          <hgroup>
            {item.company && <h2>{item.company}</h2>}
            <h3 className="font-medium">{item.jobTitle}</h3>
          </hgroup>

          <p className="mt-4">{item.description}</p>
        </div>
      </div>
    </li>
  );
}
