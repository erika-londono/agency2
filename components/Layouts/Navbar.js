import React,{useState} from "react";
import Link from "../../utils/ActiveLink";

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu "
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/">
                <a className="navbar-brand">
                  <img
                    src="/images/logo.png"
                    className="white-logo"
                    alt="logo"
                    loading="lazy"
                  />
                  <img
                    src="/images/logo.png"
                    className="black-logo"
                    alt="logo"
                    loading="lazy"
                  />
                </a>
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent" style={{
                    justifyContent: "right",
                  }}>
                <ul
                  className="navbar-nav" style={{
                    justifyContent: "right",
                  }}
                >
                  <li className="nav-item">
                    <Link href="/" activeClassName="active">
                      <a className="nav-link">HOME</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/about-us" activeClassName="active">
                      <a className="nav-link">ABOUT</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/contact" activeClassName="active">
                      <a className="nav-link">CONTACT</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
