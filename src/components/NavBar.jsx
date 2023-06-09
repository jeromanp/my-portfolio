import Link from "next/link";

export default function NavBar() {
  return (
<nav className="z-50 pb-4 flex justify-end pr-5 pt-5 bg-custom-azul border border-custom-oro fixed top1 w-full">
    <ul className="flex text-lg font-semibold self-center">
    <li className="mr-5 hover:text-red-700">
      <Link href="#intro">Inicio</Link>
    </li>
    <li className="mr-5 hover:text-red-700">
      <Link href="#about-me">Sobre mí</Link>
    </li>
    <li className="mr-5 hover:text-red-700">
      <Link href="#skills">Habilidades</Link>
    </li>
    <li className="mr-5 hover:text-red-700">
      <Link href="#proyects">Proyectos</Link>
    </li>
    <li className="mr-5 hover:text-red-700">
      <Link href="#contact">Contacto</Link>
    </li>
  </ul>
</nav>


  );
}
