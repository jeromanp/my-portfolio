import React from "react";
import { useInView } from "react-intersection-observer";

export default function CountVisit() {
  const [inViewRef, inView] = useInView({
    triggerOnce: true, // Solo activa la animación una vez
  });
  return (
    <div className="w-full bg-custom-oro_3  bg-[url('/imagen/cta.jpeg')]">
      <div
        ref={inViewRef}
        className={`container mx-auto flex items-center justify-center ${
          inView ? "animate__animated animate__bounceInDown" : ""
        }`}
      >
        <h2 className="text-white font-semibold text-xl mr-2 my-5">
          Visitantes:
        </h2>
        <a
          href="https://www.contadorvisitasgratis.com"
          title="contador de visitas com"
        >
          <img
            src="https://counter6.optistats.ovh/private/contadorvisitasgratis.php?c=thsn168c63z42rekgykbghkjf78d5uwj"
            border="0"
            title="contador de visitas com"
            alt="contador de visitas com"
          />
        </a>
      </div>
    </div>
  );
}
