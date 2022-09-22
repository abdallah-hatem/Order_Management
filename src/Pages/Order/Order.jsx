import { useCallback, useEffect, useRef, useState } from "react"

import { Card, CardBody, CardHeader, FormGroup } from "reactstrap"

import notify from "devextreme/ui/notify"
import { useTranslation } from "react-i18next"
import { Button } from "reactstrap"

import {
  DELETE_REQUEST_DEMO,
  GET_REQUEST_DEMO,
  SEARCH,
  UPDATE_REQUEST_DEMO_STATUS,
} from "./API"
import "./style.scss"
import RequestCard from "./Components/RequestCard"
import EditPopUp from "./Components/EditPopUp"
import PageLayout from "./Components/components/PageLayout/PageLayout"
import FormComponent from "../../Web Components/FormComponent/FormComponent"
import { DELETE_PRODUCTION_ORDER, GET_PRODUCTION_ORDERS } from "./Api2"
import { useNavigate } from "react-router-dom"
// import LoadingPanel from "./components/components/LoadingPanel"
const Order = () => {
  const { t, i18n } = useTranslation()
  const [editPopUp, setEditPopUp] = useState(false)
  const [selectedCard, setselectedCard] = useState(null)
  const [Search, setSearch] = useState("")
  // const [status, setstatus] = useState(false)
  const defualtData = useRef({
    TotalCount: 0,
    PageSize: 2,
    PagesCount: 100,
    PageIndex: 0,
    Data: [],
    loading: false,
  })
  const [values, setValues] = useState(defualtData.current)

  const [loading, setloading] = useState(false)
  const onHiding = () => setloading(false)

  //////////////////////////////////////////

  const [orders, setOrders] = useState()
  console.log(orders, "orders")

  useEffect(() => {
    GET_PRODUCTION_ORDERS()
      .then((data) => setOrders(data))
      .then(() => setloading(true))
  }, [])

  const cardData =
    orders &&
    orders.map((el) => ({
      id: el.id,
      Date: el.date_order,
      items: [{ name: "item1" }],
    }))

  let navigate = useNavigate()

  function handleDelete(e) {
    DELETE_PRODUCTION_ORDER({ id: e.id })
  }

  return (
    <div className="orders-cont">
      <FormComponent title={"Orders"} loading={!loading} onHiding={onHiding}>
        <EditPopUp
          visible={editPopUp}
          onHiding={useCallback(() => {
            setEditPopUp(false)
            setselectedCard(null)
          }, [])}
          data={selectedCard}
          // ChangeData={ChangeData}
        />

        {cardData?.map((data, index) => {
          return (
            <RequestCard
              Delete={() => handleDelete(data)}
              // CheckRequest={CheckRequest}
              data={data}
              index={index}
              OnEdit={(e) => {
                setEditPopUp(true)
                setselectedCard(e)
              }}
            />
          )
        })}
        <div className="morePosts">
          {(Search.length > 0 || values.PageIndex < values.PagesCount) &&
          values.TotalCount > values.Data.length ? (
            <button
              type="button"
              // onClick={() => GetData(values.PageIndex + 1)}
              className="btn btn-outline-dark "
            >
              {t("More Posts")}
            </button>
          ) : null}
        </div>
      </FormComponent>
    </div>
  )
}

export default Order
