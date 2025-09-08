// src/components/PatternExplorerIntro.jsx
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Tag,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiList, FiCheckCircle, FiCode, FiZap, FiBookOpen } from "react-icons/fi";

const MotionBox = motion(Box);

export default function PatternExplorerIntro() {
  const bg = useColorModeValue("orange.50", "orange.900");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const secondaryText = useColorModeValue("gray.700", "gray.300");
  const highlight = useColorModeValue("orange.500", "orange.300");

  return (
    <MotionBox
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      bg={bg}
      p={8}
      mb={6}
      rounded="2xl"
      shadow="2xl"
      borderLeftWidth={6}
      borderLeftColor={highlight}
    >
      <VStack align="start" spacing={4}>
        <Heading
          size="xl"
          color={textColor}
          bgGradient="linear(to-r, orange.400, red.500)"
          bgClip="text"
        >
          🧩 Explore DSA Practice Paths
        </Heading>

        <Text fontSize="md" color={secondaryText}>
          Here you can **practice coding problems structured by topics and patterns**, track your progress,
          and learn systematically. Perfect for students and beginners aiming to strengthen their
          problem-solving skills.
        </Text>

        <Text fontSize="md" color={secondaryText}>
          Each problem comes with hints, starter pseudocode, and guidance so you can **solve it step by step**.
          Mark problems done to track your growth, and see your progress with interactive stats.
        </Text>

        <HStack spacing={3} wrap="wrap">
          <Tag
            size="lg"
            borderRadius="full"
            px={3}
            py={1}
            fontWeight="bold"
            colorScheme="teal"
            leftIcon={<FiList />}
            cursor="pointer"
            _hover={{ transform: "scale(1.05)", shadow: "lg" }}
          >
            Structured Topics
          </Tag>

          <Tag
            size="lg"
            borderRadius="full"
            px={3}
            py={1}
            fontWeight="bold"
            colorScheme="green"
            leftIcon={<FiCheckCircle />}
            cursor="pointer"
            _hover={{ transform: "scale(1.05)", shadow: "lg" }}
          >
            Track Progress
          </Tag>

          <Tag
            size="lg"
            borderRadius="full"
            px={3}
            py={1}
            fontWeight="bold"
            colorScheme="blue"
            leftIcon={<FiCode />}
            cursor="pointer"
            _hover={{ transform: "scale(1.05)", shadow: "lg" }}
          >
            Hints & Pseudocode
          </Tag>

          <Tag
            size="lg"
            borderRadius="full"
            px={3}
            py={1}
            fontWeight="bold"
            colorScheme="yellow"
            leftIcon={<FiZap />}
            cursor="pointer"
            _hover={{ transform: "scale(1.05)", shadow: "lg" }}
          >
            Real Coding Patterns
          </Tag>

          <Tag
            size="lg"
            borderRadius="full"
            px={3}
            py={1}
            fontWeight="bold"
            colorScheme="red"
            leftIcon={<FiBookOpen />}
            cursor="pointer"
            _hover={{ transform: "scale(1.05)", shadow: "lg" }}
          >
            Step-by-step Guidance
          </Tag>
        </HStack>

        <Divider borderColor={highlight} />

        <VStack align="start" spacing={2}>
          <Text fontSize="md" color={secondaryText}>
            💡 What you’ll learn:
          </Text>
          <Text color={secondaryText}>• Solve problems by patterns and difficulty levels.</Text>
          <Text color={secondaryText}>• Track your completed problems and overall progress.</Text>
          <Text color={secondaryText}>• Read hints and starter pseudocode to implement solutions.</Text>
          <Text color={secondaryText}>• Understand real coding patterns used in interviews.</Text>
          <Text color={secondaryText}>• Learn step-by-step approaches to strengthen problem-solving skills.</Text>
        </VStack>

        <Text fontSize="sm" color={highlight} fontWeight="semibold" mt={2}>
          🎯 Tip: Filter topics, mark problems done, and gradually progress from Easy → Medium → Hard
          for maximum learning!
        </Text>
      </VStack>
    </MotionBox>
  );
}
