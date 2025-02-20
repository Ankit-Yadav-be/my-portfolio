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
  useColorModeValue,
} from "@chakra-ui/react";
import { FaUsers, FaCity, FaChevronDown, FaChevronUp } from "react-icons/fa";

const VisitorStats = () => {
  const [visitors, setVisitors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const { data } = await axios.get("http://localhost:8000/api/get-visitors");
        setVisitors(data);
      } catch (error) {
        console.error("Error fetching visitor stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVisitors();
  }, []);

  // 📊 Grouping visitors by city
  const cityWiseCount = visitors.reduce((acc, visitor) => {
    acc[visitor.city] = (acc[visitor.city] || 0) + 1;
    return acc;
  }, {});

  // 🎨 Dark Mode & Color Themes
  const bgColor = useColorModeValue("gray.800", "blackAlpha.900");
  const boxColor = useColorModeValue("gray.700", "blackAlpha.700");
  const textColor = useColorModeValue("whiteAlpha.900", "gray.200");
  const borderColor = useColorModeValue("blue.500", "blue.300");

  return (
    <Box textAlign="center" mt={8} px={4}>
      {/* 🔵 Visitors Button with Enhanced UI */}
      <Flex justify="center">
        <Button
          leftIcon={<Icon as={FaUsers} />}
          size="lg"
          onClick={() => setShowStats(!showStats)}
          _hover={{
            transform: "scale(1.1)",
            transition: "0.3s",
            boxShadow: "0px 0px 15px cyan",
          }}
          bgGradient="linear(to-r, blue.400, purple.500)"
          color="white"
          px={10}
          py={6}
          borderRadius="full"
          fontSize="lg"
          fontWeight="bold"
          boxShadow="0px 0px 10px rgba(0, 255, 255, 0.6)"
          display="flex"
          alignItems="center"
        >
          {showStats ? "Hide Visitors" : "Show Visitors"}
          <Icon as={showStats ? FaChevronUp : FaChevronDown} ml={2} />
        </Button>
      </Flex>

      {/* 🔽 Collapsible Visitor Stats Section */}
      <Collapse in={showStats} animateOpacity>
        <Box
          mt={6}
          p={6}
          borderRadius="lg"
          bg={bgColor}
          border="1px solid"
          borderColor={borderColor}
          color={textColor}
          boxShadow="0px 0px 20px rgba(0, 255, 255, 0.3)"
          maxW={{ base: "95%", md: "80%", lg: "50%" }}
          mx="auto"
          transition="all 0.3s ease-in-out"
          _hover={{ boxShadow: "0px 0px 30px cyan", transform: "scale(1.02)" }}
        >
          <Text fontSize="2xl" fontWeight="bold" mb={5} color="cyan.300">
            Visitor Count by City 🌎
          </Text>

          {loading ? (
            <Spinner size="xl" color="blue.400" mt={4} />
          ) : (
            <VStack spacing={4} align="stretch">
              {Object.entries(cityWiseCount).map(([city, count]) => (
                <Flex
                  key={city}
                  p={4}
                  borderRadius="md"
                  align="center"
                  justify="space-between"
                  bg={boxColor}
                  border="1px solid"
                  borderColor="blue.400"
                  boxShadow="0px 0px 15px rgba(0, 255, 255, 0.2)"
                  _hover={{
                    bg: "blue.500",
                    transform: "scale(1.05)",
                    transition: "0.2s",
                    boxShadow: "0px 0px 25px cyan",
                  }}
                >
                  <Flex align="center">
                    <Icon as={FaCity} color="cyan.300" mr={3} />
                    <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold">
                      {city}
                    </Text>
                  </Flex>
                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    color="white"
                    bg="blue.600"
                    px={4}
                    py={2}
                    borderRadius="full"
                    boxShadow="0px 0px 10px cyan"
                  >
                    {count}
                  </Text>
                </Flex>
              ))}
            </VStack>
          )}
        </Box>
      </Collapse>
    </Box>
  );
};

export default VisitorStats;
