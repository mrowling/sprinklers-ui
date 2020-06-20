import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";

function SprinklerDisplay(props) {
  const { fullName, content, children } = props;
  return (
    <Card>
      <CardHeader title={fullName} />
      <CardContent>{JSON.stringify(content, null, 2)}</CardContent>
      <CardActions>{children}</CardActions>
    </Card>
  );
}

export default SprinklerDisplay;
