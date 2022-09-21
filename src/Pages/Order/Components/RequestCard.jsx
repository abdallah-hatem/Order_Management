import { FormGroup } from "reactstrap"

import { useTranslation } from "react-i18next"
import UpdateDelete from "./components/UpdateDelete"
import { DateConvertor } from "./components/DateFunction"
import ButtonComponent from "./components/ButtonComponent/ButtonComponent"
const RequestCard = ({ index, data, Delete, CheckRequest, OnEdit }) => {
  const { t, i18n } = useTranslation()

  return (
    <div
      key={index}
      style={{
        padding: "20px",
      }}
    >
      <div
        className="row "
        style={{
          border: "0.5px solid #1e7e34",
          textAlign: i18n.language === "en" ? "left" : "right",
          padding: "20px",
        }}
      >
        <div className=" titleLatestadminForm row">
          <div className="col ">
            {t("Order No.")} : {data.No}
            <br />
            {t("Date")} :{DateConvertor(data.Date, i18n.language === "en")}
            <br />
          </div>

          <div className="col ">
            {t("Items")} :
            <ul>
              {data.items?.map((el) => (
                <li>{el.name}</li>
              ))}
            </ul>
            <div style={{ display: "flex" }}>
              <ButtonComponent title={"Accept"} />
              <ButtonComponent title={"Reject"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequestCard
