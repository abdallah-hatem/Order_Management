import React, { useEffect, useState } from "react"
import FormComponent from "../../Web Components/FormComponent/FormComponent"
import LoadingAnimation from "../../Web Components/LoadingAnimation/LoadingAnimation"
import MasterTable from "../../Web Components/MasterTable/MasterTable"
import { GET_PRODUCTS, GET_PRODUCT_BY_ID } from "../Products/Api"
import { DELETE_RECIPE, GET_RECIPES, GET_RECIPE_BY_ID } from "./Api"

function ManageRecipes() {
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

  // Get Details
  useEffect(() => {
    async function getDetails() {
      data?.map((el) =>
        GET_RECIPE_BY_ID(el.ID).then((data) =>
          setDetails((prev) => [...prev, data[0]])
        )
      )
    }

    getDetails()
  }, [loading])

  // Get Items
  useEffect(() => {
    GET_PRODUCTS().then((data) => setItems(data))
  }, [data])

  function handleDelete(e) {
    const id = e.data.ID_TRKEBA
    DELETE_RECIPE(id)
  }

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
    {
      field: "Num",
      caption: "Number",
    },
    {
      field: "item",
      caption: "Item",
      options: itemOptions,
    },
    {
      field: "QTY",
      caption: "Quantity",
      dataType: "number",
    },
    {
      field: "Cost",
      caption: "Cost",
      dataType: "number",
    },
    {
      field: "total",
      caption: "Total",
      dataType: "number",
      allowEditing: false,
      calculateCellValueHandle: (rowData) => rowData.QTY * rowData.Cost,
    },
  ]

  useEffect(() => {
    console.log(data, "data")
    console.log(details, "details")
    console.log(items, "items")
  }, [data, details, items])

  return !loading ? (
    <>
      <FormComponent title="Manage Recipes">
        <MasterTable
          allowDelete
          allowUpdate
          ColoredRows
          editingMode="popup"
          popupTitle="Update Recipes"
          onRowRemoving={(e) => handleDelete(e)}
          searchPanel={false}
          columnChooser={false}
          dataSource={details}
          colAttributes={columns}
        />
      </FormComponent>
    </>
  ) : (
    <LoadingAnimation />
  )
}

export default ManageRecipes
