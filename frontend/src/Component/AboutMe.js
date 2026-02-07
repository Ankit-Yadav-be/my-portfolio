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
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import {
  FaRobot,
  FaBrain,
  FaCodeBranch,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";
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

  /* ================= EXPERIENCE DATA ================= */
  const experiences = [
    {
      role: "Associate Software Engineer",
      company: "LiveInTech Venture Studio",
      location: "Bengaluru, India",
      duration: "Jan 2026 – Present",
      linkedin:
        "https://www.linkedin.com/company/liveintech-venturestudio/posts/?feedView=all",
      website: "https://liveintech.co/",
      tech: [
        "Node.js",
        "MySQL",
        "Drizzle ORM",
        "Redis",
        "BullMQ",
        "Docker",
      ],
      points: [
        "Working on scalable backend systems for real-world production applications.",
        "Designing and optimizing relational database schemas using MySQL and Drizzle ORM.",
        "Implementing caching and background job processing with Redis and BullMQ.",
        "Collaborating with senior engineers to build maintainable, high-performance services.",
        "Actively contributing to code reviews, debugging, and system improvements.",
      ],
    },
    {
      role: "Android Developer Intern",
      company: "LitAmor",
      location: "Remote",
      duration: "Jul 2025 – Jan 2026",
      linkedin:
        "https://www.linkedin.com/company/lit-amor/posts/?feedView=all",
      website: "https://www.litamor.co/",
      tech: ["React Native", "Firebase", "Firestore"],
      points: [
        "Built cross-platform mobile features with clean UI and scalable architecture.",
        "Integrated Firebase services for authentication, storage, and real-time data.",
        "Worked closely with product teams to deliver production-ready features.",
      ],
    },
  ];

  return (
    <Box
      maxW="1280px"
      mx="auto"
      px={{ base: 6, md: 12 }}
      mt={{ base: 12, md: 24 }}
    >
      {/* ================= HERO ================= */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 12, md: 20 }}>
        <VStack align="start" spacing={6}>
          <Text
            fontSize="xs"
            letterSpacing="wider"
            textTransform="uppercase"
            color={textSecondary}
          >
            Associate Software Engineer • Backend • Scalable Systems
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
                strings={[
                  "Associate Software Engineer",
                  "Backend & System Design",
                  "Building Scalable Products",
                  "Problem Solver",
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
              />
            </Text>
            <Icon as={FaBrain} color={cyan} />
          </MotionHStack>

          <Text fontSize="lg" color={textSecondary} maxW="92%">
            Associate Software Engineer at{" "}
            <b>LiveInTech Venture Studio, Bengaluru</b>. I work on backend
            engineering, database design, and system scalability with a strong
            focus on clean, maintainable, and production-ready code.
          </Text>

          <HStack spacing={4}>
            <Badge colorScheme="cyan" px={4} py={1} rounded="full">
              Bengaluru 🇮🇳
            </Badge>
            <Badge colorScheme="yellow" px={4} py={1} rounded="full">
              Full-Time
            </Badge>
          </HStack>
        </VStack>

        {/* ================= VIDEO ================= */}
       <MotionBox
  position="relative"
  h={{ base: "260px", md: "460px" }}
  rounded="3xl"
  overflow="hidden"
  border={`1px solid ${border}`}
  bg={useColorModeValue("white", "gray.900")}
  boxShadow="0 30px 70px rgba(0,0,0,0.35)"
  whileHover={{ scale: 1.015 }}
>
  {/* Gradient overlay (visual only) */}
  <Box
    position="absolute"
    inset={0}
    bgGradient="linear(to-t, blackAlpha.700, transparent 60%)"
    zIndex={1}
    pointerEvents="none"   // 🔥 THIS IS THE KEY
  />

  {/* IFRAME */}
  <Box position="relative" zIndex={2} w="100%" h="100%">
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/YlSr3Ypl6UE?rel=0&modestbranding=1"
      title="Introduction Video"
      style={{
        border: "none",
        borderRadius: "24px",
      }}
      allow="autoplay; encrypted-media; picture-in-picture"
      allowFullScreen
    />
  </Box>
</MotionBox>

      </SimpleGrid>

      {/* ================= EXPERIENCE ================= */}
      <VStack spacing={14} mt={28}>
        <VStack spacing={2}>
          <Text fontSize="3xl" fontWeight="bold" color={cyan}>
            Professional Experience
          </Text>
          <Text fontSize="sm" color={textSecondary}>
            Career journey & real-world impact
          </Text>
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
            <Text fontSize="sm" color={cyan} mt={1}>
              {exp.duration} • {exp.location}
            </Text>

            <HStack spacing={2} mt={4} wrap="wrap">
              {exp.tech.map((t, i) => (
                <Badge key={i} colorScheme="cyan" rounded="full" px={3} py={1}>
                  {t}
                </Badge>
              ))}
            </HStack>

            <Divider my={4} />

            {/* ================= COMPANY LINKS ================= */}
            <HStack spacing={4} mb={4}>
              <Link href={exp.linkedin} isExternal>
                <HStack
                  px={4}
                  py={2}
                  rounded="full"
                  border={`1px solid ${border}`}
                  _hover={{
                    bg: "cyan.50",
                    transform: "translateY(-2px)",
                    boxShadow: "md",
                  }}
                  transition="all 0.25s ease"
                >
                  <Icon as={FaLinkedin} color="#0A66C2" />
                  <Text fontSize="sm" fontWeight="medium">
                    LinkedIn
                  </Text>
                </HStack>
              </Link>

              <Link href={exp.website} isExternal>
                <HStack
                  px={4}
                  py={2}
                  rounded="full"
                  border={`1px solid ${border}`}
                  _hover={{
                    bg: "cyan.50",
                    transform: "translateY(-2px)",
                    boxShadow: "md",
                  }}
                  transition="all 0.25s ease"
                >
                  <Icon as={FaGlobe} color={cyan} />
                  <Text fontSize="sm" fontWeight="medium">
                    Website
                  </Text>
                </HStack>
              </Link>
            </HStack>

            <VStack align="start" spacing={2}>
              {exp.points.map((p, i) => (
                <HStack key={i} align="start">
                  <Icon as={FaCodeBranch} mt={1} color={cyan} />
                  <Text fontSize="sm" color={textSecondary}>
                    {p}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </MotionBox>
        ))}
      </VStack>

      {/* ================= PROOF ================= */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16} mt={28}>
        <MotionBox
          p={6}
          bg={bgCard}
          rounded="2xl"
          border={`1px solid ${border}`}
          whileHover={{ scale: 1.03 }}
        >
          <LeetCodeWidget usernamel={leet} />
        </MotionBox>

        <VStack align="start" spacing={4}>
          <Text
            fontSize="xs"
            letterSpacing="wider"
            color={textSecondary}
            textTransform="uppercase"
          >
            Problem Solving
          </Text>

          <Text fontSize="4xl" fontWeight="extrabold" color={accent}>
            600+
          </Text>

          <Text fontSize="lg" color={textSecondary}>
            Solved 500+ DSA and algorithmic problems, strengthening logical
            thinking, debugging skills, and system-level problem solving.
          </Text>

          <HStack spacing={3}>
            <Icon as={FaProblem} color={cyan} boxSize={7} />
            <Text color={textSecondary}>
              Consistent daily problem-solving mindset
            </Text>
          </HStack>
        </VStack>
      </SimpleGrid>
    </Box>
  );
};

export default AboutMeSection;
