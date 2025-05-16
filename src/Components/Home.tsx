import React, { useState } from "react";
import photo2 from "../../src/Photo2.jpg";
import photo1 from "../../src/photo1.jpg";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const navigateResume = () => {
    window.open("../../src/Photo2.jpg");
  };
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
      </header>{" "}
      <div className="p-6 max-w-4xl mx-auto text-center"></div>
      <section id="profile" className="container-fluid ">
        <div className="row align-items-center">
          <div className="col-lg-1 d-flex justify-content-center"></div>
          <div className="col-lg-5 d-flex justify-content-center">
            <img src={photo2} className=" ms-5 img-fluid pic" />
          </div>
          <div className="col-lg-5">
            <div className="justify-content-center mt-5">
              <h1 className="h1 text-lg-start text-dark d-flex text-align-center">
                Saravana Pandiyan
              </h1>
              <p
                style={{ paddingLeft: "83px" }}
                className="text-secondary text-align-center h6 pt-2 fs-5"
              >
                Frontend Developer
              </p>
              <div style={{paddingTop:"10px",marginLeft:"80px"}}>
                <a
                  type="button"
                  className="btn btn-outline-dark"
                  style={{ padding:"10px",borderRadius: "20px" }}
                  href="https://virtual-cv-nine.vercel.app/"
                >
                  Resume
                </a>
                <button
                  type="button"
                  className="btn btn-dark ms-1 m-2"
                  style={{ padding:"10px",borderRadius: "20px" }}
                  onClick={() => navigate("/contact")}
                >
                  Contact Info
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-1 d-flex justify-content-center"></div>
        </div>
      </section>
    </>
  );
};
export default Home;
