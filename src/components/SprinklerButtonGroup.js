import React from "react";
import { Grid } from "@material-ui/core";

import SprinklerButton from "./SprinklerButton";

function SprinklerButtonGroup(props) {
  const sprinklers = [
    {
      fullName: "NorthEast",
      shortName: "ne",
    },
    {
      fullName: "NorthWest",
      shortName: "nw",
    },
    {
      fullName: "MiddleEast",
      shortName: "me",
    },
    {
      fullName: "MiddleWest",
      shortName: "me",
    },
    {
      fullName: "SouthEast",
      shortName: "se",
    },
    {
      fullName: "SouthWest",
      shortName: "sw",
    },
  ];
  const sprinklerButtons = sprinklers.map(({ fullName, shortName }, i) => {
    return (
      <SprinklerButton key={i} fullName={fullName} shortName={shortName} />
    );
  });
  return (
    <Grid container spacing={1}>
      {sprinklerButtons}
    </Grid>
  );
}

export default SprinklerButtonGroup;
