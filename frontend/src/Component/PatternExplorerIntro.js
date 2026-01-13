import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Divider,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FiLayers,
  FiCheckSquare,
  FiCode,
  FiTrendingUp,
  FiBook,
  FiArrowRight,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const MotionBox = motion(Box);

export default function PatternExplorerIntro() {
  const navigate = useNavigate();

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

      {/* Bottom Glow */}
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

      {/* Border */}
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
          <Heading size="lg" color={primaryText} fontWeight="bold">
            DSA Pattern Explorer
          </Heading>

          <Text fontSize="md" color={secondaryText} lineHeight="1.7">
            Practice Data Structures and Algorithms through a{" "}
            <b>structured, pattern-based approach</b>. This module trains your
            brain to recognize problem patterns just like experienced
            interviewers expect.
          </Text>

          <Text fontSize="md" color={secondaryText} lineHeight="1.7">
            Problems are organized topic-wise and difficulty-wise, supported
            with hints, starter logic, and progress tracking.
          </Text>

          {/* Badges */}
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

          {/* Outcomes */}
          <VStack align="start" spacing={2}>
            <Text fontSize="sm" fontWeight="semibold" color={accent}>
              WHAT YOU WILL ACHIEVE
            </Text>
            <Text fontSize="sm" color={secondaryText}>
              • Solve problems using proven DSA patterns.
            </Text>
            <Text fontSize="sm" color={secondaryText}>
              • Build strong interview consistency.
            </Text>
            <Text fontSize="sm" color={secondaryText}>
              • Approach unseen problems confidently.
            </Text>
            <Text fontSize="sm" color={secondaryText}>
              • Strengthen core DSA fundamentals.
            </Text>
          </VStack>

          {/* Tip */}
          <Text fontSize="sm" color="cyan.300" fontWeight="medium">
            Pro tip: Patterns repeat everywhere — master them once.
          </Text>

          {/* ================= DSA FORMULA CTA ================= */}
          <Box
            mt={6}
            pt={5}
            w="100%"
            borderTop="1px solid"
            borderColor="whiteAlpha.300"
          >
            <HStack spacing={4} justify="space-between" flexWrap="wrap">
              <Text fontSize="sm" color={secondaryText} maxW="420px">
                Revise all <b>Maths, Bit Manipulation, Binary Search</b> formulas
                used in LeetCode & SDE interviews — in one place.
              </Text>

              <Button
                onClick={() => navigate("/formula")}
                leftIcon={<FiBook />}
                rightIcon={<FiArrowRight />}
                px={6}
                py={5}
                rounded="xl"
                bgGradient="linear(to-r, purple.400, pink.500)"
                color="white"
                fontWeight="bold"
                _hover={{
                  transform: "translateY(-2px)",
                  shadow: "xl",
                }}
              >
                Open Formula Handbook
              </Button>
            </HStack>
          </Box>

          {/* ================= JAVA CTA ================= */}
          <Box
            mt={4}
            pt={5}
            w="100%"
            borderTop="1px solid"
            borderColor="whiteAlpha.300"
          >
            <HStack spacing={4} justify="space-between" flexWrap="wrap">
              <Text fontSize="sm" color={secondaryText} maxW="420px">
                Understand <b>how Java actually works internally</b> — JVM,
                memory, execution engine, GC & more.
              </Text>

              <Button
                onClick={() => navigate("/java")}
                rightIcon={<FiArrowRight />}
                px={6}
                py={5}
                rounded="xl"
                bgGradient="linear(to-r, cyan.400, blue.500)"
                color="gray.900"
                fontWeight="bold"
                _hover={{
                  transform: "translateY(-2px)",
                  shadow: "xl",
                }}
              >
                Explore Java Mastery
              </Button>
            </HStack>
          </Box>
        </VStack>
      </Box>
    </MotionBox>
  );
}
