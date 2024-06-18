import React from "react";
import Footer from "../../components/Layouts/Footer";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Link from "next/link";
import whastAppAsociados from "../../utils/WhatsAppAsociados";
import Image from "next/image";

const KennetPinto = () => {
  const whastApp = whastAppAsociados();
  return (
    <>
      <Navbar />
      {/* <PageBanner pageTitle="Kennet Pinto" bgImage="/images/banner.webp" /> */}

      <div className="project-details-area pb-100">
        <div className="container">
          <div className="projects-details-desc">
            <video
              src="/images/kennet.mp4"
              autoPlay={true}
              controls
              width={"100%"}
              height={500}
            />
            <div className="playerDetails">
              <h1>Kennet Tomas Pinto</h1>
              <p>Center Forward - Winger</p>
              <div className="previous-clubs">
                <h2>Previous Clubs</h2>

                <div className="club">
                  <p>Vila Fria 1980 - Distrital 2 Division. </p>
                  <p>2023/2024 Viana do Castelo, Portugal</p>
                  <p>(31 goals in 30 games)</p>
                </div>

                <div className="club">
                  <p>Sport Club Vianense</p>
                  <p>2022-2023 Viana do Castelo, Portugal</p>
                  <p>A.F Viana Do Castelo – Camp. Distrital juniors A</p>
                  <p>(20 goals in 15 games)</p>
                </div>

                <div className="club">
                  <p>Atletico Bucaramanga</p>
                  <p>2021 Bucaramanga, Colombia</p>
                  <p>La Marte Tournament</p>
                </div>

                <div className="club">
                  <p>Olympic</p>
                  <p>2020 Floridablanca, Colombia</p>
                  <p>Tournament Liga Santandereana</p>
                  <p>Cup Colombina Guadalupe Santander</p>
                  <p>Cup Colombina Cali Valle del Cauca - Liga Santander</p>
                </div>

                <div className="club">
                  <p>Juan Carlos Quintero FC</p>
                  <p>2019-2020 Floridablanca, Colombia</p>
                  <p>Tournament Liga Santandereana</p>
                  <p>Cup Colombina Guadalupe Santander</p>
                  <p>Cup Colombina Cali Valle del Cauca - Liga Santander</p>
                </div>

                <div className="club">
                  <p>Comfenalco Santander</p>
                  <p>2018-2019 Bucaramanga, Colombia</p>
                  <p>Tournament Liga Santandereana</p>
                </div>

                <div className="club">
                  <p>Boca Juniors Floridablanca</p>
                  <p>2016-2017 Floridablanca, Colombia</p>
                  <p>Tournament Liga Santandereana</p>
                </div>

                <div className="club">
                  <p>Universitario De Deportes</p>
                  <p>2014-2015 Lima, Peru</p>
                  <p>Cream Cup Tournament</p>
                </div>
              </div>

              <h2>Languages</h2>
                <p>Portuguese: C1</p>
                <p>Spanish: Native</p>

              <div className="achievements">
                <h2>Achievements</h2>

                <p>Scorer of all Colombia Difutbol Tournament A 2021</p>
                <p>Champions Tournament Liga Santandereana 2021</p>
                <p>Champions Tournament Bogota City 2019</p>
                <p>Champions Tournament La Marte 2019</p>

                <p>Champions Tournament La Marte 2018</p>
                <p>Champions Cream Cup 2014</p>
              </div>
            </div>

            <div className="project-details-info" style={{justifyContent: "right"}}>
              <div className="single-info-box flex-center">
                Contact us
                <Link href={whastApp}>
                  <>
                    <a href={whastApp} className="btnDetails " target="_blank">
                      <Image
                        width={50}
                        height={50}
                        alt="icon whatsapp"
                        src="/images/whatsappIcon.webp"
                        decoding="async"
                      />
                    </a>
                  </>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default KennetPinto;
