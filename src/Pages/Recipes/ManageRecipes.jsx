import React, { useEffect, useState } from "react"
import FormComponent from "../../Web Components/FormComponent/FormComponent"
import MasterTable from "../../Web Components/MasterTable/MasterTable"
import { GET_PRODUCT_BY_ID } from "../Products/Api"
import { DELETE_RECIPE, GET_RECIPES, GET_RECIPE_BY_ID } from "./Api"

function ManageRecipes() {
  const [data, setData] = useState()
  const [details, setDetails] = useState([])

  const [itemToDelete, setItemToDelete] = useState()

  // GET Recipes
  useEffect(() => {
    async function getRecipeDetails() {
      data?.map((el) =>
        GET_RECIPE_BY_ID(el.ID).then((data) =>
          setDetails((prev) => [...prev, data[0]])
        )
      )
    }

    GET_RECIPES()
      .then((data) => setData(data))
      .then(() => getRecipeDetails())
  }, [])

  // GET Recipe details
  // useEffect(() => {
  //   async function getRecipeDetails() {
  //     data &&
  //       data.map((el) =>
  //         GET_RECIPE_BY_ID(el.ID).then((data) =>
  //           setDetails((prev) => [...prev, data[0]])
  //         )
  //       )
  //   }

  //   getRecipeDetails()
  // }, [])

  // GET Item by ID
  // useEffect(() => {
  //   GET_PRODUCT_BY_ID(details && details[0].ID_TRKEBA).then((data) =>
  //     console.log(data, "item")
  //   )
  // }, [data])

  function handleDelete(e) {
    const id = e.data.ID_TRKEBA
    DELETE_RECIPE(id)
  }

  const itemOptions = [
    {
      label: "Item 1",
      value: "Item 1",
    },
    {
      label: "Item 2",
      value: "Item 2",
    },
    {
      label: "Item 3",
      value: "Item 3",
    },
  ]

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
  }, [data, details])

  return (
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
  )
}

export default ManageRecipes
