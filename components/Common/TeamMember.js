import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';

const TeamMember = () => {
  const players = [
    {
      name: "Juan Caicedo",
      picture: "/images/ourplayers/1a.png",
      insta: "https://instagram.com/juancaiced0",
      path: "players/juancaicedo",
    },
    {
      name: "Kennet Pinto",
      picture: "/images/ourplayers/2.jpeg",
      insta: "https://instagram.com/ketomas7",
      path: "players/kennetpinto",
    },
    {
      name: "Simon Hedman",
      picture: "/images/ourplayers/3.jpeg",
      insta: "https://www.instagram.com/simonhedman_",
      path: "players/simonhedman",
    },    
  ];

  const router = useRouter();
  const goToinsta =(event,val,path)=>{
    event.stopPropagation()
    if (val== "insta") return router.push(path)
    return null
  }
  const goToPlayer =(val,path)=>{
    if (val == 'player') return router.push(path)
    return null
  }

  return (
    <>
      <div className="team-section pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2> Our Players</h2>
            <h3></h3>
            <span></span>
          </div>

          <div className="row justify-content-center">
            {players.map((player) => {
              return (
                <div
                  key={player.name}
                    className="col-lg-4 col-sm-6"
                    style={{ cursor: "pointer" }}
                    onClick={() =>goToPlayer('player',player.path) }
                  >
                    <div className="single-team-item">
                      <div key={player.name} className="team-image">
                        <img
                          src={player.picture}
                          style={{ maxHeight: 415, minHeight: 415, width: 311 }}
                          alt={player.name}
                        />

                        <div className="team-social">
                          <Link href={player.insta}>
                          <a>
                            <i
                              className="fab fa-instagram"
                              onClick={(event) => goToinsta(event,'insta',player.insta)}
                            ></i>
                          </a>
                          </Link>
                        </div>
                      </div>
                      <div className="team-content">
                        <h3>{player.name}</h3>
                      </div>
                    </div>
                  </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMember;
