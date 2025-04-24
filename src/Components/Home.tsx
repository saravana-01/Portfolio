import React, { useState } from "react";
import "../Components/Home.css";
import saravna from "../Components/InShot_20250416_163806423.png";
interface ViewersName {
  // onSend: (value: string) => void;
  namee:string
}


const Home = (props:ViewersName) => {
  const [name, setName] = useState("");

  const go = () => {
   
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="col-md-6">
            <img src={saravna} className="image-wrapper-right" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="textContent">
            <form>
              <input
                className="form-control"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button className="btn btn-primary">Go</button>
            </form>
          </div>
          <div className="logos text-center">
            <a
              href="https://www.instagram.com/saravanaaaaahhhhh/?igsh=ZWhxNWJlYjVxeDh0#"
              className="btn-danger m-3 logo"
            >
              <i className="fa-brands fa-instagram logo logo-ig"></i>
            </a>
            <a
              href="https://www.facebook.com/share/1KojYvjaMd/"
              className="btn-primary m-3 logo"
            >
              <i className="fa-brands fa-facebook logo-fb"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/saravana-pandiyan-083b32277"
              className="btn-info m-3 logo"
            >
              <i className="fa-brands fa-linkedin logo-ln"></i>
            </a>
            <a
              href="https://github.com/saravana-01"
              className="btn-dark m-3 logo "
            >
              <i className="fa-brands fa-github logo-git"></i>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=+919384531400"
              className="btn-info m-3 logo"
            >
              <i className="fa-brands fa-whatsapp logo-wp"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
