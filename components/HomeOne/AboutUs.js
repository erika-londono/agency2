import React from "react";
import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <div className="about-section overflow-hidden pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about-image"
                data-aos="zoom-in"
                data-aos-delay="300"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <img src="/images/about.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="about-content"
                data-aos="zoom-in-left"
                data-aos-delay="300"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                {/* <span>About Us</span> */}
                <h2>Decisiones basadas en datos, no en suposiciones</h2>
                <p>
                  En Ceter nuestra prioridad es proporcionarle información
                  significativa y útil que se obtienen a través del análisis
                  que le permitan tomar decisiones informadas y estratégicas
                  para llevar su carga.
                </p>

                <ul className="about-list">
                  <li>
                    <i className="flaticon-tick"></i>
                    Acompañamiento Profesional
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Servicio óptimo y eficiente.
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Monitoreo 24/7
                  </li>
                  {/* <li>
                    <i className="flaticon-tick"></i>
                    Advanced Advisory Team
                  </li> */}
                </ul>

                <Link href="/contact">
                  <a className="default-btn">
                    Contáctar Ahora <span></span>
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

export default AboutUs;
