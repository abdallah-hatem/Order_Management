import REQUEST from "../../Services/Request"
import { ApiBaseUrl } from "../../Services/Config"

export const GET_CATEGORY = async () => {
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

export const DELETE_RECIPE = async (id) => {
  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + `TRKEBA/2/${id}`,
  }).catch((error) => console.log(error))
}
