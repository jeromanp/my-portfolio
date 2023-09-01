import { aboutMe } from "@/utils/data";
import { useInView } from "react-intersection-observer";


export default function AboutMe() {
  const [inViewRef, inView] = useInView({
    triggerOnce: true, // Solo activa la animación una vez
  });
  return (
    <div className="w-full items-center justify-between font-mono text-sm bg-custom-azul mx-auto">
      <div className="p-5 sm:p-5 md:p-10 lg:p-20 xl:p-20">
        <h1 className="nothing text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 text-custom-oro_2 ">Sobre mí</h1>
        <div
        ref={inViewRef}
        className={`quick text-xs md:text-lg lg:text-xl whitespace-pre-line  ${inView ? "animate__animated animate__fadeInTopLeft" : ""}`}
      >
          <p className="mb-2  text-gray-400 text-justify">{aboutMe.intro}</p>
          <p className="mb-2  text-gray-400 text-justify ">{aboutMe.estudio}</p>
          <p className="mb-2  text-gray-400 text-justify">
            {aboutMe.experiencia}
          </p>
        </div>
      </div>
    </div>
  );
}
