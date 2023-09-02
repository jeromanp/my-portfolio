import { infoPersonal } from "@/utils/data";
import React from "react";
import { useInView } from "react-intersection-observer";

export default function Intro() {
  const [inViewRef, inView] = useInView({
    triggerOnce: true, // Solo activa la animación una vez
  });
  return (
    <div className="pt-12 sticky h-full w-full items-center justify-between text-sm bg-custom-azul mx-auto">
      <div
        ref={inViewRef}
        className={`  ${inView ? "animate__animated animate__fadeInDownBig" : ""}`}
      >
        <h1 className="nothing text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-custom-oro_2 text-center">
          {infoPersonal.name}
        </h1>
        <div className="indie text-sm md:text-xl lg:text-2xl ">
          <p className="text-center mt-4 md:mt-9 text-gray-400">
            {infoPersonal.professionOne}
          </p>
          <p className="text-center mt-4 text-gray-400">
            {infoPersonal.professionTwo}
          </p>
        </div>
      </div>


      <div
        ref={inViewRef}
        className={` w-40 md:w-60 lg:w-80 mx-auto flex justify-center items-center  ${inView ? "animate__animated animate__flipInX" : ""}`}
      >
        
          <div className="w-full h-full flex justify-center items-center">
            <img
              src="/imagen/img-me.jpg"
              alt="meImage"
              style={{width:"35vh",height:"auto"}}
              className="w-10 h-auto object-cover rounded-full max-w-full max-h-full pt-4 shadow-lg"
            />
          </div>
        </div>
    </div>
  );
}
