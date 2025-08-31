import { Navigate,Routes, Route } from "react-router-dom";
import { useIsAuthenticated } from "../context/AuthContext";
import Profile from "../components/Profile";
import Hub from "../components/Hub";
import NotFound from "../notFound";
import MaternalRiskAnalyzer from "../components/MaternalRiskAnalyzer";

const ProtectedRoute = () => {
  const isAuthenticated = useIsAuthenticated();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Routes>
      <Route path="profile" element={<Profile/>}>
      </Route>
      <Route path="hub" element={<Hub/>}>
      </Route>
      <Route path="hub/maternal-risk-analyzer" element={<MaternalRiskAnalyzer/>}>
      </Route>
      <Route path="*" element={<NotFound/>}>
      </Route>
    </Routes>
  );
};

export default ProtectedRoute;
