import { useState } from "react";
import {
  Box,
  Text,
  Icon,
  VStack,
  Grid,
  useColorMode,
  Collapse,
  Divider,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDocker,
  FaAws,
  FaGoogle,
  FaRobot,
  FaUserFriends,
  FaPython,
  FaCloud,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb, SiFirebase, SiPrisma, SiPostgresql, SiKubernetes, SiGmail } from "react-icons/si";

const MotionBox = motion(Box);

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: FaReact, color: "blue.400" },
      { name: "HTML5", icon: FaHtml5, color: "orange.400" },
      { name: "CSS3", icon: FaCss3Alt, color: "blue.500" },
      { name: "JavaScript", icon: FaJs, color: "yellow.400" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "green.500" },
      { name: "Express.js", icon: FaNodeJs, color: "teal.400" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "green.400" },
      { name: "Firebase", icon: SiFirebase, color: "orange.300" },
      { name: "Prisma ORM", icon: SiPrisma, color: "purple.400" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "blue.400" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Docker", icon: FaDocker, color: "blue.400" },
      { name: "Kubernetes", icon: SiKubernetes, color: "teal.300" },
      { name: "AWS EC2", icon: FaAws, color: "orange.400" },
      { name: "AWS S3", icon: FaCloud, color: "orange.300" },
      { name: "Exploring GCP", icon: FaGoogle, color: "red.400" },
    ],
  },
  {
    title: "Generative AI",
    skills: [
      { name: "LangChain", icon: FaPython, color: "blue.300" },
      { name: "LangGraph", icon: FaRobot, color: "teal.300" },
      { name: "Creq AI", icon: FaRobot, color: "green.300" },
      { name: "AgentKit", icon: FaRobot, color: "purple.300" },
    ],
  },
  {
    title: "Communication & Soft Skills",
    skills: [
      { name: "Team Collaboration", icon: FaUserFriends, color: "teal.500" },
      { name: "Effective Communication", icon: SiGmail, color: "red.400" },
      { name: "Open Source Contributor", icon: FaGithub, color: "gray.600" },
    ],
  },
];

const SkillsSection = () => {
  const { colorMode } = useColorMode();
  const [visibleSections, setVisibleSections] = useState({});
  const isMobile = useBreakpointValue({ base: true, md: false });

  const toggleSection = (title) => {
    setVisibleSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <VStack spacing={8} p={6} w="full" maxW="1000px" mx="auto">
      <Text fontSize="3xl" fontWeight="bold" textAlign="center" color="teal.400">
        My Tech Stack & Skills
      </Text>

      {categories.map((category, idx) => (
        <MotionBox
          key={idx}
          w="full"
          p={5}
          borderRadius="2xl"
          bg={colorMode === "dark" ? "gray.800" : "gray.100"}
          boxShadow="lg"
          whileHover={{ scale: 1.01 }}
          transition="0.3s ease"
        >
          <Text
            fontSize="xl"
            fontWeight="semibold"
            mb={3}
            cursor="pointer"
            color="teal.500"
            onClick={() => toggleSection(category.title)}
          >
            {category.title}
          </Text>

          <Collapse in={visibleSections[category.title] || !isMobile} animateOpacity>
            <Grid
              templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
              gap={4}
            >
              {category.skills.map((skill, index) => (
                <MotionBox
                  key={index}
                  p={3}
                  borderRadius="lg"
                  shadow="md"
                  bg={colorMode === "dark" ? "gray.700" : "white"}
                  textAlign="center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon as={skill.icon} color={skill.color} boxSize={8} />
                  <Text fontSize="md" mt={2} fontWeight="medium">
                    {skill.name}
                  </Text>
                </MotionBox>
              ))}
            </Grid>
          </Collapse>

          {idx !== categories.length - 1 && <Divider my={5} />}
        </MotionBox>
      ))}
    </VStack>
  );
};

export default SkillsSection;
