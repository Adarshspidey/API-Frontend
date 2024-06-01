import React, { useEffect, useState } from "react";
import "./style.css";
import Usertable from "../../Usertable";
import authService from "../../Service/authService";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const goto = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const user = authService.getCurrentUser();
      if (user && user.token) {
        try {
          const response = await axios.get("http://localhost:5000/api/users", {
            headers: { Authorization: `Bearer ${user.token}` },
          });
          setData(response.data);
        } catch (err) {
          setError("Failed to fetch data");
        }
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div className="button-end">
        <button
          onClick={() => {
            authService.logout();
            goto("/login");
          }}
        >
          Logout
        </button>
      </div>
      Dashboard
      {data.map((val, index) => (
        <Usertable name={val.name} mark={val.mark} age={val.age} profilePic={val.profilePic} />
      ))}
    </div>
  );
};

export default Dashboard;
