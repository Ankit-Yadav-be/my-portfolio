import React, { useState } from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Divider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { FaRobot, FaBrain } from "react-icons/fa";
import LeetCodeWidget from "./LeetcodeWidgets";
import HackerRankWidget from "./HakerRankWidgets";

const AboutMeSection = () => {
  const [usernamel] = useState("codersourya123");
  const [usernameh] = useState("ay870421");
  const glowColor = useColorModeValue(
    "rgba(0, 255, 255, 0.8)",
    "rgba(0, 255, 255, 1)"
  );

  return (
    <Box
      textAlign="center"
      my={10}
      p={8}
      bgGradient="linear(to-r, #000428, #004e92)"
      borderRadius="lg"
      boxShadow="0px 4px 25px rgba(0, 200, 255, 0.4)"
      color="cyan.200"
      maxW={{ base: "95%", md: "750px" }}
      mx="auto"
      position="relative"
      overflow="hidden"
    >
      {/* Floating Glow Effect */}
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.02, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{
          position: "absolute",
          top: "-10%",
          left: "-10%",
          width: "120%",
          height: "120%",
          background:
            "radial-gradient(circle, rgba(0, 100, 255, 0.3), transparent)",
          zIndex: 0,
        }}
      ></motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ position: "relative", zIndex: 2 }}
      >
        {/* Name & Title */}
        <Text
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="bold"
          bgClip="text"
          bgGradient="linear(to-r, cyan.400, white)"
          textShadow={`0px 0px 15px ${glowColor}`}
        >
          Hi, I'm{" "}
          <Text as="span" color="yellow.300">
            Ankit Yadav
          </Text>
        </Text>

        {/* Typing Effect with Icons */}
        <HStack justify="center" mt={2} spacing={3}>
          <Icon as={FaRobot} boxSize={5} color="cyan.300" />
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="medium">
            <ReactTyped
              strings={[
                "Exploring Generative AI 🤖",
                "Building AI Agents 🚀",
                "MERN Stack Developer 💻",
                "Solving Real-World Problems 🌍",
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </Text>
          <Icon as={FaBrain} boxSize={5} color="cyan.300" />
        </HStack>

        {/* Glowing Divider */}
        <Divider
          my={5}
          borderColor="cyan.600"
          borderWidth="2px"
          boxShadow={`0px 0px 15px ${glowColor}`}
        />

        {/* LeetCode and HackerRank Section */}
        <Text fontSize="xl" fontWeight="bold" color="cyan.100" mt={4}>
          My Coding Profiles
        </Text>
        <HStack spacing={5} mt={6} justify="center" flexWrap="wrap" px={4}>
          {/* LeetCode Widget */}
          <Box
            p={4}
            bg="gray.800"
            borderRadius="lg"
            boxShadow="0px 4px 25px rgba(0, 200, 255, 0.6)"
            _hover={{
              bg: "cyan.700",
              transform: "scale(1.05)",
              boxShadow: "0px 4px 40px rgba(0, 255, 255, 0.8)",
            }}
            transition="all 0.3s ease"
          >
            <LeetCodeWidget usernamel={usernamel} />
          </Box>

          {/* HackerRank Widget */}
          <Box
            p={4}
            bg="gray.800"
            borderRadius="lg"
            boxShadow="0px 4px 25px rgba(0, 200, 255, 0.6)"
            _hover={{
              bg: "cyan.700",
              transform: "scale(1.05)",
              boxShadow: "0px 4px 40px rgba(0, 255, 255, 0.8)",
            }}
            transition="all 0.3s ease"
          >
            <HackerRankWidget usernameh={usernameh} />
          </Box>
        </HStack>
      </motion.div>
    </Box>
  );
};

export default AboutMeSection;
