import { PageLayout } from "@/components/PageLayout";
import { PageTitle } from "@/components/PageTitle";

export default function Home() {
  return (
    <PageLayout>
      <div className="flex flex-col gap-8">
        <PageTitle title="Seb Lee" subtitle="Software Developer" />
        <p>
          A short paragraph about me and some links to my socials. To be added
          in a later PR.
        </p>
      </div>
      <section className="overflow-scroll">
        <p>recent activity goes here</p>
      </section>
    </PageLayout>
  );
}
