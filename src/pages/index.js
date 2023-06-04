import Layout from "@/components/Layout";
import AboutMe from "@/components/AboutMe";
import Intro from "@/components/Intro";
import { infoPersonal } from "@/utils/data";

export default function Home() {
  return (
    <Layout>
      <main className="flex min-h-full flex-col items-center justify-between">
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
