import React from "react";
import { Grid } from "@material-ui/core";

import SprinkerDisplay from "./SprinklerDisplay";

const SprinklerPage = () => {
  return (
    <>
      <Grid container>
        <SprinkerDisplay fullName="NorthWest" shortName="nw" />
        <SprinkerDisplay fullName="NorthEast" shortName="ne" />
      </Grid>
    </>
  );
};

export default SprinklerPage;
