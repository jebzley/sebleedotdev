import { PageLayout } from "@/components/PageLayout";

export default function Home() {
  return (
    <PageLayout>
      <section>
        <div className="flex gap-6 flex-wrap items-center">
          <hgroup>
            <h1 className="text-5xl">Seb Lee</h1>
            <p className="text-2xl">Software Developer</p>
          </hgroup>
        </div>
        <p>
          A short paragraph about me and some links to my socials. To be added
          in a later PR.
        </p>
      </section>
      <section className="overflow-scroll">
        <p>recent activity goes here</p>
      </section>
    </PageLayout>
  );
}
