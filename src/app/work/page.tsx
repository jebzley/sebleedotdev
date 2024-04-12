import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { PageTitle } from "@/components/PageTitle";
import { CurriculumVitae } from "@/components/CurriculumVitae";

export default function WorkPage() {
  return (
    <PageLayout>
      <div className="flex flex-col gap-8">
        <PageTitle title="Curriculum Vitae" subtitle="Seb Lee" />
        <p>
          A detailed list of my work history (excluding my retail and kitchen
          work as a student).{" "}
          <Link href="#">
            You can download a PDF copy of my CV by clicking here.
          </Link>
        </p>
      </div>
      <div className="lg:overflow-scroll">{<CurriculumVitae />}</div>
    </PageLayout>
  );
}
