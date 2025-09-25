import React, { useState } from "react";
import { Box, Image, Text, IconButton, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Custom LeetCode SVG Icon
const LeetCodeIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width="2em"
    height="2em"
    {...props}
  >
    <path d="M8.12 4.707a1 1 0 0 1 1.415 0l4.243 4.243a1 1 0 1 1-1.414 1.414L9.829 7.536 4.707 12.66a1 1 0 0 1-1.414-1.415l4.243-4.243a1 1 0 0 1 .584-.295zm7.07 7.071a1 1 0 1 1 1.415 1.414l-4.243 4.243a1 1 0 0 1-1.415 0l-4.243-4.243a1 1 0 1 1 1.414-1.414l3.536 3.536 3.536-3.536z" />
  </svg>
);

const LeetCodeWidget = ({ usernamel }) => {
  const [showWidget, setShowWidget] = useState(ture);

  return (
    <VStack textAlign="center" my={5}>
      {/* Toggle Button with LeetCode Icon */}
      <IconButton
        icon={<LeetCodeIcon color="orange" />}
        colorScheme="gray"
        size="lg"
        isRound
        onClick={() => setShowWidget(!showWidget)}
        aria-label="Show LeetCode Streak"
        boxShadow="0px 4px 10px rgba(255, 140, 0, 0.6)"
        _hover={{ transform: "scale(1.1)", transition: "0.2s" }}
      />

      {/* Show LeetCode Widget when clicked */}
      {showWidget && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Box textAlign="center" p={3} borderRadius="lg" boxShadow="lg">
            <Text fontSize="xl" fontWeight="bold" color="orange.300">
              LeetCode Streak🔥
            </Text>
            <Image
              src={`https://leetcard.jacoblin.cool/${usernamel}?theme=dark&ext=heatmap`}
              alt="LeetCode Stats"
              borderRadius="md"
              boxShadow="0px 4px 15px rgba(255, 140, 0, 0.6)"
            />
          </Box>
        </motion.div>
      )}
    </VStack>
  );
};

export default LeetCodeWidget;
