// src/views/ExternalApi.js

import React, { useState } from "react";
import { useAuth0 } from "../react-auth0-spa";

const ExternalApi = () => {
  const [showResult, setShowResult] = useState(false);
  const [apiMessage, setApiMessage] = useState("");
  const { getTokenSilently, getIdTokenClaims } = useAuth0();

  const callApi = async () => {
    try {
      const { __raw: jwt } = await getIdTokenClaims();
      const response = await fetch("http://127.0.0.1:8000/sprinkler/nw", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      const responseData = await response.json();

      setShowResult(true);
      setApiMessage(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>External API</h1>
      <button onClick={callApi}>Ping API</button>
      {showResult && <code>{JSON.stringify(apiMessage, null, 2)}</code>}
    </>
  );
};

export default ExternalApi;
