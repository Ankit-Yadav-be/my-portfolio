import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Spinner } from "@chakra-ui/react";

// 🔥 Lazy-loaded components
const ProjectShow = lazy(() => import("./Component/ProjectShow"));
const AddProjectForm = lazy(() => import("./Component/AddProjectForm"));
const TrackVisitor = lazy(() => import("./Component/TrackVisitors"));
const VisitorDashboard = lazy(() => import("./Component/VisitorDashboard"));
const SkillsSection = lazy(() => import("./Component/SkillSection"));
const ProblemsList = lazy(() => import("./Component/ProblemList"));
const ProblemDetail = lazy(() => import("./Component/ProblemDetail"));
const AdminPanel = lazy(() => import("./Component/AdminPanel"));
const ProblemsExplorer = lazy(() => import("./Component/ProblemExplorer"));
const Navbar = lazy(() => import("./Component/Navbar"));

// ⭐ Detail Page
const ProjectDetailPage = lazy(() =>
  import("./pages/ProjectDetailPage")
);

function App() {
  return (
    <Router>
      <Box>
        <Suspense
          fallback={
            <Box
              h="100vh"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Spinner size="xl" color="teal.400" thickness="4px" />
            </Box>
          }
        >
          <Navbar />

          <Box pt="80px">
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

              {/* ⭐ Lazy-loaded project detail */}
              <Route
                path="/project/:id"
                element={<ProjectDetailPage />}
              />
            </Routes>
          </Box>
        </Suspense>
      </Box>
    </Router>
  );
}

export default App;
