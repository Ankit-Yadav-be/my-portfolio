import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Divider,
  List,
  ListItem,
  Code,
  useColorModeValue,
} from "@chakra-ui/react";

const Architecture = () => {
  const cardBg = useColorModeValue("gray.50", "gray.800");

  return (
    <Box>
      <Heading size="lg" mb={4}>
        2️⃣ Database Architecture
      </Heading>

      <Text mb={4}>
        <b>Database Architecture</b> defines how database systems are structured
        and how users, applications, and databases interact with each other.
      </Text>

      <VStack align="stretch" spacing={6}>
        {/* 1 Tier */}
        <Box bg={cardBg} p={5} borderRadius="lg">
          <Heading size="md">🔹 1-Tier Architecture</Heading>
          <Text mt={2}>
            User directly interacts with the database without any middle layer.
          </Text>

          <List spacing={1} mt={2}>
            <ListItem>• Simple architecture</ListItem>
            <ListItem>• Used for local applications</ListItem>
          </List>

          <Code display="block" mt={3} p={2}>
            Example: SQLite used in a desktop application
          </Code>

          <Text mt={2} color="red.400">
            ❌ Not scalable & ❌ Not secure
          </Text>
        </Box>

        {/* 2 Tier */}
        <Box bg={cardBg} p={5} borderRadius="lg">
          <Heading size="md">🔹 2-Tier Architecture</Heading>
          <Text mt={2}>
            Client communicates directly with database server.
          </Text>

          <Code display="block" mt={3} p={2}>
            Client App ↔ MySQL Server
          </Code>

          <Text mt={2}>
            ✔ Better than 1-tier but ❌ limited scalability
          </Text>
        </Box>

        {/* 3 Tier */}
        <Box bg={cardBg} p={5} borderRadius="lg">
          <Heading size="md">
            🔹 3-Tier Architecture (MOST IMPORTANT 🔥)
          </Heading>

          <Code display="block" mt={3} p={3} whiteSpace="pre">
{`Presentation Layer → UI
Application Layer → Business Logic
Database Layer → Data Storage`}
          </Code>

          <Code display="block" mt={3} p={3} whiteSpace="pre">
{`React (Frontend)
   ↓
Node.js (API & Logic)
   ↓
MongoDB / MySQL`}
          </Code>

          <List spacing={2} mt={3}>
            <ListItem>✔ Highly scalable</ListItem>
            <ListItem>✔ Secure</ListItem>
            <ListItem>✔ Used in real-world applications</ListItem>
          </List>
        </Box>
      </VStack>

      <Divider my={6} />

      <Box bg={cardBg} p={5} borderRadius="lg">
        <Heading size="md">✔ Why 3-Tier Architecture is Preferred?</Heading>
        <List spacing={2} mt={2}>
          <ListItem>🔧 Easy maintenance</ListItem>
          <ListItem>🔐 High security</ListItem>
          <ListItem>⚖ Load balancing possible</ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Architecture;
