import React from "react";
import {
  Box,
  VStack,
  Image,
  Text,
  HStack,
  IconButton,
  Button,
  Switch,
} from "@chakra-ui/react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaDownload,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ Redirect hook

// Animated Gradient Background
const AnimatedGradient = () => (
  <motion.div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(135deg, rgba(255,0,150,0.3), rgba(0,204,255,0.3))",
      filter: "blur(40px)",
      opacity: 0.5,
      zIndex: -1,
    }}
    animate={{ x: [0, 20, -20, 0], y: [0, 20, -20, 0] }}
    transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
  />
);

const LeftSection = ({ user, isDarkMode, setIsDarkMode }) => {
  const navigate = useNavigate(); // ✅ For redirection

  return (
    <VStack
      w={{ base: "100%", md: "25%" }}
      bg={isDarkMode ? "gray.900" : "gray.100"}
      borderRadius="xl"
      p={6}
      boxShadow="2xl"
      spacing={6}
      align="center"
      position="relative"
      overflow="hidden"
    >
      <AnimatedGradient />

      {/* Profile Image with 3D Depth Effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 1 }}
        style={{
          width: "180px",
          height: "220px",
          borderRadius: "20px",
          overflow: "hidden",
          position: "relative",
          boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.2)",
        }}
      >
        <Image
          src={user.photo || "/Ankit.jpeg"}
          alt="Profile"
          objectFit="cover"
          w="100%"
          h="100%"
          _hover={{
            transform: "scale(1.1)",
            transition: "0.3s",
          }}
        />
      </motion.div>

      {/* Name and Title */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Text
          fontSize="2xl"
          fontWeight="bold"
          textAlign="center"
          bgGradient="linear(to-r, teal.300, cyan.400)"
          bgClip="text"
          _hover={{ textShadow: "0px 0px 20px cyan" }}
          transition="0.3s"
        >
          {user.name || "Ankit Yadav"}
        </Text>
        <Text fontSize="md" color="gray.500" textAlign="center">
          {user.title || "FullStack Developer"}
        </Text>
      </motion.div>

      {/* Social Media Icons */}
      <HStack spacing={4} justify="center">
        {[
          {
            icon: FaLinkedin,
            color: "blue.500",
            link: "https://www.linkedin.com/in/ankit-yadav-1a7023298/",
          },
          {
            icon: FaGithub,
            color: "gray.500",
            link: "https://github.com/Ankit-Yadav-be",
          },
          {
            icon: FaTwitter,
            color: "cyan.500",
            link: "https://twitter.com/your-twitter",
          }, // Update this
        ].map(({ icon, color, link }, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ duration: 0.3 }}
          >
            <IconButton
              as="a"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              icon={React.createElement(icon)}
              aria-label="Social"
              colorScheme="gray"
              boxShadow="md"
              _hover={{ color: "white", backgroundColor: color }}
            />
          </motion.div>
        ))}
      </HStack>

      {/* Contact Info */}
      <VStack align="start" w="full" spacing={2}>
        {[
          { icon: FaPhone, text: user.phone || "+917830237144" },
          { icon: FaEnvelope, text: user.email || "ay870421@gmail.com" },
          {
            icon: FaMapMarkerAlt,
            text: user.location || "Agra, Uttar Pradesh",
          },
        ].map(({ icon, text }, index) => (
          <HStack key={index} spacing={3}>
            <Box as={icon} fontSize="1.2rem" color="teal.300" />
            <Text
              _hover={{
                color: "teal.300",
                transform: "scale(1.05)",
                transition: "0.3s",
              }}
            >
              {text}
            </Text>
          </HStack>
        ))}
      </VStack>

      {/* Download Resume */}
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
        <Button
          leftIcon={<FaDownload />}
          colorScheme="red"
          w="full"
          variant="solid"
          _hover={{
            bgGradient: "linear(to-r, red.400, orange.400)",
            transition: "0.3s",
          }}
          onClick={() =>
            (window.location.href = user.resumeLink || "/RESUMEE.pdf")
          }
        >
          Download Resume
        </Button>
      </motion.div>

      {/* ✅ View All Skills Redirect Button */}
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
        <Button
          w="full"
          mt={3}
          colorScheme="teal"
          variant="outline"
          _hover={{
            bgGradient: "linear(to-r, teal.300, cyan.400)",
            color: "white",
            border: "none",
          }}
          onClick={() => navigate("/skill")}
        >
          View All Skills
        </Button>
      </motion.div>

      {/* Dark Mode Toggle */}
      <HStack justify="center" mt={5}>
        <Text fontWeight="bold">Dark Mode</Text>
        <motion.div
          whileTap={{ scale: 1.2 }}
          whileHover={{ rotate: 20 }}
          transition={{ duration: 0.2 }}
        >
          <Switch
            isChecked={isDarkMode}
            onChange={() => setIsDarkMode(!isDarkMode)}
            size="lg"
            colorScheme="teal"
          />
        </motion.div>
      </HStack>
    </VStack>
  );
};

export default LeftSection;
