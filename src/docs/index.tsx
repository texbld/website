import React from "react";
import { Route, Routes } from "react-router-dom";
import pages from "./routes";
import components from "./components";
import {
  Box,
  Text,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Link,
  Stack,
  StackDivider,
  useDisclosure,
  useMediaQuery,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { Icon } from "../fontawesome";
import { Link as RouterLink } from "react-router-dom";

function NotFound() {
  return (
    <Heading fontWeight={"bold"} fontSize={40}>
      Requested Resource Not Found
    </Heading>
  );
}
const Page = () => (
  <Container>
    <Routes>
      {pages.map((page) => (
        <Route
          path={page.path === "" ? undefined : page.path}
          index={page.path === ""}
          key={page.path}
          element={<page.component components={components} />}
        />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Container>
);

const Toc = () => (
  <Stack gap={2} direction={"column"} position="sticky" top="0">
    {pages.map((page) => (
      <Link as={RouterLink} to={"/docs/" + page.path}>
        <Text fontWeight={"bold"}>{page.title}</Text>
      </Link>
    ))}
  </Stack>
);

function Hamburger() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box>
        <Button onClick={onOpen}>
          <Icon icon="fa-solid fa-bars" />
        </Button>
      </Box>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
        <DrawerOverlay width={10} />
        <DrawerContent p={3}>
          <DrawerCloseButton />
          <DrawerHeader>
            <Link as={RouterLink} to="/" onClick={onClose}>
              TeXbld
            </Link>
          </DrawerHeader>
          <DrawerBody>
            {pages.map((page) => (
              <Link
                as={RouterLink}
                to={"/docs/" + page.path}
                key={"/docs/" + page.path}
                onClick={onClose}
              >
                <Text fontWeight={"bold"}>{page.title}</Text>
              </Link>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default function docs() {
  const gray = useColorModeValue("gray.200", "gray.700");
  const [isWide] = useMediaQuery("(min-width: 600px)");
  return isWide ? (
    <Stack
      m={2}
      p={3}
      direction={"row"}
      justify="center"
      divider={<StackDivider borderColor={gray} />}
    >
      <Toc />
      <Page />
    </Stack>
  ) : (
    <Stack m={2} p={3} direction={"column"}>
      <Hamburger />
      <Page />
    </Stack>
  );
}
