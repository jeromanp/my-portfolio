import React from "react";
import { habilities } from "@/utils/data";

export default function Habilidades() {
  return (
    <div className="mx-auto md:w-[90%] bg-red-200 min-h-screen p-5">
      <h1 className="text-4xl font-bold mb-4">Habilidades</h1>

      <div className="w-90vw mx-auto p-10">
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 font-bold dark:font-normal aos-init aos-animate">
          {habilities.map((hability, i) => (
            <div
              className="bg-slate-200 dark:bg-[#0a192f] shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500 items-center inline-block"
              key={i}
            >
              <div className="p-1 items-center inline-block" >
              <img src={hability.image} alt={hability.skill} style={{ width: '200px', height: '200px' }}/>
              </div>
              <p className="mt-4 text-xl pb-5">{hability.skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
