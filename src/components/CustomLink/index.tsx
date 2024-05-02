import Link from "next/link";
import { DownloadIcon, LinkIcon } from "../SVGIcons";

interface IProps {
  href: string;
  children: React.ReactNode;
  type?: "internal" | "external" | "download";
  iconSize?: number;
}

export function CustomLink({ href, children, type = "internal" }: IProps) {
  const icon =
    type === "download" ? (
      <DownloadIcon className="inline" />
    ) : (
      <LinkIcon className="transition inline group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
    );
  if (type === "external" || "download") {
    return (
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={href}
        className="group/link text-link"
      >
        {children} {icon}
      </a>
    );
  }

  return (
    <Link href={href} className="group/link flex gap-1 text-link">
      {children}
      {icon}
    </Link>
  );
}
