import { useEffect, useState } from "react";
import { 
  Box, Text, Image, VStack, Flex, useColorMode, Icon, Modal, 
  ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Button
} from "@chakra-ui/react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"; 
import { motion } from "framer-motion";
import axios from "axios";
import TestimonialForm from "./TestimonialForm";

const TestimonialList = () => {
  const { colorMode } = useColorMode();
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [maxHeight, setMaxHeight] = useState("auto"); 
  const [selectedTestimonial, setSelectedTestimonial] = useState(null); // ✅ For Modal

  useEffect(() => {
    axios.get("https://my-portfolio-10zk.onrender.com/api/testimonials")
      .then((response) => {
        setTestimonials(response.data);
        setLoading(false);
        updateMaxHeight(response.data);
      })
      .catch((error) => {
        console.error("Error fetching testimonials:", error);
        setLoading(false);
      });
  }, []);

  const updateMaxHeight = (testimonials) => {
    if (!testimonials.length) return;
    let maxH = 0;
    testimonials.forEach((testimonial) => {
      maxH = Math.max(maxH, 120); // Fixed height for uniformity
    });
    setMaxHeight(`${maxH + 100}px`);
  };

  return (
    <Box 
      position="relative"
      minH="50vh"
      bg={colorMode === "dark" ? "black" : "gray.50"}
      p={6}
    >
      <TestimonialForm/>
      {/* Scrollable Testimonials */}
      <Box 
        display="flex"
        overflowX="auto"
        scrollSnapType="x mandatory"
        width="80%"
        maxW="800px"
        mx="auto"
        p={4}
        gap={4}
        css={{
          "&::-webkit-scrollbar": { display: "none" },
          "scroll-behavior": "smooth",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={testimonial._id}
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            style={{
              minWidth: "calc(50% - 10px)", 
              scrollSnapAlign: "start",
            }}
          >
            <Box
              p={6}
              borderRadius="lg"
              shadow="lg"
              bg={colorMode === "dark" ? "gray.900" : "white"}
              border={colorMode === "dark" ? "1px solid rgba(255, 255, 255, 0.2)" : "1px solid #ddd"}
              color={colorMode === "dark" ? "gray.300" : "gray.700"}
              textAlign="center"
              position="relative"
              mx={2}
              height={maxHeight} 
              _hover={{ transform: "scale(1.02)", transition: "0.3s" }}
              onClick={() => setSelectedTestimonial(testimonial)} // ✅ Open Modal on Click
              cursor="pointer"
            >
              {/* Avatar */}
              <Flex justify="center" mb={3}>
                {testimonial.image && (
                  <Image 
                    src={`https://my-portfolio-10zk.onrender.com/uploads/${testimonial.image.split("\\").pop()}`} 
                    alt={testimonial.name} 
                    borderRadius="full" 
                    boxSize="80px"
                    objectFit="cover"
                    shadow="xl"
                    border="3px solid"
                    borderColor={colorMode === "dark" ? "blue.400" : "blue.600"}
                  />
                )}
              </Flex>

              {/* Name & Designation */}
              <Text fontWeight="bold" fontSize="xl" textTransform="uppercase" letterSpacing="wider">
                {testimonial.name}
              </Text>
              <Text fontSize="sm" color={colorMode === "dark" ? "blue.400" : "blue.600"}>
                {testimonial.designation}
              </Text>

              {/* Summary (Shortened Message) */}
              <Flex justify="center" align="center" mt={4}>
                <Icon as={FaQuoteLeft} fontSize="md" color="gray.400" mr={2} />
                <Text fontStyle="italic" color={colorMode === "dark" ? "gray.300" : "gray.600"} maxW="400px" noOfLines={1}>
                  {testimonial.message}
                </Text>
                <Icon as={FaQuoteRight} fontSize="md" color="gray.400" ml={2} />
              </Flex>

              {/* Click to View Full */}
             
            </Box>
          </motion.div>
        ))}
      </Box>

      {/* 🔥 Modal for Full Message */}
      {selectedTestimonial && (
        <Modal isOpen={true} onClose={() => setSelectedTestimonial(null)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{selectedTestimonial.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack spacing={3}>
                {selectedTestimonial.image && (
                  <Image 
                    src={`http://localhost:8000/uploads/${selectedTestimonial.image.split("\\").pop()}`} 
                    alt={selectedTestimonial.name} 
                    borderRadius="full" 
                    boxSize="100px"
                    objectFit="cover"
                    shadow="lg"
                  />
                )}
                <Text fontSize="md" fontWeight="bold">{selectedTestimonial.designation}</Text>
                <Text fontSize="md" fontStyle="italic">{selectedTestimonial.message}</Text>
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}

    </Box>
  );
};

export default TestimonialList;
