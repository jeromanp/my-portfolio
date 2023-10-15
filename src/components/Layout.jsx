import NavBar from "./NavBar";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Jose Eduardo Roman</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Hola soy Jose Eduardo Roman, Desarrollador Fullstack con background en Redes y Telecomunicaciones"
        ></meta>
        <link rel="icon" href="/imagen/logo3.png" />
        <meta name="author" content="Jose Eduardo Roman Piña" />

        {/* Metadatos para redes sociales */}
        <meta
          property="og:title"
          content="Jose Eduardo Roman - Desarrollador Fullstack"
        />
        <meta
          property="og:description"
          content="Hola soy Jose Eduardo Roman, Desarrollador Fullstack con background en Redes y Telecomunicaciones"
        />
        <meta property="og:image" content="/imagen/logo3.png" />
        <meta property="og:url" content="https://www.jeromanp.website" />
        <meta
          name="twitter:title"
          content="Jose Eduardo Roman - Desarrollador Fullstack"
        />
        <meta
          name="twitter:description"
          content="Hola soy Jose Eduardo Roman, Desarrollador Fullstack con background en Redes y Telecomunicaciones"
        />
        <meta name="twitter:image" content="/imagen/logo3.png" />
      </Head>
      <NavBar />

      <main className="w-full">{children}</main>
    </>
  );
}
