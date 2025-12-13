// StartTupCarousel.jsx
// Advanced horizontal swipe carousel with left content (no cards) + right fixed video

import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Badge,
  Icon,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaPlayCircle,
  FaUsers,
  FaCode,
  FaChartLine,
} from "react-icons/fa";

const MotionBox = motion(Box);

const slides = [
  {
    title: "Problem Worth Solving",
    icon: FaUsers,
    content:
      "Local customers still depend on word-of-mouth to find reliable nearby services, while genuine business owners struggle to stand out digitally. Existing platforms are noisy, generic, and not truly location-intelligent.",
  },
  {
    title: "Product Vision & Solution",
    icon: FaRocket,
    content:
      "I designed and built a location-first Android product that connects customers with nearby businesses through smart discovery, real-time offers, and personalized local recommendations.",
  },
  {
    title: "How the Platform Works",
    icon: FaCode,
    content:
      "Customers explore & follow businesses, owners manage profiles and promotions, and admins ensure trust, security, and smooth platform operations — all within a unified system.",
  },
  {
    title: "Engineering & Scale",
    icon: FaChartLine,
    content:
      "Built with React Native (Expo), Node.js, Express, MongoDB, and Zustand. APIs are optimized with compression, clean data models, and scalable architecture designed for growth.",
  },
];

const StartTupCarousel = () => {
  const [index, setIndex] = useState(0);

  const bg = useColorModeValue("gray.50", "gray.900");

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box bg={bg} py={24} px={{ base: 4, md: 20 }}>
      <VStack spacing={14} maxW="1400px" mx="auto">
        {/* Header */}
        <VStack spacing={4} textAlign="center">
          <Badge colorScheme="purple" px={6} py={2} borderRadius="full">
            Startup Case Study
          </Badge>
          <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight="extrabold">
            Designing & Shipping a Real Startup Product
          </Text>
          <Text maxW="850px" fontSize="lg" color="gray.500">
            This section demonstrates how I identify real-world problems, translate them into product decisions, and engineer scalable solutions.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16} w="full">
          {/* LEFT : Horizontal swipe content */}
          <Box overflow="hidden">
            <MotionBox
              display="flex"
              drag="x"
              dragConstraints={{ left: -300, right: 0 }}
              animate={{ x: `-${index * 100}%` }}
              transition={{ ease: "easeInOut", duration: 0.6 }}
              w={`${slides.length * 100}%`}
            >
              {slides.map((slide, i) => (
                <Box key={i} w="100%" pr={10}>
                  <VStack align="start" spacing={6} maxW="520px">
                    <Icon as={slide.icon} boxSize={10} color="purple.400" />
                    <Text fontSize="3xl" fontWeight="bold">
                      {slide.title}
                    </Text>
                    <Text fontSize="lg" color="gray.500" lineHeight="tall">
                      {slide.content}
                    </Text>
                    <Text fontSize="sm" color="purple.400">
                      {i + 1} / {slides.length}
                    </Text>
                  </VStack>
                </Box>
              ))}
            </MotionBox>
          </Box>

          {/* RIGHT : Fixed video */}
          <MotionBox whileHover={{ scale: 1.04 }}>
            <VStack align="start" spacing={5}>
              <HStack>
                <Icon as={FaPlayCircle} boxSize={7} color="purple.400" />
                <Text fontSize="xl" fontWeight="bold">
                  Live Product Demonstration
                </Text>
              </HStack>

              <Box
                w="full"
                h={{ base: "240px", md: "340px" }}
                borderRadius="2xl"
                overflow="hidden"
                shadow="2xl"
              >
                <iframe
                  width="100%"
                  height="100%"
                  src="https://drive.google.com/file/d/1C_d_YMR5k8nL8zVFQNDN1eZ9maWUqHUM/preview"
                  title="Startup Demo"
                  frameBorder="0"
                  allowFullScreen
                />
              </Box>

              <Text fontSize="sm" color="gray.500">
                Real device recording — showcasing production-ready flows and UX decisions.
              </Text>
            </VStack>
          </MotionBox>
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default StartTupCarousel;