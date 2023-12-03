import React from "react";

const AboutUsContent = () => {
  return (
    <>
      <div className="about-section ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-image">
                <img src="/images/truckceter.png" alt="image" />
              </div>
            </div>

            <div
              className="col-lg-6"
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="about-content">
                <h2>Quiénes somos</h2>
                <p> 
                  CETER, inicialmente creada como fondo de empleados en el año
                  1980 por los empleados de Terpel Bucaramanga S.A, en el año
                  1997 se transforma en Cooperativa y en el 2009 se modifica su
                  razón social a Cooperativa Multiactiva y de Transporte de
                  Santander(CETER). En el año 2001 se obtuvo la habilitación
                  para el transporte de carga terrestre mediante la Resolución
                  N. 00257 de la SuperTransporte.
                </p>
              </div>
            </div>
            <div
              className="col-lg-12 pt-100 about-content"
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <h2 className="about-content">Unidades de negocio</h2>
              <ul className="about-list">
                <li>
                  <i className="flaticon-tick"></i>
                  Comercialización al por menor de combustibles y lubricantes a
                  través de nuestro sistema de franquicias.
                </li>
                <li>
                  <i className="flaticon-tick"></i>
                  Oferta de bienes y servicios especializados para nuestros
                  asociados.
                </li>
                <li>
                  <i className="flaticon-tick"></i>
                  Transporte de carga terrestre en la modalidad de carga liquida
                  y seca.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;
