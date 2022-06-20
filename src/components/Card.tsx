import { Box, Center, Flex, Text } from "@chakra-ui/react";
import colors from "../colors";
import React from "react";
import { Icon } from "../fontawesome";

export default function Card(props: {
  icon: string;
  title: string;
  children?: React.ReactNode;
}) {
  const gray = colors.gray();
  const blue = colors.blue();
  return (
    <Box m={5} p={2} bg={gray} maxWidth="24rem" borderRadius={5}>
      <Flex m={2} gap={3} justify="left">
        <Center borderRadius={5} padding={1} fontSize={25} bg={blue}>
          <Icon icon={props.icon}></Icon>
        </Center>
        <Text fontSize={25} fontWeight="bold">
          {props.title}
        </Text>
      </Flex>
      <Box m={2}>{props.children}</Box>
    </Box>
  );
}
