import React from "react";
import Layout from "@/components/Layout";
import AboutMe from "@/components/AboutMe";
import Head from "next/head";

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
      <AboutMe />
    </Layout>
  );
}
