// src/components/FeatureIntro.jsx
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
  FiCpu,
  FiCode,
  FiCloud,
  FiZap,
  FiDatabase,
  FiArrowRight,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const MotionBox = motion(Box);

export default function FeatureIntro() {
  const navigate = useNavigate();

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
      mb={6}
    >
      {/* Subtle Border */}
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
            Build, Deploy & Scale Real-World Applications
          </Heading>

          {/* Intro */}
          <Text fontSize="md" color={secondaryText} lineHeight="1.7">
            This section focuses on transforming you from a problem solver into
            a <b>production-ready developer</b>. You will learn how modern
            applications are designed, deployed, and scaled in real systems.
          </Text>

          <Text fontSize="md" color={secondaryText} lineHeight="1.7">
            From coding challenges to MERN-based architectures, everything here
            follows industry-proven practices used by professional teams.
          </Text>

          {/* Feature Badges */}
          <HStack spacing={3} flexWrap="wrap">
            <Badge
              px={3}
              py={1}
              rounded="md"
              colorScheme="green"
              display="flex"
              alignItems="center"
              gap={2}
            >
              <FiCpu /> Development Hurdles
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
              <FiCode /> Coding Challenges
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
              <FiCloud /> Free Deployment
            </Badge>

            <Badge
              px={3}
              py={1}
              rounded="md"
              colorScheme="yellow"
              display="flex"
              alignItems="center"
              gap={2}
            >
              <FiZap /> AI-Assisted Guidance
            </Badge>

            <Badge
              px={3}
              py={1}
              rounded="md"
              colorScheme="red"
              display="flex"
              alignItems="center"
              gap={2}
            >
              <FiDatabase /> Scalable Architecture
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
              WHAT YOU WILL LEARN
            </Text>

            <Text fontSize="sm" color={secondaryText}>
              • Systematic approaches to solve coding problems.
            </Text>
            <Text fontSize="sm" color={secondaryText}>
              • How to integrate AI models with clean, maintainable code.
            </Text>
            <Text fontSize="sm" color={secondaryText}>
              • MERN best practices using MVC architecture.
            </Text>
            <Text fontSize="sm" color={secondaryText}>
              • Deployment strategies, scalability, and optimization.
            </Text>
            <Text fontSize="sm" color={secondaryText}>
              • Real-world project driven development mindset.
            </Text>
          </VStack>

          {/* CTA */}
          <Button
            mt={6}
            alignSelf="flex-start"
            rightIcon={<FiArrowRight />}
            colorScheme="cyan"
            size="lg"
            px={8}
            rounded="full"
            fontWeight="semibold"
            shadow="md"
            _hover={{
              transform: "translateY(-2px)",
              shadow: "xl",
            }}
            onClick={() => navigate("/javascript-interview")}
          >
            Explore JavaScript Interview Problems
          </Button>
        </VStack>
      </Box>
    </MotionBox>
  );
}
