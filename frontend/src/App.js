import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import ProjectShow from "./Component/ProjectShow";
import AddProjectForm from "./Component/AddProjectForm";
import TrackVisitor from "./Component/TrackVisitors";
import VisitorDashboard from "./Component/VisitorDashboard";
import SkillsSection from "./Component/SkillSection";

function App() {
  return (
    <Router>
      <Box>
        <TrackVisitor />
        <Routes>
          <Route path="/" element={<ProjectShow />} />
          <Route path="/skill" element={<SkillsSection />} />
          <Route path="/add-project" element={<AddProjectForm />} />
          <Route path="/admin" element={<VisitorDashboard />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
