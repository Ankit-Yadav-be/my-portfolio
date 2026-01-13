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

/* ================= IMPORT JAVA TOPIC COMPONENTS ================= */
import JVMFoundationNotes from "./JVMFoundation";


const JavaCore = () => {
  const [activeTopic, setActiveTopic] = useState("jvm");

  const sidebarBg = useColorModeValue("gray.50", "gray.900");
  const contentBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  const renderComponent = () => {
    switch (activeTopic) {
      case "jvm":
        return <JVMFoundationNotes />;

      default:
        return <JVMFoundationNotes />;
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
        w={{ base: "100%", md: "28%" }}
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
          Java Mastery
        </Heading>
        <Text fontSize="sm" color="gray.500" mb={5}>
          From JVM Internals to Advanced Java
        </Text>

        <VStack align="stretch" spacing={2}>
          <Button
            justifyContent="flex-start"
            variant={activeTopic === "jvm" ? "solid" : "ghost"}
            colorScheme="teal"
            onClick={() => setActiveTopic("jvm")}
          >
             JVM Architecture (Phase 0)
          </Button>

          
         

      
        </VStack>
      </Box>

      {/* ================= RIGHT CONTENT ================= */}
      <Box
        w={{ base: "100%", md: "72%" }}
        bg={contentBg}
        p={{ base: 4, md: 8 }}
        minH="100%"
      >
        {renderComponent()}
      </Box>
    </Flex>
  );
};

export default JavaCore;
