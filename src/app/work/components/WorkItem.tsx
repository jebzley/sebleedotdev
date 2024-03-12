"use client";

import { useState } from "react";
import { WorkItemData } from "../page";

export function WorkItem({
  item,
  isLastIndex,
}: {
  item: WorkItemData;
  isLastIndex: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <li className="relative pb-4">
      {!isLastIndex && (
        <span className="min-h-full border border-black absolute top-3" />
      )}
      <span className="w-3 border border-black absolute top-3" />
      <div className="ml-6 flex gap-6">
        <p className="min-w-max text-xs uppercase leading-loose">
          {item.dateRange}
        </p>
        <div>
          <hgroup>
            <h2>
              {item.company}{" "}
              <span
                className="cursor-pointer"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? "(Collapse)" : "(Expand)"}
              </span>
            </h2>
            <p>{item.jobTitle}</p>
          </hgroup>
          {isExpanded && <p className="mt-4">{item.description}</p>}
        </div>
      </div>
    </li>
  );
}
