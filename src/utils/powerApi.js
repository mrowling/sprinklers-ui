import { callApi } from "./callApi";

const basePath = "power";

const baseApi = callApi(basePath);

export const putApi = (getIdTokenClaims, powerActive) => {
  const body = {
    active: powerActive,
  };
  return baseApi("PUT")(getIdTokenClaims, "", {
    body: JSON.stringify(body),
  });
};
