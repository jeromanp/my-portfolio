import { useEffect, useRef } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Head from "next/head";

export default function Layout({ children }) {
  const loader = useRef(null);
  const path = useRef(null);
  const initialCurve = 200;
  const duration = 600;
  let start;

  useEffect(() => {
    setPath(initialCurve);
    setTimeout(() => {
      requestAnimationFrame(animate);
    }, 1000);
  }, []);

  const animate = (timestamp) => {
    if (start === undefined) {
      start = timestamp;
    }
    const elapsed = timestamp - start;
    const newCurve = easeOutQuad(elapsed, initialCurve, -200, duration);
    setPath(newCurve);
    loader.current.style.top =
      easeOutQuad(elapsed, 0, -loaderHeight(), duration) + "px";
    if (elapsed < duration) {
      requestAnimationFrame(animate);
    }
  };

  const easeOutQuad = (time, start, end, duration) => {
    return -end * (time /= duration) * (time - 2) + start;
  };

  const loaderHeight = () => {
    const loaderBounds = loader.current.getBoundingClientRect();
    return loaderBounds.height;
  };

  const setPath = (curve) => {
    const width = window.innerWidth;
    const height = loaderHeight();
    path.current.setAttributeNS(
      null,
      "d",
      `M0 0
      L${width} 0
      L${width} ${height}
      Q${width / 20} ${height - curve} 0 ${height}
      L0 0`
    );
  };
  return (
    <>
      <Head>
        {/* Metadatos globales */}
        <title>
          Jose Eduardo Roman | 💻 Desarrollador Web Fullstack | 📡 Ingeniero en
          Telecomunicaciones
        </title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta
          name="description"
          content="Hola soy Jose Eduardo Roman 😃, Desarrollador Web Fullstack con experiencia en Redes y Telecomunicaciones. Conoce mi sitio web y visualiza los proyectos con lo que he aprendido grandes cosas dentro del mundo de TI."
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

        {/* Schema Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "WebPage",
              "name": "Jose Eduardo Roman",
              "description": "Hola soy Jose Eduardo Roman, Desarrollador Fullstack con background en Redes y Telecomunicaciones. Conoce mi sitio web y visualiza los proyectos con lo que he aprendido grandes cosas dentro del mundo de TI.",
              "url": "https://www.jeromanp.website",
              "author": {
                "@type": "Person",
                "name": "Jose Eduardo Roman Piña"
              },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.jeromanp.website"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Sobre mí",
                    "item": "https://www.jeromanp.website/sobre-mi"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Proyectos",
                    "item": "https://www.jeromanp.website/proyectos"
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Contacto",
                    "item": "https://www.jeromanp.website/contacto"
                  }
                ]
              }
            }
          `}
        </script>

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
        <meta name="language" content="Spanish" />
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

      <div
        ref={loader}
        className="h-[calc(100vh+200px)] w-full z-50 fixed top-0 left-0 flex items-center justify-center bg-custom-oro"
      >
        <img
          ref={path}
          src="/imagen/logon.png"
          alt="Logo"
          className="w-48 h-48"
        />
      </div>
      <NavBar />
      <main className="w-full">{children}</main>
      <Footer />
    </>
  );
}
