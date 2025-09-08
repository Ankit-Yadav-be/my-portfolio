// Navbar.jsx
import React from "react";
import { Box, HStack, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaCode, FaLaptopCode } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("whiteAlpha.900", "gray.900");
  const activeBg = useColorModeValue("blue.500", "teal.400");

  const navItems = [
    { name: "Web", path: "/problem-list", icon: <FaCode /> },
    { name: "DSA", path: "/dsa", icon: <FaLaptopCode /> },
  ];

  return (
    <Box
      w="100%"
      position="fixed"
      top={0}
      left={0}
      zIndex="100"
      bg={bg}
      boxShadow="md"
      backdropFilter="saturate(180%) blur(10px)"
      px={6}
      py={3}
    >
      <HStack spacing={6} justify="center">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Button
              key={item.path}
              leftIcon={item.icon}
              size="md"
              fontWeight="bold"
              colorScheme={isActive ? "blue" : "gray"}
              variant={isActive ? "solid" : "ghost"}
              bg={isActive ? activeBg : "transparent"}
              color={isActive ? "white" : colorMode === "dark" ? "whiteAlpha.900" : "blackAlpha.900"}
              _hover={{
                transform: "scale(1.08)",
                bgGradient: isActive
                  ? "linear(to-r, blue.400, blue.600)"
                  : "linear(to-r, teal.300, teal.500)",
                color: "white",
              }}
              transition="all 0.3s ease"
              onClick={() => navigate(item.path)}
            >
              {item.name}
            </Button>
          );
        })}
      </HStack>
    </Box>
  );
};

export default Navbar;
