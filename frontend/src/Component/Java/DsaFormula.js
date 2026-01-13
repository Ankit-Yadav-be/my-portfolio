import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  useColorModeValue,
  Divider,
  Code,
} from "@chakra-ui/react";

const Section = ({ title, children }) => (
  <Box mb={10}>
    <Heading size="md" mb={4} color="teal.400">
      {title}
    </Heading>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      {children}
    </SimpleGrid>
  </Box>
);

const FormulaCard = ({ title, description, formula }) => {
  const bg = useColorModeValue("gray.50", "gray.800");

  return (
    <Box
      bg={bg}
      p={5}
      borderRadius="lg"
      boxShadow="md"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-4px)", boxShadow: "xl" }}
    >
      <Heading size="sm" mb={2}>
        {title}
      </Heading>
      <Text fontSize="sm" mb={3} color="gray.500">
        {description}
      </Text>
      <Code p={2} borderRadius="md" display="block" whiteSpace="pre-wrap">
        {formula}
      </Code>
    </Box>
  );
};

const DSAFormulaHandbook = () => {
  return (
    <Box p={{ base: 4, md: 8 }}>
      {/* ================= HEADER ================= */}
      <Heading mb={2}>DSA Formula Handbook</Heading>
      <Text color="gray.500" mb={6}>
        Quick revision formulas for LeetCode & SDE Interviews
      </Text>

      <Divider mb={8} />

      {/* ================= MATHS ================= */}
      <Section title=" Mathematics Basics">
        <FormulaCard
          title="GCD (Euclidean Algorithm)"
          description="Used in LCM, fractions, number theory problems"
          formula={`gcd(a, b) = gcd(b, a % b)\nBase Case: gcd(a, 0) = a`}
        />

        <FormulaCard
          title="LCM Formula"
          description="Very common in array & math problems"
          formula={`lcm(a, b) = (a * b) / gcd(a, b)`}
        />

        <FormulaCard
          title="Median (Sorted Array)"
          description="Used in median of two sorted arrays"
          formula={`Odd n: arr[n/2]\nEven n: (arr[n/2 - 1] + arr[n/2]) / 2`}
        />

        <FormulaCard
          title="Sum of First N Numbers"
          description="Used in math & prefix sum logic"
          formula={`Sum = n * (n + 1) / 2`}
        />
      </Section>

      {/* ================= BIT MANIPULATION ================= */}
      <Section title=" Bit Manipulation">
        <FormulaCard
          title="Check Even or Odd"
          description="Fastest check using bitwise AND"
          formula={`(n & 1) === 0 → Even\n(n & 1) === 1 → Odd`}
        />

        <FormulaCard
          title="Power of Two"
          description="Used in optimization problems"
          formula={`n > 0 && (n & (n - 1)) === 0`}
        />

        <FormulaCard
          title="Turn Off Rightmost Set Bit"
          description="Important trick in many problems"
          formula={`n = n & (n - 1)`}
        />

        <FormulaCard
          title="Count Set Bits"
          description="Brian Kernighan’s Algorithm"
          formula={`while(n > 0) {\n  n = n & (n - 1)\n  count++\n}`}
        />
      </Section>

      {/* ================= ARRAYS ================= */}
      <Section title=" Arrays">
        <FormulaCard
          title="Maximum Subarray Sum (Kadane)"
          description="Most asked DP/array problem"
          formula={`currSum = max(arr[i], currSum + arr[i])\nmaxSum = max(maxSum, currSum)`}
        />

        <FormulaCard
          title="Prefix Sum"
          description="Range queries & subarray problems"
          formula={`prefix[i] = prefix[i - 1] + arr[i]\nRange Sum = prefix[r] - prefix[l - 1]`}
        />
      </Section>

      {/* ================= BINARY SEARCH ================= */}
      <Section title="🔍 Binary Search">
        <FormulaCard
          title="Mid Calculation"
          description="Avoid integer overflow"
          formula={`mid = low + (high - low) / 2`}
        />

        <FormulaCard
          title="Binary Search Template"
          description="Core logic for almost all BS problems"
          formula={`while(low <= high) {\n  mid = low + (high - low)/2\n  if(arr[mid] == target) return mid\n  else if(arr[mid] < target) low = mid + 1\n  else high = mid - 1\n}`}
        />
      </Section>

      {/* ================= FOOTER ================= */}
      <Divider mt={10} />
      <Text mt={4} fontSize="sm" color="gray.500">
         Tip: Keep adding formulas as you practice on LeetCode daily.
      </Text>
    </Box>
  );
};

export default DSAFormulaHandbook;
