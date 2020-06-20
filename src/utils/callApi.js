export const callApi = (baseUrl) => (method) => async (
  getIdTokenClaims,
  path = ""
) => {
  const { __raw: jwt } = await getIdTokenClaims();
  const response = await fetch(`${baseUrl}${path}`, {
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
