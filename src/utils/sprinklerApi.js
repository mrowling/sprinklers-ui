import { callApi } from "./callApi";

const baseUrl = "http://127.0.0.1:8000/sprinkler";

const baseApi = callApi(baseUrl);

export const getApi = baseApi("GET");
export const putApi = baseApi("PUT");
