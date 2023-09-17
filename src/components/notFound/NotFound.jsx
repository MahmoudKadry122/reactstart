import React from "react";
import notFoundimg from "./concept-404-error-web-page-with-astronaut-open-space-different-planets_145666-1261.jpg";

export default function NotFound() {
  return (
    <div className="notfound">
      <img src={notFoundimg} alt="" className="notfoundimg w-100  " />
    </div>
  );
}
