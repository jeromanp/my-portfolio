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
    deploy:"/working",    
  },
  {
    title:"Proyecto Individual: Countries",
    description:"El proyecto consistió en desarrollar una aplicación en React/Redux que permitió mostrar información de distintos países utilizando la API externa restcountries. Los requerimientos mínimos incluyeron: \n\nFRONTEND \n\n° Página inicial con una imagen de fondo y un botón para ingresar al home.\n° Ruta principal que incluyó un campo de búsqueda para encontrar países por nombre, una lista de países con su bandera, nombre y continente, opciones de filtrado y ordenamiento, y paginado.\n° Ruta de detalle de país que muestrará información detallada de un país, incluyendo su bandera, nombre, código, continente, capital, subregión, área, población y actividades turísticas asociadas.\n° Ruta de creación de actividad turística que incluía un formulario controlado con campos como nombre, dificultad, duración y temporada, y permite seleccionar/agregar varios países en simultáneo.\n° Validación del formulario de creación con JavaScript.\n° Uso de una base de datos con las entidades de País y ° Actividad Turística, estableciendo una relación de muchos a muchos entre ellas.\n\n BACKEND\n\n Se desarrolló un servidor en Node/Express con las siguientes rutas:\n° GET /countries: Para traer todos los países desde restcountries, los guarda en la base de datos y los devuelve en un formato adecuado para la ruta principal.\n° GET /countries/{idPais}: Obtiene el detalle de un país en particular, incluyendo los datos solicitados en la ruta de detalle de país y las actividades turísticas asociadas.\n° GET /countries?name=: Obtiene los países que coincidan con el nombre pasado como query parameter.\n° POST /activities: Recibe los datos del formulario de creación de actividad turística y crea una nueva actividad relacionada con los países correspondientes en la base de datos.",
    video:"/video/PI-Countries.mp4",
    tecnologies:"Javascript, React, Redux, Node/Express, Sequelize/PostgreSQL, CSS Modules",
    repository:"https://github.com/jeromanp/pi-countries",
    deploy:"/working",
  },
  {
    title:"IziQ Study",
    description:"Este proyecto se creó de forma grupal en un lapso de 3 semanas para cubrir el módulo II de Labs del bootcamp de Henry, se empleó la metodología agile SCRUM, este grupo se conformó por 7 integrantes que a través de una idea, nos dimos a la tarea de plasmarlo en código.\nLa idea original se basaba en una página web donde los usuarios registrados pudieran agregar tarjetas de estudio y a través de ellas poder memorizar/recordar algun tema en específico. Las tarjetas de estudio en la actualidad son muy funcionales cuando de aprender se trata,ya que se podía relacionar a través de imágenes con palabras y asi agilizar el aprendizaje.\nUn usuario registrado podia tener acceso a las tarjetas de estudio de los demas usuarios. Así mismo la página contenía dos juegos didácticos que se formaban conforme a las cartas del propio tema: Un multiple choise y un memorama, con los cuales el usuario ponia a prueba lo aprendido.\n**NOTA: Este proyecto se desaprobó debido a faltantes en los requisitos mínimos para aprobar dicho Lab**",
    video:"",
    tecnologies:"SCRUM, Gitflow, Trello, Javacsript, React, Next JS, Supabase, Chakra CSS",
    repository:"https://github.com/Armax7/IziQ-Study/tree/development",
    deploy:"/working"
  },
  {
    title:"Hostería Hueney Ruca",
    description:"Al conformar un nuevo equipo para recursar el Lab de Proyecto Grupal del bootcamp, recibimos la invitación por parte del staff para participar en un proyecto que resolvería una problemática real, es decir de un cliente real.\nHueney Ruca es una hostería ubicada en Villa Arcadía Provincia de Buenos Aires en Argentina y cuenta con 11 cabañas de diferentes capacidades.\nLa empresa quería detonar su negocio llegando a lugares más alejados de la zona y además buscaba una pagina que fuera segura, de fácil navegación, con la que pudiera administrar las actividades de la hostería y en la cual los pagos de los clientes se hicieran de forma segura.\nEs por ello que tomamos el reto de crear esta página web con todos los requerimentos agregando además aquellos que solicitaba la Academía para aprobar esta instancia.Como recorrido la pagína ofrece un recorrido e información básica acerca de la hostería, como secciones de :\n*Servicios,\n* Comentarios de clientes hospedados,\n* Cabañas del sitio,\b* Nosotros,\n* FAQ, \n* Formulario de Contacto,\n* Actividades de la zona.\nSe agrego un formulario de registro con email, Google o Github en donde el usuario contenia de una pagina para editar su perfil, y una donde viera sus reservaciones. \nEl orden de pago consistía en: \n1.ingresar dos fechas posterior al día actual y a partir de ello dependiendo del cupo se mostraba la opcion de Resevar o de No disponible. \n2.Si los días de la reserva estaban disponibles se redirigía a un CheckForm de Stripe en donde se realizaba el pago. \n3. Una vez finalizado el pago se ofrecía una vista para enviar los datos de reserva a un email, terminando así la reserva.\nSi se redirigía a la seccion Reservas de su perfil se encontraba la reservacion hecha por el usuario.",
    video:"",
    tecnologies:"SRUM, Gitflow, Trello, Stripe, Javascript, React, Next JS, Supabase, Tailwind CSS",
    repository:"https://github.com/Mark-kus/hueney-ruca",
    deploy:"https://hueney-ruca-git-develop-mark-kus.vercel.app/"
  },
];

export const contactoInfo = {
  parrafo_1:"Si tienes alguna pregunta, propuesta de trabajo o simplemente quieres saludar, no dudes en contactarme. Estaré encantado de escucharte y responder lo antes posible."

}


