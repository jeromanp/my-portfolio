export const infoPersonal = {
  name: "Jose Eduardo Roman",
  professionOne: "Desarrollador Fullstack",
  professionTwo: "Ingeniero en Telecomunicaciones, Sistemas y Electrónica",
};

export const aboutMe = {
  intro:
    "Me apasiona el conocimiento y tengo un gusto por aprender cosas nuevas. Disfruto leyendo artículos, noticias y publicaciones sobre una variedad de temas, especialmente aquellos relacionados con la tecnología, astronomía, paleontología, historia, geografía y biología. Esta curiosidad me ha permitido adquirir conocimientos en diversas áreas y me considero una persona multidisciplinaria.",
  estudio:
    "\nRealicé mis estudios en la Universidad Nacional Autónoma de México, donde obtuve el título de Ingeniería en Telecomunicaciones, Sistemas y Electrónica con especialidad en Comunicaciones. Además, he completado dos diplomados en Redes e Interconectividad con tecnologías de Cisco (CCNA y CCNP), ampliando mis conocimientos en el campo de las comunicaciones.",
  experiencia:
    "\nHe acumulado una experiencia laboral de casi 2 años en una empresa proveedora de servicios de internet a nivel nacional. Durante mi tiempo allí, desempeñé un papel fundamental en la operación, instalación, revisión y mantenimiento de los equipos que brindaban servicios de video, voz y datos a los suscriptores. Esta experiencia me permitió desarrollar habilidades técnicas sólidas y aprender sobre la importancia de la calidad y el servicio al cliente.",
  reciente:
    "\nEn septiembre de 2022, tomé la decisión de sumergirme en el mundo de la programación web, a pesar de que durante mi época estudiantil había evitado esta área a toda costa debido a la creencia de que no era lo adecuado para mí. Sin embargo, decidí superar mis barreras mentales y, con la determinación de cumplir mi sueño, incluso renuncié a mi empleo anterior. Me uní al Bootcamp de Henry en Argentina, donde pasé siete meses dedicado por completo a aprender sobre desarrollo web. Durante este tiempo, no solo adquirí habilidades fundamentales y de vanguardia en programación, sino que también tuve la oportunidad de conocer a personas increíbles. Esta comunidad de estudiantes y los profesores me apoyaron en mi crecimiento tanto profesional como personal. Después de más de 700 horas de aprendizaje teórico y práctico, finalmente me gradué a finales de mayo de 2023. Ahora, me encuentro en busca de oportunidades laborales que me permitan aplicar mis conocimientos y continuar aprendiendo. Estoy ansioso por encontrar un lugar en el mundo de la tecnología de la información donde pueda contribuir y alcanzar mis objetivos profesionales.",
};

export const pHabilidades = {
  uno: "En el bootcamp de Henry, tuve la oportunidad de desarrollar aplicaciones utilizando una amplia gama de tecnologías, a continuación se mencionan las más importantes:",
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
  parrafo_1:
    "Durante el programa, he adquirido conocimientos y experiencia práctica en el desarrollo web utilizando HTML, CSS y JavaScript, así como en el uso de frameworks y bibliotecas populares como React, Next y Redux. Además, he trabajado con bases de datos relacionales utilizando SQL y he adquirido experiencia en el diseño y construcción de API RESTful utilizando Node.js y Express. También he explorado el mundo del desarrollo full-stack, creando aplicaciones completas que integran tanto el frontend como el backend.\n\n Durante el bootcamp, hemos abordado temas fundamentales como control de versiones con Git, metodologías ágiles de desarrollo de software, pruebas unitarias y funcionales, y despliegue de aplicaciones en entornos de producción.",
  parrafo_2:
    "\nEs por ello que a continuación se describen aquellos proyectos que tuvieron un impacto importante en mi carrera y que me ayudaron a mejorar y perfeccionar parte de las cosas que iba aprendiendo.",
};

export const misProyectos = [
  {
    title: "Rick and Morty",
    description:
      "Durante los módulos 2 y 3 del bootcamp de Henry (ARG), tuve la oportunidad de trabajar en un emocionante proyecto que se centró en el desarrollo completo tanto del frontend como del backend.\n\n En el módulo 2, adquirí conocimientos sólidos en React y Redux, lo que me permitió manejar estados globales de manera eficiente, renderizar información relevante en la aplicación y aplicar estilos utilizando CSS. Utilizamos la API de Rick and Morty para obtener datos y mostrarlos de forma dinámica en nuestra aplicación.\n\n En el módulo 3, creamos un servidor utilizando Express para manejar las solicitudes provenientes del frontend. Este servidor se encargaba de procesar las solicitudes y enviar las respuestas correspondientes al frontend, lo que nos permitió organizar mejor nuestra aplicación y aplicar prácticas sólidas de diseño y operación en la página web. También implementamos un manejo de errores eficiente para garantizar un funcionamiento sin problemas.\n\n  Me complace compartir que el proyecto ha sido implementado y se encuentra disponible en un entorno de producción. Para acceder al despliegue, se requiere utilizar las siguientes credenciales:\n\nUsuario: jeroman@gmail.com\n Contraseña: 1password\n\n Estoy realmente emocionado de haber tenido esta experiencia de desarrollo práctico y estoy deseando seguir aprendiendo y creciendo como desarrollador.",
    video: "/video/RyM-JERP-FT-33b.mp4",
    tecnologies: "Javascript, CSS Modules, React JS, Redux, Express JS.",
    production:
      "Control de versiones: GitHub, BackEnd: Render, FrontEnd: Vercel.",
    repository: "https://github.com/jeromanp/Proyecto-Rick-and-Morty",
    deploy: "https://rick-and-morty-jeromanp.vercel.app/",
  },
  {
    title: "Proyecto Individual: Countries",
    description:
      "El proyecto en el que trabajé consistió en el desarrollo de una aplicación utilizando React/Redux que permitía mostrar información de distintos países utilizando la API externa restcountries. Los requerimientos mínimos del proyecto incluyeron: \n\nFRONTEND \n\n° Página inicial con una imagen de fondo y un botón para acceder al home.\n° Ruta principal que incluyó un campo de búsqueda para encontrar países por nombre, una lista de países con su bandera, nombre y continente, opciones de filtrado y ordenamiento, y paginación.\n° Ruta de detalle de país que mostraba información detallada de un país, incluyendo su bandera, nombre, código, continente, capital, subregión, área, población y actividades turísticas asociadas.\n° Ruta de creación de actividad turística que incluía un formulario controlado con campos como nombre, dificultad, duración y temporada, y permitía seleccionar/agregar varios países simultáneamente.\n° Validación del formulario de creación utilizando JavaScript.\n° Uso de una base de datos con las entidades de País y Actividad Turística, estableciendo una relación de muchos a muchos entre ellas.\n\n BACKEND\n\n Se desarrolló un servidor en Node/Express con las siguientes rutas:\n° GET /countries: Para traer todos los países desde restcountries, los guarda en la base de datos y los devuelve en un formato adecuado para la ruta principal.\n° GET /countries/{idPais}: Obtiene el detalle de un país en particular, incluyendo los datos solicitados en la ruta de detalle de país y las actividades turísticas asociadas.\n° GET /countries?name=: Obtiene los países que coincidan con el nombre pasado como query parameter.\n° POST /activities: Recibe los datos del formulario de creación de actividad turística y crea una nueva actividad relacionada con los países correspondientes en la base de datos.\n\n Este proyecto me brindó la oportunidad de aplicar mis conocimientos en React/Redux, así como en el desarrollo del backend utilizando Node/Express. Fue una experiencia enriquecedora que me permitió trabajar con APIs externas, bases de datos y realizar operaciones CRUD tanto en el frontend como en el backend. Estoy emocionado por seguir creciendo como desarrollador y enfrentar nuevos desafíos.",
    video: "/video/PI-Countries.mp4",
    tecnologies:
      "Javascript, React JS, Redux, Node, Express JS, Sequelize/PostgreSQL, CSS Modules.",
    production: "Control de versiones: GitHub, FrontEnd: Vercel",
    repository: "https://github.com/jeromanp/pi-countries",
    deploy: "https://pi-countries-jeromanp.vercel.app/",
  },
  {
    title: "IziQ Study",
    description:
      "Este proyecto fue desarrollado de forma grupal durante un periodo de 3 semanas para cubrir el módulo II de Labs del bootcamp de Henry. Empleamos la metodología ágil SCRUM y nuestro equipo estaba compuesto por 7 integrantes. A través de una idea inicial, nos propusimos plasmarla en código y llevarla a la realidad. \n\n     La idea original del proyecto era crear una página web donde los usuarios registrados pudieran agregar tarjetas de estudio y utilizarlas para memorizar o recordar temas específicos. Las tarjetas de estudio son herramientas funcionales y eficientes para el aprendizaje, ya que permiten relacionar imágenes con palabras, agilizando el proceso de aprendizaje.\n\n En nuestro proyecto, los usuarios registrados tenían acceso a las tarjetas de estudio de otros usuarios. Además, la página web incluía dos juegos didácticos que se generaban a partir de las propias tarjetas de estudio: un juego de selección múltiple y un memorama. Estos juegos permitían a los usuarios poner a prueba sus conocimientos adquiridos.\n\n Lamentablemente, este proyecto no logró cumplir con los requisitos mínimos para ser aprobado en el Lab correspondiente. A pesar de ello, fue una experiencia valiosa en la que pudimos aplicar nuestros conocimientos y trabajar en equipo utilizando una metodología ágil. Aprendimos lecciones importantes sobre la planificación, desarrollo y entrega de un proyecto en un plazo limitado. Estamos comprometidos a seguir mejorando y aprendiendo de nuestros errores para futuros proyectos.",
    video: "",
    image: "/imagen/IziQ.PNG",
    tecnologies: "Javacsript, React, Next JS, Supabase, Chakra CSS.",
    production: "Control de versiones: GitHub.",
    repository: "https://github.com/Armax7/IziQ-Study/tree/development",
    deploy: "/working",
  },
  {
    title: "Hostería Hueney Ruca",
    description:
      "Al formar un nuevo equipo para repetir el Lab de Proyecto Grupal del bootcamp, recibimos una invitación por parte del personal académico para participar en un proyecto que abordaría una problemática real, es decir, un cliente real.\n\n El cliente en cuestión era Hueney Ruca, una hostería ubicada en Villa Arcadía, Provincia de Buenos Aires, Argentina. La hostería contaba con 11 cabañas de diferentes capacidades. El objetivo del proyecto era ayudar a la empresa a expandir su negocio y llegar a lugares más alejados de la zona. Además, buscaban una página web segura, de fácil navegación y que les permitiera administrar las actividades de la hostería, así como realizar pagos de los clientes de manera segura.\n\n Aceptamos el desafío de crear esta página web cumpliendo con todos los requisitos solicitados por la academia para aprobar esta instancia. La página web ofrecía un recorrido e información básica sobre la hostería, con secciones como:\n\n* Servicios,\n* Comentarios de clientes hospedados,\n* Cabañas del sitio,\n* Nosotros,\n* FAQ, \n* Formulario de Contacto,\n* Actividades de la zona.\n\nAdemás, se implementó un formulario de registro que permitía a los usuarios registrarse utilizando su correo electrónico, Google o Github. Una vez registrados, los usuarios tenían acceso a una página donde podían editar su perfil y ver sus reservaciones.\n\nEl proceso de reserva se llevaba a cabo de la siguiente manera:\n\n1. El usuario ingresaba dos fechas posteriores al día actual y, en función de la disponibilidad, se mostraba la opción de reservar o no disponible. \n2. Si los días de la reserva estaban disponibles, se redirigía al usuario a un formulario de pago seguro utilizando Stripe. \n3. Una vez completado el pago, se ofrecía una vista para enviar los datos de la reserva a través de correo electrónico, finalizando así el proceso de reserva.\n\n En la sección de reservas del perfil del usuario, se encontraban todas las reservas realizadas por el usuario.\n\nEste proyecto nos permitió enfrentar el desafío de trabajar con un cliente real y cumplir con los requisitos establecidos. Fue una oportunidad para aplicar nuestros conocimientos y habilidades en el desarrollo web y brindar una solución funcional y segura para el cliente. Aprendimos lecciones valiosas sobre trabajo en equipo, gestión de proyectos y desarrollo de software en un entorno real. Estamos orgullosos del resultado obtenido y esperamos seguir creciendo como profesionales en el campo del desarrollo de software.",
    video: "",
    image: "/imagen/Hueney.PNG",
    tecnologies: "Javascript, React, Next JS, Supabase, Stripe, Tailwind CSS.",
    production:
      "Control de versiones: GitHub , Base de datos: Supabase, BackEnd y FrontEnd: Vercel.",
    repository: "https://github.com/Mark-kus/hueney-ruca",
    deploy: "https://hueney-ruca-git-develop-mark-kus.vercel.app/",
  },
  {
    title: "R&R Perfumes",
    description:
      "Esta página web ha sido cuidadosamente diseñada para un negocio local ubicado en mi área, permitiendo a los posibles clientes explorar su amplia gama de productos de manera conveniente. Nuestra plataforma se presenta como una Landing Page concisa pero altamente efectiva, que ofrece una experiencia única a los visitantes. \n\nEntre las características destacadas se incluyen poderosos filtros que permiten a los usuarios explorar productos por género y buscar específicamente por nombre o marca de perfumes. Estos filtros hacen que la búsqueda de productos sea fácil y precisa.\n\n El sitio web cuenta con una impresionante Hero Imagen en la página de inicio para atraer la atención de los visitantes de inmediato. La sección 'Acerca de' proporciona una visión general del negocio, su historia y su compromiso con la calidad.Además, implementé un formulario de contacto altamente funcional que está conectado directamente con la cuenta de la persona encargada del negocio. Este formulario se ha diseñado para garantizar la precisión y validez de los datos ingresados antes de enviarlos, lo que facilita la comunicación efectiva entre los visitantes y el negocio. \n\nEn resumen, nuestro sitio web ofrece una experiencia completa para los usuarios, proporcionando información esencial y herramientas útiles para explorar y ponerse en contacto con el negocio local. Estamos encantados de brindar esta plataforma a nuestros clientes y esperamos que disfruten de su visita mientras exploran nuestras ofertas de productos de alta calidad.",
    video: "",
    image: "/imagen/RyR.PNG",
    tecnologies: "Javascript, Next JS, React JS, Animate CSS",
    production:
      "Control de versiones: GitHub, BackEnd: NextJS, FrontEnd: Vercel.",
    repository: "https://github.com/jeromanp/ryr",
    deploy: "https://ryrperfumes.vercel.app/",
  },
];

export const contactoInfo = {
  parrafo_1:
    "Si tienes alguna pregunta, propuesta de trabajo o simplemente quieres saludar, no dudes en contactarme. Estaré encantado de escucharte y responder lo antes posible.",
};
