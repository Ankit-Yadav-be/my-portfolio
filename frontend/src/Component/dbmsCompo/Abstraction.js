import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Divider,
  Code,
  List,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";

const Abstraction = () => {
  const cardBg = useColorModeValue("gray.50", "gray.800");

  return (
    <Box>
      <Heading size="lg" mb={4}>
        1️⃣ Database Abstraction
      </Heading>

      <Text fontSize="md" mb={4}>
        <b>Database Abstraction</b> means hiding the complex internal details of
        a database system from users and showing only what is necessary.
      </Text>

      <Box bg={cardBg} p={5} borderRadius="lg" mb={6}>
        <Heading size="md" mb={2}>
          🎯 Goals of Database Abstraction
        </Heading>
        <List spacing={2}>
          <ListItem>✔ Reduce system complexity</ListItem>
          <ListItem>✔ Improve data security</ListItem>
          <ListItem>✔ Make database easier to use</ListItem>
          <ListItem>✔ Enable data independence</ListItem>
        </List>
      </Box>

      <Heading size="md" mb={3}>
        Levels of Database Abstraction
      </Heading>

      <VStack align="stretch" spacing={6}>
        {/* Physical Level */}
        <Box bg={cardBg} p={5} borderRadius="lg">
          <Heading size="sm" mb={2}>
            🔹 1. Physical Level (Lowest Level)
          </Heading>
          <Text mb={2}>
            Describes <b>how data is actually stored</b> on disk.
          </Text>
          <List spacing={1} mb={2}>
            <ListItem>• Data files</ListItem>
            <ListItem>• Indexes (B-Tree, Hash Index)</ListItem>
            <ListItem>• Data blocks</ListItem>
          </List>
          <Text fontStyle="italic">
            End users and developers usually do not interact with this level.
          </Text>

          <Code display="block" mt={3} p={2}>
            Example: How MySQL stores table data using B-Tree indexes internally
          </Code>
        </Box>

        {/* Logical Level */}
        <Box bg={cardBg} p={5} borderRadius="lg">
          <Heading size="sm" mb={2}>
            🔹 2. Logical Level (Conceptual Level)
          </Heading>
          <Text mb={2}>
            Describes <b>what data is stored</b> and <b>relationships</b> between
            the data.
          </Text>
          <Text mb={2}>This level is defined using database schema.</Text>

          <Code display="block" p={3} whiteSpace="pre">
{`Student(id, name, email)
Course(id, title)
Enrollment(student_id, course_id)`}
          </Code>

          <Text mt={2}>
            Developers and database designers mainly work at this level.
          </Text>
        </Box>

        {/* View Level */}
        <Box bg={cardBg} p={5} borderRadius="lg">
          <Heading size="sm" mb={2}>
            🔹 3. View Level (Highest Level)
          </Heading>
          <Text mb={2}>
            Shows only <b>required data</b> to a specific user.
          </Text>
          <List spacing={1}>
            <ListItem>• Different views for different users</ListItem>
            <ListItem>• Improves security</ListItem>
          </List>

          <Code display="block" mt={3} p={2}>
            Admin → All student details  
            Student → Only name and email
          </Code>
        </Box>
      </VStack>

      <Divider my={6} />

      <Box bg={cardBg} p={5} borderRadius="lg">
        <Heading size="md" mb={2}>
          ✔ Why Database Abstraction is Important?
        </Heading>
        <List spacing={2}>
          <ListItem>🔐 Better data security</ListItem>
          <ListItem>⚙ Easier database management</ListItem>
          <ListItem>
            🔄 Physical storage changes do not affect users or applications
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Abstraction;
