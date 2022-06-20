import { Box, Divider, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import Footer from "../components/Footer";

export default function About() {
  return (
    <Box m={2} p={3}>
      <Heading fontWeight={"bold"} fontSize={40}>
        About
      </Heading>
      <Divider />
      <Box m={2}>
        <Text>
          TeXbld was first developed by Juni Kim, who, while writing virtually
          all of his assignments in markup languages during his sophomore year,
          faced the challenge of reproducing his builds across various operating
          systems.
        </Text>
        <Text>
          At first,{" "}
          <Link isExternal href="https://github.com/junikimm717/mktex">
            mktex
          </Link>
          , a shell script which could scaffold a simple project from a
          template, was written. This first implementation, however, relied on a
          Makefile whose commands were run directly on the system, leaving the
          build process vulnerable to arbitrary system changes.
        </Text>
        <Text>
          Docker extensions were then added to mktex so that one could compile a
          paper in an isolated container with its own pre-determined
          dependencies. Although somewhat successful at yielding reproducible
          papers, the docker image (junikimm717/mktex-build) was a single point
          of failure. This image was also extremeley bloated since it had to be
          capable of building every type of paper, instead of being specialized.
        </Text>
        <Text>
          TeXbld is the next iteration on this concept, and aims to preserve
          image immutability (by building them on the system's docker daemon)
          and reliably scaffold new projects from images.
        </Text>
      </Box>
      <Footer />
    </Box>
  );
}
