import { ROUTES } from "@/constants/routes";
import Link from "next/link";

const navItems: { name: string; href: string }[] = [
  { name: "Home", href: ROUTES.HOME },
  { name: "CV", href: ROUTES.WORK },
];

export function Navigation() {
  return (
    <nav className="block">
      <ul className="flex gap-8">
        {navItems.map((item) => {
          return (
            <li key={item.name}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
