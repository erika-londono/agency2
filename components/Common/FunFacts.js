import React from "react";

const FunFacts = () => {
  return (
    <>
      <div className="fun-facts-area ptb-100">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-fun-fact">
                <h3>
                  60500
                  <span className="sign-icon">+</span>
                </h3>
                <p>Viajes Realizados</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-fun-fact">
                <h3>
                  250
                  <span className="sign-icon">+</span>
                </h3>
                <p>Clientes Satisfechos</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-fun-fact">
                <h3>
                  200
                  <span className="sign-icon">+</span>
                </h3>
                <p>Vehículos</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-fun-fact">
                <h3>
                  5000
                  <span className="sign-icon">+</span>
                </h3>
                <p>Rutas Aprobadas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFacts;
