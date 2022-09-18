import REQUEST from "../../Services/RequestAdmin";

export const DELETE_REQUEST_DEMO = async (e) => {
  return await REQUEST({
    method: "delete",
    url: "RequestDemo/" + e,
  });
};
export const GET_REQUEST_DEMO = async (e, status) => {
  return await REQUEST({
    method: "get",
    url: "RequestDemo/webappSkipAndTake/" + e + "/" + status,
  });
};
export const UPDATE_REQUEST_DEMO_STATUS = async (e) => {
  return await REQUEST({
    method: "put",
    url: "RequestDemo ",
    data: e,
  });
};
export const SEARCH = async (input, status) => {
  return await REQUEST({
    method: "get",
    url: `RequestDemo/webappSearch/${input}/${status}`,
  });
};
export const SUBMIT_CHANGES = async (e) => {
  return await REQUEST({
    method: "post",
    url: "RequestDemo/EditInfo",
    data: e,
  });
};
