import React, { useState } from "react";
import { Box, Text, IconButton, VStack, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaHackerrank } from "react-icons/fa";

const HackerRankWidget = ({ usernameh }) => {
  const [showWidget, setShowWidget] = useState(false);

  return (
    <VStack textAlign="center" my={5}>
      {/* Toggle Button with HackerRank Icon */}
      <IconButton
        icon={<FaHackerrank size="1.8em" />}
        colorScheme="green"
        size="lg"
        isRound
        onClick={() => setShowWidget(!showWidget)}
        aria-label="Show HackerRank Badges"
        boxShadow="0px 4px 10px rgba(0, 255, 0, 0.6)"
        _hover={{ transform: "scale(1.1)", transition: "0.2s" }}
      />

      {/* Show HackerRank Widget when clicked */}
      {showWidget && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Box textAlign="center" p={3} borderRadius="lg" boxShadow="lg">
            <Text fontSize="xl" fontWeight="bold" color="green.300">
              HackerRank Badges 🏆
            </Text>

            {/* Profile Link Instead of Image */}
            <Link
              href={`https://www.hackerrank.com/profile/${usernameh}`}
              isExternal
              color="blue.400"
              fontSize="lg"
              fontWeight="bold"
              mt={2}
            >
              View Your Badges 🔗
            </Link>
          </Box>
        </motion.div>
      )}
    </VStack>
  );
};

export default HackerRankWidget;
