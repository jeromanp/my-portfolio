import { infoPersonal } from "@/utils/data";
import React from "react";

export default function Intro() {
  return (
    <div className="w-90 max-w-screen-xl items-center justify-between font-mono text-sm bg-custom-azul mx-auto pt-20 pb-10">
      <h1 className="text-4xl font-bold text-custom-oro_2 text-center">
        {infoPersonal.name}
      </h1>
      <h3 className="text-xl text-center mt-5 text-gray-400">
        {infoPersonal.professionOne} <br />
        {infoPersonal.professionTwo}
      </h3>
      <div className="w-60 h-60 mx-auto flex justify-center items-center">
        <div className="w-full h-full flex justify-center items-center">
          <img
            src="/imagen/img-me.jpg"
            alt="me"
            className="object-cover rounded-full max-w-full max-h-full pt-5"
          />
        </div>
      </div>
    </div>
  );
}
