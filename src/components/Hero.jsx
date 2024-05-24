import React from 'react'

export default function Hero() {
  return (
    <section className="self-stretch overflow-hidden flex flex-row items-center justify-center py-[290px] px-5 box-border bg-[url('/imagen/hero.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[1] text-center text-37xl text-white font-h3 mq450:pt-[122px] mq450:pb-[122px] mq450:box-border mq1125:pt-[188px] mq1125:pb-[188px] mq1125:box-border">
      <div className="w-[768px] flex flex-col items-center justify-start gap-[24px] max-w-full">
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
          <h1 className="m-0 self-stretch relative text-inherit font-h3 font-inherit mq800:text-26xl mq450:text-15xl">
            ¡Bienvenido a mi portafolio personal!
          </h1>
          <div className="self-stretch relative text-lg font-paragraph">
            Soy Jose Eduardo Roman, un desarrollador web Fullstack apasionado
            por crear soluciones digitales innovadoras.
          </div>
        </div>
        <div className="flex flex-row items-start justify-start pt-4 px-0 pb-0 gap-[16px]">
          <button className="cursor-pointer py-2.5 px-[23px]  flex flex-row items-center justify-center border-[1px] border-solid border-white hover:bg-custom-oro hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-200">
            <div className="relative text-base font-btn text-white text-left inline-block min-w-[65px]">
              Contacto
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
