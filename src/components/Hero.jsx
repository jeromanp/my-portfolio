import React from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function Hero() {
  const [inViewRef, inView] = useInView({
    triggerOnce: true, // Solo activa la animación una vez
  });
  return (
    <section className="self-stretch overflow-hidden flex flex-row items-center justify-center py-[100px] px-5 box-border bg-[url('/imagen/hero.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[1] text-center text-37xl text-white font-h3 mq450:pt-[122px] mq450:pb-[122px] mq450:box-border mq1125:pt-[188px] mq1125:pb-[188px] mq1125:box-border">
      <div className="w-[768px] flex flex-col items-center justify-start gap-[24px] max-w-full">
        <div
          ref={inViewRef}
          className={`self-stretch flex flex-col items-center justify-start gap-[24px] ${
            inView ? "animate__animated animate__bounceInDown" : ""
          }`}
        >
          <h1 className="m-0 self-stretch relative text-inherit font-h3 font-inherit mq800:text-26xl mq450:text-15xl indie text-4xl lg:text-6xl">
            ¡Bienvenido a mi portafolio personal!
          </h1>
          <div className="self-stretch relative text-xl font-paragraph quick py-10 md:py-5">
            Soy Jose Eduardo Roman, un desarrollador web Fullstack apasionado
            por crear soluciones digitales innovadoras.
          </div>
        </div>
        <div
          ref={inViewRef}
          className={`flex flex-row items-start justify-start pt-4 px-0 pb-0 gap-[16px] ${
            inView ? "animate__animated animate__backInLeft" : ""
          }`}
        >
          <Link href="/contacto">
            <button className="cursor-pointer py-2.5 px-[23px] flex flex-row items-center justify-center border-[1px] border-solid border-white hover:bg-custom-oro hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-200">
              <div className="relative text-base font-btn text-white text-left inline-block min-w-[65px]">
                Contacto
              </div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
