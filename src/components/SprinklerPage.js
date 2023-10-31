import React, { useState, useEffect } from "react";
import { Grid, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import PumpDisplay from "./PumpDisplay";
import SprinkerControl from "./SprinklerControl";
import PowerControl from "./PowerControl";
import SequenceControl from "./SequenceControl";

import { useAuth0 } from "../react-auth0-spa";
import { getApi } from "../utils/pumpApi";
import { putApi } from "../utils/sprinklerApi";
import {
  putApi as putPowerApi,
  getApi as getPowerApi,
} from "../utils/powerApi";
import { getApi as getSequenceApi } from "../utils/sequenceApi";

const SprinklerPage = () => {
  const [pumpActive, setPumpActive] = useState(false);
  const [activeSprinkler, setActiveSprinkler] = useState(false);
  const [estimatedEndTime, setEstimatedEndTime] = useState();
  const [snackBarMessage, setSnackBarMessage] = useState(false);
  const [incrementCount, setIncrementCount] = useState(0);
  const [isPowerActive, setIsPowerActive] = useState(false);
  const { getIdTokenClaims } = useAuth0();

  const preemptivelySetState = (shortName) => {
    setActiveSprinkler(shortName);
    setIncrementCount(incrementCount + 1);
    setPumpActive(true);
  };

  const triggerSprinkler = (shortName) => async () => {
    preemptivelySetState(shortName);
    const responseData = await putApi(getIdTokenClaims, `/${shortName}`);
    const { success, message } = responseData;
    const defaultMessage = success ? "Success" : "An Error Occured";
    const snackBarMessage = {
      message: message || defaultMessage,
      severity: success ? "success" : "error",
    };
    setSnackBarMessage(snackBarMessage);
  };

  const getPumpData = async () => {
    const responseData = await getApi(getIdTokenClaims);
    const {
      running,
      estimated_end_time,
      running_sprinkler_name,
      increment_count,
    } = responseData;
    setPumpActive(running);
    setActiveSprinkler(running_sprinkler_name);
    setIncrementCount(increment_count);
    setEstimatedEndTime(estimated_end_time);
  };

  const getPowerData = async () => {
    const { active } = await getPowerApi(getIdTokenClaims);
    if (!active) {
      setIncrementCount(0);
    }
    setIsPowerActive(active);
  };

  let isDataLoading = false;

  const getData = async () => {
    if (!isDataLoading) {
      isDataLoading = true;
      try {
        await Promise.all([getPumpData(), getPowerData()]);
      } finally {
        isDataLoading = false;
      }
    }
  };

  useEffect(() => {
    getData();
    const interval = setInterval(() => {
      getData();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackBarMessage(false);
  };

  const togglePowerActive = async () => {
    const { active } = await putPowerApi(getIdTokenClaims, !isPowerActive);
    if (!active) {
      setIncrementCount(0);
    }
    setIsPowerActive(active);
  };

  const triggerSequence = async () => {
    const responseData = await getSequenceApi(getIdTokenClaims);
    const { success, message } = responseData;
    const defaultMessage = success ? "Success" : "An Error Occured";
    const snackBarMessage = {
      message: message || defaultMessage,
      severity: success ? "success" : "error",
    };
    setSnackBarMessage(snackBarMessage);
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
          <PowerControl
            isOn={isPowerActive}
            triggerToggle={togglePowerActive}
          />
        </Grid>
        <Grid container item justify="space-evenly" alignItems="center">
          <SprinkerControl
            triggerSprinkler={triggerSprinkler("north")}
            name="North"
            buttonActive={
              isPowerActive && (!activeSprinkler || activeSprinkler === "north")
            }
            displayActive={isPowerActive && activeSprinkler === "north"}
            activeIcons={incrementCount}
          />
          <SprinkerControl
            triggerSprinkler={triggerSprinkler("middle")}
            name="Centre"
            buttonActive={
              isPowerActive &&
              (!activeSprinkler || activeSprinkler === "middle")
            }
            displayActive={isPowerActive && activeSprinkler === "middle"}
            activeIcons={incrementCount}
          />
          <SprinkerControl
            triggerSprinkler={triggerSprinkler("south")}
            name="South"
            buttonActive={
              isPowerActive && (!activeSprinkler || activeSprinkler === "south")
            }
            displayActive={isPowerActive && activeSprinkler === "south"}
            activeIcons={incrementCount}
          />
        </Grid>
        <Grid container item justify="space-evenly" alignItems="center">
          <SprinkerControl
            triggerSprinkler={triggerSprinkler("east")}
            name="East"
            buttonActive={
              isPowerActive && (!activeSprinkler || activeSprinkler === "east")
            }
            displayActive={isPowerActive && activeSprinkler === "east"}
            activeIcons={incrementCount}
          />
          <SprinkerControl
            triggerSprinkler={triggerSprinkler("west")}
            name="West"
            buttonActive={
              isPowerActive && (!activeSprinkler || activeSprinkler === "west")
            }
            displayActive={isPowerActive && activeSprinkler === "west"}
            activeIcons={incrementCount}
          />
        </Grid>
        <Grid container item justify="space-evenly" alignItems="center">
          <SequenceControl triggerToggle={triggerSequence} />
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
