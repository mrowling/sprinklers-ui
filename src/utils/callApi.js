export const callApi = async (getIdTokenClaims, shortName) => {
  const { __raw: jwt } = await getIdTokenClaims();
  const response = await fetch(`http://127.0.0.1:8000/sprinkler/${shortName}`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

  const responseData = await response.json();
  return responseData;
};
