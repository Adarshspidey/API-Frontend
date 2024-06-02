import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import authService from "../../Service/authService";

const FileUpload = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    mark: "",
    profilePic: null,
  });
  const goto = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profilePic: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = authService.getCurrentUser();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("age", formData.age);
    data.append("mark", formData.mark);
    data.append("profilePic", formData.profilePic); // Ensure this matches the field name in Multer

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users",
        data,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      goto("/");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Mark:</label>
        <input
          type="text"
          name="mark"
          value={formData.mark}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>File Upload:</label>
        <input
          type="file"
          name="profilePic"
          onChange={handleFileChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FileUpload;
