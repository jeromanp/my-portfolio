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
          content="Web Portfolio Jose Eduardo Roman"
        ></meta>
        <link rel="icon" href="/imagen/logo.jpg" />
        <meta name="author" content="Jose Eduardo Roman Piña" />
        
        {/* Metadatos para redes sociales */}
        <meta property="og:title" content="Jose Eduardo Roman" />
        <meta property="og:description" content="Web Portfolio Jose Eduardo Roman" />
        <meta property="og:image" content="/imagen/logo.jpg" /> 
        <meta property="og:url" content="https://jeromanpi.vercel.app/" /> 
      </Head>
      <NavBar />

      <main className="w-full">{children}</main>
    </>
  );
}
