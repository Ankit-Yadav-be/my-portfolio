import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  useColorMode,
  Divider,
  Tooltip,
  Fade,
  Text,
  Button,
  HStack,
  VStack,
} from "@chakra-ui/react";
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
  const [highlightButton, setHighlightButton] = useState(true);
  const [highlightProblem, setHighlightProblem] = useState(true);
  const [showIntro, setShowIntro] = useState(true); 
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://my-portfolio-lw4x.vercel.app/api/user-profile")
      .then((response) => setUser(response.data))
      .catch((error) => console.error("Error fetching user profile:", error));

    setTimeout(() => setHighlightButton(false), 3000);
    setTimeout(() => setHighlightProblem(false), 4000);
    setTimeout(() => setShowIntro(false), 7000); 
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
      {/* 🔹 Top Nav Buttons */}
      <HStack
        spacing={6}
        position="absolute"
        top={4}
        left="50%"
        transform="translateX(-50%)"
        zIndex="20"
        backdropFilter="blur(12px)"
        bg={isDarkMode ? "rgba(30,30,30,0.7)" : "rgba(255,255,255,0.7)"}
        px={6}
        py={3}
        borderRadius="2xl"
        boxShadow="xl"
      >
        <Button
          size="md"
          colorScheme="blue"
          fontWeight="bold"
          leftIcon={<FaBug />}
          onClick={() => navigate("/problem-list")}
          _hover={{
            transform: "scale(1.05)",
            bgGradient: "linear(to-r, blue.400, blue.600)",
          }}
        >
          🌐 Web
        </Button>
        <Button
          size="md"
          colorScheme="teal"
          fontWeight="bold"
          leftIcon={<FaBug />}
          onClick={() => navigate("/dsa")}
          _hover={{
            transform: "scale(1.05)",
            bgGradient: "linear(to-r, teal.400, teal.600)",
          }}
        >
          💻 DSA
        </Button>
      </HStack>

      {/* Left Sidebar */}
      <LeftSection
        user={user}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      {/* Visitor Stats Button */}
      <Tooltip label="Check website visitor analytics" placement="left">
        <IconButton
          icon={<FaChartBar />}
          colorScheme="blue"
          position="absolute"
          top={16}
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
      </Tooltip>

      {/* Animated Intro Banner */}
      {showIntro && (
        <Fade in={showIntro}>
          <Box
            position="absolute"
            top={28}
            right={20}
            bgGradient="linear(to-r, pink.400, red.500)"
            px={4}
            py={2}
            borderRadius="xl"
            boxShadow="2xl"
            zIndex="9"
          >
            <Text fontWeight="bold" color="white">
              🚀 NEW: Explore Web & DSA Problems!
            </Text>
          </Box>
        </Fade>
      )}

      {/* Right Section */}
      <Box
        flex="1"
        ml={{ base: 0, md: 6 }}
        p={5}
        bg={isDarkMode ? "gray.800" : "gray.100"}
        borderRadius="lg"
        boxShadow="xl"
      >
        <VStack spacing={6} align="stretch">
          {showVisitorStats && <VisitorStats />}

          <AboutMeSection />
          <ProjectsSection />
          <Certifications />
          <Divider my={4} borderColor="gray.600" />
          <TestimonialList />
          <Divider my={4} borderColor="gray.600" />
          <CTASection />
        </VStack>
      </Box>
    </Box>
  );
};

export default Portfolio;
