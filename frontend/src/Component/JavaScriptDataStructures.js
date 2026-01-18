
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Divider,
  Code,
  useColorModeValue,
  Container,
  Badge,
} from "@chakra-ui/react";

const JavaScriptDataStructures = () => {
  const bg = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const codeBg = useColorModeValue("gray.100", "gray.700");

  const Section = ({ title, children, badge }) => (
    <Box bg={cardBg} p={6} rounded="2xl" shadow="lg" w="full">
      <HStack mb={3} spacing={3}>
        <Heading size="md">{title}</Heading>
        {badge && <Badge colorScheme="purple">{badge}</Badge>}
      </HStack>
      <VStack align="start" spacing={4}>
        {children}
      </VStack>
    </Box>
  );

  const CodeBlock = ({ children }) => (
    <Code
      w="full"
      p={4}
      rounded="lg"
      bg={codeBg}
      whiteSpace="pre"
      overflowX="auto"
      fontSize="sm"
    >
      {children}
    </Code>
  );

  return (
    <Box bg={bg} minH="100vh" py={10}>
      <Container maxW="6xl">
        <VStack spacing={10} align="stretch">
          <Box textAlign="center">
            <Heading size="xl">JavaScript Data Structures</Heading>
            <Text mt={2} color="gray.400">
              Complete Interview + Pro Level Notes (Dark Mode Ready)
            </Text>
          </Box>

          <Section title="1. Array" badge="Core">
            <Text>
              <b>Definition:</b> Array is an ordered collection of elements. It
              can store any data type and is zero-indexed.
            </Text>
            <Heading size="sm">Creation</Heading>
            <CodeBlock>{`const arr = [1, 2, 3];
const arr2 = new Array(4, 5);`}</CodeBlock>
            <Heading size="sm">Common Methods</Heading>
            <CodeBlock>{`arr.push(4);
arr.pop();
arr.unshift(0);
arr.shift();
arr.includes(2);
arr.indexOf(3);
arr.slice(0, 2);
arr.splice(1, 1);`}</CodeBlock>
            <Heading size="sm">Higher Order Methods</Heading>
            <CodeBlock>{`arr.map(x => x * 2);
arr.filter(x => x > 2);
arr.reduce((sum, x) => sum + x, 0);
arr.find(x => x === 2);
arr.some(x => x > 3);
arr.every(x => x > 0);`}</CodeBlock>
          </Section>

          <Section title="2. Object" badge="Key-Value">
            <Text>
              <b>Definition:</b> Object stores data in key-value pairs. Keys are
              strings or symbols.
            </Text>
            <CodeBlock>{`const user = { name: "Ankit", age: 22 };`}</CodeBlock>
            <CodeBlock>{`user.name;
user["age"];
user.city = "Delhi";
delete user.age;`}</CodeBlock>
            <CodeBlock>{`Object.keys(user);
Object.values(user);
Object.entries(user);`}</CodeBlock>
          </Section>

          <Section title="3. Set" badge="Unique">
            <Text>
              <b>Definition:</b> Set stores unique values only.
            </Text>
            <CodeBlock>{`const set = new Set();
set.add(1);
set.add(2);
set.has(1);
set.delete(2);
set.size;`}</CodeBlock>
            <CodeBlock>{`const uniqueArr = [...new Set([1,2,2,3])];`}</CodeBlock>
          </Section>

          <Section title="4. Map" badge="🔥 Important">
            <Text>
              <b>Definition:</b> Map stores key-value pairs where keys can be of
              any type.
            </Text>
            <CodeBlock>{`const map = new Map();
map.set("name", "Ankit");
map.set(1, "One");
map.get("name");
map.has(1);
map.delete(1);
map.size;`}</CodeBlock>
            <CodeBlock>{`for (let [key, value] of map) {
  console.log(key, value);
}`}</CodeBlock>
          </Section>

          <Section title="5. Stack (LIFO)">
            <CodeBlock>{`const stack = [];
stack.push(1);
stack.push(2);
stack.pop();`}</CodeBlock>
          </Section>

          <Section title="6. Queue (FIFO)">
            <CodeBlock>{`const queue = [];
queue.push(1);
queue.push(2);
queue.shift();`}</CodeBlock>
          </Section>

          <Section title="7. WeakMap & WeakSet" badge="Advanced">
            <CodeBlock>{`const wm = new WeakMap();
const obj = {};
wm.set(obj, "data");`}</CodeBlock>
          </Section>

          <Divider />

          <Box textAlign="center">
            <Text fontWeight="bold">
              ✅ Portfolio‑Ready • Interview‑Safe • Pro Developer Notes
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default JavaScriptDataStructures;
