import React, { useState, useEffect } from "react";
import { Grid, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import PumpDisplay from "./PumpDisplay";
import SprinkerControl from "./SprinklerControl";

import { useAuth0 } from "../react-auth0-spa";
import { getApi } from "../utils/pumpApi";

const SprinklerPage = () => {
  const [pumpActive, setPumpActive] = useState(false);
  const [estimatedEndTime, setEstimatedEndTime] = useState();
  const [snackBarMessage, setSnackBarMessage] = useState(false);
  const { getIdTokenClaims } = useAuth0();

  const getPumpData = async () => {
    const responseData = await getApi(getIdTokenClaims);
    const { running, estimated_end_time } = responseData;
    setPumpActive(running);
    setEstimatedEndTime(estimated_end_time);
  };

  useEffect(() => {
    getPumpData();
    const interval = setInterval(() => {
      getPumpData();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackBarMessage(false);
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid container item justify="space-evenly" alignItems="center">
          <PumpDisplay
            name="Pump"
            estimatedEndTime={estimatedEndTime}
            active={pumpActive}
          />
        </Grid>
        <Grid container item justify="space-evenly" alignItems="center">
          <SprinkerControl
            setSnackBarMessage={setSnackBarMessage}
            fullName="North"
            shortName="north"
          />
          <SprinkerControl
            setSnackBarMessage={setSnackBarMessage}
            fullName="Centre"
            shortName="middle"
          />
          <SprinkerControl
            setSnackBarMessage={setSnackBarMessage}
            fullName="South"
            shortName="south"
          />
        </Grid>
        <Grid container item justify="space-evenly" alignItems="center">
          <SprinkerControl
            setSnackBarMessage={setSnackBarMessage}
            fullName="East"
            shortName="east"
          />
          <SprinkerControl
            setSnackBarMessage={setSnackBarMessage}
            fullName="West"
            shortName="west"
          />
        </Grid>
      </Grid>
      <Snackbar
        open={!!snackBarMessage}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackBarMessage.severity}
        >
          {snackBarMessage.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default SprinklerPage;
