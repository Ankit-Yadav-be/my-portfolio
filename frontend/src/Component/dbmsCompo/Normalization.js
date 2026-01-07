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

const Normalization = () => {
  const cardBg = useColorModeValue("gray.50", "gray.800");
  const subtleText = useColorModeValue("gray.600", "gray.400");

  return (
    <Box>
      {/* ================= TITLE ================= */}
      <Heading size="lg" mb={4}>
         Normalization in DBMS
      </Heading>

      <Text fontSize="md" mb={6} color={subtleText}>
        Normalization is one of the most important concepts in DBMS interviews.
        It helps in organizing data efficiently, reducing redundancy, and
        ensuring data integrity.
      </Text>

      {/* ================= WHAT IS NORMALIZATION ================= */}
      <Box bg={cardBg} p={6} borderRadius="lg" mb={6}>
        <Heading size="md" mb={2}>
          1️⃣ What is Normalization?
        </Heading>
        <Text>
          <b>Normalization</b> is a systematic process of organizing data in a
          relational database to minimize redundancy and eliminate undesirable
          characteristics such as insertion, update, and deletion anomalies.
        </Text>
        <Text mt={2}>
          It decomposes large tables into smaller, well-structured tables based
          on logical rules.
        </Text>
      </Box>

      {/* ================= WHY NEEDED ================= */}
      <Box bg={cardBg} p={6} borderRadius="lg" mb={6}>
        <Heading size="md" mb={2}>
          2️⃣ Why is Normalization Needed?
        </Heading>

        <Text mb={3}>
          Without normalization, databases suffer from serious data consistency
          problems.
        </Text>

        <List spacing={2}>
          <ListItem>❌ Data redundancy (same data stored multiple times)</ListItem>
          <ListItem>❌ Update anomaly (updating data in many places)</ListItem>
          <ListItem>❌ Insertion anomaly (cannot insert partial data)</ListItem>
          <ListItem>❌ Deletion anomaly (losing important data unintentionally)</ListItem>
        </List>
      </Box>

      {/* ================= FUNCTIONAL DEPENDENCY ================= */}
      <Box bg={cardBg} p={6} borderRadius="lg" mb={6}>
        <Heading size="md" mb={2}>
          3️⃣ Functional Dependency (Foundation of Normalization)
        </Heading>

        <Text mb={2}>
          A <b>Functional Dependency (FD)</b> exists when one attribute uniquely
          determines another attribute.
        </Text>

        <Code display="block" p={3} mb={3}>
          A → B
        </Code>

        <Text mb={2}>
          This means: if two rows have the same value of A, they must have the
          same value of B.
        </Text>

        <Code display="block" p={3}>
          StudentID → StudentName
        </Code>

        <Text mt={2}>
          Knowing the StudentID is enough to determine the StudentName.
        </Text>
      </Box>

      {/* ================= ROLE OF FD ================= */}
      <Box bg={cardBg} p={6} borderRadius="lg" mb={6}>
        <Heading size="md" mb={2}>
          4️⃣ Role of Functional Dependency in Normalization
        </Heading>

        <Text mb={3}>
          Functional Dependency is the backbone of normalization. All normal
          forms are defined using FDs.
        </Text>

        <List spacing={2}>
          <ListItem>✔ Helps identify redundant data</ListItem>
          <ListItem>✔ Detects partial and transitive dependencies</ListItem>
          <ListItem>✔ Guides table decomposition</ListItem>
          <ListItem>✔ Prevents data anomalies</ListItem>
        </List>
      </Box>

      {/* ================= TYPES OF FD ================= */}
      <Box bg={cardBg} p={6} borderRadius="lg" mb={6}>
        <Heading size="md" mb={3}>
          5️⃣ Types of Functional Dependency
        </Heading>

        <Text>
          <b>Full Functional Dependency</b> – Attribute depends on the entire
          primary key.
        </Text>
        <Code display="block" p={3} my={2}>
          (StudentID, CourseID) → Grade
        </Code>

        <Divider my={4} />

        <Text>
          <b>Partial Dependency</b> – Attribute depends on part of a composite
          key.
        </Text>
        <Code display="block" p={3} my={2}>
          StudentID → StudentName
        </Code>

        <Divider my={4} />

        <Text>
          <b>Transitive Dependency</b> – Attribute depends indirectly on the
          primary key.
        </Text>
        <Code display="block" p={3} my={2}>
          EmpID → DeptID → DeptName
        </Code>
      </Box>

      {/* ================= NORMAL FORMS ================= */}
      <Heading size="md" mb={4}>
        6️⃣ Normal Forms Explained
      </Heading>

      <VStack spacing={6} align="stretch">
        {/* 1NF */}
        <Box bg={cardBg} p={6} borderRadius="lg">
          <Heading size="sm" mb={2}>
             First Normal Form (1NF)
          </Heading>
          <Text>
            A table is in 1NF if all attributes contain atomic (indivisible)
            values and there are no repeating groups.
          </Text>
          <Code display="block" p={3} mt={2}>
            Skills = "Java, Python" ❌ <br />
            Skills = "Java" | "Python" ✅
          </Code>
        </Box>

        {/* 2NF */}
        <Box bg={cardBg} p={6} borderRadius="lg">
          <Heading size="sm" mb={2}>
             Second Normal Form (2NF)
          </Heading>
          <Text>
            A table is in 2NF if it is in 1NF and has no partial dependency.
          </Text>
          <Text mt={2}>
            Non-prime attributes must depend on the entire primary key.
          </Text>
        </Box>

        {/* 3NF */}
        <Box bg={cardBg} p={6} borderRadius="lg">
          <Heading size="sm" mb={2}>
             Third Normal Form (3NF)
          </Heading>
          <Text>
            A table is in 3NF if it is in 2NF and has no transitive dependency.
          </Text>
          <Code display="block" p={3} mt={2}>
            EmpID → DeptID → DeptName ❌
          </Code>
        </Box>

        {/* BCNF */}
        <Box bg={cardBg} p={6} borderRadius="lg">
          <Heading size="sm" mb={2}>
             Boyce-Codd Normal Form (BCNF)
          </Heading>
          <Text>
            A stronger version of 3NF. Every determinant must be a candidate key.
          </Text>
        </Box>
      </VStack>

      {/* ================= INTERVIEW SUMMARY ================= */}
      <Divider my={8} />

      <Box bg={cardBg} p={6} borderRadius="lg">
        <Heading size="md" mb={2}>
           Interview Summary
        </Heading>
        <Text>
          Normalization is the process of refining database design using
          functional dependencies to eliminate redundancy and anomalies while
          ensuring data integrity and scalability.
        </Text>
      </Box>
    </Box>
  );
};

export default Normalization;
