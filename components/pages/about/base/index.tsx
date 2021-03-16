import {
  Box,
  Grid,
  Heading,
  HStack,
  Link,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { FC, useState, useEffect } from "react";
import Typist from 'react-typist';
import { IoMdMail, IoLogoInstagram, IoLogoTwitter, IoLogoLinkedin, IoLogoGithub } from "react-icons/io";

const Page: FC = () => {
  const { colorMode } = useColorMode();
  const cardBgColor = { light: "white", dark: "gray.900" };
  const cardColor = { light: "gray.900", dark: "white" };

  const headingNode = () => {
    const [count, setCount] = useState(1);

    useEffect(() => {
      setCount(1);
    }, [count]);

    return (
      <HStack spacing={4} alignItems="center">
        <Box
          bg={cardColor[colorMode]}
          color={cardBgColor[colorMode]}
          rounded="full"
          p={1}
          w={200}
          h={200}
        >
          <Image
            src="/images/common/avatar.png"
            alt="Chen Liang"
            height={200}
            width={200}
            quality={100}
            priority
          />
        </Box>
        <Box>
          <VStack spacing={2} align="left">
            <Heading as="h1" size="xl">
              Chen Liang
            </Heading>
            <Text>About Me</Text>
            <Text fontWeight="bold" style={{display: "flex"}}>
              I am a &nbsp;
              <Typist key={count} avgTypingDelay={50} onTypingDone={() => setCount(0)}>
                <span> Software Engineer ⚙️ </span>
                <Typist.Backspace count={21} delay={200} />
                <span> Full Stack Developer 💻 </span>
                <Typist.Backspace count={27} delay={200} />
                <span> Mentor 👨‍🏫 </span>
                <Typist.Backspace count={10} delay={200} />
              </Typist>
            </Text>
          </VStack>
        </Box>
      </HStack>
    );
  };

  const bioDescriptionNode = () => {
    const year = new Date(Date.now() - new Date("02/15/1995").getTime()).getUTCFullYear();  
    const age = Math.abs(year - 1970);  

    return (
      <Box className="article">
        <Text>
          I'm a {age}-year-old, Chinese-Canadian.
        </Text>
        <Text>
          My passion is to work with talented individuals and solve complex problems with simple, elegant solutions.
        </Text>
        <Text>
          In my career, I have sought out diverse opportunities to apply my technical skills.
        </Text>
        <Text>
          I also enjoy: 💻 | 🍺 | 🏀 | ☕️
        </Text>
      </Box>
    );
  };

  const socialLinksNode = () => {
    return (
      <VStack spacing={4} align="left">
        <VStack spacing={8} align="left">
          <Heading as="h2" size="md">
            Social Media
          </Heading>
        </VStack>
        <Box d="flex" alignItems="center">
          <HStack spacing={4}>
            <Link
              py={2}
              px={4}
              href="mailto:hello@chenliang.dev"
              rounded="md"
              bg="#080808"
              color="#fff"
              fontWeight="bold"
              isExternal
            >
              <HStack spacing={2} alignItems="center">
                <Box as={IoMdMail} /> <Text>Mail</Text>
              </HStack>
            </Link>
            <Link
              py={2}
              px={4}
              href="https://instagram.com/mr_chenliang"
              rounded="md"
              bg="radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)"
              color="#fff"
              fontWeight="bold"
              isExternal
            >
              <HStack spacing={2} alignItems="center">
                <Box as={IoLogoInstagram} /> <Text>Instagram</Text>
              </HStack>
            </Link>
            <Link
              py={2}
              px={4}
              href="https://twitter.com/mr_chenliang"
              rounded="md"
              bg="#08a0e9"
              color="#fff"
              fontWeight="bold"
              isExternal
            >
              <HStack spacing={2} alignItems="center">
                <Box as={IoLogoTwitter} /> <Text>Twitter</Text>
              </HStack>
            </Link>
            <Link
              py={2}
              px={4}
              href="https://www.linkedin.com/in/mrchenliang/"
              rounded="md"
              bg="#0e76a8"
              color="#fff"
              fontWeight="bold"
              isExternal
            >
              <HStack spacing={2} alignItems="center">
                <Box as={IoLogoLinkedin} /> <Text>LinkedIn</Text>
              </HStack>
            </Link>
            <Link
              py={2}
              px={4}
              href="https://www.github.com/mrchenliang/"
              rounded="md"
              bg="#333"
              color="#fff"
              fontWeight="bold"
              isExternal
            >
              <HStack spacing={2} alignItems="center">
                <Box as={IoLogoGithub} /> <Text>Github</Text>
              </HStack>
            </Link>
          </HStack>
        </Box>
      </VStack>
    );
  };

  return (
    <Box maxW="2xl" mx="auto" px={4} py={8}>
      <Grid templateColumns="1fr">
        <Box as="section">
          <VStack spacing={8} align="left">
            {headingNode()}
            {bioDescriptionNode()}
            {socialLinksNode()}
          </VStack>
        </Box>
      </Grid>
    </Box>
  );
};

export default Page;
