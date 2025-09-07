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

function App() {
  return (
    <Router>
      <Box>
        <TrackVisitor />
        <Routes>
          <Route path="/" element={<ProjectShow />} />
           <Route path="/problem-list" element={<ProblemsList />} />
           <Route path="/problems/:id" element={<ProblemDetail />} />
          <Route path="/skill" element={<SkillsSection />} />
          <Route path="/add-project" element={<AddProjectForm />} />
          <Route path="/admin" element={<VisitorDashboard />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
