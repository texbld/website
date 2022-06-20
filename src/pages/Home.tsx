import {
  Box,
  Button,
  Center,
  Code,
  Container,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import colors from "../colors";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Home() {
  const blue = colors.blue();
  const navigate = useNavigate();
  return (
    <Box m={2}>
      <Center marginBottom={5}>
        <Heading
          fontWeight={"bold"}
          fontSize={40}
          maxWidth="50rem"
          textAlign={"center"}
        >
          A Modern Build Tool for Your Papers.
        </Heading>
      </Center>
      <Center gap={3}>
        <Button bg={blue} onClick={() => navigate("/docs")}>
          {" "}
          Get Started
        </Button>
      </Center>
      <Center>
        <Box>
          <Card title="Isolated." icon="fa-brands fa-docker">
            TeXbld uses docker, so that you never have to worry about installing
            exotic packages on your system.
          </Card>
          <Card title="Immutable." icon="fa-solid fa-lock">
            Checks and Hashes ensure that your image is built the same way,
            every time.
          </Card>
          <Card title="Shareable." icon="fa-solid fa-cloud-arrow-up">
            Want to make your images accessible to others? Just upload them to a
            GitHub repository, and anyone using your image will experience
            consistent builds.
          </Card>
        </Box>
      </Center>
    </Box>
  );
}
