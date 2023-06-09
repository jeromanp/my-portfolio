import React from "react";

export default function Footer() {
  return (
    <footer className="flex-1 bg-custom-oro text-custom-azul">
      <div className="container mx-auto py-12 lg:py-14 xl:py-20 pl-10 pr-20">
        <div className="flex flex-col lg:flex-row items-start lg:justify-between gap-12">
          <div className="flex flex-col gap-6 ml-10">
            <h3 className="font-medium text-white">Jose Eduardo Román</h3>
            <img
              className="h-40 w-auto object-cover rounded-full"
              src="/imagen/img-me.jpg"
              alt="logo"
            />
          </div>

          <div className="flex flex-col gap-12 lg:gap-6">
            <div className="flex flex-col lg:flex-row gap-12 lg:items-center lg:justify-end">
              <ul className="flex flex-col lg:flex-col items-start lg:items-center flex-wrap gap-6">
                <li>Mapa del sitio</li>
                <li className="border-b-2 text-custom-blanco">
                  <a
                    className="block py-1.5 text-base text-white hover:text-custom-azul transition-colors duration-300"
                    href="/"
                  >
                    Inicio
                  </a>
                </li>
                <li className="border-b-2 text-custom-blanco">
                  <a
                    className="block py-1.5 text-base text-white hover:text-custom-azul transition-colors duration-300"
                    href="/"
                  >
                    Sobre mi
                  </a>
                </li>
                <li className="border-b-2 text-custom-blanco">
                  <a
                    className="block py-1.5 text-base text-white hover:text-custom-azul transition-colors duration-300"
                    href="/"
                  >
                    Habilidades
                  </a>
                </li>
                <li className="border-b-2 text-custom-blanco">
                  <a
                    className="block py-1.5 text-base text-white hover:text-custom-azul transition-colors duration-300"
                    href="/"
                  >
                    Proyectos
                  </a>
                </li>
                <li className="border-b-2 text-custom-blanco">
                  <a
                    className="block py-1.5 text-base text-white hover:text-custom-azul transition-colors duration-300"
                    href="/"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:items-center lg:justify-end">
            <ul className="flex items-center gap-x-4 gap-y-2 flex-wrap">
              <li>
                <a target="_blank" href={`mailto:jeduardo.roman69@gmail.com`}>
                  <img
                    src="/svg-social-networks/gmail.svg"
                    alt="email"
                    className="w-10 h-10 transition duration-300 transform hover:scale-125"
                  />
                </a>
              </li>

              <li>
                <a target="_blank" href="https://github.com/jeromanp/">
                  <img
                    src="/svg-social-networks/github.svg"
                    alt="github"
                    className="w-10 h-10 transition duration-300 transform hover:scale-125"
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
                    className="w-10 h-10 transition duration-300 transform hover:scale-125"
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
                    className="w-10 h-10 transition duration-300 transform hover:scale-125"
                  />
                </a>
              </li>

              <li>
                <a target="_blank" href="">
                  <img
                    src="/svg-social-networks/slack.svg"
                    alt="slack"
                    className="w-10 h-10 transition duration-300 transform hover:scale-125"
                  />
                </a>
              </li>

              <li>
                <a target="_blank" href="">
                  <img
                    src="/svg-social-networks/discord.svg"
                    alt="discord"
                    className="w-10 h-10 transition duration-300 transform hover:scale-125"
                  />
                </a>
              </li>

              <li>
                <a target="_blank" href="/working">
                  <img
                    src="/svg-social-networks/cv.svg"
                    alt="cv"
                    className="w-10 h-10 transition duration-300 transform hover:scale-125"
                  />
                </a>
              </li>
            </ul>

            <h3 className="mb-4 flex flex-col">
              Mis redes sociales
            </h3>
          </div>
        </div>
      </div>
    </footer>
  );
}
