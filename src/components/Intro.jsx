import { infoPersonal } from "@/utils/data";
import React from "react";
import { useInView } from "react-intersection-observer";

export default function Intro() {
  const [inViewRef, inView] = useInView({
    triggerOnce: true, // Solo activa la animación una vez
  });
  return (
    <div className=" pt-12 sticky h-full w-full items-center justify-between text-sm bg-custom-azul mx-auto">
      <div
        ref={inViewRef}
        className={` w-40 md:w-60 lg:w-80 mx-auto flex justify-center items-center  ${
          inView ? "animate__animated animate__flipInX" : ""
        }`}
      >
        <div className="py-5 w-full h-full flex justify-center items-center">
          <img
            src="/imagen/img-me.jpg"
            alt="meImage"
            style={{ width: "35vh", height: "auto" }}
            className="w-10 h-auto object-cover rounded-full max-w-full max-h-full pt-4 shadow-lg"
          />
        </div>
      </div>
      <div
        ref={inViewRef}
        className={`container mx-auto  ${
          inView ? "animate__animated animate__fadeInDownBig" : ""
        }`}
      >
        <h1 className="nothing text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-custom-oro_2 text-center">
          {infoPersonal.name}
        </h1>
        <div className="indie text-sm md:text-2xl lg:text-3xl ">
          <p className="text-center mt-4 md:mt-9 text-gray-400">
            {infoPersonal.professionOne}
          </p>
          <p className="text-center mt-4 text-gray-400">
            {infoPersonal.professionTwo}
          </p>
        </div>
        <div className="indie text-sm md:text-xl lg:text-2xl py-10 ">
          <p text-center text-gray-400>
            <b className="text-custom-oro">¡Bienvenido a mi sitio web!</b><br/><br/> Aquí tendrás la oportunidad de
            conocer más acerca de mí, explorar algunos de los emocionantes
            proyectos en los que he tenido el placer de trabajar y descubrir las
            habilidades que me destacan.<br/><br/> Tu visita es muy apreciada, y te animo
            a explorar a tu gusto. Si tienes alguna sugerencia o comentario
            sobre el diseño del sitio, ¡no dudes en compartirla!<br/><br/> Estoy siempre
            abierto a nuevas ideas y mejoras. ¡Gracias por estar aquí!
          </p>
        </div>
      </div>
    </div>
  );
}
