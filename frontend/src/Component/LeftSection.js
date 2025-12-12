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
  Divider,
  Badge,
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

const MotionDiv = motion.div;

// ✨ Subtle Floating Glow Background
const AnimatedBackground = () => (
  <MotionDiv
    style={{
      position: "absolute",
      inset: 0,
      background:
        "radial-gradient(circle at 30% 20%, rgba(0,255,255,0.10), transparent 60%), radial-gradient(circle at 80% 70%, rgba(255,0,150,0.10), transparent 60%)",
      zIndex: -1,
      filter: "blur(40px)",
    }}
    animate={{
      opacity: [0.5, 0.9, 0.5],
      scale: [1, 1.1, 1],
    }}
    transition={{ duration: 10, repeat: Infinity }}
  />
);

const LeftSection = ({ user, isDarkMode, setIsDarkMode }) => {
  const navigate = useNavigate();

  return (
    <VStack
      w={{ base: "100%", md: "28%" }}
      bg={isDarkMode ? "rgba(20,20,25,0.7)" : "rgba(255,255,255,0.7)"}
      backdropFilter="blur(12px)"
      border="1px solid"
      borderColor={isDarkMode ? "whiteAlpha.200" : "blackAlpha.100"}
      borderRadius="2xl"
      p={{ base: 6, md: 7 }}
      spacing={7}
      align="center"
      boxShadow="0 8px 40px rgba(0,0,0,0.25)"
      position="relative"
      overflow="hidden"
    >
      <AnimatedBackground />

      {/* PROFILE IMAGE */}
      <MotionDiv
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          width: "180px",
          height: "220px",
          borderRadius: "22px",
          overflow: "hidden",
          boxShadow:
            "0 20px 40px rgba(0, 255, 255, 0.25), inset 0 0 20px rgba(255,255,255,0.1)",
        }}
      >
        <Image
          src={user.photo || "/Ankit.jpeg"}
          alt="Profile"
          objectFit="cover"
          h="100%"
          w="100%"
          _hover={{ transform: "scale(1.06)", transition: "0.4s" }}
        />
      </MotionDiv>

      {/* NAME & TITLE */}
      <VStack spacing={1} textAlign="center">
        <Text
          fontSize="2xl"
          fontWeight="700"
          bgGradient="linear(to-r, cyan.300, pink.400)"
          bgClip="text"
        >
          {user.name || "Ankit Yadav"}
        </Text>

        <Badge
          colorScheme="cyan"
          px={4}
          py={1}
          borderRadius="lg"
          fontSize="0.9rem"
          fontWeight="600"
          boxShadow="0 0 10px rgba(0,255,255,0.4)"
        >
          {user.title || "FullStack Developer"}
        </Badge>
      </VStack>

      <Divider opacity={0.25} />

      {/* SOCIAL LINKS */}
      <HStack spacing={4}>
        {[
          {
            icon: FaLinkedin,
            color: "#0e76a8",
            link: "https://www.linkedin.com/in/ankit-yadav-1a7023298/",
          },
          {
            icon: FaGithub,
            color: "#333",
            link: "https://github.com/Ankit-Yadav-be",
          },
          { icon: FaTwitter, color: "#1DA1F2", link: "https://twitter.com/" },
        ].map(({ icon, color, link }, i) => (
          <MotionDiv key={i} whileHover={{ scale: 1.2, y: -3 }}>
            <IconButton
              as="a"
              href={link}
              target="_blank"
              icon={React.createElement(icon)}
              aria-label="Social"
              bg="whiteAlpha.200"
              color={color}
              borderRadius="full"
              p={3}
              _hover={{
                bg: color,
                color: "white",
                transition: "0.3s",
              }}
              boxShadow="0 4px 15px rgba(0,0,0,0.3)"
            />
          </MotionDiv>
        ))}
      </HStack>

      <Divider opacity={0.25} />

      {/* CONTACT INFO */}
      <VStack w="100%" spacing={4} align="stretch">
        {[
          { icon: FaPhone, text: user.phone || "+91 7830237144" },
          { icon: FaEnvelope, text: user.email || "ay870421@gmail.com" },
          { icon: FaMapMarkerAlt, text: user.location || "Agra, Uttar Pradesh" },
        ].map(({ icon, text }, i) => (
          <MotionDiv key={i} whileHover={{ scale: 1.02 }}>
            <HStack
              spacing={4}
              p={3}
              borderRadius="xl"
              bg={isDarkMode ? "whiteAlpha.100" : "blackAlpha.100"}
            >
              <Box as={icon} fontSize="1.4rem" color="cyan.300" />

              <Text fontSize="md" fontWeight="500">
                {text}
              </Text>
            </HStack>
          </MotionDiv>
        ))}
      </VStack>

      <Divider opacity={0.25} />

      {/* BUTTONS */}
      <VStack w="100%" spacing={3}>
        <MotionDiv whileHover={{ scale: 1.05 }}>
          <Button
            w="full"
            leftIcon={<FaDownload />}
            colorScheme="pink"
            borderRadius="xl"
            bg="pink.400"
            _hover={{
              bgGradient: "linear(to-r, pink.400, orange.400)",
            }}
            onClick={() =>
              (window.location.href = user.resumeLink || "/RESUMEE.pdf")
            }
          >
            Download Resume
          </Button>
        </MotionDiv>

        <MotionDiv whileHover={{ scale: 1.05 }}>
          <Button
            w="full"
            variant="outline"
            colorScheme="cyan"
            borderRadius="xl"
            _hover={{
              bgGradient: "linear(to-r, cyan.300, teal.400)",
              color: "white",
              border: "none",
            }}
            onClick={() => navigate("/skill")}
          >
            View All Skills
          </Button>
        </MotionDiv>
      </VStack>

      {/* DARK MODE SWITCH */}
      <HStack pt={2}>
        <Text fontWeight="600" fontSize="sm">
          Dark Mode
        </Text>
        <MotionDiv whileTap={{ scale: 1.2 }}>
          <Switch
            size="lg"
            isChecked={isDarkMode}
            onChange={() => setIsDarkMode(!isDarkMode)}
            colorScheme="cyan"
          />
        </MotionDiv>
      </HStack>
    </VStack>
  );
};

export default LeftSection;
