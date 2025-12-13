import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  Badge,
  Button,
  HStack,
  VStack,
  Divider,
  Spinner,
  useColorMode,
  Stack,
  Alert,
  AlertIcon,
  Code,
  Icon,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiChakraui,
  SiFirebase,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";

const MotionBox = motion(Box);

const techIcons = {
  react: SiReact,
  javascript: SiJavascript,
  typescript: SiTypescript,
  node: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  chakra: SiChakraui,
  firebase: SiFirebase,
  redux: SiRedux,
  tailwind: SiTailwindcss,
};

const ProjectDetailPage = () => {
  const { id } = useParams();
  const { colorMode } = useColorMode();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [apiInfo, setApiInfo] = useState(null);

  const endpoint = `https://my-portfolio-lw4x.vercel.app/api/get/${id}`;

  useEffect(() => {
    const fetchProject = async () => {
      const start = performance.now();
      try {
        const res = await axios.get(endpoint);
        const end = performance.now();
        setProject(res.data.data);
        setApiInfo({
          url: endpoint,
          responseTime: (end - start).toFixed(1),
          size: JSON.stringify(res.data).length,
        });
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };
    fetchProject();
  }, [endpoint]);

  if (loading)
    return (
      <Box textAlign="center" mt={24}>
        <Spinner size="xl" color="teal.400" />
        <Text mt={4} color="gray.500">
          Loading case study...
        </Text>
      </Box>
    );

  if (!project)
    return (
      <Alert status="error" maxW="lg" mx="auto" mt={20}>
        <AlertIcon /> Project not found
      </Alert>
    );

  return (
    <Box maxW="7xl" mx="auto" px={{ base: 4, md: 10 }} py={12}>
      {/* HERO */}
      <MotionBox
        mb={16}
        p={{ base: 6, md: 10 }}
        borderRadius="3xl"
        bg={colorMode === "dark" ? "gray.900" : "white"}
        boxShadow="0 30px 80px rgba(0,0,0,0.25)"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Heading
          fontSize={{ base: "3xl", md: "4xl" }}
          bgGradient="linear(to-r, teal.300, cyan.400)"
          bgClip="text"
          mb={3}
        >
          {project.title}
        </Heading>
        <Text fontSize="lg" color="gray.500" maxW="3xl">
          {project.description}
        </Text>
      </MotionBox>

      {/* API METRICS */}
      {apiInfo && (
        <HStack spacing={6} mb={14} wrap="wrap">
          <Badge px={5} py={2} borderRadius="full" colorScheme="teal">
            API: {apiInfo.responseTime} ms
          </Badge>
          <Badge px={5} py={2} borderRadius="full" colorScheme="purple">
            Payload: {apiInfo.size} bytes
          </Badge>
          <Code px={4} py={2} borderRadius="lg" fontSize="sm">
            {apiInfo.url}
          </Code>
        </HStack>
      )}

      {/* CONTENT */}
      <Stack direction={{ base: "column", md: "row" }} spacing={14}>
        {/* MEDIA */}
        <MotionBox
          flex="1"
          borderRadius="3xl"
          overflow="hidden"
          boxShadow="0 25px 60px rgba(0,0,0,0.35)"
          whileHover={{ scale: 1.02 }}
        >
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              w="100%"
              h={{ base: "260px", md: "520px" }}
              objectFit="cover"
            />
          )}
        </MotionBox>

        {/* DETAILS */}
        <VStack flex="1" align="start" spacing={8}>
          <Box>
            <Heading size="md" mb={2}>
              Problem Statement
            </Heading>
            <Text color="gray.500">
              {project.problem || project.description}
            </Text>
          </Box>

          <Box>
            <Heading size="md" mb={2}>
              Solution & Approach
            </Heading>
            <Text color="gray.500">
              {project.solution || "Designed a scalable, production-ready solution with modern best practices."}
            </Text>
          </Box>

          <Box>
            <Heading size="md" mb={3}>
              Tech Stack
            </Heading>
            <HStack wrap="wrap" spacing={3}>
              {project.techStack?.map((tech, i) => {
                const IconComp = techIcons[tech.toLowerCase()];
                return (
                  <Badge
                    key={i}
                    px={4}
                    py={2}
                    borderRadius="lg"
                    colorScheme="teal"
                    display="flex"
                    alignItems="center"
                    gap={2}
                  >
                    {IconComp && <Icon as={IconComp} />}
                    {tech}
                  </Badge>
                );
              })}
            </HStack>
          </Box>

          <Divider />

          <HStack spacing={5}>
            <Button
              leftIcon={<FaGithub />}
              as="a"
              href={project.github}
              target="_blank"
              size="lg"
              variant="outline"
            >
              Source Code
            </Button>
            <Button
              leftIcon={<FaExternalLinkAlt />}
              as="a"
              href={project.link}
              target="_blank"
              size="lg"
              colorScheme="teal"
            >
              Live Demo
            </Button>
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default ProjectDetailPage;