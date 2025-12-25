// src/components/PatternExplorerIntro.jsx
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FiLayers,
  FiCheckSquare,
  FiCode,
  FiTrendingUp,
  FiBook,
} from "react-icons/fi";

const MotionBox = motion(Box);

export default function PatternExplorerIntro() {
  const bg = useColorModeValue(
    "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    "linear-gradient(135deg, #0b0f1a, #020617)"
  );

  const cardBg = useColorModeValue("whiteAlpha.900", "whiteAlpha.50");
  const primaryText = useColorModeValue("gray.900", "gray.100");
  const secondaryText = useColorModeValue("gray.600", "gray.400");
  const accent = "cyan.400";

  return (
    <MotionBox
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      bg={bg}
      p={{ base: 5, md: 8 }}
      rounded="2xl"
      shadow="2xl"
      position="relative"
      overflow="hidden"
      mb={6}
    >
      {/* Diagonal Accent Layer */}
      <Box
        position="absolute"
        top="-40%"
        right="-30%"
        w="140%"
        h="140%"
        bg="linear-gradient(135deg, rgba(34,211,238,0.15), transparent 60%)"
        transform="rotate(-12deg)"
        pointerEvents="none"
      />

      {/* Bottom Diagonal Glow */}
      <Box
        position="absolute"
        bottom="-35%"
        left="-25%"
        w="130%"
        h="130%"
        bg="linear-gradient(135deg, rgba(99,102,241,0.12), transparent 65%)"
        transform="rotate(10deg)"
        pointerEvents="none"
      />

      {/* Subtle Border */}
      <Box
        position="absolute"
        inset="0"
        border="1px solid"
        borderColor="whiteAlpha.200"
        rounded="2xl"
        pointerEvents="none"
      />

      {/* Glass Card */}
      <Box
        bg={cardBg}
        rounded="xl"
        p={{ base: 5, md: 8 }}
        backdropFilter="blur(14px)"
        position="relative"
      >
        <VStack align="start" spacing={5}>
          {/* Heading */}
          <Heading
            size="lg"
            color={primaryText}
            fontWeight="bold"
            letterSpacing="tight"
          >
            DSA Pattern Explorer
          </Heading>

          <Text fontSize="md" color={secondaryText} lineHeight="1.7">
            Practice Data Structures and Algorithms through a
            <b> structured, pattern-based approach</b>. This module trains your
            brain to recognize problem patterns just like experienced
            interviewers expect.
          </Text>

          <Text fontSize="md" color={secondaryText} lineHeight="1.7">
            Problems are organized topic-wise and difficulty-wise, supported
            with hints, starter logic, and progress tracking to help you stay
            consistent.
          </Text>

          {/* Feature Badges */}
          <HStack spacing={3} flexWrap="wrap">
            <Badge px={3} py={1} rounded="md" colorScheme="cyan" display="flex" gap={2}>
              <FiLayers /> Structured Topics
            </Badge>

            <Badge px={3} py={1} rounded="md" colorScheme="green" display="flex" gap={2}>
              <FiCheckSquare /> Progress Tracking
            </Badge>

            <Badge px={3} py={1} rounded="md" colorScheme="blue" display="flex" gap={2}>
              <FiCode /> Hints & Pseudocode
            </Badge>

            <Badge px={3} py={1} rounded="md" colorScheme="purple" display="flex" gap={2}>
              <FiTrendingUp /> Interview Patterns
            </Badge>

            <Badge px={3} py={1} rounded="md" colorScheme="orange" display="flex" gap={2}>
              <FiBook /> Guided Learning
            </Badge>
          </HStack>

          <Divider borderColor="whiteAlpha.300" />

          {/* Learning Outcomes */}
          <VStack align="start" spacing={2}>
            <Text
              fontSize="sm"
              fontWeight="semibold"
              color={accent}
              letterSpacing="wide"
            >
              WHAT YOU WILL ACHIEVE
            </Text>

            <Text fontSize="sm" color={secondaryText}>
              • Solve problems using proven DSA patterns instead of brute force.
            </Text>
            <Text fontSize="sm" color={secondaryText}>
              • Build consistency with topic-wise and difficulty-wise tracking.
            </Text>
            <Text fontSize="sm" color={secondaryText}>
              • Learn how to approach unseen problems confidently.
            </Text>
            <Text fontSize="sm" color={secondaryText}>
              • Strengthen DSA fundamentals for interviews & real-world systems.
            </Text>
          </VStack>

          {/* Footer Tip */}
          <Text fontSize="sm" color="cyan.300" fontWeight="medium" pt={2}>
            Pro tip: Master Easy patterns first, then scale up to Medium & Hard —
            patterns repeat everywhere.
          </Text>
        </VStack>
      </Box>
    </MotionBox>
  );
}
