import React from "react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [inViewRef, inView] = useInView({
    triggerOnce: true, // Solo activa la animación una vez
  });
  return (
    <div className="bg-custom-oro_3">
      <div className="container py-5 lg:py-10 mx-auto md:px-6">
        <div className="mx-auto h-auto self-stretch relative max-w-full text-left text-base text-blue font-text-small-link flex flex-col lg:flex-row">
          <div className="bg-custom-oro_3 w-full flex flex-col items-start justify-start py-2 lg:py-10 px-16 box-border max-w-full h-full mq800:gap-[40px] mq800:pl-8 mq800:pr-8 mq800:box-border mq450:gap-[5px]">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[80px] max-w-full mq800:gap-[40px] mq450:gap-[20px]">              
              <div className="flex-1 flex flex-col items-start justify-start py-6 px-0 box-border gap-[24px] min-w-[400px] max-w-full text-lg font-paragraph mq800:min-w-full">
                <div
                  ref={inViewRef}
                  className={`self-stretch flex flex-col items-start justify-start gap-[32px] mq800:gap-[16px] ${
                    inView ? "animate__animated animate__bounceInRight" : ""
                  }`}
                >
                  <div className="self-stretch relative text-custom-azul text-justify  md:text-xl quick">
                    <p className="m-0">
                      Soy Ingeniero en Telecomunicaciones, Sistemas y
                      Electrónica con especialización en Redes e
                      Interconectividad.
                    </p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">
                      Recientemente con nuevos estudios en Desarrollo Web
                      avalados por el Bootcamp de Henry.
                    </p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">
                      Actualmente en búsqueda de ofertas laborales que me
                      permitan desarrollarme en el mundo de TI.
                    </p>
                  </div>
                </div>
                <div
                  ref={inViewRef}
                  className={`flex flex-row items-center justify-start py-8 px-0 gap-[24px] text-base font-btn ${
                    inView ? "animate__animated animate__backInLeft" : ""
                  }`}
                >
                  <Link href="/contacto/#email">
                    <button className="cursor-pointer py-2.5 px-[23px] bg-[transparent] flex flex-row items-center justify-center border-[1px] border-solid border-black hover:box-border hover:border-[1px] hover:border-solid hover:bg-custom-oro hover:text-white">
                      <div className="relative text-base font-btn text-custom-azul text-left inline-block min-w-[86px]">
                        Contáctame
                      </div>
                    </button>
                  </Link>

                  <div className="flex flex-row items-center justify-center gap-[8px]">
                    <div className="relative inline-block min-w-[59px]">
                      <Link href="/sobre-mi">
                        <div className="flex items-center">
                          <div className="relative inline-block min-w-[20px] text-custom-azul">
                            Ver más
                          </div>
                          <img
                            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] ml-2 text-custom-azul "
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
          <div
            ref={inViewRef}
            className={`flex mx-auto items-center ${
              inView ? "animate__animated animate__bounceInRight" : ""
            }`}
          >
            <img
              className="relative w-[246px] h-[305px] lg:w-[346px] lg:h-[405px] object-cover z-[1] hover:opacity-70"
              loading="lazy"
              alt=""
              src="/imagen/img-me.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
