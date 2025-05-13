import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

export default function Contacts({}: Props) {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <nav className=" container p-3 navbar navbar-dark bg-dark navbar-expand-lg">
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
        <div className="row">
          <div className="col-lg-12">
            <p className="section__text__p1">Get In Touch</p>
            <h1 className="title">Contact Me</h1>
            <div className="contact-info-upper-container">
              <div className="contact-info-container">
                <img
                  src="./images/email.png"
                  alt="Email"
                  className="icon contact"
                />
                <a href="mailto:merinfrango2094@gmail.com" target="_blank">
                  <p>merinfrango2094@gmail.com</p>
                </a>
              </div>
              <div className="contact-info-container">
                <img
                  src="./images/whatsapp.png"
                  alt="LikedIn"
                  className="icon contact"
                />
                <a href="" target="_blank">
                  <p>+917395850859</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
