import { config } from "../config";

export const callApi = (basePath) => (method) => async (
  getIdTokenClaims,
  path = ""
) => {
  const { apiHost, protocol } = config;
  const { __raw: jwt } = await getIdTokenClaims();
  const response = await fetch(`${protocol}://${apiHost}/${basePath}${path}`, {
    method: method,
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

  const responseData = await response.json();
  return responseData;
};

export const getApi = callApi("GET");
export const putApi = callApi("PUT");
