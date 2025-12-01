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
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaGithub, FaLink } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [videoLoading, setVideoLoading] = useState(true);
  const { colorMode } = useColorMode();

  useEffect(() => {
    axios
      .get(`https://my-portfolio-lw4x.vercel.app/api/get/${id}`)
      .then((res) => {
        setProject(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
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

  // Video Embed
  const getEmbedUrl = (url) => {
    if (!url) return null;
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      return url.replace("watch?v=", "embed/");
    }
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
      {/* Project Title */}
      <Heading
        mb={4}
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight="extrabold"
        letterSpacing="tight"
        color={colorMode === "dark" ? "teal.300" : "teal.600"}
      >
        {project.title}
      </Heading>

      <Divider mb={8} borderColor={colorMode === "dark" ? "gray.600" : "gray.300"} />

      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={10}
        align="start"
      >
        {/* LEFT: Video or Image */}
        <Box
          flex="1"
          minW="300px"
          borderRadius="xl"
          overflow="hidden"
          boxShadow="2xl"
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {project.video ? (
            <Box w="100%" h={{ base: "250px", md: "480px" }} position="relative">
              {videoLoading && (
                <Box
                  position="absolute"
                  top="0"
                  left="0"
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
              boxShadow="lg"
              as={motion.img}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
          )}
        </Box>

        {/* RIGHT: Details */}
        <VStack
          flex="1"
          align="start"
          spacing={6}
          minW="300px"
          textAlign="left"
          as={motion.div}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Description */}
          <Heading fontSize="xl" mb={2} color={colorMode === "dark" ? "gray.300" : "gray.600"}>
            Project Overview
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            lineHeight="tall"
            color={colorMode === "dark" ? "gray.300" : "gray.700"}
          >
            {project.description}
          </Text>

          {/* Tech Stack */}
          <Heading fontSize="lg" mt={4} color={colorMode === "dark" ? "gray.300" : "gray.600"}>
            Technologies Used
          </Heading>
          <HStack wrap="wrap" spacing={2}>
            {project.techStack?.map((tech, index) => (
              <Badge
                key={index}
                colorScheme="teal"
                px={3}
                py={1}
                fontSize="0.85rem"
                borderRadius="full"
                as={motion.div}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {tech}
              </Badge>
            ))}
          </HStack>

          {/* Action Buttons */}
          <Heading fontSize="lg" mt={4} color={colorMode === "dark" ? "gray.300" : "gray.600"}>
            Explore Project
          </Heading>
          <HStack spacing={4} mt={2}>
            <Button
              as="a"
              href={project.github}
              target="_blank"
              leftIcon={<FaGithub />}
              colorScheme="gray"
              size="md"
              _hover={{ transform: "scale(1.05)" }}
              transition="0.2s"
            >
              GitHub
            </Button>
            <Button
              as="a"
              href={project.link}
              target="_blank"
              leftIcon={<FaLink />}
              colorScheme="green"
              size="md"
              _hover={{ transform: "scale(1.05)" }}
              transition="0.2s"
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
