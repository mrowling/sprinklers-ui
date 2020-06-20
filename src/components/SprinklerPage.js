import React from "react";
import { Grid } from "@material-ui/core";

import SprinkerDisplay from "./SprinklerDisplay";

const SprinklerPage = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid container item justify="space-evenly">
          <SprinkerDisplay fullName="NW" shortName="nw" />
          <SprinkerDisplay fullName="NE" shortName="ne" />
          <SprinkerDisplay fullName="N" shortName="northGroup" />
        </Grid>
        <Grid container item justify="space-evenly">
          <SprinkerDisplay fullName="CW" shortName="cw" />
          <SprinkerDisplay fullName="CE" shortName="ce" />
          <SprinkerDisplay fullName="C" shortName="centreGroup" />
        </Grid>
        <Grid container item justify="space-evenly">
          <SprinkerDisplay fullName="SW" shortName="sw" />
          <SprinkerDisplay fullName="SE" shortName="se" />
          <SprinkerDisplay fullName="S" shortName="southGroup" />
        </Grid>
        <Grid container item justify="space-evenly">
          <SprinkerDisplay fullName="E" shortName="eastGroup" />
          <SprinkerDisplay fullName="W" shortName="westGroup" />
          <SprinkerDisplay fullName="All" shortName="allGroup" />
        </Grid>
      </Grid>
    </>
  );
};

export default SprinklerPage;
