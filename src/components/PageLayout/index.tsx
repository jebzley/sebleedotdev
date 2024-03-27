import { ReactNode } from "react";
export function PageLayout({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-2 h-full gap-16">{children}</div>;
}
