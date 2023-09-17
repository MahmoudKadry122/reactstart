import { useState } from "react";
import { useEffect } from "react";
function ContactUs() {
  return (
    <>
      <div className="container">
        <div className="row gap-3">
          <section className="section-padding">
            <form action="" className="gap-3 offset-lg-2 col-lg-8 col-md-6">
              <div className="name">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Name"
                  className="form-control"
                />
              </div>
              <div className="number my-4">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Age"
                />
              </div>
              <div className="email my-4">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="password my-4">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="submit">
                <button
                  type="submit"
                  className="btn mt-4 text-white"
                  style={{ background: "#1abc9c" }}
                >
                  Submit
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}
export default ContactUs;
