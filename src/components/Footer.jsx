import React from "react";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);
  const [currentModal, setCurrentModal] = useState(null);

  const openModal = (modal) => {
    setCurrentModal(modal);
    setShowModal(true);
  };

  const closeModal = () => {
    setCurrentModal(null);
    setShowModal(false);
  };
  return (
    <div className="h-screen">
      
    <footer className="quick flex-1 bg-custom-oro_3 text-custom-azul h-full">
      <div className="container py-10 lg:py-12 xl:py-14 mx-auto flex justify-center items-center">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
          <div className="flex flex-col gap-6 mx-auto justify-center items-center">
            <h3 className="nothing text-xl md:text-3xl text-custom-oro font-bold mx-auto">
              Jose Eduardo Román
            </h3>
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
                <li className="text-custom-oro">Mapa del sitio</li>
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
                    href="/sobre-mi"
                  >
                    Sobre mi
                  </a>
                </li>
                <li className="border-b-2 text-custom-blanco">
                  <a
                    className="block py-1.5 text-base text-white hover:text-custom-azul transition-colors duration-300"
                    href="/habilidades"
                  >
                    Habilidades
                  </a>
                </li>
                <li className="border-b-2 text-custom-blanco">
                  <a
                    className="block py-1.5 text-base text-white hover:text-custom-azul transition-colors duration-300"
                    href="/proyectos"
                  >
                    Proyectos
                  </a>
                </li>
                <li className="border-b-2 text-custom-blanco">
                  <a
                    className="block py-1.5 text-base text-white hover:text-custom-azul transition-colors duration-300"
                    href="/contacto"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>

{/*  */}
          <div className="p-4 sm:p-0 sm:pl-10 lg:pl-20 mx-auto items-center flex justify-center flex-col">
            <div className="mx-auto items-center flex">
              <h3 className="mb-4 flex flex-col text-custom-oro">Mis redes sociales</h3>
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
                  <a onClick={() => openModal("modal1")}>
                    <img
                      src="/svg-social-networks/slack.svg"
                      alt="slack"
                      className="h-6 sm:h-9 md:h-10 lg:h-10 w-auto transition duration-300 transform hover:scale-125"
                    />
                  </a>
                </li>

                <li>
                  <a onClick={() => openModal("modal2")}>
                    <img
                      src="/svg-social-networks/discord.svg"
                      alt="discord"
                      className="h-6 sm:h-9 md:h-10 lg:h-10 w-auto transition duration-300 transform hover:scale-125"
                    />
                  </a>
                </li>

                <li>
                  <a onClick={() => openModal("modal3")}>
                    <img
                      src="/svg-social-networks/cv.svg"
                      alt="cv"
                      className="h-6 sm:h-9 md:h-10 lg:h-10 w-auto transition duration-300 transform hover:scale-125"
                    />
                  </a>
                </li>

                {showModal && (
                  <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-custom-azul rounded-lg p-6 border border-white relative">
                      {currentModal === "modal1" && (
                        <div className="">
                          <button
                            onClick={closeModal}
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-1 rounded absolute top-0 right-0 mt-2 mr-2"
                          >
                            ❌
                          </button>
                          <h2 className="text-xl font-bold mb-4 text-white mt-5">
                            Búscame como:{" "}
                            <strong className="text-yellow-800">
                              Jose Eduardo Roman
                            </strong>
                          </h2>
                        </div>
                      )}
                      {currentModal === "modal2" && (
                        <div>
                          <button
                            onClick={closeModal}
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-1 rounded absolute top-0 right-0 mt-2 mr-2"
                          >
                            ❌
                          </button>
                          <h2 className="text-xl font-bold mb-4 text-white mt-5">
                            Búscame como:{" "}
                            <strong className="text-yellow-800">
                              Jose Eduardo Roman#0856
                            </strong>
                          </h2>
                        </div>
                      )}
                      {currentModal === "modal3" && (
                        <div className="">
                          <button
                            onClick={closeModal}
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-1 rounded absolute top-0 right-0 mt-2 mr-2"
                          >
                            ❌
                          </button>
                          <h2 className="text-xl font-bold mb-4 text-white mt-5">
                            ¿Que deseas hacer?
                          </h2>
                          <a className="bg-custom-oro_2 text-white mr-2 inline-block transition duration-300 ease-in-out text-dark-800 hover:bg-custom-azul cursor-pointer py-2 px-4 rounded-lg border border-custom-oro" target="_blank" href="https://drive.google.com/file/d/1WAqDToFDsIHQDofy4oa8iZR5e0v5wPx_/view">Ver CV</a>

                          <a href="/doc/JERP.pdf" download="CV-JERP.pdf" className="bg-custom-oro_2 text-white mr-2 inline-block transition duration-300 ease-in-out text-dark-800 hover:bg-custom-azul cursor-pointer py-2 px-4 rounded-lg border border-custom-oro" onClick={closeModal}>Descargar CV</a>

                        </div>
                      )}
                    </div>
                  </div>
                )}

                
              </ul>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </footer>
    </div>

  );
}
