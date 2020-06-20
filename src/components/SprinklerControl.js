import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import { Alert } from "@material-ui/lab";
import Snackbar from "@material-ui/core/Snackbar";

import SprinkerButton from "./SprinklerButton";
import { useAuth0 } from "../react-auth0-spa";
import { putApi } from "../utils/sprinklerApi";

function SprinklerControl(props) {
  const { fullName, shortName } = props;
  const { getIdTokenClaims } = useAuth0();
  const [snackBarMessage, setSnackBarMessage] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackBarMessage(false);
  };

  const triggerSprinkler = async () => {
    handleClose();
    const responseData = await putApi(getIdTokenClaims, `/${shortName}`);
    const { running, success, message } = responseData;
    if (!success) {
      setSnackBarMessage(message || "An Error Occured");
    }
  };

  return (
    <React.Fragment>
      <Box width={1 / 4}>
        <Card>
          <CardHeader title={fullName} />
          <CardActions>
            <SprinkerButton callApi={triggerSprinkler} />
          </CardActions>
        </Card>
      </Box>
      <Snackbar
        open={!!snackBarMessage}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          {snackBarMessage}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}

export default SprinklerControl;
