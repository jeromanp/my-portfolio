import React from "react";
import { useInView } from "react-intersection-observer";

export default function CTA({ title, subtitle = "", buttonText, href }) {
  const [inViewRef, inView] = useInView({
    triggerOnce: true, // Solo activa la animación una vez
  });
  return (
    <div className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('/imagen/cta.jpeg')] h-[500px]">
      {/* <!-- Container for demo purpose --> */}
      <div className="container my-24 mx-auto md:px-6">
        {/* <!-- Section: Design Block --> */}
        <section className="mb-32">
          <div className="">
            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
              <div className="flex h-full items-center justify-center">
                <div
                  ref={inViewRef}
                  className={`px-6 text-center text-white md:px-12 ${
                    inView ? "animate__animated animate__lightSpeedInLeft" : ""
                  }`}
                >
                  <h2 class="indie mb-12 text-5xl font-bold leading-tight tracking-tight">
                    {title} <br />
                    <span>{subtitle}</span>
                  </h2>
                  <a
                    href={href}
                    type="button"
                    className="rounded border-2 border-white px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 hover:bg-custom-oro"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    {buttonText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Section: Design Block --> */}
      </div>
      {/* <!-- Container for demo purpose --> */}
    </div>
  );
}
