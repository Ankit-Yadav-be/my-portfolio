import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Text,
  Icon,
  Spinner,
  Button,
  Collapse,
  Flex,
  VStack,
  HStack,
  Avatar,
  SimpleGrid,
  useColorModeValue,
  Divider,
  Badge,
} from "@chakra-ui/react";
import { FaUsers, FaCity, FaChevronDown, FaChevronUp, FaGlobe } from "react-icons/fa";

const VisitorStats = () => {
  const [visitors, setVisitors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showStats, setShowStats] = useState(true);

  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const { data } = await axios.get(
          "https://my-portfolio-lw4x.vercel.app/api/get-visitors"
        );
        setVisitors(data);
      } catch (error) {
        console.error("Error fetching visitor stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVisitors();
  }, []);

  const cityWiseCount = visitors.reduce((acc, visitor) => {
    acc[visitor.city] = (acc[visitor.city] || 0) + 1;
    return acc;
  }, {});

  // UI Colors
  const glassBg = useColorModeValue(
    "rgba(255, 255, 255, 0.1)",
    "rgba(0, 0, 0, 0.3)"
  );

  const borderClr = useColorModeValue("cyan.400", "cyan.200");

  return (
    <Box textAlign="center" mt={10} px={4}>
      {/* 🔵 Toggle Button */}
      <Flex justify="center">
        <Button
          leftIcon={<Icon as={FaUsers} />}
          size="lg"
          onClick={() => setShowStats(!showStats)}
          _hover={{
            transform: "scale(1.1)",
            transition: "0.3s",
            boxShadow: "0px 0px 20px cyan",
          }}
          bgGradient="linear(to-r, purple.500, blue.400)"
          color="white"
          px={10}
          py={6}
          borderRadius="full"
          fontSize="xl"
          fontWeight="bold"
        >
          {showStats ? "Hide Visitors" : "Show Visitors"}
          <Icon as={showStats ? FaChevronUp : FaChevronDown} ml={2} />
        </Button>
      </Flex>

      {/* 🔽 MAIN SECTION */}
      <Collapse in={showStats} animateOpacity>
        <Box
          mt={8}
          p={8}
          borderRadius="2xl"
          backdropFilter="blur(20px)"
          bg={glassBg}
          border="1px solid"
          borderColor={borderClr}
          boxShadow="0px 0px 30px rgba(0,255,255,0.2)"
          maxW="950px"
          mx="auto"
          transition="all 0.3s"
        >
          {/* Header */}
          <Text
            fontSize="3xl"
            fontWeight="bold"
            mb={6}
            color="cyan.300"
            textShadow="0 0 20px cyan"
          >
            🌍 Visitors Analytics Dashboard
          </Text>

          {/* 🔹 CITY GRID STATS */}
          <Text
            fontSize="xl"
            fontWeight="bold"
            mb={3}
            color="purple.300"
          >
            City Wise Breakdown
          </Text>

          {loading ? (
            <Spinner size="xl" color="cyan.300" mb={6} />
          ) : (
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} mb={6}>
              {Object.entries(cityWiseCount).map(([city, count]) => (
                <Box
                  key={city}
                  p={5}
                  borderRadius="lg"
                  border="1px solid"
                  borderColor="cyan.300"
                  boxShadow="0px 0px 15px rgba(0,255,255,0.2)"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "0.2s",
                    boxShadow: "0px 0px 30px cyan",
                  }}
                >
                  <HStack justify="space-between">
                    <HStack>
                      <Icon as={FaCity} color="cyan.300" boxSize={6} />
                      <Text fontSize="lg" fontWeight="bold">
                        {city}
                      </Text>
                    </HStack>

                    <Badge
                      fontSize="md"
                      colorScheme="cyan"
                      px={3}
                      py={1}
                      borderRadius="full"
                    >
                      {count}
                    </Badge>
                  </HStack>
                </Box>
              ))}
            </SimpleGrid>
          )}

          <Divider my={6} borderColor="cyan.500" />

          {/* 🔹 INDIVIDUAL VISITOR LIST */}
          <Text
            fontSize="xl"
            fontWeight="bold"
            mb={5}
            color="cyan.300"
          >
            👥 Recent Visitors
          </Text>

          <VStack spacing={4} align="stretch">
            {visitors.map((v) => (
              <Flex
                key={v._id}
                p={4}
                borderRadius="lg"
                bg={glassBg}
                border="1px solid"
                borderColor="cyan.300"
                align="center"
                justify="space-between"
                boxShadow="0px 0px 20px rgba(0,255,255,0.1)"
                transition="0.2s"
                _hover={{
                  transform: "scale(1.03)",
                  boxShadow: "0px 0px 30px cyan",
                }}
              >
                <HStack>
                  <Avatar
                    name={v.city}
                    bg="cyan.600"
                    color="white"
                  />

                  <Box textAlign="left">
                    <Text fontWeight="bold" fontSize="lg">
                      {v.city}
                    </Text>

                    <Text fontSize="sm" opacity={0.7}>
                      {new Date(v.createdAt).toLocaleString()}
                    </Text>
                  </Box>
                </HStack>

                <HStack>
                  <Icon as={FaGlobe} boxSize={6} color="cyan.300" />
                </HStack>
              </Flex>
            ))}
          </VStack>
        </Box>
      </Collapse>
    </Box>
  );
};

export default VisitorStats;
