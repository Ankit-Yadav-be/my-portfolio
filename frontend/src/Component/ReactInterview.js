import React from "react";
import {
  Box,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Code,
  VStack,
  Divider,
  Badge,
} from "@chakra-ui/react";

const ReactInterview = () => {
  return (
    <Box
      minH="100vh"
      bg="gray.900"
      color="gray.100"
      px={{ base: 4, md: 10 }}
      py={10}
    >
      <VStack spacing={6} align="start" maxW="1000px" mx="auto">
        <Heading size="lg" color="teal.300">
          React Machine Round – Interview Revision
        </Heading>

        <Text color="gray.400">
          These questions are frequently asked in React machine rounds.
          Each problem includes code, output, and deep explanation.
        </Text>

        <Divider borderColor="gray.700" />

        <Accordion allowMultiple width="100%">
          {/* Q1 */}
          <AccordionItem border="1px solid" borderColor="gray.700" rounded="lg">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Q1. Why does console.log print old state?
                <Badge ml={2} colorScheme="red">setState</Badge>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <Code display="block" whiteSpace="pre" p={4} bg="black">
{`setCount(count + 1);
console.log(count);`}
              </Code>
              <Text mt={3}><b>Output:</b> 0</Text>
              <Text mt={2}>
                React state updates are asynchronous. setState schedules an
                update but does not update the value immediately. console.log
                runs before re-render, so it prints the old value.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          {/* Q2 */}
          <AccordionItem border="1px solid" borderColor="gray.700" rounded="lg">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Q2. Multiple setState calls
                <Badge ml={2} colorScheme="orange">Batching</Badge>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <Code display="block" whiteSpace="pre" p={4} bg="black">
{`setCount(count + 1);
setCount(count + 1);
setCount(count + 1);`}
              </Code>
              <Text mt={3}><b>Output:</b> 1</Text>
              <Text mt={2}>
                React batches state updates inside the same event loop.
                All three calls use the same old value, so the final result is 1.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          {/* Q3 */}
          <AccordionItem border="1px solid" borderColor="gray.700" rounded="lg">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Q3. useEffect with empty dependency
                <Badge ml={2} colorScheme="green">useEffect</Badge>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <Code display="block" whiteSpace="pre" p={4} bg="black">
{`useEffect(() => {
  setCount(count + 1);
}, []);`}
              </Code>
              <Text mt={3}><b>Output:</b> 1</Text>
              <Text mt={2}>
                useEffect with an empty dependency array runs only once
                after the initial render. Hence, no infinite loop.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          {/* Q4 */}
          <AccordionItem border="1px solid" borderColor="gray.700" rounded="lg">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Q4. Closure with setTimeout
                <Badge ml={2} colorScheme="purple">Closure</Badge>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <Code display="block" whiteSpace="pre" p={4} bg="black">
{`setTimeout(() => {
  console.log(count);
}, 2000);`}
              </Code>
              <Text mt={3}><b>Output:</b> 0</Text>
              <Text mt={2}>
                JavaScript closures capture the value at the time of function
                creation. setTimeout uses the old snapshot of state.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          {/* Q5 */}
          <AccordionItem border="1px solid" borderColor="gray.700" rounded="lg">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Q5. Why index is a bad key?
                <Badge ml={2} colorScheme="pink">Keys</Badge>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <Text>
                Using index as a key causes incorrect DOM reconciliation when
                items are added, removed, or reordered. React may reuse wrong
                DOM nodes.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          {/* Q6 */}
          <AccordionItem border="1px solid" borderColor="gray.700" rounded="lg">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Q6. useRef vs useState
                <Badge ml={2} colorScheme="cyan">useRef</Badge>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <Text>
                useRef updates immediately and does not trigger re-render.
                useState is asynchronous and causes re-render.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          {/* Q7 */}
          <AccordionItem border="1px solid" borderColor="gray.700" rounded="lg">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Q7. Infinite loop in useEffect
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <Text>
                Updating a state inside useEffect while also listing it in
                dependency array causes infinite re-renders.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          {/* Q8 */}
          <AccordionItem border="1px solid" borderColor="gray.700" rounded="lg">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Q8. React.memo behavior
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <Text>
                React.memo prevents re-render if props are shallowly equal.
                Same state value does not trigger re-render.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          {/* Q9 */}
          <AccordionItem border="1px solid" borderColor="gray.700" rounded="lg">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Q9. Function reference in dependency
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <Text>
                Functions are recreated on every render. If used in
                dependency array, effect runs every time unless memoized
                using useCallback.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          {/* Q10 */}
          <AccordionItem border="1px solid" borderColor="gray.700" rounded="lg">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Q10. Controlled vs Uncontrolled input
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <Text>
                Controlled inputs use React state. Uncontrolled inputs
                store value in DOM and are accessed via refs.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack>
    </Box>
  );
};

export default ReactInterview;
