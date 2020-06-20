// src/views/ExternalApi.js

import React, { useState } from "react";
import { useAuth0 } from "../react-auth0-spa";

import SprinkerButton from "./SprinklerButton";
import { callApi } from "../utils/callApi";

import { Grid } from "@material-ui/core";

import SprinkerDisplay from "./SprinklerDisplay";

const ExternalApi = () => {
  const [apiMessage, setApiMessage] = useState({ nw: false, ne: false });
  const { getIdTokenClaims } = useAuth0();

  const setResponse = (responseData, shortName) => {
    const newApiMessage = Object.assign({}, apiMessage);
    const { running } = responseData;
    newApiMessage[shortName] = running;
    setApiMessage(newApiMessage);
  };

  const _callApi = (shortName) => async () => {
    try {
      const responseData = await callApi(getIdTokenClaims, shortName);
      setResponse(responseData, shortName);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>External API</h1>
      <Grid container>
        <SprinkerDisplay fullName="NorthWest" content={apiMessage["nw"]}>
          <SprinkerButton callApi={_callApi("nw")} />
        </SprinkerDisplay>
        <SprinkerDisplay fullName="NorthEast" content={apiMessage["ne"]}>
          <SprinkerButton callApi={_callApi("ne")} />
        </SprinkerDisplay>
      </Grid>
      <code>{JSON.stringify(apiMessage, null, 2)}</code>
    </>
  );
};

export default ExternalApi;
