import React from "react";
import Layout from "@/components/Layout";
import Habilidades from "@/components/Habilidades";
import Head from "next/head";

export default function habilidades() {
  return (
    <Layout>
      <Head>
      <title>Jose Eduardo Roman 💻📡 | Habilidades</title>        
        <meta
          name="description"
          content="A continuación se describen parte de mis habilidades para el desarrollo web fullstack, adémas agrego otras habilidades que consolidan mi formación profesional"
        ></meta>
      </Head>
      <Habilidades />
    </Layout>
  );
}
