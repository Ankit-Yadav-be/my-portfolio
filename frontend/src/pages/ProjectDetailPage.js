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
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaGithub, FaLink } from "react-icons/fa";
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
  SiGit,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { motion } from "framer-motion";

const techIcons = {
  react: SiReact,
  "react.js": SiReact,
  javascript: SiJavascript,
  js: SiJavascript,
  typescript: SiTypescript,
  ts: SiTypescript,
  node: SiNodedotjs,
  "node.js": SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  chakra: SiChakraui,
  "chakra ui": SiChakraui,
  firebase: SiFirebase,
  redux: SiRedux,
  tailwind: SiTailwindcss,
  git: SiGit,
  html: SiHtml5,
  css: SiCss3,
};

const ProjectDetailPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [videoLoading, setVideoLoading] = useState(true);
  const [apiInfo, setApiInfo] = useState(null);
  const { colorMode } = useColorMode();

  const endpoint = `https://my-portfolio-lw4x.vercel.app/api/get/${id}`;

  useEffect(() => {
    const fetchProject = async () => {
      const start = performance.now();

      try {
        const res = await axios.get(endpoint);
        const end = performance.now();

        setProject(res.data);
        setApiInfo({
          url: endpoint,
          responseTime: (end - start).toFixed(2),
          size: JSON.stringify(res.data).length,
        });
      } catch (err) {
        console.error("Error:", err);
      }

      setLoading(false);
    };

    fetchProject();
  }, [id]);

  if (loading)
    return (
      <Box textAlign="center" mt={20}>
        <Spinner size="xl" thickness="4px" color="teal.400" />
        <Text mt={4} fontSize="lg" color="gray.500">
          Loading project details...
        </Text>
      </Box>
    );

  if (!project)
    return (
      <Box textAlign="center" mt={20}>
        <Alert status="error" maxW="400px" mx="auto">
          <AlertIcon />
          Project Not Found
        </Alert>
      </Box>
    );

  const getEmbedUrl = (url) => {
    if (!url) return null;
    if (url.includes("youtube.com") || url.includes("youtu.be"))
      return url.replace("watch?v=", "embed/");
    if (url.includes("drive.google.com")) {
      const fileId = url.match(/[-\w]{25,}/);
      return fileId
        ? `https://drive.google.com/file/d/${fileId}/preview`
        : null;
    }
    return null;
  };

  return (
    <Box p={{ base: 4, md: 12 }} maxW="7xl" mx="auto">
      {/* ----------- API INFO SECTION ----------- */}
      {apiInfo && (
        <Box
          p={5}
          mb={10}
          borderRadius="xl"
          bg={colorMode === "dark" ? "gray.700" : "gray.100"}
          boxShadow="lg"
          as={motion.div}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Heading fontSize="lg" mb={2} color="teal.400">
            API Request Details
          </Heading>

          <VStack align="start" spacing={2}>
            <Text fontWeight="bold">Endpoint:</Text>
            <Code p={2} borderRadius="md" w="100%" colorScheme="teal">
              {apiInfo.url}
            </Code>

            <HStack spacing={6} mt={2}>
              <Badge colorScheme="green" px={3} py={1} borderRadius="full">
                Response Time: {apiInfo.responseTime} ms
              </Badge>
              <Badge colorScheme="purple" px={3} py={1} borderRadius="full">
                Payload Size: {apiInfo.size} bytes
              </Badge>
            </HStack>
          </VStack>
        </Box>
      )}

      {/* Project Title */}
      <Heading
        mb={4}
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight="extrabold"
        color={colorMode === "dark" ? "teal.300" : "teal.600"}
      >
        {project.title}
      </Heading>

      <Divider mb={8} />

      <Stack direction={{ base: "column", md: "row" }} spacing={10}>
        {/* LEFT */}
        <Box
          flex="1"
          minW="300px"
          borderRadius="xl"
          overflow="hidden"
          boxShadow="2xl"
          as={motion.div}
        >
          {project.video ? (
            <Box w="100%" h={{ base: "250px", md: "480px" }} position="relative">
              {videoLoading && (
                <Box
                  position="absolute"
                  w="100%"
                  h="100%"
                  bg="gray.100"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="12px"
                  zIndex="10"
                >
                  <Spinner size="xl" color="teal.400" />
                  <Text ml={3} fontWeight="bold" color="gray.600">
                    Loading Video...
                  </Text>
                </Box>
              )}
              <iframe
                src={getEmbedUrl(project.video)}
                title="Project Video"
                width="100%"
                height="100%"
                allow="autoplay"
                allowFullScreen
                style={{ borderRadius: "12px" }}
                onLoad={() => setVideoLoading(false)}
              ></iframe>
            </Box>
          ) : (
            <Image
              src={project.image}
              alt={project.title}
              w="100%"
              h={{ base: "250px", md: "480px" }}
              objectFit="cover"
              borderRadius="xl"
            />
          )}
        </Box>

        {/* RIGHT */}
        <VStack flex="1" align="start" spacing={6} minW="300px">
          <Heading fontSize="xl" color="gray.600">
            Project Overview
          </Heading>
          <Text fontSize="lg">{project.description}</Text>

          <Heading fontSize="lg" mt={4} color="gray.600">
            Technologies Used
          </Heading>

          {/* 🔥 TECH STACK WITH LOGOS */}
          <HStack wrap="wrap" spacing={3}>
            {project.techStack?.map((tech, index) => {
              const Icon = techIcons[tech.toLowerCase()];
              return (
                <Badge
                  key={index}
                  colorScheme="teal"
                  px={3}
                  py={2}
                  borderRadius="md"
                  display="flex"
                  alignItems="center"
                  gap={2}
                >
                  {Icon && <Icon size={18} />} {tech}
                </Badge>
              );
            })}
          </HStack>

          <Heading fontSize="lg" mt={4} color="gray.600">
            Explore Project
          </Heading>

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
        </VStack>
      </Stack>
    </Box>
  );
};

export default ProjectDetailPage;
