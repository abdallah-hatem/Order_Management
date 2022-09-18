import axios from "axios";

import { ApiBaseUrl } from "./Config";
/**
 * Create an Axios Client with defaults
 */

export const client = axios.create({
  baseURL: ApiBaseUrl + "/api/",
});

/**
 * Request Wrapper with default success/error actions
 */
const REQUEST = function (options) {
  const onSuccess = function (response) {
    return response.data;
  };
  const onError = function (error) {
    console.error(error);

    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx
      // console.error('Status:', error.response.status);
      if (error.response.status === 401) {
        window.href = "/log-in";
        //  localStorage.removeItem("user");
        //window.location.reload();
      }
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
  };

  return client({
    ...options,
    headers: {
      ...axios.defaults.headers,
    },
  })
    .then(onSuccess)
    .catch(onError);
};

export default REQUEST;
