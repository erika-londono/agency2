import React from "react";
import Footer from "../../components/Layouts/Footer";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Link from "next/link";
import whastAppAsociados from "../../utils/WhatsAppAsociados";
import Image from "next/image";

const JuanCaicedo = () => {
  const whastApp = whastAppAsociados();
  return (
    <>
      <Navbar />
      {/* <PageBanner pageTitle="Juan Caicedo" bgImage="/images/banner.webp" /> */}

      <div className="project-details-area pb-100">
        <div className="container">
          <div className="projects-details-desc">
            <video
              src="/images/juancaicedo.mp4"
              autoPlay={true}
              controls
              width={"100%"}
              height={500}
            />
            <div className="playerDetails">
                <h1>Juan David Caicedo</h1>
                <p>Striker – Winger – Attacking Midfielder</p>
                <p>
                  +46 769537175<br/>
                  <a href="mailto:caicuamax@gmail.com">caicuamax@gmail.com</a>
                </p>
                <p>Borlänge, Sweden</p>

                <div className="previousClubs">
                <h2>Previous Clubs</h2>
                  <div className="club">
                    <p>Kvarnsvedens IK Herr A</p>
                    <p>2023 Borlänge, Sweden</p>
                    <p>
                      • Div. 5 Herrar U - Dalarnas Fotbollförbund (2 goals in 3
                      games)
                    </p>
                  </div>
                  <div className="club">
                    <p>Hammarby HTFF Herrfotboll</p>
                    <p>2022-2023 Stockholm, Sweden</p>
                    <p>• Div. 1 P19 - Södermanlands Fotbollförbund</p>
                    <p>• J DM Pojkar - Stockholms Fotbollförbund</p>
                    <p>• Ligacupen P19 - Örebro läns fotbollförbund</p>
                  </div>
                  <div className="club">
                    <p>Olympic Football Club</p>
                    <p>2021 Floridablanca, Colombia</p>
                    <p>• National Tournament Under 17- La Victoria</p>
                    <p>
                      • Tournament Piedecuesta - Tournament Liga Santandereana
                    </p>
                  </div>
                  <div className="club">
                    <p>State Team of Santander</p>
                    <p>2020 Bucaramanga, Colombia</p>
                    <p>• La Marte Tournament</p>
                  </div>
                  <div className="club">
                    <p>Juan Carlos Quintero Football Club</p>
                    <p>2019-2020 Floridablanca, Colombia</p>
                    <p>• Tournament Liga Santandereana</p>
                    <p>• Cup Colombina Guadalupe Santander</p>
                    <p>• Cup Colombina Cali Valle del Cauca - Liga Santander</p>
                  </div>
                  <div className="club">
                    <p>Real Santander Football Club</p>
                    <p>2018 Bucaramanga, Colombia</p>
                    <p>
                      • Tournament Liga Santandereana - Tournament Asocolflor
                    </p>
                    <p>• Tournament Campo hermoso - Tournament La Joya</p>
                  </div>
                  <div className="club">
                    <p>Independiente Football Club</p>
                    <p>2016 – 2017 Floridablanca, Colombia</p>
                    <p>• Tournament Liga Santandereana</p>
                  </div>
                  <div className="club">
                    <p>Deporflorida</p>
                    <p>2013 – 2014 Floridablanca, Colombia</p>
                    <p>• Tournament Paz y Amor</p>
                  </div>
                </div>

                <h2>Information</h2>
                <p>Date of Birth: June 27, 2004</p>
                <p>Height: 1.72 m</p>
                <p>Weight: 69 kg</p>
                <p>Foot: Right</p>

                <h2>Languages</h2>
                <p>English: C1</p>
                <p>Swedish: A2</p>
                <p>Spanish: Native</p>

                <h2>Achievements</h2>
                <div className="achievements pb-100">
                  <p className="achievement">
                    Champions Div. 5 Herrar U - Dalarnas Fotbollförbund
                    Borlänge, Oct. 2023
                  </p>
                  <p className="achievement">
                    Champions Tournament Under 18 Piedecuesta, Dec. 2021
                  </p>
                  <p className="achievement">
                    Champions Tournament Under 17 La Victoria, July 2021
                  </p>
                  <p className="achievement">
                    Champions Cup Colombina Guadalupe, Santander, June 2019
                  </p>
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

export default JuanCaicedo;
