import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import InvertColorsIcon from "@material-ui/icons/InvertColors";

import SprinkerButton from "./SprinklerButton";
import { useAuth0 } from "../react-auth0-spa";
import { getApi, putApi } from "../utils/callApi";

function SprinklerDisplay(props) {
  const { fullName, shortName } = props;
  const [running, setRunning] = useState(false);
  const { getIdTokenClaims } = useAuth0();

  const triggerSprinkler = async () => {
    const responseData = await getApi(getIdTokenClaims, shortName);
    const { running } = responseData;
    setRunning(running);
  };

  return (
    <Box width={1 / 4}>
      <Card>
        <CardHeader title={fullName} />
        <CardContent>
          {running && <InvertColorsIcon color="primary" />}
          {!running && <InvertColorsIcon color="secondary" />}
        </CardContent>
      </Card>
    </Box>
  );
}

export default SprinklerDisplay;
