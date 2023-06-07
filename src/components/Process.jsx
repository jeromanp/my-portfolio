import React from "react";
import Link from "next/link";

export default function Process() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div>
        <h1 className="text-4xl font-bold mb-4 mt-5 text-center text-custom-oro_2 mb-20">
          En proceso de desarrollo ...
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

      <Link href="/">
        <button
          className="bg-custom-oro_2 mr-2 inline-block transition duration-300 ease-in-out text-dark-800 hover:bg-custom-azul cursor-pointer py-2 px-4 rounded-lg border border-custom-oro mt-20"
          target="_blank"
          rel="noreferrer"
        >
          <span className="text-sm">Ir al Inicio</span>
        </button>
      </Link>
    </div>
  );
}
