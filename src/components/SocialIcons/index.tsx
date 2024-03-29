import Image from "next/image";

export function SocialIcons() {
  return (
    <ul className="flex gap-8">
      <li>
        <a
          href="https:/www.github.com/jebzley"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Github (Opens in a new tab)"
        >
          <Image
            src={"/github.svg"}
            width={20}
            height={20}
            alt=""
            className="hover:opacity-50 transition-opacity"
            aria-hidden="true"
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/sebleedev"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Linked In (Opens in a new tab)"
        >
          <Image
            src={"/linkedin.svg"}
            width={20}
            height={20}
            alt=""
            className="hover:opacity-50 transition-opacity"
            aria-hidden="true"
          />
        </a>
      </li>
      <li>
        <a
          href="https:/www.twitter.com/sebleedev"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Twitter (Opens in a new tab)"
        >
          <Image
            src={"/twitter.svg"}
            width={20}
            height={20}
            alt=""
            aria-hidden="true"
            className="hover:opacity-50 transition-opacity"
          />
        </a>
      </li>
    </ul>
  );
}
