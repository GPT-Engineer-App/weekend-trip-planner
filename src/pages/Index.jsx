import React, { useState } from "react";
import { Box, Container, Heading, VStack, Input, Textarea, Button, useToast, SimpleGrid, Text, Image } from "@chakra-ui/react";
import { FaPlus, FaMusic, FaLightbulb, FaInfoCircle } from "react-icons/fa";

const Index = () => {
  const [idea, setIdea] = useState("");
  const [music, setMusic] = useState("");
  const toast = useToast();

  const handleIdeaSubmit = () => {
    toast({
      title: "Idea submitted!",
      description: `"${idea}" has been added to the list of ideas.`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setIdea("");
  };

  const handleMusicSubmit = () => {
    toast({
      title: "Music suggestion submitted!",
      description: `"${music}" has been added to the playlist.`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setMusic("");
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading as="h1" size="xl">
            Autumn Weekend Trip
          </Heading>
          <Text mt={2} fontSize="lg">
            Let's plan an unforgettable adventure!
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box as="section">
            <Heading as="h3" size="md" mb={4} display="flex" alignItems="center">
              <FaLightbulb style={{ marginRight: "8px" }} />
              Idea Suggestions
            </Heading>
            <Input placeholder="Enter your idea..." value={idea} onChange={(e) => setIdea(e.target.value)} mb={2} />
            <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={handleIdeaSubmit}>
              Submit Idea
            </Button>
          </Box>

          <Box as="section">
            <Heading as="h3" size="md" mb={4} display="flex" alignItems="center">
              <FaMusic style={{ marginRight: "8px" }} />
              Music Playlist Suggestions
            </Heading>
            <Input placeholder="Artist - Song Title" value={music} onChange={(e) => setMusic(e.target.value)} mb={2} />
            <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={handleMusicSubmit}>
              Add to Playlist
            </Button>
          </Box>
        </SimpleGrid>

        <Box as="section" w="full">
          <Heading as="h3" size="md" mb={4} display="flex" alignItems="center">
            <FaInfoCircle style={{ marginRight: "8px" }} />
            Trip Info
          </Heading>
          <Text fontSize="md" mb={4}>
            This autumn, we're heading out to enjoy the beauty of nature together. Pack your bags, bring your best vibes, and get ready for a weekend filled with laughter, camping, hiking, and memorable moments.
          </Text>
          <Text fontSize="md" mb={4}>
            📅 Date: October 14-16, 2023
          </Text>
          <Text fontSize="md" mb={4}>
            📍 Location: To be decided - your suggestions matter!
          </Text>
          <Text fontSize="md" mb={4}>
            🚗 Transportation: Carpooling arrangements will be made closer to the date.
          </Text>
          <Text fontSize="md" mb={4}>
            🎒 What to bring: A warm sleeping bag, hiking boots, waterproof jacket, flashlight, and your favorite snacks.
          </Text>
          <Image src="https://images.unsplash.com/photo-1613985212734-166ffb5a513d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhdXR1bW4lMjBmb3Jlc3R8ZW58MHx8fHwxNzEwMjUwNzU3fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
