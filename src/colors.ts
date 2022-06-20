import { useColorModeValue } from "@chakra-ui/react";

const blue = () => useColorModeValue("blue.300", "blue.500");
const gray = () => useColorModeValue("gray.100", "gray.700");

export default {
  blue,
  gray,
};
