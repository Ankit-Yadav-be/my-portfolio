import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import ProjectShow from "./Component/ProjectShow";
import AddProjectForm from "./Component/AddProjectForm";
import TrackVisitor from "./Component/TrackVisitors";
import VisitorDashboard from "./Component/VisitorDashboard";
import SkillsSection from "./Component/SkillSection";
import ProblemsList from "./Component/ProblemList";
import ProblemDetail from "./Component/ProblemDetail";
import AdminPanel from "./Component/AdminPanel";
import ProblemsExplorer from "./Component/ProblemExplorer";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <Router>
      <Box>
        {/* 🔹 Fixed Navbar */}
        <Navbar />

        {/* 🔹 Main Content Wrapper */}
        <Box pt="80px"> {/* 80px padding for Navbar height */}
          <TrackVisitor />
          <Routes>
            <Route path="/" element={<ProjectShow />} />
            <Route path="/dsa" element={<ProblemsExplorer />} />
            <Route path="/admin-dsa" element={<AdminPanel />} />
            <Route path="/problem-list" element={<ProblemsList />} />
            <Route path="/problems/:id" element={<ProblemDetail />} />
            <Route path="/skill" element={<SkillsSection />} />
            <Route path="/add-project" element={<AddProjectForm />} />
            <Route path="/admin" element={<VisitorDashboard />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
