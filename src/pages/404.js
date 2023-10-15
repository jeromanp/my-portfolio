import Link from "next/link";

export default function custom404() {
  return (
    <section className="bg-white h-full w-full page_404 items-center">
      <div className="container mx-auto">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="nothing text-center text-custom-azul text-4xl md:text-5xl lg:text-6xl pt-10"><b>Error 404!!</b></h1>
              </div>

              <div className="indie contant_box_404 text-2xl">
                <h3 className="h2 text-custom-azul ">
                  Parece que estás perdido
                </h3>

                <p className="text-custom-azul">
                  ¡La página que buscas no existe!
                </p>

                <Link href="/">
                  <button className="link_404">Ir al Inicio</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
