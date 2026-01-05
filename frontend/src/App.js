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
const SystemDesign = lazy(() => import("./Component/SystemDesign"));
const Hld = lazy(() => import("./Component/Hld"));
const Lld = lazy(() => import("./Component/Lld"));
const Oops = lazy(() => import("./Component/Oops"));
const UML = lazy(() => import("./Component/UML"));
const Solid = lazy(() => import("./Component/Solid"));
const NetworkingProtocols = lazy(() => import("./Component/NetworkingProtocols"));
const CapTheorem = lazy(() => import("./Component/CapTheorem"));
const Microservices = lazy(() => import("./Component/Microservices"));
const ScaleApp = lazy(() => import("./Component/ScaleApp"));
const KafkaDesign = lazy(() => import("./Component/Kafka"));
const DBMS = lazy(() => import("./Component/DBMS"));


const JavascriptInterview = lazy(() =>
  import("./Component/JavascriptInterview")
);

// ⭐ Detail Page
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage"));

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
              <Route path="/system-design" element={<SystemDesign />} />
              <Route path="/dbms" element={<DBMS />} />
              <Route path="/system-design/hld" element={<Hld />} />
              <Route path="/system-design/hld/network-protocols" element={<NetworkingProtocols />} />
              <Route path="/system-design/hld/cap-theorem" element={<CapTheorem />} />
              <Route path="/system-design/hld/microservices" element={<Microservices />} />
              <Route path="/system-design/hld/scaling-1m-users" element={<ScaleApp />} />
               <Route path="/system-design/hld/scaling-1m-users/kafka" element={<KafkaDesign />} />
              <Route path="/system-design/lld" element={<Lld />} />
              <Route path="/system-design/lld/oops" element={<Oops />} />
              <Route path="/system-design/lld/uml" element={<UML />} />
              <Route
                path="/javascript-interview"
                element={<JavascriptInterview />}
              />
              <Route path="/system-design/lld/solid" element={<Solid />} />

              {/* ⭐ Lazy-loaded project detail */}
              <Route path="/project/:id" element={<ProjectDetailPage />} />
            </Routes>
          </Box>
        </Suspense>
      </Box>
    </Router>
  );
}

export default App;
