import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Routes";
import FileUpload from "./Pages/FileUpload";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} /> {/* Login page */}
        <Route path="/" element={<ProtectedRoute />}>
          <Route index element={<Dashboard />} />
          <Route path="form" element={<FileUpload />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
