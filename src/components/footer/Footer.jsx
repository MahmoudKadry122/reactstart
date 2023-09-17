import React from "react";
import "./../footer/footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer ">
        <div className="container">
          <div className="row justify-content-between align-items-center g-2 p-md-4  gap-md-5 ">
            <div className="col-lg-3  col-12 my-md-1 my-5">
              <h2>LOCATION</h2>
              <p>2215 John Daniel Drive Clark, MO 65243</p>
            </div>
            <div className="col-lg-3  col-12 my-md-1 my-5 ">
              <h2>AROUND THE WEB</h2>
              <div className="justify-content-center gap-5 d-flex">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin-in"></i>
                <i className="fa-solid fa-earth-americas"></i>
              </div>
            </div>
            <div className="col-lg-3  col-12 my-md-1 my-5 ">
              <h2>ABOUT FREELANCER</h2>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
