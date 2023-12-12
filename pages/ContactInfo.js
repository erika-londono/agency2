import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-box pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {/* <div className="col-lg-4 col-md-6">
              <div className="single-contact-box">
                <i className="fa fa-map-marker"></i>
                <div className="content-title">
                  <h3>Dirección</h3>
                  <p>Sede Administrativa Bucaramanga</p>
                  <p>Carrera 36 # 54-42</p>
                </div>
              </div>
            </div> */}

            <div className="col-lg-4 col-md-6">
              <div className="single-contact-box">
                <i className="fa fa-envelope"></i>
                <div className="content-title">
                  <h3>Email</h3>
                  <p><span>
                    <a
                      href="mailto:pablocaicedo@cjsports.com?subject=Contact Us"
                      target="_self"
                    >
                      pablocaicedo@cjsports.com
                    </a>
                  </span></p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-contact-box">
                <i className="fa fa-phone"></i>
                <div className="content-title">
                  <h3>Phone</h3>
                  <p>
                  <a href="tel:+46727242267">+46 72 724 2267 </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
