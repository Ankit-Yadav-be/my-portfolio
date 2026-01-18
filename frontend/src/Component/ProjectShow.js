import { useEffect, useState } from "react";
import { Box, Divider } from "@chakra-ui/react";
import axios from "axios";

import ProjectsSection from "./ProjectSection";
import Certifications from "./certifications";
import LeftSection from "./LeftSection";
import CTASection from "./CTASection";
import TestimonialList from "./TestimonialsList";
import AboutMeSection from "./AboutMe";
import StartTupCarousel from "./StartTupCarousel";

const Portfolio = () => {
  const [user, setUser] = useState({});
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    axios
      .get("https://my-portfolio-lw4x.vercel.app/api/user-profile")
      .then((response) => setUser(response.data))
      .catch((error) => console.error("Error fetching user profile:", error));
  }, []);

  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      minHeight="100vh"
      bg={isDarkMode ? "gray.900" : "white"}
      color={isDarkMode ? "white" : "black"}
      pt={{ base: 20, md: 24 }}
      position="relative"
    >
      {/* Left Sidebar */}
      <LeftSection
        user={user}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
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
        <AboutMeSection />
        <StartTupCarousel />
        <ProjectsSection my={2} />
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
