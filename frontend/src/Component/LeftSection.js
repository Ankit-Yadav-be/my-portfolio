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

const MotionBox = motion(Box);
const MotionDiv = motion.div;

// Animated Floating Gradient Backlight
const AnimatedGradient = () => (
  <MotionDiv
    style={{
      position: "absolute",
      top: "-20%",
      left: "-20%",
      width: "140%",
      height: "140%",
      background:
        "radial-gradient(circle at center, rgba(0,255,255,0.25), rgba(0,0,0,0))",
      filter: "blur(70px)",
      zIndex: -1,
      opacity: 0.6,
    }}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.5, 0.7, 0.5],
    }}
    transition={{ repeat: Infinity, duration: 8 }}
  />
);

const LeftSection = ({ user, isDarkMode, setIsDarkMode }) => {
  const navigate = useNavigate();

  return (
    <VStack
      w={{ base: "100%", md: "28%" }}
      bg={isDarkMode ? "gray.900" : "white"}
      borderRadius="2xl"
      p={{ base: 5, md: 7 }}
      spacing={7}
      align="center"
      boxShadow="0px 5px 35px rgba(0,0,0,0.2)"
      position="relative"
      overflow="hidden"
    >
      <AnimatedGradient />

      {/* PROFILE IMAGE + INFO */}
      <MotionDiv
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          width: "180px",
          height: "220px",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow:
            "0px 10px 30px rgba(0, 255, 255, 0.3), inset 0px 0px 30px rgba(255,255,255,0.1)",
        }}
      >
        <Image
          src={user.photo || "/Ankit.jpeg"}
          alt="Profile"
          objectFit="cover"
          h="100%"
          w="100%"
          _hover={{ transform: "scale(1.08)", transition: "0.4s" }}
        />
      </MotionDiv>

      {/* NAME + TAGLINE */}
      <VStack spacing={1} textAlign="center">
        <Text
          fontSize="2xl"
          fontWeight="bold"
          bgGradient="linear(to-r, teal.300, cyan.400)"
          bgClip="text"
          letterSpacing="0.5px"
        >
          {user.name || "Ankit Yadav"}
        </Text>

        <Badge
          colorScheme="teal"
          px={3}
          py={1}
          borderRadius="lg"
          fontSize="0.85rem"
          boxShadow="0 0 10px rgba(0,255,255,0.4)"
        >
          {user.title || "FullStack Developer"}
        </Badge>
      </VStack>

      <Divider opacity={0.3} />

      {/* SOCIAL MEDIA */}
      <HStack spacing={5}>
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
          {
            icon: FaTwitter,
            color: "#1DA1F2",
            link: "https://twitter.com/",
          },
        ].map(({ icon, color, link }, i) => (
          <MotionDiv key={i} whileHover={{ scale: 1.2 }}>
            <IconButton
              as="a"
              href={link}
              target="_blank"
              icon={React.createElement(icon)}
              aria-label="Social"
              bg="whiteAlpha.200"
              color={color}
              _hover={{
                bg: color,
                color: "white",
                transition: "0.3s",
              }}
              boxShadow="lg"
            />
          </MotionDiv>
        ))}
      </HStack>

      <Divider opacity={0.3} />

      {/* CONTACT INFORMATION */}
      <VStack align="start" w="100%" spacing={3}>
        {[
          { icon: FaPhone, text: user.phone || "+91 7830237144" },
          { icon: FaEnvelope, text: user.email || "ay870421@gmail.com" },
          {
            icon: FaMapMarkerAlt,
            text: user.location || "Agra, Uttar Pradesh",
          },
        ].map(({ icon, text }, i) => (
          <HStack key={i} spacing={4}>
            <Box
              as={icon}
              fontSize="1.2rem"
              color="cyan.400"
              filter="drop-shadow(0px 0px 5px cyan)"
            />
            <Text
              fontSize="sm"
              color={isDarkMode ? "gray.300" : "gray.700"}
              fontWeight="medium"
              _hover={{ color: "cyan.400", transition: "0.3s" }}
            >
              {text}
            </Text>
          </HStack>
        ))}
      </VStack>

      <Divider opacity={0.3} />

      {/* BUTTONS */}
      <VStack w="100%" spacing={3}>
        <MotionDiv whileHover={{ scale: 1.04 }}>
          <Button
            w="full"
            leftIcon={<FaDownload />}
            colorScheme="red"
            size="md"
            borderRadius="xl"
            onClick={() =>
              (window.location.href = user.resumeLink || "/RESUMEE.pdf")
            }
            _hover={{
              bgGradient: "linear(to-r, red.400, orange.400)",
            }}
          >
            Download Resume
          </Button>
        </MotionDiv>

        <MotionDiv whileHover={{ scale: 1.04 }}>
          <Button
            w="full"
            colorScheme="cyan"
            variant="outline"
            borderRadius="xl"
            _hover={{
              bgGradient: "linear(to-r, teal.300, cyan.400)",
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
      <HStack pt={3}>
        <Text fontWeight="bold" fontSize="sm">
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
