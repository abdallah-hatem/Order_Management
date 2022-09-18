import { FormGroup } from "reactstrap"

import { useTranslation } from "react-i18next"
import { Popup } from "devextreme-react/popup"
import { Button } from "devextreme-react/button"
import DateTime from "./components/DateTime"
import { useCallback, useEffect, useState } from "react"
import NumberBox from "./components/NumberBox"
import { SUBMIT_CHANGES } from "../API"
const EditPopUp = ({ visible, onHiding, data, ChangeData }) => {
  const { t, i18n } = useTranslation()
  const [values, setValues] = useState({})
  useEffect(() => {
    if (data != null) {
      setValues({
        ...data,
        newDate: data?.ExpiryDate,
        newUserNo: data.UserNo,
      })
    }
    return () => {}
  }, [data])
  let handleChange = useCallback(({ name, value }) => {
    setValues((prev) => ({ ...prev, [name]: value }))
  }, [])
  const OnSubmit = (e, data) => {
    SUBMIT_CHANGES({
      ...values,
      newDate: new Date(values?.newDate),
      newUserNo: values?.newUserNo,
      ExpiryDate: new Date(values?.ExpiryDate),
      UserNo: values?.UserNo,
    }).then((res) => {
      ChangeData(res)
      setValues({
        ...res,
        newDate: res?.ExpiryDate,
        newUserNo: res.UserNo,
      })
    })
  }
  function DateFormate(e) {
    let dateType = new Date(e)
    let month = (parseInt(dateType.getMonth()) + 1).toString()
    let finalFormat = (
      month +
      "/" +
      dateType.getDate() +
      "/" +
      dateType.getFullYear()
    ).toString()

    return finalFormat
  }

  return (
    <div style={{ padding: "20px" }}>
      <Popup
        visible={visible}
        onHiding={onHiding}
        dragEnabled={false}
        showTitle={true}
        title={t("Add Group")}
        rtlEnabled={true}
        width={400}
        height={400}
      >
        <div className="contianer">
          <div className="p-3 row">
            <div className="col-4 align-self-center">{t("Expiry Date")}</div>
            <div className="col-8">
              <DateTime
                label={t("To")}
                value={values["newDate"]}
                name="newDate"
                handleChange={handleChange}
                required={false}
              />
            </div>
          </div>
          <div className="p-3 row">
            <div className="col-4 align-self-center">{t("User No")}</div>
            <div className="col-8">
              <NumberBox
                value={values["newUserNo"]}
                name="newUserNo"
                handleChange={handleChange}
                label={t("Amount of users")}
                required={false}
              />
            </div>
          </div>
          <div className="formButtons d-flex justify-content-around pt-3">
            <Button
              disabled={
                DateFormate(values.ExpiryDate) === values.newDate &&
                (values.newUserNo === values.UserNo ||
                  values.newUserNo < values.UserNo)
              }
              text={t("Ok")}
              icon="check"
              type="success"
              rtlEnabled={true}
              width={"33%"}
              onClick={OnSubmit}
            />
            <Button
              text={t("Cancel")}
              icon="close"
              type="danger"
              rtlEnabled={true}
              width={"33%"}
              onClick={onHiding}
            />
          </div>
        </div>
      </Popup>
    </div>
  )
}

export default EditPopUp
