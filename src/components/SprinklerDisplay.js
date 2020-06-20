import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";

import SprinkerButton from "./SprinklerButton";
import { useAuth0 } from "../react-auth0-spa";
import { getApi, putApi } from "../utils/callApi";

function SprinklerDisplay(props) {
  const { fullName, shortName } = props;
  const [running, setRunning] = useState(false);
  const { getIdTokenClaims } = useAuth0();

  const triggerSprinkler = async () => {
    const responseData = await putApi(getIdTokenClaims, shortName);
    const { running } = responseData;
    setRunning(running);
  };

  return (
    <Box width={1 / 4}>
      <Card>
        <CardHeader title={fullName} />
        <CardContent>
          {running && <div>Active</div>}
          {!running && <div>Inactive</div>}
        </CardContent>
        <CardActions>
          <SprinkerButton callApi={triggerSprinkler} />
        </CardActions>
      </Card>
    </Box>
  );
}

export default SprinklerDisplay;
