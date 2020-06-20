import React from "react";
import { Button, Grid } from "@material-ui/core";

function SprinklerButton(props) {
  const { shortName, callApi, children } = props;
  return (
    <Grid item xs={6} spacing={3}>
      <Button
        onClick={() => callApi(shortName)}
        size="large"
        variant="contained"
        color="primary"
      >
        {children}
      </Button>
    </Grid>
  );
}

export default SprinklerButton;
