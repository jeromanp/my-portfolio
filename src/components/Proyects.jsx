import { proyectos, misProyectos } from "@/utils/data";
import Link from "next/link";

export default function Proyects() {
  return (
    <div className="z-0 w-90 max-w-screen-xl items-center justify-between font-mono text-sm bg-custom-azul mx-auto">
      <div className="p-5 sm:p-5 md:p-10 lg:p-20 xl:p-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 text-custom-oro animate-fadeInLeft">
          Proyectos
        </h1>
        <div className="text-xs md:text-lg lg:text-xl animate-fadeInDown">
          <p className="mb-2 text-gray-500 text-justify">
            {proyectos.parrafo_1}
          </p>
          <p className="mb-2 text-gray-500 text-justify">
            {proyectos.parrafo_2}
          </p>
        </div>

        <div className="mt-1 sm:mt-5 md:mt10 lg:mt-10">
          {misProyectos.map((proyect, i) => (
            <div
              className="flex flex-col sm:flex-rom md:flex-row items-center justify-center h-full p-1 sm:p-5 md:p-10 lg:p-10"
              key={i}
            >
              <div className="md:w-1/2 sm:w-[150%] xs:w-[150%]">
                <div className="mb-3 p-2 sm:p-2 md:p-0 lg:p-5 animate-fadeInUp">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold mb-4 font-bold mb-4 cursor-text text-white">
                    {proyect.title}
                  </h1>

                  <div className="text-xs sm: text-md md:text-md lg:text-xl">
                    <p className="cursor-text text-justify text-m whitespace-pre-line text-gray-400">
                      {proyect.description}
                    </p>
                    <br />
                    <p className="cursor-text text-justify text-m whitespace-pre-line text-green-500">
                      Tecnologías: {proyect.tecnologies}
                    </p>
                  </div>
                </div>

                <div className="items-center animate-fadeOut">
                  <div className="mb-4 flex justify-center space-x-2">
                    {proyect.title === "Hostería Hueney Ruca" ? (
                      <Link href={proyect.deploy} target="_blank">
                        <button
                          className="bg-custom-oro_2 mr-2 inline-block transition duration-300 ease-in-out text-dark-800 hover:bg-custom-azul cursor-pointer py-2 px-4 rounded-lg border border-custom-oro"
                          rel="noreferrer"
                        >
                          <span className="text-sm">Deploy</span>
                        </button>
                      </Link>
                    ) : (
                      <Link href={proyect.deploy}>
                        <button
                          className="bg-custom-oro_2 mr-2 inline-block transition duration-300 ease-in-out text-dark-800 hover:bg-custom-azul cursor-pointer py-2 px-4 rounded-lg border border-custom-oro"
                          rel="noreferrer"
                        >
                          <span className="text-sm">Deploy</span>
                        </button>
                      </Link>
                    )}

                    <Link href={proyect.repository} target="_blank">
                      <button
                        className="bg-custom-oro_2 mr-2 inline-block transition duration-300 ease-in-out text-dark-800 hover:bg-custom-azul cursor-pointer py-2 px-4 rounded-lg border border-custom-oro"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
