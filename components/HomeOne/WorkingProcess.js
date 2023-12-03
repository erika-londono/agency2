import React from "react";
import Link from "next/link";

const WorkingProcess = () => {
  return (
    <>
      <div className="process-section pb-70">
        <div className="container">
          <div className="section-title">
            <div
              className="col-lg-12 col-md-12"
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <h2>Nuestra propuesta de valor</h2>
            </div>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="process-item">
                <img src="/images/process/process1.png" alt="image" />

                <h3>Control total de procesos</h3>
                <p>
                  Nos enorgullecemos de mantener un estricto control en nuestros
                  procesos, lo que nos permite ofrecer un servicio de excelente
                  calidad. Contamos con un equipo altamente calificado y
                  comprometido, siempre cumpliendo con la normatividad vigente
                  aplicable.
                </p>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="process-item">
                <img src="/images/process/process3.png" alt="image" />

                <h3>Nuestro compromiso</h3>
                <p>
                  Nuestro compromiso se extiende a nuestros asociados de negocio
                  y partes interesadas. Buscamos constantemente mejorar nuestros
                  procesos para garantizar seguridad, confianza, control,
                  respaldo y transparencia en cada interacción con ellos.
                </p>

                {/* <Link href="/project-details">
                  <a className="process-btn">
                    Read More
                    <i className="flaticon-right"></i>
                  </a>
                </Link> */}
              </div>
            </div>

            {/* <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="process-item">
                <img src="/images/process/process3.png" alt="image" />

                <h3>Analytics Projects</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>

                <Link href="/project-details">
                  <a className="process-btn">
                    Read More
                    <i className="flaticon-right"></i>
                  </a>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkingProcess;
