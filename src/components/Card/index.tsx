import Image from "next/image";
import { Chip } from "../Chip";
import Link from "next/link";
import { LinkIcon } from "../SVGIcons";

export interface CardProps {
  title: string;
  description: string;
  type: string;
  link: string;
  imgSrc: string;
}

export function Card({ title, description, type, link, imgSrc }: CardProps) {
  return (
    <div className="group border p-4 rounded relative cursor-pointer transition text-black group-hover/card-grid:opacity-50 hover:!opacity-100 hover:shadow-sm">
      <div className="flex justify-between">
        <div className="flex gap-8">
          <div className="h-40 w-40 relative">
            <Image src={imgSrc} fill alt="" style={{ objectFit: "cover" }} />
          </div>

          <div className="flex flex-col gap-2">
            <Chip>{type.toUpperCase()}</Chip>
            <Link href={link} className="after:absolute after:inset-0">
              <h2>{title}</h2>
            </Link>
            <p className="text-sm">{description}</p>
          </div>
        </div>
        <LinkIcon
          width="2.5em"
          height="2.5em"
          fill="#607B7D"
          viewBox="0 -800 800 800"
          className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>
    </div>
  );
}
