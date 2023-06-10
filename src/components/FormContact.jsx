import React from "react";
import { contactoInfo } from "@/utils/data";

export default function FormContact() {
  return (
    <div className="w-full max-w-screen-xl mx-auto items-center justify-between font-mono text-sm bg-custom-azul">
      <div className="p-5 sm:p-7 md:p-10 lg:p-20 xl:p-20">
        <h1 className="text-2xl sm:text-3x1 md:text-4x1 lg:text-4x1 font-bold mb-4 text-custom-oro_2">
          Contacto
        </h1>
        <div className="text-xs md:text-lg lg:text-xl">
          <p className="mb-2 text-gray-500 text-justify">
            {contactoInfo.parrafo_1}
          </p>
        </div>

        <form className="form mx-auto mt-5 md:mt-10 lg:mt-20">
          <div className="flexy">
            <label>
              <input
                required=""
                placeholder="Nombre"
                type="text"
                className="input"
              />
            </label>
          </div>

          <label>
            <input
              required=""
              placeholder="Email"
              type="email"
              className="input"
            />
          </label>

          <label>
            <input
              required=""
              type="tel"
              placeholder="Número de contacto"
              className="input"
            />
          </label>
          <label>
            <textarea
              required=""
              rows="3"
              placeholder="Mensage"
              className="input01"
            ></textarea>
          </label>

          <button className="fancy" href="/">
            <span className="top-key"></span>
            <span className="text">submit</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </button>
        </form>
      </div>
    </div>
  );
}
