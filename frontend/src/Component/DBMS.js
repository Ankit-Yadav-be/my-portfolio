import React, { useState } from "react";
import {
  Box,
  Flex,
  VStack,
  Button,
  Heading,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import Abstraction from "./dbmsCompo/Abstraction";
import Architecture from "./dbmsCompo/Architecture";

const DBMS = () => {
  const [activeTopic, setActiveTopic] = useState("abstraction");

  const sidebarBg = useColorModeValue("gray.50", "gray.900");
  const contentBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  const renderComponent = () => {
    switch (activeTopic) {
      case "abstraction":
        return <Abstraction />;
      case "architecture":
        return <Architecture />;
      default:
        return <Abstraction />;
    }
  };

  return (
    <Flex
      mt="80px" // navbar offset
      minH="calc(100vh - 80px)"
      direction={{ base: "column", md: "row" }}
    >
      {/* ========== LEFT SIDEBAR ========== */}
      <Box
        w={{ base: "100%", md: "30%" }}
        bg={sidebarBg}
        borderRight={{ base: "none", md: "1px solid" }}
        borderBottom={{ base: "1px solid", md: "none" }}
        borderColor={borderColor}
        p={6}
        position={{ base: "static", md: "sticky" }} // 🔥 FIX
        top={{ md: "80px" }}
        alignSelf="flex-start"
      >
        <Heading size="md" mb={2}>
          DBMS
        </Heading>
        <Text fontSize="sm" color="gray.500" mb={4}>
          Core database concepts for SDE interviews
        </Text>

        <VStack align="stretch" spacing={3}>
          <Button
            justifyContent="flex-start"
            variant={activeTopic === "abstraction" ? "solid" : "ghost"}
            colorScheme="blue"
            onClick={() => setActiveTopic("abstraction")}
          >
             Database Abstraction
          </Button>

          <Button
            justifyContent="flex-start"
            variant={activeTopic === "architecture" ? "solid" : "ghost"}
            colorScheme="blue"
            onClick={() => setActiveTopic("architecture")}
          >
             Database Architecture
          </Button>
        </VStack>
      </Box>

      {/* ========== RIGHT CONTENT ========== */}
      <Box
        w={{ base: "100%", md: "70%" }}
        bg={contentBg}
        p={{ base: 4, md: 8 }}
        minH="100%"
        overflow={{ base: "visible", md: "auto" }} // 🔥 FIX
      >
        {renderComponent()}
      </Box>
    </Flex>
  );
};

export default DBMS;
