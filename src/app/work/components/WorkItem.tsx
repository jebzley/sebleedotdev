"use client";

import { useState } from "react";
import { WorkItemData } from "../page";

export function WorkItem({ item }: { item: WorkItemData }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <li>
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
    </li>
  );
}
