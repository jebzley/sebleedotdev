import { Chip } from "../Chip";
import { CustomLink } from "../CustomLink";
import { WorkItemData } from "./constants";

function VerticalLine() {
  return (
    <span
      aria-hidden
      className="min-h-full border-l border-black absolute top-3"
    />
  );
}

function HorizontalLine() {
  return (
    <span aria-hidden className="w-3 border-b border-black absolute top-3" />
  );
}

export function WorkItem({
  item,
  isLastIndex,
}: {
  item: WorkItemData;
  isLastIndex: boolean;
}) {
  return (
    <li
      className="relative pb-4"
      aria-label={`${item.company} - ${item.jobTitle}`}
    >
      {!isLastIndex && <VerticalLine />}
      <HorizontalLine />
      <div className="ml-6 flex gap-4">
        <header className="min-w-max text-xs text-secondary uppercase leading-loose">
          {item.dateRange}
        </header>
        <div className="flex flex-col gap-4">
          <hgroup>
            <h3 aria-label={`${item.company} - ${item.jobTitle}`}>
              <CustomLink type="external" href={item.link}>
                {item.company}
              </CustomLink>
              <span className="font-medium">{item.jobTitle}</span>
            </h3>

            {item.promotions &&
              item.promotions.map((promotion) => (
                <p aria-hidden className="font-medium text-secondary">
                  {promotion.jobTitle}
                </p>
              ))}
          </hgroup>

          <p>{item.description}</p>

          {item.points && (
            <div>
              <h4>Duties and Achievements</h4>
              <ul className="list-disc pl-4">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          )}
          {item.tools && (
            <ul className="flex gap-2 flex-wrap" aria-label="Technologies used">
              {item.tools.map((tool) => {
                return (
                  <li key={tool}>
                    <Chip>{tool}</Chip>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </li>
  );
}
