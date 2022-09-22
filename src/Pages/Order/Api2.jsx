import REQUEST from "../../Services/Request"
import { ApiBaseUrl } from "../../Services/Config"

export const ADD_PRODUCTION_ORDER = async (data) => {
  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + "Production_Order/0/0",
    data,
  }).catch((error) => console.log(error))
}

export const GET_PRODUCTION_ORDERS = async () => {
  return await REQUEST({
    method: "GET",
    url: ApiBaseUrl + "GetProduction_Orders",
  }).catch((error) => console.log(error))
}

export const DELETE_PRODUCTION_ORDER = async (data) => {
  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + "Production_Order/2/0",
    data,
  }).catch((error) => console.log(error))
}

export const UPDATE_PRODUCTION_ORDER = async (data) => {
  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + "Production_Order/1/0",
    data,
  }).catch((error) => console.log(error))
}
