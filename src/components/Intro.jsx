import { infoPersonal } from "@/utils/data";
import React from "react";

export default function Intro() {
  return (
    <div className="w-full max-w-screen-xl items-center justify-between font-mono text-sm bg-custom-azul mx-auto pt-10 md:pt-20 md:pb-10">
      <h1 className="text-2xl sm:text-3x1 md:text-4x1 lg:text-4x1  font-bold text-custom-oro_2 text-center">
        {infoPersonal.name}
      </h1>
      <div className="text-xs md:text-lg lg:text-xl">
        <p className="text-center mt-5 text-gray-400">
          {infoPersonal.professionOne} <br />
          {infoPersonal.professionTwo}
        </p>
      </div>

      <div className="w-20 h-20 md:w-60 sm:h-60 sm:w-70 md:h-70 mx-auto flex justify-center items-center">
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
