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
      {/* <PageBanner pageTitle="Juan Caicedo" bgImage="/images/banner.webp" /> */}

      <div className="project-details-area pb-100">
        <div className="container">
          <div className="projects-details-desc">
            <video
              src="/images/simonhedman.mp4"
              autoPlay={true}
              controls
              width={"100%"}
              height={500}
            />
            <div className="playerDetails">
              <h1>Simon Hedman</h1>
              <p>Goal keeper</p>
              <div className="previous-clubs">
                <h2>Previous Clubs</h2>

                <div className="club">
                  <p>Season 2023: Kvarnsvedens IK Herr Division 2</p>
                  <p>Borlange, Sweden</p>
                  <p>21 games</p>
                </div>

                <div className="club">
                  <p>Season 2022: Forssa BK Herr Division 3</p>
                  <p>Borlange, Sweden</p>
                  <p>22 games</p>
                </div>

                <div className="club">
                  <p>Season 2021: Forssa BK Herr Division 3</p>
                  <p>Borlange, Sweden</p>
                  <p>20 games</p>
                </div>

                <div className="club">
                  <p>Season 2020: Forssa BK Herr Division 3</p>
                  <p>Borlange, Sweden</p>
                  <p>13 games</p>
                </div>

                <div className="club">
                  <p>Season 2019: Forssa BK Herr Division 3</p>
                  <p>Borlange, Sweden</p>
                  <p>5 games</p>
                </div>

                <div className="club">
                  <p>Season 2019: Forssa BK P19 Division 1</p>
                  <p>Borlange, Sweden</p>
                  <p>19 games</p>
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
