import React, { useEffect, useState } from "react";
import { Box, HStack, IconButton, useColorMode } from "@chakra-ui/react";
import axios from "axios";
import ProjectsSection from "./ProjectSection";
import Certifications from "./certifications";
import LeftSection from "./LeftSection";
import CTASection from "./CTASection";
import TestimonialList from "./TestimonialsList";
import { Divider } from "@chakra-ui/react";
import VisitorStats from "./VisitorStates";
import { FaChartBar } from "react-icons/fa";
import AboutMeSection from "./AboutMe";

const Portfolio = () => {
  const [user, setUser] = useState({});
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { toggleColorMode } = useColorMode();
  const [showVisitorStats, setShowVisitorStats] = useState(false);
  const [highlightButton, setHighlightButton] = useState(true); // Indicator effect

  useEffect(() => {
    axios
      .get("https://my-portfolio-10zk.onrender.com/api/user-profile")
      .then((response) => setUser(response.data))
      .catch((error) => console.error("Error fetching user profile:", error));

    // Indicator effect disappears after 3 seconds
    setTimeout(() => setHighlightButton(false), 3000);
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

      {/* Visitor Stats Toggle Button */}
      <IconButton
        icon={<FaChartBar />}
        colorScheme="blue"
        position="absolute"
        top={4}
        right={4}
        zIndex="10"
        size="lg"
        onClick={() => setShowVisitorStats(!showVisitorStats)}
        boxShadow={highlightButton ? "0 0 15px #00A3FF" : "none"} // Glow effect on first load
        transition="0.3s ease-in-out"
        _hover={{
          transform: "scale(1.1)",
          boxShadow: "0 0 20px #00A3FF",
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
