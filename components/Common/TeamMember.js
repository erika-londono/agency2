import React from "react";
import Link from "next/link";

const TeamMember = () => {
  const players = [
    {
      name: "Juan Caicedo",
      picture: "/images/ourplayers/1.jpeg",
      insta: "",
      facebook: "",
      path:"players/juancaicedo"
    },
    {
      name: "Thomás",
      picture: "/images/ourplayers/2.jpeg",
      insta: "",
      facebook: "",
      path:"players/juancaicedo"

    },
    {
      name: "André",
      picture: "/images/ourplayers/3.jpeg",
      insta: "",
      facebook: "",
      path:"players/juancaicedo"
    },
  ];
  return (
    <>
      <div className="team-section pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2> Our Players</h2>
            <span>Meet Our Leadership Preparing For Your Success</span>
          </div>

          <div className="row justify-content-center">
            {players.map((player)=>{
              return(
              <Link href={player.path ? player.path : "/"}>

              <div className="col-lg-4 col-sm-6">
              <div className="single-team-item">
                <div className="team-image">
                  <img
                    src={player.picture}
                    style={{ maxHeight: 415, minHeight:415, width:"100%" }}
                    alt={player.name}
                  />

                  <div className="team-social">
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>

                <div className="team-content">
                  <h3>{player.name}</h3>
                  {/* <span>position player</span> */}
                </div>
              </div>
            </div>
            
            </Link>
            )})}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMember;
