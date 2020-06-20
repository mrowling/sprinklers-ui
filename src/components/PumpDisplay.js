import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import InvertColorsIcon from "@material-ui/icons/InvertColors";

import SprinkerButton from "./SprinklerButton";
import { useAuth0 } from "../react-auth0-spa";
import { getApi } from "../utils/pumpApi";

function PumpDisplay(props) {
  const { name } = props;
  const [running, setRunning] = useState(false);
  const { getIdTokenClaims } = useAuth0();

  const getState = async () => {
    const responseData = await getApi(getIdTokenClaims);
    const { running } = responseData;
    setRunning(running);
  };

  return (
    <Box width={1 / 4}>
      <Card>
        <CardHeader title={name} />
        <CardContent>
          {running && <InvertColorsIcon color="primary" />}
          {!running && <InvertColorsIcon color="secondary" />}
        </CardContent>
        <CardActions>
          <SprinkerButton callApi={getState} />
        </CardActions>
      </Card>
    </Box>
  );
}

export default PumpDisplay;
