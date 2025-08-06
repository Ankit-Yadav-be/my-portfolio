import { useState } from "react";
import { Box, Input, Button, Textarea, VStack, Image, Collapse, Icon } from "@chakra-ui/react";
import { AddIcon, CloseIcon } from "@chakra-ui/icons"; // ✅ Chakra Icons
import { motion } from "framer-motion"; // ✅ Animation Library
import { BsChatQuote } from "react-icons/bs"; // ✅ Testimonial Icon
import axios from "axios";

const TestimonialForm = ({ onTestimonialAdded }) => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [isOpen, setIsOpen] = useState(false); // ✅ Toggle State

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("designation", designation);
    formData.append("message", message);
    if (image) formData.append("image", image);

    try {
      const response = await axios.post("https://my-portfolio-lw4x.vercel.app/api/addtestimonials", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      alert("Testimonial added successfully!");
      onTestimonialAdded(response.data);
      setIsOpen(false); // ✅ Close after submission
      setName("");
      setDesignation("");
      setMessage("");
      setImage(null);
      setPreview("");
    } catch (error) {
      console.error("Error adding testimonial:", error);
    }
  };

  return (
    <Box textAlign="center">
      {/* ✅ Animated Button */}
      <motion.div
        whileHover={{ scale: 1.1 }} // 🔥 Hover Effect
        whileTap={{ scale: 0.9 }} // 🔥 Click Effect
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Button
          leftIcon={<BsChatQuote size={20} />}
          rightIcon={<Icon as={isOpen ? CloseIcon : AddIcon} transition="0.3s" transform={isOpen ? "rotate(180deg)" : "rotate(0)"} />}
          colorScheme={isOpen ? "red" : "blue"}
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          px={6}
          py={4}
          fontSize="lg"
          fontWeight="bold"
          borderRadius="full"
          shadow="lg"
          _hover={{ bg: isOpen ? "red.500" : "blue.500", transform: "scale(1.05)" }}
        >
          {isOpen ? "Close Form" : "Add Testimonial & Feedback"}
        </Button>
      </motion.div>

      {/* ✅ Form Collapsible */}
      <Collapse in={isOpen} animateOpacity>
        <Box as="form" onSubmit={handleSubmit} p={6} border="1px solid #ddd" borderRadius="md" shadow="md" mt={4}>
          <VStack spacing={4}>
            <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <Input placeholder="Designation" value={designation} onChange={(e) => setDesignation(e.target.value)} required />
            <Textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
            <Input type="file" accept="image/*" onChange={handleImageChange} />
            {preview && <Image src={preview} alt="Preview" boxSize="100px" />}
            <Button type="submit" colorScheme="green" size="lg">Submit</Button>
          </VStack>
        </Box>
      </Collapse>
    </Box>
  );
};

export default TestimonialForm;
