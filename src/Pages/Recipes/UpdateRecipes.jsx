import React, { useCallback, useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import "react-datepicker/dist/react-datepicker.css"
import FormComponent from "../../Web Components/FormComponent/FormComponent"
import SearchBar from "../../Web Components/SearchBar/SearchBar"
import MasterTable from "../../Web Components/MasterTable/MasterTable"
import ButtonComponent from "../../Web Components/ButtonComponent/ButtonComponent"
import { ADD_RECIPE, GET_RECIPE_BY_ID, UPDATE_RECIPE } from "./Api"
import { GET_PRODUCTS } from "../Products/Api"
import { useParams } from "react-router-dom"

function UpdateRecipes() {
  const { t } = useTranslation()
  const { id } = useParams()

  const defaultValues = useRef({
    id: 0,
    number: "",
    name: "",
    iteminfo: [],
  })

  const [values, setValues] = useState(defaultValues.current)
  const [tableValues, setTableValues] = useState([])
  const [products, setProducts] = useState()

  const handleChange = useCallback((e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      id: Number(id),
    }))
  }, [])

  function handleSubmit() {
    // for (const [key, value] of Object.entries(values)) {
    //   if (!value) {
    //     alert(t("Fill the inputs"))
    //   }
    // }

    tableValues.map((el) => {
      delete el.index
      el.__KEY__ && delete el.__KEY__
    })
    setValues((prev) => ({ ...prev, iteminfo: tableValues }))

    UPDATE_RECIPE(values)
  }

  const [fetchedData, setFetchedData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    GET_RECIPE_BY_ID(id)
      .then((data) => setFetchedData(data))
      .then(() => setLoading(false))
    console.log(fetchedData, "fetchedData")
  }, [])

  useEffect(() => {
    GET_PRODUCTS().then((data) => setProducts(data))
  }, [])

  useEffect(() => {
    setValues({
      number: fetchedData[0]?.Num,
      name: fetchedData[0]?.Name,
      iteminfo: [],
    })

    setTableValues(
      fetchedData?.map((el, index) => ({
        index,
        id_item: el.id_item,
        QTY: el.QTY,
        Cost: el.Cost,
      }))
    )
  }, [fetchedData])

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
      field: "id_item",
      caption: t("Item"),
      options: itemOptions,
    },
    {
      field: "QTY",
      caption: t("Quantity"),
      dataType: "number",
    },
    {
      field: "Cost",
      caption: t("Cost"),
      dataType: "number",
    },
    {
      field: "total",
      caption: t("Total"),
      dataType: "number",
      allowEditing: false,
      calculateCellValueHandle: (rowData) => rowData.QTY * rowData.Cost,
    },
  ]

  function handleTableData(e, type) {
    const tableData = !type && e.changes[0]?.key
    !type && delete tableData.__KEY__

    // setTableValues((prev) => [...prev])

    let newTableVals =
      !type &&
      tableValues.map((el) => (tableData.index === el.index ? tableData : el))

    let addRow = tableValues
    setTableValues(type === "add" ? addRow : newTableVals)
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
    console.log(values, "values")
    console.log(tableValues, "tableValues")
  }, [values, tableValues])

  return (
    <FormComponent loading={loading} title="Update Recipes">
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
        onRowInserting={(e) => handleTableData(e, "add")}
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

export default UpdateRecipes
