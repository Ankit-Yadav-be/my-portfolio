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
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
} from "@chakra-ui/react";

const PerceptronNotes = () => {
  return (
    <Box maxW="1000px" mx="auto" p={6}>
      <Heading mb={4} color="teal.500">
        Perceptron – Foundation of Deep Learning
      </Heading>

      <Text fontSize="lg" mb={6}>
        These notes explain the Perceptron concept in a simple, interview-ready
        and deep-learning-oriented manner.
      </Text>

      <VStack align="start" spacing={6}>
        {/* 1 */}
        <Box>
          <Heading size="md">1️⃣ What is a Perceptron?</Heading>
          <Text mt={2}>
            A <b>Perceptron</b> is a supervised machine learning algorithm used
            for <b>binary classification</b>.
          </Text>
          <List spacing={1} mt={2}>
            <ListItem>• Smallest building block of ANN</ListItem>
            <ListItem>• Base of Deep Learning models</ListItem>
          </List>
          <Badge mt={2} colorScheme="green">
            Perceptron = Mathematical Neuron
          </Badge>
        </Box>

        <Divider />

        {/* 2 */}
        <Box>
          <Heading size="md">2️⃣ Design / Architecture</Heading>
          <List spacing={2} mt={2}>
            <ListItem>
              <b>Inputs:</b> x₁ = IQ, x₂ = CGPA
            </ListItem>
            <ListItem>
              <b>Weights:</b> w₁ (IQ importance), w₂ (CGPA importance)
            </ListItem>
            <ListItem>
              <b>Bias (b):</b> Shifts decision boundary
            </ListItem>
            <ListItem>
              <b>Summation:</b>{" "}
              <Code>z = w₁x₁ + w₂x₂ + b</Code>
            </ListItem>
            <ListItem>
              <b>Activation (Step):</b>
              <Code ml={2}>
                output = 1 (z ≥ 0), 0 (z &lt; 0)
              </Code>
            </ListItem>
          </List>
        </Box>

        <Divider />

        {/* 3 */}
        <Box>
          <Heading size="md">3️⃣ Perceptron Working (Prediction)</Heading>
          <Text mt={2}>
            <b>Example:</b> Student Placement Prediction
          </Text>
          <List spacing={1} mt={2}>
            <ListItem>IQ = 120</ListItem>
            <ListItem>CGPA = 8.5</ListItem>
            <ListItem>w₁ = 0.4, w₂ = 0.6, b = -5</ListItem>
          </List>
          <Code mt={2} display="block">
            z = (0.4 × 120) + (0.6 × 8.5) − 5
          </Code>
          <Text mt={2}>
            If <b>z ≥ 0</b> → Placed (1) <br />
            Else → Not Placed (0)
          </Text>
        </Box>

        <Divider />

        {/* 4 */}
        <Box>
          <Heading size="md">4️⃣ Neuron vs Perceptron</Heading>
          <Table variant="simple" mt={3}>
            <Thead>
              <Tr>
                <Th>Biological Neuron 🧠</Th>
                <Th>Perceptron 🤖</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Extremely complex</Td>
                <Td>Very simple</Td>
              </Tr>
              <Tr>
                <Td>Neuroplasticity</Td>
                <Td>Fixed weights</Td>
              </Tr>
              <Tr>
                <Td>Unknown math</Td>
                <Td>Fully mathematical</Td>
              </Tr>
              <Tr>
                <Td>Continuous learning</Td>
                <Td>Algorithm based</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>

        <Divider />

        {/* 5 */}
        <Box>
          <Heading size="md">5️⃣ Geometric Intuition</Heading>
          <Text mt={2}>
            In 2D, a perceptron creates a <b>straight line</b>:
          </Text>
          <Code display="block" mt={2}>
            w₁x₁ + w₂x₂ + b = 0
          </Code>
          <List spacing={1} mt={2}>
            <ListItem>• One side → Class 1</ListItem>
            <ListItem>• Other side → Class 0</ListItem>
          </List>
          <Text mt={2}>
            3D → Plane <br />
            nD → Hyperplane
          </Text>
        </Box>

        <Divider />

        {/* 6 */}
        <Box>
          <Heading size="md">6️⃣ Limitation of Perceptron</Heading>
          <Text mt={2} color="red.500">
            Cannot classify non-linearly separable data
          </Text>
          <List spacing={1} mt={2}>
            <ListItem>• XOR problem</ListItem>
            <ListItem>• Circular datasets</ListItem>
          </List>
          <Text mt={2}>
            This limitation led to MLP, ReLU, Sigmoid and Deep Learning.
          </Text>
        </Box>

        <Divider />

        {/* 7 */}
        <Box>
          <Heading size="md">7️⃣ Training Problem (Perceptron Trick)</Heading>
          <List spacing={1} mt={2}>
            <ListItem>No guarantee of best line</ListItem>
            <ListItem>May never converge</ListItem>
            <ListItem>Depends on learning rate & data order</ListItem>
          </List>
          <Badge mt={2} colorScheme="purple">
            Solution = Loss Function
          </Badge>
        </Box>

        <Divider />

        {/* 8 */}
        <Box>
          <Heading size="md">8️⃣ Loss Function</Heading>
          <Text mt={2}>
            Loss function answers: <b>“How bad is my model?”</b>
          </Text>
          <Text>Lower loss = Better model</Text>
        </Box>

        <Divider />

        {/* 9 */}
        <Box>
          <Heading size="md">9️⃣ Perceptron Loss Function</Heading>
          <List spacing={1} mt={2}>
            <ListItem>Correct prediction → Loss = 0</ListItem>
            <ListItem>Wrong prediction → Loss &gt; 0</ListItem>
          </List>
          <Code display="block" mt={2}>
            Loss = max(0, −y(w·x + b))
          </Code>
          <Text mt={1}>y ∈ {"{+1, -1}"} (close to Hinge Loss)</Text>
        </Box>

        <Divider />

        {/* 10 */}
        <Box>
          <Heading size="md">🔟 Gradient Descent</Heading>
          <Text mt={2}>
            Used to minimize loss by updating weights and bias.
          </Text>
          <Code display="block" mt={2}>
            w = w − η ∂L/∂w <br />
            b = b − η ∂L/∂b
          </Code>
          <Badge mt={2} colorScheme="orange">
            Heart of Deep Learning
          </Badge>
        </Box>

        <Divider />

        {/* 11 */}
        <Box>
          <Heading size="md">1️⃣1️⃣ Code Implementation</Heading>
          <Code display="block" whiteSpace="pre" mt={2}>
{`from sklearn.linear_model import Perceptron

model = Perceptron()
model.fit(X, y)

weights = model.coef_
bias = model.intercept_`}
          </Code>
        </Box>

        <Divider />

        {/* 12 */}
        <Box>
          <Heading size="md">1️⃣2️⃣ Evolution of Perceptron</Heading>
          <Table mt={3}>
            <Thead>
              <Tr>
                <Th>Change</Th>
                <Th>Result</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Step → Sigmoid</Td>
                <Td>Logistic Regression</Td>
              </Tr>
              <Tr>
                <Td>Better Loss</Td>
                <Td>Probabilities</Td>
              </Tr>
              <Tr>
                <Td>Multiple Layers</Td>
                <Td>Deep Neural Network</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>

        <Divider />

        {/* 13 */}
        <Box>
          <Heading size="md">1️⃣3️⃣ Interview One-Liners</Heading>
          <List spacing={1} mt={2}>
            <ListItem>• Perceptron is a linear binary classifier</ListItem>
            <ListItem>• Learns a hyperplane</ListItem>
            <ListItem>• Cannot solve non-linear problems</ListItem>
            <ListItem>• Loss quantifies error</ListItem>
            <ListItem>• Gradient Descent minimizes loss</ListItem>
          </List>
        </Box>
      </VStack>
    </Box>
  );
};

export default PerceptronNotes;
