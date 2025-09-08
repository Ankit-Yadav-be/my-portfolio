import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Input,
  VStack,
  HStack,
  Button,
  Tag,
  Text,
  StackDivider,
  Badge,
  IconButton,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
  Select,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import { ExternalLinkIcon, CheckIcon } from "@chakra-ui/icons";
import axios from "axios";

const API_BASE = "https://my-portfolio-lw4x.vercel.app/api/patterns"; // replace with your deployed api

export default function ProblemsExplorer() {
  const [patterns, setPatterns] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [query, setQuery] = useState("");
  const [filterDifficulty, setFilterDifficulty] = useState("All");
  const [doneMap, setDoneMap] = useState({});
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  // Hint modal state
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentHint, setCurrentHint] = useState("");
  const [currentProblemTitle, setCurrentProblemTitle] = useState("");

  // Chakra color mode values
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.200");
  const subTextColor = useColorModeValue("gray.500", "gray.400");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  // Load patterns from API
  useEffect(() => {
    const fetchPatterns = async () => {
      try {
        setLoading(true);
        const res = await axios.get(API_BASE);
        setPatterns(res.data.patterns || []);

        if (!selectedTopic && res.data.patterns && res.data.patterns.length > 0) {
          setSelectedTopic(res.data.patterns[0].topic);
        }
      } catch (err) {
        toast({ title: "Failed to load topics", status: "error" });
      } finally {
        setLoading(false);
      }
    };

    fetchPatterns();

    const saved = localStorage.getItem("dsa_done_map_v1");
    if (saved) setDoneMap(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("dsa_done_map_v1", JSON.stringify(doneMap));
  }, [doneMap]);

  const topics = patterns.map((p) => p.topic);
  const selectedPattern = patterns.find((p) => p.topic === selectedTopic) || null;

  const groupProblems = (problems) => {
    const groups = { Easy: [], Medium: [], Hard: [] };
    (problems || []).forEach((pr) => {
      if (filterDifficulty !== "All" && pr.level !== filterDifficulty) return;
      if (query && !pr.title.toLowerCase().includes(query.toLowerCase())) return;
      if (groups[pr.level]) groups[pr.level].push(pr);
    });
    return groups;
  };

  const toggleDone = (topic, title) => {
    setDoneMap((prev) => {
      const key = `${topic}||${title}`;
      const next = { ...prev };
      if (next[key]) delete next[key];
      else next[key] = true;
      return next;
    });
  };

  const isDone = (topic, title) => !!doneMap[`${topic}||${title}`];

  const openHint = (problem) => {
    setCurrentProblemTitle(problem.title);
    setCurrentHint(
      problem.hint ||
        `Think about ${problem.level} level approach and common patterns used in ${selectedTopic}.`
    );
    onOpen();
  };

  return (
    <Flex direction={{ base: "column", md: "row" }} minH="80vh" p={6} gap={6}>
      {/* Sidebar */}
      <Box
        minW={{ base: "100%", md: "280px" }}
        borderRadius="lg"
        p={4}
        bg={cardBg}
        boxShadow="md"
        borderWidth="1px"
        borderColor={borderColor}
      >
        <Heading size="md" mb={4} color={textColor}>
          Practice Paths
        </Heading>

        <Input
          placeholder="Search topics..."
          mb={3}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <VStack
          align="stretch"
          spacing={2}
          divider={<StackDivider borderColor={borderColor} />}
          maxH="60vh"
          overflowY="auto"
        >
          {loading && <Text color={subTextColor}>Loading topics...</Text>}
          {topics
            .filter((t) => t.toLowerCase().includes(query.toLowerCase()))
            .map((t) => (
              <HStack key={t} spacing={3} align="center">
                <Button
                  variant={t === selectedTopic ? "solid" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedTopic(t)}
                  flex="1"
                >
                  {t}
                </Button>
                <Badge>
                  {(patterns.find((p) => p.topic === t)?.problems || []).length}
                </Badge>
              </HStack>
            ))}
        </VStack>

        <Spacer />

        <Box mt={4}>
          <Text fontSize="sm" color={subTextColor}>
            Pro tip: Use the filters in the topic view to narrow problems.
          </Text>
        </Box>
      </Box>

      {/* Main content */}
      <Box
        flex="1"
        bg={cardBg}
        p={6}
        borderRadius="lg"
        boxShadow="md"
        borderWidth="1px"
        borderColor={borderColor}
      >
        <HStack mb={4} align="center">
          <Heading size="lg" color={textColor}>
            {selectedTopic || "Select a topic"}
          </Heading>
          <Spacer />
          <Input
            placeholder="Search problems in this topic..."
            maxW="320px"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Select
            value={filterDifficulty}
            onChange={(e) => setFilterDifficulty(e.target.value)}
            maxW="140px"
          >
            <option value="All">All</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </Select>
        </HStack>

        {!selectedPattern && (
          <Text color={subTextColor}>
            No topic selected. Choose a topic from the left.
          </Text>
        )}

        {selectedPattern && (
          <Box>
            <HStack mb={4} spacing={3}>
              <Text color={subTextColor}>Showing</Text>
              <Tag>{selectedPattern.topic}</Tag>
              <Badge>{selectedPattern.problems.length} problems</Badge>
            </HStack>

            <Accordion allowMultiple>
              {Object.entries(groupProblems(selectedPattern.problems)).map(
                ([level, probs]) => (
                  <AccordionItem
                    key={level}
                    mb={3}
                    borderRadius="md"
                    borderWidth="1px"
                    borderColor={borderColor}
                    overflow="hidden"
                  >
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          <HStack>
                            <Text fontWeight="semibold" color={textColor}>
                              {level}
                            </Text>
                            <Text color={subTextColor}>({probs.length})</Text>
                          </HStack>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <VStack align="stretch" spacing={3}>
                        {probs.length === 0 && (
                          <Text color={subTextColor}>
                            No problems found for this filter.
                          </Text>
                        )}
                        {probs.map((p) => (
                          <Flex
                            key={p.title}
                            p={3}
                            borderWidth="1px"
                            borderRadius="md"
                            borderColor={borderColor}
                            align="center"
                          >
                            <Box>
                              <Text fontWeight="semibold" color={textColor}>
                                {p.title}
                              </Text>
                              <Text fontSize="sm" color={subTextColor}>
                                {p.platform} • {p.link}
                              </Text>
                            </Box>

                            <Spacer />

                            <HStack spacing={2}>
                              <IconButton
                                aria-label="Open problem"
                                icon={<ExternalLinkIcon />}
                                size="sm"
                                onClick={() => window.open(p.link, "_blank")}
                              />

                              <Button size="sm" onClick={() => openHint(p)}>
                                Hint
                              </Button>

                              <Button
                                size="sm"
                                variant={
                                  isDone(selectedPattern.topic, p.title)
                                    ? "solid"
                                    : "outline"
                                }
                                leftIcon={
                                  isDone(selectedPattern.topic, p.title) ? (
                                    <CheckIcon />
                                  ) : null
                                }
                                onClick={() =>
                                  toggleDone(selectedPattern.topic, p.title)
                                }
                              >
                                {isDone(selectedPattern.topic, p.title)
                                  ? "Done"
                                  : "Mark done"}
                              </Button>
                            </HStack>
                          </Flex>
                        ))}
                      </VStack>
                    </AccordionPanel>
                  </AccordionItem>
                )
              )}
            </Accordion>
          </Box>
        )}

        {/* Hint Modal */}
        <Modal isOpen={isOpen} onClose={onClose} size="lg">
          <ModalOverlay />
          <ModalContent bg={cardBg}>
            <ModalHeader color={textColor}>
              Hint — {currentProblemTitle}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text color={textColor}>{currentHint}</Text>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Flex>
  );
}
