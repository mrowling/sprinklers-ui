import merge from "lodash.merge";
import { config } from "../config";

export const callApi = (basePath) => (method) => async (
  getIdTokenClaims,
  path = "",
  ...options
) => {
  const { apiHost, protocol } = config;
  const { __raw: jwt } = await getIdTokenClaims();
  const defaultOptions = {
    method: method,
    headers: {
      Authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json",
    },
  };
  const fetchOptions = merge(defaultOptions, ...options);
  const response = await fetch(
    `${protocol}://${apiHost}/${basePath}${path}`,
    fetchOptions
  );

  const responseData = await response.json();
  return responseData;
};

export const getApi = callApi("GET");
export const putApi = callApi("PUT");
