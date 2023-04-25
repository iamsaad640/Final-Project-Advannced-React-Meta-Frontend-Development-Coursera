import { Heading, Image, Text, VStack, Box, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box maxW="sm" bg="white" borderRadius="lg">
      <Image src={imageSrc} width="100%" alt="Dan Abramov" borderRadius="lg" />
      <VStack align="left" margin={3}>
        <Heading size="md" color="black">
          {title}
        </Heading>
        <Text color="black" fontSize="xs">
          {description}
        </Text>
        <Box>
          <Button
            rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
            color="black"
            variant="link"
            size="sm"
          >
            See more
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default Card;
