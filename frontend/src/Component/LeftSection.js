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
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

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

      {/* Profile Image */}
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
        />
      </motion.div>

      {/* Name + Title */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
        <Text
          fontSize="2xl"
          fontWeight="bold"
          textAlign="center"
          bgGradient="linear(to-r, teal.300, cyan.400)"
          bgClip="text"
        >
          {user.name || "Ankit Yadav"}
        </Text>
        <Text fontSize="md" color="gray.500" textAlign="center">
          {user.title || "FullStack Developer"}
        </Text>
      </motion.div>

      {/* Social Links */}
      <HStack spacing={4}>
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
            link: "https://twitter.com/",
          },
        ].map(({ icon, color, link }, index) => (
          <motion.div key={index} whileHover={{ scale: 1.2, rotate: 10 }}>
            <IconButton
              as="a"
              href={link}
              target="_blank"
              icon={React.createElement(icon)}
              colorScheme="gray"
              _hover={{ bg: color, color: "white" }}
            />
          </motion.div>
        ))}
      </HStack>

      {/* Contact Info – PERFECT ALIGNMENT */}
      <VStack align="start" w="full" spacing={3}>
        {[
          { icon: FaPhone, text: user.phone || "+917830237144" },
          { icon: FaEnvelope, text: user.email || "ay870421@gmail.com" },
          { icon: FaMapMarkerAlt, text: user.location || "Agra, Uttar Pradesh" },
        ].map(({ icon, text }, idx) => (
          <HStack
            key={idx}
            spacing={3}
            align="center"
            w="100%"
            justify="flex-start"
            height="28px"
          >
            <Box as={icon} fontSize="1.2rem" color="teal.300" minW="24px" />
            <Text _hover={{ color: "teal.300" }}>{text}</Text>
          </HStack>
        ))}
      </VStack>

      {/* Resume Button */}
      <motion.div whileHover={{ scale: 1.05 }}>
        <Button
          w="full"
          leftIcon={<FaDownload />}
          colorScheme="red"
          onClick={() => (window.location.href = user.resumeLink || "/RESUMEE.pdf")}
        >
          Download Resume
        </Button>
      </motion.div>

      {/* Skills Button */}
      <motion.div whileHover={{ scale: 1.05 }}>
        <Button
          mt={3}
          w="full"
          colorScheme="teal"
          variant="outline"
          onClick={() => navigate("/skill")}
        >
          View All Skills
        </Button>
      </motion.div>

      {/* Dark Mode Toggle */}
      <HStack>
        <Text fontWeight="bold">Dark Mode</Text>
        <motion.div whileTap={{ scale: 1.2 }}>
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
