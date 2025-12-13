import React, { useEffect, useState, useCallback } from "react";
import {
  Box,
  Text,
  Image,
  SimpleGrid,
  HStack,
  Heading,
  Badge,
  useColorMode,
  Skeleton,
  Divider,
  Input,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { FaGithub, FaLink, FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "https://my-portfolio-lw4x.vercel.app/api/get";

const MotionBox = motion(Box);

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { colorMode, toggleColorMode } = useColorMode();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchProjects = useCallback(() => {
    setLoading(true);
    axios
      .get(API_URL, { headers: { "Cache-Control": "no-cache" } })
      .then((res) => {
        setProjects(res.data?.data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetchProjects();
    const handleFocus = () => fetchProjects();
    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, [fetchProjects]);

  const filterProjects = (category) =>
    projects
      .filter((p) => p.category?.toLowerCase().includes(category))
      .filter((p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const ProjectGrid = ({ items }) => (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
      {loading
        ? [...Array(6)].map((_, i) => (
            <Skeleton key={i} height="360px" borderRadius="xl" />
          ))
        : items.length === 0
        ? (
          <Text textAlign="center" color="gray.500">
            No projects found
          </Text>
        )
        : items.map((p) => (
            <MotionBox
              key={p._id}
              role="group"
              p={5}
              bg={colorMode === "dark" ? "gray.800" : "white"}
              borderRadius="xl"
              boxShadow="md"
              cursor="pointer"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => navigate(`/project/${p._id}`)}
            >
              <Text fontSize="lg" fontWeight="semibold" noOfLines={1}>
                {p.title}
              </Text>
              <Text fontSize="xs" color="gray.500" mb={2}>
                {p.category?.toUpperCase()}
              </Text>

              {p.image && (
                <Box
                  position="relative"
                  h="180px"
                  overflow="hidden"
                  borderRadius="lg"
                  mb={3}
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    transition="0.4s"
                    _groupHover={{ transform: "scale(1.06)" }}
                    loading="lazy"
                  />
                  <Box
                    position="absolute"
                    inset={0}
                    bg="linear-gradient(to top, rgba(0,0,0,0.6), transparent)"
                    opacity={0}
                    transition="0.3s"
                    _groupHover={{ opacity: 1 }}
                  />
                </Box>
              )}

              <Text fontSize="sm" color="gray.500" noOfLines={3} mb={3}>
                {p.description}
              </Text>

              <HStack spacing={2} wrap="wrap" mb={4}>
                {(p.techStack || []).map((tech, i) => (
                  <Badge
                    key={i}
                    variant="subtle"
                    colorScheme="gray"
                    fontSize="0.65rem"
                  >
                    {tech}
                  </Badge>
                ))}
              </HStack>

              <Divider mb={3} />

              <HStack justify="space-between">
                <Button
                  size="sm"
                  colorScheme="teal"
                  leftIcon={<FaLink />}
                  as="a"
                  href={p.link}
                  target="_blank"
                >
                  Live
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  leftIcon={<FaGithub />}
                  as="a"
                  href={p.github}
                  target="_blank"
                >
                  Code
                </Button>
              </HStack>
            </MotionBox>
          ))}
    </SimpleGrid>
  );

  return (
    <Box py={12} px={{ base: 4, md: 10 }}>
      <HStack justify="space-between" mb={6} flexWrap="wrap" gap={3}>
        <Heading size="lg">Projects</Heading>
        <HStack>
          <Input
            placeholder="Search projects"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            w={{ base: "160px", md: "260px" }}
            _focus={{ borderColor: "teal.400" }}
          />
          <IconButton
            icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
            onClick={toggleColorMode}
            aria-label="Toggle theme"
          />
        </HStack>
      </HStack>

      <Divider mb={6} />

      <Tabs variant="unstyled">
        <TabList mb={4}>
          <Tab
            _selected={{
              borderBottom: "2px solid",
              borderColor: "teal.400",
              color: "teal.400",
            }}
          >
            Web Projects
          </Tab>
          <Tab
            _selected={{
              borderBottom: "2px solid",
              borderColor: "teal.400",
              color: "teal.400",
            }}
          >
            Android Projects
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel px={0}>
            <ProjectGrid items={filterProjects("web")} />
          </TabPanel>
          <TabPanel px={0}>
            <ProjectGrid items={filterProjects("android")} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default ProjectsSection;