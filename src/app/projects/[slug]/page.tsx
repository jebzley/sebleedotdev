import { redirect } from "next/navigation";
import { PROJECT_DATA } from "@/constants/projects";
import { ROUTES } from "@/constants/routes";
import { PageLayout } from "@/components/PageLayout";
import { PageTitle } from "@/components/PageTitle";
import Image from "next/image";
import { Chip } from "@/components/Chip";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = PROJECT_DATA.find((project) => project.id === params.slug);

  if (!project) {
    redirect(ROUTES.HOME);
  }

  return (
    <PageLayout>
      <div className="flex flex-col gap-8">
        <PageTitle title={project.title} subtitle={project.subtitle} />
        {project.tools && (
          <ul className="flex gap-4 flex-wrap" aria-label="Technologies used">
            {project.tools.map((tool) => {
              return (
                <li key={tool}>
                  <Chip>{tool}</Chip>
                </li>
              );
            })}
          </ul>
        )}
        <Image src={project.imgSrc} alt="" height={400} width={400} />
      </div>
      <div
        className="md:overflow-scroll flex flex-col gap-4"
        dangerouslySetInnerHTML={{ __html: project.body ?? "" }}
      />
    </PageLayout>
  );
}
