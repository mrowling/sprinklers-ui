import React from "react";
import { Grid } from "@material-ui/core";

import SprinkerDisplay from "./SprinklerDisplay";
import SprinkerControl from "./SprinklerControl";

const SprinklerPage = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid container item justify="space-evenly" alignItems="center">
          <SprinkerDisplay fullName="NW" shortName="nw" />
          <SprinkerDisplay fullName="NE" shortName="ne" />
          <SprinkerControl fullName="N" shortName="nw" />
        </Grid>
        <Grid container item justify="space-evenly" alignItems="center">
          <SprinkerDisplay fullName="CW" shortName="cw" />
          <SprinkerDisplay fullName="CE" shortName="ce" />
          <SprinkerControl fullName="C" shortName="centreGroup" />
        </Grid>
        <Grid container item justify="space-evenly" alignItems="center">
          <SprinkerDisplay fullName="SW" shortName="sw" />
          <SprinkerDisplay fullName="SE" shortName="se" />
          <SprinkerControl fullName="S" shortName="southGroup" />
        </Grid>
        <Grid container item justify="space-evenly" alignItems="center">
          <SprinkerControl fullName="E" shortName="eastGroup" />
          <SprinkerControl fullName="W" shortName="westGroup" />
        </Grid>
      </Grid>
    </>
  );
};

export default SprinklerPage;
