import { useState } from "react";
import { Box, Text, Icon, VStack, Grid, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaCode } from "react-icons/fa";

const skills = [
  { name: "React.js", level: 90, icon: FaReact, color: "blue.400" },
  { name: "Node.js", level: 85, icon: FaNodeJs, color: "green.500" },
  { name: "HTML5", level: 95, icon: FaHtml5, color: "orange.400" },
  { name: "CSS3", level: 90, icon: FaCss3Alt, color: "blue.500" },
  { name: "JavaScript", level: 85, icon: FaJs, color: "yellow.400" },
  { name: "TypeScript", level: 80, icon: FaJs, color: "blue.300" },
  { name: "Redux", level: 75, icon: FaReact, color: "purple.400" },
  { name: "GraphQL", level: 78, icon: FaReact, color: "pink.400" },
];

const MotionBox = motion(Box);

const SkillsSection = () => {
  const { colorMode } = useColorMode();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <VStack spacing={6} w="full" p={6} maxW="500px" mx="auto">
      <MotionBox
        as={Icon}
        whileHover={{ scale: 1.2, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        cursor="pointer"
        as={FaCode}
        boxSize={10}
        color="teal.400"
        onClick={() => setIsVisible(!isVisible)}
      />
      {isVisible && (
        <MotionBox
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          w={{ base: "300px", md: "350px", lg: "400px" }}
          h={{ base: "300px", md: "350px", lg: "400px" }}
          borderRadius="lg"
          shadow="lg"
          bg={colorMode === "dark" ? "gray.700" : "gray.100"}
          overflow="hidden"
          p={4}
          position="relative"
        >
          <Text fontSize="xl" fontWeight="bold" textAlign="center" mb={4}>
            My Skills
          </Text>

          <Grid
            templateColumns="repeat(2, 1fr)"
            gap={4}
            overflowY="auto"
            maxH="80%"
            css={{
              "&::-webkit-scrollbar": { width: "6px" },
              "&::-webkit-scrollbar-thumb": { background: "teal", borderRadius: "10px" },
            }}
          >
            {skills.map((skill, index) => (
              <MotionBox
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                p={3}
                borderRadius="md"
                shadow="md"
                bg={colorMode === "dark" ? "gray.600" : "gray.200"}
                textAlign="center"
              >
                <Icon as={skill.icon} color={skill.color} boxSize={8} />
                <Text fontSize="md" fontWeight="semibold" mt={2}>{skill.name}</Text>
              </MotionBox>
            ))}
          </Grid>
        </MotionBox>
      )}
    </VStack>
  );
};

export default SkillsSection;
