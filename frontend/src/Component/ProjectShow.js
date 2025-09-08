import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  useColorMode,
  Divider,
  Tooltip,
  Fade,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import ProjectsSection from "./ProjectSection";
import Certifications from "./certifications";
import LeftSection from "./LeftSection";
import CTASection from "./CTASection";
import TestimonialList from "./TestimonialsList";
import VisitorStats from "./VisitorStates";
import AboutMeSection from "./AboutMe";
import { FaChartBar } from "react-icons/fa";

const Portfolio = () => {
  const [user, setUser] = useState({});
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showVisitorStats, setShowVisitorStats] = useState(false);
  const [highlightButton, setHighlightButton] = useState(true);
  const [showIntro, setShowIntro] = useState(true); 
  const { toggleColorMode } = useColorMode();

  useEffect(() => {
    axios
      .get("https://my-portfolio-lw4x.vercel.app/api/user-profile")
      .then((response) => setUser(response.data))
      .catch((error) => console.error("Error fetching user profile:", error));

    setTimeout(() => setHighlightButton(false), 3000);
    setTimeout(() => setShowIntro(false), 7000); 
  }, []);

  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      minHeight="100vh"
      bg={isDarkMode ? "gray.900" : "white"}
      color={isDarkMode ? "white" : "black"}
      pt={{ base: 20, md: 24 }} // Give space for fixed Navbar
      position="relative"
    >
      {/* Left Sidebar */}
      <LeftSection
        user={user}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      {/* Visitor Stats Icon */}
      <Tooltip label="Check website visitor analytics" placement="left">
        <IconButton
          icon={<FaChartBar />}
          colorScheme="blue"
          position="fixed"
          top={{ base: "90px", md: "80px" }} // Adjust for Navbar height
          right="20px"
          zIndex="150" // Higher than Navbar & Sidebar
          size="lg"
          onClick={() => setShowVisitorStats(!showVisitorStats)}
          boxShadow={highlightButton ? "0 0 15px #00A3FF" : "none"}
          transition="0.3s ease-in-out"
          _hover={{
            transform: "scale(1.1)",
            boxShadow: "0 0 20px #00A3FF",
          }}
        />
      </Tooltip>

     

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
