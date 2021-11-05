import React from "react";
import "../App.scss";
import {
  Box,
  Grid,
  GridItem,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";
import { Desk, Lamp } from "./Card";

export const Brightness: React.FC<{}> = () => {
  return (
    <Grid
      h="400px"
      w="250px"
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(2, 1fr)"
      gap={5}
      ml={[5, 125, 250]}
      mr={[5, 125, 250]}
      bg={"gray.800"}
      borderRadius={10}
      padding={5}
    >
      <GridItem colSpan={2}>
        <Text fontSize={"3xl"}>Brightness Control</Text>
      </GridItem>
      <GridItem>
        <Text>Lamp</Text>
        <Slider
          defaultValue={70}
          min={0}
          max={100}
          step={10}
          size={"lg"}
          onChangeEnd={(val) => Lamp.setBrightness(val)}
          orientation="vertical"
          minH={"200"}
          aria-label={"Lamp"}
        >
          <SliderTrack bg="blue.500">
            <Box position="relative" right={10} />
            <SliderFilledTrack bg="blue" />
          </SliderTrack>
          <SliderThumb boxSize={6} />
        </Slider>
      </GridItem>
      <GridItem>
        <Text>Desk</Text>
        <Slider
          defaultValue={70}
          min={0}
          max={100}
          step={10}
          size={"lg"}
          onChangeEnd={(val) => Desk.setBrightness(val)}
          orientation="vertical"
          minH={"200"}
          aria-label={"Lamp"}
        >
          <SliderTrack bg="blue.500">
            <Box position="relative" right={10} />
            <SliderFilledTrack bg="blue" />
          </SliderTrack>
          <SliderThumb boxSize={6} />
        </Slider>
      </GridItem>
    </Grid>
  );
};
