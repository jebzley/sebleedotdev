import { SocialIcons } from "@/components/SocialIcons";
import { PageLayout } from "@/components/PageLayout";
import { PageTitle } from "@/components/PageTitle";
import { CurriculumVitae } from "@/components/CurriculumVitae";

export default function Home() {
  const isSmolModeEnabled = process.env.NEXT_PUBLIC_SMOL_MODE;

  return (
    <PageLayout>
      <div className="flex flex-col gap-8">
        <PageTitle title="Seb Lee" subtitle="Software Developer" />
        <SocialIcons />
        <p>
          A short paragraph about me and some links to my socials. To be added
          in a later PR.
        </p>
      </div>
      <div className="flex flex-col gap-8 lg:overflow-hidden">
        <h2 className="text-3xl">Curriculum Vitae</h2>
        <div className="lg:overflow-scroll lg:pr-4">
          {isSmolModeEnabled ? (
            <CurriculumVitae />
          ) : (
            <p>recent activity goes here</p>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
