import React from "react";
import { habilities, pHabilidades } from "@/utils/data";

export default function Habilidades() {
  return (
    // <div className="w-full min-h-screen flex flex-row mx-auto p-5 bg-red-800">
    <div className="w-90 max-w-screen-xl items-center justify-between font-mono text-sm mx-auto bg-custom-azul">
      <div className="p-20">
        <h1 className="text-4xl font-bold mb-4 text-custom-oro_2">
          Habilidades
        </h1>

        <div className="text-xl">
          <p className="mb-2  text-gray-400 text-justify">{pHabilidades.uno}</p>
        </div>
        <div className="w-90vw mx-auto p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 text-center py-8 font-bold dark:font-normal aos-init aos-animate">
            {habilities.map((hability, i) => (
              <div
                className="bg-slate-200 dark:bg-[#928652] shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500 items-center inline-block"
                key={i}
                style={{ width: "100%", maxWidth: "200px", height: "auto" }}
              >
                <div className="p-1 items-center inline-block">
                  <img
                    src={hability.image}
                    alt={hability.skill}
                    className="w-48 h-48"
                  />
                </div>
                <p
                  className="mt-4 text-xl pb-5 text-center"
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
