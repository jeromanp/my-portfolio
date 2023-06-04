import { aboutMe } from "@/utils/data";

export default function AboutMe() {
  return (
    <div className="w-full min-h-screen flex flex-row mx-auto p-5">
      <div className="p-20">
        <h1 className="text-4xl font-bold mb-4">Sobre mí</h1>
        <div className="text-xl">
          <p className="mb-2  text-gray-500 text-justify">{aboutMe.intro}</p>
          <p className="mb-2  text-gray-500 text-justify ">{aboutMe.estudio}</p>
          <p className="mb-2  text-gray-500 text-justify">
            {aboutMe.experiencia}
          </p>
        </div>
      </div>
    </div>
  );
}
