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
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Search2Icon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FeatureIntro from "./FeatureIntro";

const MotionCard = motion(Card);

export default function ProblemsList() {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [difficulty, setDifficulty] = useState("All");

  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();

  // color-mode aware values
  const pageBg = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.700");
  const cardBorder = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const secondaryText = useColorModeValue("gray.700", "gray.200");
  const inputBg = useColorModeValue("white", "gray.600");
  const iconColor = useColorModeValue("gray.500", "gray.300");
  const noResultColor = useColorModeValue("gray.700", "gray.200");

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const { data } = await axios.get(
          "https://my-portfolio-lw4x.vercel.app/api/problems"
        );
        setProblems(data || []);
      } catch (error) {
        console.error(error);
        setProblems([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProblems();
  }, []);

  // unique categories (handle empty)
  const categories = ["All", ...new Set((problems || []).map((p) => p.category))];

  // filtering logic (safe for missing fields)
  const filteredProblems = (problems || []).filter((p) => {
    const title = (p.title || "").toString().toLowerCase();
    const cat = (p.category || "").toString().toLowerCase();
    const diff = (p.difficulty || "").toString().toLowerCase();
    const q = search.toLowerCase();

    const matchesSearch = title.includes(q) || cat.includes(q) || diff.includes(q);
    const matchesCategory = category === "All" || (p.category === category);
    const matchesDifficulty = difficulty === "All" || (p.difficulty === difficulty);

    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  if (loading) {
    return (
      <Box textAlign="center" mt={10}>
        <Spinner size="xl" thickness="4px" speed="0.65s" color="teal.500" />
        <Text mt={3} fontWeight="bold" color={secondaryText}>
          Loading problems...
        </Text>
      </Box>
    );
  }

  return (
    <Box p={6} bg={pageBg} minH="100vh">
      {/* Header: title + color mode toggle */}
      <FeatureIntro/>
      <Flex justify="space-between" align="center" mb={4} wrap="wrap" gap={4}>
        <Text fontSize="2xl" fontWeight="bold" color={textColor}>
          Problems
        </Text>
        <IconButton
          aria-label={colorMode === "light" ? "Switch to dark" : "Switch to light"}
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          size="md"
        />
      </Flex>

      {/* Filters Section */}
      <Flex
        justify="center"
        mb={6}
        direction={["column", "row"]}
        gap={4}
        align="center"
        flexWrap="wrap"
      >
        {/* Search Bar */}
        <InputGroup maxW="420px">
          <InputLeftElement pointerEvents="none">
            <Search2Icon color={iconColor} />
          </InputLeftElement>
          <Input
            placeholder="Search by title, category or difficulty..."
            variant="outline"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            _focus={{ borderColor: "teal.400", boxShadow: "0 0 0 1px teal" }}
            bg={inputBg}
            color={textColor}
          />
        </InputGroup>

        {/* Category Filter */}
        <Select
          maxW="220px"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          bg={inputBg}
          color={textColor}
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
          maxW="220px"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          bg={inputBg}
          color={textColor}
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
          <Text fontSize="lg" fontWeight="semibold" color={noResultColor}>
            🚀 No problems found
          </Text>
        </Box>
      ) : (
        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          {filteredProblems.map((problem) => (
            <MotionCard
              key={problem._id || Math.random()}
              shadow="lg"
              borderWidth="1px"
              rounded="2xl"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.18 }}
              _hover={{ shadow: "2xl", borderColor: "teal.300" }}
              bg={cardBg}
              borderColor={cardBorder}
              color={textColor}
            >
              <CardHeader>
                <Text fontSize="xl" fontWeight="bold" mb={2} noOfLines={1} color={textColor}>
                  {problem.title || "Untitled Problem"}
                </Text>
                <Flex gap={2} wrap="wrap">
                  <Tag
                    size="sm"
                    colorScheme="blue"
                    borderRadius="full"
                    px={3}
                  >
                    {problem.category || "General"}
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
                    {problem.difficulty || "Unknown"}
                  </Tag>
                </Flex>
              </CardHeader>
              <CardBody>
                <Text noOfLines={3} color={secondaryText}>
                  {problem.problemStatement || "No description available."}
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
