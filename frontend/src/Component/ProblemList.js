// src/pages/ProblemsList.jsx
import { useEffect, useState } from "react";
import {
  Box,
  Text,
  Tag,
  Button,
  Spinner,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ProblemsList() {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const { data } = await axios.get(
          "https://my-portfolio-lw4x.vercel.app/api/problems"
        );
        setProblems(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProblems();
  }, []);

  if (loading) {
    return (
      <Box textAlign="center" mt={10}>
        <Spinner size="xl" />
      </Box>
    );
  }

  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={5} p={5}>
      {problems.map((problem) => (
        <Card key={problem._id} shadow="md" borderWidth="1px">
          <CardHeader>
            <Text fontSize="xl" fontWeight="bold">
              {problem.title}
            </Text>
            <Tag colorScheme="blue" mr={2}>
              {problem.category}
            </Tag>
            <Tag colorScheme="green">{problem.difficulty}</Tag>
          </CardHeader>
          <CardBody>
            <Text noOfLines={3}>{problem.problemStatement}</Text>
            <Button
              mt={4}
              size="sm"
              colorScheme="teal"
              onClick={() => navigate(`/problems/${problem._id}`)}
            >
              View Details
            </Button>
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
  );
}
