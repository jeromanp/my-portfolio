import Layout from "@/components/Layout";
import AboutMe from "@/components/AboutMe";
import Intro from "@/components/Intro";
import Habilidades from "@/components/Habilidades";

export default function Home() {
  return (
    <Layout>
      <main>
        <section>
          <Intro />
        </section>

        <section>
          <AboutMe />
        </section>

        <section>
          <Habilidades />
        </section>
      </main>
    </Layout>
  );
}
