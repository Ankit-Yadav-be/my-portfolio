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

const EER = () => {
  const cardBg = useColorModeValue("gray.50", "gray.800");
  const subtleText = useColorModeValue("gray.600", "gray.400");

  return (
    <Box>
      <Heading size="lg" mb={4}>
         Extended ER (EER) Diagram
      </Heading>

      <Text mb={6}>
        The <b>Extended Entity–Relationship (EER) Model</b> is an advanced version
        of the ER model used to represent complex real-world database
        requirements by adding higher-level concepts.
      </Text>

      {/* WHY EER */}
      <Box bg={cardBg} p={5} borderRadius="lg" mb={6}>
        <Heading size="md" mb={3}>
          🎯 Why Extended ER Model?
        </Heading>
        <List spacing={2}>
          <ListItem>✔ Handles complex database design</ListItem>
          <ListItem>✔ Supports abstraction and inheritance</ListItem>
          <ListItem>✔ Reduces redundancy</ListItem>
          <ListItem>✔ Used in large enterprise systems</ListItem>
        </List>
      </Box>

      <Divider my={8} />

      {/* SPECIALIZATION */}
      <Heading size="md" mb={3}>
        1️⃣ Specialization
      </Heading>

      <Text mb={3}>
        <b>Specialization</b> is a <b>top-down approach</b> in which a higher-level
        entity (superclass) is divided into lower-level entities (subclasses)
        based on specific characteristics.
      </Text>

      <Box bg={cardBg} p={5} borderRadius="lg" mb={4}>
        <Text mb={2}><b>Example:</b></Text>
        <Code display="block" p={3}>
{`Employee(emp_id, name, salary)
↓
Manager(bonus)
Developer(programming_language)`}
        </Code>
      </Box>

      <Text fontSize="sm" color={subtleText} mb={6}>
        Representation: Superclass → Subclasses
      </Text>

      <Code display="block" p={3} mb={8}>
{`          Employee
              |
      -------------------
      |                 |
   Manager          Developer`}
      </Code>

      {/* GENERALIZATION */}
      <Heading size="md" mb={3}>
        2️⃣ Generalization
      </Heading>

      <Text mb={3}>
        <b>Generalization</b> is a <b>bottom-up approach</b> where multiple lower-level
        entities with common attributes are combined into a single higher-level
        entity.
      </Text>

      <Box bg={cardBg} p={5} borderRadius="lg" mb={4}>
        <Code display="block" p={3}>
{`Car(reg_no, fuel_type)
Bike(reg_no, engine_cc)
↓
Vehicle(reg_no)`}
        </Code>
      </Box>

      <Code display="block" p={3} mb={8}>
{`Car        Bike
  \\        /
   \\      /
     Vehicle`}
      </Code>

      <Divider my={8} />

      {/* INHERITANCE */}
      <Heading size="md" mb={3}>
        3️⃣ Inheritance
      </Heading>

      <Text mb={3}>
        <b>Inheritance</b> allows subclasses to inherit attributes and
        relationships of the superclass, avoiding data duplication.
      </Text>

      <Code display="block" p={3} mb={6}>
{`Employee(emp_id, name)
Manager → inherits emp_id, name`}
      </Code>

      <Divider my={8} />

      {/* CONSTRAINTS */}
      <Heading size="md" mb={3}>
        4️⃣ Constraints in Specialization / Generalization
      </Heading>

      <VStack spacing={4} align="stretch">
        <Box bg={cardBg} p={5} borderRadius="lg">
          <Heading size="sm" mb={2}>
            🔹 Disjoint Constraint
          </Heading>
          <Text mb={2}>
            An entity can belong to <b>only one subclass</b>.
          </Text>
          <Code display="block" p={2}>
Employee → Manager OR Developer
          </Code>
          <Text fontSize="sm" color={subtleText}>
            Representation: {"{d}"}
          </Text>
        </Box>

        <Box bg={cardBg} p={5} borderRadius="lg">
          <Heading size="sm" mb={2}>
            🔹 Overlapping Constraint
          </Heading>
          <Text mb={2}>
            An entity can belong to <b>multiple subclasses</b>.
          </Text>
          <Code display="block" p={2}>
Employee → Trainer AND Developer
          </Code>
          <Text fontSize="sm" color={subtleText}>
            Representation: {"{o}"}
          </Text>
        </Box>
      </VStack>

      <Divider my={8} />

      {/* COMPLETENESS */}
      <Heading size="md" mb={3}>
        5️⃣ Completeness Constraints
      </Heading>

      <VStack spacing={4} align="stretch">
        <Box bg={cardBg} p={5} borderRadius="lg">
          <Heading size="sm" mb={2}>
            🔹 Total Specialization
          </Heading>
          <Text mb={2}>
            Every entity in the superclass must belong to at least one subclass.
          </Text>
          <Code display="block" p={2}>
Every Employee must be Manager or Developer
          </Code>
        </Box>

        <Box bg={cardBg} p={5} borderRadius="lg">
          <Heading size="sm" mb={2}>
            🔹 Partial Specialization
          </Heading>
          <Text mb={2}>
            Some entities may not belong to any subclass.
          </Text>
          <Code display="block" p={2}>
Some Employees may not be Managers or Developers
          </Code>
        </Box>
      </VStack>

      <Divider my={8} />

      {/* AGGREGATION */}
      <Heading size="md" mb={3}>
        6️⃣ Aggregation
      </Heading>

      <Text mb={3}>
        <b>Aggregation</b> is used when a relationship itself participates in
        another relationship, forming a relationship between relationships.
      </Text>

      <Code display="block" p={3} mb={4}>
{`Employee — works_on — Project
Manager manages (Employee works_on Project)`}
      </Code>

      <Code display="block" p={3} mb={8}>
{`Employee —— works_on —— Project
             [ Aggregation ]
                   |
              Manager manages`}
      </Code>

      <Divider my={8} />

      {/* CATEGORY */}
      <Heading size="md" mb={3}>
        7️⃣ Category (Union Type)
      </Heading>

      <Text mb={3}>
        A <b>Category</b> represents a subclass derived from multiple
        superclasses.
      </Text>

      <Code display="block" p={3} mb={4}>
{`Person(person_id)
Company(company_id)
↓
Owner(owner_id)`}
      </Code>

      <Code display="block" p={3} mb={8}>
{`Person        Company
    \\          /
     \\        /
        Owner`}
      </Code>

      <Divider my={8} />

      {/* COMPARISON */}
      <Box bg={cardBg} p={5} borderRadius="lg">
        <Heading size="md" mb={2}>
          🔥 ER vs EER (Interview Focus)
        </Heading>
        <List spacing={2}>
          <ListItem>✔ ER is simple, EER is advanced</ListItem>
          <ListItem>✔ EER supports inheritance</ListItem>
          <ListItem>✔ EER handles real-world complexity</ListItem>
          <ListItem>✔ Used in enterprise-level systems</ListItem>
        </List>
      </Box>

      <Divider my={8} />

      {/* INTERVIEW LINE */}
      <Box bg={cardBg} p={5} borderRadius="lg">
        <Heading size="md" mb={2}>
          🧠 Killer Interview Line
        </Heading>
        <Text>
          EER Model extends ER Model by supporting specialization,
          generalization, inheritance, aggregation, and categories to model
          complex real-world database systems accurately.
        </Text>
      </Box>
    </Box>
  );
};

export default EER;
