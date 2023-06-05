import React from "react";
import { habilities } from "@/utils/data";

export default function Habilidades() {
  return (
    <div className="w-full min-h-screen flex flex-row mx-auto p-5 bg-red-800">
      <div className="p-20">
        <h1 className="text-4xl font-bold mb-4">Habilidades</h1>

        <div className="w-90vw mx-auto p-10">
          <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-4 text-center py-8 font-bold dark:font-normal aos-init aos-animate">
            {habilities.map((hability, i) => (
              <div
                className="bg-slate-200 dark:bg-[#0a192f] shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500 items-center inline-block"
                key={i}
              >
                <div className="p-1 items-center inline-block">
                  <img
                    src={hability.image}
                    alt={hability.skill}
                    style={{ width: "150px", height: "150px" }}
                  />
                </div>
                <p className="mt-4 text-xl pb-5">{hability.skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
