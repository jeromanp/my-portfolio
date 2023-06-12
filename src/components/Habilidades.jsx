import React from "react";
import { habilities, pHabilidades } from "@/utils/data";

export default function Habilidades() {
  return (
    <div className="w-full max-w-screen-xl mx-auto items-center justify-between font-mono text-sm  bg-custom-azul">
      <div className="p-5 sm:p-5 md:p-10 lg:p-20 xl:p-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 text-custom-oro_2">
          Habilidades
        </h1>

        <div className="text-xs md:text-lg lg:text-xl">
          <p className="mb-2  text-gray-400 text-justify">{pHabilidades.uno}</p>
        </div>

        <div className="w-90vw mx-auto p-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center py-8 font-bold dark:font-normal aos-init aos-animate">
            {habilities.map((hability, i) => (
              <div
                className="bg-slate-200 dark:bg-[#928652] shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-200 items-center inline-block"
                key={i}
              >
                <div className="p-1 items-center inline-block max-w-50 h-auto md:max-w-200 md:h-auto shadow-2xl shadow-custom-azul">
                  <img
                    src={hability.image}
                    alt={hability.skill}
                  />
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
