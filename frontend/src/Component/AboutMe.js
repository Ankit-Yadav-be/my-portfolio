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
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { FaRobot, FaBrain } from "react-icons/fa";

import LeetCodeWidget from "./LeetcodeWidgets";
import HackerRankWidget from "./HakerRankWidgets";

const MotionBox = motion(Box);

const AboutMeSection = () => {
  const [leet] = useState("codersourya123");
  const [hack] = useState("ay870421");
  const glow = useColorModeValue("rgba(0,255,255,0.25)", "rgba(0,255,255,0.55)");

  const experiences = [
    {
      role: "Android Developer Intern",
      company: "LitAmor",
      duration: "Jul 2025 – Present",
      tech: ["React Native", "Firebase", "Firestore"],
      points: [
        "Developed cross-platform mobile apps with real-time updates & secure architecture.",
        "Optimized Cloud Functions improving performance by 40% & responsiveness by 25%."
      ]
    },
  ];

  return (
    <Box p={{ base: 6, md: 10 }} maxW="1200px" mx="auto" mt={20}>

      {/* ---------------- HERO SECTION WITH BIG VIDEO ---------------- */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={14} mb={20} alignItems="center">

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

        {/* RIGHT BIG VIDEO */}
        <MotionBox
          position="relative"
          w="100%"
          maxW="900px"
          h={{ base: "240px", md: "430px" }}   // BIGGER HEIGHT
          mx="auto"
          borderRadius="2xl"
          overflow="hidden"
          boxShadow={`0 0 40px ${glow}`}
          whileHover={{ scale: 1.02 }}
          transition="0.35s"
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/W4ce2UyNOzY" 
            title="Introduction Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: "1rem" }}
          />
        </MotionBox>
      </SimpleGrid>

      {/* ---------------- EXPERIENCE TIMELINE ---------------- */}
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

      <VStack spacing={12} position="relative" px={4}>
        <Box
          position="absolute"
          left="50%"
          top={0}
          bottom={0}
          w="3px"
          bg="cyan.500"
          transform="translateX(-50%)"
        />

        {experiences.map((exp, index) => (
          <MotionBox
            key={index}
            position="relative"
            w={{ base: "100%", md: "45%" }}
            alignSelf={index % 2 === 0 ? "flex-start" : "flex-end"}
            p={6}
            bg="rgba(255,255,255,0.05)"
            borderRadius="2xl"
            backdropFilter="blur(12px)"
            border="1px solid rgba(0,255,255,0.2)"
            boxShadow={`0 0 20px ${glow}`}
            whileHover={{ scale: 1.03 }}
            transition="0.3s"
          >
            <Box
              position="absolute"
              left={index % 2 === 0 ? "100%" : "-10px"}
              top="20px"
              w="18px"
              h="18px"
              bg="cyan.400"
              borderRadius="50%"
              transform="translateX(-50%)"
            />

            <Text fontSize="xl" fontWeight="bold" color="white" mb={2}>
              {exp.role} — {exp.company}
            </Text>
            <Text color="cyan.300" mb={2}>{exp.duration}</Text>

            <HStack spacing={2} mb={2}>
              {exp.tech.map((t, i) => (
                <Badge key={i} colorScheme="cyan">{t}</Badge>
              ))}
            </HStack>

            <VStack align="start" spacing={1}>
              {exp.points.map((p, i) => (
                <Text key={i} color="cyan.100" fontSize="sm">• {p}</Text>
              ))}
            </VStack>
          </MotionBox>
        ))}
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

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mt={8} px={{ base: 4, md: 10 }}>
        <MotionBox
          p={6}
          borderRadius="2xl"
          bgGradient="linear(to-br, rgba(0,255,255,0.1), rgba(0,120,255,0.1))"
          backdropFilter="blur(10px)"
          whileHover={{ scale: 1.05 }}
          boxShadow={`0 0 25px rgba(0,255,255,0.3)`}
        >
          <LeetCodeWidget usernamel={leet} />
        </MotionBox>

        <MotionBox
          p={6}
          borderRadius="2xl"
          bgGradient="linear(to-br, rgba(0,255,255,0.1), rgba(0,120,255,0.1))"
          backdropFilter="blur(10px)"
          whileHover={{ scale: 1.05 }}
          boxShadow={`0 0 25px rgba(0,255,255,0.3)`}
        >
          <HackerRankWidget usernameh={hack} />
        </MotionBox>
      </SimpleGrid>

    </Box>
  );
};

export default AboutMeSection;
