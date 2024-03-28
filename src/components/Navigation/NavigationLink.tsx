import Link from "next/link";

interface IProps {
  name: string;
  href: string;
}
export function NavigationLink({ name, href }: IProps) {
  return (
    <Link
      className="group/navlink relative flex flex-col text-gray-500 hover:text-black transition-all"
      href={href}
    >
      {name.toUpperCase()}
      <span className="h-full w-6/12 transition-all border-b border-gray-500 group-hover/navlink:w-full group-hover/navlink:border-black "></span>
    </Link>
  );
}
