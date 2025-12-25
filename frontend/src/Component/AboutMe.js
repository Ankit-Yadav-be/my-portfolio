import React, { useState } from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Icon,
  SimpleGrid,
  Badge,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { FaRobot, FaBrain } from "react-icons/fa";
import { FaBrain as FaProblem } from "react-icons/fa";

import LeetCodeWidget from "./LeetcodeWidgets";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionHStack = motion(HStack);

const AboutMeSection = () => {
  const [leet] = useState("codersourya123");

  /* ================= DESIGN TOKENS ================= */
  const bgCard = useColorModeValue("whiteAlpha.800", "blackAlpha.400");
  const textPrimary = useColorModeValue("gray.800", "gray.100");
  const textSecondary = useColorModeValue("gray.600", "gray.400");
  const cyan = useColorModeValue("cyan.400", "cyan.300");
  const accent = "#FFE082";
  const border = useColorModeValue("gray.200", "whiteAlpha.200");

  const experiences = [
    {
      role: "Android Developer Intern",
      company: "LitAmor",
      duration: "Jul 2025 – Present",
      tech: ["React Native", "Firebase", "Firestore"],
      points: [
        "Designed and developed scalable cross-platform mobile applications.",
        "Improved backend efficiency and reduced response latency by ~40%.",
        "Collaborated closely with product teams to deliver production-ready features.",
      ],
    },
  ];

  return (
    <Box maxW="1280px" mx="auto" px={{ base: 6, md: 12 }} mt={{ base: 12, md: 24 }}>
      
      {/* ================= HERO (DIAGONAL) ================= */}
      <MotionBox position="relative" overflow="hidden" rounded="3xl" mb={28}>
        {/* Diagonal Accent */}
        <Box
          position="absolute"
          top="-40%"
          left="-30%"
          w="160%"
          h="160%"
          bg="linear-gradient(135deg, rgba(34,211,238,0.15), transparent 60%)"
          transform="rotate(-12deg)"
          pointerEvents="none"
        />

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 14, md: 20 }} position="relative" zIndex={1}>
          {/* LEFT CONTENT */}
          <VStack align="start" spacing={6}>
            <Text fontSize="xs" letterSpacing="wider" textTransform="uppercase" color={textSecondary}>
              Full Stack • AI • Product Engineering
            </Text>

            <MotionText
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="extrabold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Hi, I’m <span style={{ color: accent }}>Ankit Yadav</span>
            </MotionText>

            <MotionHStack spacing={3}>
              <Icon as={FaRobot} color={cyan} />
              <Text fontSize="xl" color={cyan} fontWeight="semibold">
                <ReactTyped
                  strings={["AI Engineer","Full Stack Developer","Problem Solver","Building Scalable Products"]}
                  typeSpeed={50} backSpeed={30} loop
                />
              </Text>
              <Icon as={FaBrain} color={cyan} />
            </MotionHStack>

            <Text fontSize="lg" color={textSecondary} maxW="90%">
              I build scalable applications and intelligent systems with strong emphasis on performance, clean architecture, and real-world impact.
            </Text>
          </VStack>

          {/* RIGHT VIDEO */}
          <MotionBox
            position="relative"
            h={{ base: "260px", md: "460px" }}
            rounded="3xl"
            overflow="hidden"
            border={`1px solid ${border}`}
            bg="black"
            boxShadow="0 30px 70px rgba(0,0,0,0.45)"
            whileHover={{ scale: 1.015 }}
          >
            <Box position="absolute" inset={0} bgGradient="linear(to-t, blackAlpha.700, transparent 60%)" zIndex={1} />

            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/YlSr3Ypl6UE"
              title="Introduction Video"
              style={{ border: "none", borderRadius: "24px" }}
              allowFullScreen
            />
          </MotionBox>
        </SimpleGrid>
      </MotionBox>

      {/* ================= EXPERIENCE ================= */}
      <VStack spacing={14} mt={28}>
        <VStack spacing={2}>
          <Text fontSize="3xl" fontWeight="bold" color={cyan}>Work Experience</Text>
          <Text fontSize="sm" color={textSecondary}>Roles where I delivered measurable impact</Text>
        </VStack>

        {experiences.map((exp, index) => (
          <MotionBox
            key={index}
            w="100%"
            p={{ base: 6, md: 8 }}
            bg={bgCard}
            rounded="2xl"
            border={`1px solid ${border}`}
            whileHover={{ y: -4 }}
          >
            <Text fontSize="xl" fontWeight="bold" color={textPrimary}>
              {exp.role} — {exp.company}
            </Text>
            <Text fontSize="sm" color={cyan} mt={1}>{exp.duration}</Text>

            <HStack spacing={2} mt={4} wrap="wrap">
              {exp.tech.map((t, i) => (
                <Badge key={i} colorScheme="cyan" rounded="full" px={3} py={1}>{t}</Badge>
              ))}
            </HStack>

            <Divider my={4} />

            <VStack align="start" spacing={2}>
              {exp.points.map((p, i) => (
                <Text key={i} fontSize="sm" color={textSecondary}>• {p}</Text>
              ))}
            </VStack>
          </MotionBox>
        ))}
      </VStack>

      {/* ================= PROOF (DIAGONAL) ================= */}
      <MotionBox position="relative" overflow="hidden" mt={28}>
        {/* Diagonal Glow */}
        <Box
          position="absolute"
          bottom="-40%"
          right="-30%"
          w="160%"
          h="160%"
          bg="linear-gradient(135deg, rgba(99,102,241,0.18), transparent 60%)"
          transform="rotate(12deg)"
          pointerEvents="none"
        />

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16} position="relative" zIndex={1}>
          {/* LEFT CONTENT */}
          <VStack align="start" spacing={5}>
            <Text fontSize="xs" letterSpacing="wider" textTransform="uppercase" color={textSecondary}>
              Proof of Work
            </Text>

            <Text fontSize="5xl" fontWeight="extrabold" color={accent}>500+</Text>

            <Text fontSize="lg" color={textSecondary}>
              Solved 500+ algorithmic and data-structure problems, developing strong analytical thinking and interview-level problem-solving skills.
            </Text>

            <HStack spacing={3}>
              <Icon as={FaProblem} color={cyan} boxSize={7} />
              <Text color={textSecondary}>Daily consistency & pattern-based DSA practice</Text>
            </HStack>
          </VStack>

          {/* RIGHT WIDGET */}
          <MotionBox
            p={6}
            bg={bgCard}
            rounded="2xl"
            border={`1px solid ${border}`}
            backdropFilter="blur(14px)"
            whileHover={{ y: -6 }}
          >
            <LeetCodeWidget usernamel={leet} />
          </MotionBox>
        </SimpleGrid>
      </MotionBox>
    </Box>
  );
};

export default AboutMeSection;
