import { proyectos } from "@/utils/data";

export default function Proyects() {
  return (
    <div className="w-90 max-w-screen-xl items-center justify-between font-mono text-sm bg-blue-900 mx-auto">
      <div className="p-20">
        <h1 className="text-4xl font-bold mb-4">Proyectos</h1>
        <div className="text-xl">
          <p className="mb-2  text-gray-500 text-justify">{proyectos.uno}</p>
          <p className="mb-2  text-gray-500 text-justify ">{proyectos.dos}</p>
          <p className="mb-2  text-gray-500 text-justify">
            {proyectos.tres}
          </p>
        </div>
      </div>
      
      <div
        className="max-w-[750px] m-auto p-4 flex flex-col justify-center w-full h-full"
        data-v-0edfa70c=""
      >
        <div
          className="flex bg-slate-300 dark:bg-[#112240] bg-cover px-8 py-12 md:bg-transparent dark:md:bg-transparent md:p-0 mb-12 aos-init aos-animate"
          data-aos="fade-in"
          data-v-0edfa70c=""
        >
          <div className="flex flex-col md:w-[60%] py-4" data-v-0edfa70c="">
            <div
              className="flex flex-col relative top-[-35px]"
              data-v-0edfa70c=""
            >
              <span
                className="text-[#f9b82c] dark:text-[#64ffda] text-sm font-medium"
                data-v-0edfa70c=""
              >
                Proyecto Destacado
              </span>
              <h3 className=" text-2xl font-semibold" data-v-0edfa70c="">
                Aplicación de Videojuegos
              </h3>
            </div>
            <div
              className="md:p-4 md:w-[130%] rounded md:bg-slate-300 dark:md:bg-[#112240] z-10"
              data-v-0edfa70c=""
            >
              <p
                className=" text-sm text-justify font-medium dark:font-normal"
                data-v-0edfa70c=""
              >
                Una SPA que consume datos de una API externa, y permite la
                visualización de información general y detallada de más de
                500,000 videojuegos, entre las funcionalidades que dispone esta
                APP está el filtrar y ordenar videojuegos por diferentes
                variables como género, plataformas, nombre, calificación, además
                de la creación de nuevos videojuegos, mediante un formulario
                controlado.
              </p>
            </div>
            <div className="flex md:w-[130%] z-10 pt-4" data-v-0edfa70c="">
              <ul
                className="flex flex-wrap text-sm font-medium text-[#4a6087] dark:text-slate-400"
                data-v-0edfa70c=""
                //   style="-webkit-text-stroke: 0.1px black;"
              >
                <li className="pr-4" data-v-0edfa70c="">
                  <p data-v-0edfa70c="">React</p>
                </li>
                <li className="pr-4" data-v-0edfa70c="">
                  <p data-v-0edfa70c="">Redux</p>
                </li>
                <li className="pr-4" data-v-0edfa70c="">
                  <p data-v-0edfa70c="">Styled Components</p>
                </li>
                <li className="pr-4" data-v-0edfa70c="">
                  <p data-v-0edfa70c="">Express</p>
                </li>
                <li className="pr-4" data-v-0edfa70c="">
                  <p data-v-0edfa70c="">PostgreSQL</p>
                </li>
                <li className="pr-4" data-v-0edfa70c="">
                  <p data-v-0edfa70c="">Rawg.io API</p>
                </li>
              </ul>
            </div>
            <div className="flex relative bottom-[-20px]" data-v-0edfa70c="">
              <a
                className="flex justify-between items-center dark:text-white pr-4 hover:text-pink-600 dark:hover:text-pink-600 duration-300"
                href="https://github.com/Mario1927/Videogames"
                target="_blank"
                rel="noreferrer"
                data-v-0edfa70c=""
              >
                <svg
                  className="svg-inline--fa fa-github fa-lg"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="github"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                  data-v-0edfa70c=""
                >
                  <path
                    className=""
                    fill="currentColor"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  ></path>
                </svg>
              </a>
              <a
                className="flex justify-between items-center dark:text-white pr-4 hover:text-pink-600 dark:hover:text-pink-600 duration-300"
                href="https://videogames-gold.vercel.app/"
                target="_blank"
                rel="noreferrer"
                data-v-0edfa70c=""
              >
                <svg
                  className="svg-inline--fa fa-arrow-up-right-from-square fa-lg"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-up-right-from-square"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  data-v-0edfa70c=""
                >
                  <path
                    className=""
                    fill="currentColor"
                    d="M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <a
            className="hidden md:flex w-[70%] h-[250px] my-auto z-0 overflow-hidden"
            href="https://videogames-gold.vercel.app/"
            target="_blank"
            rel="noreferrer"
            data-v-0edfa70c=""
          >
            <div
              className="bg md:flex w-full h-full my-auto z-0 bg-cover hover:bg-transparent duration-300"
              data-v-0edfa70c=""
              // style='background-image: url("/assets/Videogames.869ec421.png");'
            ></div>
          </a>
        </div>
        <div
          className="flex bg-slate-300 dark:bg-[#112240] bg-cover px-8 py-12 md:bg-transparent dark:md:bg-transparent md:p-0 mb-12 aos-init aos-animate"
          data-aos="fade-in"
          data-v-0edfa70c=""
        >
          <a
            className="hidden md:flex w-[70%] h-[250px] my-auto z-0 overflow-hidden"
            href="https://eztinerary.vercel.app/"
            target="_blank"
            rel="noreferrer"
            data-v-0edfa70c=""
          >
            <div
              className="bg md:flex w-full h-full my-auto z-0 bg-cover hover:bg-transparent duration-300"
              data-v-0edfa70c=""
              // style='background-image: url("/assets/Eztinerary.2b6db03d.png");'
            ></div>
          </a>
          <div className="flex flex-col md:w-[60%] py-4" data-v-0edfa70c="">
            <div
              className="flex flex-col relative top-[-35px] text-right"
              data-v-0edfa70c=""
            >
              <span
                className="text-[#f9b82c] dark:text-[#64ffda] text-sm font-medium"
                data-v-0edfa70c=""
              >
                Proyecto Destacado
              </span>
              <h3 className=" text-2xl font-semibold" data-v-0edfa70c="">
                Eztinerary - App de Viajes
              </h3>
            </div>
            <div
              className="md:p-4 md:w-[130%] relative md:right-[30%]  rounded md:bg-slate-300 dark:md:bg-[#112240] z-10"
              data-v-0edfa70c=""
            >
              <p
                className=" text-sm text-justify font-medium dark:font-normal"
                data-v-0edfa70c=""
              >
                Una SPA para buscar y planificar actividades turísticas. En este
                proyecto de grupo se implementó la metodologia SCRUM, mis tareas
                principales se centraron en el back-end, usando Node,
                Typescript, Mongoose, autenticación y autorización de rutas
                mediante Passport, JWT, Cookies, BCrypt, entre otras
                tecnologías.
              </p>
            </div>
            <div
              className="flex md:w-[130%] relative md:right-[30%] z-10 pt-4"
              data-v-0edfa70c=""
            >
              <ul
                className="flex flex-wrap md:justify-end text-sm font-medium text-[#4a6087] dark:text-slate-400"
                data-v-0edfa70c=""
                //   style="-webkit-text-stroke: 0.1px black;"
              >
                <li className="md:pl- pr-4 md:pr-0" data-v-0edfa70c="">
                  <p data-v-0edfa70c="">React</p>
                </li>
                <li className="md:pl-4 pr-4 md:pr-0" data-v-0edfa70c="">
                  <p data-v-0edfa70c="">Redux</p>
                </li>
                <li className="md:pl-4 pr-4 md:pr-0" data-v-0edfa70c="">
                  <p data-v-0edfa70c="">Express</p>
                </li>
                <li className="md:pl-4 pr-4 md:pr-0" data-v-0edfa70c="">
                  <p data-v-0edfa70c="">Typescript</p>
                </li>
                <li className="md:pl-4 pr-4 md:pr-0" data-v-0edfa70c="">
                  <p data-v-0edfa70c="">Moongose</p>
                </li>
                <li className="md:pl-4 pr-4 md:pr-0" data-v-0edfa70c="">
                  <p data-v-0edfa70c="">Passport</p>
                </li>
                <li className="md:pl-4 pr-4 md:pr-0" data-v-0edfa70c="">
                  <p data-v-0edfa70c="">JWT</p>
                </li>
                <li className="md:pl-4 pr-4 md:pr-0" data-v-0edfa70c="">
                  <p data-v-0edfa70c="">BCrypt</p>
                </li>
                <li className="md:pl-4 pr-4 md:pr-0" data-v-0edfa70c="">
                  <p data-v-0edfa70c="">SCRUM</p>
                </li>
              </ul>
            </div>
            <div
              className="flex relative bottom-[-20px] justify-end"
              data-v-0edfa70c=""
            >
              <a
                className="flex justify-between items-center dark:text-white pl-4 hover:text-pink-600 dark:hover:text-pink-600 duration-300"
                href="https://github.com/henry-equipo-ocho/proyecto-grupal"
                target="_blank"
                rel="noreferrer"
                data-v-0edfa70c=""
              >
                <svg
                  className="svg-inline--fa fa-github fa-lg"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="github"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                  data-v-0edfa70c=""
                >
                  <path
                    className=""
                    fill="currentColor"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  ></path>
                </svg>
              </a>
              <a
                className="flex justify-between items-center dark:text-white pl-4 hover:text-pink-600 dark:hover:text-pink-600 duration-300"
                href="https://eztinerary.vercel.app/"
                target="_blank"
                rel="noreferrer"
                data-v-0edfa70c=""
              >
                <svg
                  className="svg-inline--fa fa-arrow-up-right-from-square fa-lg"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-up-right-from-square"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  data-v-0edfa70c=""
                >
                  <path
                    className=""
                    fill="currentColor"
                    d="M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div
          className="flex bg-slate-300 dark:bg-[#112240] bg-cover px-8 py-12 md:bg-transparent dark:md:bg-transparent md:p-0 mb-12 aos-init aos-animate"
          data-aos="fade-in"
          data-v-0edfa70c=""
        >
          <div className="flex flex-col md:w-[60%] py-4" data-v-0edfa70c="">
            <div
              className="flex flex-col relative top-[-35px]"
              data-v-0edfa70c=""
            >
              <span
                className="text-[#f9b82c] dark:text-[#64ffda] text-sm font-medium"
                data-v-0edfa70c=""
              >
                Proyecto Destacado
              </span>
              <h3 className=" text-2xl font-semibold" data-v-0edfa70c="">
                Aplicación del Tiempo
              </h3>
            </div>
            <div
              className="md:p-4 md:w-[130%] rounded md:bg-slate-300 dark:md:bg-[#112240] z-10"
              data-v-0edfa70c=""
            >
              <p
                className=" text-sm text-justify font-medium dark:font-normal"
                data-v-0edfa70c=""
              >
                Una aplicación de React/Redux para conocer el pronóstico del
                tiempo, la cuál cuenta con las siguientes funcionalidades:
                geolocalización mediante IP o GPS, búsqueda de multiples
                localizaciones, pronóstico semanal, preferencias de usuario,
                alertas customizadas y diseño responsivo.
              </p>
            </div>
            <div className="flex md:w-[130%] z-10 pt-4" data-v-0edfa70c="">
              <ul
                className="flex flex-wrap text-sm font-medium text-[#] text-[#4a6087] dark:text-slate-400"
                data-v-0edfa70c=""
                //   style="-webkit-text-stroke: 0.1px black;"
              >
                <li className="pr-4" data-v-0edfa70c="">
                  <p data-v-0edfa70c="">React</p>
                </li>
                <li className="pr-4" data-v-0edfa70c="">
                  <p data-v-0edfa70c="">Redux</p>
                </li>
                <li className="pr-4" data-v-0edfa70c="">
                  <p data-v-0edfa70c="">OpenWeather API</p>
                </li>
                <li className="pr-4" data-v-0edfa70c="">
                  <p data-v-0edfa70c="">Geoapify API</p>
                </li>
                <li className="pr-4" data-v-0edfa70c="">
                  <p data-v-0edfa70c="">IPGeolocation API</p>
                </li>
              </ul>
            </div>
            <div className="flex relative bottom-[-20px]" data-v-0edfa70c="">
              <a
                className="flex justify-between items-center dark:text-white pr-4 hover:text-pink-600 dark:hover:text-pink-600 duration-300"
                href="https://github.com/Mario1927/weather"
                target="_blank"
                rel="noreferrer"
                data-v-0edfa70c=""
              >
                <svg
                  className="svg-inline--fa fa-github fa-lg"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="github"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                  data-v-0edfa70c=""
                >
                  <path
                    className=""
                    fill="currentColor"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  ></path>
                </svg>
              </a>
              <a
                className="flex justify-between items-center dark:text-white pr-4 hover:text-pink-600 dark:hover:text-pink-600 duration-300"
                href="https://weather-mario1927.vercel.app/"
                target="_blank"
                rel="noreferrer"
                data-v-0edfa70c=""
              >
                <svg
                  className="svg-inline--fa fa-arrow-up-right-from-square fa-lg"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-up-right-from-square"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  data-v-0edfa70c=""
                >
                  <path
                    className=""
                    fill="currentColor"
                    d="M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <a
            className="hidden md:flex w-[70%] h-[250px] my-auto z-0 overflow-hidden"
            href="https://weather-mario1927.vercel.app/"
            target="_blank"
            rel="noreferrer"
            data-v-0edfa70c=""
          >
            <div
              className="bg w-full h-full bg-cover hover:bg-transparent duration-300"
              data-v-0edfa70c=""
              // style='background-image: url("/assets/Weather-GIF.93823c91.gif");'
            ></div>
          </a>
        </div>
      </div>
    </div>
  );
}
