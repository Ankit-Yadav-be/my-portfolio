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
  FaBrain,
  FaChevronDown,
} from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { colorMode } = useColorMode();

  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);

  const bg = useColorModeValue("whiteAlpha.900", "gray.900");
  const activeBg = useColorModeValue("blue.500", "teal.400");

  // 🔥 NAV ITEMS WITH AI + DEEP LEARNING
  const navItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Web", path: "/problem-list", icon: <FaCode /> },
    { name: "DSA", path: "/dsa", icon: <FaLaptopCode /> },
    { name: "DBMS", path: "/dbms", icon: <FaDatabase /> },
    {
      name: "AI",
      icon: <FaBrain />,
      children: [{ name: "Deep Learning", path: "/ai/deep-learning" }],
    },
    { name: "System Design", path: "/system-design", icon: <FaSitemap /> },
  ];

  const isRouteActive = (path) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  const handleNavClick = (path) => {
    navigate(path);
    setDrawerOpen(false);
    setAiOpen(false);
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
      {/* ================= DESKTOP NAV ================= */}
      <HStack
        spacing={6}
        justify="center"
        display={{ base: "none", md: "flex" }}
      >
        {navItems.map((item) => {
          // ===== AI DROPDOWN =====
          if (item.children) {
            return (
              <Box key={item.name} position="relative" role="group">
                <Button
                  leftIcon={item.icon}
                  rightIcon={<FaChevronDown />}
                  variant="ghost"
                  fontWeight="semibold"
                  color={
                    colorMode === "dark"
                      ? "whiteAlpha.900"
                      : "blackAlpha.900"
                  }
                  _hover={{
                    bg: "linear-gradient(90deg, #38bdf8, #22c55e)",
                    color: "white",
                  }}
                >
                  {item.name}
                </Button>

                {/* Dropdown */}
                <Box
                  position="absolute"
                  top="100%"
                  left="0"
                  mt={2}
                  bg={bg}
                  boxShadow="xl"
                  borderRadius="lg"
                  minW="220px"
                  opacity={0}
                  visibility="hidden"
                  transform="translateY(10px)"
                  transition="all 0.25s ease"
                  _groupHover={{
                    opacity: 1,
                    visibility: "visible",
                    transform: "translateY(0)",
                  }}
                >
                  <VStack align="stretch" p={2}>
                    {item.children.map((child) => (
                      <Button
                        key={child.path}
                        justifyContent="flex-start"
                        variant="ghost"
                        fontWeight="medium"
                        _hover={{
                          bg: "teal.400",
                          color: "white",
                        }}
                        onClick={() => handleNavClick(child.path)}
                      >
                        {child.name}
                      </Button>
                    ))}
                  </VStack>
                </Box>
              </Box>
            );
          }

          // ===== NORMAL NAV ITEM =====
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

      {/* ================= MOBILE TOP BAR ================= */}
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
                // ===== AI COLLAPSIBLE =====
                if (item.children) {
                  return (
                    <Box key={item.name} w="100%">
                      <Button
                        leftIcon={item.icon}
                        rightIcon={<FaChevronDown />}
                        w="100%"
                        justifyContent="space-between"
                        size="lg"
                        variant="ghost"
                        onClick={() => setAiOpen(!aiOpen)}
                      >
                        {item.name}
                      </Button>

                      {aiOpen && (
                        <VStack align="stretch" pl={6} mt={2}>
                          {item.children.map((child) => (
                            <Button
                              key={child.path}
                              variant="ghost"
                              justifyContent="flex-start"
                              onClick={() => handleNavClick(child.path)}
                            >
                              {child.name}
                            </Button>
                          ))}
                        </VStack>
                      )}
                    </Box>
                  );
                }

                // ===== NORMAL MOBILE ITEM =====
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
