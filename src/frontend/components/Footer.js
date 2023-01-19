import React from "react";
import "./Footer.css";

export default function Header(props) {
  return (
    <div className="footer">
      <span>{props.note} {new Date().getFullYear()}</span>
    </div>
  );
}
