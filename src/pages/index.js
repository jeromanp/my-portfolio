import Layout from "@/components/Layout";
import CountVisit from "@/components/CountVisit";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experence from "@/components/Experence";
import TopProyects from "@/components/TopProyects";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <Layout>
      {/* <CountVisit /> */}
      <Hero />
      <About />
      <Experence />
      <TopProyects />
      <CTA image="/imagen/cta.jpeg" title="Contáctame" buttonText="Enviar email" href="/contacto" />
    </Layout>
  );
}
