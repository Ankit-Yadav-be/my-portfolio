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
  Input,
  InputGroup,
  InputLeftElement,
  Flex,
  Select,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MotionCard = motion(Card);

export default function ProblemsList() {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [difficulty, setDifficulty] = useState("All");

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

  // unique category list banate hain
  const categories = ["All", ...new Set(problems.map((p) => p.category))];

  // filtering logic
  const filteredProblems = problems.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase()) ||
      p.difficulty.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = category === "All" || p.category === category;
    const matchesDifficulty = difficulty === "All" || p.difficulty === difficulty;

    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  if (loading) {
    return (
      <Box textAlign="center" mt={10}>
        <Spinner size="xl" thickness="4px" speed="0.65s" color="teal.500" />
        <Text mt={3} fontWeight="bold">
          Loading problems...
        </Text>
      </Box>
    );
  }

  return (
    <Box p={6}>
      {/* Filters Section */}
      <Flex
        justify="center"
        mb={6}
        direction={["column", "row"]}
        gap={4}
        align="center"
      >
        {/* Search Bar */}
        <InputGroup maxW="400px">
          <InputLeftElement pointerEvents="none">
            <Search2Icon color="gray.400" />
          </InputLeftElement>
          <Input
            placeholder="Search problems..."
            variant="filled"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            _focus={{ bg: "white", borderColor: "teal.400" }}
            bg="gray.50"
          />
        </InputGroup>

        {/* Category Filter */}
        <Select
          maxW="200px"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          bg="gray.50"
          _focus={{ borderColor: "teal.400" }}
        >
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </Select>

        {/* Difficulty Filter */}
        <Select
          maxW="200px"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          bg="gray.50"
          _focus={{ borderColor: "teal.400" }}
        >
          <option value="All">All Difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </Select>
      </Flex>

      {/* Problems Grid */}
      {filteredProblems.length === 0 ? (
        <Box textAlign="center" mt={10}>
          <Text fontSize="lg" fontWeight="semibold" color="gray.600">
            🚀 No problems found
          </Text>
        </Box>
      ) : (
        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          {filteredProblems.map((problem) => (
            <MotionCard
              key={problem._id}
              shadow="lg"
              borderWidth="1px"
              rounded="2xl"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              _hover={{ shadow: "2xl", borderColor: "teal.300" }}
            >
              <CardHeader>
                <Text fontSize="xl" fontWeight="bold" mb={2} noOfLines={1}>
                  {problem.title}
                </Text>
                <Flex gap={2} wrap="wrap">
                  <Tag
                    size="sm"
                    colorScheme="blue"
                    borderRadius="full"
                    px={3}
                  >
                    {problem.category}
                  </Tag>
                  <Tag
                    size="sm"
                    colorScheme={
                      problem.difficulty === "Easy"
                        ? "green"
                        : problem.difficulty === "Medium"
                        ? "yellow"
                        : "red"
                    }
                    borderRadius="full"
                    px={3}
                  >
                    {problem.difficulty}
                  </Tag>
                </Flex>
              </CardHeader>
              <CardBody>
                <Text noOfLines={3} color="gray.600">
                  {problem.problemStatement}
                </Text>
                <Button
                  mt={4}
                  size="sm"
                  colorScheme="teal"
                  w="full"
                  rounded="full"
                  onClick={() => navigate(`/problems/${problem._id}`)}
                  _hover={{ bg: "teal.600" }}
                >
                  View Details
                </Button>
              </CardBody>
            </MotionCard>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
}
