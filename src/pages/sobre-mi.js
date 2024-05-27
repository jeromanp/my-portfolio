import React from "react";
import Layout from "@/components/Layout";
import AboutMe from "@/components/AboutMe";
import Head from "next/head";
import CTA from "@/components/CTA";

export default function sobreMi() {
  return (
    <Layout>
      <Head>
      <title>Jose Eduardo Roman 💻📡 | Sobre Mí</title>        
        <meta
          name="description"
          content="¿Qué debes saber de mi? . Me apasiona el conocimiento y tengo un gusto por aprender cosas nuevas. Disfruto leyendo artículos, noticias y publicaciones sobre una variedad de temas, especialmente aquellos relacionados con la tecnología, astronomía, paleontología, historia, geografía y biología. Esta curiosidad me ha permitido adquirir conocimientos en diversas áreas y me considero una persona multidisciplinaria. "
        ></meta>
      </Head>
      <CTA title="Conoce a José Eduardo" buttonText="Ver CV" href="https://drive.google.com/file/d/1WAqDToFDsIHQDofy4oa8iZR5e0v5wPx_/view"/>
      <AboutMe />
    </Layout>
  );
}
