import Layout from "@/components/Layout";
import AboutMe from "@/components/AboutMe";
import Intro from "@/components/Intro";
import Habilidades from "@/components/Habilidades";
import Proyects from "@/components/Proyects";
import FormContact from "@/components/FormContact";
import Footer from "@/components/Footer";
import CountVisit from "@/components/CountVisit";

export default function Home() {
  return (
    <Layout>
      <CountVisit />
        <section id="intro">
          <Intro />
        </section>

        <section id="about-me">
          <AboutMe />
        </section>

        <section id="skills">
          <Habilidades />
        </section>

        <section id="proyects">
          <Proyects />
        </section>

        <section id="contact">
          <FormContact/>
        </section>
      <Footer />
    </Layout>
  );
}
