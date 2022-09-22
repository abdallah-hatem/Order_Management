import REQUEST from "../../services/RequestAdmin";
export const LOGIN = async (e) => {
  return await REQUEST({
    method: "post",
    url: "LogInErpHOLOL",
    data: e,
  });
};
