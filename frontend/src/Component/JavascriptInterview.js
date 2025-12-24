// src/pages/JavascriptInterview.jsx
import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Badge,
  useColorModeValue,
  Collapse,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

const MotionBox = motion(Box);

const interviewProblems = [
  {
    id: 1,
    title: "var, let, const",
    description: "Explain differences between var, let, and const in JavaScript.",
    hint: "var is function-scoped, let and const are block-scoped. const cannot be reassigned.",
    difficulty: "Easy",
  },
  {
    id: 2,
    title: "Hoisting",
    description: "What is hoisting in JavaScript?",
    hint: "Declarations are moved to the top of their scope. var variables are hoisted with undefined, functions are fully hoisted.",
    difficulty: "Easy",
  },
  {
    id: 3,
    title: "Closures",
    description: "Explain closures with an example.",
    hint: "A closure gives access to the outer function’s scope from an inner function, even after the outer function has executed.",
    difficulty: "Medium",
  },
  {
    id: 4,
    title: "Debounce vs Throttle",
    description: "Explain the difference between debounce and throttle.",
    hint: "Debounce delays execution until after a pause, throttle limits execution to once per time interval.",
    difficulty: "Medium",
  },
  {
    id: 5,
    title: "'this' keyword",
    description: "Explain how 'this' works in different contexts.",
    hint: "'this' depends on the call site: object method, standalone function, arrow function, class, or event handler.",
    difficulty: "Medium",
  },
  {
    id: 6,
    title: "Promises & Async/Await",
    description: "Explain how promises work and how async/await simplifies them.",
    hint: "Promises represent future values. async/await allows writing asynchronous code in a synchronous style.",
    difficulty: "Medium",
  },
];

const JavascriptInterview = () => {
  const cardBg = useColorModeValue("white", "gray.800");
  const cardShadow = useColorModeValue("md", "dark-lg");

  const [openHints, setOpenHints] = useState({});

  const toggleHint = (id) => {
    setOpenHints((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Box p={8}>
      <Heading
        mb={6}
        size="2xl"
        bgGradient="linear(to-r, teal.400, blue.500)"
        bgClip="text"
      >
        💻 JavaScript Interview Questions
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        {interviewProblems.map((problem) => (
          <MotionBox
            key={problem.id}
            bg={cardBg}
            p={6}
            rounded="2xl"
            shadow={cardShadow}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <Badge
              mb={2}
              colorScheme={
                problem.difficulty === "Easy"
                  ? "green"
                  : problem.difficulty === "Medium"
                  ? "yellow"
                  : "red"
              }
              fontSize="0.9em"
              px={2}
              py={1}
              rounded="full"
            >
              {problem.difficulty}
            </Badge>

            <Heading size="md" mb={2}>
              {problem.title}
            </Heading>
            <Text fontSize="md" color={useColorModeValue("gray.700", "gray.300")}>
              {problem.description}
            </Text>

            <Button
              mt={3}
              size="sm"
              colorScheme="teal"
              onClick={() => toggleHint(problem.id)}
              rounded="full"
            >
              {openHints[problem.id] ? "Hide Hint" : "Show Hint"}
            </Button>

            <Collapse in={openHints[problem.id]} animateOpacity>
              <Text
                mt={2}
                fontSize="sm"
                color={useColorModeValue("gray.600", "gray.400")}
                fontStyle="italic"
              >
                💡 Hint: {problem.hint}
              </Text>
            </Collapse>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default JavascriptInterview;
