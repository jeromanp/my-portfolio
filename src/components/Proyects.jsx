import { proyectos, misProyectos } from "@/utils/data";
import Link from "next/link";

export default function Proyects() {
  return (
    <div className="w-90 max-w-screen-xl items-center justify-between font-mono text-sm bg-custom-azul mx-auto">
      <div className="p-20">
        <h1 className="text-4xl font-bold mb-4">Proyectos</h1>
        <div className="text-xl">
          <p className="mb-2 text-gray-500 text-justify">
            {proyectos.parrafo_1}
          </p>
          <p className="mb-2 text-gray-500 text-justify">
            {proyectos.parrafo_2}
          </p>
        </div>

        <div className="mt-10">
          {misProyectos.map((proyect, i) => (
            <div
              className="flex flex-col md:flex-row items-center justify-center h-full p-10"
              key={i}
            >
              <div className="md:w-1/2">
                <div className="mb-4 p-5">
                  <h1 className="font-bold text-4xl mb-4 cursor-text text-custom-oro">
                    {proyect.title}
                  </h1>
                  <p className="cursor-text text-justify text-m whitespace-pre-line text-gray-400">
                    {proyect.description}
                  </p>
                  <br />
                  <p className="cursor-text text-justify text-m whitespace-pre-line text-red-500">
                    Tecnologías: {proyect.tecnologies}
                  </p>
                </div>

                <div className="items-center">
                  <div className=" mb-4 flex justify-center space-x-2">
                    <Link href={proyect.deploy}>
                      <button
                        className="bg-custom-oro_2 mr-2 inline-block transition duration-300 ease-in-out text-dark-800 hover:bg-custom-azul cursor-pointer py-2 px-4 rounded-lg border border-custom-oro"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="text-sm">Deploy</span>
                      </button>
                    </Link>

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

              <div className="md:w-1/2 mx-auto items-center">
                <video className="w-full pb-20 pl-4" controls>
                  <source src={proyect.video} type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
