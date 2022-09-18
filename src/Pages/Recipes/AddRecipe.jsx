import React, { useCallback, useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import "react-datepicker/dist/react-datepicker.css"
import FormComponent from "../../Web Components/FormComponent/FormComponent"
import SearchBar from "../../Web Components/SearchBar/SearchBar"
import MasterTable from "../../Web Components/MasterTable/MasterTable"
import ButtonComponent from "../../Web Components/ButtonComponent/ButtonComponent"
import { GET_PRODUCTS } from "../../Services/Api/Api"

function AddRecipe() {
  const { t } = useTranslation()

  const defaultValues = useRef({
    number: "",
    name: "",
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

  const data = [
    {
      label: "Number :",
      placeholder: "Number",
      name: "number",
      handleChange,
      value: values["number"],
    },

    {
      label: "Name :",
      placeholder: "Name",
      name: "name",
      handleChange,
      value: values["name"],
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

  const columns = [
    {
      field: "item",
      caption: t("Item"),
      options: itemOptions,
    },
    {
      field: "quantity",
      caption: t("Quantity"),
      dataType: "number",
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
      //   code: 1110000001,
      //   amount: 100,
    },
  ]

  useEffect(() => {
    console.log(values)
  }, [values])

  return (
    <FormComponent title="Add Recipes">
      <SearchBar
        listView
        showButton={false}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        data={data}
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
        editingMode="popup"
        searchPanel={false}
        columnChooser={false}
        // dataSource={tableData}
        colAttributes={columns}
      />

      <ButtonComponent
        style={{ width: "200px", float: "right", marginTop: 20 }}
        onClick={handleSubmit}
        title={"Save"}
      />
    </FormComponent>
  )
}

export default AddRecipe
