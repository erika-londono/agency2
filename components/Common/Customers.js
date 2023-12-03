import Image from "next/image";
import React from "react";

const Customers = () => {
  return (
    <>
      <div className="partner-section pt-100 pb-70">
        <div className="container">
          <div className="partner-title">
            <h2>Nuestros clientes</h2>
          </div>

          <div className="partner-list">
            <div
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="1200"
            >
              <Image
                width={100}
                height={100}
                src="/images/partner/alianzateam.png"
                alt="alianzateam"
                loading="lazy"
              />
            </div>

            <div
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <Image
                width={100}
                height={100}
                src="/images/partner/biomax.png"
                alt="biomax"
                loading="lazy"
              />
            </div>

            <div
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="150"
              data-aos-duration="1200"
            >
              <Image
                width={100}
                height={100}
                src="/images/partner/casaval.png"
                alt="casaval"
                loading="lazy"
              />
            </div>

            <div
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <Image
                width={100}
                height={100}
                src="/images/partner/corona.png"
                alt="corona"
                loading="lazy"
              />
            </div>

            <div
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="250"
              data-aos-duration="1200"
            >
              <Image
                width={100}
                height={100}
                src="/images/partner/decorceramica.png"
                alt="decorceramica"
                loading="lazy"
              />
            </div>

            <div
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <Image
                width={100}
                height={100}
                src="/images/partner/dianacorp.png"
                alt="dianacorp"
                loading="lazy"
              />
            </div>
            <div
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <Image
                width={100}
                height={100}
                src="/images/partner/disan.png"
                alt="disan"
                loading="lazy"
              />
            </div>
            <div
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="350"
              data-aos-duration="1200"
            >
              <Image
                width={100}
                height={100}
                src="/images/partner/Importex.png"
                alt="Importex"
                loading="lazy"
              />
            </div>

            <div
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-duration="1200"
            >
              <Image
                width={100}
                height={100}
                src="/images/partner/inverdoc.png"
                alt="inverdoc"
                loading="lazy"
              />
            </div>

            <div
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="450"
              data-aos-duration="1200"
            >
              <Image
                width={100}
                height={100}
                src="/images/partner/ppw.png"
                alt="ppw"
                loading="lazy"
              />
            </div>

            <div
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="450"
              data-aos-duration="1200"
            >
              <Image
                width={100}
                height={100}
                src="/images/partner/progandelcaribe.png"
                alt="progandelcaribe"
                loading="lazy"
              />
            </div>

            <div
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="450"
              data-aos-duration="1200"
            >
              <Image
                width={100}
                height={100}
                src="/images/partner/proquimsa.png"
                alt="proquimsa"
                loading="lazy"
              />
            </div>

            <div
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="450"
              data-aos-duration="1200"
            >
              <Image
                width={100}
                height={100}
                src="/images/partner/tesicol.png"
                alt="tesicol"
                loading="lazy"
              />
            </div>

            <div
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="450"
              data-aos-duration="1200"
            >
              <Image
                width={100}
                height={100}
                src="/images/partner/terpel.jpg"
                alt="terpel"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="partner-shape"></div>
        <div className="partner-shape-img1">
          <img src="/images/shape/partnar-shape-2.png" alt="shape" />
        </div>
      </div>
    </>
  );
};

export default Customers;
