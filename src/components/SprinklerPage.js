import React from "react";
import { Grid } from "@material-ui/core";

import SprinkerDisplay from "./SprinklerDisplay";

const SprinklerPage = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid container item justify="space-evenly">
          <SprinkerDisplay fullName="NorthWest" shortName="nw" />
          <SprinkerDisplay fullName="NorthEast" shortName="ne" />
        </Grid>
        <Grid container item justify="space-evenly">
          <SprinkerDisplay fullName="CentreWest" shortName="cw" />
          <SprinkerDisplay fullName="CentreEast" shortName="ce" />
        </Grid>
        <Grid container item justify="space-evenly">
          <SprinkerDisplay fullName="Southest" shortName="sw" />
          <SprinkerDisplay fullName="SouthEast" shortName="se" />
        </Grid>
      </Grid>
    </>
  );
};

export default SprinklerPage;
