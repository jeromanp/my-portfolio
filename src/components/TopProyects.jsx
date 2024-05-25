import React from "react";
import Link from "next/link";

export default function TopProyects() {
  return (
    // <!-- Container for demo purpose -->
    <div className="bg-custom-oro_3 py-12">
      <div className="container py-2 mx-auto md:px-6 ">
        {/* <!-- Section: Design Block --> */}
        <section className="mb-32 text-center lg:text-left">
          <h2 className="mb-12 text-center text-3xl font-bold text-custom-azul">
            Proyectos destacados
          </h2>

          <div className="grid gap-x-6 lg:grid-cols-3 lg:gap-x-12">
            {/* UNO */}
            <div
              className="mb-6 block rounded-lg shadow-[0_2px_15px_-3px_rgba(219, 8, 8, 0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-custom-azul_2 lg:mb-0"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img src="/imagen/Hueney.png" className="w-full rounded-t-lg" />
                <a href="#!">
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
                </a>
                <svg
                  className="absolute left-0 bottom-0 text-white dark:text-custom-azul_2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="currentColor"
                    d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <div className="p-6">
                <h5 className="mb-4 text-lg font-bold">Hueney Ruca</h5>
                <p className="mb-6 text-justify">
                  Un proyecto diseñado para una Hostería ubicada en Buenos
                  Aires, Argentina, donde el administrador tiene el control de
                  reservaciones, disponibilidad y pagos; así como
                  altas/bajas/actualización/eliminación de las cabañas que
                  prestan el servicio.
                </p>
                <Link
                  href="#!"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#df9a06] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(202,148,59,0.5)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(202,148,59,0.5)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(202,148,59,0.5)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(202,148,59,0.5),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(202,148,59,0.5),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(202,148,59,0.5),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Leer más
                </Link>
              </div>
            </div>

            {/* DOS */}
            <div className="mb-6 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-custom-azul_2 lg:mb-0">
              <div
                className="relative overflow-hidden bg-cover bg-no-repeat"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <img src="/imagen/IziQ.png" className="w-full rounded-t-lg" />
                <a href="#!">
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
                </a>
                <svg
                  className="absolute left-0 bottom-0 text-white dark:text-custom-azul_2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -5 1440 220"
                >
                  <path
                    fill="currentColor"
                    d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <div className="p-6">
                <h5 className="mb-4 text-lg font-bold">IziQ Study</h5>
                <p className="mb-6 text-justify">
                  Pensado en aquellos usuarios que desean reforzar su
                  conocimiento en base a mazos, con pregunta y respuesta, con la
                  finalidad de reforzar el conocimiento, Incluye juegos y
                  sección de cuestionario.
                </p>
                <a
                  href="#!"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(208, 221, 213, 0.3),0_4px_18px_0_rgba(202,148,59,0.5)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(202,148,59,0.5)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(202,148,59,0.5)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(202,148,59,0.5),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(202,148,59,0.5),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(202,148,59,0.5),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Ver más
                </a>
              </div>
            </div>
            {/* TRES */}
            <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-custom-azul_2">
              <div
                className="relative overflow-hidden bg-cover bg-no-repeat"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <img src="/imagen/fehpag.png" className="w-full rounded-t-lg" />
                <a href="#!">
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
                </a>
                <svg
                  className="absolute left-0 bottom-0 text-white dark:text-custom-azul_2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 160"
                >
                  <path
                    fill="currentColor"
                    d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <div className="p-6">
                <h5 className="mb-4 text-lg font-bold">Camping travel</h5>
                <p className="mb-6 text-justify">
                  Landing Page diseñada para una empresa dedicada al ramo de la
                  construcción, especificamnete el trabajo de herrería,
                  pailería, cristal templado, ambientaciones y diseño de planos
                  arquitéctónicos.
                </p>
                <a
                  href="#!"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(202,148,59,0.5)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(202,148,59,0.5)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(202,148,59,0.5)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(202,148,59,0.5),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(202,148,59,0.5),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(202,148,59,0.5),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Ver más
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="flex flex-row items-center justify-center gap-[5px]">
          <Link href="/proyectos">
            <div className="flex items-center">
              <div className="relative inline-block min-w-[120px] text-custom-azul">
                Ver todos los proyectos
              </div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] ml-2 text-custom-azul"
                alt=""
                src="/icon--chevron-right.svg"
              />
            </div>
          </Link>
        </div>
        {/* <!-- Section: Design Block --> */}
      </div>
    </div>

    // <!-- Container for demo purpose -->
  );
}
