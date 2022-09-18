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
// import LoadingPanel from "./components/components/LoadingPanel"
const Order = () => {
  const { t, i18n } = useTranslation()
  const [editPopUp, setEditPopUp] = useState(false)
  const [selectedCard, setselectedCard] = useState(null)
  const [Search, setSearch] = useState("")
  const [status, setstatus] = useState(false)
  const defualtData = useRef({
    TotalCount: 0,
    PageSize: 2,
    PagesCount: 100,
    PageIndex: 0,
    Data: [],
    loading: false,
  })
  const [values, setValues] = useState(defualtData.current)

  useEffect(() => {
    if (Search.length > 0) {
      GetSearchData(Search)
    } else {
      setValues(defualtData.current)
      GetData(1)
    }
    return () => {}
  }, [Search])
  useEffect(() => {
    setValues((prev) => ({ ...prev, loading: true }))
    GET_REQUEST_DEMO(1, status)
      .then((res) => {
        console.log(res)
        setValues((prev) => ({
          ...res,
          Data: [...res.Data],
        }))
      })
      .catch((err) => {})
      .finally(() => setValues((prev) => ({ ...prev, loading: false })))
    return () => {}
  }, [status])
  const GetData = useCallback(
    (index) => {
      if (values.PageIndex < index) {
        setValues((prev) => ({ ...prev, loading: true }))
        GET_REQUEST_DEMO(index, status)
          .then((res) => {
            setValues((prev) => ({
              ...res,
              Data: [...values.Data, ...res.Data],
            }))
          })
          .catch((err) => {})
          .finally(() => setValues((prev) => ({ ...prev, loading: false })))
      }
    },
    [values.Data, values.PageIndex, status]
  )
  const GetSearchData = useCallback(
    (e) => {
      setValues((prev) => ({ ...prev, loading: true }))
      SEARCH(e, status)
        .then((res) => {
          setValues((prev) => ({
            ...defualtData.current,
            Data: res,
          }))
        })
        .catch((err) => {})
        .finally(() => setValues((prev) => ({ ...prev, loading: false })))
    },
    [status]
  )
  let Delete = useCallback(
    async (element) => {
      setValues((prev) => ({ ...prev, loading: true }))
      DELETE_REQUEST_DEMO(element)
        .then(() => {
          setValues((prev) => ({
            ...prev,
            Data: prev.Data.filter(function (el) {
              return el.Id !== element
            }),
          }))
          notify({ message: t("Deleted Successfully"), width: 600 }, "success", 3000)
        })
        .catch(() => {
          notify({ message: t("Failed Try again"), width: 600 }, "error", 3000)
        })
        .finally(() => setValues((prev) => ({ ...prev, loading: false })))
    },
    [t]
  )
  const CheckRequest = (e, data) =>
    UPDATE_REQUEST_DEMO_STATUS({
      ...data,
      status: e.target.checked,
    }).then(() => {
      setValues((prev) => ({
        ...prev,
        Data: prev.Data.map((da) => {
          return data.Id === da.Id ? { ...da, Status: !e.target.checked } : { ...da }
        }),
      }))
    })
  const ChangeData = (data) =>
    setValues((prev) => ({
      ...prev,
      Data: prev.Data.map((da) => {
        return data.Id === da.Id ? { ...data } : { ...da }
      }),
    }))
  const [loading, setloading] = useState(false)
  const onHiding = () => setloading(false)
  return (
    <div className="orders-cont">
      <FormComponent title={"Orders"} loading={loading} onHiding={onHiding}>
        <EditPopUp
          visible={editPopUp}
          onHiding={useCallback(() => {
            setEditPopUp(false)
            setselectedCard(null)
          }, [])}
          data={selectedCard}
          ChangeData={ChangeData}
        />
        <Button
          className="btn btn btn-success col-12"
          // disabled={!isValueChanged}
          type="button"
          // disabled={loadIndicatorVisible}
          onClick={() => setstatus(!status)}
        >
          <span className="dx-button-text">
            {
              //loadIndicatorVisible ? t("Loading") : t("Save")
              status ? t("Is not Active") : t("Is Active")
            }
          </span>
        </Button>

        <div class="form-group">
          <label for="pwd">{t("Search")}</label>
          <input
            type="text"
            class="form-control"
            onChange={(e) => setSearch(e.target.value)}
            id="pwd"
            style={{ height: "45px", fontSize: "20px" }}
          />
        </div>

        {[
          { No: 1, Date: new Date() },
          { No: 2, Date: new Date() },

          { No: 3, Date: new Date() },

          { No: 4, Date: new Date() },
        ].map((data, index) => {
          return (
            <RequestCard
              Delete={Delete}
              data={data}
              CheckRequest={CheckRequest}
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
              onClick={() => GetData(values.PageIndex + 1)}
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
