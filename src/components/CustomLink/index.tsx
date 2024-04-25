import Link from "next/link";
import { SVGProps } from "react";

interface IProps {
  href: string;
  children: React.ReactNode;
  type?: "internal" | "external" | "download";
  iconSize?: number;
}

const LinkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
  </svg>
);

const DownloadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.25em"
    height="1.25em"
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
  </svg>
);

export function CustomLink({ href, children, type = "internal" }: IProps) {
  const icon =
    type === "download" ? (
      <DownloadIcon />
    ) : (
      <LinkIcon className="transition group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
    );
  if (type === "external" || "download") {
    return (
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={href}
        className="group/link flex items-center gap-1 text-link"
      >
        {children}
        {icon}
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
