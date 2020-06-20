// src/views/ExternalApi.js

import React, { useState } from "react";
import { useAuth0 } from "../react-auth0-spa";

import SprinkerButton from "./SprinklerButton";
import { callApi } from "../utils/callApi";

import { Grid } from "@material-ui/core";

const ExternalApi = () => {
  const [showResult, setShowResult] = useState(false);
  const [apiMessage, setApiMessage] = useState("");
  const { getIdTokenClaims } = useAuth0();

  const _callApi = async (shortName) => {
    try {
      const responseData = await callApi(getIdTokenClaims, shortName);
      setShowResult(true);
      setApiMessage(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>External API</h1>
      <Grid container>
        <SprinkerButton callApi={_callApi} shortName="ne">
          NorthEast
        </SprinkerButton>
        <SprinkerButton callApi={_callApi} shortName="nw">
          NorthWest
        </SprinkerButton>
        <SprinkerButton callApi={_callApi} shortName="ce">
          CentreEast
        </SprinkerButton>
        <SprinkerButton callApi={_callApi} shortName="cw">
          CentreWest
        </SprinkerButton>
        <SprinkerButton callApi={_callApi} shortName="se">
          SouthEast
        </SprinkerButton>
        <SprinkerButton callApi={_callApi} shortName="sw">
          SouthWest
        </SprinkerButton>
      </Grid>
      {showResult && <code>{JSON.stringify(apiMessage, null, 2)}</code>}
    </>
  );
};

export default ExternalApi;
