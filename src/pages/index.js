import Layout from "@/components/Layout";
import CountVisit from "@/components/CountVisit";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experence from "@/components/Experence";
import TopProyects from "@/components/TopProyects";
import CTA from "@/components/CTA";
import BlazierCurve from "@/components/animations.jsx/BlazierCurve";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <BlazierCurve />
      <Experence />
      <BlazierCurve />
      <TopProyects />
      <CTA
        image="/imagen/cta.jpeg"
        title="Contáctame"
        buttonText="Enviar email"
        href="/contacto"
      />
      <CountVisit />
    </Layout>
  );
}
