import { ROUTES } from "@/constants/routes";
import { NavigationLink } from "./NavigationLink";

const navItems: { name: string; href: string }[] = [
  { name: "Home", href: ROUTES.HOME },
  { name: "CV", href: ROUTES.WORK },
  { name: "Projects", href: ROUTES.PROJECTS },
];

export function Navigation() {
  return (
    <nav className="block">
      <ul className="flex gap-8">
        {navItems.map((item) => {
          return (
            <li key={item.name}>
              <NavigationLink name={item.name} href={item.href} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
