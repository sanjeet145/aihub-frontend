import { Navigate,Routes, Route } from "react-router-dom";
import { useIsAuthenticated } from "../context/AuthContext";
import Profile from "../components/Profile";
import Hub from "../components/Hub";
import NotFound from "../notFound";
import MaternalRiskAnalyzer from "../components/models/MaternalRiskAnalyzer";
import SentimentalAnalysis from "../components/models/SentimentalAnalysis";
import Translator from "../components/models/Translator";
import PdfAnalyzer from "../components/models/PdfAnalyzer";

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
      <Route path="hub/maternal-risk-analyzer" element={<MaternalRiskAnalyzer/>}/>
      <Route path="hub/sentimental-analysis" element={<SentimentalAnalysis/>}/>
      <Route path="hub/translator" element={<Translator/>}/>
      <Route path="hub/pdfanalyzer" element={<PdfAnalyzer/>}/>
      <Route path="*" element={<NotFound/>}>
      </Route>
    </Routes>
  );
};

export default ProtectedRoute;
