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
const MotionDiv = motion.div;

const AboutMeSection = () => {
  const [usernamel] = useState("codersourya123");
  const [usernameh] = useState("ay870421");

  const glow = useColorModeValue(
    "rgba(0,255,255,0.5)",
    "rgba(0,255,255,0.65)"
  );

  return (
    <Box
      position="relative"
      p={10}
      my={14}
      maxW="1000px"
      mx="auto"
      borderRadius="2xl"
      bg="linear-gradient(135deg, #00111f, #002c49)"
      boxShadow="0px 0px 40px rgba(0,255,255,0.25)"
      overflow="hidden"
    >
      {/* ⚡ GRID BACKGROUND */}
      <Box
        position="absolute"
        inset={0}
        backgroundImage="radial-gradient(circle at center, rgba(0,120,255,0.12), transparent 70%)"
        zIndex={0}
      />
      <MotionDiv
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        style={{
          position: "absolute",
          top: "-20%",
          right: "-20%",
          width: "350px",
          height: "350px",
          background: "radial-gradient(circle, rgba(0,200,255,0.25), transparent)",
          borderRadius: "50%",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      {/* ------------------------------------------------------------------ */}
      {/*                     ⭐ EXPERIENCE — PREMIUM FIRST ⭐                 */}
      {/* ------------------------------------------------------------------ */}

      <MotionBox
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        textAlign="center"
        zIndex={2}
        position="relative"
      >
        <Text
          fontSize="3xl"
          fontWeight="bold"
          bgGradient="linear(to-r, cyan.300, cyan.100)"
          bgClip="text"
          textShadow={`0 0 20px ${glow}`}
        >
          Work Experience
        </Text>

        {/* Card */}
        <MotionBox
          mt={6}
          p={6}
          bg="rgba(255,255,255,0.05)"
          backdropFilter="blur(12px)"
          border="1px solid rgba(0,255,255,0.3)"
          borderRadius="xl"
          boxShadow="0px 0px 25px rgba(0,255,255,0.2)"
          whileHover={{ scale: 1.03 }}
          transition="0.3s"
        >
          <HStack spacing={4} justify="center">
            <Icon as={FaBriefcase} boxSize={7} color="yellow.300" />
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

          {/* Tech */}
          <HStack justify="center" spacing={3} mt={4}>
            <Badge colorScheme="cyan">React Native</Badge>
            <Badge colorScheme="yellow">Firebase</Badge>
            <Badge colorScheme="purple">Firestore</Badge>
          </HStack>

          {/* Details */}
          <VStack align="start" mt={4} spacing={3}>
            <HStack align="start">
              <Icon as={FaTools} color="yellow.300" mt={1} />
              <Text color="cyan.100" fontSize="md">
                Built cross-platform mobile app with secure auth, state
                management & real-time features.
              </Text>
            </HStack>

            <HStack align="start">
              <Icon as={FaTools} color="yellow.300" mt={1} />
              <Text color="cyan.100" fontSize="md">
                Optimized backend + Cloud Functions improving performance by{" "}
                <Text as="span" color="yellow.200" fontWeight="bold">
                  40%
                </Text>{" "}
                & app responsiveness by{" "}
                <Text as="span" color="yellow.200" fontWeight="bold">
                  25%
                </Text>
                .
              </Text>
            </HStack>
          </VStack>
        </MotionBox>

        <Divider
          my={10}
          borderColor="cyan.600"
          borderWidth="2px"
          boxShadow={`0px 0px 20px ${glow}`}
        />
      </MotionBox>

      {/* ------------------------------------------------------------------ */}
      {/*                        ⭐ PROFILE INTRO SECTION ⭐                   */}
      {/* ------------------------------------------------------------------ */}

      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        textAlign="center"
        position="relative"
        zIndex={2}
      >
        <Text
          fontSize="4xl"
          fontWeight="bold"
          bgGradient="linear(to-r, cyan.300, white)"
          bgClip="text"
          textShadow={`0 0 18px ${glow}`}
        >
          Hi, I'm{" "}
          <Text as="span" color="yellow.300">
            Ankit Yadav
          </Text>
        </Text>

        {/* Typing */}
        <HStack justify="center" mt={3}>
          <Icon as={FaRobot} color="cyan.300" boxSize={5} />
          <Text fontSize="2xl" color="cyan.100">
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
          <Icon as={FaBrain} color="cyan.300" boxSize={5} />
        </HStack>

        <Divider
          my={8}
          borderColor="cyan.600"
          borderWidth="2px"
          boxShadow={`0px 0px 20px ${glow}`}
        />

        {/* Coding Profiles */}
        <Text fontSize="2xl" fontWeight="bold" color="cyan.100">
          My Coding Profiles
        </Text>

        <HStack
          justify="center"
          spacing={8}
          mt={6}
          flexWrap="wrap"
          zIndex={3}
          position="relative"
        >
          <MotionBox
            p={5}
            bg="rgba(255,255,255,0.06)"
            backdropFilter="blur(10px)"
            borderRadius="lg"
            border="1px solid rgba(0,255,255,0.2)"
            boxShadow="0px 0px 25px rgba(0,200,255,0.4)"
            whileHover={{ scale: 1.07 }}
            transition="0.3s"
          >
            <LeetCodeWidget usernamel={usernamel} />
          </MotionBox>

          <MotionBox
            p={5}
            bg="rgba(255,255,255,0.06)"
            backdropFilter="blur(10px)"
            borderRadius="lg"
            border="1px solid rgba(0,255,255,0.2)"
            boxShadow="0px 0px 25px rgba(0,200,255,0.4)"
            whileHover={{ scale: 1.07 }}
            transition="0.3s"
          >
            <HackerRankWidget usernameh={usernameh} />
          </MotionBox>
        </HStack>
      </MotionBox>
    </Box>
  );
};

export default AboutMeSection;
