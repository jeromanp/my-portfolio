import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="pb-4 flex justify-end pr-5 pt-5 bg-blue-400 fixed top-0 w-full">
  <ul className="flex text-white text-lg font-semibold self-center">
    <li className="mr-5 hover:text-gray-900">
      <Link href="#intro">Inicio</Link>
    </li>
    <li className="mr-5 hover:text-gray-900">
      <Link href="#about-me">Sobre mí</Link>
    </li>
    <li className="mr-5 hover:text-gray-900">
      <Link href="#skills">Habilidades</Link>
    </li>
    <li className="mr-5 hover:text-gray-900">
      <Link href="#proyects">Proyectos</Link>
    </li>
    <li className="mr-5 hover:text-gray-900">
      <Link href="#contact">Contacto</Link>
    </li>
  </ul>
</nav>


  );
}
