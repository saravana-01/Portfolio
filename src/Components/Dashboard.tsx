import React from 'react'

type PropsName = {
  name:string
}

export const Dashboard = (props:PropsName) =>{
return(
    <>
     <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="col-md-6">
            {/* <img src={saravna} className="image-wrapper-right" /> */}
          </div>
        </div>
        <div className="col-md-6">
          <div className="textContent">
            <h1>Hiiiii!!!!!</h1>
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
    </>
)
}