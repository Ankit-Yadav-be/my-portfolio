// StartTupCarousel.jsx
// User-friendly, accessible carousel: auto-scroll + swipe + dots + arrows + pause-on-interaction

import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Badge,
  Icon,
  SimpleGrid,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { motion, useMotionValue } from "framer-motion";
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

const slides = [
  {
    title: "Problem Worth Solving",
    icon: FaUsers,
    content:
      "Finding trusted nearby businesses is still painful for users, while genuine local businesses struggle to get discovered digitally. Existing platforms lack true local relevance and personalization.",
  },
  {
    title: "Product Vision & Solution",
    icon: FaRocket,
    content:
      "I built a location-first Android product that intelligently connects customers and businesses through proximity-based discovery, offers, and personalized recommendations.",
  },
  {
    title: "How the Platform Works",
    icon: FaCode,
    content:
      "Customers explore & follow businesses, owners manage profiles and promotions, and admins ensure trust and smooth operations — all inside one scalable ecosystem.",
  },
  {
    title: "Engineering & Scalability",
    icon: FaChartLine,
    content:
      "Powered by React Native (Expo), Node.js, Express, MongoDB, and Zustand with optimized APIs, clean data modeling, and scale-ready architecture.",
  },
];

const StartTupCarousel = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const x = useMotionValue(0);
  const containerRef = useRef(null);

  const bg = useColorModeValue("gray.50", "gray.900");
  const muted = useColorModeValue("gray.500", "gray.400");

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

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
          <Text maxW="850px" fontSize="lg" color={muted}>
            Explore this section at your own pace — swipe, click, or let it play automatically.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16} w="full">
          {/* LEFT : Accessible Carousel */}
          <Box
            position="relative"
            overflow="hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            ref={containerRef}
          >
            <MotionBox
              display="flex"
              drag="x"
              style={{ x }}
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) next();
                if (info.offset.x > 80) prev();
              }}
              animate={{ x: `-${index * 100}%` }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
              w={`${slides.length * 100}%`}
            >
              {slides.map((slide, i) => (
                <Box key={i} w="100%" pr={12}>
                  <VStack align="start" spacing={6} maxW="520px">
                    <Icon as={slide.icon} boxSize={10} color="purple.400" />
                    <Text fontSize="3xl" fontWeight="bold">
                      {slide.title}
                    </Text>
                    <Text fontSize="lg" color={muted} lineHeight="tall">
                      {slide.content}
                    </Text>
                  </VStack>
                </Box>
              ))}
            </MotionBox>

            {/* Arrows */}
            <HStack position="absolute" bottom={0} left={0} spacing={2}>
              <IconButton
                aria-label="Previous"
                icon={<FaChevronLeft />}
                size="sm"
                onClick={prev}
              />
              <IconButton
                aria-label="Next"
                icon={<FaChevronRight />}
                size="sm"
                onClick={next}
              />
            </HStack>

            {/* Dots */}
            <HStack position="absolute" bottom={0} right={0} spacing={2}>
              {slides.map((_, i) => (
                <Box
                  key={i}
                  w={i === index ? 3 : 2}
                  h={i === index ? 3 : 2}
                  bg={i === index ? "purple.400" : "gray.400"}
                  borderRadius="full"
                  cursor="pointer"
                  onClick={() => setIndex(i)}
                />
              ))}
            </HStack>
          </Box>

          {/* RIGHT : Fixed video */}
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

            <Text fontSize="sm" color={muted}>
              Swipe the content or use controls — designed for effortless exploration.
            </Text>
          </VStack>
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default StartTupCarousel;