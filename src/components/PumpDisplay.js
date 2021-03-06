import React from "react";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import CircularProgress from "@material-ui/core/CircularProgress";
import Countdown from "react-countdown";

function PumpDisplay(props) {
  const { name, estimatedEndTime, active } = props;
  const countdownRender = ({ minutes, seconds, completed }) =>
    completed ? null : `${minutes}:${seconds.toString().padStart(2, "0")}`;

  return (
    <Box width={1 / 3}>
      <Card>
        <CardHeader title={name} />
        <CardContent>
          <Box height={50}>
            {active && <CircularProgress color="primary" />}
            {!active && (
              <PauseCircleOutlineIcon fontSize="large" color="primary" />
            )}
          </Box>
          <Box height={30}>
            {estimatedEndTime && (
              <Countdown
                date={new Date(estimatedEndTime)}
                renderer={countdownRender}
              />
            )}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default PumpDisplay;
