import React, { useState } from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Divider,
  Icon,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaBrain,
  FaBriefcase,
  FaCalendarAlt,
  FaTools,
} from "react-icons/fa";
import LeetCodeWidget from "./LeetcodeWidgets";
import HackerRankWidget from "./HakerRankWidgets";

const MotionBox = motion(Box);

const AboutMeSection = () => {
  const [usernamel] = useState("codersourya123");
  const [usernameh] = useState("ay870421");
  const glowColor = useColorModeValue(
    "rgba(0, 255, 255, 0.9)",
    "rgba(0, 255, 255, 1)"
  );

  return (
    <Box
      textAlign="center"
      my={10}
      p={10}
      bgGradient="linear(to-r, #000428, #004e92)"
      borderRadius="2xl"
      boxShadow="0px 4px 25px rgba(0, 200, 255, 0.4)"
      color="cyan.200"
      maxW={{ base: "95%", md: "900px" }}
      mx="auto"
      position="relative"
      overflow="hidden"
    >
      {/* Floating Glow Background */}
      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{
          position: "absolute",
          top: "-15%",
          left: "-15%",
          width: "130%",
          height: "130%",
          background:
            "radial-gradient(circle, rgba(0, 150, 255, 0.25), transparent)",
          zIndex: 0,
        }}
      />

      {/* ----------------------------- */}
      {/* ⭐ EXPERIENCE SECTION FIRST ⭐ */}
      {/* ----------------------------- */}

      <MotionBox
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        zIndex={2}
      >
        <Text
          fontSize="3xl"
          fontWeight="bold"
          bgGradient="linear(to-r, cyan.300, yellow.300)"
          bgClip="text"
          mb={6}
          textShadow={`0 0 18px ${glowColor}`}
        >
          Work Experience
        </Text>

        <MotionBox
          p={6}
          borderRadius="xl"
          bg="rgba(0,0,0,0.4)"
          border="1px solid rgba(0,255,255,0.4)"
          boxShadow="0px 0px 25px rgba(0,255,255,0.3)"
          whileHover={{ scale: 1.03 }}
          transition="0.3s"
        >
          <HStack spacing={3} justify="center">
            <Icon as={FaBriefcase} boxSize={6} color="yellow.300" />
            <Text fontSize="2xl" fontWeight="bold" color="white">
              Android Developer Intern — LitAmor
            </Text>
          </HStack>

          {/* Time */}
          <HStack justify="center" mt={2}>
            <Icon as={FaCalendarAlt} color="cyan.300" />
            <Text fontSize="md" color="cyan.200">
              Jul 2025 – Present
            </Text>
          </HStack>

          {/* Tech Stack */}
          <HStack spacing={3} mt={3} justify="center">
            <Badge colorScheme="cyan" variant="solid">
              React Native
            </Badge>
            <Badge colorScheme="yellow" variant="subtle">
              Firebase
            </Badge>
            <Badge colorScheme="purple" variant="subtle">
              Firestore
            </Badge>
          </HStack>

          {/* Work Details */}
          <VStack mt={4} spacing={3} px={4}>
            <HStack align="start">
              <Icon as={FaTools} color="yellow.300" mt={1} />
              <Text textAlign="left" fontSize="md">
                Built a cross-platform mobile app with secure authentication,
                state management & event tracking.
              </Text>
            </HStack>

            <HStack align="start">
              <Icon as={FaTools} color="yellow.300" mt={1} />
              <Text textAlign="left" fontSize="md">
                Migrated REST APIs to Cloud Functions and optimized queries,
                boosting backend efficiency by{" "}
                <Text as="span" color="yellow.200" fontWeight="bold">
                  40%
                </Text>{" "}
                and improving real-time app performance by{" "}
                <Text as="span" color="yellow.200" fontWeight="bold">
                  25%
                </Text>
                .
              </Text>
            </HStack>
          </VStack>
        </MotionBox>

        {/* Divider */}
        <Divider
          my={8}
          borderColor="cyan.600"
          borderWidth="2px"
          boxShadow={`0px 0px 15px ${glowColor}`}
        />
      </MotionBox>

      {/* ----------------------------- */}
      {/*  PROFILE INTRO SECTION BELOW  */}
      {/* ----------------------------- */}

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ position: "relative", zIndex: 2 }}
      >
        <Text
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="bold"
          bgClip="text"
          bgGradient="linear(to-r, cyan.300, white)"
          textShadow={`0px 0px 15px ${glowColor}`}
        >
          Hi, I'm{" "}
          <Text as="span" color="yellow.300">
            Ankit Yadav
          </Text>
        </Text>

        {/* Typing Text */}
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

        <Divider
          my={6}
          borderColor="cyan.600"
          borderWidth="2px"
          boxShadow={`0px 0px 15px ${glowColor}`}
        />

        {/* Coding Profiles */}
        <Text fontSize="xl" fontWeight="bold" color="cyan.100">
          My Coding Profiles
        </Text>

        <HStack spacing={6} mt={6} justify="center" flexWrap="wrap" px={4}>
          <Box
            p={4}
            bg="gray.800"
            borderRadius="lg"
            boxShadow="0px 4px 25px rgba(0, 200, 255, 0.6)"
            _hover={{
              transform: "scale(1.06)",
              bg: "cyan.700",
              boxShadow: "0px 0px 45px rgba(0, 255, 255, 0.9)",
            }}
            transition="0.3s"
          >
            <LeetCodeWidget usernamel={usernamel} />
          </Box>

          <Box
            p={4}
            bg="gray.800"
            borderRadius="lg"
            boxShadow="0px 4px 25px rgba(0, 200, 255, 0.6)"
            _hover={{
              transform: "scale(1.06)",
              bg: "cyan.700",
              boxShadow: "0px 0px 45px rgba(0, 255, 255, 0.9)",
            }}
            transition="0.3s"
          >
            <HackerRankWidget usernameh={usernameh} />
          </Box>
        </HStack>
      </motion.div>
    </Box>
  );
};

export default AboutMeSection;
