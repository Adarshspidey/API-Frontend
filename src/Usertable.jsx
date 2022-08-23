import React from "react";
import "./App.css";

const Usertable = ({ name, email, id }) => {
  return (
    <div className="table">
      <div className="name">{name}</div>
      <div className="email">{email}</div>
      <div className="id">{id}</div>
    </div>
  );
};

export default Usertable;
