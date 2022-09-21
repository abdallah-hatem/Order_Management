import React, { useCallback, useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import "react-datepicker/dist/react-datepicker.css"
import FormComponent from "../../Web Components/FormComponent/FormComponent"
import SearchBar from "../../Web Components/SearchBar/SearchBar"
import MasterTable from "../../Web Components/MasterTable/MasterTable"
import ButtonComponent from "../../Web Components/ButtonComponent/ButtonComponent"
import {
  ADD_INVENORY,
  ADD_INVENTORY,
  ADD_PRODUCTION_ORDER,
  GET_INVENTORIES,
} from "./Api2"
import { GET_RECIPES, GET_RECIPE_BY_ID } from "../Recipes/Api"

function ProductionOrder() {
  const { t } = useTranslation()

  const defaultValues = useRef({
    number: "",
    store: "",
    stock_id: "",
    note: "",
    date: "",
    Production_Subs: [{}],
  })

  const [values, setValues] = useState(defaultValues.current)

  const handleChange = useCallback((e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }, [])

  function handleSubmit() {
    for (const [key, value] of Object.entries(values)) {
      if (!value) {
        alert(t("Fill the inputs"))
      }
    }

    ADD_PRODUCTION_ORDER({
      number: 220919,
      stock_id: 101,
      cust_id: 1,
      date: "2022-09-19",
      Production_Subs: [
        { ID: 0, Production_id: 0, trkeba_id: 1001, QTY: 100, COST: 10000.0 },
      ],
    })
  }

  const [recipes, setRecipes] = useState()
  const [recipeDetails, setRecipeDetails] = useState()
  console.log(recipeDetails)

  // Get Inventories
  useEffect(() => {
    // GET_INVENTORIES().then((data) => console.log(data))
  }, [])

  // Get Recipes
  useEffect(() => {
    GET_RECIPES().then((data) => setRecipes(data))
  }, [])

  // Get Recipes
  useEffect(() => {
    recipes?.map((el) =>
      GET_RECIPE_BY_ID(el.ID).then((data) => setRecipeDetails(data))
    )
  }, [])

  const [startDate, setStartDate] = useState(new Date())

  const dateData = [
    {
      label: "Date :",
      value: "date",
      selected: startDate,
      onChange: setStartDate,
    },
  ]

  const options = [
    {
      label: "Store 1",
      value: "Store 1",
    },
    {
      label: "Store 2",
      value: "Store 2",
    },
    {
      label: "Store 3",
      value: "Store 3",
    },
  ]

  const recipeOptions = recipes?.map((el) => ({ label: el.Name, value: el.ID }))

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

  const data = [
    {
      label: "Number :",
      placeholder: "Number",
      name: "number",
      handleChange,
      value: values["number"],
    },
    {
      label: "Store :",
      placeholder: "Select Option",
      name: "store",
      chooseOptions: true,
      options: options,
      handleChange,
      value: values["store"],
    },
    {
      label: "Note :",
      placeholder: "Note",
      name: "note",
      textArea: true,
      handleChange,
      value: values["note"],
    },
  ]

  const columns = [
    // {
    //   field: "item",
    //   caption: t("Item"),
    //   options: itemOptions,
    // },
    {
      field: "recipe",
      caption: t("Recipe"),
      options: recipeOptions,
    },
    {
      field: "cost",
      caption: t("Cost"),
      dataType: "number",
      allowEditing: false,
    },
    {
      field: "total",
      caption: t("Total"),
      dataType: "number",
      allowEditing: false,
      calculateCellValueHandle: (rowData) => rowData.quantity * rowData.cost,
    },
  ]

  function handleTableData(e) {
    const tableData = e.changes[0].data
    delete tableData.__KEY__

    const cost = recipeDetails?.filter((el) => tableData.recipe === el.ID_TRKEBA)[0].Cost
    

    console.log(tableData)
  }

  useEffect(() => {
    console.log(values)
  }, [values, startDate])

  return (
    <FormComponent title="Production Order">
      <SearchBar
        listView
        showButton={false}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        data={data}
        dateData={dateData}
        startDate={startDate}
        values={values}
        colWidth="10"
        labelWidth="190px"
        width="60%"
      />

      <MasterTable
        allowAdd
        allowDelete
        allowUpdate
        ColoredRows
        searchPanel={false}
        columnChooser={false}
        onSaving={(e) => handleTableData(e)}
        // dataSource={tableValues}
        colAttributes={columns}
        options={options}
        // onCellClick={(e) => console.log(e.value)}
      />

      <ButtonComponent
        style={{ width: "200px", float: "right", marginTop: 20 }}
        onClick={handleSubmit}
        title={"Save"}
      />
    </FormComponent>
  )
}

export default ProductionOrder
