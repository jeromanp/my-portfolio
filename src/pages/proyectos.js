import React from "react";
import Layout from "@/components/Layout";
import Proyects from "@/components/Proyects";
import Head from "next/head";
import CTA from "@/components/CTA";

export default function proyectos() {
  return (
    <Layout>
      <Head>
        <title>Jose Eduardo Roman 💻📡 | Proyectos</title>
        <meta
          name="description"
          content="A continuación presento los proyectos más destacados que he realizado desde que inicie esta etapa en el mundo del desarrollo web"
        ></meta>
      </Head>
      <CTA title="La práctica hace al" subtitle="Maestro" buttonText="Ver CV" href="https://drive.google.com/file/d/1WAqDToFDsIHQDofy4oa8iZR5e0v5wPx_/view" />
      <Proyects />
    </Layout>
  );
}
