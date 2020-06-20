const baseUrl = "http://127.0.0.1:8000/sprinkler/";

const callApi = (method) => async (getIdTokenClaims, shortName) => {
  const { __raw: jwt } = await getIdTokenClaims();
  const response = await fetch(`${baseUrl}${shortName}`, {
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
