import React from "react";
import {
  Grid,
  GridItem,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";
import "../App.scss";
import { Desk, Lamp } from "./Card";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = () => {
  return (
    <Grid
      h="250px"
      w="250px"
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(1, 1fr)"
      gap={5}
      m={10}
      bg={"blackAlpha.400"}
      borderRadius={10}
      padding={5}
    >
      <GridItem>
        <Text fontSize={"3xl"}>On/Off Control</Text>
      </GridItem>
      <GridItem>
        <Slider
          defaultValue={0}
          max={1}
          w={20}
          onChangeEnd={(val) => {
            if (val === 0) Lamp.turnOff();
            if (val === 1) Lamp.turnOn();
          }}
        >
          <SliderTrack bg="blue.500" h={7} borderRadius={10}>
            <SliderFilledTrack bg="blue" />
          </SliderTrack>
          <SliderThumb borderRadius={10} h={7} w={10} />
        </Slider>
      </GridItem>
      <GridItem>
        <Slider
          defaultValue={0}
          max={1}
          w={20}
          onChangeEnd={(val) => {
            if (val === 0) Desk.turnOff();
            if (val === 1) Desk.turnOn();
          }}
        >
          <SliderTrack bg="blue.500" h={7} borderRadius={10}>
            <SliderFilledTrack bg="blue" />
          </SliderTrack>
          <SliderThumb borderRadius={10} h={7} w={10} />
        </Slider>
      </GridItem>
    </Grid>
  );
};
