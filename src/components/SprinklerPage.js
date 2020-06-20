import React from "react";
import { Grid } from "@material-ui/core";

import SprinkerDisplay from "./PumpDisplay";
import SprinkerControl from "./SprinklerControl";

const SprinklerPage = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid container item justify="space-evenly" alignItems="center">
          <SprinkerDisplay name="Pump" />
        </Grid>
        <Grid container item justify="space-evenly" alignItems="center">
          <SprinkerControl fullName="North" shortName="north" />
          <SprinkerControl fullName="Centre" shortName="middle" />
          <SprinkerControl fullName="South" shortName="south" />
        </Grid>
        <Grid container item justify="space-evenly" alignItems="center">
          <SprinkerControl fullName="East" shortName="east" />
          <SprinkerControl fullName="West" shortName="west" />
        </Grid>
      </Grid>
    </>
  );
};

export default SprinklerPage;
