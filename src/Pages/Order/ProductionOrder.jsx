import React, { useCallback, useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import "react-datepicker/dist/react-datepicker.css"
import FormComponent from "../../Web Components/FormComponent/FormComponent"
import SearchBar from "../../Web Components/SearchBar/SearchBar"
import MasterTable from "../../Web Components/MasterTable/MasterTable"
import ButtonComponent from "../../Web Components/ButtonComponent/ButtonComponent"
import { GET_PRODUCTS } from "../../Services/Api/Api"

function ProductionOrder() {
  const { t } = useTranslation()

  const defaultValues = useRef({
    number: "",
    store: "",
    note: "",
    date: "",
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
  }

  useEffect(() => {
    // GET_PRODUCTS().then((data) => console.log(data))
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

  const recipeOptions = [
    {
      label: "Recipe 1",
      value: "Recipe 1",
    },
    {
      label: "Recipe 2",
      value: "Recipe 2",
    },
    {
      label: "Recipe 3",
      value: "Recipe 3",
    },
  ]

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
    {
      field: "item",
      caption: t("Item"),
      options: itemOptions,
    },
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
    },
  ]

  const tableData = [
    {
      code: 1110000001,
      //   amount: 100,
    },
  ]

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
        // dataSource={tableData}
        colAttributes={columns}
        options={options}
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
