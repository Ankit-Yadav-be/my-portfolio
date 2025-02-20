import React, { useEffect, useState } from 'react';
import { Box, Text, Link, Image, Tag, TagLabel, IconButton, Flex, Fade, useBreakpointValue } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { FaGithub } from 'react-icons/fa';
import axios from 'axios';

const RightComponent = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/get');
        setProjects(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const gridTemplateColumns = useBreakpointValue({
    base: '1fr', // Single column on small screens
    md: '1fr 1fr', // Two columns on medium screens
    lg: '1fr 1fr 1fr', // Three columns on large screens
  });

  const textSize = useBreakpointValue({
    base: 'xl', // Smaller text on small screens
    md: '2xl', // Larger text on medium screens
    lg: '3xl', // Even larger text on large screens
  });

  if (loading) {
    return (
      <Box textAlign="center" mt={5} color="white">
        <Text>Loading projects...</Text>
      </Box>
    );
  }

  return (
    <Box p={6} bg="gray.800" borderRadius="lg" boxShadow="xl" h="100vh">
      <Text fontSize={textSize} color="white" fontWeight="bold" mb={6}>
        My Projects
      </Text>
      <Fade in={true}>
        <Flex direction="column" gap={8} align="center">
          <Box
            display="grid"
            gridTemplateColumns={gridTemplateColumns}
            gap={8}
            w="full"
          >
            {projects.map((project) => (
              <Box
                key={project._id}
                p={6}
                bg="gray.900"
                borderRadius="xl"
                boxShadow="lg"
                _hover={{ transform: 'translateY(-10px)', boxShadow: '2xl' }}
                transition="all 0.3s ease-in-out"
                cursor="pointer"
              >
                <Image
                  borderRadius="xl"
                  src={`http://localhost:8000/${project.image}`}
                  alt={project.title}
                  mb={4}
                  transition="transform 0.3s ease-in-out"
                  _hover={{ transform: 'scale(1.05)' }}
                />
                <Text fontSize="2xl" fontWeight="semibold" color="white" mb={2}>
                  {project.title}
                </Text>
                <Text color="gray.400" mb={4}>
                  {project.description.length > 100 ? project.description.substring(0, 100) + '...' : project.description}
                </Text>

                <Flex wrap="wrap" mb={4}>
                  {project.techStack.map((tech, index) => (
                    <Tag key={index} size="md" colorScheme="teal" mr={2} mb={2}>
                      <TagLabel>{tech}</TagLabel>
                    </Tag>
                  ))}
                </Flex>

                <Flex justify="space-between">
                  <Link href={project.link} isExternal>
                    <IconButton
                      icon={<ExternalLinkIcon />}
                      aria-label="View Project"
                      colorScheme="teal"
                      variant="solid"
                      mb={4}
                    />
                  </Link>
                  <Link href={project.github} isExternal>
                    <IconButton
                      icon={<FaGithub />}
                      aria-label="GitHub"
                      colorScheme="gray"
                      variant="outline"
                    />
                  </Link>
                </Flex>
              </Box>
            ))}
          </Box>
        </Flex>
      </Fade>
    </Box>
  );
};

export default RightComponent;
