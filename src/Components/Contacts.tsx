import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

export default function Contacts({}: Props) {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <nav className=" container-fluid p-3 navbar navbar-dark bg-dark navbar-expand-lg">
          <div className="container-fluid">
            <button
              className=" nav-link navbar-brand"
              onClick={() => navigate("/")}
            >
              SARAVANA PANDIYAN
            </button>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto ps-5">
                <li className="nav-item">
                  <button
                    className="nav-link"
                    aria-current="page"
                    onClick={() => navigate("/about")}
                  >
                    About
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    onClick={() => navigate("/about")}
                  >
                    Projects
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    onClick={() => navigate("/contact")}
                  >
                    Contacts
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <section id="contact">
        <div className="container">
          <div className="column">
            <div className="text-center mt-5 contact-text">
              <p className="text">Get in Touch</p>
              <h1 className="contact-text-h1 text-primary">Contact Me</h1>
            </div>
            <div className="container  logo-container">
              <div className="row">
                <div className="col-1"></div>
                
                <div className="col-5 mail">
                  <div  className="text-start ">
                    <a  className="text-start ms-auto ms-2 " href="saravanapandiyan0903@gmail.com@example.com">
                      <i className="fa-solid fa-envelope p-2"></i>
                        saravanapandiyan0903@gmail.com
                    </a>
                  </div>
                </div>
                <div className="col-4 wp">
                  <div className="text-end ms-auto d-flex">
                    <a
                    className="text-end ms-auto d-flex"
                      href="https://wa.me/9384531400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-whatsapp p-2"></i>
                      +91 9384531400
                    </a>
                  </div>
                </div>
                <div className="col-2"></div>
              </div>
              <div className="row mt-5">
                <div className="col-4"></div>
                <div className="col-1">
                  <a href="https://linkedin.com/in/saravana-pandiyan-083b32277">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </div>
                <div className="col-1">
                  <a href="https://github.com/saravana-01">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
                <div className="col-1">
                  <a href="https://www.instagram.com/saravanaaaaahhhhh/?igsh=ZWhxNWJlYjVxeDh0#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
                <div className="col-1">
                  <a href="https://www.facebook.com/saravanaaaaahhhhh?rdid=FRWyV1xY0AXKfvUe&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16V15As2Yg%2F#">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </div>
                <div className="col-4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
