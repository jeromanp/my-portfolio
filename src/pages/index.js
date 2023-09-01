import Layout from "@/components/Layout";
import AboutMe from "@/components/AboutMe";
import Intro from "@/components/Intro";
import Habilidades from "@/components/Habilidades";
import Proyects from "@/components/Proyects";
import FormContact from "@/components/FormContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Layout>
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
