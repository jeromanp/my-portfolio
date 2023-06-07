export const infoPersonal = {
  name: "Jose Eduardo Roman",
  professionOne: "Desarrollador Fullstack",
  professionTwo: "Ingeniero en Telecomunicaciones, Sistemas y Electrónica",
};

export const aboutMe = {
  intro:
    "Tengo un gusto por el conocimiento y por aprender cosas nuevas, me gusta leer artículos, noticias o publicaciones sobre temas que me interesan, tengo un gusto especial por la tecnología, astronomía, paleontología,historia, geografía y bilogía, lo que me ha llevado a ser una persona con conocimiento en diferentes áreas.",
  estudio:
    "Estudié Ingeniería en Telecomunicaciones, Sistemas y Electrónica en la Universidad Nacional Autónoma de México, con especialidad en Comunicaciones. Cuento con dos diplomados en Redes e Interconectividad con tecnologías de Cisco (CCNA y CCNP).",
  experiencia:
    "Trabaje cerca de 2 años en una empresa proveedora de servicio de internet a nivel nacional, en donde me encargaba de la operación, instalación, revisión y mantenimiento de los equipos que proporcionaban el servicio de Video, Voz y Datos a sus suscriptores",
};

export const pHabilidades = {
  uno: "Dentro del bootcamp de Henry, que consta de mas de 700 horas teórico-prácticas, he desarrollado aplicaciones usando estas tecnologías:",
};

export const habilities = [
  {
    skill: "HTML5",
    image: "/svg-habilities/html-5.svg",
  },
  {
    skill: "CSS3",
    image: "/svg-habilities/css-3.svg",
  },
  {
    skill: "Javascript",
    image: "/svg-habilities/javascript.svg",
  },
  {
    skill: "React JS",
    image: "/svg-habilities/react.svg",
  },
  {
    skill: "Redux",
    image: "/svg-habilities/redux.svg",
  },
  {
    skill: "Express",
    image: "/svg-habilities/express.svg",
  },
  {
    skill: "Node JS",
    image: "/svg-habilities/node-js.svg",
  },
  {
    skill: "Sequelize",
    image: "/svg-habilities/sequelize.svg",
  },
  {
    skill: "PostgreSQL",
    image: "/svg-habilities/postgresql.svg",
  },
  {
    skill: "Next Js",
    image: "/svg-habilities/next-js.svg",
  },
  {
    skill: "Supabase",
    image: "/svg-habilities/supabase.svg",
  },
];

export const proyectos = {
  parrafo_1: "Durante mi corta etapa como desarrollador fullstack, he realizado algunos proyectos como parte de la preparación que seguí dentro del bootcamp.",
  parrafo_2: "Es por ello que a continuación se describen aquellos proyectos que tuvieron un impacto importante en mi carrera y que me ayudaron a mejorar y poder perfeccionar parte de las cosas que iba aprendiendo",
};

export const misProyectos = [
  {
    title: "Rick and Morty",
    description: "El proyecto fue realizado durante los módulos 2 y 3 del bootcamp de Henry (ARG) y se enfocó en el desarrollo tanto del frontend como del backend. En el módulo 2, se adquirieron conocimientos en React y Redux para manejar estados globales, renderizar información de interés y aplicar estilos utilizando CSS. Se utilizó la API de Rick and Morty para obtener datos y mostrarlos en la aplicación.\n En el módulo 3, se creó un servidor utilizando Express para manejar las solicitudes del frontend. El servidor procesaba las solicitudes y devolvía las respuestas al frontend, permitiendo una mejor organización y prácticas de diseño y operación en la página web. También se implementó un manejo de errores para evitar problemas en la aplicación.\n Actualmente, el proyecto se encuentra en proceso de ser desplegado y se compartirá el enlace una vez esté disponible",
    video:"/video/RyM-JERP-FT-33b.mp4",
    tecnologies:"Javascript, React, Redux, Express",
    repository:"https://github.com/jeromanp/Proyecto-Rick-and-Morty",
    deploy:"En proceso",    
  },
  {
    title:"Proyecto Individual: Countries",
    description:"El proyecto consistió en desarrollar una aplicación en React/Redux que permitió mostrar información de distintos países utilizando la API externa restcountries. Los requerimientos mínimos incluyeron: \n\nFRONTEND \n\n° Página inicial con una imagen de fondo y un botón para ingresar al home.\n° Ruta principal que incluyó un campo de búsqueda para encontrar países por nombre, una lista de países con su bandera, nombre y continente, opciones de filtrado y ordenamiento, y paginado.\n° Ruta de detalle de país que muestrará información detallada de un país, incluyendo su bandera, nombre, código, continente, capital, subregión, área, población y actividades turísticas asociadas.\n° Ruta de creación de actividad turística que incluía un formulario controlado con campos como nombre, dificultad, duración y temporada, y permite seleccionar/agregar varios países en simultáneo.\n° Validación del formulario de creación con JavaScript.\n° Uso de una base de datos con las entidades de País y ° Actividad Turística, estableciendo una relación de muchos a muchos entre ellas.\n\n BACKEND\n\n Se desarrolló un servidor en Node/Express con las siguientes rutas:\n° GET /countries: Para traer todos los países desde restcountries, los guarda en la base de datos y los devuelve en un formato adecuado para la ruta principal.\n° GET /countries/{idPais}: Obtiene el detalle de un país en particular, incluyendo los datos solicitados en la ruta de detalle de país y las actividades turísticas asociadas.\n° GET /countries?name=: Obtiene los países que coincidan con el nombre pasado como query parameter.\n° POST /activities: Recibe los datos del formulario de creación de actividad turística y crea una nueva actividad relacionada con los países correspondientes en la base de datos.",
    video:"/video/PI-Countries.mp4",
    tecnologies:"Javascript, React, Redux, Node/Express, Sequelize/PostgreSQL, CSS Modules",
    repository:"https://github.com/jeromanp/pi-countries",
    deploy:"En proceso",
  }
];


