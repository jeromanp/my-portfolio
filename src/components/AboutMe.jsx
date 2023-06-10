import { aboutMe } from "@/utils/data";

export default function AboutMe() {
  return (
    <div className="w-full max-w-screen-xl items-center justify-between font-mono text-sm bg-custom-azul mx-auto">
      <div className="p-5 sm:p-5 md:p-10 lg:p-20 xl:p-20">
        <h1 className="text-2xl sm:text-3x1 md:text-4x1 lg:text-4x1 font-bold mb-4 text-custom-oro_2">Sobre mí</h1>
        <div className="text-xs md:text-lg lg:text-xl">
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
