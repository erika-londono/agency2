import React from "react";
import Link from "next/link";

const GetStartedProject = () => {
  return (
    <>
      <div className="productive-section pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="productive-content">
                {/* <span>Let’s Get Started</span> */}
                <h3>¿Listo para llevar su negocio al siguiente nivel? </h3>
                <p>
                  Descubre un nuevo nivel de eficiencia empresarial con nuestras
                  soluciones personalizadas. Aumenta la productividad y alcanza
                  el éxito que tu negocio se merece.
                </p>

                <div className="productive-btn">
                  {/* <Link href="/projects">
                    <a className="productive-btn">
                      Get Started Project
                      <span></span>
                    </a>
                  </Link> */}

                  <Link href="/contact">
                    <a className="productive-btn-one">
                      Contáctar Ahora
                      <span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="productive-image">
                <img src="/images/productive.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStartedProject;
