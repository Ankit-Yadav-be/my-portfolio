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

const KeysAndReferentialIntegrity = () => {
  const cardBg = useColorModeValue("gray.50", "gray.800");

  return (
    <Box>
      <Heading size="lg" mb={4}>
        🔑 Keys & Referential Integrity
      </Heading>

      <Text fontSize="md" mb={4}>
        In DBMS, <b>keys</b> are used to uniquely identify records, and{" "}
        <b>referential integrity</b> ensures that relationships between tables
        remain valid and consistent.
      </Text>

      {/* ================= KEYS ================= */}
      <Box bg={cardBg} p={5} borderRadius="lg" mb={6}>
        <Heading size="md" mb={3}>
           What are Keys in DBMS?
        </Heading>
        <Text mb={3}>
          A <b>key</b> is an attribute (or set of attributes) that helps identify
          a row uniquely in a table and establishes relationships between tables.
        </Text>

        <Code display="block" p={3} whiteSpace="pre">
{`Student(id, name, email, phone)`}        
        </Code>
      </Box>

      <Heading size="md" mb={3}>
        Types of Keys
      </Heading>

      <VStack align="stretch" spacing={6}>
        {/* Primary Key */}
        <Box bg={cardBg} p={5} borderRadius="lg">
          <Heading size="sm" mb={2}>
            🔹 1. Primary Key
          </Heading>
          <Text mb={2}>
            A <b>primary key</b> uniquely identifies each record in a table.
          </Text>
          <List spacing={1} mb={2}>
            <ListItem>• Cannot be NULL</ListItem>
            <ListItem>• Must be unique</ListItem>
            <ListItem>• Only one primary key per table</ListItem>
          </List>
          <Code display="block" p={3}>
            Student(<b>id</b>, name, email)
          </Code>
        </Box>

        {/* Candidate Key */}
        <Box bg={cardBg} p={5} borderRadius="lg">
          <Heading size="sm" mb={2}>
            🔹 2. Candidate Key
          </Heading>
          <Text mb={2}>
            Candidate keys are attributes that <b>can become a primary key</b>.
          </Text>
          <Code display="block" p={3}>
            Student(id, email) → both are candidate keys
          </Code>
        </Box>

        {/* Super Key */}
        <Box bg={cardBg} p={5} borderRadius="lg">
          <Heading size="sm" mb={2}>
            🔹 3. Super Key
          </Heading>
          <Text mb={2}>
            A super key is a set of attributes that <b>uniquely identify</b> a
            record, but may contain extra attributes.
          </Text>
          <Code display="block" p={3}>
            (id, email) → Super Key
          </Code>
        </Box>

        {/* Alternate Key */}
        <Box bg={cardBg} p={5} borderRadius="lg">
          <Heading size="sm" mb={2}>
            🔹 4. Alternate Key
          </Heading>
          <Text mb={2}>
            Candidate keys that are <b>not chosen</b> as primary key.
          </Text>
          <Code display="block" p={3}>
            Primary Key = id → email becomes Alternate Key
          </Code>
        </Box>

        {/* Foreign Key */}
        <Box bg={cardBg} p={5} borderRadius="lg">
          <Heading size="sm" mb={2}>
            🔹 5. Foreign Key
          </Heading>
          <Text mb={2}>
            A <b>foreign key</b> is used to create a relationship between two
            tables.
          </Text>
          <Code display="block" p={3} whiteSpace="pre">
{`Student(id, name)
Order(order_id, student_id)

student_id → Foreign Key`}          
          </Code>
        </Box>

        {/* Composite Key */}
        <Box bg={cardBg} p={5} borderRadius="lg">
          <Heading size="sm" mb={2}>
            🔹 6. Composite Key
          </Heading>
          <Text mb={2}>
            A composite key consists of <b>more than one attribute</b>.
          </Text>
          <Code display="block" p={3}>
            Enrollment(student_id, course_id)
          </Code>
        </Box>
      </VStack>

      <Divider my={8} />

      {/* ================= REFERENTIAL INTEGRITY ================= */}
      <Heading size="lg" mb={4}>
        🔗 Referential Integrity
      </Heading>

      <Text mb={4}>
        <b>Referential Integrity</b> ensures that a foreign key always refers to
        an existing primary key in another table.
      </Text>

      <Box bg={cardBg} p={5} borderRadius="lg" mb={6}>
        <Heading size="md" mb={2}>
           Why Referential Integrity is Needed?
        </Heading>
        <List spacing={2}>
          <ListItem>✔ Prevents invalid data insertion</ListItem>
          <ListItem>✔ Maintains table relationships</ListItem>
          <ListItem>✔ Ensures data consistency</ListItem>
        </List>
      </Box>

      {/* Constraints */}
      <Heading size="md" mb={3}>
        Referential Integrity Constraints
      </Heading>

      <VStack align="stretch" spacing={6}>
        {/* Insert Constraint */}
        <Box bg={cardBg} p={5} borderRadius="lg">
          <Heading size="sm" mb={2}>
            🔹 1. INSERT Constraint
          </Heading>
          <Text>
            You cannot insert a foreign key value if it does not exist in the
            parent table.
          </Text>
          <Code display="block" mt={3} p={3}>
            ❌ Order(student_id = 999) → student not present
          </Code>
        </Box>

        {/* Delete Constraint */}
        <Box bg={cardBg} p={5} borderRadius="lg">
          <Heading size="sm" mb={2}>
            🔹 2. DELETE Constraint
          </Heading>
          <Text mb={2}>
            A parent record cannot be deleted if child records exist.
          </Text>
          <Code display="block" p={3}>
            ❌ Delete Student → Orders still exist
          </Code>
        </Box>

        {/* Update Constraint */}
        <Box bg={cardBg} p={5} borderRadius="lg">
          <Heading size="sm" mb={2}>
            🔹 3. UPDATE Constraint
          </Heading>
          <Text mb={2}>
            Updating a primary key affects related foreign keys.
          </Text>
          <Code display="block" p={3}>
            ON UPDATE CASCADE
          </Code>
        </Box>
      </VStack>

      <Divider my={6} />

      {/* Summary */}
      <Box bg={cardBg} p={5} borderRadius="lg">
        <Heading size="md" mb={2}>
          ✔ Interview Summary
        </Heading>
        <List spacing={2}>
          <ListItem>🔑 Keys uniquely identify records</ListItem>
          <ListItem>🔗 Foreign keys connect tables</ListItem>
          <ListItem>
            🛡 Referential integrity maintains valid relationships
          </ListItem>
          <ListItem>💡 Very important for real-world databases</ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default KeysAndReferentialIntegrity;
