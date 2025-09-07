import React, { useEffect, useState } from "react";
import { Box, IconButton, useColorMode, Divider } from "@chakra-ui/react";
import axios from "axios";
import ProjectsSection from "./ProjectSection";
import Certifications from "./certifications";
import LeftSection from "./LeftSection";
import CTASection from "./CTASection";
import TestimonialList from "./TestimonialsList";
import VisitorStats from "./VisitorStates";
import AboutMeSection from "./AboutMe";
import { FaChartBar, FaBug } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const [user, setUser] = useState({});
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { toggleColorMode } = useColorMode();
  const [showVisitorStats, setShowVisitorStats] = useState(false);
  const [highlightButton, setHighlightButton] = useState(true); // Indicator effect
  const [highlightProblem, setHighlightProblem] = useState(true); // Problem indicator
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://my-portfolio-lw4x.vercel.app/api/user-profile")
      .then((response) => setUser(response.data))
      .catch((error) => console.error("Error fetching user profile:", error));

    // Indicators off after 3 sec
    setTimeout(() => setHighlightButton(false), 3000);
    setTimeout(() => setHighlightProblem(false), 4000);
  }, []);

  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      minHeight="100vh"
      bg={isDarkMode ? "gray.900" : "white"}
      p={5}
      color={isDarkMode ? "white" : "black"}
      position="relative"
    >
      {/* Left Sidebar */}
      <LeftSection
        user={user}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      {/* Visitor Stats Button */}
      <IconButton
        icon={<FaChartBar />}
        colorScheme="blue"
        position="absolute"
        top={4}
        right={4}
        zIndex="10"
        size="lg"
        onClick={() => setShowVisitorStats(!showVisitorStats)}
        boxShadow={highlightButton ? "0 0 15px #00A3FF" : "none"}
        transition="0.3s ease-in-out"
        _hover={{
          transform: "scale(1.1)",
          boxShadow: "0 0 20px #00A3FF",
        }}
      />

      {/* Problem List Redirect Button */}
      <IconButton
        icon={<FaBug />}
        colorScheme="red"
        position="absolute"
        top={16}
        right={4}
        zIndex="10"
        size="lg"
        onClick={() => navigate("/problem-list")}
        boxShadow={highlightProblem ? "0 0 15px #FF4C4C" : "none"}
        transition="0.3s ease-in-out"
        _hover={{
          transform: "scale(1.1)",
          boxShadow: "0 0 20px #FF4C4C",
        }}
      />

      {/* Right Section */}
      <Box
        flex="1"
        ml={{ base: 0, md: 6 }}
        p={5}
        bg={isDarkMode ? "gray.800" : "gray.100"}
        borderRadius="lg"
        boxShadow="xl"
      >
        {showVisitorStats && <VisitorStats />}

        <AboutMeSection />
        <ProjectsSection />
        <Certifications />
        <Divider my={4} borderColor="gray.600" />
        <TestimonialList />
        <Divider my={4} borderColor="gray.600" />
        <CTASection />
      </Box>
    </Box>
  );
};

export default Portfolio;
