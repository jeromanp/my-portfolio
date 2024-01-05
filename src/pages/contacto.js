import React from "react";
import Layout from "@/components/Layout";
import ContactForm from "@/components/FormContact";
import Head from "next/head";

export default function contacto() {
  return (
    <Layout>
      <Head>
      <title>Jose Eduardo Roman 💻📡 | Contacto</title>        
        <meta
          name="description"
          content="Si tienes alguna pregunta, propuesta de trabajo o simplemente quieres saludar, no dudes en contactarme. Estaré encantado de escucharte y responder lo antes posible."
        ></meta>
      </Head>
      <ContactForm />
    </Layout>
  );
}
