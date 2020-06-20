import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import CircularProgress from "@material-ui/core/CircularProgress";
import Countdown from "react-countdown";

function PumpDisplay(props) {
  const { name, estimatedEndTime, running } = props;
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
