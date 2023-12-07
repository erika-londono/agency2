import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';

const TeamMember = () => {
  const players = [
    {
      name: "Juan Caicedo",
      picture: "/images/ourplayers/1.jpeg",
      insta: "https://instagram.com/juancaiced0",
      path: "players/juancaicedo",
    },
    {
      name: "Kennet Pinto",
      picture: "/images/ourplayers/2.jpeg",
      insta: "https://instagram.com/ketomas7",
      path: "players/kennetpinto",
    },
  ];

  const router = useRouter();

  return (
    <>
      <div className="team-section pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2> Our Players</h2>
            <h3></h3>
            <span>Meet Our Leadership Preparing For Your Success</span>
          </div>

          <div className="row justify-content-center">
            {players.map((player) => {
              return (
                <Link key={player.name} href={player.path ? player.path : "/"}>
                  <div
                    className="col-lg-4 col-sm-6"
                    style={{ cursor: "pointer" }}
                    onClick={() => router.push(player.path)}
                  >
                    <div className="single-team-item">
                      <div key={player.name} className="team-image">
                        <img
                          src={player.picture}
                          style={{ maxHeight: 415, minHeight: 415, width: 311 }}
                          alt={player.name}
                        />

                        <div className="team-social">
                          <a>
                            <i
                              className="fab fa-instagram"
                              onClick={() => router.push(player.insta)}
                            ></i>
                          </a>
                        </div>
                      </div>
                      <div className="team-content">
                        <h3>{player.name}</h3>
                      </div>
                    </div>
                  </div>
                </Link>
                // <Link  key={player.name} href={player.path ? player.path : "/"}>
                //   <div
                //     className="col-lg-4 col-sm-6 "
                //     style={{ cursor: "pointer" }}
                //   >
                //     <div className="single-team-item">
                //       <div key={player.name} className="team-image">
                //         {/* <Image /> */}
                //         <img
                //           src={player.picture}
                //           style={{
                //             maxHeight: 415,
                //             minHeight: 415,
                //             width:311
                //           }}
                //           alt={player.name}
                //         />

                //         <div className="team-social">
                //           {/* <a href="https://www.facebook.com/" target="_blank">
                //             <i className="fab fa-facebook-f"></i>
                //           </a> */}
                //           <a href={player.insta} onClick={handleInstagramClick(player.insta)}>
                //           {/* <a href={player.insta} target="_blank"> */}
                //             <i className="fab fa-instagram"></i>
                //           </a>
                //         </div>
                //       </div>
                //       <div className="team-content">
                //         <h3>{player.name}</h3>
                //         {/* <span>position player</span> */}
                //       </div>
                //     </div>
                //   </div>
                // </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMember;
