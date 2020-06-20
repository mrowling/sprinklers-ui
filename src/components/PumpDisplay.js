import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import CircularProgress from "@material-ui/core/CircularProgress";

import { useAuth0 } from "../react-auth0-spa";
import { getApi } from "../utils/pumpApi";

function PumpDisplay(props) {
  const { name } = props;
  const [running, setRunning] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState();
  const { getIdTokenClaims } = useAuth0();

  const getState = async () => {
    const responseData = await getApi(getIdTokenClaims);
    const { running, estimated_end_time } = responseData;
    setRunning(running);
    setTimeRemaining(calculateTimeRemaining(estimated_end_time));
  };

  const msToSec = (ms) => ms / 1000;

  const calculateTimeRemaining = (estimatedEndTime) => {
    if (estimatedEndTime) {
      const d = new Date(estimatedEndTime);
      const now = new Date();
      const diffTime = d - now;
      if (diffTime < 0) {
        return null;
      }
      return Math.floor(msToSec(diffTime));
    }
    return null;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getState();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box width={1 / 4}>
      <Card>
        <CardHeader title={name} />
        <CardContent>
          <Box height={50}>
            {running && timeRemaining && <CircularProgress color="primary" />}
            {(!running || (running && !timeRemaining)) && (
              <PauseCircleOutlineIcon fontSize="large" color="primary" />
            )}
          </Box>
          <Box>{timeRemaining && `${timeRemaining}s`}</Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default PumpDisplay;
