import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Divider,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const JVMFoundationNotes = () => {
  const bg = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");

  return (
    <Box bg={bg} minH="100vh" px={{ base: 4, md: 10 }} py={10}>
      <VStack spacing={8} align="stretch">

        {/* Header */}
        <MotionBox
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Heading size="xl" textAlign="center">
             Java JVM – Foundation Solidification
          </Heading>
          <Text textAlign="center" mt={2} color="gray.500">
            PHASE 0 – How Java Actually Works (Company-Level Depth)
          </Text>
        </MotionBox>

        {/* JVM Architecture */}
        <Box bg={cardBg} p={6} rounded="xl" shadow="lg">
          <Heading size="md">1️⃣ JVM Architecture (VERY IMPORTANT)</Heading>
          <Divider my={3} />

          <Text>
            <b>JVM (Java Virtual Machine)</b> is a virtual runtime environment that:
          </Text>

          <VStack align="start" mt={3} spacing={2}>
            <Text>• Converts Java bytecode (.class) into machine-specific instructions</Text>
            <Text>• Makes Java platform independent</Text>
          </VStack>

          <Badge mt={4} colorScheme="green">
            Write Once, Run Anywhere
          </Badge>

          <Text mt={4}>
            JVM is OS-specific (Windows JVM, Linux JVM, macOS JVM).
          </Text>
        </Box>

        {/* JDK vs JRE vs JVM */}
        <Box bg={cardBg} p={6} rounded="xl" shadow="lg">
          <Heading size="md">2️⃣ JDK vs JRE vs JVM</Heading>
          <Divider my={3} />

          <Text><b>JVM</b></Text>
          <Text>• Executes bytecode</Text>
          <Text>• Manages memory and execution</Text>
          <Text>• Does NOT include compiler</Text>

          <Divider my={3} />

          <Text><b>JRE (Java Runtime Environment)</b></Text>
          <Text>JRE = JVM + Core Java Libraries</Text>

          <Divider my={3} />

          <Text><b>JDK (Java Development Kit)</b></Text>
          <Text>JDK = JRE + Development Tools (javac, debugger, javadoc)</Text>

          <Badge mt={4} colorScheme="purple">
            Frequently Asked Interview Question
          </Badge>
        </Box>

        {/* ClassLoader */}
        <Box bg={cardBg} p={6} rounded="xl" shadow="lg">
          <Heading size="md">3️⃣ ClassLoader</Heading>
          <Divider my={3} />

          <Text>
            ClassLoader is responsible for loading .class files into JVM memory.
          </Text>

          <VStack align="start" mt={4} spacing={3}>
            <Text><b>1️⃣ Bootstrap ClassLoader</b> – Loads core Java classes</Text>
            <Text><b>2️⃣ Extension ClassLoader</b> – Loads extension libraries</Text>
            <Text><b>3️⃣ Application ClassLoader</b> – Loads user-defined classes</Text>
          </VStack>

          <Text mt={4}>
            Java follows the <b>Parent-First Delegation Model</b>.
          </Text>
        </Box>

        {/* Runtime Memory Areas */}
        <Box bg={cardBg} p={6} rounded="xl" shadow="lg">
          <Heading size="md">4️⃣ Runtime Memory Areas</Heading>
          <Divider my={3} />

          <Text>
            JVM uses the following memory areas at runtime:
          </Text>

          <VStack align="start" mt={3} spacing={2}>
            <Text>• Heap</Text>
            <Text>• Stack</Text>
            <Text>• Method Area</Text>
            <Text>• PC Register</Text>
            <Text>• Native Method Stack</Text>
          </VStack>
        </Box>

        {/* Heap */}
        <Box bg={cardBg} p={6} rounded="xl" shadow="lg">
          <Heading size="md">5️⃣ Heap Memory</Heading>
          <Divider my={3} />

          <Text>
            Heap is used to store objects and is shared among all threads.
          </Text>

          <Text mt={3}>Heap Structure:</Text>

          <Box
            mt={3}
            p={4}
            bg={useColorModeValue("gray.100", "gray.700")}
            rounded="md"
            fontFamily="monospace"
          >
            Young Generation
            <br /> ├─ Eden
            <br /> ├─ Survivor S0
            <br /> └─ Survivor S1
            <br />
            Old Generation
          </Box>

          <Text mt={3}>
            Garbage Collector operates mainly on Heap memory.
          </Text>
        </Box>

        {/* Stack */}
        <Box bg={cardBg} p={6} rounded="xl" shadow="lg">
          <Heading size="md">6️⃣ Stack Memory</Heading>
          <Divider my={3} />

          <Text>
            Stack stores:
          </Text>

          <VStack align="start" mt={2}>
            <Text>• Method calls</Text>
            <Text>• Local variables</Text>
            <Text>• Object references</Text>
          </VStack>

          <Badge mt={4} colorScheme="red">
            StackOverflowError – Excessive Recursion
          </Badge>
        </Box>

        {/* Method Area */}
        <Box bg={cardBg} p={6} rounded="xl" shadow="lg">
          <Heading size="md">7️⃣ Method Area (Java 8+)</Heading>
          <Divider my={3} />

          <Text>
            Method Area stores:
          </Text>

          <VStack align="start" mt={2}>
            <Text>• Class metadata</Text>
            <Text>• Static variables</Text>
            <Text>• Method bytecode</Text>
          </VStack>

          <Text mt={3}>
            Java 8 removed <b>PermGen</b> and introduced <b>Metaspace</b>.
          </Text>
        </Box>

        {/* Execution Engine */}
        <Box bg={cardBg} p={6} rounded="xl" shadow="lg">
          <Heading size="md">8️⃣ Execution Engine</Heading>
          <Divider my={3} />

          <Text>
            Execution Engine executes the bytecode.
          </Text>

          <VStack align="start" mt={3}>
            <Text>• Interpreter – Executes code line by line</Text>
            <Text>• JIT Compiler – Converts hot code to native machine code</Text>
            <Text>• Garbage Collector</Text>
          </VStack>

          <Badge mt={4} colorScheme="green">
            Performance Optimization 🚀
          </Badge>
        </Box>

        {/* Flow Diagram */}
        <Box bg={cardBg} p={6} rounded="xl" shadow="lg">
          <Heading size="md"> Complete Java Execution Flow</Heading>
          <Divider my={3} />

          <Box
            p={4}
            bg={useColorModeValue("gray.100", "gray.700")}
            rounded="md"
            fontFamily="monospace"
          >
            .java  
            <br /> ↓ (javac)
            <br /> .class  
            <br /> ↓
            <br /> ClassLoader  
            <br /> ↓
            <br /> Method Area  
            <br /> ↓
            <br /> Heap + Stack  
            <br /> ↓
            <br /> Execution Engine  
            <br /> ↓
            <br /> OS / Hardware
          </Box>
        </Box>

        {/* Footer */}
        <Text textAlign="center" color="gray.500">
          📌 Portfolio Ready | Java Core Mastery – PHASE 0
        </Text>

      </VStack>
    </Box>
  );
};

export default JVMFoundationNotes;
