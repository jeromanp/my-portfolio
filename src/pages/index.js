import Layout from "@/components/Layout";
import AboutMe from "@/components/AboutMe";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <Layout>
      <main className="w-full min-h-screen flex-row mx-auto">
        <section>
          <Intro />
        </section>

        <section>
          <AboutMe />
        </section>
      </main>
    </Layout>
  );
}
