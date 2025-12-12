// LeftSectionNeon.jsx
import React from "react";
import {
  Box,
  VStack,
  HStack,
  Image,
  Text,
  Button,
  IconButton,
  Badge,
  Switch,
  Divider,
  useColorModeValue,
  Tooltip,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaDownload,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MotionBox = motion(Box);
const MotionHStack = motion(HStack);

const defaultUser = {
  name: "Ankit Yadav",
  title: "Fullstack Developer",
  photo: "/Ankit.jpeg",
  phone: "+91 7830237144",
  email: "ay870421@gmail.com",
  location: "Agra, Uttar Pradesh",
  resumeLink: "/RESUMEE.pdf",
  linkedin: "https://www.linkedin.com/in/ankit-yadav-1a7023298/",
  github: "https://github.com/Ankit-Yadav-be",
  twitter: "https://twitter.com/",
};

export default function LeftSectionNeon({
  user = defaultUser,
  isDarkMode,
  setIsDarkMode,
}) {
  const navigate = useNavigate();
  const bg = useColorModeValue("rgba(255,255,255,0.6)", "rgba(20,20,20,0.6)");
  const frosted = useColorModeValue("rgba(255,255,255,0.06)", "rgba(255,255,255,0.02)");
  const textColor = useColorModeValue("gray.800", "gray.100");

  return (
    <VStack
      w={{ base: "100%", md: "320px" }}
      spacing={6}
      align="center"
      p={{ base: 5, md: 6 }}
      position="relative"
      borderRadius="2xl"
      overflow="hidden"
      boxShadow="0 10px 40px rgba(8,14,25,0.45)"
      bg={useColorModeValue("linear-gradient(180deg, rgba(255,255,255,0.6), rgba(255,255,255,0.3))", "transparent")}
    >
      {/* Subtle animated ambient glow */}
      <MotionBox
        pointerEvents="none"
        position="absolute"
        inset="-25%"
        zIndex={0}
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(0,255,255,0.10), transparent 12%), radial-gradient(circle at 80% 70%, rgba(130,90,255,0.06), transparent 15%)",
          filter: "blur(60px)",
        }}
        animate={{ scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* PROFILE with Neon Ring */}
      <MotionBox
        zIndex={2}
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Box
          position="relative"
          w="170px"
          h="210px"
          borderRadius="18px"
          overflow="hidden"
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxShadow="inset 0 0 40px rgba(255,255,255,0.03), 0 8px 30px rgba(6,22,50,0.6)"
        >
          {/* Neon outer ring */}
          <MotionBox
            position="absolute"
            top="-6%"
            left="-6%"
            w="112%"
            h="112%"
            borderRadius="22px"
            zIndex={-1}
            style={{
              background:
                "conic-gradient(from 120deg, rgba(0,255,255,0.12), rgba(0,180,255,0.08), rgba(170,80,255,0.06))",
              filter: "blur(18px)",
            }}
            animate={{ rotate: [0, 6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            opacity={0.95}
          />

          {/* Profile image */}
          <Image
            src={user.photo || defaultUser.photo}
            alt={user.name || defaultUser.name}
            objectFit="cover"
            w="100%"
            h="100%"
            borderRadius="16px"
            _hover={{ transform: "scale(1.03)", transition: "0.4s" }}
          />
        </Box>
      </MotionBox>

      {/* Name & Title */}
      <VStack spacing={1} zIndex={2}>
        <MotionBox
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.08 }}
          textAlign="center"
        >
          <Text
            fontSize="xl"
            fontWeight="700"
            bgClip="text"
            bgGradient="linear(to-r, teal.300, cyan.400, purple.300)"
            letterSpacing="0.3px"
          >
            {user.name || defaultUser.name}
          </Text>

          <Badge
            mt={2}
            px={3}
            py={1}
            borderRadius="full"
            fontSize="0.8rem"
            boxShadow="0 4px 20px rgba(50,200,200,0.08)"
            bg={frosted}
            color={textColor}
          >
            {user.title || defaultUser.title}
          </Badge>
        </MotionBox>
      </VStack>

      <Divider opacity={0.12} />

      {/* Social icons - magnetic hover */}
      <MotionHStack
        spacing={4}
        zIndex={2}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        {[
          { icon: FaLinkedin, href: user.linkedin, label: "LinkedIn" },
          { icon: FaGithub, href: user.github, label: "Github" },
          { icon: FaTwitter, href: user.twitter, label: "Twitter" },
        ].map(({ icon: IconComp, href, label }, i) => (
          <Tooltip key={i} label={label} hasArrow>
            <MotionBox
              whileHover={{ scale: 1.14, rotate: [0, -6, 0], y: -4 }}
              whileTap={{ scale: 0.96 }}
            >
              <IconButton
                as="a"
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                icon={<IconComp />}
                size="md"
                borderRadius="xl"
                boxShadow="0 6px 18px rgba(2,12,27,0.5)"
                bg={bg}
                _hover={{
                  bg: "linear-gradient(90deg, rgba(0,230,255,0.08), rgba(170,80,255,0.06))",
                  color: "cyan.300",
                }}
              />
            </MotionBox>
          </Tooltip>
        ))}
      </MotionHStack>

      <Divider opacity={0.12} />

      {/* Contact tiles - glass cards */}
      <VStack spacing={3} w="100%" zIndex={2}>
        {[
          { icon: FaPhone, text: user.phone || defaultUser.phone },
          { icon: FaEnvelope, text: user.email || defaultUser.email },
          { icon: FaMapMarkerAlt, text: user.location || defaultUser.location },
        ].map(({ icon: IconComp, text }, i) => (
          <MotionBox
            key={i}
            w="100%"
            initial={{ scale: 0.995, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.18 + i * 0.04 }}
          >
            <HStack
              spacing={3}
              p={3}
              borderRadius="lg"
              align="center"
              bg={useColorModeValue("rgba(255,255,255,0.06)", "rgba(255,255,255,0.02)")}
              boxShadow="0 6px 20px rgba(2,12,27,0.45)"
              _hover={{ transform: "translateY(-4px)", transition: "0.25s" }}
            >
              <Box as={IconComp} fontSize="1.25rem" color="cyan.300" />
              <Text fontSize="sm" color={textColor} noOfLines={1} fontWeight="600">
                {text}
              </Text>
            </HStack>
          </MotionBox>
        ))}
      </VStack>

      <Divider opacity={0.12} />

      {/* Buttons */}
      <VStack spacing={3} w="100%" zIndex={2}>
        <MotionBox whileHover={{ scale: 1.02 }}>
          <Button
            w="100%"
            leftIcon={<FaDownload />}
            borderRadius="xl"
            py={6}
            onClick={() => (window.location.href = user.resumeLink || defaultUser.resumeLink)}
            sx={{
              background:
                "linear-gradient(90deg, rgba(0,230,255,0.12), rgba(170,80,255,0.08))",
              boxShadow: "0 10px 30px rgba(0,180,255,0.06), inset 0 -2px 8px rgba(0,0,0,0.12)",
              color: textColor,
              fontWeight: 700,
            }}
            _hover={{
              transform: "translateY(-3px)",
              boxShadow: "0 14px 38px rgba(0,200,255,0.12)",
            }}
          >
            Download Résumé
          </Button>
        </MotionBox>

        <MotionBox whileHover={{ scale: 1.02 }}>
          <Button
            w="100%"
            variant="outline"
            borderRadius="xl"
            py={6}
            onClick={() => navigate("/skill")}
            sx={{
              border: "1px solid rgba(0,200,255,0.12)",
              backdropFilter: "blur(6px)",
              color: textColor,
              fontWeight: 700,
            }}
            _hover={{
              bg: "linear-gradient(90deg, rgba(0,230,255,0.06), rgba(170,80,255,0.04))",
            }}
          >
            View All Skills
          </Button>
        </MotionBox>
      </VStack>

      <Divider opacity={0.12} />

      {/* Dark mode toggle */}
      <HStack w="100%" justify="space-between" zIndex={2} pt={2}>
        <HStack>
          <Text fontWeight="700" fontSize="sm" color={textColor}>
            Dark Mode
          </Text>
        </HStack>

        <Switch
          isChecked={!!isDarkMode}
          onChange={() => setIsDarkMode && setIsDarkMode((v) => !v)}
          size="lg"
          colorScheme="cyan"
        />
      </HStack>

      {/* Tiny footer hint */}
      <Text fontSize="xs" color="gray.400" pt={2} zIndex={2}>
        Designed with ♥ — Clean, modern & recruiter-ready
      </Text>
    </VStack>
  );
}
