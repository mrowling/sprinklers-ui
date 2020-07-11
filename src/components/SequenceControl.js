import React from "react";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { Button } from "@material-ui/core";

function SequenceControl(props) {
  const { triggerToggle } = props;

  return (
    <Box width={1 / 3}>
      <Card>
        <Box height={184}>
          <CardHeader title="Sequence" />
          <CardContent></CardContent>
          <CardActions>
            <Button
              onClick={triggerToggle}
              size="large"
              color="primary"
              fullWidth={true}
            >
              Activate
            </Button>
          </CardActions>
        </Box>
      </Card>
    </Box>
  );
}

export default SequenceControl;
