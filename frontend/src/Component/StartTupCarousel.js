// StartTupCarousel.jsx
// Advanced recruiter-grade startup showcase with real carousel feel, progress indicators & premium motion

import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Button,
  Badge,
  Icon,
  SimpleGrid,
  useColorModeValue,
  Progress,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
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
    title: "The Real-World Problem",
    icon: FaUsers,
    content:
      "Customers struggle to discover trusted nearby businesses, while local business owners fail to reach the right audience. Existing platforms lack local intelligence and engagement depth.",
  },
  {
    title: "The Solution I Built",
    icon: FaRocket,
    content:
      "A location-first Android application that bridges customers and nearby businesses using smart discovery, promotions, and engagement workflows.",
  },
  {
    title: "Multi-Portal Platform",
    icon: FaCode,
    content:
      "Customer Portal for discovery & offers, Business Portal for growth & analytics, and Admin Portal for secure platform governance.",
  },
  {
    title: "Tech Stack & Scale",
    icon: FaChartLine,
    content:
      "React Native (Expo), Node.js, Express, MongoDB, Zustand with optimized APIs, compression, and scalable system design.",
  },
];

const StartTupCarousel = () => {
  const [index, setIndex] = useState(0);

  const bg = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box bg={bg} py={24} px={{ base: 4, md: 16 }}>
      <VStack spacing={16} maxW="1300px" mx="auto">
        {/* Header */}
        <VStack spacing={4} textAlign="center">
          <Badge colorScheme="purple" px={6} py={2} borderRadius="full">
            Startup Product Showcase
          </Badge>
          <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight="extrabold">
            From Problem Discovery to Scalable Product
          </Text>
          <Text maxW="800px" fontSize="lg" color="gray.500">
            A recruiter-focused demonstration of my startup mindset — user problems, architecture decisions, and execution quality.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={14} w="full">
          {/* Video */}
          <MotionBox
            bg={cardBg}
            borderRadius="3xl"
            p={6}
            shadow="2xl"
            whileHover={{ scale: 1.03 }}
          >
            <VStack align="start" spacing={5}>
              <HStack>
                <Icon as={FaPlayCircle} boxSize={7} color="purple.400" />
                <Text fontSize="xl" fontWeight="bold">
                  Live Product Demonstration
                </Text>
              </HStack>

              <Box
                w="full"
                h={{ base: "220px", md: "320px" }}
                borderRadius="2xl"
                overflow="hidden"
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
                Recorded from a real working build, showcasing production-level flows.
              </Text>
            </VStack>
          </MotionBox>

          {/* Advanced Carousel */}
          <Box position="relative" h="100%">
            <AnimatePresence mode="wait">
              <MotionBox
                key={index}
                bg={cardBg}
                borderRadius="3xl"
                p={10}
                shadow="2xl"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <VStack align="start" spacing={6}>
                  <Icon as={slides[index].icon} boxSize={10} color="purple.400" />
                  <Text fontSize="3xl" fontWeight="bold">
                    {slides[index].title}
                  </Text>
                  <Text fontSize="lg" color="gray.500" lineHeight="tall">
                    {slides[index].content}
                  </Text>

                  <HStack spacing={2} pt={4} w="full">
                    {slides.map((_, i) => (
                      <Progress
                        key={i}
                        value={i === index ? 100 : 0}
                        size="xs"
                        colorScheme="purple"
                        flex="1"
                        borderRadius="full"
                      />
                    ))}
                  </HStack>
                </VStack>
              </MotionBox>
            </AnimatePresence>
          </Box>
        </SimpleGrid>

        {/* CTA */}
        <MotionBox whileHover={{ scale: 1.08 }}>
          <Button size="lg" colorScheme="purple" rightIcon={<FaRocket />}>
            Explore My Product Thinking
          </Button>
        </MotionBox>
      </VStack>
    </Box>
  );
};

export default StartTupCarousel;