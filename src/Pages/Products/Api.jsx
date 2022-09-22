import REQUEST from "../../Services/Request"
import { ApiBaseUrl } from "../../Services/Config"

export const GET_PRODUCTS = async () => {
  return await REQUEST({
    method: "GET",
    url: ApiBaseUrl + "Getproducts/0",
  }).catch((error) => console.log(error))
}

export const GET_PRODUCTS_COLORS = async (id) => {
  return await REQUEST({
    method: "GET",
    url: ApiBaseUrl + `Getproducts_colors/${id}`,
  }).catch((error) => console.log(error))
}

export const GET_PRODUCT_BY_ID = async (id) => {
  return await REQUEST({
    method: "GET",
    url: ApiBaseUrl + `Getproducts/${id}`,
  }).catch((error) => console.log(error))
}

export const ADD_PRODUCT = async (data) => {
  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + `PRODUCTS/0/""`,
    data,
  }).catch((error) => console.log(error))
}

export const UPDATE_PRODUCT = async (data) => {
  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + `PRODUCTS/1/""`,
    data,
  }).catch((error) => console.log(error))
}

export const DELETE_PRODUCT = async (type, id) => {
  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + `PRODUCTS/2/${type}`,
    data: id,
  }).catch((error) => console.log(error))
}
