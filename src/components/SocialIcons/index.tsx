import Image from "next/image";

const links = [
  {
    href: "https://www.github.com/jebzley",
    label: "Github",
    imgSrc: "/github.svg",
  },
  {
    href: "https://www.linkedin.com/in/sebleedev",
    label: "Linked In",
    imgSrc: "/linkedin.svg",
  },
  {
    href: "https://www.twitter.com/sebleedev",
    label: "Github",
    imgSrc: "/twitter.svg",
  },
];

export function SocialIcons() {
  return (
    <ul className="flex gap-8">
      {links.map((link) => {
        return (
          <li key={link.href}>
            <a
              href={link.href}
              rel="noopener noreferrer"
              target="_blank"
              aria-label={`${link.label} (Opens in a new tab)`}
            >
              <Image
                src={link.imgSrc}
                width={20}
                height={20}
                alt=""
                className="hover:opacity-50 transition-opacity"
                aria-hidden
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
