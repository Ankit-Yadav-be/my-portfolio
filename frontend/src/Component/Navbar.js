import React, { useState } from "react";
import {
  Box,
  HStack,
  Button,
  IconButton,
  useColorMode,
  useColorModeValue,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
} from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaCode,
  FaLaptopCode,
  FaHome,
  FaSitemap,
  FaBars,
  FaDatabase,
} from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { colorMode } = useColorMode();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const bg = useColorModeValue("whiteAlpha.900", "gray.900");
  const activeBg = useColorModeValue("blue.500", "teal.400");

  // 🔥 UPDATED NAV ITEMS (DBMS ADDED)
  const navItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Web", path: "/problem-list", icon: <FaCode /> },
    { name: "DSA", path: "/dsa", icon: <FaLaptopCode /> },
    { name: "DBMS", path: "/dbms", icon: <FaDatabase /> }, // ✅ NEW
    { name: "System Design", path: "/system-design", icon: <FaSitemap /> },
  ];

  const isRouteActive = (path) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  const handleNavClick = (path) => {
    navigate(path);
    setDrawerOpen(false);
  };

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
      {/* ================= DESKTOP ================= */}
      <HStack
        spacing={6}
        justify="center"
        display={{ base: "none", md: "flex" }}
      >
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
              onClick={() => handleNavClick(item.path)}
            >
              {item.name}
            </Button>
          );
        })}
      </HStack>

      {/* ================= MOBILE ================= */}
      <Box
        display={{ base: "flex", md: "none" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box fontWeight="bold" fontSize="lg">
          Portfolio
        </Box>

        <IconButton
          icon={<FaBars />}
          aria-label="Menu"
          onClick={() => setDrawerOpen(true)}
          variant="outline"
        />
      </Box>

      {/* ================= MOBILE DRAWER ================= */}
      <Drawer
        placement="right"
        isOpen={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <DrawerOverlay />
        <DrawerContent bg={bg}>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack spacing={4} mt={10}>
              {navItems.map((item) => {
                const active = isRouteActive(item.path);
                return (
                  <Button
                    key={item.path}
                    leftIcon={item.icon}
                    w="100%"
                    justifyContent="flex-start"
                    size="lg"
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
                      transform: "scale(1.03)",
                      bg: active
                        ? activeBg
                        : "linear-gradient(90deg, #38bdf8, #22c55e)",
                      color: "white",
                    }}
                    transition="all 0.2s ease"
                    onClick={() => handleNavClick(item.path)}
                  >
                    {item.name}
                  </Button>
                );
              })}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
