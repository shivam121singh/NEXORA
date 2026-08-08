import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import LandingPage from "./pages/landing";
import Authentication from "./pages/authentication";
import HomeComponent from "./pages/home";
import History from "./pages/history";
import VideoMeetComponent from "./pages/VideoMeet";

// Change "context" to "contexts" only if that's your actual folder name.
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/home" element={<HomeComponent />} />
          <Route path="/history" element={<History />} />
          <Route path="/:url" element={<VideoMeetComponent />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;