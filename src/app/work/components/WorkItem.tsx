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
    <li className="relative">
      {!isLastIndex && (
        <span className="min-h-full border border-black absolute top-3" />
      )}
      <span className="w-3 border border-black absolute top-3" />
      <div className="ml-6">
        <hgroup>
          <h2>
            {item.company}{" "}
            <span
              className="cursor-pointer"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              (Expand)
            </span>
          </h2>
          <p>{item.jobTitle}</p>
        </hgroup>
        {isExpanded && <p>{item.description}</p>}
      </div>
    </li>
  );
}
