import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Input,
  Select,
  VStack,
  Heading,
  Divider,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

const API_BASE = "https://my-portfolio-lw4x.vercel.app/api/patterns"; // replace with deployed API

const AdminPanel = () => {
  const [topic, setTopic] = useState("");
  const [title, setTitle] = useState("");
  const [level, setLevel] = useState("Easy");
  const [link, setLink] = useState("");
  const [platform, setPlatform] = useState("LeetCode");
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");

  const toast = useToast();

  // fetch topics for dropdown
  useEffect(() => {
    axios.get(API_BASE).then((res) => {
      setTopics(res.data.patterns);
    });
  }, []);

  // Add new pattern
  const handleAddPattern = async () => {
    try {
      await axios.post(`${API_BASE}/add`, {
        topic,
        problems: [{ title, level, link, platform }],
      });
      toast({ title: "Pattern added!", status: "success" });
    } catch (error) {
      toast({ title: "Error adding pattern", status: "error" });
    }
  };

  // Add problem to existing topic
  const handleAddProblem = async () => {
    try {
      await axios.post(`${API_BASE}/${selectedTopic}/add-problem`, {
        title,
        level,
        link,
        platform,
      });
      toast({ title: "Problem added!", status: "success" });
    } catch (error) {
      toast({ title: "Error adding problem", status: "error" });
    }
  };

  return (
    <Box maxW="600px" mx="auto" p={6}>
      <Heading size="lg" mb={4}>Admin Panel</Heading>

      {/* Add Pattern */}
      <VStack spacing={3} p={4} border="1px solid #ddd" rounded="lg">
        <Heading size="md">Add New Pattern</Heading>
        <Input placeholder="Topic Name" value={topic} onChange={(e) => setTopic(e.target.value)} />
        <Input placeholder="Problem Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Select value={level} onChange={(e) => setLevel(e.target.value)}>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </Select>
        <Input placeholder="Problem Link" value={link} onChange={(e) => setLink(e.target.value)} />
        <Select value={platform} onChange={(e) => setPlatform(e.target.value)}>
          <option value="LeetCode">LeetCode</option>
          <option value="CodeChef">CodeChef</option>
          <option value="HackerRank">HackerRank</option>
          <option value="Codeforces">Codeforces</option>
          <option value="GFG">GFG</option>
        </Select>
        <Button colorScheme="teal" onClick={handleAddPattern}>
          Add Pattern
        </Button>
      </VStack>

      <Divider my={6} />

      {/* Add Problem */}
      <VStack spacing={3} p={4} border="1px solid #ddd" rounded="lg">
        <Heading size="md">Add Problem to Existing Topic</Heading>
        <Select placeholder="Select Topic" onChange={(e) => setSelectedTopic(e.target.value)}>
          {topics.map((t) => (
            <option key={t._id} value={t.topic}>
              {t.topic}
            </option>
          ))}
        </Select>
        <Input placeholder="Problem Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Select value={level} onChange={(e) => setLevel(e.target.value)}>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </Select>
        <Input placeholder="Problem Link" value={link} onChange={(e) => setLink(e.target.value)} />
        <Select value={platform} onChange={(e) => setPlatform(e.target.value)}>
          <option value="LeetCode">LeetCode</option>
          <option value="CodeChef">CodeChef</option>
          <option value="HackerRank">HackerRank</option>
          <option value="Codeforces">Codeforces</option>
          <option value="GFG">GFG</option>
        </Select>
        <Button colorScheme="blue" onClick={handleAddProblem}>
          Add Problem
        </Button>
      </VStack>
    </Box>
  );
};

export default AdminPanel;
