import React from "react";
import { CustomPicker } from "react-color";
import { Container, SliderThumb } from "@chakra-ui/react";
import { Checkboard, Hue } from "react-color/lib/components/common";
import { Lamp } from "./Card";

class MyColorPicker extends React.Component {
  handleChange(color: { hex: any }, event: any) {
    // color = {
    //   hex: '#333',
    //   rgb: {
    //     r: 51,
    //     g: 51,
    //     b: 51,
    //     a: 1,
    //   },
    //   hsl: {
    //     h: 0,
    //     s: 0,
    //     l: .20,
    //     a: 1,
    //   },
    // }
    Lamp.setColor(color.hex);
  }

  render() {
    return (
      <Container>
        <div>Color Picker</div>
        <div style={{ position: "relative", width: 256, height: 128 }}>
          <Checkboard size={8} white="#fff" grey="#333" />
        </div>
        <div style={{ position: "relative" }}>
          <Hue
            {...this.props}
            pointer={SliderThumb}
            onChange={this.handleChange}
            direction={"horizontal"}
          />
        </div>
      </Container>
    );
  }
}

export default CustomPicker(MyColorPicker);
