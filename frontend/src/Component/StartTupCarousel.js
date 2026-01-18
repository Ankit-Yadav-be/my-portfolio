// StartTupCarousel.jsx
// Real carousel UX: px-based swipe, snap-to-slide, arrows, dots, autoplay, pause-on-hover

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
import { motion } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const MotionBox = motion(Box);

const slides = [
  {
    title: "Problem Worth Solving",
    content:
      "Finding trusted nearby businesses is still painful for users, while genuine local businesses struggle to get discovered digitally. Existing platforms lack true local relevance and personalization.",
  },
  {
    title: "Product Vision & Solution",
    content:
      "I built a location-first Android product that intelligently connects customers and businesses through proximity-based discovery, offers, and personalized recommendations.",
  },
  {
    title: "How the Platform Works",
    content:
      "Customers explore & follow businesses, owners manage profiles and promotions, and admins ensure trust and smooth operations — all inside one scalable ecosystem.",
  },
  {
    title: "Engineering & Scalability",
    content:
      "Powered by React Native (Expo), Node.js, Express, MongoDB, and Zustand with optimized APIs, clean data modeling, and scale-ready architecture.",
  },
];

const StartTupCarousel = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [width, setWidth] = useState(0);
  const containerRef = useRef(null);

  const bg = useColorModeValue("gray.50", "gray.900");
  const muted = useColorModeValue("gray.500", "gray.400");

  // measure container width (important for real carousel)
  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.offsetWidth);
    }
    const handleResize = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () =>
    setIndex((i) => Math.min(i + 1, slides.length - 1));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  // autoplay
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
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
            Swipe naturally, click controls, or let it autoplay — designed for
            effortless exploration.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16} w="full">
          {/* LEFT : TRUE CAROUSEL */}
          <Box
            ref={containerRef}
            position="relative"
            overflow="hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <MotionBox
              display="flex"
              drag="x"
              dragConstraints={{
                left: -width * (slides.length - 1),
                right: 0,
              }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -width / 4 && index < slides.length - 1) {
                  setIndex(index + 1);
                } else if (info.offset.x > width / 4 && index > 0) {
                  setIndex(index - 1);
                }
              }}
              animate={{ x: -index * width }}
              transition={{ type: "spring", stiffness: 120, damping: 25 }}
            >
              {slides.map((slide, i) => (
                <Box key={i} minW={`${width}px`} pr={12}>
                  <VStack align="start" spacing={6} maxW="520px">
                    <Icon as={slide.icon} boxSize={10} color="purple.400" />
                    <Text fontSize="3xl" fontWeight="bold">
                      {slide.title}
                    </Text>
                    <Text fontSize="lg" color={muted} lineHeight="tall">
                      {slide.content}
                    </Text>
                    <Text fontSize="sm" color="purple.400">
                      {i + 1} / {slides.length}
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
                isDisabled={index === 0}
              />
              <IconButton
                aria-label="Next"
                icon={<FaChevronRight />}
                size="sm"
                onClick={next}
                isDisabled={index === slides.length - 1}
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
                  transition="all 0.2s"
                  onClick={() => setIndex(i)}
                />
              ))}
            </HStack>
          </Box>

          {/* RIGHT : VIDEO */}
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
              Real device recording — swipe-friendly, human-centered UX.
            </Text>
          </VStack>
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default StartTupCarousel;
