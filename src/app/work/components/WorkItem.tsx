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
        <header className="min-w-max text-xs uppercase leading-loose">
          {item.dateRange}
        </header>
        <div className="flex flex-col gap-2">
          <hgroup>
            {item.company && <h2>{item.company}</h2>}
            <h3 className="font-medium">{item.jobTitle}</h3>
          </hgroup>
          <p>{item.description}</p>
          {item.tools && (
            <ul className="flex gap-2 flex-wrap" aria-label="Technologies used">
              {item.tools.map((tool) => {
                return (
                  <li className="bg-gray-200 px-3 py-2 rounded-3xl text-xs">
                    {tool}
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
