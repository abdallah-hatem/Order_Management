import React, { useCallback, useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import "react-datepicker/dist/react-datepicker.css"
import FormComponent from "../../Web Components/FormComponent/FormComponent"
import SearchBar from "../../Web Components/SearchBar/SearchBar"
import MasterTable from "../../Web Components/MasterTable/MasterTable"
import ButtonComponent from "../../Web Components/ButtonComponent/ButtonComponent"
import { ADD_RECIPE } from "./Api"
import { GET_PRODUCTS } from "../Products/Api"

function AddRecipe() {
  const { t } = useTranslation()

  const defaultValues = useRef({
    number: "",
    name: "",
    iteminfo: [],
  })

  const [values, setValues] = useState(defaultValues.current)
  const [tableValues, seTableValues] = useState([])
  const [products, setProducts] = useState()

  const handleChange = useCallback((e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }, [])

  function handleSubmit() {
    // for (const [key, value] of Object.entries(values)) {
    //   if (!value) {
    //     alert(t("Fill the inputs"))
    //   }
    // }

    ADD_RECIPE(values)
  }

  useEffect(() => {
    GET_PRODUCTS().then((data) => setProducts(data))
  }, [])

  const data = [
    {
      label: "Number :",
      placeholder: "Number",
      name: "number",
      value: values["number"],
      type: "number",
      handleChange,
    },

    {
      label: "Name :",
      placeholder: "Name",
      name: "name",
      value: values["name"],
      handleChange,
    },
  ]

  const itemOptions = products?.map((el) => ({
    label: el.item_name,
    value: el.id,
  }))

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

    seTableValues((prev) => [...prev, tableData])

    // const newTable = tableValues.map((el) => ({
    //   item_id: el.item,
    //   QTY: el.quantity,
    //   COST: el.cost,
    // }))
    // setValues((prev) => ({ ...prev, iteminfo: newTable }))
  }

  useEffect(() => {
    const newTable = tableValues.map((el) => ({
      item_id: el.item,
      QTY: el.quantity,
      COST: el.cost,
    }))
    setValues((prev) => ({ ...prev, iteminfo: newTable }))
  }, [tableValues])

  useEffect(() => {
    console.log(values)
    console.log(tableValues, "tableValues")
  }, [values])

  return (
    <FormComponent title="Add Recipes">
      <SearchBar
        listView
        showButton={false}
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
        onSaving={(e) => handleTableData(e)}
        dataSource={tableValues}
        searchPanel={false}
        columnChooser={false}
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
