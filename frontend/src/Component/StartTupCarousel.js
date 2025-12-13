// StartTupCarousel.jsx
// A recruiter-focused startup showcase carousel with demo video, vision, tech stack & impact

import React, { useState } from "react";
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
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaPlayCircle,
  FaUsers,
  FaCode,
  FaChartLine,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const MotionBox = motion(Box);

// ---- DATA (you can edit freely) ----
const slides = [
  {
    title: "The Real-World Problem",
    icon: FaUsers,
    content:
      "Even today, customers struggle to discover trusted nearby businesses, while local business owners fail to promote their services effectively to the right audience. Existing platforms lack true local focus, personalization, and engagement.",
  },
  {
    title: "The Solution I Built",
    icon: FaRocket,
    content:
      "A location-based Android application that smartly connects customers and nearby businesses. It enables discovery, promotion, and engagement — all optimized for local ecosystems.",
  },
  {
    title: "Platform Features",
    icon: FaCode,
    content:
      "Customer Portal (discover, follow & get offers), Business Owner Portal (manage profiles, deals & analytics), and Admin Portal (monitor platform activity securely).",
  },
  {
    title: "Tech Stack & Performance",
    icon: FaChartLine,
    content:
      "React Native (Expo), Node.js, Express, MongoDB, Zustand. Optimized APIs with compression, scalable architecture, and accurate location-based services.",
  },
  {
    title: "Impact & Vision",
    icon: FaChartLine,
    content:
      "Designed to empower local businesses, boost nearby discovery, and create a sustainable local digital economy. Built with scalability, performance, and real users in mind.",
  },
];

const StartTupCarousel = () => {
  const [index, setIndex] = useState(0);

  const bg = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");

  const prev = () => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));

  return (
    <Box bg={bg} py={20} px={{ base: 4, md: 16 }}>
      <VStack spacing={12} maxW="1200px" mx="auto">
        {/* Header */}
        <VStack spacing={3} textAlign="center">
          <Badge colorScheme="purple" px={4} py={1} borderRadius="full">
            Startup Showcase
          </Badge>
          <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
            Building a Real-World, Location-Based Startup Product
          </Text>
          <Text maxW="700px" color="gray.500">
            A real startup-style application focused on solving local discovery, business promotion, and user engagement problems with clean architecture and scalable systems.
          </Text>
        </VStack>

        {/* Video + Carousel */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} w="full">
          {/* Video Section */}
          <MotionBox
            bg={cardBg}
            borderRadius="2xl"
            p={6}
            shadow="xl"
            whileHover={{ scale: 1.02 }}
          >
            <VStack align="start" spacing={4}>
              <HStack>
                <Icon as={FaPlayCircle} color="purple.400" boxSize={6} />
                <Text fontSize="xl" fontWeight="semibold">
                  Product Demo
                </Text>
              </HStack>

              {/* Replace VIDEO_ID with your YouTube video id */}
              <Box
                w="full"
                h={{ base: "200px", md: "280px" }}
                borderRadius="xl"
                overflow="hidden"
              >
                <iframe
                  width="100%"
                  height="100%"
                  src="https://drive.google.com/file/d/1C_d_YMR5k8nL8zVFQNDN1eZ9maWUqHUM/preview"
                  title="Startup Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </Box>

              <Text fontSize="sm" color="gray.500">
                Live working demo recorded from real environment.
              </Text>
            </VStack>
          </MotionBox>

          {/* Carousel Section */}
          <MotionBox
            bg={cardBg}
            borderRadius="2xl"
            p={8}
            shadow="xl"
            key={index}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <VStack align="start" spacing={6} h="full" justify="space-between">
              <VStack align="start" spacing={4}>
                <HStack>
                  <Icon as={slides[index].icon} boxSize={7} color="purple.400" />
                  <Text fontSize="2xl" fontWeight="bold">
                    {slides[index].title}
                  </Text>
                </HStack>
                <Text color="gray.500" fontSize="md">
                  {slides[index].content}
                </Text>
              </VStack>

              <HStack justify="space-between" w="full">
                <Button
                  onClick={prev}
                  leftIcon={<FaChevronLeft />}
                  variant="outline"
                >
                  Prev
                </Button>
                <Button
                  onClick={next}
                  rightIcon={<FaChevronRight />}
                  colorScheme="purple"
                >
                  Next
                </Button>
              </HStack>
            </VStack>
          </MotionBox>
        </SimpleGrid>

        {/* Recruiter CTA */}
        <MotionBox
          textAlign="center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring" }}
        >
          <Button size="lg" colorScheme="purple" rightIcon={<FaRocket />}>
            Interested in How I Build Products
          </Button>
        </MotionBox>
      </VStack>
    </Box>
  );
};

export default StartTupCarousel;
