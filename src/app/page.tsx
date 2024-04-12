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
      <section className="overflow-scroll">
        {isSmolModeEnabled ? (
          <CurriculumVitae />
        ) : (
          <p>recent activity goes here</p>
        )}
      </section>
    </PageLayout>
  );
}
