import React from "react";
import "./App.css";

const Usertable = ({ name, mark, age, profilePic }) => {
  return (
    <div className="table">
      <div className="name">{name}</div>
      <div className="email">{mark}</div>
      <div className="id">{age}</div>

      {profilePic && (
        <img src={`data:image/jpeg;base64,${profilePic}`} alt="Profile" />
      )}
    </div>
  );
};

export default Usertable;
