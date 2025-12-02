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
import { FaGithub, FaLink } from "react-icons/fa";
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
  SiGit,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const techIcons = {
  react: SiReact,
  "react.js": SiReact,
  javascript: SiJavascript,
  js: SiJavascript,
  typescript: SiTypescript,
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

        setProject(res.data.data);
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
    <Box
      p={{ base: 4, md: 12 }}
      maxW="7xl"
      mx="auto"
      bg={colorMode === "dark" ? "gray.900" : "gray.50"}
    >

      {/* API INFO BOX - Glassmorphic */}
      {apiInfo && (
        <MotionBox
          p={5}
          mb={10}
          borderRadius="2xl"
          bg={colorMode === "dark" ? "rgba(255,255,255,0.05)" : "white"}
          backdropFilter="blur(12px)"
          border="1px solid"
          borderColor={colorMode === "dark" ? "whiteAlpha.200" : "gray.200"}
          boxShadow="0 8px 30px rgba(0,0,0,0.12)"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Heading fontSize="lg" mb={2} color="teal.400">
            API Request Details
          </Heading>

          <VStack align="start">
            <Text fontWeight="bold">Endpoint:</Text>
            <Code
              p={3}
              borderRadius="lg"
              w="100%"
              colorScheme="teal"
              fontSize="sm"
            >
              {apiInfo.url}
            </Code>

            <HStack spacing={6} mt={2}>
              <Badge colorScheme="green" px={4} py={2} borderRadius="full">
                Response: {apiInfo.responseTime} ms
              </Badge>
              <Badge colorScheme="purple" px={4} py={2} borderRadius="full">
                Size: {apiInfo.size} bytes
              </Badge>
            </HStack>
          </VStack>
        </MotionBox>
      )}

      {/* TITLE */}
      <Heading
        mb={4}
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight="extrabold"
        color="teal.400"
        letterSpacing="1px"
      >
        {project.title}
      </Heading>

      <Divider mb={10} />

      {/* Main Layout */}
      <Stack direction={{ base: "column", md: "row" }} spacing={12}>
        
        {/* LEFT SIDE - Image / Video */}
        <MotionBox
          flex="1"
          borderRadius="2xl"
          overflow="hidden"
          boxShadow="0 20px 40px rgba(0,0,0,0.2)"
          whileHover={{ scale: 1.01 }}
        >
          {project.video ? (
            <Box position="relative" w="100%" h={{ base: "240px", md: "500px" }}>
              {videoLoading && (
                <Box
                  position="absolute"
                  w="100%"
                  h="100%"
                  zIndex="10"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="blackAlpha.300"
                >
                  <Spinner size="lg" color="teal.300" />
                </Box>
              )}
              <iframe
                src={getEmbedUrl(project.video)}
                width="100%"
                height="100%"
                style={{ borderRadius: "20px" }}
                allowFullScreen
                onLoad={() => setVideoLoading(false)}
              ></iframe>
            </Box>
          ) : (
            <MotionImage
              src={project.image}
              alt="Project"
              w="100%"
              h={{ base: "240px", md: "500px" }}
              objectFit="cover"
              borderRadius="2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />
          )}
        </MotionBox>

        {/* RIGHT SIDE CONTENT */}
        <VStack flex="1" align="start" spacing={6}>
          
          {/* OVERVIEW */}
          <Heading fontSize="2xl" color="teal.300">
            Overview
          </Heading>
          <Text fontSize="lg" color="gray.400">
            {project.description}
          </Text>

          {/* TECH STACK */}
          <Heading fontSize="2xl" mt={2} color="teal.300">
            Tech Stack
          </Heading>

          <HStack wrap="wrap" spacing={3}>
            {project.techStack?.map((tech, idx) => {
              const IconComp = techIcons[tech.toLowerCase()];
              return (
                <Badge
                  key={idx}
                  px={3}
                  py={2}
                  borderRadius="lg"
                  colorScheme="teal"
                  display="flex"
                  alignItems="center"
                  gap={2}
                  boxShadow="0 4px 12px rgba(0,0,0,0.2)"
                >
                  {IconComp && <Icon as={IconComp} />}
                  {tech}
                </Badge>
              );
            })}
          </HStack>

          {/* BUTTONS */}
          <HStack pt={4} spacing={5}>
            <Button
              leftIcon={<FaGithub />}
              as="a"
              href={project.github}
              target="_blank"
              colorScheme="gray"
              size="lg"
              borderRadius="lg"
              boxShadow="0 6px 15px rgba(0,0,0,0.2)"
            >
              GitHub
            </Button>

            <Button
              leftIcon={<FaLink />}
              as="a"
              href={project.link}
              target="_blank"
              size="lg"
              colorScheme="teal"
              borderRadius="lg"
              boxShadow="0 6px 15px rgba(0,0,0,0.3)"
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
