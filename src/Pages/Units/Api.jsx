import REQUEST from "../../Services/Request"
import { ApiBaseUrl } from "../../Services/Config"

export const GET_UNITS = async () => {
  return await REQUEST({
    method: "GET",
    url: ApiBaseUrl + "getclass/unit",
  }).catch((error) => console.log(error))
}

export const ADD_UNIT = async (data) => {
  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + "class/0/unit",
    data,
  }).catch((error) => console.log(error))
}

export const DELETE_UNIT = async (data) => {
  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + "class/2/unit",
    data,
  }).catch((error) => console.log(error))
}

export const UPDATE_UNIT = async (data) => {
  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + "class/1/unit",
    data,
  }).catch((error) => console.log(error))
}
