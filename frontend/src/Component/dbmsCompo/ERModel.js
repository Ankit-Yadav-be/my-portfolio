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

const ERModel = () => {
  const cardBg = useColorModeValue("gray.50", "gray.800");
  const subtleText = useColorModeValue("gray.600", "gray.400");

  return (
    <Box>
      <Heading size="lg" mb={4}>
         ER (Entity–Relationship) Model
      </Heading>

      <Text fontSize="md" mb={6}>
        The <b>ER Model</b> is a high-level conceptual data model used to design
        the structure of a database before converting it into relational tables.
      </Text>

      {/* ================= WHY ER MODEL ================= */}
      <Box bg={cardBg} p={5} borderRadius="lg" mb={6}>
        <Heading size="md" mb={3}>
           Why ER Model?
        </Heading>
        <List spacing={2}>
          <ListItem>✔ Visualizes database structure clearly</ListItem>
          <ListItem>✔ Reduces design errors</ListItem>
          <ListItem>✔ Easy communication between client & developer</ListItem>
          <ListItem>✔ Blueprint for relational schema</ListItem>
        </List>
      </Box>

      {/* ================= ENTITY ================= */}
      <Heading size="md" mb={3}>
        1️⃣ Entity
      </Heading>
      <Text mb={3}>
        An <b>Entity</b> is a real-world object that can be uniquely identified.
      </Text>

      <Box bg={cardBg} p={5} borderRadius="lg" mb={5}>
        <Text mb={2}><b>Examples:</b></Text>
        <List spacing={1}>
          <ListItem>• Student</ListItem>
          <ListItem>• Employee</ListItem>
          <ListItem>• Course</ListItem>
        </List>
      </Box>

      {/* ENTITY TYPES */}
      <Heading size="sm" mb={2}>Types of Entity</Heading>

      <VStack spacing={4} align="stretch">
        <Box bg={cardBg} p={5} borderRadius="lg">
          <Heading size="sm" mb={2}>🔹 Strong Entity</Heading>
          <Text mb={2}>
            Has its own <b>primary key</b> and exists independently.
          </Text>
          <Code display="block" p={3}>
            Student(student_id, name, email)
          </Code>
          <Text mt={2} fontSize="sm" color={subtleText}>
            Representation: Rectangle
          </Text>
        </Box>

        <Box bg={cardBg} p={5} borderRadius="lg">
          <Heading size="sm" mb={2}>🔹 Weak Entity</Heading>
          <Text mb={2}>
            Depends on a strong entity and does not have its own primary key.
          </Text>
          <Code display="block" p={3}>
            Order → OrderItem(item_name, quantity)
          </Code>
          <Text mt={2} fontSize="sm" color={subtleText}>
            Representation: Double Rectangle
          </Text>
        </Box>
      </VStack>

      <Divider my={8} />

      {/* ================= ATTRIBUTES ================= */}
      <Heading size="md" mb={3}>
        2️⃣ Attributes
      </Heading>

      <Text mb={4}>
        An <b>attribute</b> describes the properties of an entity.
      </Text>

      <VStack spacing={4} align="stretch">
        <Box bg={cardBg} p={5} borderRadius="lg">
          <Heading size="sm" mb={2}>🔹 Types of Attributes</Heading>
          <List spacing={2}>
            <ListItem><b>Simple:</b> Age, RollNo</ListItem>
            <ListItem><b>Composite:</b> Address → Street, City, Pincode</ListItem>
            <ListItem><b>Single-valued:</b> Email</ListItem>
            <ListItem><b>Multi-valued:</b> Phone Numbers</ListItem>
            <ListItem><b>Derived:</b> Age (from DOB)</ListItem>
            <ListItem><b>Key Attribute:</b> student_id</ListItem>
          </List>
        </Box>
      </VStack>

      <Divider my={8} />

      {/* ================= RELATIONSHIP ================= */}
      <Heading size="md" mb={3}>
        3️⃣ Relationship
      </Heading>

      <Text mb={3}>
        A <b>relationship</b> shows how two or more entities are connected.
      </Text>

      <Box bg={cardBg} p={5} borderRadius="lg" mb={5}>
        <Code display="block" p={3}>
          Student — enrolls — Course
        </Code>
        <Text mt={2} fontSize="sm" color={subtleText}>
          Representation: Diamond
        </Text>
      </Box>

      <Heading size="sm" mb={2}>Cardinality Types</Heading>

      <Box bg={cardBg} p={5} borderRadius="lg" mb={6}>
        <List spacing={2}>
          <ListItem><b>1:1</b> → Person — Passport</ListItem>
          <ListItem><b>1:N</b> → Teacher — Students</ListItem>
          <ListItem><b>M:N</b> → Student — Course</ListItem>
        </List>
      </Box>

      {/* ================= DEGREE ================= */}
      <Heading size="md" mb={3}>
        4️⃣ Degree of Relationship
      </Heading>

      <Box bg={cardBg} p={5} borderRadius="lg" mb={6}>
        <List spacing={2}>
          <ListItem><b>Unary:</b> Employee manages Employee</ListItem>
          <ListItem><b>Binary:</b> Student enrolls Course</ListItem>
          <ListItem><b>Ternary:</b> Doctor treats Patient using Medicine</ListItem>
        </List>
      </Box>

      {/* ================= PARTICIPATION ================= */}
      <Heading size="md" mb={3}>
        5️⃣ Participation Constraints
      </Heading>

      <VStack spacing={4} align="stretch">
        <Box bg={cardBg} p={5} borderRadius="lg">
          <Heading size="sm" mb={2}>🔹 Total Participation</Heading>
          <Text>
            Every entity must participate in the relationship.
          </Text>
          <Code display="block" mt={2} p={2}>
            Every Order must have a Customer
          </Code>
        </Box>

        <Box bg={cardBg} p={5} borderRadius="lg">
          <Heading size="sm" mb={2}>🔹 Partial Participation</Heading>
          <Text>
            Some entities may or may not participate.
          </Text>
          <Code display="block" mt={2} p={2}>
            Employee may manage a Department
          </Code>
        </Box>
      </VStack>

      <Divider my={8} />

      {/* ================= INTERVIEW SUMMARY ================= */}
      <Box bg={cardBg} p={5} borderRadius="lg">
        <Heading size="md" mb={2}>
           Interview Summary
        </Heading>
        <List spacing={2}>
          <ListItem>✔ ER Model is a conceptual design tool</ListItem>
          <ListItem>✔ Weak entity depends on strong entity</ListItem>
          <ListItem>✔ Cardinality & participation are very important</ListItem>
          <ListItem>✔ Used before converting to relational schema</ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default ERModel;
