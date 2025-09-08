// src/components/FeatureIntro.jsx
import { Box, Text, Heading, VStack, HStack, Tag, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiCpu, FiCode, FiCloud } from "react-icons/fi";

const MotionBox = motion(Box);

export default function FeatureIntro() {
  const bg = useColorModeValue("teal.50", "teal.900");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const secondaryText = useColorModeValue("gray.700", "gray.300");
  const highlight = useColorModeValue("teal.600", "teal.300");

  return (
    <MotionBox
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      bg={bg}
      p={8}
      mb={6}
      rounded="2xl"
      shadow="xl"
      borderLeftWidth={6}
      borderLeftColor={highlight}
    >
      <VStack align="start" spacing={4}>
        <Heading size="lg" color={textColor}>
          🚀 Kickstart Your Coding Journey
        </Heading>

        <Text fontSize="md" color={secondaryText}>
          Struggling with development setups, deploying projects for free, or finding real problems to practice?
          This section is built for students and beginners to overcome those hurdles.
        </Text>

        <Text fontSize="md" color={secondaryText}>
          Here you can explore curated programming problems, filter by difficulty or category, and practice step by step.
          Each problem helps you learn coding systematically while simulating real-world challenges.
        </Text>

        <HStack spacing={3} wrap="wrap">
          <Tag
            size="lg"
            colorScheme="green"
            borderRadius="full"
            px={3}
            py={1}
            fontWeight="bold"
            leftIcon={<FiCpu />}
          >
            Development Hurdles
          </Tag>

          <Tag
            size="lg"
            colorScheme="blue"
            borderRadius="full"
            px={3}
            py={1}
            fontWeight="bold"
            leftIcon={<FiCode />}
          >
            Coding Challenges
          </Tag>

          <Tag
            size="lg"
            colorScheme="purple"
            borderRadius="full"
            px={3}
            py={1}
            fontWeight="bold"
            leftIcon={<FiCloud />}
          >
            Free Deployment
          </Tag>
        </HStack>

        <Text fontSize="sm" color={highlight} fontWeight="semibold" mt={2}>
          💡 Tip: Start with "Easy" problems and gradually move to "Medium" and "Hard" to build confidence!
        </Text>
      </VStack>
    </MotionBox>
  );
}
