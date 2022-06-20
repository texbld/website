import {
  Box,
  Button,
  Flex,
  Text,
  Link,
  Center,
  useColorMode,
  useMediaQuery,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  DrawerHeader,
} from "@chakra-ui/react";
import { Link as RouterLink, NavLink, useNavigate } from "react-router-dom";
import { Icon } from "../fontawesome";

const navbarlinks = [
  {
    name: "About",
    to: "/about",
  },
  {
    name: "Docs",
    to: "/docs",
  },
];

function NavLinks() {
  return (
    <>
      {navbarlinks.map((link) => (
        <Link as={RouterLink} to={link.to} key={link.name}>
          <Text fontWeight={"bold"}>{link.name}</Text>
        </Link>
      ))}
    </>
  );
}

function Hamburger() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>
        <Icon icon="fa-solid fa-bars" />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay width={10} />
        <DrawerContent p={3}>
          <DrawerCloseButton />
          <DrawerHeader>
            <Link as={RouterLink} to="/" onClick={onClose}>
              TeXbld
            </Link>
          </DrawerHeader>
          <DrawerBody>
            {navbarlinks.map((link) => (
              <Link
                as={RouterLink}
                to={link.to}
                key={link.name}
                onClick={onClose}
              >
                <Text fontWeight={"bold"}>{link.name}</Text>
              </Link>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default function Navbar() {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  const [isWide] = useMediaQuery("(min-width: 600px)");
  return (
    <Flex
      paddingRight="5"
      paddingLeft="5"
      paddingTop="2"
      paddingBottom="2"
      gap={5}
      justify="space-between"
    >
      <Center gap={3}>
        <Button onClick={() => navigate("/")}>
          <Icon icon="fa-solid fa-house" />
        </Button>
        <Button onClick={() => toggleColorMode()}>
          {colorMode == "dark" ? (
            <Icon icon="fa-solid fa-sun" />
          ) : (
            <Icon icon="fa-solid fa-moon" />
          )}
        </Button>
      </Center>
      <Center gap={3}>{isWide ? <NavLinks /> : <Hamburger />}</Center>
    </Flex>
  );
}
