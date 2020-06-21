import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import InvertColorsIcon from "@material-ui/icons/InvertColors";
import InvertColorsOffIcon from "@material-ui/icons/InvertColorsOff";

import SprinkerButton from "./SprinklerButton";
import { useAuth0 } from "../react-auth0-spa";
import { putApi } from "../utils/sprinklerApi";

function SprinklerControl(props) {
  const {
    activeIcons,
    displayActive,
    buttonActive,
    fullName,
    shortName,
    setSnackBarMessage,
  } = props;
  const { getIdTokenClaims } = useAuth0();

  const triggerSprinkler = async () => {
    const responseData = await putApi(getIdTokenClaims, `/${shortName}`);
    const { success, message } = responseData;
    const defaultMessage = success ? "Success" : "An Error Occured";
    const snackBarMessage = {
      message: message || defaultMessage,
      severity: success ? "success" : "error",
    };
    setSnackBarMessage(snackBarMessage);
  };

  const activeIconElements = [];
  if (displayActive) {
    for (let index = 0; index < (activeIcons || 1); index++) {
      activeIconElements.push(<InvertColorsIcon key={index} color="primary" />);
    }
  }
  return (
    <Box width={1 / 4}>
      <Card>
        <CardHeader title={fullName} />
        {displayActive ? (
          activeIconElements
        ) : (
          <InvertColorsOffIcon color="disabled" />
        )}
        <CardActions>
          <SprinkerButton
            disabled={!buttonActive || activeIcons >= 3}
            callApi={triggerSprinkler}
          />
        </CardActions>
      </Card>
    </Box>
  );
}

export default SprinklerControl;
