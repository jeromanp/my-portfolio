import { useState } from "react";
import { proyectos, misProyectos } from "@/utils/data";
import Link from "next/link";
import Modal from "@/components/Modal";
import { useInView } from "react-intersection-observer";

export default function Proyects() {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div className="z-0 w-90 items-center justify-between font-mono text-sm bg-custom-azul mx-auto">
      <div className="p-5 sm:p-5 md:p-10 lg:p-20 xl:p-20">
        <h1
          ref={inViewRef}
          className={`nothing text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 text-custom-oro_2  ${
            inView ? "animate__animated animate__zoomInDown" : ""
          }`}
        >
          Proyectos
        </h1>

        <div
          ref={inViewRef}
          className={`quick text-xs md:text-lg lg:text-lg whitespace-pre-line  ${
            inView ? "animate__animated animate__jackInTheBox" : ""
          }`}
        >
          <p className="mb-2  text-gray-400 text-justify">
            {proyectos.parrafo_1}
          </p>
          <p className="mb-2  text-gray-400 text-justify ">
            {proyectos.parrafo_2}
          </p>
        </div>

        <div
          ref={inViewRef}
          className={`mt-1 sm:mt-5 md:mt10 lg:mt-10  ${
            inView ? "animate__animated animate__rotateInDownLeft" : ""
          }`}
        >
          {misProyectos.map((proyect, i) => (
            <div
              className="mx-auto container flex flex-col sm:flex-rom md:flex-row items-center justify-center h-full p-1 sm:p-5 md:p-10 lg:p-10"
              key={i}
            >
              <div className="md:w-1/2 sm:w-[150%] xs:w-[150%]">
                <div className="mb-2 p-2 sm:p-2 md:p-0 lg:p-5 animate-fadeInUp">
                  <h1 className="indie text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold mb-4 cursor-text text-cyan-500">
                    {proyect.title}
                  </h1>

                  <div className="quick text-xs sm: text-md md:text-md lg:text-xl">
                    <br />
                    <p className="cursor-text text-justify text-m whitespace-pre-line text-white-500">
                      Tecnologías utilizadas:{" "}
                      <span className="text-green-500">
                        {proyect.tecnologies}
                      </span>
                    </p>
                    <p className="cursor-text text-justify text-m whitespace-pre-line text-white-500">
                      Servicios de despliegue:{" "}
                      <span className="text-red-500">{proyect.production}</span>
                    </p>
                    <p>
                      Visible para estos dispositivos:{" "} { proyect.name_dispositive}
                      <img
                        src={proyect.dispositive}
                        alt="dispositivo"
                        className=" ml-5 my-2 w-16 h-auto hover:animate-bounce"
                      />{" "}
                    </p>
                    <div className="pt-2 flex items-start">
                      <Modal
                        title={proyect.title}
                        description={proyect.description}
                      />
                    </div>
                  </div>
                </div>

                <div className="items-center animate-fadeOut">
                  <div className="mb-4 flex justify-center space-x-2">
                    {proyect.deploy === "/working" ? (
                      <Link href={proyect.deploy}>
                        <button
                          className="bg-custom-oro_3 mr-2 inline-block transition duration-300 ease-in-out text-dark-800 hover:bg-custom-azul cursor-pointer py-2 px-4 rounded-lg border border-custom-oro"
                          rel="noreferrer"
                        >
                          <span className="text-sm">Deploy</span>
                        </button>
                      </Link>
                    ) : (
                      <Link href={proyect.deploy} target="_blank">
                        <button
                          className="bg-custom-oro_3 mr-2 inline-block transition duration-300 ease-in-out text-dark-800 hover:bg-custom-azul cursor-pointer py-2 px-4 rounded-lg border border-custom-oro"
                          rel="noreferrer"
                        >
                          <span className="text-sm">Deploy</span>
                        </button>
                      </Link>
                    )}

                    <Link href={proyect.repository} target="_blank">
                      <button
                        className="bg-custom-oro_3 mr-2 inline-block transition duration-300 ease-in-out text-dark-800 hover:bg-custom-azul cursor-pointer py-2 px-4 rounded-lg border border-custom-oro"
                        rel="noreferrer"
                      >
                        <span className="text-sm">Repositorio</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              {proyect.video ? (
                <div className="sm:w-[100%] md:w-1/2 mx-auto items-center z-0 animate-spinnerGrow">
                  <video className="w-full pb-10 pl-4 z-0" controls>
                    <source src={proyect.video} type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </video>
                </div>
              ) : null}

              {proyect.image ? (
                <div className="sm:w-[100%] md:w-1/2 mx-auto items-center z-0 animate-spinnerGrow">
                  <img
                    src={proyect.image}
                    alt={proyect.title}
                    className="p-4"
                  />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
