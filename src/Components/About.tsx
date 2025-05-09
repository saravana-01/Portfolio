import React from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {}

export default function About({}: Props) {
    const navigate = useNavigate();
  return (
    <>
      <>
      <div className="bg-dark text-light"></div>
      <header>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <div className="container-fluid">
            <button className=" nav-link navbar-brand"  onClick={() => navigate("/")} >SARAVANA PANDIYAN</button>
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
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <button
                    className="nav-link"
                    aria-current="page"
                    onClick={() => navigate("/About")}
                  >
                    About
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    onClick={() => navigate("/About")}
                  >
                    Projects
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    onClick={() => navigate("/About")}
                  >
                    Contacts
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
    </>
  )
}