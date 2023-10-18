import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/dashboard");
  };
  return (
    <Box className="flex flex-col justify-center items-center">
      <Text className="text-[2rem] md:text-[4rem]">WELCOME TO REACT ❤️</Text>
      <Text className="p-3 text-center text-xs md:text-[1rem]">
        A REACT, RUDUXTOOLKIT, REACT-ROUTER-DOM, REACT-ICONS, TAILWIND, CHARKRA
        UI, VITEST, API LAYER BAREBONES APPLICATION WITH LAYOUTTING ALREADY
        IMPLEMENTED.
      </Text>
      <Button onClick={handleNavigate} colorScheme="twitter">
        Go To Dashboard
      </Button>
    </Box>
  );
};

export default Home;
