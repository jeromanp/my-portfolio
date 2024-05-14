import { aboutMe } from "@/utils/data";
import { useInView } from "react-intersection-observer";

export default function AboutMe() {
  const [inViewRef, inView] = useInView({
    triggerOnce: true, // Solo activa la animación una vez
  });
  return (
    <div className="w-full flex items-center justify-center font-mono text-sm bg-custom-azul mx-auto">
      <div className="container mx-auto p-5 sm:p-5 md:p-10 lg:p-20 md:mx-12">
        <h1
          ref={inViewRef}
          className={`nothing text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-10 text-custom-oro_2 hover:text-gray-200 ${
            inView ? "animate__animated animate__zoomInDown" : ""
          }`}
        >
          Sobre mí
        </h1>

        <div
          ref={inViewRef}
          className={`quick text-xs md:text-lg lg:text-lg whitespace-pre-line flex flex-col md:flex-row  ${
            inView ? "animate__animated animate__backInLeft" : ""
          }`}
        >
          <div className="md:w-1/2 order-2">
            <h2 className="text-2xl text-sky-700 hover:text-sky-400">
              1. ¿Qué debes saber de mi?
            </h2>
            <p className="pb-10 pt-9 text-gray-400 text-justify hover:text-white">
              {aboutMe.intro}
            </p>
            <h2 className="text-2xl text-sky-700 hover:text-sky-400">
              2. ¿Cuál es mi formación académica?
            </h2>
            <p className="pb-10 text-gray-400 text-justify  hover:text-white">
              {aboutMe.estudio}
            </p>
            <h2 className="text-2xl text-sky-700 hover:text-sky-400">
              3. ¿Dónde he trabajado?
            </h2>
            <p className="pb-10 text-gray-400 text-justify hover:text-white">
              {aboutMe.experiencia}
            </p>
            <h2 className="text-2xl text-sky-700 hover:text-sky-400">
              4. ¿Porqué aprender Desarrollo Web?
            </h2>
            <p className="pb-10 text-gray-400 text-justify hover:text-white">
              {aboutMe.reciente}
            </p>
            <h2 className="text-2xl text-sky-700 hover:text-sky-400">
              5. ¿Cuál es mi objetivo?
            </h2>
            <p className="pb-10 pt-10 text-gray-400 text-justify hover:text-white">
              {aboutMe.ahora}
            </p>
          </div>
          <div className="md:w-1/2 flex flex-col justify-center items-center order-1 md:order-2 lg:max-w-[70%]">
              <img
                src="/imagen/me.jpg"
                alt=""
                className="w-full md:w-[70vw] h-auto p-10 justify-center hidden md:inline "
              />
            <img
              src="/imagen/hero2.png"
              alt=""
              className="w-full md:w-[70vw] h-auto p-10 justify-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
