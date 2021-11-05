import * as React from "react";
import { Brightness } from "./components/Brightness";
import ColorChange from "./components/ColorChange";
import { Temp } from "./components/Temp";
import "./App.scss";
import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";

export default function App() {
  return (
    <ChakraProvider>
      <Grid
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={4}
        alignItems={"center"}
        bgColor={"black"}
        textColor={"white"}
      >
        <GridItem colSpan={1} rowSpan={1}>
          <Brightness />
        </GridItem>
        <GridItem colSpan={1} rowSpan={1}>
          <Temp />
        </GridItem>
        <GridItem rowSpan={1}>
          <ColorChange />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}
