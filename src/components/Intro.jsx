import { infoPersonal } from "@/utils/data";
import React from "react";

export default function Intro() {
  return (
    <div className="w-full max-w-screen-xl items-center justify-between font-mono text-sm bg-custom-azul mx-auto pt-10 md:pt-20 md:pb-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold text-custom-oro_2 text-center">
        {infoPersonal.name}
      </h1>
      <div className="text-sm md:text-xl lg:text-2xl">
        <p className="text-center mt-4 md:mt-9 text-gray-400">
          {infoPersonal.professionOne}
        </p>
        <p className="text-center mt-4 text-gray-400">
          {infoPersonal.professionTwo}
        </p>
      </div>

      <div className="w-20 h-auto md:w-60 lg:w-80 mx-auto flex justify-center items-center">
        <div className="w-full h-full flex justify-center items-center">
          <img
            src="/imagen/img-me.jpg"
            alt="me"
            className="object-cover rounded-full max-w-full max-h-full pt-2"
          />
        </div>
      </div>
    </div>
  );
}
