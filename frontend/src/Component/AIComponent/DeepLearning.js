import React, { useState } from "react";
import {
  Box,
  Flex,
  VStack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import Introduction from "./Introduction";
import PerceptronNotes from "./Perceptron";

const DeepLearning = () => {
  const [activeTopic, setActiveTopic] = useState("intro");

  const sidebarBg = useColorModeValue("gray.50", "gray.900");
  const contentBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  const renderComponent = () => {
    switch (activeTopic) {
      case "intro":
        return <Introduction />;
        case "perceptron":
        return <PerceptronNotes />; 
      default:
        return <Introduction />;
    }
  };

  return (
    <Flex
      mt="80px"
      minH="calc(100vh - 80px)"
      direction={{ base: "column", md: "row" }}
    >
      {/* ================= LEFT SIDEBAR ================= */}
      <Box
        w={{ base: "100%", md: "30%" }}
        bg={sidebarBg}
        borderRight={{ base: "none", md: "1px solid" }}
        borderBottom={{ base: "1px solid", md: "none" }}
        borderColor={borderColor}
        p={6}
        position={{ base: "static", md: "sticky" }}
        top={{ md: "80px" }}
        alignSelf="flex-start"
      >
        <Heading size="md" mb={1}>
          Deep Learning
        </Heading>
        <Text fontSize="sm" color="gray.500" mb={5}>
          Concepts for ML / AI / SDE interviews
        </Text>

        <VStack align="stretch" spacing={2}>
          <Button
            justifyContent="flex-start"
            variant={activeTopic === "intro" ? "solid" : "ghost"}
            colorScheme="purple"
            onClick={() => setActiveTopic("intro")}
          >
            Introduction
          </Button>

             <Button
            justifyContent="flex-start"
            variant={activeTopic === "perceptron" ? "solid" : "ghost"}
            colorScheme="purple"
            onClick={() => setActiveTopic("perceptron")}
          >
            Perceptron
          </Button>
        </VStack>
      </Box>

      {/* ================= RIGHT CONTENT ================= */}
      <Box
        w={{ base: "100%", md: "70%" }}
        bg={contentBg}
        p={{ base: 4, md: 8 }}
        minH="100%"
        overflow={{ base: "visible", md: "auto" }}
      >
        {renderComponent()}
      </Box>
    </Flex>
  );
};

export default DeepLearning;
