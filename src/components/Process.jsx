import React from "react";
import Link from "next/link";

export default function Process() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div>
        <h1 className="text-2xl sm:text-3x1 md:text-4x1 lg:text-4x1 font-bold mb-4 text-custom-oro_2 font-bold text-center mb-10 sm:mb-12 md:mb-20 lg:mb-20">
          En desarrollo ...
        </h1>
      </div>

      <div className="🤚">
        <div className="👉"></div>
        <div className="👉"></div>
        <div className="👉"></div>
        <div className="👉"></div>
        <div className="🌴"></div>
        <div className="👍"></div>
      </div>

      <button
        className="bg-custom-oro_2 mr-2 inline-block transition duration-300 ease-in-out text-dark-800 hover:bg-custom-azul cursor-pointer py-2 px-4 rounded-lg border border-custom-oro mt-20"
        onClick={goBack}
      >
        <span className="text-sm">Volver</span>
      </button>
    </div>
  );
}
