import REQUEST from "../../Services/Request"
import { ApiBaseUrl } from "../../Services/Config"

export const GET_RECIPES = async () => {
  return await REQUEST({
    method: "GET",
    url: ApiBaseUrl + "GetTRKEBAT",
  }).catch((error) => console.log(error))
}

export const GET_RECIPE_BY_ID = async (id) => {
  return await REQUEST({
    method: "GET",
    url: ApiBaseUrl + `GetTRKEBA_detail/${id}`,
  }).catch((error) => console.log(error))
}

export const ADD_RECIPE = async (data) => {
  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + `TRKEBA/0/0`,
    data,
  }).catch((error) => console.log(error))
}

export const DELETE_RECIPE = async (id) => {
  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + `TRKEBA/2/1`,
    data: id,
  }).catch((error) => console.log(error))
}
