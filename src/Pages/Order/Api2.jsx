import REQUEST from "../../Services/Request"
import { ApiBaseUrl } from "../../Services/Config"

export const GET_INVENTORIES = async () => {
  return await REQUEST({
    method: "GET",
    url: ApiBaseUrl + "GetStores",
  }).catch((error) => console.log(error))
}

export const ADD_PRODUCTION_ORDER = async (data) => {
  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + "Production_Order/0/0 ",
    data,
  }).catch((error) => console.log(error))
}
