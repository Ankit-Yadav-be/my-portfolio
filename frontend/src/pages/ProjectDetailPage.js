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
  Skeleton,
  SkeletonText,
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

// 🔥 ICON MAP
const techIcons = {
  react: SiReact,
  "react.js": SiReact,
  javascript: SiJavascript,
  js: SiJavascript,
  typescript: SiTypescript,
  ts: SiTypescript,
  node: SiNodedotjs,
  "node.js": SiNodedotjs,
  express: SaExpress,
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

// 🔥 Create Cached Axios Instance (NO INSTALL REQUIRED)
const api = axios.create({
  baseURL: "https://my-portfolio-lw4x.vercel.app",
  timeout: 7000,
  headers: { "Cache-Control": "max-age=600" },
});

const ProjectDetailPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [apiInfo, setApiInfo] = useState(null);
  const [videoLoading, setVideoLoading] = useState(true);
  const { colorMode } = useColorMode();

  const endpoint = `/api/get/${id}`;

  useEffect(() => {
    const fetchProject = async () => {
      const start = performance.now();

      try {
        const res = await api.get(endpoint);

        const end = performance.now();
        const size = JSON.stringify(res.data).length;

        setProject(res.data);
        setApiInfo({
          url: endpoint,
          responseTime: (end - start).toFixed(2),
          size,
        });
      } catch (error) {
        console.log("Fetch error:", error);
        setProject(null);
      }

      setLoading(false);
    };

    fetchProject();
  }, [id]);

  // -------- Loading Skeleton --------
  if (loading) {
    return (
      <Box p={8}>
        <Skeleton height="40px" mb={6} />
        <Skeleton height="300px" mb={6} />
        <SkeletonText mt="4" noOfLines={5} spacing="4" />
      </Box>
    );
  }

  if (!project) {
    return (
      <Box textAlign="center" mt={20}>
        <Alert status="error" maxW="450px" mx="auto" borderRadius="md">
          <AlertIcon />
          Project not found or failed to load.
        </Alert>
      </Box>
    );
  }

  // -------- Fix Video Links --------
  const getEmbedUrl = (url) => {
    if (!url) return null;

    // YouTube
    if (url.includes("watch?v="))
      return url.replace("watch?v=", "embed/");
    if (url.includes("youtu.be"))
      return url.replace("youtu.be/", "youtube.com/embed/");

    // Google Drive
    if (url.includes("drive.google.com")) {
      const idMatch = url.match(/[-\w]{25,}/);
      return idMatch
        ? `https://drive.google.com/file/d/${idMatch}/preview`
        : null;
    }

    return null;
  };

  return (
    <Box p={{ base: 4, md: 12 }} maxW="7xl" mx="auto">
      {/* ---------- API INFO ---------- */}
      {apiInfo && (
        <Box
          p={5}
          mb={10}
          borderRadius="xl"
          bg={colorMode === "dark" ? "gray.700" : "gray.100"}
          boxShadow="lg"
          as={motion.div}
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Heading fontSize="lg" mb={2} color="teal.400">
            API Request Details
          </Heading>

          <VStack align="start">
            <Text fontWeight="bold">Endpoint:</Text>
            <Code p={2} borderRadius="md" w="100%" colorScheme="teal">
              {apiInfo.url}
            </Code>

            <HStack spacing={6} mt={4}>
              <Badge colorScheme="green" px={3} py={1}>
                Response Time: {apiInfo.responseTime} ms
              </Badge>

              <Badge colorScheme="purple" px={3} py={1}>
                Payload Size: {apiInfo.size} bytes
              </Badge>
            </HStack>
          </VStack>
        </Box>
      )}

      {/* ---------- TITLE ---------- */}
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
        {/* ---------- LEFT SECTION ---------- */}
        <Box flex="1" borderRadius="xl" overflow="hidden" boxShadow="2xl">
          {project.video ? (
            <Box h={{ base: "260px", md: "480px" }} position="relative">
              {videoLoading && (
                <Box
                  position="absolute"
                  inset={0}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="gray.200"
                >
                  <Spinner size="xl" color="teal.400" />
                </Box>
              )}

              <iframe
                src={getEmbedUrl(project.video)}
                width="100%"
                height="100%"
                allowFullScreen
                style={{ borderRadius: "12px" }}
                onLoad={() => setVideoLoading(false)}
              />
            </Box>
          ) : (
            <Image
              src={project.image || "/fallback-image.jpg"}
              alt={project.title}
              w="100%"
              h={{ base: "260px", md: "480px" }}
              objectFit="cover"
              borderRadius="xl"
            />
          )}
        </Box>

        {/* ---------- RIGHT SECTION ---------- */}
        <VStack flex="1" align="start" spacing={6}>
          <Heading fontSize="xl">Project Overview</Heading>
          <Text fontSize="lg">{project.description}</Text>

          <Heading fontSize="lg">Tech Stack</Heading>

          <HStack wrap="wrap" spacing={3}>
            {project.techStack?.map((tech, idx) => {
              const Icon = techIcons[tech.toLowerCase()] || null;
              return (
                <Badge
                  key={idx}
                  px={3}
                  py={2}
                  colorScheme="teal"
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

          <Heading fontSize="lg">Explore Project</Heading>

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
