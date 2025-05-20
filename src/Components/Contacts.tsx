import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";

type Props = {};

export default function Contacts({}: Props) {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <Nav />
      </header>
      <section id="contact">
        <div className="container">
          <div className="column">
            <div className="text-center mt-5 contact-text">
              <p className="text">Get in Touch</p>
              <h1 className="fs-1">Contact Me</h1>
            </div>

            <div className="container logo-container">
              <div className="row justify-content-center text-center mt-4">
                <div
                  className="col-12 col-md-6 mb-3"
                  data-aos="flip-right"
                  data-aos-duration="2000"
                >
                  <a
                    className="contact-info d-flex justify-content-center align-items-center"
                    href="mailto:saravanapandiyan0903@gmail.com"
                  >
                    <i className="fa-solid fa-envelope p-2"></i>
                    saravanapandiyan0903@gmail.com
                  </a>
                </div>
                <div
                  className="col-12 col-md-6 mb-3"
                  data-aos="flip-left"
                  data-aos-duration="2000"
                >
                  <a
                    className="contact-info d-flex justify-content-center align-items-center"
                    href="https://wa.me/9384531400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-whatsapp p-2"></i>
                    +91 9384531400
                  </a>
                </div>
              </div>

              <div className="row justify-content-center text-center mt-4">
                <div className="col-auto">
                  <a href="https://linkedin.com/in/saravana-pandiyan-083b32277">
                    <i
                      className="fa-brands fa-linkedin fa-2x"
                      data-aos="flip-down"
                      data-aos-duration="500"
                    ></i>
                  </a>
                </div>
                <div className="col-auto">
                  <a href="https://github.com/saravana-01">
                    <i
                      className="fa-brands fa-github fa-2x"
                      data-aos="flip-up"
                      data-aos-duration="1000"
                    ></i>
                  </a>
                </div>
                <div className="col-auto">
                  <a href="https://www.instagram.com/saravanaaaaahhhhh/">
                    <i
                      className="fa-brands fa-instagram fa-2x"
                      data-aos="flip-up"
                      data-aos-duration="2000"
                    ></i>
                  </a>
                </div>
                <div className="col-auto">
                  <a href="https://www.facebook.com/saravanaaaaahhhhh">
                    <i
                      className="fa-brands fa-facebook fa-2x"
                      data-aos="flip-up"
                      data-aos-duration="3000"
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
