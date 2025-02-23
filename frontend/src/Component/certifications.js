import React, { useState } from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Image,
  SimpleGrid,
  Heading,
  Icon,
  Divider,
  useColorMode,
  Button,
  Input,
} from "@chakra-ui/react";
import { FaCertificate, FaSearch, FaExternalLinkAlt, FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Prod E-G Hackathon",
    issuer: "Coursera",
    image: "/flipcart.png",
    link: "https://unstop.com/certificate-preview/ebbff439-65ad-43a1-b68b-e361579024b4",
    date: "12 Dec 2024",
    skills: "E-Commerce Strategies",
  },
  {
    title: "Ecommerce Certification",
    issuer: "Flipkart Grid",
    image: "/prod.png",
    link: "https://unstop.com/certificate-preview/5fbbca89-bfb9-4c39-938c-31f785bd1710",
    date: "27 Aug 2024",
    skills: "Business Analytics, Digital Marketing",
  },
   {
    title: "Full Stack Certification ",
    issuer: "Hakerrank",
    image: "/h.png",
    link: "https://www.hackerrank.com/certificates/bbde8932447f",
    date: "23 Feb 2025",
    skills: "React,Mongodb,javascript",
  },
   {
    title: "Data Strcuture(Linked List)",
    issuer: "Code Chef",
    image: "/c.png",
    link: "https://www.codechef.com/certificates/public/bbb6135",
    date: "3 Sep 2024",
    skills: "java ",
  },
];

const Certifications = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = colorMode === "dark" ? "gray.900" : "gray.200";
  const textColor = colorMode === "dark" ? "white" : "gray.800";
  const cardBg = colorMode === "dark" ? "gray.800" : "gray.100";
  const glowEffect = colorMode === "dark" ? "0 0 10px teal" : "none";
  const [search, setSearch] = useState("");

  const filteredCerts = certifications.filter((cert) =>
    cert.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box p={8} bg={bgColor} color={textColor} borderRadius="md" boxShadow="xl" mt={10} transition="0.3s">
      <HStack justify="space-between">
        <Heading as="h2" size="xl" mb={6} textAlign="center" color="teal.400" textShadow={glowEffect}>
          <Icon as={FaCertificate} mr={2} /> Certifications & Achievements
        </Heading>
        <Button onClick={toggleColorMode} colorScheme="teal">
          <Icon as={colorMode === "dark" ? FaSun : FaMoon} boxSize={5} />
        </Button>
      </HStack>

      <Divider mb={4} />

      {/* Search Bar */}
      <HStack mb={6} justify="center">
        <Input
          placeholder="Search Certifications..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          w={{ base: "100%", md: "50%" }}
          bg={cardBg}
          color={textColor}
          borderRadius="md"
          _focus={{ borderColor: "teal.400", boxShadow: glowEffect }}
        />
        <Icon as={FaSearch} color="teal.400" boxSize={5} />
      </HStack>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
        {filteredCerts.map((cert, index) => (
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} key={index}>
            <Box
              p={4}
              bg={cardBg}
              borderRadius="lg"
              boxShadow="lg"
              textAlign="center"
              _hover={{ boxShadow: glowEffect }}
              transition="0.3s"
            >
              <motion.div whileHover={{ scale: 1.1 }}>
                <Image
                  src={cert.image}
                  alt={cert.title}
                  borderRadius="md"
                  height="150px"
                  objectFit="cover"
                  mx="auto"
                />
              </motion.div>
              <Text fontWeight="bold" fontSize="lg" mt={3}>
                {cert.title}
              </Text>
              <Text fontSize="sm" color="gray.500">
                {cert.issuer} - {cert.date}
              </Text>
              <Text fontSize="xs" color="gray.400" mt={1}>
                {cert.skills}
              </Text>
              <Button
                as="a"
                href={cert.link}
                target="_blank"
                mt={3}
                colorScheme="teal"
                size="sm"
                rightIcon={<FaExternalLinkAlt />}
                _hover={{ transform: "scale(1.05)", transition: "all 0.2s ease-in-out" }}
              >
                View Certificate
              </Button>
            </Box>
          </motion.div>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Certifications;
