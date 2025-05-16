import React from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {}

export default function Nav({}: Props) {
    const navigate = useNavigate()
  return (
    <>
       <nav className="container-fluid p-3 navbar navbar-dark bg-dark navbar-expand-lg">
          <div className="container-fluid">
            <button
              className="nav-link navbar-brand"
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
                    onClick={() => navigate("/about")}
                  >
                    About
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    onClick={() => navigate("/projects")}
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
    </>
  )
}