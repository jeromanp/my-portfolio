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
      {/* <CountVisit /> */}
      <Intro />
    </Layout>
  );
}
