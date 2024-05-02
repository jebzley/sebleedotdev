import { Card } from "@/components/Card";
import { CustomLink } from "@/components/CustomLink";
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
          This page contains a selection of things I've made in my free time.
          <br />
          I'm hoping that by dedicating a page on my website to them it will
          motivate me to make more of them!
        </p>
        <p>
          <CustomLink href="https://github.com/jebzley" type="external">
            Check out my Github
          </CustomLink>{" "}
          if you'd like a more detailed look at what I've been up to.
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
