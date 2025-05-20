import React, { useEffect } from "react";
import photo2 from "../../src/Photo2.jpg";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import AOS from "aos"; // @ts-ignore
import "aos/dist/aos.css";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <header>
        <Nav />
      </header>

      <section
        id="profile"
        className="container align-items-center justify-content-center "
      >
        <div className="row align-items-center justify-content-center text-center text-lg-start">
          <div className="col-12 col-lg-5 text-center mb-4 mb-lg-0">
            <img
            data-aos="zoom-in"
              src={photo2}
              className="img-fluid"
              alt="Profile"
              style={{ maxWidth: "300px", borderRadius: "50px" }}
            />
          </div>

          <div className="col-12 col-lg-6">
            <h1 className="text-dark" data-aos="fade-down" data-aos-duration="1000">
              Saravana Pandiyan
            </h1>
            <p className="text-secondary fs-5" data-aos="fade-down" data-aos-duration="2000">Frontend Developer</p>
            <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-2 mt-3" data-aos="fade-down" data-aos-duration="3000">
              <a
                type="button"
                className="btn btn-outline-dark"
                style={{ padding: "10px", borderRadius: "20px" }}
                href="https://virtual-cv-nine.vercel.app/"
                data-aos="flip-down"
                data-aos-duration="1000"
              >
                Resume
              </a>
              <button
                type="button"
                className="btn btn-dark"
                style={{ padding: "10px", borderRadius: "20px" }}
                onClick={() => navigate("/contact")}
                data-aos="flip-down"
                data-aos-duration="1000"
              >
                Contact Info
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
