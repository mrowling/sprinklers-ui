import { callApi } from "./callApi";

const basePath = "sequence";

const baseApi = callApi(basePath);

export const getApi = baseApi("GET");
