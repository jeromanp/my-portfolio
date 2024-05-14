import { infoPersonal } from "@/utils/data";
import React from "react";
import { useInView } from "react-intersection-observer";

export default function Intro() {
  const [inViewRef, inView] = useInView({
    triggerOnce: true, // Solo activa la animación una vez
  });
  return (
    <>
      {/* ////////////////////// */}
      <section className="h-full">
        <div className="bg-custom-azul text-white py-10 md:h-full">
          <div className="container mx-auto flex flex-col lg:flex-row items-center my-2 md:my-20">
            <div
              ref={inViewRef}
              className={`flex flex-col w-full lg:w-1/3 justify-center items-center mx-20 md:mx-5 ${
                inView ? "animate__animated animate__backInDown" : ""
              }`}
            >
              <h1 className="text-3xl md:text-6xl text-custom-oro_2 tracking-loose lg:my-5 hover:text-gray-200">
                Hola!!{" "}
              </h1>
              <div className="flex justify-center items-center">
                <h2 className="text-xl md:text-3xl lg:text-5xl leading-relaxed md:leading-snug mb-2 md:mb-5 lg:ml-8 mx-auto text-center">
                  Soy <b className="hover:text-blue-500">{infoPersonal.name}</b>
                </h2>
              </div>

              <p className="text-sm md:text-base lg:text-xl text-gray-50 mb-4 mx-2 flex text-center justify-center items-center">
                <i className="hover:text-green-500">{infoPersonal.professionOne}</i> e <i className="hover:text-green-500">{infoPersonal.professionTwo}</i>
              </p>
              <a
                href="/contacto"
                className="bg-custom-oro_2 mr-2 inline-block transition duration-300 ease-in-out text-dark-800 hover:bg-custom-azul cursor-pointer py-2 px-4 rounded-lg border text-xl"
              >
                Contactame
              </a>
            </div>
            <div className="md:mb-0 md:mt-0 lg:w-2/3  justify-center">
              <div className="h-48 flex flex-wrap content-center md:my-10">
                <div
                  ref={inViewRef}
                  className={`${
                    inView ? "animate__animated animate__backInUp" : ""
                  }`}
                >
                  <img
                    // style={{ width: "30vh", height: "auto" }}
                    className="mx-4 my-7 h-auto object-cover max-w-full max-h-full pt-4 shadow-lg w-20 lg:w-40 md:w-40 hidden md:inline rounded-3xl hover:rounded-full"
                    src="/imagen/hero2.jpeg"
                    alt="Developer"
                  />
                </div>
                <div
                  ref={inViewRef}
                  className={`${
                    inView ? "animate__animated animate__backInDown" : ""
                  }`}
                >
                  <img
                    // style={{ width: "35vh", height: "auto" }}
                    className="h-auto object-cover max-w-full rounded-full max-h-full pt-4 lg:my-5 lx:-my-20 w-24 lg:w-48 xl:w-60 md:w-40 inline hover:opacity-60 "
                    src="/imagen/img-me.jpg"
                    alt="JERP"
                  />
                </div>
                <div
                  ref={inViewRef}
                  className={`${
                    inView ? "animate__animated animate__backInUp" : ""
                  }`}
                >
                  <img
                    // style={{ width: "30vh", height: "auto" }}
                    className="mx-4 my-7 h-auto object-cover max-w-full max-h-full pt-4 shadow-lg w-24 lg:w-40 md:w-40 hidden md:inline rounded-3xl hover:rounded-full"
                    src="/imagen/hero1.jpeg"
                    alt="Telecom"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            ref={inViewRef}
            className={`indie text-sm flex justify-center md:text-xl lg:text-2xl md:py-0 mx-2 md:mx-12 h-auto ${
              inView ? "animate__animated animate__bounceInLeft" : ""
            }`}
          >
            <p className=" text-justify text-gray-400 mx-10 hover:text-white">
              <br /> Aquí tendrás la oportunidad de conocer más acerca de mí,
              explorar algunos de los emocionantes proyectos en los que he
              tenido el placer de trabajar y descubrir las habilidades que me
              destacan.
              <br />
              <br /> Tu visita es muy apreciada, y te animo a explorar a tu
              gusto. Si tienes alguna sugerencia o comentario sobre el diseño
              del sitio, ¡no dudes en compartirla!
              <br />
              <br /> Estoy siempre abierto a nuevas ideas y mejoras. ¡Gracias
              por estar aquí!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
