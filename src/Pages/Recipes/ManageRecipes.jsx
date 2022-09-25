import { React, useCallback, useEffect, useState } from "react"
import FormComponent from "../../Web Components/FormComponent/FormComponent"
import MasterTable from "../../Web Components/MasterTable/MasterTable"
import { GET_PRODUCTS, GET_PRODUCT_BY_ID } from "../Products/Api"
import { DELETE_RECIPE, GET_RECIPES, GET_RECIPE_BY_ID, UPDATE_RECIPE } from "./Api"
import { Column, Button } from "devextreme-react/data-grid"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

function ManageRecipes() {
  const { t } = useTranslation()
  let navigate = useNavigate()

  const [data, setData] = useState()
  const [details, setDetails] = useState([])
  const [items, setItems] = useState()

  const [itemToDelete, setItemToDelete] = useState()

  const [loading, setLoading] = useState(true)

  // GET Recipes
  useEffect(() => {
    GET_RECIPES()
      .then((data) => setData(data))
      .then(() => setLoading(false))
  }, [])

  useEffect(() => {
    // Get Details
    data?.map((el) =>
      GET_RECIPE_BY_ID(el.ID).then((data) =>
        setDetails((prev) => [...prev, data[0]])
      )
    )

    // Get Items
    GET_PRODUCTS().then((data) => setItems(data))
  }, [loading])

  const handleDelete = useCallback((e) => {
    const id = e.data.ID_TRKEBA
    DELETE_RECIPE({ ID: id })
  }, [])

  const handleUpdate = useCallback((e) => {
    const updatedData = e.changes[0].data
    const key = e.changes[0].key

    const finalData = updatedData &&
      key && {
        ID: key.ID_TRKEBA,
        number: updatedData.Num,
        Name: updatedData.Name,
        iteminfo: [
          {
            item_id: updatedData.item,
            QTY: updatedData.QTY,
            COST: updatedData.Cost,
          },
        ],
      }
    UPDATE_RECIPE(finalData)
  }, [])

  const itemOptions = items?.map((el) => ({
    label: el.item_name,
    value: el.id,
  }))

  const columns = [
    {
      field: "ID",
      caption: "ID",
      visible: false,
      allowEditing: false,
    },
    {
      field: "Name",
      caption: "Recipe Name",
    },
    // {
    //   field: "Num",
    //   caption: "Number",
    // },
    // {
    //   field: "item",
    //   caption: "Item",
    //   options: itemOptions,
    // },
    // {
    //   field: "QTY",
    //   caption: "Quantity",
    //   dataType: "number",
    // },
    // {
    //   field: "Cost",
    //   caption: "Cost",
    //   dataType: "number",
    // },
    // {
    //   field: "total",
    //   caption: "Total",
    //   dataType: "number",
    //   allowEditing: false,
    //   calculateCellValueHandle: (rowData) => rowData.QTY * rowData.Cost,
    // },
  ]

  useEffect(() => {
    console.log(data, "data")
    console.log(details, "details")
    console.log(items, "items")
  }, [data, details, items])

  return (
    <>
      <FormComponent loading={loading} title="Manage Recipes">
        <MasterTable
          allowDelete
          allowUpdate
          ColoredRows
          editingMode="popup"
          popupTitle="Update Recipes"
          onRowRemoved={(e) => handleDelete(e)}
          onSaving={(e) => handleUpdate(e)}
          searchPanel={false}
          columnChooser={false}
          dataSource={details}
          colAttributes={columns}
        >
          <Column type="buttons" width={120}>
            <Button
              hint={t("Update")}
              icon="edit"
              visible={true}
              onClick={(e) => {
                navigate(`/update-recipe/${e.row.data.ID_TRKEBA}`)
              }}
            />

            <Button name="delete" />
          </Column>
        </MasterTable>
      </FormComponent>
    </>
  )
}

export default ManageRecipes
