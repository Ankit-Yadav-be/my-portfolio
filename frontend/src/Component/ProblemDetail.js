// src/pages/ProblemDetail.jsx
import { useEffect, useState } from "react";
import {
  Box,
  Text,
  Heading,
  Tag,
  List,
  ListItem,
  Code,
  Link,
  Spinner,
  IconButton,
  Card,
  CardHeader,
  CardBody,
  Divider,
  Flex,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import {
  CheckCircleIcon,
  StarIcon,
  CopyIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";
import axios from "axios";

export default function ProblemDetail() {
  const { id } = useParams();
  const [problem, setProblem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bookmarked, setBookmarked] = useState(false);
  const toast = useToast();

  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const { data } = await axios.get(
          `https://my-portfolio-lw4x.vercel.app/api/problems/${id}`
        );
        setProblem(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProblem();
  }, [id]);

  if (loading) {
    return (
      <Box textAlign="center" mt={10}>
        <Spinner size="xl" color="teal.500" />
      </Box>
    );
  }

  if (!problem) {
    return (
      <Text textAlign="center" fontSize="lg" color="red.500">
        Problem not found
      </Text>
    );
  }

  // Difficulty color
  const difficultyColor =
    problem.difficulty === "Easy"
      ? "green"
      : problem.difficulty === "Medium"
      ? "yellow"
      : "red";

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Code copied!",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box p={6} maxW="1000px" mx="auto">
      {/* Title & Tags */}
      <Flex justify="space-between" align="center" mb={4} wrap="wrap">
        <Heading size="xl" color="gray.800">
          {problem.title}
        </Heading>
        <Flex gap={2} mt={[3, 0]}>
          <Tag colorScheme="blue">{problem.category}</Tag>
          <Tag colorScheme={difficultyColor}>{problem.difficulty}</Tag>
        </Flex>
      </Flex>
      <Divider mb={6} />

      {/* Problem Statement */}
      <Card mb={6} shadow="md" bg="white">
        <CardHeader fontWeight="bold" fontSize="lg" color="gray.700">
          Problem Statement
        </CardHeader>
        <CardBody>
          <Text color="gray.700">{problem.problemStatement}</Text>
        </CardBody>
      </Card>

      {/* Why It Happens */}
      <Card mb={6} shadow="md" bg="white">
        <CardHeader fontWeight="bold" fontSize="lg" color="gray.700">
          Why it Happens 🤔
        </CardHeader>
        <CardBody>
          <Text color="gray.700">{problem.whyItHappens}</Text>
        </CardBody>
      </Card>

      {/* Solution Steps Timeline */}
      <Card mb={6} shadow="md" bg="white">
        <CardHeader fontWeight="bold" fontSize="lg" color="gray.700">
          Solution Steps 🛠️
        </CardHeader>
        <CardBody>
          <List spacing={4}>
            {problem.solutionSteps.map((step) => (
              <ListItem
                key={step._id}
                borderLeft="4px solid teal"
                pl={3}
                pb={2}
              >
                <Text fontWeight="semibold" mb={1} color="gray.800">
                  ✅ Step {step.stepNumber}: {step.description}
                </Text>
                {step.codeSnippet && (
                  <Box
                    position="relative"
                    bg="gray.900"
                    color="green.200"
                    p={3}
                    rounded="md"
                    fontSize="sm"
                    overflowX="auto"
                  >
                    <Code whiteSpace="pre">{step.codeSnippet}</Code>
                    <IconButton
                      aria-label="Copy code"
                      icon={<CopyIcon />}
                      size="sm"
                      position="absolute"
                      top={2}
                      right={2}
                      onClick={() => handleCopy(step.codeSnippet)}
                    />
                  </Box>
                )}
              </ListItem>
            ))}
          </List>
        </CardBody>
      </Card>

      {/* Common Mistakes */}
      <Card mb={6} shadow="md">
        <CardHeader fontWeight="bold" fontSize="lg" color="red.500">
          Common Mistakes ❌
        </CardHeader>
        <CardBody>
          <List spacing={2}>
            {problem.commonMistakes.map((mistake, i) => (
              <ListItem
                key={i}
                bg="red.50"
                p={2}
                rounded="md"
                border="1px solid"
                borderColor="red.200"
                color="gray.700"
              >
                {mistake}
              </ListItem>
            ))}
          </List>
        </CardBody>
      </Card>

      {/* Resources */}
      <Card mb={6} shadow="md" bg="white">
        <CardHeader fontWeight="bold" fontSize="lg" color="gray.700">
          Resources 🔗
        </CardHeader>
        <CardBody>
          <List spacing={3}>
            {problem.resources.map((res) => (
              <ListItem key={res._id}>
                <Link
                  href={res.url}
                  color="teal.500"
                  isExternal
                  fontWeight="semibold"
                >
                  {res.label} <ExternalLinkIcon mx="2px" />
                </Link>
              </ListItem>
            ))}
          </List>
        </CardBody>
      </Card>

      {/* Engagement Buttons */}
      <Flex gap={4} justify="center" mt={8} wrap="wrap">
        <Button
          leftIcon={<CheckCircleIcon />}
          colorScheme="teal"
          variant="solid"
          onClick={() =>
            toast({
              title: "Glad it helped!",
              status: "success",
              duration: 2000,
            })
          }
        >
          Helpful
        </Button>
        <Button
          leftIcon={<StarIcon />}
          colorScheme={bookmarked ? "yellow" : "gray"}
          variant="solid"
          onClick={() => setBookmarked(!bookmarked)}
        >
          {bookmarked ? "Bookmarked" : "Bookmark"}
        </Button>
      </Flex>
    </Box>
  );
}
