import NavBar from "./NavBar";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
     <Head>
     <title>Jose Eduardo Roman</title>
        <meta name="description" content="Webside Portfolio Jose Eduardo Roman"></meta>
        <link rel="icon" href="/imagen/logo.jpg" />
        <meta name="author" content="Jose Eduardo Roman Piña" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
     </Head>
      <NavBar />

      <main className="container mx-auto">{children}</main>
    </>
  );
}
