import React from "react";
import { Link } from "react-router-dom";
import "./../header/Header.css";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link to="#" className="navbar-brand">
            React FrameWork
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i className="fa-solid fa-bars"></i>
            </span>
          </button>
          <div
            className="collapse navbar-collapse flex-flex-grow-0  "
            id="navbarScroll"
          >
            <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <Link to="" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="portfolio" className="nav-link">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="contact-us" className="nav-link">
                  contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
