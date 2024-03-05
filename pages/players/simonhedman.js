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
              <p>Position: Goal keeper</p>
              <p>Age: 21 (Born 2002)</p>
              <p>Foot: Right</p>
              <p>Height: 188 cm</p>   
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
                <p>Swedish: Native</p>
                <p>English: Native</p>
              
              <div className="Strengths">
                <h2>Physical</h2>
                <p>Explosiv</p>
                <p>Fast</p>
                <p>Strong</p>
                <p>Elasticity</p>
                <p>Balance</p>

                <h2>Technical</h2>
                <p>Reflexes</p>
                <p>Rescued both ways</p>
                <p>Throwing</p>
             
                <h2>Game perception, Game understanding and mentally</h2>
                <p>Read play ending</p>
                <p>Control back line</p>
                <p>Mature</p>
                <p>Professional</p>         
              </div>

              <div className="achievements">
                <h2>Other Achievements</h2>
                <p>UEFA B License (Trainer)</p>
                <p>Goal keeper trainer</p>
                <p>Main responsible for the Football Area at the Hagströmka Highschool</p>
                <p>Sports Psychology, Malmö University</p>
                <p>Sport complexity and challenges, Kristianstad Highschool</p>
                <p>Human Physiology, Skövde Highschool</p>
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
