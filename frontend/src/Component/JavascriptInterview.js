import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Badge,
  useColorModeValue,
  Collapse,
  Button,
  Code,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MotionBox = motion(Box);

const interviewQuestions = [
  {
    id: 1,
    title: "var vs let vs const",
    level: "Easy",
    question: "What is the difference between var, let and const?",
    explanation:
      "var is function scoped and hoisted with undefined. let and const are block scoped and exist in the temporal dead zone. const variables cannot be reassigned.",
    code: `var a = 10;
let b = 20;
const c = 30;

{
  var a = 100;
  let b = 200;
}

console.log(a); // 100
console.log(b); // 20`,
  },
  {
    id: 2,
    title: "Hoisting",
    level: "Easy",
    question: "What is hoisting in JavaScript?",
    explanation:
      "Hoisting moves declarations to the top of their scope. var is initialized with undefined, while let and const remain uninitialized.",
    code: `console.log(x); // undefined
var x = 10;

console.log(y); // ReferenceError
let y = 20;`,
  },
  {
    id: 3,
    title: "Closures",
    level: "Medium",
    question: "What is a closure and why is it used?",
    explanation:
      "A closure allows a function to remember variables from its outer scope even after the outer function has executed.",
    code: `function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const fn = outer();
fn(); // 1
fn(); // 2`,
  },
  {
    id: 4,
    title: "Event Loop",
    level: "Hard",
    question: "Explain the JavaScript event loop.",
    explanation:
      "The event loop handles asynchronous execution using the call stack, microtask queue, and callback queue.",
    code: `console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");`,
  },
  {
    id: 5,
    title: "this keyword",
    level: "Medium",
    question: "How does the this keyword work in JavaScript?",
    explanation:
      "The value of this depends on how a function is called. Arrow functions do not bind their own this.",
    code: `const obj = {
  name: "Ankit",
  normal() {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  },
};

obj.normal(); // Ankit
obj.arrow();  // undefined`,
  },
  {
    id: 6,
    title: "Debounce vs Throttle",
    level: "Hard",
    question: "What is the difference between debounce and throttle?",
    explanation:
      "Debounce delays execution until activity stops. Throttle ensures execution at fixed intervals.",
    code: `function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(fn, delay);
  };
}

function throttle(fn, limit) {
  let allow = true;
  return function () {
    if (allow) {
      fn();
      allow = false;
      setTimeout(() => (allow = true), limit);
    }
  };
}`,
  },
  {
    id: 7,
    title: "Promises and Async Await",
    level: "Medium",
    question: "How does async/await work internally?",
    explanation:
      "async/await is syntactic sugar over promises that makes asynchronous code easier to read and maintain.",
    code: `async function fetchData() {
  try {
    const response = await fetch("/api/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}`,
  },
];

const JavascriptInterview = () => {
  const navigate = useNavigate();

  const bg = useColorModeValue("white", "gray.800");
  const shadow = useColorModeValue("lg", "dark-lg");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const codeBg = useColorModeValue("gray.100", "gray.900");

  const [open, setOpen] = useState({});

  const toggle = (id) => {
    setOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Box px={{ base: 4, sm: 6, md: 10 }} py={{ base: 6, md: 10 }}>
      {/* 🔥 Header + CTA */}
      <HStack
        justify="space-between"
        align="center"
        mb={{ base: 6, md: 8 }}
        flexWrap="wrap"
        gap={4}
      >
        <Heading
          fontSize={{ base: "2xl", md: "3xl" }}
          bgGradient="linear(to-r, teal.400, blue.500)"
          bgClip="text"
        >
          JavaScript Interview Master Guide
        </Heading>

        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="purple"
          rounded="full"
          px={6}
          py={5}
          shadow="lg"
          _hover={{
            transform: "translateY(-2px)",
            shadow: "2xl",
          }}
          onClick={() => navigate("/javascript-data-structures")}
        >
          JS Data Structures Notes
        </Button>
      </HStack>

      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
        {interviewQuestions.map((item) => (
          <MotionBox
            key={item.id}
            bg={bg}
            p={{ base: 4, md: 6 }}
            rounded="2xl"
            shadow={shadow}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            whileHover={{ y: -4 }}
          >
            <VStack align="start" spacing={3}>
              <Badge
                colorScheme={
                  item.level === "Easy"
                    ? "green"
                    : item.level === "Medium"
                    ? "yellow"
                    : "red"
                }
              >
                {item.level}
              </Badge>

              <Heading size="md">{item.title}</Heading>

              <Text fontWeight="semibold">{item.question}</Text>

              <Text fontSize="sm" color={textColor}>
                {item.explanation}
              </Text>
            </VStack>

            <Button
              mt={5}
              size="sm"
              colorScheme="teal"
              rounded="full"
              alignSelf="flex-start"
              onClick={() => toggle(item.id)}
            >
              {open[item.id] ? "Hide Code" : "Show Code"}
            </Button>

            <Collapse in={open[item.id]} animateOpacity>
              <Box mt={4} p={3} bg={codeBg} rounded="lg" overflowX="auto">
                <Code
                  display="block"
                  whiteSpace="pre"
                  fontSize={{ base: "xs", md: "sm" }}
                  w="100%"
                >
                  {item.code}
                </Code>
              </Box>
            </Collapse>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default JavascriptInterview;
