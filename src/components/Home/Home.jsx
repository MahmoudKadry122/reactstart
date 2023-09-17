import React from "react";
import TypedSen from "../TypedSen/TypedSen";
import avatar from "./avataaars.svg";
import styles from "./Home.module.css";
export default function Home() {
  return (
    <>
      <div className={styles.main__content}>
        <div className="container">
          <div className="row">
            <div className={`${styles.home_cont} text-center d-flex`}>
              <div
                className={`${styles.img_cont} my-3 d-flex justify-content-center`}
              >
                <img src={avatar} alt="" className="avatar-img" />
              </div>
              <div className={`${styles.content}`}>
                <h1>Framework start</h1>
                <h2>
                  <TypedSen />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
