import React from "react";
import "../Components/Home.css";
import saravna from "../Components/InShot_20250416_144505194.png";

const Home: React.FC = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="col-md-6">
            <img src={saravna} className="image-wrapper-right"/>
          </div>
          {/* <div >
            <img className="image-wrapper-right" src={saravna} />
          </div> */}
        </div>

        <div className="col-md-6 d-flex flex-row justify-content-center align-items-center">
          <div className="text-center">
            <a
              href="https://www.instagram.com/saravanaaaaahhhhh/?igsh=ZWhxNWJlYjVxeDh0#"
              className="btn-danger m-3 logo"
            >
              <i className="fa-brands fa-instagram logo"></i>
            </a>
            <a
              href="https://www.facebook.com/share/1KojYvjaMd/"
              className="btn-primary m-3 logo"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/saravana-pandiyan-083b32277"
              className="btn-info m-3 logo"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/saravana-01"
              className="btn-dark m-3 logo "
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=+919384531400"
              className="btn-info m-3 logo"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
