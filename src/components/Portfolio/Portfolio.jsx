import React from "react";
import imgOne from "./poert1.png";
import imgTwo from "./port2.png";
import imgThree from "./port3.png";
import { useEffect, useState } from "react";
import "./../Portfolio/Portfolio.css";

export default function Portfolio() {
  let targetBg;
  const clickHandle = (event) => {
    targetBg = event.target.offsetParent.querySelector("img").src;
    let x = document.querySelector(".test img ");
    x.src = targetBg;
    document.querySelector(".test").classList.remove("d-none");
    document.querySelector(".test").classList.add("d-block");
  };
  const closeModal = (e) => {
    let x = e.target;

    if (x !== document.getElementById("pop-up")) {
      document.querySelector(".test").classList.remove("d-block");
      document.querySelector(".test").classList.add("d-none");
    } else {
      console.log("opps you clicked on the img");
    }
  };
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="row gy-3 position-relative">
            <div className="col-lg-4 col-md-6  " onClick={clickHandle}>
              <div className="col-content position-relative ">
                <img src={imgOne} alt="" className="w-100" />
                <div className="plus-icon position-absolute start-0 end-0  top-0 bottom-0 w-100 d-flex ">
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6  " onClick={clickHandle}>
              <div className="col-content position-relative ">
                <img src={imgTwo} alt="" className="w-100" />
                <div className="plus-icon position-absolute start-0 end-0  top-0 bottom-0 w-100 d-flex ">
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6  " onClick={clickHandle}>
              <div className="col-content position-relative ">
                <img src={imgThree} alt="" className="w-100" />
                <div className="plus-icon position-absolute start-0 end-0  top-0 bottom-0 w-100 d-flex ">
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6  " onClick={clickHandle}>
              <div className="col-content position-relative ">
                <img src={imgOne} alt="" className="w-100" />
                <div className="plus-icon position-absolute start-0 end-0  top-0 bottom-0 w-100 d-flex ">
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6  " onClick={clickHandle}>
              <div className="col-content position-relative ">
                <img src={imgTwo} alt="" className="w-100" />
                <div className="plus-icon position-absolute start-0 end-0  top-0 bottom-0 w-100 d-flex ">
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6  " onClick={clickHandle}>
              <div className="col-content position-relative ">
                <img src={imgThree} alt="" className="w-100" />
                <div className="plus-icon position-absolute start-0 end-0  top-0 bottom-0 w-100 d-flex ">
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`test  position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center d-none`}
        onClick={closeModal}
      >
        <img src={`url(${targetBg})`} alt="" className="w-50" id="pop-up" />
      </div>
    </>
  );
}
