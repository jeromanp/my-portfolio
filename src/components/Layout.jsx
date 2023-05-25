import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />

      <main className="container py-4">{children}</main>
    </>
  );
}
