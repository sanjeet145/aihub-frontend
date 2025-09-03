import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { Routes, Route } from 'react-router-dom';
import './App.css';
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import { Navigate } from "react-router-dom";
import { useIsAuthenticated } from "./context/AuthContext";
import NotFound from "./notFound";

function App() {
  const isAuthenticated = useIsAuthenticated()
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={
        isAuthenticated?<Navigate to="/hub" replace/>:<Login/>
        }/>
      <Route path="/register" element={
        isAuthenticated?<Navigate to="/hub" replace/>:<Register/>
      }/>
      <Route path="/*" element={<ProtectedRoute/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default App
