import REQUEST from "../../Services/Request"
import { ApiBaseUrl } from "../../Services/Config"

export const GET_INVENTORIES = async () => {
  return await REQUEST({
    method: "GET",
    url: ApiBaseUrl + "GetStores",
  }).catch((error) => console.log(error))
}

export const ADD_INVENTORY = async (data) => {
  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + "INVENORY/0",
    data,
  }).catch((error) => console.log(error))
}

export const DELETE_INVENTORY = async (id) => {
  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + "INVENORY/2",
    data: id,
  }).catch((error) => console.log(error))
}

export const UPDATE_INVENTORY = async (id) => {
  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + "INVENORY/1",
    data: id,
  }).catch((error) => console.log(error))
}
