import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import CircularProgress from "@material-ui/core/CircularProgress";
import Countdown from "react-countdown";

import { useAuth0 } from "../react-auth0-spa";
import { getApi } from "../utils/pumpApi";

function PumpDisplay(props) {
  const { name } = props;
  const [running, setRunning] = useState(false);
  const [estimatedEndTime, setEstimatedEndTime] = useState();
  const { getIdTokenClaims } = useAuth0();

  const getState = async () => {
    const responseData = await getApi(getIdTokenClaims);
    const { running, estimated_end_time } = responseData;
    setRunning(running);
    setEstimatedEndTime(estimated_end_time);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getState();
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const countdownRender = ({ minutes, seconds, completed }) =>
    completed ? null : `${minutes}:${seconds}`;

  return (
    <Box width={1 / 4}>
      <Card>
        <CardHeader title={name} />
        <CardContent>
          <Box height={50}>
            {running && <CircularProgress color="primary" />}
            {!running && (
              <PauseCircleOutlineIcon fontSize="large" color="primary" />
            )}
          </Box>
          {estimatedEndTime && (
            <Countdown
              date={new Date(estimatedEndTime)}
              renderer={countdownRender}
            />
          )}
        </CardContent>
      </Card>
    </Box>
  );
}

export default PumpDisplay;
