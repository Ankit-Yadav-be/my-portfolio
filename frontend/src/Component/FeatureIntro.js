import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Button,
  useBreakpointValue,
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
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Box
      position="relative"
      bg="#0b0f1a"
      py={{ base: 12, lg: 24 }}
      px={{ base: 4, lg: 8 }}
      overflow="hidden"
      rounded="2xl"
      mb={8}
    >
      {/* Ambient background */}
      <Box
        position="absolute"
        inset={0}
        bg="radial-gradient(circle at top left, rgba(56,189,248,0.15), transparent 40%), radial-gradient(circle at bottom right, rgba(168,85,247,0.15), transparent 40%)"
        zIndex={0}
      />

      {/* Header */}
      <VStack spacing={4} textAlign="center" mb={12} position="relative" zIndex={1}>
        <Heading
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          fontWeight="800"
          letterSpacing="-0.02em"
        >
          Build, Deploy & Scale
        </Heading>
        <Text
          maxW="720px"
          color="gray.400"
          fontSize={{ base: "sm", md: "md" }}
          lineHeight="1.7"
        >
          Everything you need to go from solving problems to building
          production-ready, scalable applications using modern engineering
          practices.
        </Text>
      </VStack>

      {/* CONTENT */}
      <Box
        position="relative"
        maxW="1200px"
        mx="auto"
        zIndex={1}
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        gap={6}
      >
        {/* LEFT PANEL */}
        <MotionBox
          initial={{ opacity: 0, x: isMobile ? 0 : -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          flex={1}
          p={{ base: 6, md: 10 }}
          bg="rgba(56,189,248,0.12)"
          backdropFilter="blur(14px)"
          border="1px solid rgba(255,255,255,0.08)"
          borderRadius="2xl"
          clipPath={
            isMobile
              ? "none"
              : "polygon(0 0, 100% 0, 85% 100%, 0% 100%)"
          }
        >
          <VStack align="start" spacing={5}>
            <Heading fontSize="2xl" fontWeight="700">
              Build & Develop
            </Heading>

            <Text color="gray.300" lineHeight="1.7">
              Strengthen fundamentals through coding challenges, development
              hurdles, and AI-assisted guidance while building clean,
              maintainable applications.
            </Text>

            <HStack wrap="wrap" spacing={2}>
              <Badge colorScheme="green">
                <FiCpu /> Development
              </Badge>
              <Badge colorScheme="blue">
                <FiCode /> Coding
              </Badge>
              <Badge colorScheme="yellow">
                <FiZap /> AI Guidance
              </Badge>
            </HStack>
          </VStack>
        </MotionBox>

        {/* RIGHT PANEL */}
        <MotionBox
          initial={{ opacity: 0, x: isMobile ? 0 : 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          flex={1}
          p={{ base: 6, md: 10 }}
          bg="rgba(168,85,247,0.12)"
          backdropFilter="blur(14px)"
          border="1px solid rgba(255,255,255,0.08)"
          borderRadius="2xl"
          textAlign={isMobile ? "left" : "right"}
          clipPath={
            isMobile
              ? "none"
              : "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)"
          }
        >
          <VStack align={isMobile ? "start" : "end"} spacing={5}>
            <Heading fontSize="2xl" fontWeight="700">
              Deploy & Scale
            </Heading>

            <Text color="gray.300" lineHeight="1.7" maxW="420px">
              Learn scalable architecture, free deployment strategies, and
              optimization techniques used in real-world MERN applications.
            </Text>

            <HStack wrap="wrap" spacing={2} justify={isMobile ? "flex-start" : "flex-end"}>
              <Badge colorScheme="purple">
                <FiCloud /> Deployment
              </Badge>
              <Badge colorScheme="red">
                <FiDatabase /> Architecture
              </Badge>
            </HStack>
          </VStack>
        </MotionBox>
      </Box>

      {/* CTA */}
     {/* CTA */}
<Box
  textAlign="center"
  mt={16}
  position="relative"
  zIndex={1}
>
  <VStack spacing={6}>
    <Heading
      fontSize={{ base: "xl", md: "2xl" }}
      fontWeight="700"
      letterSpacing="-0.02em"
    >
      Practice Interview-Ready Problems
    </Heading>

    <Text color="gray.400" maxW="600px" fontSize="sm">
      Curated interview problems designed to strengthen fundamentals,
      backend thinking, and real-world problem solving.
    </Text>

    <HStack
      spacing={6}
      flexWrap="wrap"
      justify="center"
    >
      {/* JavaScript Button */}
      <Button
        rightIcon={<FiArrowRight />}
        size="lg"
        px={10}
        rounded="full"
        bgGradient="linear(to-r, cyan.400, blue.500)"
        color="white"
        shadow="0 0 25px rgba(56,189,248,0.45)"
        _hover={{
          transform: "translateY(-3px) scale(1.03)",
          shadow: "0 0 35px rgba(56,189,248,0.75)",
        }}
        _active={{ transform: "scale(0.98)" }}
        transition="all 0.25s ease"
        onClick={() => navigate("/javascript-interview")}
      >
        JavaScript Interview Problems
      </Button>

      {/* Node.js Button */}
      <Button
        rightIcon={<FiArrowRight />}
        size="lg"
        px={10}
        rounded="full"
        bgGradient="linear(to-r, green.400, teal.500)"
        color="white"
        shadow="0 0 25px rgba(34,197,94,0.45)"
        _hover={{
          transform: "translateY(-3px) scale(1.03)",
          shadow: "0 0 35px rgba(34,197,94,0.75)",
        }}
        _active={{ transform: "scale(0.98)" }}
        transition="all 0.25s ease"
        onClick={() => navigate("/nodejs-interview")}
      >
        Node.js Interview Problems
      </Button>
      <Button
        rightIcon={<FiArrowRight />}
        size="lg"
        px={10}
        rounded="full"
        bgGradient="linear(to-r, purple.400, pink.500)"
        color="white"
        shadow="0 0 25px rgba(168,85,247,0.45)"
        _hover={{
          transform: "translateY(-3px) scale(1.03)",
          shadow: "0 0 35px rgba(168,85,247,0.75)",
        }}
        _active={{ transform: "scale(0.98)" }}
        transition="all 0.25s ease"
        onClick={() => navigate("/react-interview")}
      >
        React Interview Problems
      </Button>
    </HStack>
  </VStack>
</Box>

    </Box>
  );
}
