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
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProblemDetail() {
  const { id } = useParams();
  const [problem, setProblem] = useState(null);
  const [loading, setLoading] = useState(true);

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
        <Spinner size="xl" />
      </Box>
    );
  }

  if (!problem) {
    return <Text textAlign="center">Problem not found</Text>;
  }

  return (
    <Box p={5}>
      <Heading>{problem.title}</Heading>
      <Tag colorScheme="blue" mr={2}>
        {problem.category}
      </Tag>
      <Tag colorScheme="green">{problem.difficulty}</Tag>

      <Box mt={5}>
        <Text fontWeight="bold">Problem Statement:</Text>
        <Text>{problem.problemStatement}</Text>
      </Box>

      <Box mt={5}>
        <Text fontWeight="bold">Why it Happens:</Text>
        <Text>{problem.whyItHappens}</Text>
      </Box>

      <Box mt={5}>
        <Text fontWeight="bold">Solution Steps:</Text>
        <List spacing={3}>
          {problem.solutionSteps.map((step) => (
            <ListItem key={step._id}>
              <Text>
                <strong>Step {step.stepNumber}:</strong> {step.description}
              </Text>
              {step.codeSnippet && (
                <Code display="block" whiteSpace="pre" p={2} mt={1}>
                  {step.codeSnippet}
                </Code>
              )}
            </ListItem>
          ))}
        </List>
      </Box>

      <Box mt={5}>
        <Text fontWeight="bold">Common Mistakes:</Text>
        <List spacing={2}>
          {problem.commonMistakes.map((mistake, i) => (
            <ListItem key={i}>❌ {mistake}</ListItem>
          ))}
        </List>
      </Box>

      <Box mt={5}>
        <Text fontWeight="bold">Resources:</Text>
        <List spacing={2}>
          {problem.resources.map((res) => (
            <ListItem key={res._id}>
              🔗{" "}
              <Link href={res.url} color="teal.500" isExternal>
                {res.label}
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}
