export default function NavBar() {
  return (
    <nav className="pb-4 flex justify-end pr-5 pt-5 bg-blue-400 flex">
      <ul className="flex text-white text-lg font-semibold self-center">
        <li className="mr-5 hover:text-gray-900">Inicio</li>
        <li className="mr-5 hover:text-gray-900">Sobre mí</li>
        <li className="mr-5 hover:text-gray-900">Habilidades</li>
        <li className="mr-5 hover:text-gray-900">Proyectos</li>
        <li className="mr-5 hover:text-gray-900">Contacto</li>
      </ul>
    </nav>
  );
}
