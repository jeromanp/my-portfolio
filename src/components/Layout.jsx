import Footer from "./Footer";
import NavBar from "./NavBar";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        {/* Metadatos globales */}
        <title>Jose Eduardo Roman 💻📡</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta
          name="description"
          content="Hola soy Jose Eduardo Roman, Desarrollador Web Fullstack con background en Redes y Telecomunicaciones. Ven y conoce mi sitio web. Puedes tener acceso a los proyectos que he realizado en esta nueva etapa profesional en mi vida. "
        ></meta>
        <link rel="icon" href="/imagen/logo.png" />
        <meta name="author" content="Jose Eduardo Roman Piña" />

        {/* Metadatos para redes sociales */}

        {/* FACEBOOK */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.jeromanp.website" />
        <meta property="og:title" content="Jose Eduardo Roman 💻" />
        <meta
          property="og:description"
          content="Hola soy Jose Eduardo Roman, Desarrollador Fullstack con background en Redes y Telecomunicaciones"
        />
        <meta property="og:image" content="/imagen/logo.png" />

        {/* TwITTER */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.jeromanp.website" />
        <meta property="twitter:title" content="Jose Eduardo Roman 💻" />
        <meta
          property="twitter:description"
          content="Hola soy Jose Eduardo Roman, Desarrollador Fullstack con background en Redes y Telecomunicaciones"
        />
        <meta property="twitter:image" content="/imagen/logo.png" />      

        {/* Nueva metaetiqueta para mostrar la ubicación geográfica */}
        <meta name="geo.region" content="MX" />
        <meta
          name="geo.placename"
          content="Ciudad de México, Estado de México, Estado de Hidalgo"
        />
        <meta name="geo.position" content="19.432608;-99.133209" />
        <meta name="ICBM" content="19.432608, -99.133209" />

        {/* <!-- Etiqueta meta para idioma --> */}
        <meta httpEquiv="Content-Language" content="es" />

        {/* <!-- Etiqueta meta para palabras clave específicas de tu portafolio --> */}
        <meta
          name="keywords"
          content="desarrollo web, desarrollador Fullstack, desarrollo de aplicaciones, redes, telecomunicaciones, portafolio, desarrollador fullstack, José Eduardo Román, bootcamp, Henry, desarrollador, web, javascript, react, next, redux, supabase"
        />

        {/* <!-- Etiqueta meta para especificar el idioma y país del contenido --> */}
        <meta name="language" content="Spanish" />
        <meta name="country" content="México" />

        {/* <!-- Etiqueta meta para definir la categoría de tu sitio web --> */}
        <meta name="category" content="Tecnología" />

        {/* <!-- Etiqueta meta para especificar el tipo de contenido --> */}
        <meta name="content-type" content="portfolio website" />

        {/* <!-- Etiqueta meta para indicar la fecha de la última modificación en tu sitio --> */}
        <meta name="last-modified" content="2023-10-15" />

        {/* <!-- Etiqueta meta para definir la audiencia objetivo --> */}
        <meta
          name="audience"
          content="Desarrolladores, Empleadores, Clientes"
        />

        {/* <!-- Etiqueta meta para indicar el tipo de autor --> */}
        <meta name="revisit-after" content="7 days" />

        {/* <!-- Etiqueta meta para especificar la política de reindexación --> */}
        <meta name="robots" content="index, follow" />

        {/* <!-- Etiqueta meta para especificar la relación con tu sitio web --> */}
        <link rel="canonical" href="https://www.jeromanp.website" />

        {/* <!-- Etiqueta meta para definir la licencia de tu contenido --> */}
        <meta name="copyright" content="© 2023 José Eduardo Román Piña" />

        {/* <!-- Etiqueta meta para indicar la duración de la vigencia del contenido --> */}
        <meta name="revised" content="2023-12-11" />

        {/* <!-- Etiqueta meta para especificar los términos y condiciones de uso --> */}
        <meta
          name="terms"
          content="Términos y condiciones de uso de jeromanp.website"
        />

        {/* <!-- Etiqueta meta para proporcionar información de contacto --> */}
        <meta name="contact" content="jeduardo.roman69@gmail.com" />

        {/* <!-- Etiqueta meta para indicar la edad mínima recomendada para el contenido --> */}
        <meta name="rating" content="General" />

        {/* <!-- Etiqueta meta para indicar si el contenido es apto para todo público --> */}
        <meta name="rating" content="RTA-1" />

        {/* <!-- Etiqueta meta para especificar los idiomas en los que se encuentra disponible tu sitio --> */}
        <meta name="language" content="es" />

        {/* <!-- Etiqueta meta para especificar el tipo de contenido multimedia en tu sitio --> */}
        <meta name="medium" content="website" />

        {/* <!-- Etiqueta meta para indicar si tu sitio está en construcción o en mantenimiento --> */}
        <meta name="under-construction" content="false" />

        {/* <!-- Etiqueta meta para especificar el tipo de negocio o industria --> */}
        <meta
          name="business"
          content="Desarrollo de aplicaciones y páginas web"
        />

        {/* <!-- Etiqueta meta para definir el propósito o tema principal del sitio --> */}
        <meta
          name="subject"
          content="Portafolio de desarrollo web y telecomunicaciones"
        />

        {/* Animate.css */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
          as="style"
        />
        <link
          rel="preload"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          as="style"
        />
      </Head>

      <NavBar />
      <main className="w-full">{children}</main>
      <Footer />
    </>
  );
}
