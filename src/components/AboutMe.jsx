import { aboutMe } from "@/utils/data";

export default function AboutMe() {
  return (
    <div className="w-full max-w-screen-xl items-center justify-between font-mono text-sm bg-custom-azul mx-auto">
      <div className="sm:p-10 md:p-10 lg:p-20 xl:p-20">
        <h1 className="text-4xl font-bold mb-4 text-custom-oro_2 sm:text-center md:text-start">Sobre mí</h1>
        <div className="text-xl">
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
