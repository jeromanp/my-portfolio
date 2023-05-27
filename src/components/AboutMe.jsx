import { aboutMe } from "@/utils/data";

export default function AboutMe() {
  return (
    <div className="max-w-md mx-auto p-1">
      <h1 className="text-4xl font-bold mb-4">Sobre mí</h1>
      <p className="mb-2 text-sm text-gray-500 text-justify">
        {aboutMe.intro}
      </p>
      <p className="mb-2 text-sm text-gray-500 text-justify">
        {aboutMe.estudio}
      </p>

      <p className="mb-2 text-sm text-gray-500 text-justify">
        {aboutMe.experiencia}
      </p>
    </div>
  );
}
