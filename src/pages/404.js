import Link from "next/link";

export default function custom404() {
  return (
    <section className="page_404 mx-auto items-center">
      <div className="container mx-auto">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center text-custom-azul">404</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h2 text-custom-azul">Parece que estás perdido</h3>

                <p className="text-custom-azul">¡La página que buscas no existe!</p>

                <Link href="/">
                  <button className="link_404">
                    Ir al Inicio
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
