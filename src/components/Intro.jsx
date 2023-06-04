import { infoPersonal } from "@/utils/data";

import React from "react";

export default function Intro() {
  return (
<section className="mb-20 mt-4">
  <div className="w-90 max-w-screen-xl items-center justify-between font-mono text-sm mx-auto">
    <h1 className="text-4xl font-bold text-red-500 text-center">{infoPersonal.name}</h1>
    <h3 className="text-2xl text-center mt-5">
      {infoPersonal.professionOne} <br/>
      {infoPersonal.professionTwo}
    </h3>
    <div className="w-60 h-60 mx-auto flex justify-center items-center">
      <img src="/img-me.jpg" alt="me" className="object-cover rounded-full mt-20" />
    </div>
  </div>
</section>




  );
}
