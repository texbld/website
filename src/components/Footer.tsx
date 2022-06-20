import { Box, Center, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { Icon } from "../fontawesome";

export default function Footer() {
  const year = new Date().getFullYear();
  const textcolor = useColorModeValue("gray.500", "gray.400");
  return (
    <Center gap={3} p={5}>
      <Link href="https://github.com/texbld" isExternal fontSize={25}>
        <Icon icon={"fa-brands fa-github"} />
      </Link>
      <Link href="https://pypi.org/project/texbld/" isExternal fontSize={25}>
        <Icon icon={"fa-brands fa-python"} />
      </Link>
      <Text color={textcolor}>&copy; 2022-{year} Juni C. Kim</Text>
    </Center>
  );
}
