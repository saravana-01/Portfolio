import React from "react";
import Nav from "./Nav";

type Props = {};

export default function Project({}: Props) {
  return (
    <>
      <header>
        <Nav />
      </header>
      <section className="container-fluid">
        <h2 className="mt-3 text-primary">Project Details</h2>
        <div className="row row-cols-1 row-cols-md-3 g-3 mt-3">
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">
                  HR Portal (Leave Management System)
                </h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Collaborated with a team of 5 members.
                  </li>
                  <li className="list-group-item">
                    Completed the project over a 3-month duration
                  </li>
                  <li className="list-group-item">React TypeScript</li>
                  <li className="list-group-item">
                    <p className="card-text">
                      A role-based web application for employee leave management
                      and IT support requests, involving four roles: Super
                      Admin, HR, Team Lead (TL), and Employee. <br /> <br />
                      <strong className="text-secondary">
                        Leave Management:
                      </strong>
                      Employees can apply for leave, which is reviewed and
                      approved or rejected by HR or TL.
                      <br /> <br />
                      <strong className="text-secondary">
                        IT Support Requests:
                      </strong>
                      Employees can submit complaints related to network,
                      hardware, or software issues, which are sent to the Super
                      Admin. <br /> <br />
                      <strong className="text-secondary">My Role:</strong>{" "}
                      Responsible for implementing CRUD operations to add and
                      manage Employees, HRs, and TLs using backend APIs.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">
                  Tours and Travel Package Booking
                </h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Collaborated with a team of 5 members.
                  </li>
                  <li className="list-group-item">
                    Completed the project over a 4-month duration
                  </li>
                  <li className="list-group-item">React TypeScript</li>
                  <li className="list-group-item">
                    <p className="card-text">
                      This application is designed for booking tours and travel
                      packages and includes three user roles: Super Admin,
                      Admin, and Customer. <br />
                      <br />
                      This is a tours and travel package booking app with 3
                      roles: Super Admin, Admin, and Customer. The system uses
                      role-based UI to display features specific to each user
                      type. <br />
                      <br />
                      Super Admin can add Admins and view all tour packages.
                      Admins can create, update, and delete only their own tour
                      packages. Customers can view and book available tours.{" "}
                      <br />
                      <br />
                      <strong className="text-secondary">In my work,</strong> I
                      implemented the functionality to add Admins, Customers,
                      and Tours with full CRUD operations including create,
                      update, and delete.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">
                  Doctor Appoinment (Bug fixing)
                </h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Team of 2 members.</li>
                  <li className="list-group-item">
                    Fix the bugs over a 1.5 Weeks
                  </li>
                  <li className="list-group-item">
                    <p className="card-text">
                      My colleague and I resolved a login issue that was
                      affecting user access <br />
                      <br />
                      Patients can now successfully write and submit feedback
                      for doctors <br />
                      <br />
                      We improved the feedback functionality to ensure smoother
                      user experience. <br />
                      <br />
                      We fixed a critical bug and addressed issues with
                      personality-related features <br />
                      <br />
                      All known bugs and errors have been cleared
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
