import React from "react";
import { contactoInfo } from "@/utils/data";

export default function FormContact() {
  return (
    <div className="w-90 max-w-screen-xl items-center justify-between font-mono text-sm bg-custom-azul mx-auto">
      <div className="p-20">
        <h1 className="text-4xl font-bold mb-4 text-custom-oro">Contacto</h1>
        <p className="mb-2 text-gray-500 text-justify text-xl">
          {contactoInfo.parrafo_1}
        </p>

        <form className="form mx-auto mt-20">
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

          <button className="fancy" href="#">
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
