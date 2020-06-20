import React from "react";
import { Button, Grid } from "@material-ui/core";

function SprinklerButton(props) {
  const { callApi } = props;
  return (
    <Button
      onClick={() => callApi()}
      size="large"
      color="primary"
      fullWidth={true}
    >
      Trigger
    </Button>
  );
}

export default SprinklerButton;
