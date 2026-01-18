import { Box, Button, Text, HStack, Link, useColorMode, Icon, Flex } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope, FaCalendar, FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";


const CTASection = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
    <Box
      bg={colorMode === "dark" ? "gray.800" : "gray.100"}
      color={colorMode === "dark" ? "white" : "gray.900"}
      py={12}
      textAlign="center"
      px={4}
    >
      
      <Flex justify="center" mb={4}>
        <Button onClick={toggleColorMode} colorScheme="yellow" size="sm" borderRadius="full" shadow="md">
          <Icon as={colorMode === "dark" ? FaSun : FaMoon} />
        </Button>
      </Flex>
      
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
          Let’s Connect and Build Something Great! 🚀
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} mt={2}>
          I'm open for collaboration, freelance projects, and full-time roles.
        </Text>
      </motion.div>
      
      <HStack mt={6} spacing={4} justify="center" wrap="wrap">
        <motion.div whileHover={{ scale: 1.1 }}>
          <Button leftIcon={<FaEnvelope />} colorScheme="teal" borderRadius="full" shadow="md">
            <Link href="mailto:your-email@example.com" isExternal>
              Hire Me
            </Link>
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Button leftIcon={<FaLinkedin />} colorScheme="blue" borderRadius="full" shadow="md">
            <Link href="https://linkedin.com/in/yourprofile" isExternal>
              LinkedIn
            </Link>
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Button leftIcon={<FaGithub />} colorScheme="gray" borderRadius="full" shadow="md">
            <Link href="https://github.com/yourprofile" isExternal>
              GitHub
            </Link>
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Button leftIcon={<FaCalendar />} colorScheme="red" borderRadius="full" shadow="md">
            <Link href="https://calendly.com/yourprofile" isExternal>
              Schedule a Call
            </Link>
          </Button>
        </motion.div>
      </HStack>
    </Box>
  );
};

export default CTASection;