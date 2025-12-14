// Navbar.jsx
// Fixed & improved: active route handling for sub-routes, cleaned styles

import React from "react";
import {
  Box,
  HStack,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaCode, FaLaptopCode, FaHome, FaSitemap } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { colorMode } = useColorMode();

  const bg = useColorModeValue("whiteAlpha.900", "gray.900");
  const activeBg = useColorModeValue("blue.500", "teal.400");

  const navItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Web", path: "/problem-list", icon: <FaCode /> },
    { name: "DSA", path: "/dsa", icon: <FaLaptopCode /> },
    { name: "System Design", path: "/system-design", icon: <FaSitemap /> },
  ];

  // ✅ active even for sub-routes like /system-design/hld
  const isRouteActive = (path) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  return (
    <Box
      w="100%"
      position="fixed"
      top={0}
      left={0}
      zIndex={100}
      bg={bg}
      boxShadow="md"
      backdropFilter="saturate(180%) blur(10px)"
      px={6}
      py={3}
    >
      <HStack spacing={6} justify="center">
        {navItems.map((item) => {
          const active = isRouteActive(item.path);

          return (
            <Button
              key={item.path}
              leftIcon={item.icon}
              size="md"
              fontWeight="semibold"
              variant={active ? "solid" : "ghost"}
              bg={active ? activeBg : "transparent"}
              color={
                active
                  ? "white"
                  : colorMode === "dark"
                  ? "whiteAlpha.900"
                  : "blackAlpha.900"
              }
              _hover={{
                transform: "scale(1.06)",
                bg: active
                  ? activeBg
                  : "linear-gradient(90deg, #38bdf8, #22c55e)",
                color: "white",
              }}
              transition="all 0.25s ease"
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
