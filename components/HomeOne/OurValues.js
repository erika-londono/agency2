import React from "react";
import Link from "next/link";

const OurValues = () => {
  return (
    <>
      <div className="data-service-section pb-100">
        <div className="container">
          <div className="section-title">
            <h2>Nuestros valores</h2>
          </div>

          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="data-services-item">
                <div className="single-data-service-box">
                  <div className="icon">
                    <i className="flaticon-big-data"></i>
                  </div>
                  <h3>
                    <a>
                      Ayuda mutua
                    </a>
                      <p>
                        Fomentamos la reciprocidad y trabajamos en equipo para
                        alcanzar objetivos compartidos.
                      </p>
                      {/* <i className="flaticon-right"></i> */}
                    {/* </Link> */}
                  </h3>
                </div>

                <div className="single-data-service-box">
                  <div className="icon">
                    <i className="flaticon-science"></i>
                  </div>
                  <h3>
                    {/* <Link href="/service-details"> */}
                    <a>
                      Solidaridad
                    </a>
                      <p>
                        Brindamos apoyo incondicional, especialmente en
                        situaciones difíciles, demostrando empatía y compromiso
                        con nuestros colaboradores.
                      </p>
                      {/* <i className="flaticon-right"></i> */}
                    {/* </Link> */}
                  </h3>
                </div>

                <div className="single-data-service-box">
                  <div className="icon">
                    <i className="flaticon-document"></i>
                  </div>
                  <h3>
                    {/* <Link href="/service-details"> */}
                    <a>
                      Responsabilidad
                    </a>
                      <p>
                        Cumplimos con nuestros deberes de manera oportuna y
                        eficiente, asumiendo la responsabilidad de nuestras
                        acciones y decisiones.
                      </p>
                      {/* <i className="flaticon-right"></i> */}
                    {/* </Link> */}
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="data-service-image">
                <img src="/images/data-service.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="data-services-item">
                <div className="single-data-service-box">
                  <div className="icon">
                    <i className="flaticon-data-analytics"></i>
                  </div>
                  <h3>
                    {/* <Link href="/service-details"> */}
                    <a>
                      Equidad
                    </a>
                      <p>
                        Tratamos a todos con imparcialidad, reconociendo y
                        valorando los méritos individuales de cada persona en
                        nuestro entorno.
                      </p>
                      {/* <i className="flaticon-right"></i> */}
                    {/* </Link> */}
                  </h3>
                </div>

                <div className="single-data-service-box">
                  <div className="icon">
                    <i className="flaticon-chart"></i>
                  </div>
                  <h3>
                    {/* <Link href="/service-details"> */}
                    <a>
                      Democracia
                    </a>
                      <p>
                        Fomentamos un trato justo y participativo, donde las
                        opiniones de todos son escuchadas y respetadas en
                        nuestra comunidad.
                      </p>
                      {/* <i className="flaticon-right"></i> */}
                    {/* </Link> */}
                  </h3>
                </div>

                <div className="single-data-service-box">
                  <div className="icon">
                    <i className="flaticon-right"></i>
                  </div>
                  <h3>
                    {/* <Link href="/service-details"> */}
                    <a>
                      Igualdad
                    </a>
                      <p>
                        Promovemos un ambiente inclusivo donde cada individuo
                        es valorado por sus habilidades y contribuciones.
                      </p>
                      {/* <i className="flaticon-right"></i> */}
                    {/* </Link> */}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurValues;
