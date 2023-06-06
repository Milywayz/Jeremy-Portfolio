import React, { useState } from "react";
import ContactCss from "./contact.module.css";

export default function Contact() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="row">
        <div className="col">
          <h4>Email:</h4>
        </div>
        <div className="col">
          <form>
            <input
              name="email"
              type="email"
              placeholder="email"
              style={{ width: "300px", height: "75px" }}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
