import { SocialIcons } from "@/components/SocialIcons";
import { PageLayout } from "@/components/PageLayout";
import { PageTitle } from "@/components/PageTitle";
import { CurriculumVitae } from "@/components/CurriculumVitae";
import { CustomLink } from "@/components/CustomLink";

export default function Home() {
  const isSmolModeEnabled = process.env.NEXT_PUBLIC_SMOL_MODE;
  return (
    <PageLayout>
      <section aria-label="About Me" className="flex flex-col gap-8">
        <PageTitle title="Seb Lee" subtitle="Software Developer" />
        <SocialIcons />
        <p>
          I'm a software developer currently living in beautiful North Somerset.
          I have 3 years of professional experience in creating performant,
          accessible and beautiful web applications.
        </p>
        <CustomLink type="download" href={"/assets/documents/cv.pdf"}>
          Click here to download a PDF copy of my CV
        </CustomLink>
      </section>
      <section
        aria-label="Curriculum Vitae"
        className="flex flex-col gap-8 lg:overflow-hidden"
      >
        <h2 className="text-3xl">Curriculum Vitae</h2>
        <div className="lg:overflow-scroll lg:pr-4">
          {isSmolModeEnabled ? (
            <CurriculumVitae />
          ) : (
            <p>recent activity goes here</p>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
