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
  SimpleGrid,
  Image,
  Button,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  Tooltip,
} from "@chakra-ui/react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaBrain,
  FaBriefcase,
  FaCalendarAlt,
  FaTools,
  FaStar,
  FaDownload,
} from "react-icons/fa";
import LeetCodeWidget from "./LeetcodeWidgets";
import HackerRankWidget from "./HakerRankWidgets";

const MotionBox = motion(Box);
const MotionStack = motion(Stack);

const AboutMeSection = () => {
  // kept your usernames; change if needed
  const [leUsername] = useState("codersourya123");
  const [hrUsername] = useState("ay870421");

  // colors that adapt to light/dark
  const cardBg = useColorModeValue("whiteAlpha.800", "blackAlpha.500");
  const accent = useColorModeValue("cyan.600", "cyan.300");
  const subtle = useColorModeValue("gray.700", "gray.200");
  const glow = useColorModeValue(
    "rgba(0,255,255,0.08)",
    "rgba(0,255,255,0.12)"
  );

  return (
    <Box
      w="100%"
      maxW="1200px"
      mx="auto"
      my={{ base: 8, md: 12 }}
      px={{ base: 4, md: 6 }}
    >
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 6, md: 8 }}
        alignItems="start"
      >
        {/* ----------------------------- */}
        {/* HERO / PROFILE */}
        {/* ----------------------------- */}
        <MotionBox
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          borderRadius="2xl"
          p={{ base: 6, md: 8 }}
          bg={cardBg}
          boxShadow="0 10px 30px rgba(0,0,0,0.12)"
          position="relative"
          overflow="hidden"
        >
          {/* soft accent glow */}
          <Box
            position="absolute"
            top="-10%"
            right="-10%"
            width="260px"
            height="260px"
            borderRadius="full"
            bg={glow}
            filter="blur(42px)"
            zIndex={0}
          />

          <VStack align="start" spacing={6} zIndex={1}>
            {/* name + role */}
            <HStack align="center" spacing={4} w="100%">
              <Image
                src="/Ankit.jpeg"
                alt="Ankit Yadav"
                boxSize={{ base: "72px", md: "96px" }}
                borderRadius="xl"
                objectFit="cover"
                border="2px solid"
                borderColor={accent}
                boxShadow="sm"
              />
              <VStack align="start" spacing={0}>
                <Text
                  as="h2"
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="extrabold"
                  letterSpacing="tight"
                >
                  Ankit Yadav
                </Text>
                <Text fontSize="sm" color={subtle}>
                  Full-Stack • MERN • React Native • Generative AI
                </Text>
              </VStack>
            </HStack>

            {/* tagline + typed */}
            <VStack align="start" spacing={2}>
              <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
                Building thoughtful products & clever AI agents
              </Text>

              <HStack spacing={3} align="center">
                <Icon as={FaRobot} boxSize={5} color={accent} />
                <Text fontSize={{ base: "sm", md: "md" }} color={subtle}>
                  <ReactTyped
                    strings={[
                      "Exploring Generative AI 🤖",
                      "Building AI Agents 🚀",
                      "MERN Stack Developer 💻",
                      "Solving Real-World Problems 🌍",
                    ]}
                    typeSpeed={45}
                    backSpeed={30}
                    loop
                  />
                </Text>
                <Icon as={FaBrain} boxSize={5} color={accent} />
              </HStack>
            </VStack>

            {/* quick stats */}
            <HStack spacing={{ base: 3, md: 6 }} w="100%" flexWrap="wrap">
              <Stat p={3} borderRadius="lg" bg="transparent" minW="120px">
                <StatLabel fontSize="xs" color="gray.500">
                  Projects
                </StatLabel>
                <StatNumber fontSize="lg" color={accent}>
                  18+
                </StatNumber>
              </Stat>

              <Stat p={3} borderRadius="lg" minW="120px">
                <StatLabel fontSize="xs" color="gray.500">
                  Experience
                </StatLabel>
                <StatNumber fontSize="lg" color={accent}>
                  2 yrs
                </StatNumber>
              </Stat>

              <Stat p={3} borderRadius="lg" minW="120px">
                <StatLabel fontSize="xs" color="gray.500">
                  DSA Solved
                </StatLabel>
                <StatNumber fontSize="lg" color={accent}>
                  300+
                </StatNumber>
              </Stat>
            </HStack>

            {/* CTA row */}
            <HStack spacing={3} w="100%" flexWrap="wrap">
              <MotionStack
                direction="row"
                spacing={3}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.03 }}
              >
                <Button
                  leftIcon={<FaDownload />}
                  colorScheme="cyan"
                  variant="solid"
                  borderRadius="xl"
                  onClick={() => (window.location.href = "/RESUMEE.pdf")}
                >
                  Download CV
                </Button>

                <Tooltip label="Open skills section">
                  <Button
                    variant="outline"
                    borderRadius="xl"
                    onClick={() =>
                      document
                        .getElementById("skills")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    View Skills
                  </Button>
                </Tooltip>
              </MotionStack>

              <Badge colorScheme="yellow" borderRadius="md" px={3} py={1}>
                Open to Opportunities
              </Badge>
            </HStack>

            <Divider />

            {/* Coding widgets - responsive cards */}
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w="100%">
              <MotionBox
                p={4}
                borderRadius="lg"
                bg={useColorModeValue("gray.50", "gray.700")}
                boxShadow="sm"
                whileHover={{ y: -6 }}
                transition="0.25s"
              >
                <Text fontSize="sm" fontWeight="semibold" mb={2}>
                  LeetCode
                </Text>
                <LeetCodeWidget usernamel={leUsername} />
              </MotionBox>

              <MotionBox
                p={4}
                borderRadius="lg"
                bg={useColorModeValue("gray.50", "gray.700")}
                boxShadow="sm"
                whileHover={{ y: -6 }}
                transition="0.25s"
              >
                <Text fontSize="sm" fontWeight="semibold" mb={2}>
                  HackerRank
                </Text>
                <HackerRankWidget usernameh={hrUsername} />
              </MotionBox>
            </SimpleGrid>
          </VStack>
        </MotionBox>

        {/* ----------------------------- */}
        {/* EXPERIENCE TIMELINE / DETAILS */}
        {/* ----------------------------- */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12 }}
          p={{ base: 4, md: 6 }}
          borderRadius="2xl"
          bgGradient="linear(to-b, rgba(0,0,0,0.04), transparent)"
          boxShadow="0 8px 30px rgba(0,0,0,0.06)"
        >
          <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold" mb={4}>
            Work Experience
          </Text>

          <VStack spacing={6} align="stretch">
            {/* Experience item */}
            <MotionBox
              p={4}
              borderRadius="lg"
              bg={useColorModeValue("white", "blackAlpha.400")}
              boxShadow="0 6px 20px rgba(0,0,0,0.06)"
              whileHover={{ scale: 1.02 }}
              transition="0.25s"
            >
              <HStack justify="space-between" align="start">
                <HStack spacing={3} align="center">
                  <Box
                    w="12"
                    h="12"
                    borderRadius="lg"
                    bg={accent}
                    display="grid"
                    placeItems="center"
                    color="white"
                    boxShadow="sm"
                  >
                    <FaBriefcase />
                  </Box>
                  <VStack align="start" spacing={0}>
                    <Text fontWeight="bold">Android Developer Intern</Text>
                    <Text fontSize="sm" color="gray.500">
                      LitAmor • Jul 2025 – Present
                    </Text>
                  </VStack>
                </HStack>

                <Badge colorScheme="green" variant="subtle">
                  Full-time
                </Badge>
              </HStack>

              <Divider my={3} />

              <VStack spacing={3} align="start">
                <HStack align="start">
                  <Icon as={FaTools} mt={1} color="yellow.400" />
                  <Text fontSize="sm">
                    Built a cross-platform mobile app with secure
                    authentication, state management & event tracking.
                  </Text>
                </HStack>

                <HStack align="start">
                  <Icon as={FaTools} mt={1} color="yellow.400" />
                  <Text fontSize="sm">
                    Migrated REST APIs to Cloud Functions and optimized queries,
                    improving backend efficiency by{" "}
                    <Text as="span" fontWeight="bold" color="yellow.400">
                      40%
                    </Text>
                    .
                  </Text>
                </HStack>

                <HStack spacing={2} mt={2} wrap="wrap">
                  <Badge colorScheme="cyan">React Native</Badge>
                  <Badge colorScheme="yellow">Firebase</Badge>
                  <Badge colorScheme="purple">Firestore</Badge>
                </HStack>
              </VStack>
            </MotionBox>

            {/* Another example item (duplicate style for more experiences) */}
            <MotionBox
              p={4}
              borderRadius="lg"
              bg={useColorModeValue("white", "blackAlpha.400")}
              boxShadow="0 6px 20px rgba(0,0,0,0.06)"
              whileHover={{ scale: 1.02 }}
              transition="0.25s"
            >
              <HStack justify="space-between" align="start">
                <HStack spacing={3} align="center">
                  <Box
                    w="12"
                    h="12"
                    borderRadius="lg"
                    bg="gray.600"
                    display="grid"
                    placeItems="center"
                    color="white"
                    boxShadow="sm"
                  >
                    <FaStar />
                  </Box>
                  <VStack align="start" spacing={0}>
                    <Text fontWeight="bold">Freelance • Various Projects</Text>
                    <Text fontSize="sm" color="gray.500">
                      2023 – 2025
                    </Text>
                  </VStack>
                </HStack>

                <Badge colorScheme="purple" variant="subtle">
                  Contract
                </Badge>
              </HStack>

              <Divider my={3} />

              <VStack spacing={3} align="start">
                <Text fontSize="sm">
                  Delivered multiple production-ready features for clients:
                  payment integrations, performance tuning, and UI/UX
                  improvements.
                </Text>

                <HStack spacing={2} mt={2} wrap="wrap">
                  <Badge colorScheme="teal">Node.js</Badge>
                  <Badge colorScheme="cyan">React</Badge>
                  <Badge colorScheme="orange">Performance</Badge>
                </HStack>
              </VStack>
            </MotionBox>
          </VStack>
        </MotionBox>
      </SimpleGrid>
    </Box>
  );
};

export default AboutMeSection;
