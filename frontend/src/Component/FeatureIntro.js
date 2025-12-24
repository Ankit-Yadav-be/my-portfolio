// src/components/FeatureIntro.jsx
import {
  Box,
  Text,
  Heading,
  VStack,
  HStack,
  Stack,
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

  const navigate = useNavigate();

  return (
    <MotionBox
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      bg={bg}
      p={{ base: 4, sm: 6, md: 8 }}
      mb={6}
      rounded="2xl"
      shadow="2xl"
      borderLeftWidth={{ base: 4, md: 8 }}
      borderLeftColor={highlight}
    >
      <VStack align="start" spacing={{ base: 3, md: 4 }}>
        {/* Heading */}
        <Heading
          size={{ base: "md", sm: "lg", md: "xl" }}
          bgGradient="linear(to-r, teal.400, blue.500)"
          bgClip="text"
        >
          🚀 Master Coding, Deployment & Scalable Apps
        </Heading>

        {/* Intro Text */}
        <Text fontSize={{ base: "sm", md: "md" }} color={secondaryText}>
          This section is your <b>one-stop hub</b> for everything a student or beginner needs:
          from solving algorithm problems to building scalable MERN apps using
          <b> MVC architecture</b>.
        </Text>

        <Text fontSize={{ base: "sm", md: "md" }} color={secondaryText}>
          You’ll get practical guidance, code examples, and step-by-step solutions for:
        </Text>

        {/* Tags Section – Responsive */}
        <Stack
          direction={{ base: "column", sm: "row" }}
          wrap="wrap"
          spacing={3}
          justify={{ base: "center", sm: "flex-start" }}
          w="100%"
        >
          {[
            { label: "Development Hurdles", icon: <FiCpu />, color: "green" },
            { label: "Coding Challenges", icon: <FiCode />, color: "blue" },
            { label: "Free Deployment", icon: <FiCloud />, color: "purple" },
            { label: "AI Guidance", icon: <FiZap />, color: "yellow" },
            { label: "Scalable Architecture", icon: <FiDatabase />, color: "red" },
          ].map((item, i) => (
            <Tag
              key={i}
              size="lg"
              borderRadius="full"
              px={4}
              py={2}
              fontWeight="bold"
              colorScheme={item.color}
              leftIcon={item.icon}
              cursor="pointer"
              w={{ base: "100%", sm: "auto" }}
              justifyContent="center"
              _hover={{ transform: "scale(1.05)", shadow: "lg" }}
            >
              {item.label}
            </Tag>
          ))}
        </Stack>

        <Divider borderColor={highlight} />

        {/* Learn Section */}
        <Text fontSize={{ base: "sm", md: "md" }} color={secondaryText}>
          💡 You will learn:
        </Text>

        <VStack align="start" spacing={2}>
          {[
            "How to solve coding problems systematically.",
            "How to integrate AI models with sample code.",
            "Best practices for MERN apps using MVC.",
            "Deployment, scalability & optimization.",
            "Real-world project-based learning.",
          ].map((text, i) => (
            <Text key={i} fontSize={{ base: "sm", md: "md" }} color={secondaryText}>
              • {text}
            </Text>
          ))}
        </VStack>

        <Text
          fontSize={{ base: "xs", md: "sm" }}
          color={highlight}
          fontWeight="semibold"
          mt={2}
        >
          🎯 Tip: Start small, stay consistent, and build scalable solutions step by step.
        </Text>

        {/* CTA Button – Fully Responsive */}
        <Button
          mt={6}
          w={{ base: "100%", sm: "auto" }}
          px={8}
          py={6}
          colorScheme="teal"
          size="lg"
          fontWeight="bold"
          rounded="full"
          shadow="md"
          _hover={{ transform: "scale(1.05)", shadow: "xl" }}
          onClick={() => navigate("/javascript-interview")}
        >
          💻 Explore JS Interview Problems
        </Button>
      </VStack>
    </MotionBox>
  );
}
