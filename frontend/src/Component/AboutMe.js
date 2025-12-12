import React, { useState } from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Icon,
  SimpleGrid,
  useColorModeValue,
  Badge,
  Divider,
  Avatar,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

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
  const [leet] = useState("codersourya123");
  const [hack] = useState("ay870421");

  const glow = useColorModeValue("rgba(0,255,255,0.4)", "rgba(0,255,255,0.55)");

  return (
    <Box
      p={{ base: 6, md: 10 }}
      maxW="1200px"
      mx="auto"
      mt={20}
      position="relative"
    >
      {/* ----------------------------------------------------- */}
      {/*                   HERO SPLIT SECTION                 */}
      {/* ----------------------------------------------------- */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={20}>
        
        {/* LEFT TEXT SECTION */}
        <VStack
          align="start"
          spacing={5}
          position="relative"
          zIndex={2}
          justify="center"
        >
          <Text
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="extrabold"
            bgGradient="linear(to-r, cyan.300, white)"
            bgClip="text"
          >
            Hi, I'm <span style={{ color: "#FFE082" }}>Ankit Yadav</span>
          </Text>

          <HStack spacing={3}>
            <Icon as={FaRobot} color="cyan.300" />
            <Text fontSize="xl" color="cyan.100">
              <ReactTyped
                strings={[
                  "AI Engineer 🤖",
                  "MERN Stack Developer 💻",
                  "Solving Real Problems 🚀",
                  "Building AI Agents 🔥",
                ]}
                typeSpeed={45}
                backSpeed={25}
                loop
              />
            </Text>
            <Icon as={FaBrain} color="cyan.300" />
          </HStack>

          <Text color="gray.300" fontSize="lg" maxW="80%">
            A passionate developer focused on building real-world products,
            AI-powered systems & highly scalable applications.
          </Text>
        </VStack>

        {/* RIGHT AVATAR SECTION */}
        <MotionDiv
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* Glowing Blob */}
          <Box
            position="absolute"
            w="280px"
            h="280px"
            bg="radial-gradient(circle, rgba(0,200,255,0.4), transparent)"
            filter="blur(70px)"
            borderRadius="50%"
            top="10%"
          />

          <Avatar
            size="2xl"
            name="Ankit Yadav"
            src="https://i.ibb.co/4p2d9nM/profile.png"
            border="4px solid rgba(0,255,255,0.5)"
            zIndex={3}
          />
        </MotionDiv>
      </SimpleGrid>

      {/* ----------------------------------------------------- */}
      {/*                 EXPERIENCE TIMELINE UI               */}
      {/* ----------------------------------------------------- */}

      <Text
        fontSize="3xl"
        fontWeight="bold"
        textAlign="center"
        mb={10}
        bgGradient="linear(to-r, cyan.300, cyan.100)"
        bgClip="text"
      >
        Work Experience
      </Text>

      <VStack spacing={10} position="relative" px={4}>
        {/* Timeline Vertical Line */}
        <Box
          position="absolute"
          left="50%"
          top={0}
          bottom={0}
          width="3px"
          bg="cyan.600"
          boxShadow={`0 0 15px ${glow}`}
        />

        {/* TIMELINE ITEM */}
        <MotionBox
          whileHover={{ scale: 1.03 }}
          transition="0.3s"
          p={8}
          w="100%"
          maxW="700px"
          bg="rgba(255,255,255,0.05)"
          backdropFilter="blur(15px)"
          borderRadius="2xl"
          border="1px solid rgba(0,255,255,0.3)"
          boxShadow={`0 0 20px ${glow}`}
          position="relative"
        >
          <Box
            position="absolute"
            left="50%"
            top="-10px"
            transform="translateX(-50%)"
            w="18px"
            h="18px"
            bg="cyan.300"
            borderRadius="50%"
            boxShadow={`0 0 18px ${glow}`}
          />

          <HStack spacing={4} mb={4}>
            <Icon as={FaBriefcase} color="yellow.300" boxSize={7} />
            <Text fontSize="2xl" color="white" fontWeight="bold">
              Android Developer Intern — LitAmor
            </Text>
          </HStack>

          <HStack spacing={3} mb={4}>
            <Icon as={FaCalendarAlt} color="cyan.300" />
            <Text color="cyan.200">Jul 2025 – Present</Text>
          </HStack>

          <HStack spacing={3} mb={4}>
            <Badge colorScheme="cyan">React Native</Badge>
            <Badge colorScheme="yellow">Firebase</Badge>
            <Badge colorScheme="purple">Firestore</Badge>
          </HStack>

          <VStack align="start" spacing={3}>
            <HStack align="start">
              <Icon as={FaTools} color="yellow.300" mt={1} />
              <Text color="cyan.100">
                Built cross-platform app with real-time features and secure
                architecture.
              </Text>
            </HStack>

            <HStack align="start">
              <Icon as={FaTools} color="yellow.300" mt={1} />
              <Text color="cyan.100">
                Optimized Cloud Functions, boosting performance by{" "}
                <b style={{ color: "#FFE082" }}>40%</b>.
              </Text>
            </HStack>
          </VStack>
        </MotionBox>
      </VStack>

      {/* ----------------------------------------------------- */}
      {/*             CODING PROFILES GRID CARDS UI            */}
      {/* ----------------------------------------------------- */}

      <Text
        fontSize="3xl"
        fontWeight="bold"
        mt={16}
        textAlign="center"
        color="cyan.200"
      >
        My Coding Profiles
      </Text>

      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={10}
        mt={10}
        px={{ base: 4, md: 10 }}
      >
        <MotionBox
          p={6}
          borderRadius="xl"
          bg="rgba(255,255,255,0.06)"
          border="1px solid rgba(0,255,255,0.3)"
          backdropFilter="blur(12px)"
          whileHover={{ scale: 1.05, rotate: 1 }}
          boxShadow={`0 0 25px ${glow}`}
        >
          <LeetCodeWidget usernamel={leet} />
        </MotionBox>

        <MotionBox
          p={6}
          borderRadius="xl"
          bg="rgba(255,255,255,0.06)"
          border="1px solid rgba(0,255,255,0.3)"
          backdropFilter="blur(12px)"
          whileHover={{ scale: 1.05, rotate: -1 }}
          boxShadow={`0 0 25px ${glow}`}
        >
          <HackerRankWidget usernameh={hack} />
        </MotionBox>
      </SimpleGrid>
    </Box>
  );
};

export default AboutMeSection;
