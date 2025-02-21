import React, { useEffect, useState } from "react";
import { Box, Button, Heading, Text, Stack, Link, Spinner, Alert, AlertIcon } from "@chakra-ui/react";
import { FaGithub, FaRegClock, FaBook, FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing icons
import axios from "axios";
const GitHubActivityFeed = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showRepos, setShowRepos] = useState(false); // State to toggle showing repos
  const token = "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"; // Insert your new token here

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get("https://api.github.com/users/Ankit-Yadav-be/repos", {
          headers: {
            Authorization: `token ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch repos");
        }
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, [token]);

  return (
    <Box p={6} maxW="7xl" mx="auto"  borderRadius="lg" boxShadow="lg" color="white">
      {/* Icon-based Toggle Button */}
      <Button
        colorScheme="cyan"
        onClick={() => setShowRepos(!showRepos)}
        mb={4}
        display="block"
        mx="auto"
        size="lg"
        variant="outline"
        _hover={{ bg: "cyan.600", color: "white" }}
        leftIcon={showRepos ? <FaEyeSlash /> : <FaEye />} // Display different icons based on state
      >
        {showRepos ? "Hide Repo" : "Show Recent Repo"}
      </Button>

      {loading ? (
        <Spinner size="xl" display="block" mx="auto" />
      ) : error ? (
        <Alert status="error" mb={4}>
          <AlertIcon />
          {error}
        </Alert>
      ) : showRepos && repos.length > 0 ? (
        <Box
          p={5}
          borderWidth={1}
          borderRadius="md"
          boxShadow="md"
          _hover={{ bg: "cyan.600", transform: "scale(1.05)", transition: "all 0.3s ease" }}
        >
          <Heading size="md" mb={2}>
            <Link href={repos[0].html_url} color="cyan.400" isExternal>
              <FaGithub style={{ marginRight: '8px' }} />
              {repos[0].name}
            </Link>
          </Heading>
          <Text fontSize="sm" color="gray.300" mb={2}>
            <FaBook style={{ marginRight: '8px' }} />
            {repos[0].description ? repos[0].description : "No description available"}
          </Text>
          <Text fontSize="xs" mt={2} color="gray.500">
            <FaRegClock style={{ marginRight: '8px' }} />
            Last updated: {new Date(repos[0].updated_at).toLocaleDateString()}
          </Text>
        </Box>
      ) : null}
    </Box>
  );
};

export default GitHubActivityFeed;
