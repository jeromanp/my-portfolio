import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-custom-oro_3">
      <div className="container py-10 mx-auto md:px-6">
        <div className="self-stretch h-[574px] relative max-w-full text-left text-base text-blue font-text-small-link mq1350:h-auto mq1350:min-h-[574]">
          <div className="absolute top-[0px] left-[0px] bg-custom-oro_3 w-full overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border max-w-full h-full mq800:gap-[40px] mq800:pl-8 mq800:pr-8 mq800:box-border mq450:gap-[20px]">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[80px] max-w-full mq800:gap-[40px] mq450:gap-[20px]">
              <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[16px] min-w-[400px] max-w-full mq800:min-w-full">
                <div className="self-stretch h-6 relative leading-[150%] font-semibold hidden" />
                <div className="self-stretch h-[116px] relative text-29xl font-h3 inline-block shrink-0 mq800:text-19xl mq450:text-10xl" />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start py-6 px-0 box-border gap-[24px] min-w-[400px] max-w-full text-lg font-paragraph mq800:min-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[32px] mq800:gap-[16px]">
                  <div className="self-stretch relative text-custom-azul text-justify">
                    <p className="m-0 ">
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
                  <div className="self-stretch hidden flex-row items-start justify-start py-2 px-0 gap-[24px] text-xl font-h3">
                    <div className="h-[116px] w-[296px] hidden flex-row items-start justify-start gap-[16px]">
                      <img
                        className="h-8 w-8 relative overflow-hidden shrink-0"
                        alt=""
                        src="/icon--relume.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start py-8 px-0 gap-[24px] text-base font-btn">
                  <button className="cursor-pointer py-2.5 px-[23px] bg-[transparent] flex flex-row items-center justify-center border-[1px] border-solid border-blue hover:box-border hover:border-[1px] hover:border-solid hover:bg-custom-oro hover:text-white">
                    <div className="relative text-base font-btn text-custom-azul hover:text-white text-left inline-block min-w-[86px]">
                      Contáctame
                    </div>
                  </button>
                  <div className="flex flex-row items-center justify-center gap-[8px]">
                    <div className="relative inline-block min-w-[59px]">
                      <Link href="/proyectos">
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
          <img
            className="absolute top-[139px] left-[245px] w-[246px] h-[305px] object-cover z-[1] "
            loading="lazy"
            alt=""
            src="/imagen/img-me.jpg"
          />
        </div>
      </div>
    </div>
  );
}
