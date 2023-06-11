import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex-1 bg-custom-oro text-custom-azul">
      <div className="container mx-auto py-12 lg:py-14 xl:py-20 mx-auto flex justify-center items-center">
        <div className="flex flex-col lg:flex-row items-start lg:justify-between gap-12">
          <div className="flex flex-col gap-6 ml-10 mx-auto flex justify-center items-center">
            <h3 className="font-medium text-custom-azul">Jose Eduardo Román</h3>
            <div className="w-30 h-30 md:w-60 sm:h-60 sm:w-70 md:h-70 mx-auto flex justify-center items-center">
              <Link href="/">
                <img
                  className="h-20 sm:h-30 md:h-40 lg:h-50 w-auto object-cover rounded-full"
                  src="/imagen/img-me.jpg"
                  alt="me"
                />
              </Link>
            </div>
          </div>

          <div className="hidden sm:flex md:flex lg:flex flex-col gap-12 lg:gap-6 mx-auto flex justify-center items-center">
            <div className="flex flex-col lg:flex-row gap-12 lg:items-center lg:justify-end">
              <ul className="flex flex-col lg:flex-col items-start lg:items-center flex-wrap gap-6">
                <li>Mapa del sitio</li>
                <li className="border-b-2 text-custom-blanco">
                  <a
                    className="block py-1.5 text-base text-white hover:text-custom-azul transition-colors duration-300"
                    href="#intro"
                  >
                    Inicio
                  </a>
                </li>
                <li className="border-b-2 text-custom-blanco">
                  <a
                    className="block py-1.5 text-base text-white hover:text-custom-azul transition-colors duration-300"
                    href="#about-me"
                  >
                    Sobre mi
                  </a>
                </li>
                <li className="border-b-2 text-custom-blanco">
                  <a
                    className="block py-1.5 text-base text-white hover:text-custom-azul transition-colors duration-300"
                    href="#skills"
                  >
                    Habilidades
                  </a>
                </li>
                <li className="border-b-2 text-custom-blanco">
                  <a
                    className="block py-1.5 text-base text-white hover:text-custom-azul transition-colors duration-300"
                    href="#proyects"
                  >
                    Proyectos
                  </a>
                </li>
                <li className="border-b-2 text-custom-blanco">
                  <a
                    className="block py-1.5 text-base text-white hover:text-custom-azul transition-colors duration-300"
                    href="#contact"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4 sm:p-0 sm:pl-10 lg:pl-20 mx-auto items-center flex justify-center flex-col">
            <div className="mx-auto items-center flex">
              <h3 className="mb-4 flex flex-col">Mis redes sociales</h3>
            </div>
            <div className="flex flex-col lg:flex-row gap-12 lg:items-center lg:justify-end">
              <ul className="flex items-center gap-x-4 gap-y-2 flex-wrap">
                <li>
                  <a target="_blank" href={`mailto:jeduardo.roman69@gmail.com`}>
                    <img
                      src="/svg-social-networks/gmail.svg"
                      alt="email"
                      className="h-6 sm:h-9 md:h-10 lg:h-10 w-auto transition duration-300 transform hover:scale-125"
                    />
                  </a>
                </li>

                <li>
                  <a target="_blank" href="https://github.com/jeromanp/">
                    <img
                      src="/svg-social-networks/github.svg"
                      alt="github"
                      className="h-6 sm:h-9 md:h-10 lg:h-10 w-auto transition duration-300 transform hover:scale-125"
                    />
                  </a>
                </li>

                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/jose-eduardo-roman/"
                  >
                    <img
                      src="/svg-social-networks/linkedin.svg"
                      alt="linkedin"
                      className="h-6 sm:h-9 md:h-10 lg:h-10 w-auto transition duration-300 transform hover:scale-125"
                    />
                  </a>
                </li>

                <li>
                  <a
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=5215515751939&text=Hola%20Eduardo%20%F0%9F%96%90%EF%B8%8F!%2C%20obtuve%20tu%20contacto%20desde%20tu%20repositorio%20de%20GitHub/"
                  >
                    <img
                      src="/svg-social-networks/whatsapp.svg"
                      alt="whatsapp"
                      className="h-6 sm:h-9 md:h-10 lg:h-10 w-auto transition duration-300 transform hover:scale-125"
                    />
                  </a>
                </li>

                <li>
                  <a target="_blank" href="">
                    <img
                      src="/svg-social-networks/slack.svg"
                      alt="slack"
                      className="h-6 sm:h-9 md:h-10 lg:h-10 w-auto transition duration-300 transform hover:scale-125"
                    />
                  </a>
                </li>

                <li>
                  <a target="_blank" href="">
                    <img
                      src="/svg-social-networks/discord.svg"
                      alt="discord"
                      className="h-6 sm:h-9 md:h-10 lg:h-10 w-auto transition duration-300 transform hover:scale-125"
                    />
                  </a>
                </li>

                <li>
                  <a target="_blank" href="/working">
                    <img
                      src="/svg-social-networks/cv.svg"
                      alt="cv"
                      className="h-6 sm:h-9 md:h-10 lg:h-10 w-auto transition duration-300 transform hover:scale-125"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
