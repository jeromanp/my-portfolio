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
        
     </Head>
      <NavBar />

      <main className="w-full">{children}</main>
    </>
  );
}
