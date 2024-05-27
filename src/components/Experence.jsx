import React from "react";
import Link from "next/link";
import Column from "./Column";
import { useInView } from "react-intersection-observer";

export default function Experence() {
  const [inViewRef, inView] = useInView({
    triggerOnce: true, // Solo activa la animación una vez
  });
  return (
    <div className="bg-custom-oro_3">
      <div className="container py-10 mx-auto md:px-6 ">
        <div className="self-stretch bg-custom-oro_3 overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border gap-[80px] max-w-full z-[1] mt-[-52px] text-center text-base text-custom-azul font-text-small-link mq800:gap-[40px] mq800:pl-8 mq800:pr-8 mq800:pb-[73px] mq800:box-border mq450:gap-[20px]">
          <div className="w-[768px] flex flex-col items-start justify-start gap-[16px] max-w-full">
            <div className="w-0 h-6 relative leading-[150%] font-semibold inline-block" />
            <div className="self-stretch flex flex-col items-start justify-start py-0 px-0 box-border gap-[24px] max-w-full text-left text-29xl font-h3">
              <h2 className="indie mb-12 text-center text-3xl font-bold text-custom-azul">
                Habilidades y conocimientos
              </h2>
              <div className="self-stretch h-[21px] relative text-lg font-paragraph inline-block" />
            </div>
          </div>
          <div
            ref={inViewRef}
            className={` quick self-stretch flex flex-col items-start justify-start gap-[48px] text-xl font-h3 mq800:gap-[24px] ${
              inView ? "animate__animated animate__flipInX" : ""
            }`}
          >
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[32px] mq800:gap-[16px]">
              <Column
                title="Backend"
                description="He creado sitios con Node y ExpressJS, además de la API de NextJS."
                svg="/backend.svg"
              />
              <Column
                title="Frontend"
                description="Conozco de React junto con NextJS."
                svg="/website.svg"
              />
              <Column
                title="bases de datos"
                description="Sé de Modelado y he trabajado con PostgresSQL, Supabase y conozco poco de MongoBD."
                svg="/db.svg"
              />
              <Column
                title="Estilos Css"
                description="Estilos con CSS, Style Componets, Tailwind y un poco de Bootsrap"
                svg="/css.svg"
              />
            </div>
            <div
              ref={inViewRef}
              className={`flex flex-row items-center justify-start pt-4 px-0 pb-0 gap-[24px] text-left text-lg font-paragraph ${
                inView ? "animate__animated animate__backInLeft" : ""
              }`}
            >
              <button className="cursor-pointer py-1.5 px-[23px] bg-[transparent] flex flex-row items-center justify-center border-[1px] border-solid border-black hover:bg-darkslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100 hover:bg-custom-oro">
                <Link
                  target="_blank"
                  href="https://drive.google.com/file/d/1WAqDToFDsIHQDofy4oa8iZR5e0v5wPx_/view"
                >
                  <div className="relative text-lg font-paragraph text-custom-azul text-left inline-block min-w-[54px]">
                    Ver CV
                  </div>
                </Link>
              </button>
              <div className="flex flex-row items-center justify-center gap-[5px]">
                <Link href="/habilidades">
                  <div className="flex items-center">
                    <div className="relative inline-block min-w-[10px] text-custom-azul">
                      Ver más
                    </div>
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] ml-2 text-custom-azul"
                      alt=""
                      src="/icon--chevron-right.svg"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
