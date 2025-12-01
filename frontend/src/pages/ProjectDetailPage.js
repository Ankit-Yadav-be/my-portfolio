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
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaGithub, FaLink } from "react-icons/fa";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

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
        <Spinner size="xl" />
      </Box>
    );

  if (!project)
    return (
      <Box textAlign="center" mt={20} fontSize="xl">
        Project Not Found
      </Box>
    );

  // Google Drive Embed Fix
  const getEmbedUrl = (url) => {
    if (!url) return null;

    // YouTube link
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      return url.replace("watch?v=", "embed/");
    }

    // Google Drive share link
    if (url.includes("drive.google.com")) {
      const fileId = url.match(/[-\w]{25,}/);
      return fileId
        ? `https://drive.google.com/file/d/${fileId}/preview`
        : null;
    }

    return null;
  };

  return (
    <Box p={8}>
      <Heading mb={4}>{project.title}</Heading>

      <Divider mb={6} />

      <HStack align="start" spacing={10} flexWrap="wrap">
        {/* LEFT – VIDEO */}
        <Box flex="1" minW="300px">
          {project.video ? (
            <Box w="100%" h="300px" borderRadius="lg" overflow="hidden" boxShadow="lg">
              <iframe
                src={getEmbedUrl(project.video)}
                title="Project Video"
                width="100%"
                height="100%"
                allow="autoplay"
                allowFullScreen
              ></iframe>
            </Box>
          ) : (
            <Image
              src={project.image}
              alt={project.title}
              borderRadius="lg"
              boxShadow="lg"
            />
          )}
        </Box>

        {/* RIGHT – DETAILS */}
        <VStack align="start" spacing={4} flex="1" minW="300px">
          <Text fontSize="lg">{project.description}</Text>

          <HStack wrap="wrap">
            {project.techStack?.map((tech, index) => (
              <Badge key={index} colorScheme="teal" px={2} py={1}>
                {tech}
              </Badge>
            ))}
          </HStack>

          <HStack spacing={4} mt={4}>
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
      </HStack>
    </Box>
  );
};

export default ProjectDetailPage;
