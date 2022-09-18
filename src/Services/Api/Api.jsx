import REQUEST from "../Request"

// PRODUCTS

export const GET_PRODUCTS = async () => {
  return await REQUEST({
    method: "GET",
    url: "ContactUs",
  }).catch((error) => console.log(error))
}

export const GET_PRODUCT_BY_ID = async (id) => {
  return await REQUEST({
    method: "GET",
    url: `get-product/:${id}`,
  }).catch((error) => console.log(error))
}

export const ADD_PRODUCT = async (data) => {
  return await REQUEST({
    method: "POST",
    url: "ContactUs",
    data,
  }).catch((error) => console.log(error))
}

export const UPDATE_PRODUCT = async (id, data) => {
  return await REQUEST({
    method: "UPDATE",
    url: `update-product/:${id}`,
    data,
  }).catch((error) => console.log(error))
}
