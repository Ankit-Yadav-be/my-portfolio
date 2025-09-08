// ✅ Corrected ProblemExplorer.js
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
  Progress,
  Code,
} from "@chakra-ui/react";
import { ExternalLinkIcon, ArrowUpIcon, CheckIcon } from "@chakra-ui/icons";
import axios from "axios";
import Confetti from "react-confetti";
import PatternExplorerIntro from "./PatternExplorerIntro";

const API_BASE = "https://my-portfolio-lw4x.vercel.app/api/patterns"; // replace if needed

export default function ProblemsExplorer() {
  // state
  const [patterns, setPatterns] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [query, setQuery] = useState("");
  const [filterDifficulty, setFilterDifficulty] = useState("All");
  const [doneMap, setDoneMap] = useState({});
  const [loading, setLoading] = useState(true);

  // modal
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentHint, setCurrentHint] = useState("");
  const [currentProblemTitle, setCurrentProblemTitle] = useState("");

  // confetti
  const [showConfetti, setShowConfetti] = useState(false);

  // ✅ color mode friendly values (all at top-level)
  const pageBg = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const subTextColor = useColorModeValue("gray.500", "gray.400");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const accentStart = useColorModeValue("teal.400", "teal.300");
  const accentEnd = useColorModeValue("blue.500", "blue.400");
  const sidebarBg = useColorModeValue(
    "rgba(255,255,255,0.6)",
    "rgba(20,20,20,0.6)"
  );
  const inputBg = useColorModeValue("white", "gray.700");
  const hoverBg = useColorModeValue("gray.100", "gray.700");
  const progressBg = useColorModeValue("gray.200", "gray.700");
  const modalCodeBg = useColorModeValue("gray.50", "gray.700");

  const toast = useToast();

  // load patterns
  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const res = await axios.get(API_BASE);
        const loaded = res.data.patterns || [];
        setPatterns(loaded);
        if (!selectedTopic && loaded.length > 0)
          setSelectedTopic(loaded[0].topic);
      } catch (err) {
        toast({ title: "Failed to load patterns", status: "error" });
      } finally {
        setLoading(false);
      }
    };
    fetch();

    // load doneMap
    const saved = localStorage.getItem("dsa_done_map_v2");
    if (saved) setDoneMap(JSON.parse(saved));
  }, []); // eslint-disable-line

  // persist doneMap
  useEffect(() => {
    localStorage.setItem("dsa_done_map_v2", JSON.stringify(doneMap));
  }, [doneMap]);

  // helpers
  const topics = patterns.map((p) => p.topic);
  const selectedPattern =
    patterns.find((p) => p.topic === selectedTopic) || null;

  const groupProblems = (problems) => {
    const groups = { Easy: [], Medium: [], Hard: [] };
    (problems || []).forEach((pr) => {
      if (filterDifficulty !== "All" && pr.level !== filterDifficulty) return;
      if (query && !pr.title.toLowerCase().includes(query.toLowerCase()))
        return;
      if (groups[pr.level]) groups[pr.level].push(pr);
    });
    return groups;
  };

  const toggleDone = (topic, title) => {
    setDoneMap((prev) => {
      const key = `${topic}||${title}`;
      const next = { ...prev };
      if (next[key]) {
        delete next[key];
      } else {
        next[key] = true;
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 2500);
      }
      return next;
    });
  };

  const isDone = (topic, title) => !!doneMap[`${topic}||${title}`];

  const openHint = (problem) => {
    setCurrentProblemTitle(problem.title);
    setCurrentHint(
      problem.hint ||
        `Think about ${problem.level} approaches. Identify state, transition, and base cases for Dynamic Programming.`
    );
    onOpen();
  };

  const totalProblems = patterns.reduce(
    (sum, p) => sum + (p.problems?.length || 0),
    0
  );
  const solvedCount = Object.keys(doneMap).length;

  const getDifficultyColorScheme = (level) => {
    if (level === "Easy") return "green";
    if (level === "Medium") return "orange";
    return "red";
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

// ✅ Corrected layout
return (
  <Box bg={pageBg} minH="100vh" p={{ base: 4, md: 8 }}>
    {/* Intro always at top, full width */}
    <Box mb={8}>
      <PatternExplorerIntro />
    </Box>

    {showConfetti && <Confetti recycle={false} numberOfPieces={180} />}

    {/* Main 2-column layout */}
    <Flex gap={6} align="flex-start">
      {/* SIDEBAR */}
      <Box
        minW={{ base: "100%", md: "300px" }}
        maxW={{ md: "300px" }}
        alignSelf="flex-start"
        p={5}
        borderRadius="xl"
        bg={sidebarBg}
        boxShadow="lg"
        backdropFilter="blur(10px)"
        borderWidth="1px"
        borderColor={borderColor}
      >
        <HStack mb={4} justifyContent="space-between">
          <Heading size="md" color={textColor}>
            Practice Paths
          </Heading>
        </HStack>

        <Input
          placeholder="Filter topics..."
          mb={4}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          bg={inputBg}
          size="sm"
        />

        <VStack
          align="stretch"
          spacing={2}
          divider={<StackDivider borderColor={borderColor} />}
          maxH="55vh"
          overflowY="auto"
        >
          {loading && <Text color={subTextColor}>Loading...</Text>}
          {!loading && topics.length === 0 && (
            <Text color={subTextColor}>No topics yet — add from admin</Text>
          )}
          {topics
            .filter((t) => t.toLowerCase().includes(query.toLowerCase()))
            .map((t) => {
              const count =
                patterns.find((p) => p.topic === t)?.problems?.length || 0;
              const selected = t === selectedTopic;
              return (
                <HStack key={t} spacing={3} align="center">
                  <Button
                    onClick={() => setSelectedTopic(t)}
                    variant={selected ? "solid" : "ghost"}
                    size="sm"
                    flex="1"
                    justifyContent="flex-start"
                    bg={selected ? `${accentStart}20` : "transparent"}
                    _hover={{ bg: hoverBg }}
                  >
                    <Text color={textColor}>{t}</Text>
                  </Button>
                  <Badge colorScheme="purple" fontSize="0.8rem">
                    {count}
                  </Badge>
                </HStack>
              );
            })}
        </VStack>
      </Box>

      {/* MAIN */}
      <Box flex="1">
        {/* Topic heading + filters */}
        <HStack mb={5} align="center">
          <Heading
            size="lg"
            bgGradient={`linear(to-r, ${accentStart}, ${accentEnd})`}
            bgClip="text"
          >
            {selectedTopic || "Select a topic"}
          </Heading>
          <Spacer />
          <Input
            placeholder="Search problems in this topic..."
            maxW="420px"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            size="sm"
            bg={cardBg}
          />
          <Select
            value={filterDifficulty}
            onChange={(e) => setFilterDifficulty(e.target.value)}
            maxW="140px"
            size="sm"
            bg={cardBg}
          >
            <option value="All">All</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </Select>
        </HStack>

        {/* Progress */}
        <Box mb={6}>
          <HStack justify="space-between" mb={2}>
            <Text color={subTextColor} fontWeight="medium">
              Progress: {solvedCount}/{totalProblems}
            </Text>
          </HStack>
          <Progress
            value={totalProblems === 0 ? 0 : (solvedCount / totalProblems) * 100}
            size="sm"
            borderRadius="md"
            bg={progressBg}
          />
        </Box>

        {/* Problems */}
        {selectedPattern && (
          <Accordion allowMultiple>
            {Object.entries(groupProblems(selectedPattern.problems)).map(
              ([level, probs]) => (
                <AccordionItem key={level} mb={4} border="none">
                  <h2>
                    <AccordionButton
                      _expanded={{ bg: hoverBg, borderRadius: "md" }}
                      p={3}
                    >
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
                    <VStack align="stretch" spacing={4}>
                      {probs.map((p) => (
                        <Flex
                          key={p.title}
                          p={4}
                          borderWidth="1px"
                          borderRadius="md"
                          borderColor={borderColor}
                          bg={cardBg}
                          align="center"
                          transition="all 0.18s"
                          _hover={{
                            transform: "translateY(-4px)",
                            boxShadow: "lg",
                          }}
                        >
                          <Box>
                            <Text
                              fontSize="md"
                              fontWeight="bold"
                              color={textColor}
                            >
                              {p.title}
                            </Text>
                            <HStack mt={1} spacing={2}>
                              <Badge
                                colorScheme={getDifficultyColorScheme(p.level)}
                              >
                                {p.level}
                              </Badge>
                              <Text fontSize="sm" color={subTextColor}>
                                {p.platform}
                              </Text>
                              <Text
                                fontSize="sm"
                                color={subTextColor}
                                isTruncated
                                maxW="420px"
                              >
                                {p.link}
                              </Text>
                            </HStack>
                          </Box>

                          <Spacer />

                          <HStack spacing={2}>
                            <IconButton
                              aria-label="Open problem"
                              icon={<ExternalLinkIcon />}
                              size="sm"
                              onClick={() => window.open(p.link, "_blank")}
                            />
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => openHint(p)}
                            >
                              Hint
                            </Button>
                            <Button
                              size="sm"
                              colorScheme={
                                isDone(selectedPattern.topic, p.title)
                                  ? "green"
                                  : "gray"
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
        )}
      </Box>
    </Flex>

    {/* Scroll-to-top */}
    <IconButton
      aria-label="Scroll to top"
      icon={<ArrowUpIcon />}
      position="fixed"
      bottom="24px"
      right="24px"
      borderRadius="full"
      size="lg"
      colorScheme="teal"
      onClick={scrollToTop}
      boxShadow="lg"
    />

    {/* Hint Modal */}
    <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
      <ModalOverlay />
      <ModalContent bg={cardBg} borderWidth="1px" borderColor={borderColor}>
        <ModalHeader color={textColor}>
          Hint — {currentProblemTitle}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text color={textColor} mb={4}>
            {currentHint}
          </Text>
          <Box p={3} borderRadius="md" bg={modalCodeBg}>
            <Code whiteSpace="pre" width="100%">
              {`// Pseudocode / starter
function dpExample(arr) {
  const dp = new Array(arr.length).fill(0);
  // fill base cases
  // iterate and fill transitions
}`}
            </Code>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </Box>
);
}
