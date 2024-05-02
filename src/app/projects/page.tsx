import { Card } from "@/components/Card";
import { PageLayout } from "@/components/PageLayout";
import { PageTitle } from "@/components/PageTitle";

const cardData = [
  {
    title: "Project 1",
    description: "The first project I ever did in my life",
    link: "#",
    imgSrc: "/face.png",
  },
  {
    title: "Project 2",
    description: "I did another project because I'm so busy",
    link: "#",
    imgSrc: "/face.png",
  },
  {
    title: "Project 3",
    description: "Such a productive young man!",
    link: "#",
    imgSrc: "/face.png",
  },
];
export default function ProjectsPage() {
  return (
    <PageLayout>
      <div className="flex flex-col gap-8">
        <PageTitle title="Projects" subtitle="Stuff I've done" />
        <p>
          For those of you that don't understand the joke. The sign is a subtle
          joke. The shop is called "Sneed's Feed & Seed", where feed and seed
          both end in the sound "-eed", thus rhyming with the name of the owner,
          Sneed. The sign says that the shop was "Formerly Chuck's", implying
          that the two words beginning with "F" and "S" would have ended with
          "-uck", rhyming with "Chuck". So, when Chuck owned the shop, it would
          have been called "Chuck's Fuck and Suck".
        </p>
      </div>
      <ul className="flex flex-col gap-8 group/card-grid list-none">
        {cardData.map((cardProps) => {
          return (
            <li>
              <Card key={cardProps.title} {...cardProps} type="Project" />
            </li>
          );
        })}
      </ul>
    </PageLayout>
  );
}
