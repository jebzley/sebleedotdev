import { Card } from "@/components/Card";
import { CustomLink } from "@/components/CustomLink";
import { PageLayout } from "@/components/PageLayout";
import { PageTitle } from "@/components/PageTitle";
import { PROJECT_DATA } from "@/constants/projects";

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
      <ul className="flex flex-col gap-8  group list-none">
        {PROJECT_DATA.map((cardProps) => {
          return (
            <li
              key={cardProps.title}
              className="transition group-hover:opacity-50 hover:!opacity-100 list-none"
            >
              <Card
                link={`/projects/${cardProps.id}`}
                {...cardProps}
                type="Project"
              />
            </li>
          );
        })}
      </ul>
    </PageLayout>
  );
}
