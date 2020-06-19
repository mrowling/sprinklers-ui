import React from "react";
import { Grid } from "@material-ui/core";

import SprinklerButton from "./SprinklerButton";

function SprinklerButtonGroup(props) {
  const { sprinklers } = props;
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
