import React from 'react'
import Layout from '@/components/Layout'
import Proyects from '@/components/Proyects'
import Head from 'next/head'

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
        <Proyects/>
    </Layout>
  )
}
