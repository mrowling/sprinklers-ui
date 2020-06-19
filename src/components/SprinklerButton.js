import React from "react";
import { Button, Grid } from "@material-ui/core";

// function App() {
//   return <Button color="primary">Hello World</Button>;
// }

const baseUrl = "http://localhost:8000/sprinkler";

async function get(shortName) {
  const response = await fetch(`${baseUrl}/${shortName}`, { method: "GET" });
  console.log(response);
  console.log(response.json());
}

async function put(shortName) {
  const response = await fetch(`${baseUrl}/${shortName}`, { method: "PUT" });
  console.log(response);
  console.log(response.json());
}

function SprinklerButton(props) {
  const { fullName, shortName } = props;
  return (
    <Grid item xs={6} spacing={3}>
      <Button
        onClick={() => get(shortName)}
        size="large"
        variant="contained"
        color="primary"
      >
        {fullName}
      </Button>
    </Grid>
  );
}

export default SprinklerButton;
