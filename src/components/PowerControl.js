import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import PowerIcon from "@material-ui/icons/Power";
import PowerOffIcon from "@material-ui/icons/PowerOff";
import { Button } from "@material-ui/core";

function PowerControl(props) {
  const { isOn, triggerToggle } = props;

  const buttonText = isOn ? "Turn Off" : "Turn On";

  return (
    <Box width={1 / 3}>
      <Card>
        <Box height={184}>
          <CardHeader title="Power" />
          <CardContent>
            {isOn && <PowerIcon fontSize="large" color="primary" />}
            {!isOn && <PowerOffIcon fontSize="large" color="primary" />}
          </CardContent>
          <CardActions>
            <Button
              onClick={triggerToggle}
              size="large"
              color="primary"
              fullWidth={true}
            >
              {buttonText}
            </Button>
          </CardActions>
        </Box>
      </Card>
    </Box>
  );
}

export default PowerControl;
