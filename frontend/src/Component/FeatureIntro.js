// src/components/FeatureIntro.jsx
import {
  Box,
  Text,
  Heading,
  VStack,
  HStack,
  Tag,
  useColorModeValue,
  Divider,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiCpu, FiCode, FiCloud, FiZap, FiDatabase } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const MotionBox = motion(Box);

export default function FeatureIntro() {
  const bg = useColorModeValue("teal.50", "teal.900");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const secondaryText = useColorModeValue("gray.700", "gray.300");
  const highlight = useColorModeValue("teal.600", "teal.300");
  const tagBg = useColorModeValue("whiteAlpha.800", "blackAlpha.400");

  const navigate = useNavigate();

  const handleJSInterviewClick = () => {
    navigate("/javascript-interview"); // Your page route
  };

  return (
    <MotionBox
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      bg={bg}
      p={8}
      mb={6}
      rounded="2xl"
      shadow="2xl"
      borderLeftWidth={8}
      borderLeftColor={highlight}
      borderTopRadius="3xl"
      borderBottomRadius="3xl"
    >
      <VStack align="start" spacing={4}>
        <Heading
          size="xl"
          color={textColor}
          bgGradient="linear(to-r, teal.400, blue.500)"
          bgClip="text"
        >
          🚀 Master Coding, Deployment & Scalable Apps
        </Heading>

        <Text fontSize="md" color={secondaryText}>
          This section is your **one-stop hub** for everything a student or beginner needs:
          from solving algorithm problems, exploring different AI models, to building scalable
          MERN apps using best practices like the **MVC pattern**.
        </Text>

        <Text fontSize="md" color={secondaryText}>
          You’ll get **practical guidance, code examples, and step-by-step solutions** to real-world
          problems, including:
        </Text>

        <HStack spacing={3} wrap="wrap">
          <Tag
            size="lg"
            borderRadius="full"
            px={3}
            py={1}
            fontWeight="bold"
            colorScheme="green"
            leftIcon={<FiCpu />}
            cursor="pointer"
            _hover={{ transform: "scale(1.05)", shadow: "lg" }}
          >
            Development Hurdles
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
            Coding Challenges
          </Tag>

          <Tag
            size="lg"
            borderRadius="full"
            px={3}
            py={1}
            fontWeight="bold"
            colorScheme="purple"
            leftIcon={<FiCloud />}
            cursor="pointer"
            _hover={{ transform: "scale(1.05)", shadow: "lg" }}
          >
            Free Deployment
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
            AI Guidance
          </Tag>

          <Tag
            size="lg"
            borderRadius="full"
            px={3}
            py={1}
            fontWeight="bold"
            colorScheme="red"
            leftIcon={<FiDatabase />}
            cursor="pointer"
            _hover={{ transform: "scale(1.05)", shadow: "lg" }}
          >
            Scalable Architecture
          </Tag>
        </HStack>

        <Divider borderColor={highlight} />

        <Text fontSize="md" color={secondaryText}>
          💡 You will learn:
        </Text>

        <VStack align="start" spacing={2}>
          <Text color={secondaryText}>• How to solve coding problems systematically.</Text>
          <Text color={secondaryText}>
            • How to implement different AI models in your projects with sample code.
          </Text>
          <Text color={secondaryText}>
            • Best practices for building **MERN apps using MVC pattern**.
          </Text>
          <Text color={secondaryText}>
            • Guidance on **deployment**, scalability, and project optimization.
          </Text>
          <Text color={secondaryText}>
            • Real-world examples and step-by-step tutorials for students and beginners.
          </Text>
        </VStack>

        <Text fontSize="sm" color={highlight} fontWeight="semibold" mt={2}>
          🎯 Tip: Start with easy problems to build confidence, explore AI integration gradually, 
          and learn scalable patterns step by step!
        </Text>

        {/* New Button */}
        <Button
          mt={6}
          colorScheme="teal"
          size="lg"
          fontWeight="bold"
          rounded="full"
          shadow="md"
          _hover={{ transform: "scale(1.05)", shadow: "xl" }}
          onClick={handleJSInterviewClick}
        >
          💻 Explore JS Interview Problems
        </Button>
      </VStack>
    </MotionBox>
  );
}
