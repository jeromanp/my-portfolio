import NavBar from "./NavBar";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
     <Head>
     <title>my portfolio</title>
        <meta name="description" content="Webside Portfolio Jose Eduardo Roman"></meta>
     </Head>
      <NavBar />

      <main className="container mx-auto">{children}</main>
    </>
  );
}
