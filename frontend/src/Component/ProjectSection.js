import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Image,
  SimpleGrid,
  IconButton,
  HStack,
  Heading,
  Badge,
  useColorMode,
  Skeleton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Divider,
  Input,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { FaGithub, FaLink, FaSun, FaMoon, FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import axios from "axios";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { colorMode, toggleColorMode } = useColorMode();
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    axios
      .get("https://my-portfolio-lw4x.vercel.app/api/get")
      .then((response) => {
        setProjects(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setLoading(false);
      });
  }, []);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    onOpen();
  };

  const filterProjects = (category) => {
    return projects
      .filter((project) => project.category?.toLowerCase() === category)
      .filter((project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
  };

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
                _hover={{
                  boxShadow:
                    colorMode === "dark"
                      ? "0px 0px 15px rgba(0, 255, 150, 0.7)"
                      : "0px 0px 15px rgba(0, 150, 255, 0.5)",
                  transform: "translateY(-5px)",
                  transition: "0.3s ease-in-out",
                }}
                onClick={() => openProjectModal(project)}
              >
                <Text fontWeight="bold" fontSize="xl" isTruncated noOfLines={1}>
                  {project.title}
                </Text>
                <Divider my={2} borderColor="gray.500" />
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
                    loading="lazy"
                  />
                )}

                <HStack spacing={2} mt={3} wrap="wrap">
                  {(project.technologies || "React, Node.js, MongoDB")
                    .split(", ")
                    .map((tech, index) => (
                      <Badge
                        key={index}
                        colorScheme={colorMode === "dark" ? "cyan" : "blue"}
                      >
                        {tech}
                      </Badge>
                    ))}
                </HStack>
                <Divider my={4} borderColor="gray.500" />
                <HStack spacing={4}>
                  <Button
                    as="a"
                    href={project.github}
                    target="_blank"
                    leftIcon={<FaGithub />}
                    colorScheme="gray"
                  >
                    GitHub
                  </Button>
                  <Button
                    as="a"
                    href={project.link}
                    target="_blank"
                    leftIcon={<FaLink />}
                    colorScheme="green"
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
      <HStack justify="space-between" mb={4} flexWrap="wrap">
        <Heading
          as="h2"
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
            _placeholder={{ color: "gray.500" }}
          />
          <IconButton
            icon={<FaSearch />}
            aria-label="Search"
            colorScheme="teal"
          />
          <IconButton
            icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
            aria-label="Toggle Dark Mode"
            onClick={toggleColorMode}
            colorScheme="teal"
          />
        </HStack>
      </HStack>

      <Divider my={4} borderColor="gray.500" />

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

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedProject?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="md" mb={4}>
              {selectedProject?.description}
            </Text>
            <Divider my={4} borderColor="gray.500" />
            {selectedProject?.image && (
              <Image
                src={selectedProject.image}
                alt={selectedProject?.title}
                borderRadius="md"
                mb={4}
                maxHeight="250px"
                objectFit="cover"
              />
            )}
            <HStack spacing={2} wrap="wrap" mb={4}>
              {selectedProject?.technologies?.split(", ").map((tech, index) => (
                <Badge key={index} colorScheme="purple">
                  {tech}
                </Badge>
              ))}
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ProjectsSection;
