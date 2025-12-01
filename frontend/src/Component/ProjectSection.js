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

  /* ================================
        ✔ GET ALL PROJECTS
  ================================= */
  useEffect(() => {
    axios
      .get("https://my-portfolio-lw4x.vercel.app/api/get")
      .then((response) => {
        setProjects(response.data?.data || []); // SAFE ARRAY
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching projects:", err);
        setLoading(false);
      });
  }, []);

  /* ================================
        ✔ FILTER PROJECTS
  ================================= */
  const filterProjects = (category) => {
    return (projects || [])
      .filter(
        (p) => p.category?.toLowerCase().trim() === category.toLowerCase()
      )
      .filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
  };

  /* ================================
        ✔ PROJECT GRID COMPONENT
  ================================= */
  const ProjectGrid = ({ items }) => (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
      {loading
        ? [...Array(6)].map((_, index) => (
            <Skeleton key={index} height="350px" borderRadius="lg" />
          ))
        : items.map((project) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              key={project._id}
            >
              <Box
                p={6}
                borderRadius="lg"
                boxShadow="lg"
                bg={colorMode === "dark" ? "gray.800" : "white"}
                color={colorMode === "dark" ? "gray.200" : "gray.700"}
                height="400px"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                cursor="pointer"
                _hover={{
                  boxShadow:
                    colorMode === "dark"
                      ? "0px 0px 15px rgba(0, 255, 150, 0.7)"
                      : "0px 0px 15px rgba(0, 150, 255, 0.5)",
                  transform: "translateY(-5px)",
                  transition: "0.3s ease-in-out",
                }}
                onClick={() => navigate(`/project/${project._id}`)}
              >
                <Text fontWeight="bold" fontSize="xl" noOfLines={1}>
                  {project.title}
                </Text>

                <Divider my={2} />

                <Text fontSize="sm" mt={2} noOfLines={3}>
                  {project.description}
                </Text>

                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    borderRadius="md"
                    mt={4}
                    maxHeight="150px"
                    objectFit="cover"
                  />
                )}

                {/* ✔ SAFE techStack */}
                <HStack spacing={2} mt={3} wrap="wrap">
                  {(project.techStack || []).map((tech, index) => (
                    <Badge
                      key={index}
                      colorScheme={colorMode === "dark" ? "cyan" : "blue"}
                    >
                      {tech}
                    </Badge>
                  ))}
                </HStack>

                <Divider my={4} />

                <HStack spacing={4}>
                  <Button
                    as="a"
                    href={project.github}
                    target="_blank"
                    leftIcon={<FaGithub />}
                    colorScheme="gray"
                    size="sm"
                  >
                    GitHub
                  </Button>

                  <Button
                    as="a"
                    href={project.link}
                    target="_blank"
                    leftIcon={<FaLink />}
                    colorScheme="green"
                    size="sm"
                  >
                    Live Demo
                  </Button>
                </HStack>
              </Box>
            </motion.div>
          ))}
    </SimpleGrid>
  );

  return (
    <Box py={10} px={6}>
      {/* HEADER */}
      <HStack justify="space-between" mb={4} flexWrap="wrap">
        <Heading
          size="lg"
          color={colorMode === "dark" ? "teal.300" : "teal.600"}
        >
          My Projects
        </Heading>

        <HStack>
          <Input
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            borderRadius="md"
            borderColor="gray.400"
            focusBorderColor="teal.400"
          />
          <IconButton icon={<FaSearch />} aria-label="Search" colorScheme="teal" />
          <IconButton
            icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
            aria-label="Toggle Dark Mode"
            onClick={toggleColorMode}
            colorScheme="teal"
          />
        </HStack>
      </HStack>

      <Divider mb={4} />

      {/* TABS */}
      <Tabs variant="enclosed" colorScheme="teal">
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
