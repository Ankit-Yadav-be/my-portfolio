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
    "linear-gradient(145deg, #0f2027, #203a43, #2c5364)",
    "linear-gradient(145deg, #0b0f1a, #111827)"
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
    >
      {/* Accent Border */}
      <Box
        position="absolute"
        inset="0"
        border="1px solid"
        borderColor="whiteAlpha.200"
        rounded="2xl"
        pointerEvents="none"
      />

      <Box
        bg={cardBg}
        rounded="xl"
        p={{ base: 5, md: 8 }}
        backdropFilter="blur(14px)"
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
            <b> structured, pattern-based approach</b>. This section helps you
            build problem-solving intuition the same way top interview platforms
            and senior engineers do.
          </Text>

          <Text fontSize="md" color={secondaryText} lineHeight="1.7">
            Each problem is organized by topic and pattern, supported with
            guided hints, starter logic, and progress tracking to ensure
            consistent improvement.
          </Text>

          {/* Feature Badges */}
          <HStack spacing={3} flexWrap="wrap">
            <Badge
              px={3}
              py={1}
              rounded="md"
              colorScheme="cyan"
              display="flex"
              alignItems="center"
              gap={2}
            >
              <FiLayers /> Structured Topics
            </Badge>

            <Badge
              px={3}
              py={1}
              rounded="md"
              colorScheme="green"
              display="flex"
              alignItems="center"
              gap={2}
            >
              <FiCheckSquare /> Progress Tracking
            </Badge>

            <Badge
              px={3}
              py={1}
              rounded="md"
              colorScheme="blue"
              display="flex"
              alignItems="center"
              gap={2}
            >
              <FiCode /> Hints & Pseudocode
            </Badge>

            <Badge
              px={3}
              py={1}
              rounded="md"
              colorScheme="purple"
              display="flex"
              alignItems="center"
              gap={2}
            >
              <FiTrendingUp /> Interview Patterns
            </Badge>

            <Badge
              px={3}
              py={1}
              rounded="md"
              colorScheme="orange"
              display="flex"
              alignItems="center"
              gap={2}
            >
              <FiBook /> Guided Learning
            </Badge>
          </HStack>

          <Divider borderColor="whiteAlpha.300" />

          {/* What You'll Learn */}
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
              • Solve problems using proven patterns instead of brute force.
            </Text>
            <Text fontSize="sm" color={secondaryText}>
              • Build consistency with topic-wise and difficulty-wise tracking.
            </Text>
            <Text fontSize="sm" color={secondaryText}>
              • Learn how to approach unseen problems systematically.
            </Text>
            <Text fontSize="sm" color={secondaryText}>
              • Strengthen DSA fundamentals for interviews and real projects.
            </Text>
          </VStack>

          {/* Footer Tip */}
          <Text
            fontSize="sm"
            color="cyan.300"
            fontWeight="medium"
            pt={2}
          >
            Best practice: Start with Easy patterns, master the logic, then
            gradually move towards Medium and Hard problems.
          </Text>
        </VStack>
      </Box>
    </MotionBox>
  );
}
