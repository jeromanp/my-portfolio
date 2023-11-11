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
      <section>
        <div className="bg-custom-azul text-white py-10">
          <div className="container mx-auto flex flex-col lg:flex-row items-center my-2 md:my-20">
            <div
              ref={inViewRef}
              className={`flex flex-col w-full lg:w-1/3 justify-center items-center mx-20 ${
                inView ? "animate__animated animate__backInDown" : ""
              }`}
            >
              <h1 className="text-3xl md:text-6xl p-2 text-custom-oro_2 tracking-loose">
                Hola!!{" "}
              </h1>
              <h2 className="text-xl md:text-3xl lg:text-5xl leading-relaxed md:leading-snug mb-2">
                Soy {infoPersonal.name}
              </h2>
              <p className="text-sm md:text-base lg:text-xl text-gray-50 mb-4 flex text-center justify-center items-center">
                {infoPersonal.professionOne} e {infoPersonal.professionTwo}
              </p>
              <a
                href="/contacto"
                className="bg-custom-oro hover:bg-custom-oro_3 hover:text-white text-custom-azul rounded shadow hover:shadow-lg py-2 px-4 border border-custom-oro_3 text-lg"
              >
                Contactame
              </a>
            </div>
            <div className="p-1 mt-1 mb-2 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
              <div className="h-48 flex flex-wrap content-center">
                <div
                  ref={inViewRef}
                  className={`${
                    inView ? "animate__animated animate__backInUp" : ""
                  }`}
                >
                  <img
                    // style={{ width: "30vh", height: "auto" }}
                    className="mx-4 my-7 h-auto object-cover rounded-full max-w-full max-h-full pt-4 shadow-lg w-20 lg:w-48 md:w-40 hidden md:inline"
                    src="/imagen/hero2.PNG"
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
                    className="h-auto object-cover rounded-full max-w-full max-h-full pt-4 lg:-my-20 w-24 lg:w-60 md:w-48 inline"
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
                    className="mx-4 my-7 h-auto object-cover rounded-full max-w-full max-h-full pt-4 shadow-lg w-24 lg:w-48 md:w-40 hidden md:inline"
                    src="/imagen/hero1.PNG"
                    alt="Telecom"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            ref={inViewRef}
            className={`indie text-sm md:text-xl lg:text-2xl md:py-10 mx-2 md:mx-12 ${
              inView ? "animate__animated animate__bounceInLeft" : ""
            }`}
          >
            <p className="text-justify text-gray-400 mx-10">
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
