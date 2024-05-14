import React from "react";
import { habilities, pHabilidades, gestion, others } from "@/utils/data";
import { useInView } from "react-intersection-observer";

export default function Habilidades() {
  const [inViewRef, inView] = useInView({
    triggerOnce: true, // Solo activa la animación una vez
  });
  return (
    <div className="w-full mx-auto items-center justify-between text-sm  bg-custom-azul">
      <div className="container mx-auto p-5 sm:p-5 md:p-10 lg:p-20">
        <h1
          ref={inViewRef}
          className={`nothing text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 text-custom-oro_2 hover:text-gray-200  ${
            inView ? "animate__animated animate__zoomInDown" : ""
          }`}
        >
          Habilidades
        </h1>
        <div
          ref={inViewRef}
          className={`quick text-xs md:text-lg lg:text-lg  ${
            inView ? "animate__animated animate__jackInTheBox" : ""
          }`}
        >
          <p className="mb-2 text-gray-400 text-justify hover:text-white">{pHabilidades.uno}</p>
        </div>

        <div className="quick w-90vw mx-auto p-10">
          <h3 className="quick w-90vw text-xl hover:text-sky-400">Herramientas de desarrollo web:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center py-8 font-bold dark:font-normal">
            {habilities.map((hability, i) => (
              <div
              ref={inViewRef}
              className={`shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-200 items-center inline-block hover:animate-pulse ${inView ? "animate__animated animate__headShake" : ""}`}
              key={i}
            >
                
                <div className="p-1 items-center inline-block max-w-50 h-auto md:max-w-200 md:h-auto shadow-2xl shadow-custom-azul ">
                  <img style={{width:"15vh"}} src={hability.image} alt={hability.skill} />
                </div>
                <p
                  className="text-md sm:text-lg md:text-lg lg:text-xl mt-4  pb-5 text-center "
                  style={{ wordWrap: "break-word" }}
                >
                  {hability.skill}
                </p>
              </div>
            ))}
          </div>
          {/*  */}
          <h3 className="quick w-90vw text-xl hover:text-sky-400">Herramientas de gestión:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center py-8 font-bold dark:font-normal">
            {gestion.map((hability, i) => (
              <div
              ref={inViewRef}
              className={`shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-200 items-center inline-block hover:animate-pulse ${inView ? "animate__animated animate__tada" : ""}`}
              key={i}
            >
                
                <div className="p-1 items-center inline-block max-w-50 h-auto md:max-w-200 md:h-auto shadow-2xl shadow-custom-azul ">
                  <img style={{width:"15vh"}} src={hability.image} alt={hability.skill} />
                </div>
                <p
                  className="text-md sm:text-lg md:text-lg lg:text-xl mt-4  pb-5 text-center "
                  style={{ wordWrap: "break-word" }}
                >
                  {hability.skill}
                </p>
              </div>
            ))}
          </div>
          <h3 className="quick w-90vw text-xl hover:text-sky-400">Conocimientos en general</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center py-8 font-bold dark:font-normal">
            {others.map((hability, i) => (
              <div
              ref={inViewRef}
              className={`shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-200 items-center inline-block hover:animate-pulse ${inView ? "animate__animated animate__rollIn" : ""}`}
              key={i}
            >
                
                <div className="p-1 items-center inline-block max-w-50 h-auto md:max-w-200 md:h-auto shadow-2xl shadow-custom-azul ">
                  <img style={{width:"15vh"}} src={hability.image} alt={hability.skill} />
                </div>
                <p
                  className="text-md sm:text-lg md:text-lg lg:text-xl mt-4  pb-5 text-center "
                  style={{ wordWrap: "break-word" }}
                >
                  {hability.skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
