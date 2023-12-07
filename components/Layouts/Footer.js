import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-section ptb-100" style={{background:'black'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget col-lg-9">
                <div className="footer-heading">
                  <h3>CJ Sports Agency</h3>
                </div>
                <Image
                    src="/images/logo.png"
                    width={80}
                    height={80}
                    alt="logo"
                    loading="lazy"
                    style={{boxShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`,borderRadius:5, background:'white'}}
                  />
                <p>
                Football Players Agency
                </p>
              </div>
            </div>

            {/* <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>Importants Links</h3>
                </div>

                <ul className="footer-quick-links">
                  <li>
                    <Link href="/certification">
                      <a>Certificaciones</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/associates">
                      <a>Documentación Requerida</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <a>Rastreo de Carga</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/team">
                      <a>Equipo</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div> */}

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>Menu</h3>
                </div>

                <ul className="footer-quick-links">
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us">
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>Contact us</h3>
                </div>

                <div className="footer-info-contact">
                  <i className="flaticon-call-answer"></i>
                  <h3>Phone</h3>
                  <span>
                    <a href="tel:+46727242267">+46 72 724 2267 </a>
                  </span>
                </div>

                <div className="footer-info-contact">
                  <i className="flaticon-envelope"></i>
                  <h3>Email</h3>
                  <span>
                    <a
                      href="mailto:pablocaicedo@gmail.com?subject=Contact Us"
                      target="_self"
                    >
                      pablocaicedo@gmail.com
                    </a>
                  </span>
                </div>

                {/* <div className="footer-info-contact">
                  <i className="flaticon-maps-and-flags"></i>
                  <h3>Address</h3>
                  <span></span>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        {/* <div className="partner-shape-img1">
          <img src="/images/shape/partnar-shape-2.png" alt="image" />
        </div> */}
      </footer>
      {/* End Top Footer Section */}

      {/* Bottom Footer Section */}
      <div className="copyright-area" style={{background:'black'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <p>
                &copy; {currentYear} All rights reserverd by
                <Link href="/"> CJ Sports Agency</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
