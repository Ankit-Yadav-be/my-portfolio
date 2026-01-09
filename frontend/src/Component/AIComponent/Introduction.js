import { Box, Heading, Text, Divider } from "@chakra-ui/react";

const Introduction = () => {
  return (
    <Box>
      <Heading size="lg" mb={3}>
        Introduction to Deep Learning
      </Heading>
      <Divider mb={4} />

      <Text mb={3}>
        Deep Learning is a subset of Machine Learning that uses
        multi-layered neural networks to learn complex patterns
        from large datasets.
      </Text>

      <Text mb={3}>
        It is widely used in areas like Image Recognition,
        Speech Recognition, NLP, Self-driving cars, and AI systems.
      </Text>

      <Text fontWeight="bold">
        Key idea: Learn features automatically instead of manual
        feature engineering.
      </Text>
    </Box>
  );
};

export default Introduction;
