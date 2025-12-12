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
} from "react-icons/fa";

import LeetCodeWidget from "./LeetcodeWidgets";
import HackerRankWidget from "./HakerRankWidgets";

const MotionBox = motion(Box);

const AboutMeSection = () => {
  const [leet] = useState("codersourya123");
  const [hack] = useState("ay870421");

  const glow = useColorModeValue("rgba(0,255,255,0.3)", "rgba(0,255,255,0.6)");

  return (
    <Box p={{ base: 6, md: 10 }} maxW="1200px" mx="auto" mt={20}>

      {/* ---------------- HERO SECTION ---------------- */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={20}>
        {/* LEFT TEXT */}
        <VStack align="start" spacing={5}>
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
            Passionate developer creating high-quality apps, AI solutions, and
            real-world products with modern tech.
          </Text>
        </VStack>

        {/* RIGHT AVATAR */}
        <Box position="relative" display="flex" justifyContent="center">
          <Box
            position="absolute"
            w="280px"
            h="280px"
            bg="radial-gradient(circle, rgba(0,200,255,0.3), transparent)"
            filter="blur(70px)"
            borderRadius="50%"
            top="10%"
          />
          <Avatar
            size="2xl"
            name="Ankit Yadav"
            src="https://i.ibb.co/4p2d9nM/profile.png"
            border="4px solid rgba(0,255,255,0.5)"
          />
        </Box>
      </SimpleGrid>

      {/* ---------------- WORK EXPERIENCE ---------------- */}
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

      <VStack spacing={8}>
        <MotionBox
          p={6}
          bg="rgba(255,255,255,0.05)"
          backdropFilter="blur(12px)"
          borderRadius="2xl"
          border="1px solid rgba(0,255,255,0.2)"
          boxShadow={`0 0 20px ${glow}`}
          whileHover={{ scale: 1.03 }}
          transition="0.3s"
          w="100%"
          maxW="800px"
        >
          <HStack spacing={4} mb={3}>
            <Icon as={FaBriefcase} color="yellow.300" boxSize={7} />
            <Text fontSize="2xl" fontWeight="bold" color="white">
              Android Developer Intern — LitAmor
            </Text>
          </HStack>

          <HStack spacing={3} mb={3}>
            <Icon as={FaCalendarAlt} color="cyan.300" />
            <Text color="cyan.200">Jul 2025 – Present</Text>
          </HStack>

          <HStack spacing={3} mb={3}>
            <Badge colorScheme="cyan">React Native</Badge>
            <Badge colorScheme="yellow">Firebase</Badge>
            <Badge colorScheme="purple">Firestore</Badge>
          </HStack>

          <VStack align="start" spacing={2}>
            <Text color="cyan.100" fontSize="md">
              • Developed cross-platform mobile apps with real-time updates
              and scalable architecture.
            </Text>
            <Text color="cyan.100" fontSize="md">
              • Optimized Cloud Functions improving performance by{" "}
              <b style={{ color: "#FFE082" }}>40%</b> and app responsiveness
              by <b style={{ color: "#FFE082" }}>25%</b>.
            </Text>
          </VStack>
        </MotionBox>
      </VStack>

      {/* ---------------- CODING PROFILES ---------------- */}
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
        spacing={8}
        mt={8}
        px={{ base: 4, md: 10 }}
      >
        <MotionBox
          p={6}
          borderRadius="2xl"
          bg="rgba(255,255,255,0.06)"
          border="1px solid rgba(0,255,255,0.2)"
          backdropFilter="blur(12px)"
          boxShadow={`0 0 22px ${glow}`}
          whileHover={{ scale: 1.05 }}
        >
          <LeetCodeWidget usernamel={leet} />
        </MotionBox>

        <MotionBox
          p={6}
          borderRadius="2xl"
          bg="rgba(255,255,255,0.06)"
          border="1px solid rgba(0,255,255,0.2)"
          backdropFilter="blur(12px)"
          boxShadow={`0 0 22px ${glow}`}
          whileHover={{ scale: 1.05 }}
        >
          <HackerRankWidget usernameh={hack} />
        </MotionBox>
      </SimpleGrid>
    </Box>
  );
};

export default AboutMeSection;
