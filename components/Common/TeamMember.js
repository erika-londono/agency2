import React from "react";

const TeamMember = () => {
  return (
    <>
      <div className="team-section pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2> Our Players</h2>
            <span>Meet Our Leadership Preparing For Your Success</span>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-team-item">
                <div className="team-image">
                  <img src="/images/ourplayers/1.jpeg" alt="team" />

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
                  <h3>Juan Caicedo</h3>
                  <span>position player</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-team-item">
                <div className="team-image">
                  <img src="/images/ourplayers/2.jpeg" alt="team" />

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
                  <h3>Thomas</h3>
                  <span>Position Player</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-team-item">
                <div className="team-image">
                <img src="/images/ourplayers/3.jpeg" alt="team" />

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
                  <h3>Name</h3>
                  <span>Position player</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMember;
