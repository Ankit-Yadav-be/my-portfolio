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
import { FaBrain as FaProblem } from "react-icons/fa";

import LeetCodeWidget from "./LeetcodeWidgets";

// Motion Components
const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionHStack = motion(HStack);

const AboutMeSection = () => {
  const [leet] = useState("codersourya123");
  const glow = useColorModeValue("rgba(0,255,255,0.25)", "rgba(0,255,255,0.55)");

  const experiences = [
    {
      role: "Android Developer Intern",
      company: "LitAmor",
      duration: "Jul 2025 – Present",
      tech: ["React Native", "Firebase", "Firestore"],
      points: [
        "Developed cross-platform mobile apps with real-time updates & secure architecture.",
        "Optimized Cloud Functions improving performance by 40% & responsiveness by 25%.",
      ],
    },
  ];

  return (
    <Box
      p={{ base: 6, md: 10 }}
      maxW="1200px"
      mx="auto"
      mt={20}
      position="relative"
    >
      {/* 🔥 BACKGROUND AURA GLOW */}
      <Box
        position="absolute"
        top="-100px"
        left="50%"
        transform="translateX(-50%)"
        w="600px"
        h="600px"
        bg="cyan.500"
        filter="blur(180px)"
        opacity={0.15}
        rounded="full"
        zIndex={-1}
      />

      {/* ============= HERO SECTION ================= */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={14} mb={20} alignItems="center">
        <VStack align="start" spacing={5}>
          <MotionText
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="extrabold"
            bgGradient="linear(to-r, cyan.300, white)"
            bgClip="text"
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm <span style={{ color: "#FFE082" }}>Ankit Yadav</span>
          </MotionText>

          <MotionHStack
            spacing={3}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
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
          </MotionHStack>

          <MotionText
            color="gray.300"
            fontSize="lg"
            maxW="80%"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Passionate developer creating high-quality apps, AI solutions, and
            real-world products with modern tech.
          </MotionText>
        </VStack>

        <MotionBox
          position="relative"
          w="100%"
          maxW="900px"
          h={{ base: "240px", md: "430px" }}
          mx="auto"
          borderRadius="2xl"
          overflow="hidden"
          boxShadow={`0 0 40px ${glow}`}
          whileHover={{ scale: 1.03, rotateY: 4, rotateX: 2 }}
          transition="0.35s"
          style={{ transformStyle: "preserve-3d" }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/W4ce2UyNOzY"
            title="Introduction Video"
            allowFullScreen
            style={{ borderRadius: "1rem" }}
          />
        </MotionBox>
      </SimpleGrid>

      {/* ============= EXPERIENCE SECTION ================= */}
      <MotionText
        fontSize="3xl"
        fontWeight="bold"
        textAlign="center"
        mb={10}
        bgGradient="linear(to-r, cyan.300, cyan.100)"
        bgClip="text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Work Experience
      </MotionText>

      <VStack spacing={12} position="relative" px={4}>
        <motion.div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: "3px",
            background: "cyan",
            transform: "translateX(-50%)",
          }}
          animate={{
            boxShadow: ["0 0 10px cyan", "0 0 25px cyan", "0 0 10px cyan"],
          }}
          transition={{ repeat: Infinity, duration: 2 }}
        />

        {experiences.map((exp, index) => (
          <MotionBox
            key={index}
            position="relative"
            w={{ base: "100%", md: "46%" }}
            alignSelf={index % 2 === 0 ? "flex-start" : "flex-end"}
            p={6}
            bg="rgba(255,255,255,0.07)"
            borderRadius="2xl"
            backdropFilter="blur(12px)"
            border="1px solid rgba(0,255,255,0.25)"
            boxShadow={`0 0 22px ${glow}`}
            whileHover={{ scale: 1.04 }}
            transition="0.25s"
          >
            <motion.div
              style={{
                position: "absolute",
                left: index % 2 === 0 ? "100%" : "-10px",
                top: "20px",
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                background: "cyan",
              }}
              animate={{ boxShadow: ["0 0 8px cyan", "0 0 20px cyan"] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />

            <Text fontSize="xl" fontWeight="bold" color="white" mb={2}>
              {exp.role} — {exp.company}
            </Text>
            <Text color="cyan.300" mb={2}>
              {exp.duration}
            </Text>

            <HStack spacing={2} mb={2}>
              {exp.tech.map((t, i) => (
                <Badge key={i} colorScheme="cyan">
                  {t}
                </Badge>
              ))}
            </HStack>

            <VStack align="start" spacing={1}>
              {exp.points.map((p, i) => (
                <Text key={i} color="cyan.100" fontSize="sm">
                  • {p}
                </Text>
              ))}
            </VStack>
          </MotionBox>
        ))}
      </VStack>

      {/* ============= CODING PROFILES ================= */}
      <Text
        fontSize="3xl"
        fontWeight="bold"
        mt={16}
        textAlign="center"
        color="cyan.200"
      >
        My Coding Profiles
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={8} px={{ base: 4, md: 10 }}>
        {/* LEETCODE CARD */}
        <MotionBox
          p={6}
          borderRadius="2xl"
          bg="rgba(0,255,255,0.08)"
          backdropFilter="blur(10px)"
          whileHover={{ scale: 1.05 }}
          boxShadow={`0 0 30px rgba(0,255,255,0.35)`}
        >
          <LeetCodeWidget usernamel={leet} />
        </MotionBox>

        {/* CUSTOM PROBLEM SOLVING CARD */}
        <MotionBox
          p={8}
          borderRadius="2xl"
          bg="rgba(0,255,255,0.08)"
          backdropFilter="blur(12px)"
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition="0.3s ease"
          boxShadow={`0 0 35px rgba(0,255,255,0.45)`}
        >
          <VStack spacing={4} textAlign="center">
            <Text
              fontSize="4xl"
              fontWeight="extrabold"
              bgGradient="linear(to-r, cyan.300, white)"
              bgClip="text"
            >
              500+ Problems Solved
            </Text>
            <Box fontSize="50px" color="cyan.300" as={FaProblem} animation="pulse 2s infinite" />
            <Text fontSize="lg" color="cyan.100" px={4}>
              Solving 500+ coding problems across platforms helped me build 
              strong <b>problem-solving skills</b>, <b>logical thinking</b>, 
              and the ability to break down complex challenges efficiently.
            </Text>
            <Box w="80%" h="3px" bg="cyan.400" opacity={0.4} rounded="full" />
            <Text color="gray.300" fontSize="md">
              I practice DSA daily to sharpen my brain like an engineer. 
            </Text>
          </VStack>
        </MotionBox>
      </SimpleGrid>
    </Box>
  );
};

export default AboutMeSection;
