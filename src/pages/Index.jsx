import { Container, VStack, Box, Heading, Text, Button, Image, HStack, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Box textAlign="center">
          <Image
            borderRadius="full"
            boxSize="150px"
            src="https://via.placeholder.com/150"
            alt="Profile Picture"
            mb={4}
          />
          <Heading as="h1" size="2xl" mb={2}>John Doe</Heading>
          <Text fontSize="lg" color="gray.600">Full Stack Developer</Text>
        </Box>
        <Text fontSize="md" textAlign="center" maxW="lg">
          Passionate about building scalable web applications and always eager to learn new technologies. Let's build something amazing together!
        </Text>
        <HStack spacing={4}>
          <IconButton
            as="a"
            href="https://github.com"
            aria-label="GitHub"
            icon={<FaGithub />}
            size="lg"
          />
          <IconButton
            as="a"
            href="https://linkedin.com"
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            size="lg"
          />
          <IconButton
            as="a"
            href="https://twitter.com"
            aria-label="Twitter"
            icon={<FaTwitter />}
            size="lg"
          />
        </HStack>
        <Button colorScheme="blue" size="lg">Get in Touch</Button>
      </VStack>
    </Container>
  );
};

export default Index;