import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";

import PumpDisplay from "./PumpDisplay";
import SprinkerControl from "./SprinklerControl";

import { useAuth0 } from "../react-auth0-spa";
import { getApi } from "../utils/pumpApi";

const SprinklerPage = () => {
  const [running, setRunning] = useState(false);
  const [estimatedEndTime, setEstimatedEndTime] = useState();
  const { getIdTokenClaims } = useAuth0();

  const getPumpData = async () => {
    const responseData = await getApi(getIdTokenClaims);
    const { running, estimated_end_time } = responseData;
    setRunning(running);
    setEstimatedEndTime(estimated_end_time);
  };

  useEffect(() => {
    getPumpData();
    const interval = setInterval(() => {
      getPumpData();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Grid container spacing={3}>
        <Grid container item justify="space-evenly" alignItems="center">
          <PumpDisplay
            name="Pump"
            estimatedEndTime={estimatedEndTime}
            running={running}
          />
        </Grid>
        <Grid container item justify="space-evenly" alignItems="center">
          <SprinkerControl fullName="North" shortName="north" />
          <SprinkerControl fullName="Centre" shortName="middle" />
          <SprinkerControl fullName="South" shortName="south" />
        </Grid>
        <Grid container item justify="space-evenly" alignItems="center">
          <SprinkerControl fullName="East" shortName="east" />
          <SprinkerControl fullName="West" shortName="west" />
        </Grid>
      </Grid>
    </>
  );
};

export default SprinklerPage;
