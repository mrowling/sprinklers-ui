import { callApi } from "./callApi";

const basePath = "pump";

const baseApi = callApi(basePath);

export const getApi = baseApi("GET");
export const putApi = baseApi("PUT");
