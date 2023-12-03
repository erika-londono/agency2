import React from "react";
import Link from "next/link";

const OurServices = () => {
  return (
    <>
      <div className="services-section pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Nuestro Compromiso</h2>
          </div>

          <div className="row">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-big-data"></i>
                </div>

                <h3>Soluciones a la Medida</h3>
                <p>
                  Diseñamos soluciones logísticas y operativas adaptadas a sus
                  necesidades.
                </p>

                <Link href="/about-us">
                  <a className="service-btn">
                    Leer más
                    <i className="flaticon-right"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-data-analytics"></i>
                </div>

                <h3>Experiencia y Eficiencia</h3>
                <p>
                  Con más de 40 años de trayectoria, hemos perfeccionado
                  continuamente para lograr una máxima eficiencia.
                </p>

                <Link href="/about-us">
                  <a className="service-btn">
                    Leer Más
                    <i className="flaticon-right"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-document"></i>
                </div>
                <h3>Superando Desafíos</h3>
                <p>Nuestro equipo trabaja unido para alcanzar los resultados deseados.</p>

                <Link href="/about-us">
                  <a className="service-btn">
                    Leer Más
                    <i className="flaticon-right"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-chart"></i>
                </div>
                <h3>Mejora Constante</h3>
                <p>
                  Avanzamos constantemente mediante un sistema de gestión
                  integrado que incluye a todos los colaboradores.
                </p>

                <Link href="/about-us">
                  <a className="service-btn">
                    Leer Más
                    <i className="flaticon-right"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-science"></i>
                </div>
                <h3>Aliado Estratégico</h3>
                <p>
                  Superamos expectativas, centrados en la excelencia del
                  servicio y la satisfacción del cliente.
                </p>

                <Link href="/about-us">
                  <a className="service-btn">
                    Leer Más
                    <i className="flaticon-right"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-data-management"></i>
                </div>
                <h3>Compromiso de Excelencia</h3>
                <p>
                  Garantizamos excelencia y seguridad en cada entrega, con un
                  equipo altamente capacitado y una flota moderna de vehículos.
                </p>

                <Link href="/about-us">
                  <a className="service-btn">
                    Leer Más
                    <i className="flaticon-right"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
