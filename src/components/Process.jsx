import React from "react";
import Link from "next/link";

export default function Process() {
  // const goBack = () => {
  //   window.history.back();
  // };

  return (
    <div className="quick flex flex-col justify-center items-center min-h-screen bg-custom-oro_3">
      <div className="p-10">
        <h1 className="indie text-5xl sm:text-3x1 md:text-4x1 lg:text-4x1 m text-custom-oro_2 font-bold text-center mb-10 sm:mb-12 md:mb-20 lg:mb-20">
          En desarrollo...
        </h1>
        <h2 className="text-2xl text-justify sm:text-3x1 md:text-4x1 lg:text-4x1 m text-custom-oro_2 font-bold mb-10 sm:mb-12 md:mb-20 lg:mb-20 p-3">
          Estamos trabajando para que este contenido se muestre, vuelve pronto.
        </h2>
      </div>

      <div className="🤚">
        <div className="👉"></div>
        <div className="👉"></div>
        <div className="👉"></div>
        <div className="👉"></div>
        <div className="🌴"></div>
        <div className="👍"></div>
      </div>

      <Link href="/proyectos">
        <button className="bg-custom-oro_2 mr-2 inline-block transition duration-300 ease-in-out text-dark-800 hover:bg-custom-azul cursor-pointer py-2 px-4 rounded-lg border border-custom-oro mt-20">
          <span className="text-2xl">Volver</span>
        </button>
      </Link>
    </div>
  );
}
