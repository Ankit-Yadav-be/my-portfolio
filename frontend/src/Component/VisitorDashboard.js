import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Spinner,
  Icon,
  useColorModeValue,
  Flex,
  Badge,
} from "@chakra-ui/react";
import { FaMapMarkerAlt, FaLaptop, FaGlobe, FaCalendarAlt, FaUsers } from "react-icons/fa";

const VisitorDashboard = () => {
  const [visitors, setVisitors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const { data } = await axios.get("http://localhost:8000/api/get-visitors");
        setVisitors(data);
      } catch (error) {
        console.error("Error fetching visitors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVisitors();
  }, []);

  return (
    <Box
      p={6}
      borderRadius="2xl"
      boxShadow="2xl"
      maxW="90%"
      mx="auto"
      mt={10}
      bgGradient="linear(to-r, blue.400, teal.400)"
      color="white"
      textAlign="center"
      backdropFilter="blur(15px)"
    >
      <Flex align="center" justify="center" mb={6}>
        <Icon as={FaUsers} boxSize={10} mr={3} />
        <Text fontSize="3xl" fontWeight="bold">Visitor Analytics 📊</Text>
      </Flex>

      {loading ? (
        <Spinner size="xl" thickness="4px" speed="0.65s" color="white" mx="auto" display="block" />
      ) : (
        <Box
          p={5}
          borderRadius="xl"
          bg="white"
          boxShadow="lg"
          overflowX="auto"
          transition="all 0.3s ease-in-out"
          _hover={{ boxShadow: "2xl", transform: "scale(1.02)" }}
        >
          <Table variant="simple" size="lg">
            <Thead bg="gray.900">
              <Tr>
                <Th color="white" textAlign="center">IP Address</Th>
                <Th color="white" textAlign="center">Location</Th>
                <Th color="white" textAlign="center">Device</Th>
                <Th color="white" textAlign="center">Browser</Th>
                <Th color="white" textAlign="center">Date</Th>
              </Tr>
            </Thead>
            <Tbody>
              {visitors.map((v, index) => (
                <Tr
                  key={index}
                  _hover={{
                    bg: "gray.100",
                    transform: "scale(1.02)",
                    transition: "0.3s",
                  }}
                >
                  <Td textAlign="center">
                    <Icon as={FaGlobe} color="blue.500" mr={2} />
                    <Badge colorScheme="blue" p={2} borderRadius="md">{v.ip}</Badge>
                  </Td>
                  <Td textAlign="center">
                    <Icon as={FaMapMarkerAlt} color="red.400" mr={2} />
                    {v.city}, {v.country}
                  </Td>
                  <Td textAlign="center">
                    <Icon as={FaLaptop} color="green.400" mr={2} />
                    <Badge colorScheme="green" p={2} borderRadius="md">{v.device}</Badge>
                  </Td>
                  <Td textAlign="center">{v.browser}</Td>
                  <Td textAlign="center">
                    <Icon as={FaCalendarAlt} color="purple.400" mr={2} />
                    {new Date(v.visitedAt).toLocaleString()}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      )}
    </Box>
  );
};

export default VisitorDashboard;
