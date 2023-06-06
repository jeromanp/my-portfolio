import Layout from "@/components/Layout";
import AboutMe from "@/components/AboutMe";
import Intro from "@/components/Intro";
import Habilidades from "@/components/Habilidades";

export default function Home() {
  return (
    <Layout>
      <main>
        <section id="intro">
          <Intro />
        </section>

        <section id="about-me">
          <AboutMe />
        </section>

        <section id="skills">
          <Habilidades />
        </section>
      </main>
    </Layout>
  );
}
