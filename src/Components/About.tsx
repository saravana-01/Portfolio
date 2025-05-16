import React from "react";
import { Link, useNavigate } from "react-router-dom";

type Props = {};

export default function About({}: Props) {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <nav className="container-fluid p-3 navbar navbar-dark bg-dark navbar-expand-lg">
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
      <section className="container">
        <div className="column mt-5">
          <div className="card w-75 mb-3 p-3">
            <div className="card-body">
              <h5 className="card-title text-primary h2 p-1">Experience</h5>
              <p className="card-text fs-5">
                <strong className="card-title text-secondary">
                  Front-end developer
                </strong>{" "}
                with 10 months of experience using{" "}
                <strong className="card-title text-secondary">
                  React, TypeScript (TSX), and JavaScript.
                </strong>{" "}
                Skilled in building responsive UIs, working with components,
                hooks, and API integration. Familiar with modern development
                tools, version control, and UI libraries like Bootstrap or
                Tailwind.
              </p>
            </div>
          </div>
          <div className="card  w-75 mb-3 p-3 text-end ms-auto d-flex">
            <div className="card-body">
              <h5 className="card-title text-primary h2 p-1">Education</h5>
              <p className="card-text fs-5">
                Bachelor of Computer Application{" "}
                <strong className="card-title text-secondary">(BCA)</strong>
                .NMSSVN College, Madurai Completed in 2020-2023 with 72% Gained
                strong foundational knowledge in computer science, programming,
                database management, and software development. Actively
                participated in academic projects and seminars to enhance
                practical skills and technical understanding.
              </p>
            </div>
          </div>
          <div className="card w-75 mb-3 p-3">
            <div className="card-body">
              <h5 className="card-title text-primary h2 p-1">Skills</h5>
              <p className="card-text fs-5">
                <ul>
                  <li>HTML,CSS,Bootstrap</li>
                  <li>JavaScript,TypeScript</li>
                  <li>React</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="card  w-75 mb-3 p-3 text-end ms-auto d-flex">
            <div className="card-body">
              <h5 className="card-title text-primary h2 p-1">
                Personal Details
              </h5>
              <p className="card-text fs-5">
                I am a 22-year-old based in Madurai, India, currently single and
                dedicated to building my career in the tech industry.You can
                reach me at{" "}
                <Link className="text-decoration-none" to={"/contact"}>
                  Contact
                </Link>{" "}
                for any collaboration or opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
