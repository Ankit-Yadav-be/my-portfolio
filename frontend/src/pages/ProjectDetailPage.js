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
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaGithub, FaLink } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
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
      </Box>
    );

  if (!project)
    return (
      <Box textAlign="center" mt={20} fontSize="xl" color="red.500">
        Project Not Found
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
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {project.video ? (
            <Box w="100%" h={{ base: "250px", md: "450px" }}>
              <iframe
                src={getEmbedUrl(project.video)}
                title="Project Video"
                width="100%"
                height="100%"
                allow="autoplay"
                allowFullScreen
                style={{ borderRadius: "12px" }}
              ></iframe>
            </Box>
          ) : (
            <Image
              src={project.image}
              alt={project.title}
              w="100%"
              h={{ base: "250px", md: "450px" }}
              objectFit="cover"
              borderRadius="xl"
              boxShadow="lg"
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
        >
          <Text
            fontSize={{ base: "md", md: "lg" }}
            lineHeight="tall"
            color={colorMode === "dark" ? "gray.300" : "gray.700"}
          >
            {project.description}
          </Text>

          {/* Tech Stack */}
          <HStack wrap="wrap" spacing={2}>
            {project.techStack?.map((tech, index) => (
              <Badge
                key={index}
                colorScheme="teal"
                px={3}
                py={1}
                fontSize="0.8rem"
                borderRadius="full"
              >
                {tech}
              </Badge>
            ))}
          </HStack>

          {/* Buttons */}
          <HStack spacing={4} mt={4}>
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
