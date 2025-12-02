import React, { useEffect, useState } from "react";
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
  VStack,
} from "@chakra-ui/react";
import { FaGithub, FaLink, FaSun, FaMoon, FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { colorMode, toggleColorMode } = useColorMode();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://my-portfolio-lw4x.vercel.app/api/get")
      .then((res) => {
        setProjects(res.data?.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching projects:", err);
        setLoading(false);
      });
  }, []);

  const filterProjects = (category) => {
    return (projects || [])
      .filter(
        (p) => p.category?.toLowerCase().trim() === category.toLowerCase()
      )
      .filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
  };

  /* =======================
       PROJECT GRID
  ======================== */
  const ProjectGrid = ({ items }) => (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
      {loading
        ? [...Array(6)].map((_, idx) => (
            <Skeleton key={idx} height="350px" borderRadius="lg" />
          ))
        : items.map((p) => (
            <motion.div
              key={p._id}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.25 }}
            >
              <Box
                p={5}
                shadow="lg"
                borderRadius="lg"
                bg={colorMode === "dark" ? "gray.800" : "white"}
                color={colorMode === "dark" ? "gray.200" : "gray.700"}
                cursor="pointer"
                display="flex"
                flexDirection="column"
                transition="0.3s"
                _hover={{
                  shadow:
                    colorMode === "dark"
                      ? "0 0 15px rgba(0,255,180,0.6)"
                      : "0 0 15px rgba(0,150,255,0.4)",
                  transform: "translateY(-5px)",
                }}
                onClick={() => navigate(`/project/${p._id}`)}
              >
                {/* TITLE */}
                <Text fontWeight="bold" fontSize="xl" mb={2} noOfLines={1}>
                  {p.title}
                </Text>

                <Divider my={2} />

                {/* IMAGE CLEAN & RESPONSIVE */}
                {p.image && (
                  <Box
                    w="100%"
                    h="180px"
                    overflow="hidden"
                    borderRadius="md"
                    mb={3}
                  >
                    <Image
                      src={p.image}
                      alt={p.title}
                      width="100%"
                      height="100%"
                      objectFit="cover"
                      transition="0.3s"
                      _hover={{ transform: "scale(1.05)" }}
                    />
                  </Box>
                )}

                {/* DESCRIPTION */}
                <Text fontSize="sm" noOfLines={3} mb={3}>
                  {p.description}
                </Text>

                {/* TECH STACK */}
                <HStack spacing={2} wrap="wrap" mb={3}>
                  {(p.techStack || []).map((tech, idx) => (
                    <Badge
                      key={idx}
                      px={2}
                      py={1}
                      borderRadius="md"
                      colorScheme={colorMode === "dark" ? "cyan" : "blue"}
                      fontSize="0.7rem"
                    >
                      {tech}
                    </Badge>
                  ))}
                </HStack>

                <Divider my={3} />

                {/* BUTTONS */}
                <HStack justify="space-between">
                  <Button
                    as="a"
                    href={p.github}
                    target="_blank"
                    leftIcon={<FaGithub />}
                    size="sm"
                    variant="outline"
                    colorScheme="gray"
                  >
                    GitHub
                  </Button>

                  <Button
                    as="a"
                    href={p.link}
                    target="_blank"
                    leftIcon={<FaLink />}
                    size="sm"
                    colorScheme="teal"
                  >
                    Live
                  </Button>
                </HStack>
              </Box>
            </motion.div>
          ))}
    </SimpleGrid>
  );

  return (
    <Box py={10} px={{ base: 4, md: 10 }}>
      {/* HEADER */}
      <HStack justify="space-between" mb={6} flexWrap="wrap" gap={3}>
        <Heading
          size="lg"
          color={colorMode === "dark" ? "teal.300" : "teal.600"}
        >
          My Projects
        </Heading>

        <HStack>
          <Input
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            width={{ base: "150px", md: "250px" }}
            borderRadius="md"
          />

          <IconButton
            icon={<FaSearch />}
            colorScheme="teal"
            aria-label="Search"
          />

          <IconButton
            icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
            onClick={toggleColorMode}
            colorScheme="teal"
            aria-label="Toggle Theme"
          />
        </HStack>
      </HStack>

      <Divider mb={5} />

      {/* TABS */}
      <Tabs variant="soft-rounded" colorScheme="teal">
        <TabList>
          <Tab fontWeight="bold">Web Projects</Tab>
          <Tab fontWeight="bold">Android Projects</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <ProjectGrid items={filterProjects("web")} />
          </TabPanel>

          <TabPanel>
            <ProjectGrid items={filterProjects("android")} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default ProjectsSection;
