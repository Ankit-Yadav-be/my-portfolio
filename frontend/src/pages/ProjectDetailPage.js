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
        console.error(err);
      }
      setLoading(false);
    };

    fetchProject();
  }, [id]);

  if (loading)
    return (
      <Box textAlign="center" mt={20}>
        <Spinner size="xl" thickness="4px" />
        <Text mt={4} color="gray.500">
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
    if (url.includes("youtu.be")) return `https://www.youtube.com/embed/${url.split("youtu.be/")[1]}`;
    if (url.includes("youtube.com/watch?v=")) return `https://www.youtube.com/embed/${url.split("v=")[1]}`;
    if (url.includes("drive.google.com")) {
      const fileId = url.match(/[-\w]{25,}/);
      return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : null;
    }
    return null;
  };

  return (
    <Box maxW="7xl" mx="auto" px={{ base: 4, md: 10 }} py={10}>
      {/* API INFO */}
      {apiInfo && (
        <MotionBox
          p={5}
          mb={10}
          borderRadius="xl"
          bg={colorMode === "dark" ? "gray.800" : "white"}
          border="1px solid"
          borderColor={colorMode === "dark" ? "gray.700" : "gray.200"}
          boxShadow="md"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Heading fontSize="md" mb={3} color="gray.500">
            API Request Information
          </Heading>
          <Code w="100%" p={3} borderRadius="md" fontSize="sm">
            {apiInfo.url}
          </Code>
          <HStack mt={3} spacing={4}>
            <Badge colorScheme="green">Response {apiInfo.responseTime} ms</Badge>
            <Badge colorScheme="purple">Size {apiInfo.size} bytes</Badge>
          </HStack>
        </MotionBox>
      )}

      {/* TITLE */}
      <Heading fontSize={{ base: "3xl", md: "4xl" }} mb={3}>
        {project.title}
      </Heading>
      <Divider mb={10} />

      <Stack direction={{ base: "column", md: "row" }} spacing={12}>
        {/* MEDIA */}
        <Box flex="1" borderRadius="xl" overflow="hidden" boxShadow="lg">
          {project.video ? (
            <Box position="relative" h={{ base: "240px", md: "460px" }}>
              {videoLoading && (
                <Box
                  position="absolute"
                  inset={0}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="blackAlpha.200"
                  zIndex={1}
                >
                  <Spinner />
                </Box>
              )}
              <iframe
                src={getEmbedUrl(project.video)}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                onLoad={() => setVideoLoading(false)}
              />
            </Box>
          ) : (
            <MotionImage
              src={project.image}
              alt={project.title}
              w="100%"
              h={{ base: "240px", md: "460px" }}
              objectFit="cover"
            />
          )}
        </Box>

        {/* CONTENT */}
        <VStack flex="1" align="start" spacing={6}>
          <Box>
            <Heading fontSize="xl" mb={2}>
              Overview
            </Heading>
            <Text color="gray.600" fontSize="md">
              {project.description}
            </Text>
          </Box>

          <Box>
            <Heading fontSize="xl" mb={3}>
              Technology Stack
            </Heading>
            <HStack wrap="wrap" spacing={3}>
              {project.techStack?.map((tech, idx) => {
                const IconComp = techIcons[tech.toLowerCase()];
                return (
                  <Badge
                    key={idx}
                    px={3}
                    py={2}
                    borderRadius="md"
                    colorScheme="gray"
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

          <HStack spacing={4} pt={4}>
            <Button
              as="a"
              href={project.github}
              target="_blank"
              leftIcon={<FaGithub />}
              variant="outline"
            >
              GitHub
            </Button>
            <Button
              as="a"
              href={project.link}
              target="_blank"
              leftIcon={<FaLink />}
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