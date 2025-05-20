import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "./Nav";
import AOS from "aos";
import "aos/dist/aos.css";

type Props = {};

export default function About({}: Props) {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <header>
        <Nav />
      </header>
      <section className="container">
        <div className="column mt-5">
          <div
            className="card w-75 mb-3 p-3"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
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
          <div
            className="card education w-75 mb-3 p-3 text-end ms-auto d-flex"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
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
          <div
            className="card w-75 mb-3 p-3"
            data-aos="fade-left"
            data-aos-duration="2500"
          >
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
          <div
            className="card  w-75 mb-3 p-3 text-end ms-auto d-flex"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
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
