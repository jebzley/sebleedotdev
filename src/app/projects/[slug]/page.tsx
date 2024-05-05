import { redirect } from "next/navigation";
import { PROJECT_DATA } from "@/constants/projects";
import { ROUTES } from "@/constants/routes";

const paths = PROJECT_DATA.map((project) => project.id);

export default function ProjectPage({ params }: { params: { slug: string } }) {
  if (!paths.includes(params.slug)) {
    redirect(ROUTES.HOME);
  }

  return <p>{params.slug}</p>;
}
