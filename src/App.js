// import { useEffect, useState } from "react";
// import "./App.css";
// import Usertable from "./Usertable";

import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Routes";

// const initialData = {
//   name: "",
//   email: "",
//   password: "",
// };

// function App() {
//   const [data, setData] = useState(initialData);
//   const [newData, setNewData] = useState([]);

//   useEffect(() => {
//     const userData = async () => {
//       const response = await getData();
//       setNewData(response);
//     };
//     userData();
//   }, [newData]);

//   async function getData() {
//     try {
//       const response = await fetch("http://localhost:5000/", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       return response.json();
//     } catch (e) {
//       return "Network error";
//     }
//   }

//   async function onSubmit(e) {
//     e.preventDefault();
//     let result = await fetch("http://localhost:5000/", {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-Type": "application/json",
//         // Accept: "application/json",
//       },
//     });
//     setData(initialData);
//     alert("User Saved");
//     return (result = await result.json());
//   }

//   function onChange(key, value) {
//     setData((prev) => {
//       return { ...prev, [key]: value };
//     });
//   }

//   return (
//     <div>
//       <form onSubmit={(e) => onSubmit(e)}>
//         <div className="label-input-wrapper">
//           <label for="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             value={data.name}
//             onChange={(e) => onChange("name", e.target.value)}
//           />
//         </div>
//         <div className="label-input-wrapper">
//           <label for="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={data.email}
//             onChange={(e) => onChange("email", e.target.value)}
//           />
//         </div>
//         <div className="label-input-wrapper">
//           <label for="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={data.password}
//             onChange={(e) => onChange("password", e.target.value)}
//           />
//         </div>

//         <button>Submit</button>
//       </form>
//       {/* <Usertable name="Sam" email="sam@email.com" id="4454" />; */}
//       {newData.map((val, index) => (
//         <Usertable name={val.name} email={val.email} id={val.id} />
//       ))}
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} /> {/* Login page */}
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
