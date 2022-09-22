import REQUEST from "../../Services/Request"
import { ApiBaseUrl } from "../../Services/Config"

export const GET_CATEGORIES = async () => {
  return await REQUEST({
    method: "GET",
    url: ApiBaseUrl + "getclass/cat",
  }).catch((error) => console.log(error))
}

export const ADD_CATEGORY = async (data) => {
  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + "class/0/cat",
    data,
  }).catch((error) => console.log(error))
}

export const DELETE_CATEGORY = async (data) => {
  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + "class/2/cat",
    data,
  }).catch((error) => console.log(error))
}

export const UPDATE_CATEGORY = async (data) => {
  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + "class/1/cat",
    data,
  }).catch((error) => console.log(error))
}
