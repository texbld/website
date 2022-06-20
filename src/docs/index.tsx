import { Code, Divider, Text } from "@chakra-ui/react";
import React from "react";

function H1(props: { children: React.ReactNode }) {
  return (
    <Text fontSize={40} fontWeight="bold">
      {props.children}
    </Text>
  );
}

function H2(props: { children: React.ReactNode }) {
  return (
    <Text fontSize={30} fontWeight="bold">
      {props.children}
    </Text>
  );
}

function H3(props: { children: React.ReactNode }) {
  return (
    <Text fontSize={25} fontWeight="bold">
      {props.children}
    </Text>
  );
}

function H4(props: { children: React.ReactNode }) {
  return (
    <Text fontSize={20} fontWeight="bold">
      {props.children}
    </Text>
  );
}

function P(props: { children: React.ReactNode }) {
  return <Text>{props.children}</Text>;
}

function CODE(props: { children: React.ReactNode }) {
  return <Code colorScheme={"blue"}>{props.children}</Code>;
}

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  hr: () => <Divider />,
  p: P,
  code: CODE,
};

export default components as any;
